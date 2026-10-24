"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { getCurrentUser, toActor } from "@/lib/auth-guards";
import { MarketplaceError } from "@/lib/marketplace/sellers";
import {
  type ProductErrors,
  addProductImage,
  createProduct,
  parseProduct,
  removeProductImage,
  setSellerLogo,
  submitProductForReview,
  updateProduct,
} from "@/lib/marketplace/products";

export type ProductFormState = {
  errors?: ProductErrors;
  message?: string;
  saved?: boolean;
  values?: Record<string, string | string[]>;
};

// Echo the submission back, because React resets a form after its action runs.
function echo(form: FormData) {
  const values: Record<string, string | string[]> = {};
  for (const key of new Set(form.keys())) {
    if (key.startsWith("$")) continue;
    const all = form.getAll(key).map(String);
    values[key] = key === "herbIds" ? all : all[0];
  }
  return values;
}

async function actor() {
  const user = await getCurrentUser();
  if (!user) throw new MarketplaceError("Your session ended. Sign in again.");
  return toActor(user);
}

function refresh() {
  revalidatePath("/seller", "layout");
  revalidatePath("/admin", "layout");
}

export async function createProductAction(_prev: ProductFormState, form: FormData): Promise<ProductFormState> {
  const parsed = parseProduct(form);
  if (!parsed.ok) return { errors: parsed.errors, message: "Please fix the highlighted fields.", values: echo(form) };
  let id: string;
  try {
    id = (await createProduct(await actor(), parsed.data)).id;
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message, values: echo(form) };
    throw e;
  }
  refresh();
  redirect(`/seller/products/${id}?created=1`);
}

export async function updateProductAction(productId: string, _prev: ProductFormState, form: FormData): Promise<ProductFormState> {
  const parsed = parseProduct(form);
  if (!parsed.ok) return { errors: parsed.errors, message: "Please fix the highlighted fields.", values: echo(form) };
  try {
    await updateProduct(await actor(), productId, parsed.data);
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message, values: echo(form) };
    throw e;
  }
  refresh();
  return { saved: true };
}

export async function submitProductAction(form: FormData) {
  const productId = String(form.get("productId") ?? "");
  try {
    await submitProductForReview(await actor(), productId);
  } catch (e) {
    if (e instanceof MarketplaceError) redirect(`/seller/products/${productId}?error=${encodeURIComponent(e.message)}`);
    throw e;
  }
  refresh();
  redirect(`/seller/products/${productId}?submitted=1`);
}

export async function addProductImageAction(productId: string, image: { url: string; pathname: string }) {
  try {
    // Alt text defaults to the product name.
    await addProductImage(await actor(), productId, { ...image, alt: "" });
  } catch (e) {
    // The upload already happened; remove the orphaned file.
    await del(image.url).catch(() => {});
    if (e instanceof MarketplaceError) return { error: e.message };
    throw e;
  }
  refresh();
  return { error: null };
}

export async function removeProductImageAction(form: FormData) {
  const productId = String(form.get("productId") ?? "");
  try {
    const pathname = await removeProductImage(await actor(), productId, String(form.get("imageId") ?? ""));
    await del(pathname).catch((err) => console.error("Could not delete photo file", err));
  } catch (e) {
    if (e instanceof MarketplaceError) redirect(`/seller/products/${productId}?error=${encodeURIComponent(e.message)}`);
    throw e;
  }
  refresh();
  redirect(`/seller/products/${productId}`);
}

export async function setLogoAction(logo: { url: string; pathname: string }) {
  try {
    const previous = await setSellerLogo(await actor(), logo);
    if (previous) await del(previous).catch(() => {});
  } catch (e) {
    await del(logo.url).catch(() => {});
    if (e instanceof MarketplaceError) return { error: e.message };
    throw e;
  }
  refresh();
  return { error: null };
}
