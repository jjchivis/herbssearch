import { prisma } from "@/lib/prisma";
import { ProductGroup, ShippingClass, type ProductStatus } from "@/generated/prisma/enums";
import { type Actor, MarketplaceError } from "@/lib/marketplace/sellers";

// Product rules. As with sellers, every function takes the acting user, and a
// seller's products are always looked up through the seller that belongs to
// that user, never through an id the browser could change.

export const INGESTIBLE_GROUPS: ProductGroup[] = ["DRIED_HERBS_TEAS", "SUPPLEMENTS_EXTRACTS"];

/**
 * Cannabis rules (cannabis isn't in the library, so it's matched by wording).
 * Substances are blocked in every category, including topicals and other
 * non-ingestibles: CBD and other extracted cannabinoids, THC and synthetic
 * derivatives, and raw or unrefined hemp plant material. Mentions of the plant
 * itself (cannabis, hemp leaves) are blocked only for eat-or-drink products, so
 * prints, books and artwork are allowed. Refined hemp (seeds, hearts, seed oil,
 * protein, fabric, rope, paper) is allowed everywhere.
 */
export const PROHIBITED_TERMS: { label: string; pattern: RegExp; scope: "all" | "ingestible" }[] = [
  { label: "CBD", pattern: /\b(cbd|cannabidiol)\b/i, scope: "all" },
  { label: "cannabinoids", pattern: /\b(cbn|cbg|cbc|thcv|cannabinoids?|cannabinol|cannabigerol)\b/i, scope: "all" },
  { label: "THC", pattern: /\b(thc|tetrahydrocannabinol)\b/i, scope: "all" },
  {
    label: "synthetic cannabinoid derivatives",
    pattern: /\b(delta[\s-]?(8|9|10|11)|d[89]\b|hhc|hexahydrocannabinol|thc[\s-]?[op]|synthetic cannabinoids?)\b/i,
    scope: "all",
  },
  {
    label: "raw or unrefined hemp plant material",
    pattern: /\b(hemp (flowers?|buds?|pre-?rolls?|cigarettes?|smokables?|biomass|trim)|smokable hemp|(raw|unrefined|whole[\s-]plant) hemp)\b/i,
    scope: "all",
  },
  { label: "cannabis", pattern: /\b(cannabis|marijuana|marihuana|hemp (leaf|leaves))\b/i, scope: "ingestible" },
  // Poppy seeds are a legal food. Opium is blocked everywhere; pods, straw and
  // unwashed seeds only for eat-or-drink products (pod and unwashed-seed teas
  // have caused fatal opioid overdoses), so dried pods for decoration are fine.
  // "Opium poppy" is the plant's common name, allowed on prints and artwork.
  { label: "opium", pattern: /\bopium\b(?!\s+popp)/i, scope: "all" },
  { label: "opium poppy", pattern: /\bopium popp/i, scope: "ingestible" },
  { label: "poppy pods, poppy straw or unwashed poppy seeds", pattern: /\b(poppy (pods?|straw|heads?|capsules?)|unwashed poppy seeds?)\b/i, scope: "ingestible" },
];

export function findProhibitedTerm(text: string, ingestible = true): string | null {
  return PROHIBITED_TERMS.find((t) => (ingestible || t.scope === "all") && t.pattern.test(text))?.label ?? null;
}

const CLAIM_VERBS = /\b(cures?|cured|curing|treats?|treating|treatment|prevents?|preventing|prevention|heals?|healing|reverses?|reversing|fights?|fighting|eliminates?|mitigates?|diagnos\w*)\b/i;
const DISEASES =
  /\b(cancer|tumou?rs?|diabetes|diabetic|hypertension|high blood pressure|heart disease|covid|coronavirus|flu|influenza|infections?|hiv|aids|alzheimer'?s|dementia|parkinson'?s|arthritis|depression|anxiety disorder|asthma|kidney disease|liver disease|hepatitis|lupus|multiple sclerosis|autism|adhd|insomnia|obesity|disease|disorder|illness)\b/i;

