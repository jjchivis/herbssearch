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
