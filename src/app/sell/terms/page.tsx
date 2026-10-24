import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Notice } from "@/components/marketplace/ui";
import { TERMS_VERSION } from "@/lib/marketplace/sellers";

export const metadata: Metadata = { title: "Seller terms (draft)", robots: { index: false } };

// Placeholder outline only. It must be replaced with terms reviewed by a lawyer
// before any real seller applies; bump TERMS_VERSION when it changes.
const POINTS = [
  "Stores and products are reviewed and approved before they appear, and can be hidden or suspended at any time.",
  "You own, ship and are responsible for the products you sell, including their safety, labeling and legality where you sell them.",
  "Listings must not claim that a product treats, cures, mitigates or prevents any disease. Supplements must carry the required FDA disclaimer.",
  "Some herbs can't be sold to eat or drink here, including plants the library flags as poisonous.",
  "The marketplace keeps a commission on each sale, shown to you before you list anything. Payments and payouts are handled by our payment provider.",
  "Your listings never change the library's herb information, which stays independent and sourced.",
];

export default function SellerTermsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sell with us", href: "/sell" }, { label: "Seller terms" }]} />
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Seller terms</h1>
      <Notice tone="error">
        Draft ({TERMS_VERSION}). This outline is a placeholder and must be replaced with terms reviewed by a lawyer
        before the marketplace opens.
      </Notice>
      <ul className="flex list-disc flex-col gap-3 pl-5 text-[15px] leading-relaxed text-[var(--foreground)]">
        {POINTS.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </main>
  );
}
