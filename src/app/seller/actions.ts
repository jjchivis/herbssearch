"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser, toActor } from "@/lib/auth-guards";
import { MarketplaceError, parseStoreProfile, updateOwnStoreProfile } from "@/lib/marketplace/sellers";
import { parseMoney } from "@/lib/marketplace/products";
import { markShipped, updateShippingRates } from "@/lib/marketplace/orders";

export type ProfileState = { errors?: Record<string, string>; message?: string; saved?: boolean; values?: Record<string, string> };

function echo(form: FormData) {
  return Object.fromEntries([...form.entries()].filter(([k]) => !k.startsWith("$")).map(([k, v]) => [k, String(v)]));
}

export async function updateStoreProfileAction(_prev: ProfileState, form: FormData): Promise<ProfileState> {
  const user = await getCurrentUser();
  if (!user) return { message: "Your session ended. Sign in again." };

  const parsed = parseStoreProfile(form);
  if (!parsed.ok) return { errors: parsed.errors, message: "Please fix the highlighted fields.", values: echo(form) };

  try {
    // The store is found from the signed-in user; the form can't name another store.
    await updateOwnStoreProfile(toActor(user), parsed.data);
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message, values: echo(form) };
    throw e;
  }
  revalidatePath("/seller", "layout");
  return { saved: true };
}

export type ShippingState = { message?: string; saved?: boolean };

export async function updateShippingAction(_prev: ShippingState, form: FormData): Promise<ShippingState> {
  const user = await getCurrentUser();
  if (!user) return { message: "Your session ended. Sign in again." };
  const cents = (k: string) => parseMoney(String(form.get(k) ?? ""));
  const flat = cents("flat") ?? 0;
  const freeOver = cents("freeOver");
  const base = cents("base") ?? 0;
  const perPound = cents("perPound") ?? 0;
  if ([flat, freeOver ?? 0, base, perPound].some((v) => !Number.isFinite(v)))
    return { message: "Enter amounts like 5.95, or leave the free-shipping amount blank." };
  try {
    await updateShippingRates(toActor(user), {
      shippingFlatCents: flat,
      freeShippingOverCents: freeOver,
      calculatedBaseCents: base,
      calculatedPerPoundCents: perPound,
    });
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message };
    throw e;
  }
  revalidatePath("/seller", "layout");
  return { saved: true };
}

export type ShipState = { message?: string };

export async function markShippedAction(_prev: ShipState, form: FormData): Promise<ShipState> {
  const user = await getCurrentUser();
  if (!user) return { message: "Your session ended. Sign in again." };
  try {
    await markShipped(toActor(user), String(form.get("sellerOrderId") ?? ""), String(form.get("carrier") ?? ""), String(form.get("trackingNumber") ?? ""));
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message };
    throw e;
  }
  revalidatePath("/seller/orders");
  return {};
}