/**
 * Disease claims aren't allowed in listings (FDA/FTC). "Cure" is blocked on its
 * own; other claim verbs only when a disease word appears too, so "a soothing
 * treat" or "prevents clumping" still pass. Returns a message, or null.
 */
export function findDiseaseClaim(text: string): string | null {
  if (/\b(cures?|cured|curing)\b/i.test(text))
    return 'Listings can\'t say a product cures anything. Please remove "cure".';
  const verb = text.match(CLAIM_VERBS);
  const disease = text.match(DISEASES);
  if (verb && disease)
    return `Listings can't claim to treat, prevent or heal a disease ("${verb[0]}" … "${disease[0]}"). Describe what the product is instead.`;
  return null;
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------

export type ProductInput = {
  name: string;
  description: string;
  group: ProductGroup;
  priceCents: number;
  compareAtPriceCents: number | null;
  sku: string | null;
  inventory: number;
  weightGrams: number | null;
  shippingNote: string | null;
  shippingClass: ShippingClass;
  herbIds: string[];
  primaryHerbId: string | null;
};

export type ProductErrors = Partial<Record<keyof ProductInput | "form", string>>;

function text(v: FormDataEntryValue | null) {
  return typeof v === "string" ? v.trim() : "";
}

/** "$19.99" or "19.99" → 1999 cents; null if blank; NaN if invalid. */
export function parseMoney(v: string): number | null {
  const s = v.replace(/[$,\s]/g, "");
  if (!s) return null;
  if (!/^\d+(\.\d{1,2})?$/.test(s)) return NaN;
  return Math.round(Number(s) * 100);
}

function parseWholeNumber(v: string): number | null {
  if (!v) return null;
  return /^\d+$/.test(v) ? Number(v) : NaN;
}

export function parseProduct(form: FormData): { ok: true; data: ProductInput } | { ok: false; errors: ProductErrors } {
  const errors: ProductErrors = {};
  const herbIds = [...new Set(form.getAll("herbIds").map(String).filter(Boolean))];
  const primary = text(form.get("primaryHerbId")) || herbIds[0] || null;
  const price = parseMoney(text(form.get("price")));
  const compareAt = parseMoney(text(form.get("compareAtPrice")));
  const inventory = parseWholeNumber(text(form.get("inventory")));
  const weight = parseWholeNumber(text(form.get("weightGrams")));

  const data: ProductInput = {
    name: text(form.get("name")),
    description: text(form.get("description")),
    group: text(form.get("group")) as ProductGroup,
    priceCents: price ?? NaN,
    compareAtPriceCents: compareAt,
    sku: text(form.get("sku")) || null,
    inventory: inventory ?? 0,
    weightGrams: weight,
    shippingNote: text(form.get("shippingNote")) || null,
    shippingClass: (text(form.get("shippingClass")) || "STANDARD") as ShippingClass,
    herbIds,
    primaryHerbId: primary && herbIds.includes(primary) ? primary : herbIds[0] ?? null,
  };

  if (data.name.length < 3 || data.name.length > 100) errors.name = "Enter a product name of 3 to 100 characters.";
  if (data.description.length < 30 || data.description.length > 4000)
    errors.description = "Describe the product in 30 to 4,000 characters.";
  if (!Object.values(ProductGroup).includes(data.group)) errors.group = "Choose a category.";
  if (!Number.isFinite(data.priceCents) || data.priceCents < 50 || data.priceCents > 1_000_000)
    errors.priceCents = "Enter a price between $0.50 and $10,000, like 19.99.";
  if (compareAt !== null && (!Number.isFinite(compareAt) || (Number.isFinite(data.priceCents) && compareAt <= data.priceCents)))
    errors.compareAtPriceCents = "The \"compare at\" price must be higher than the price, or left blank.";
  if (inventory !== null && (!Number.isFinite(inventory) || inventory > 100_000))
    errors.inventory = "Enter how many you have in stock, as a whole number.";
  if (weight !== null && (!Number.isFinite(weight) || weight > 100_000)) errors.weightGrams = "Enter the weight in grams, as a whole number.";
  if (!Object.values(ShippingClass).includes(data.shippingClass)) errors.shippingClass = "Choose how this product ships.";
  else if (data.shippingClass === "CALCULATED" && !data.weightGrams && !errors.weightGrams)
    errors.weightGrams = "Enter the packed weight in grams; shipping for this product is priced by weight.";
  if (data.sku && data.sku.length > 64) errors.sku = "Keep the SKU under 64 characters.";
  if (data.shippingNote && data.shippingNote.length > 500) errors.shippingNote = "Keep the shipping note under 500 characters.";
  if (data.herbIds.length === 0) errors.herbIds = "Link the product to at least one herb from the library.";
  if (data.herbIds.length > 5) errors.herbIds = "Link at most 5 herbs.";

  if (!errors.name && !errors.description) {
    const claim = findDiseaseClaim(`${data.name}\n${data.description}`);
    if (claim) errors.description = claim;
  }
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

// ---------------------------------------------------------------------------
// Checks that need the database
// ---------------------------------------------------------------------------

async function checkHerbs(data: ProductInput): Promise<string | null> {
  const herbs = await prisma.herb.findMany({
    where: { id: { in: data.herbIds } },
    select: { id: true, name: true, restriction: { select: { reason: true } } },
  });
  if (herbs.length !== data.herbIds.length) return "One of the linked herbs wasn't found. Please pick it again.";
  const ingestible = INGESTIBLE_GROUPS.includes(data.group);
  const prohibited = findProhibitedTerm(`${data.name}\n${data.description}`, ingestible);
  if (prohibited)
    return ingestible
      ? `Products with ${prohibited} can't be sold to eat or drink here. Refined hemp (seeds, seed oil, protein) is allowed.`
      : `Listings with ${prohibited} can't be sold here, in any category. Prints, books and artwork of the plant are allowed.`;
  if (ingestible) {
    const restricted = herbs.find((h) => h.restriction);
    if (restricted)
      return `${restricted.name} can't be sold to eat or drink here (${restricted.restriction!.reason}) Prints, books, seeds and other non-ingestible goods are allowed.`;
  }
  return null;
}

async function ownActiveSeller(actor: Actor) {
  const seller = await prisma.seller.findUnique({ where: { userId: actor.id } });
  if (!seller) throw new MarketplaceError("You don't have a store.");
  if (seller.status !== "ACTIVE") throw new MarketplaceError("Your store is suspended. Contact us to restore it.");
  return seller;
}

/** The actor's own product, or an error. A product id from another store simply isn't found. */
async function ownProduct(actor: Actor, productId: string) {
  const seller = await ownActiveSeller(actor);
  const product = await prisma.product.findFirst({
    where: { id: productId, sellerId: seller.id },
    include: { herbs: true, images: { orderBy: { position: "asc" } } },
  });
  if (!product) throw new MarketplaceError("Product not found.");
  return { seller, product };
}

function slugify(name: string) {
  return (
    name
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "product"
  );
}

async function uniqueProductSlug(base: string) {
  for (let n = 1; ; n++) {
    const slug = n === 1 ? base : `${base}-${n}`;
    if (!(await prisma.product.findUnique({ where: { slug } }))) return slug;
  }
}

/** The product's own columns (herb links are stored separately). */
function productFields(data: ProductInput) {
  const { name, description, group, priceCents, compareAtPriceCents, sku, inventory, weightGrams, shippingNote, shippingClass } = data;
  return { name, description, group, priceCents, compareAtPriceCents, sku, inventory, weightGrams, shippingNote, shippingClass };
}

function herbRows(data: ProductInput) {
  return data.herbIds.map((herbId) => ({ herbId, isPrimary: herbId === data.primaryHerbId }));
}

// ---------------------------------------------------------------------------
// Seller actions
// ---------------------------------------------------------------------------

export async function createProduct(actor: Actor, data: ProductInput) {
  const seller = await ownActiveSeller(actor);
  const problem = await checkHerbs(data);
  if (problem) throw new MarketplaceError(problem);
  return prisma.product.create({
    data: {
      ...productFields(data),
      sellerId: seller.id,
      slug: await uniqueProductSlug(`${seller.slug}-${slugify(data.name)}`),
      status: "DRAFT",
      herbs: { create: herbRows(data) },
    },
  });
}

const CONTENT_FIELDS = ["name", "description", "group"] as const;

/**
 * Saves the actor's own product. Changing price, stock, SKU, weight or
 * shipping keeps a live product live; changing what the product is (name,
 * description, category, linked herbs) sends it back for review.
 */
export async function updateProduct(actor: Actor, productId: string, data: ProductInput) {
  const { product } = await ownProduct(actor, productId);
  if (product.status === "HIDDEN") throw new MarketplaceError("This product was hidden by an admin and can't be edited. Contact us.");
  const problem = await checkHerbs(data);
  if (problem) throw new MarketplaceError(problem);

  const oldHerbs = product.herbs.map((h) => `${h.herbId}:${h.isPrimary}`).sort().join();
  const newHerbs = herbRows(data).map((h) => `${h.herbId}:${h.isPrimary}`).sort().join();
  const contentChanged = CONTENT_FIELDS.some((f) => product[f] !== data[f]) || oldHerbs !== newHerbs;

  const status: ProductStatus = product.status === "LIVE" && contentChanged ? "PENDING_REVIEW" : product.status;
  return prisma.$transaction(async (tx) => {
    await tx.productHerb.deleteMany({ where: { productId } });
    return tx.product.update({
      where: { id: productId },
      data: {
        ...productFields(data),
        status,
        submittedAt: status === "PENDING_REVIEW" && product.status === "LIVE" ? new Date() : product.submittedAt,
        herbs: { create: herbRows(data) },
      },
    });
  });
}

export async function submitProductForReview(actor: Actor, productId: string) {
  const { product } = await ownProduct(actor, productId);
  if (product.status !== "DRAFT" && product.status !== "REJECTED")
    throw new MarketplaceError("Only drafts and products that weren't approved can be submitted.");
  return prisma.product.update({ where: { id: productId }, data: { status: "PENDING_REVIEW", submittedAt: new Date() } });
}

/** Blob pathnames are scoped per seller and product; anything else is refused. */
export function imagePathPrefix(sellerId: string, productId: string) {
  return `sellers/${sellerId}/products/${productId}/`;
}

export function logoPathPrefix(sellerId: string) {
  return `sellers/${sellerId}/logo/`;
}

export function isOurBlobUrl(url: string, pathname: string) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && u.hostname.endsWith(".public.blob.vercel-storage.com") && u.pathname === `/${pathname}`;
  } catch {
    return false;
  }
}

