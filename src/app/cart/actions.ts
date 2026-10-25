"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/auth-guards";
import { stripeConfigured } from "@/lib/stripe";
import { MarketplaceError } from "@/lib/marketplace/sellers";
import { addToCart, setCartQuantity, startCheckout } from "@/lib/marketplace/orders";

export type CartState = { message?: string };

function quantityOf(form: FormData) {
  const n = Number(form.get("quantity"));
  return Number.isInteger(n) ? n : NaN;
}

export async function addToCartAction(_prev: CartState, form: FormData): Promise<CartState> {
  const productId = String(form.get("productId") ?? "");
  const slug = String(form.get("slug") ?? "");
  const user = await getCurrentUser();
  // Signing in is required to buy; come back to the product afterwards.
  if (!user) redirect(`/sign-in?next=${encodeURIComponent(`/products/${slug}`)}`);
  try {
    await addToCart(user.id, productId, quantityOf(form));
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message };
    throw e;
  }
  revalidatePath("/cart");
  redirect("/cart");
}

export async function updateCartAction(form: FormData) {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/cart");
  await setCartQuantity(user.id, String(form.get("productId") ?? ""), quantityOf(form));
  revalidatePath("/cart");
}

export async function checkoutAction(): Promise<CartState> {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/cart");
  if (!stripeConfigured()) return { message: "Checkout isn't switched on yet. Please try again soon." };
  let url: string;
  try {
    url = await startCheckout({ id: user.id, email: user.email });
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message };
    console.error("[checkout]", e);
    return { message: "We couldn't start checkout. Please try again in a moment." };
  }
  redirect(url);
}
