import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatPrice, publicProductWhere } from "@/lib/marketplace/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/marketplace/ui";
import { ApothecaryBanner, bannerMuted, bannerText } from "@/components/marketplace/apothecary-banner";

async function getSeller(slug: string) {
  // Suspended stores aren't public.
  return prisma.seller.findFirst({
    where: { slug, status: "ACTIVE" },
    include: {
      products: {
        where: publicProductWhere,
        orderBy: { createdAt: "desc" },
        include: {
          images: { orderBy: { position: "asc" }, take: 1 },
          herbs: { where: { isPrimary: true }, include: { herb: { select: { name: true, imageUrl: true } } } },
        },
      },
    },
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const seller = await getSeller((await params).slug);
  if (!seller) return { title: "Store not found" };
  return { title: seller.storeName, description: seller.description.slice(0, 160) };
}

export default async function SellerPage({ params }: { params: Promise<{ slug: string }> }) {
  const seller = await getSeller((await params).slug);
  if (!seller) notFound();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: seller.storeName }]} />
      <ApothecaryBanner>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#f1e6cc]/70 bg-[#33512c]">
            {seller.logoUrl ? (
              <Image src={seller.logoUrl} alt={`${seller.storeName} logo`} fill sizes="96px" className="object-cover" />
            ) : (
              <span className={`flex h-full items-center justify-center font-serif text-3xl ${bannerMuted}`}>{seller.storeName.slice(0, 1)}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className={`font-serif text-4xl sm:text-5xl ${bannerText}`}>{seller.storeName}</h1>
              {seller.isFoundingSeller && (
                <span className="rounded-full bg-[#f8f2e2]">
                  <Badge kind="FOUNDING" />
                </span>
              )}
            </div>
            <p className={`max-w-2xl whitespace-pre-line text-[15px] leading-relaxed ${bannerMuted}`}>{seller.description}</p>
            {seller.website && (
              <a
                href={seller.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`w-fit text-sm underline underline-offset-2 hover:opacity-80 ${bannerText}`}
              >
                Visit their website
              </a>
            )}
          </div>
        </div>
      </ApothecaryBanner>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Products</h2>
        {seller.products.length === 0 ? (
          <p className="text-[15px] text-[var(--muted)]">No products yet.</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {seller.products.map((p) => {
              const photo = p.images[0]?.url ?? p.herbs[0]?.herb.imageUrl ?? null;
              return (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="flex flex-col gap-2 rounded-lg border border-[var(--border)] p-3 transition-colors hover:border-[var(--highlight)]">
                    <div className="relative aspect-square overflow-hidden rounded">
                      {photo && (
                        <Image
                          src={photo}
                          alt={p.images[0]?.alt ?? `Illustration of ${p.herbs[0]?.herb.name}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 300px"
                          className={p.images[0] ? "object-cover" : "object-contain"}
                        />
                      )}
                    </div>
                    <span className="font-serif text-lg">{p.name}</span>
                    <span className="text-sm text-[var(--muted)]">{formatPrice(p.priceCents)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