const MAX_IMAGES = 8;

export async function addProductImage(actor: Actor, productId: string, image: { url: string; pathname: string; alt: string }) {
  const { seller, product } = await ownProduct(actor, productId);
  if (!image.pathname.startsWith(imagePathPrefix(seller.id, productId)) || !isOurBlobUrl(image.url, image.pathname))
    throw new MarketplaceError("That upload doesn't belong to this product.");
  if (product.images.length >= MAX_IMAGES) throw new MarketplaceError(`A product can have at most ${MAX_IMAGES} photos.`);
  const alt = image.alt.trim().slice(0, 200) || product.name;
  return prisma.$transaction([
    prisma.productImage.create({
      data: { productId, url: image.url, pathname: image.pathname, alt, position: product.images.length },
    }),
    // A new photo on a live product goes back for review.
    ...(product.status === "LIVE"
      ? [prisma.product.update({ where: { id: productId }, data: { status: "PENDING_REVIEW", submittedAt: new Date() } })]
      : []),
  ]);
}

/** Removes the photo record; returns the blob pathname so the caller can delete the file. */
export async function removeProductImage(actor: Actor, productId: string, imageId: string) {
  const { product } = await ownProduct(actor, productId);
  const image = product.images.find((i) => i.id === imageId);
  if (!image) throw new MarketplaceError("Photo not found.");
  await prisma.productImage.delete({ where: { id: imageId } });
  return image.pathname;
}

