"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCurrentUser, toActor } from "@/lib/auth-guards";
import { prisma } from "@/lib/prisma";
import { applicationDecisionEmail, sendEmail } from "@/lib/email";
import {
  MarketplaceError,
  approveApplication,
  rejectApplication,
  setFoundingSeller,
  setSellerStatus,
} from "@/lib/marketplace/sellers";
import {
  approveProduct,
  rejectProduct,
  setProductGroupAsAdmin,
  setProductHerbsAsAdmin,
  setProductHidden,
} from "@/lib/marketplace/products";
import { refundSellerOrder, setCommissionBps } from "@/lib/marketplace/orders";
import { setShopifySeller, syncShopifyAsAdmin } from "@/lib/marketplace/shopify";
import type { ProductGroup } from "@/generated/prisma/enums";

// Every action re-checks the signed-in user on the server, and the
// marketplace functions check again that the actor is an admin.

async function adminActor() {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") throw new MarketplaceError("Only an admin can do this.");
  return toActor(user);
}

function field(form: FormData, name: string) {
  const v = form.get(name);
  return typeof v === "string" ? v.trim() : "";
}

async function attempt(back: string, done: string, fn: () => Promise<unknown>) {
  try {
    await fn();
  } catch (e) {
    if (e instanceof MarketplaceError) redirect(`${back}?error=${encodeURIComponent(e.message)}`);
    throw e;
  }
  revalidatePath("/admin", "layout");
  revalidatePath("/sell");
  redirect(`${back}?done=${encodeURIComponent(done)}`);
}

// The decision is saved first; a failed email is logged but doesn't undo it,
// and the applicant can always see the outcome on the Sell page.
async function notifyApplicant(applicationId: string, approved: boolean, note: string | null) {
  const a = await prisma.sellerApplication.findUnique({ where: { id: applicationId } });
  if (!a) return;
  const siteUrl = process.env.BETTER_AUTH_URL ?? "";
  try {
    await sendEmail({ to: a.contactEmail, ...applicationDecisionEmail(a.storeName, approved, note, siteUrl) });
  } catch (e) {
    console.error("Could not email the applicant", e);
  }
}

export async function approveApplicationAction(form: FormData) {
  const id = field(form, "applicationId");
  const note = field(form, "note") || null;
  await attempt(`/admin/applications/${id}`, "Approved. The store has been created and the seller emailed.", async () => {
    await approveApplication(await adminActor(), id, note);
    await notifyApplicant(id, true, note);
  });
}

export async function rejectApplicationAction(form: FormData) {
  const id = field(form, "applicationId");
  const note = field(form, "note");
  await attempt(`/admin/applications/${id}`, "Not approved. The applicant was emailed your note.", async () => {
    await rejectApplication(await adminActor(), id, note);
    await notifyApplicant(id, false, note);
  });
}

export async function setSellerStatusAction(form: FormData) {
  const status = field(form, "status") === "SUSPENDED" ? "SUSPENDED" : "ACTIVE";
  await attempt("/admin/sellers", status === "SUSPENDED" ? "Seller suspended." : "Seller reactivated.", async () =>
    setSellerStatus(await adminActor(), field(form, "sellerId"), status),
  );
}

export async function setFoundingSellerAction(form: FormData) {
  const on = field(form, "founding") === "on";
  await attempt("/admin/sellers", on ? "Founding Seller badge added." : "Founding Seller badge removed.", async () =>
    setFoundingSeller(await adminActor(), field(form, "sellerId"), on),
  );
}

// ---------------------------------------------------------------------------
// Product review
// ---------------------------------------------------------------------------

export async function approveProductAction(form: FormData) {
  const id = field(form, "productId");
  await attempt(`/admin/products/${id}`, "Approved. The product is live.", async () => approveProduct(await adminActor(), id));
}

export async function rejectProductAction(form: FormData) {
  const id = field(form, "productId");
  await attempt(`/admin/products/${id}`, "Not approved. The seller can see your note.", async () =>
    rejectProduct(await adminActor(), id, field(form, "note")),
  );
}

export async function setProductHiddenAction(form: FormData) {
  const id = field(form, "productId");
  const hide = field(form, "hidden") === "on";
  await attempt(`/admin/products/${id}`, hide ? "Hidden from shoppers." : "Unhidden. It's back in the review queue.", async () =>
    setProductHidden(await adminActor(), id, hide, field(form, "note") || null),
  );
}

export async function setProductHerbsAction(form: FormData) {
  const id = field(form, "productId");
  const herbIds = form.getAll("herbIds").map(String).filter(Boolean);
  await attempt(`/admin/products/${id}`, "Herb links updated.", async () =>
    setProductHerbsAsAdmin(await adminActor(), id, herbIds, field(form, "primaryHerbId") || null),
  );
}

export async function setProductGroupAction(form: FormData) {
  const id = field(form, "productId");
  await attempt(`/admin/products/${id}`, "Category updated.", async () =>
    setProductGroupAsAdmin(await adminActor(), id, field(form, "group") as ProductGroup),
  );
}

// ---------------------------------------------------------------------------
// Shopify
// ---------------------------------------------------------------------------

export async function setShopifySellerAction(form: FormData) {
  await attempt("/admin/settings", "Saved. Shopify products will be listed under that store.", async () =>
    setShopifySeller(await adminActor(), field(form, "sellerId") || null),
  );
}

export async function syncShopifyAction() {
  const actor = await adminActor();
  let message: string;
  try {
    const s = await syncShopifyAsAdmin(actor);
    message =
      `Synced from Shopify: ${s.created} new (waiting for review), ${s.updated} updated, ` +
      `${s.sentToReview} sent back to review, ${s.blocked} blocked for banned wording, ${s.removed} hidden as no longer in Shopify.`;
  } catch (e) {
    const error =
      e instanceof MarketplaceError ? e.message : "Couldn't reach Shopify. Check the Shopify settings in Vercel and try again.";
    if (!(e instanceof MarketplaceError)) console.error("[shopify sync]", e);
    redirect(`/admin/settings?error=${encodeURIComponent(error)}`);
  }
  revalidatePath("/admin", "layout");
  revalidatePath("/shop");
  redirect(`/admin/settings?done=${encodeURIComponent(message)}`);
}

export async function refundSellerOrderAction(form: FormData) {
  const orderId = field(form, "orderId");
  const sellerOrderId = field(form, "sellerOrderId");
  await attempt(`/admin/orders/${orderId}`, "Refunded. The store's payout for it was taken back.", async () =>
    refundSellerOrder(await adminActor(), sellerOrderId),
  );
}

export async function setCommissionAction(form: FormData) {
  const percent = Number(field(form, "percent"));
  await attempt("/admin/settings", "Commission saved. It applies to new orders.", async () =>
    setCommissionBps(await adminActor(), Number.isFinite(percent) ? Math.round(percent * 100) : NaN),
  );
}
