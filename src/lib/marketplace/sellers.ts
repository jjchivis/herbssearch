import { prisma } from "@/lib/prisma";
import { BusinessType, ProductGroup, SellerStatus } from "@/generated/prisma/enums";

// Seller application and store rules. Every function takes the acting user
// explicitly, so permissions are enforced here (and tested) regardless of which
// page or action calls them.

export type Actor = { id: string; role: "customer" | "admin" };

/** Bump when the seller terms change, so we know which version each seller accepted. */
export const TERMS_VERSION = "draft-2026-10-24";

export class MarketplaceError extends Error {}

function assertAdmin(actor: Actor) {
  if (actor.role !== "admin") throw new MarketplaceError("Only an admin can do this.");
}

// ---------------------------------------------------------------------------
// Input validation
// ---------------------------------------------------------------------------

export type ApplicationInput = {
  storeName: string;
  legalBusinessName: string;
  businessType: BusinessType;
  contactEmail: string;
  phone: string | null;
  website: string | null;
  country: string;
  region: string | null;
  description: string;
  plannedGroups: ProductGroup[];
};

export type FieldErrors = Partial<Record<keyof ApplicationInput | "terms", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function optional(value: FormDataEntryValue | null) {
  return text(value) || null;
}

function validWebsite(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function parseApplication(form: FormData):
  | { ok: true; data: ApplicationInput }
  | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};
  const data: ApplicationInput = {
    storeName: text(form.get("storeName")),
    legalBusinessName: text(form.get("legalBusinessName")),
    businessType: text(form.get("businessType")) as BusinessType,
    contactEmail: text(form.get("contactEmail")).toLowerCase(),
    phone: optional(form.get("phone")),
    website: optional(form.get("website")),
    country: text(form.get("country")),
    region: optional(form.get("region")),
    description: text(form.get("description")),
    plannedGroups: form.getAll("plannedGroups").map(String) as ProductGroup[],
  };

  if (data.storeName.length < 2 || data.storeName.length > 60) errors.storeName = "Enter a store name of 2 to 60 characters.";
  if (!data.legalBusinessName) errors.legalBusinessName = "Enter the legal name of the person or business.";
  if (!Object.values(BusinessType).includes(data.businessType)) errors.businessType = "Choose a business type.";
  if (!EMAIL.test(data.contactEmail)) errors.contactEmail = "Enter a valid email address.";
  if (data.website && !validWebsite(data.website)) errors.website = "Enter a full web address, starting with https://";
  if (!data.country) errors.country = "Enter your country.";
  if (data.description.length < 30 || data.description.length > 2000)
    errors.description = "Describe your store in 30 to 2,000 characters.";
  if (data.plannedGroups.length === 0 || data.plannedGroups.some((g) => !Object.values(ProductGroup).includes(g)))
    errors.plannedGroups = "Choose at least one kind of product.";
  if (form.get("terms") !== "on") errors.terms = "You need to agree to the seller terms.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

// ---------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------

export async function submitApplication(actor: Actor, data: ApplicationInput) {
  const [seller, pending] = await Promise.all([
    prisma.seller.findUnique({ where: { userId: actor.id } }),
    prisma.sellerApplication.findFirst({ where: { userId: actor.id, status: "PENDING" } }),
  ]);
  if (seller) throw new MarketplaceError("You already have a store.");
  if (pending) throw new MarketplaceError("You already have an application waiting for review.");

  return prisma.sellerApplication.create({
    data: { ...data, userId: actor.id, termsVersion: TERMS_VERSION, termsAcceptedAt: new Date() },
  });
}

function slugify(name: string) {
  return (
    name
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 50) || "store"
  );
}

async function uniqueSlug(name: string) {
  const base = slugify(name);
  for (let n = 1; ; n++) {
    const slug = n === 1 ? base : `${base}-${n}`;
    if (!(await prisma.seller.findUnique({ where: { slug } }))) return slug;
  }
}