export async function setSellerLogo(actor: Actor, logo: { url: string; pathname: string }) {
  const seller = await ownActiveSeller(actor);
  if (!logo.pathname.startsWith(logoPathPrefix(seller.id)) || !isOurBlobUrl(logo.url, logo.pathname))
    throw new MarketplaceError("That upload doesn't belong to your store.");
  const previous = seller.logoUrl;
  await prisma.seller.update({ where: { id: seller.id }, data: { logoUrl: logo.url } });
  return previous;
}

// ---------------------------------------------------------------------------
// Admin review
// ---------------------------------------------------------------------------

function assertAdmin(actor: Actor) {
  if (actor.role !== "admin") throw new MarketplaceError("Only an admin can do this.");
}

export async function approveProduct(actor: Actor, productId: string) {
  assertAdmin(actor);
  const updated = await prisma.product.updateMany({
    where: { id: productId, status: "PENDING_REVIEW" },
    data: { status: "LIVE", reviewNote: null, reviewedById: actor.id, reviewedAt: new Date() },
  });
  if (updated.count !== 1) throw new MarketplaceError("This product isn't waiting for review.");
}

export async function rejectProduct(actor: Actor, productId: string, note: string) {
  assertAdmin(actor);
  if (!note.trim()) throw new MarketplaceError("Add a note so the seller knows what to change.");
  const updated = await prisma.product.updateMany({
    where: { id: productId, status: "PENDING_REVIEW" },
    data: { status: "REJECTED", reviewNote: note.trim(), reviewedById: actor.id, reviewedAt: new Date() },
  });
  if (updated.count !== 1) throw new MarketplaceError("This product isn't waiting for review.");
}

