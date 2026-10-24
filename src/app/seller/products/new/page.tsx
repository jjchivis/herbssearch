import Link from "next/link";
import { requireSeller } from "@/lib/auth-guards";
import { herbOptions } from "@/lib/marketplace/herb-options";
import { Notice } from "@/components/marketplace/ui";
import { createProductAction } from "../actions";
import { EMPTY_PRODUCT, ProductForm } from "../product-form";

export default async function NewProductPage() {
  const { seller } = await requireSeller("/seller/products/new");

  return (
    <>
      <Link href="/seller/products" className="text-sm text-[var(--muted)] hover:text-[var(--highlight)]">
        ← All products
      </Link>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Add product</h1>
        <p className="text-[15px] text-[var(--muted)]">
          It&apos;s saved as a draft. Add photos next, then submit it for review.
        </p>
      </header>
      {seller.status === "ACTIVE" ? (
        <ProductForm action={createProductAction} defaults={EMPTY_PRODUCT} herbs={await herbOptions()} submitLabel="Save draft" />
      ) : (
        <Notice tone="error">Your store is suspended, so you can&apos;t add products right now.</Notice>
      )}
    </>
  );
}
