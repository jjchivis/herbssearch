"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser, toActor } from "@/lib/auth-guards";
import { MarketplaceError, parseStoreProfile, updateOwnStoreProfile } from "@/lib/marketplace/sellers";

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