export async function setProductHidden(actor: Actor, productId: string, hidden: boolean, note: string | null) {
  assertAdmin(actor);
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw new MarketplaceError("Product not found.");
  if (hidden && product.status === "HIDDEN") return;
  if (!hidden && product.status !== "HIDDEN") throw new MarketplaceError("This product isn't hidden.");
  // Unhiding sends it back through review rather than straight to live.
  await prisma.product.update({
    where: { id: productId },
    data: {
      status: hidden ? "HIDDEN" : "PENDING_REVIEW",
      reviewNote: hidden ? note : product.reviewNote,
      reviewedById: actor.id,
      reviewedAt: new Date(),
    },
  });
}

/** Admins can correct which herbs a product is linked to. */
export async function setProductHerbsAsAdmin(actor: Actor, productId: string, herbIds: string[], primaryHerbId: string | null) {
  assertAdmin(actor);
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw new MarketplaceError("Product not found.");
  const ids = [...new Set(herbIds)];
  if (ids.length === 0 || ids.length > 5) throw new MarketplaceError("Link 1 to 5 herbs.");
  const problem = await checkHerbs({ ...product, herbIds: ids, primaryHerbId } as ProductInput);
  if (problem) throw new MarketplaceError(problem);
  const primary = primaryHerbId && ids.includes(primaryHerbId) ? primaryHerbId : ids[0];
  await prisma.$transaction([
    prisma.productHerb.deleteMany({ where: { productId } }),
    prisma.productHerb.createMany({ data: ids.map((herbId) => ({ productId, herbId, isPrimary: herbId === primary })) }),
  ]);
}

// ---------------------------------------------------------------------------
// Public visibility
// ---------------------------------------------------------------------------

/** The only products shoppers can see: live, from an active store. */
export const publicProductWhere = { status: "LIVE", seller: { status: "ACTIVE" } } as const;

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

export const FDA_DISCLAIMER =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";
