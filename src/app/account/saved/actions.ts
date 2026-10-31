"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/auth-guards";
import { MarketplaceError } from "@/lib/marketplace/sellers";
import { type SaveTarget, toggleSaved } from "@/lib/marketplace/saved";

export type SaveState = { saved?: boolean; message?: string };

export async function toggleSavedAction(_prev: SaveState, form: FormData): Promise<SaveState> {
  const kind = String(form.get("kind") ?? "");
  const id = String(form.get("id") ?? "");
  const returnTo = String(form.get("returnTo") ?? "/");
  const user = await getCurrentUser();
  // Saving needs an account; come back to the same page afterwards.
  if (!user) redirect(`/sign-in?next=${encodeURIComponent(returnTo.startsWith("/") ? returnTo : "/")}`);
  if (kind !== "herb" && kind !== "product") return { message: "Something went wrong." };
  const target: SaveTarget = kind === "herb" ? { herbId: id } : { productId: id };
  try {
    const saved = await toggleSaved(user.id, target);
    revalidatePath("/account/saved");
    return { saved };
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message };
    throw e;
  }
}