export async function approveApplication(actor: Actor, applicationId: string, note: string | null) {
  assertAdmin(actor);
  const application = await prisma.sellerApplication.findUnique({ where: { id: applicationId } });
  if (!application) throw new MarketplaceError("Application not found.");
  if (application.status !== "PENDING") throw new MarketplaceError("This application has already been reviewed.");
  if (await prisma.seller.findUnique({ where: { userId: application.userId } }))
    throw new MarketplaceError("This applicant already has a store.");

  const slug = await uniqueSlug(application.storeName);
  return prisma.$transaction(async (tx) => {
    // Guard against a double-click approving twice.
    const updated = await tx.sellerApplication.updateMany({
      where: { id: applicationId, status: "PENDING" },
      data: { status: "APPROVED", reviewNote: note, reviewedById: actor.id, reviewedAt: new Date() },
    });
    if (updated.count !== 1) throw new MarketplaceError("This application has already been reviewed.");
    return tx.seller.create({
      data: {
        userId: application.userId,
        applicationId,
        storeName: application.storeName,
        slug,
        description: application.description,
        website: application.website,
        contactEmail: application.contactEmail,
      },
    });
  });
}

export async function rejectApplication(actor: Actor, applicationId: string, note: string) {
  assertAdmin(actor);
  if (!note.trim()) throw new MarketplaceError("Add a note explaining why, so the applicant knows what to change.");
  const updated = await prisma.sellerApplication.updateMany({
    where: { id: applicationId, status: "PENDING" },
    data: { status: "REJECTED", reviewNote: note.trim(), reviewedById: actor.id, reviewedAt: new Date() },
  });
  if (updated.count !== 1) throw new MarketplaceError("This application isn't waiting for review.");
}

// ---------------------------------------------------------------------------
// Sellers
// ---------------------------------------------------------------------------

export async function setSellerStatus(actor: Actor, sellerId: string, status: SellerStatus) {
  assertAdmin(actor);
  return prisma.seller.update({ where: { id: sellerId }, data: { status } });
}

export async function setFoundingSeller(actor: Actor, sellerId: string, isFoundingSeller: boolean) {
  assertAdmin(actor);
  return prisma.seller.update({ where: { id: sellerId }, data: { isFoundingSeller } });
}

export type StoreProfileInput = {
  storeName: string;
  description: string;
  website: string | null;
  contactEmail: string;
};

export function parseStoreProfile(form: FormData):
  | { ok: true; data: StoreProfileInput }
  | { ok: false; errors: Partial<Record<keyof StoreProfileInput, string>> } {
  const data: StoreProfileInput = {
    storeName: text(form.get("storeName")),
    description: text(form.get("description")),
    website: optional(form.get("website")),
    contactEmail: text(form.get("contactEmail")).toLowerCase(),
  };
  const errors: Partial<Record<keyof StoreProfileInput, string>> = {};
  if (data.storeName.length < 2 || data.storeName.length > 60) errors.storeName = "Enter a store name of 2 to 60 characters.";
  if (data.description.length < 30 || data.description.length > 2000)
    errors.description = "Describe your store in 30 to 2,000 characters.";
  if (data.website && !validWebsite(data.website)) errors.website = "Enter a full web address, starting with https://";
  if (!EMAIL.test(data.contactEmail)) errors.contactEmail = "Enter a valid email address.";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

/** Updates the actor's own store only; there is no seller id to tamper with. */
export async function updateOwnStoreProfile(actor: Actor, data: StoreProfileInput) {
  const seller = await prisma.seller.findUnique({ where: { userId: actor.id } });
  if (!seller) throw new MarketplaceError("You don't have a store.");
  if (seller.status !== "ACTIVE") throw new MarketplaceError("Your store is suspended. Contact us to restore it.");
  return prisma.seller.update({ where: { id: seller.id }, data });
}
