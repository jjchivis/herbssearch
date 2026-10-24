import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FDA_DISCLAIMER, formatPrice, publicProductWhere } from "@/lib/marketplace/products";
import { SAFETY_GLANCE } from "@/lib/plain-language";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge, buttonClass } from "@/components/marketplace/ui";

async function getProduct(slug: string) {
  // Only live products from active stores are public; anything else is a 404.
  return prisma.product.findFirst({
    where: { slug, ...publicProductWhere },
    include: {
      seller: true,
      images: { orderBy: { position: "asc" } },
      herbs: {
        orderBy: { isPrimary: "desc" },
        include: { herb: { include: { safetyRecords: { select: { category: true } } } } },
      },
    },
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = await getProduct((await params).slug);
  if (!product) return { title: "Product not found" };
  return { title: `${product.name} · ${product.seller.storeName}`, description: product.description.slice(0, 160) };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = await getProduct((await params).slug);
  if (!product) notFound();

  const primary = product.herbs[0]?.herb;
  // Until the seller adds photos, show the main herb's library illustration.
  const photos =
    product.images.length > 0
      ? product.images.map((i) => ({ url: i.url, alt: i.alt, illustration: false }))
      : primary?.imageUrl
        ? [{ url: primary.imageUrl, alt: `Library illustration of ${primary.name}`, illustration: true }]
        : [];
  const inStock = product.inventory > 0;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(primary ? [{ label: primary.name, href: `/herbs/${primary.id}` }] : []),
          { label: product.name },
        ]}
      />

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          {photos.length > 0 ? (
            <>
              {photos[0].illustration ? (
                // Library illustrations vary in shape, so show them at their natural proportions.
                <Image
                  src={photos[0].url}
                  alt={photos[0].alt}
                  width={760}
                  height={760}
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="h-auto w-full rounded-lg border border-[var(--border)]"
                />
              ) : (
                <div className="relative aspect-square overflow-hidden rounded-lg border border-[var(--border)]">
                  <Image src={photos[0].url} alt={photos[0].alt} fill priority sizes="(max-width: 768px) 100vw, 480px" className="object-cover" />
                </div>
              )}
              {photos[0].illustration && (
                <p className="text-xs text-[var(--muted)]">Illustration of {primary?.name} from our library. The seller hasn&apos;t added photos yet.</p>
              )}
              {photos.length > 1 && (
                <ul className="grid grid-cols-4 gap-2">
                  {photos.slice(1).map((p) => (
                    <li key={p.url} className="relative aspect-square overflow-hidden rounded border border-[var(--border)]">
                      <Image src={p.url} alt={p.alt} fill sizes="120px" className="object-cover" />
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : null}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl leading-tight text-[var(--foreground)]">{product.name}</h1>
            <p className="flex flex-wrap items-center gap-2 text-[15px] text-[var(--muted)]">
              Sold by{" "}
              <Link href={`/sellers/${product.seller.slug}`} className="underline underline-offset-2 hover:text-[var(--highlight)]">
                {product.seller.storeName}
              </Link>
              {product.seller.isFoundingSeller && <Badge kind="FOUNDING" />}
            </p>
          </div>
          <p className="flex items-baseline gap-3">
            <span className="font-serif text-3xl text-[var(--foreground)]">{formatPrice(product.priceCents)}</span>
            {product.compareAtPriceCents && (
              <span className="text-[var(--muted)] line-through">{formatPrice(product.compareAtPriceCents)}</span>
            )}
          </p>
          <p className={`text-sm ${inStock ? "text-[var(--accent)]" : "text-[var(--caution)]"}`}>{inStock ? "In stock" : "Out of stock"}</p>
          <div className="flex flex-col gap-1">
            <button type="button" disabled className={buttonClass}>
              Add to cart
            </button>
            <p className="text-xs text-[var(--muted)]">Checkout is coming soon.</p>
          </div>
          {product.shippingNote && <p className="text-sm text-[var(--muted)]">Shipping: {product.shippingNote}</p>}
          <p className="whitespace-pre-line text-[15px] leading-relaxed text-[var(--foreground)]">{product.description}</p>
          {product.group === "SUPPLEMENTS_EXTRACTS" && (
            <p className="rounded-lg border border-[var(--border)] p-3 text-xs leading-relaxed text-[var(--muted)]">*{FDA_DISCLAIMER}</p>
          )}
        </div>
      </div>

      {product.herbs.length > 0 && (
        <section className="flex flex-col gap-4 border-t border-[var(--border)] pt-8">
          <h2 className="font-serif text-2xl text-[var(--foreground)]">About the herbs in this product</h2>
          <p className="text-[15px] text-[var(--muted)]">
            Our library information is independent of the seller. Read the safety notes before buying.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {product.herbs.map(({ herb }) => {
              const notes = SAFETY_GLANCE.map((g) => ({
                ...g,
                count: herb.safetyRecords.filter((s) => s.category === g.category).length,
              })).filter((g) => g.count > 0);
              return (
                <li key={herb.id} className="flex flex-col gap-2 rounded-lg border border-[var(--border)] p-4">
                  <Link href={`/herbs/${herb.id}`} className="font-serif text-xl hover:text-[var(--highlight)]">
                    {herb.name}
                  </Link>
                  <span className="text-sm italic text-[var(--muted)]">{herb.scientificName}</span>
                  {notes.length > 0 ? (
                    <p className="text-sm text-[var(--caution)]">
                      Safety notes on: {notes.map((n) => n.label.toLowerCase()).join(", ")}.{" "}
                      <Link href={`/herbs/${herb.id}#safety`} className="underline underline-offset-2">
                        Read them
                      </Link>
                    </p>
                  ) : (
                    <p className="text-sm text-[var(--muted)]">
                      Our sources don&apos;t list specific safety notes; that doesn&apos;t mean it&apos;s safe for everyone.
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
}
