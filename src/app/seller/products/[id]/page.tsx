import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireSeller } from "@/lib/auth-guards";
import { prisma } from "@/lib/prisma";
import { herbOptions } from "@/lib/marketplace/herb-options";
import { imagePathPrefix } from "@/lib/marketplace/products";
import { ImageUpload } from "@/components/marketplace/image-upload";
import { Badge, Notice, buttonClass } from "@/components/marketplace/ui";
import { addProductImageAction, removeProductImageAction, submitProductAction, updateProductAction } from "../actions";
import { ProductForm } from "../product-form";

function dollars(cents: number | null) {
  return cents === null ? "" : (cents / 100).toFixed(2);
}

export default async function EditProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ created?: string; submitted?: string; error?: string }>;
}) {
  const [{ id }, flags] = await Promise.all([params, searchParams]);
  const { seller } = await requireSeller(`/seller/products/${id}`);
  // Scoped to this seller: another store's product id is simply "not found".
  const product = await prisma.product.findFirst({
    where: { id, sellerId: seller.id },
    include: { herbs: true, images: { orderBy: { position: "asc" } } },
  });
  if (!product) notFound();

  const editable = seller.status === "ACTIVE" && product.status !== "HIDDEN";
  const canSubmit = editable && (product.status === "DRAFT" || product.status === "REJECTED");
  const addImage = addProductImageAction.bind(null, product.id);

  return (
    <>
      <Link href="/seller/products" className="text-sm text-[var(--muted)] hover:text-[var(--highlight)]">
        ← All products
      </Link>
      <header className="flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{product.name}</h1>
        <Badge kind={product.status} />
      </header>

      {flags.created && <Notice tone="success">Draft saved. Add photos if you have them, then submit it for review.</Notice>}
      {flags.submitted && <Notice tone="success">Submitted. We&apos;ll review it and let you know.</Notice>}
      {flags.error && <Notice tone="error">{flags.error}</Notice>}
      {product.status === "REJECTED" && product.reviewNote && (
        <Notice>
          <p className="font-medium">This product wasn&apos;t approved.</p>
          <p>Our note: {product.reviewNote}</p>
          <p className="mt-1">Make the changes and submit it again.</p>
        </Notice>
      )}
      {product.status === "HIDDEN" && (
        <Notice tone="error">This product was hidden by an admin{product.reviewNote ? `: ${product.reviewNote}` : ""}. Contact us.</Notice>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Photos</h2>
        {product.images.length === 0 ? (
          <p className="text-[15px] text-[var(--muted)]">
            No photos yet. Until you add one, shoppers see the main herb&apos;s library illustration.
          </p>
        ) : (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {product.images.map((img) => (
              <li key={img.id} className="flex flex-col gap-2">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-[var(--border)]">
                  <Image src={img.url} alt={img.alt} fill sizes="200px" className="object-cover" />
                </div>
                {editable && (
                  <form action={removeProductImageAction}>
                    <input type="hidden" name="productId" value={product.id} />
                    <input type="hidden" name="imageId" value={img.id} />
                    <button type="submit" className="text-xs text-[var(--muted)] underline underline-offset-2 hover:text-[var(--caution)]">
                      Remove
                    </button>
                  </form>
                )}
              </li>
            ))}
          </ul>
        )}
        {editable && product.images.length < 8 && (
          <ImageUpload
            label="Add a photo"
            pathPrefix={imagePathPrefix(seller.id, product.id)}
            payload={{ kind: "product", productId: product.id }}
            onUploaded={addImage}
          />
        )}
      </section>

      <section className="flex flex-col gap-4 border-t border-[var(--border)] pt-6">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Details</h2>
        <ProductForm
          action={updateProductAction.bind(null, product.id)}
          herbs={await herbOptions()}
          submitLabel="Save changes"
          disabled={!editable}
          liveNote={product.status === "LIVE"}
          defaults={{
            name: product.name,
            description: product.description,
            group: product.group,
            price: dollars(product.priceCents),
            compareAtPrice: dollars(product.compareAtPriceCents),
            sku: product.sku ?? "",
            inventory: String(product.inventory),
            weightGrams: product.weightGrams === null ? "" : String(product.weightGrams),
            shippingNote: product.shippingNote ?? "",
            shippingClass: product.shippingClass,
            herbIds: product.herbs.map((h) => h.herbId),
            primaryHerbId: product.herbs.find((h) => h.isPrimary)?.herbId ?? null,
          }}
        />
      </section>

      {canSubmit && (
        <section className="flex flex-col gap-3 border-t border-[var(--border)] pt-6">
          <h2 className="font-serif text-2xl text-[var(--foreground)]">Ready?</h2>
          <p className="text-[15px] text-[var(--muted)]">Save your changes first. Once submitted, we review the listing before it goes live.</p>
          <form action={submitProductAction}>
            <input type="hidden" name="productId" value={product.id} />
            <button type="submit" className={buttonClass}>
              Submit for review
            </button>
          </form>
        </section>
      )}
      {!canSubmit && product.status === "PENDING_REVIEW" && (
        <p className="border-t border-[var(--border)] pt-6 text-[15px] text-[var(--muted)]">Waiting for review. You&apos;ll see the result here.</p>
      )}
    </>
  );
}
