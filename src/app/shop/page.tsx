import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PAGE_SIZE, SORTS, parseShopQuery, searchProducts } from "@/lib/marketplace/catalog";
import { publicProductWhere } from "@/lib/marketplace/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/marketplace/product-card";
import { PRODUCT_CATEGORY_LABELS, buttonClass, inputClass } from "@/components/marketplace/ui";

export const metadata: Metadata = {
  title: "Shop",
  description: "Herbs, teas, supplements and botanical goods from independent sellers, linked to the library's herb research.",
};

type SP = Record<string, string | string[] | undefined>;

export default async function ShopPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const query = parseShopQuery(sp);

  const [{ products, total }, herbsWithProducts] = await Promise.all([
    searchProducts(query),
    // Only herbs that currently have live products, for the herb filter.
    prisma.herb.findMany({
      where: { products: { some: { product: publicProductWhere } } },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
  ]);
  const activeHerb = query.herbId ? herbsWithProducts.find((h) => h.id === query.herbId) : null;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) if (typeof v === "string" && v && k !== "page") params.set(k, v);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/shop?${qs}` : "/shop";
  };
  // Filters other than the search words, so the panel opens when one is in use.
  const activeFilters = [query.group, query.herbId, query.minCents, query.maxCents, query.inStock || null, query.founding || null].filter(
    (v) => v !== null && v !== undefined && v !== "",
  ).length;
  const dollars = (cents: number | null) => (cents === null ? "" : (cents / 100).toFixed(2));

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <header className="relative isolate flex min-h-64 flex-col justify-end gap-2 overflow-hidden rounded-xl p-6 sm:min-h-80 sm:p-10">
        <Image
          src="/shop/apothecary.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="-z-10 object-cover object-[50%_40%]"
        />
        {/* Darkens the lower part so the text stays readable over the picture. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1f2a17]/90 via-[#1f2a17]/45 to-transparent" />
        <h1 className="font-serif text-4xl text-[#f8f2e2] sm:text-5xl">Shop</h1>
        <p className="max-w-2xl text-[15px] leading-relaxed text-[#f1e6cc]">
          Herbs, teas, supplements and botanical goods from independent sellers, each linked to the herbs in our library. Our herb
          information isn&apos;t influenced by sellers.
        </p>
      </header>

      <form method="GET" action="/shop" className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            name="q"
            defaultValue={query.q}
            placeholder="Search products or herbs, e.g. ashwagandha"
            aria-label="Search products"
            className={`${inputClass} rounded-full`}
          />
          <button type="submit" className={buttonClass}>
            Search
          </button>
        </div>
        <details open={activeFilters > 0} className="group flex flex-col">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--highlight)] [&::-webkit-details-marker]:hidden">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M3 5h14M6 10h8M8.5 15h3" />
            </svg>
            Filters{activeFilters > 0 && ` (${activeFilters})`}
            <span aria-hidden="true" className="text-xs transition group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-4 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
              <select name="category" defaultValue={query.group ?? ""} aria-label="Category" className={`${inputClass} col-span-2 md:col-span-1`}>
                <option value="">All categories</option>
                {Object.entries(PRODUCT_CATEGORY_LABELS).map(([v, l]) => (
                  <option key={v} value={v}>
                    {l}
                  </option>
                ))}
              </select>
              <select name="herb" defaultValue={activeHerb?.id ?? ""} aria-label="Herb" className={`${inputClass} col-span-2 md:col-span-1`}>
                <option value="">All herbs</option>
                {herbsWithProducts.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
              <input name="min" inputMode="decimal" placeholder="Min $" defaultValue={dollars(query.minCents)} aria-label="Minimum price" className={inputClass} />
              <input name="max" inputMode="decimal" placeholder="Max $" defaultValue={dollars(query.maxCents)} aria-label="Maximum price" className={inputClass} />
              <select name="sort" defaultValue={query.sort} aria-label="Sort by" className={`${inputClass} col-span-2 md:col-span-2`}>
                {Object.entries(SORTS)
                  .filter(([k]) => k !== "match" || query.q)
                  .map(([k, l]) => (
                    <option key={k} value={k}>
                      {l}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="instock" value="1" defaultChecked={query.inStock} className="h-4 w-4 accent-[var(--accent)]" />
                In stock only
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="founding" value="1" defaultChecked={query.founding} className="h-4 w-4 accent-[var(--accent)]" />
                Founding Sellers only
              </label>
              <Link href="/shop" className="text-[var(--muted)] underline underline-offset-2 hover:text-[var(--highlight)]">
                Clear filters
              </Link>
            </div>
          </div>
        </details>
      </form>

      <section className="flex flex-col gap-4">
        <p className="text-sm text-[var(--muted)]">
          {total} {total === 1 ? "product" : "products"}
          {query.q && ` matching “${query.q}”`}
          {activeHerb && ` linked to ${activeHerb.name}`}
        </p>
        {products.length === 0 ? (
          <p className="text-[15px] text-[var(--muted)]">
            No products match yet.{" "}
            <Link href="/sell" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              Sell with us
            </Link>
            .
          </p>
        ) : (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {products.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        )}
        {pages > 1 && (
          <nav aria-label="Pages" className="flex items-center justify-center gap-4 text-sm">
            {query.page > 1 && (
              <Link href={pageHref(query.page - 1)} className="underline underline-offset-2">
                ← Previous
              </Link>
            )}
            <span className="text-[var(--muted)]">
              Page {query.page} of {pages}
            </span>
            {query.page < pages && (
              <Link href={pageHref(query.page + 1)} className="underline underline-offset-2">
                Next →
              </Link>
            )}
          </nav>
        )}
      </section>
    </main>
  );
}
