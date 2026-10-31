import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/auth-guards";
import { savedItems } from "@/lib/marketplace/saved";
import { formatPrice } from "@/lib/marketplace/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SaveButton } from "@/components/marketplace/save-button";

export const metadata: Metadata = { title: "Saved items", robots: { index: false } };

export default async function SavedItemsPage() {
  const user = await requireUser("/account/saved");
  const { herbs, products } = await savedItems(user.id);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Your account", href: "/account" }, { label: "Saved items" }]} />
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Saved items</h1>

      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Products</h2>
        {products.length === 0 ? (
          <p className="text-[15px] text-[var(--muted)]">
            No saved products yet. Tap <span aria-hidden="true">♡</span> Save on any product in the{" "}
            <Link href="/shop" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              shop
            </Link>
            .
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {products.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
                <Link href={`/products/${p.slug}`} className="flex flex-col hover:text-[var(--highlight)]">
                  <span>{p.name}</span>
                  <span className="text-sm text-[var(--muted)]">
                    {p.seller.storeName} · {formatPrice(p.priceCents)}
                  </span>
                </Link>
                <SaveButton kind="product" id={p.id} returnTo="/account/saved" initiallySaved />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Herbs</h2>
        {herbs.length === 0 ? (
          <p className="text-[15px] text-[var(--muted)]">
            No saved herbs yet. Tap <span aria-hidden="true">♡</span> Save on any herb in the{" "}
            <Link href="/herbs" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              Herbal Library
            </Link>
            .
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {herbs.map((h) => (
              <li key={h.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
                <Link href={`/herbs/${h.id}`} className="flex flex-col hover:text-[var(--highlight)]">
                  <span>{h.name}</span>
                  <span className="font-serif text-sm text-[var(--muted)] italic">{h.scientificName}</span>
                </Link>
                <SaveButton kind="herb" id={h.id} returnTo="/account/saved" initiallySaved />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
