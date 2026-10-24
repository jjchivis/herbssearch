import type { Metadata } from "next";
import Link from "next/link";
import { requireSeller } from "@/lib/auth-guards";
import { Badge } from "@/components/marketplace/ui";

export const metadata: Metadata = { title: "Seller Dashboard", robots: { index: false } };

// Sections that arrive in later phases are listed (not linked) so sellers can
// see what's coming without hitting empty pages.
const SECTIONS: { label: string; href?: string; phase?: string }[] = [
  { label: "Overview", href: "/seller" },
  { label: "Store profile", href: "/seller/profile" },
  { label: "Products", href: "/seller/products" },
  { label: "Orders", phase: "Coming soon" },
  { label: "Reviews", phase: "Coming soon" },
  { label: "Sales", phase: "Coming soon" },
  { label: "Payouts", phase: "Coming soon" },
];

export default async function SellerLayout({ children }: { children: React.ReactNode }) {
  const { seller } = await requireSeller("/seller");

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12 md:flex-row md:gap-12">
      <aside className="flex shrink-0 flex-col gap-4 md:w-52">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--highlight)]">Seller Dashboard</p>
          <p className="font-serif text-xl text-[var(--foreground)]">{seller.storeName}</p>
          <div className="flex flex-wrap gap-2">
            <Badge kind={seller.status} />
            {seller.isFoundingSeller && <Badge kind="FOUNDING" />}
          </div>
        </div>
        <nav aria-label="Seller Dashboard">
          <ul className="flex gap-4 overflow-x-auto whitespace-nowrap text-sm md:flex-col md:gap-2">
            {SECTIONS.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <Link href={s.href} className="text-[var(--foreground)] hover:text-[var(--highlight)]">
                    {s.label}
                  </Link>
                ) : (
                  <span className="text-[var(--muted)] opacity-70" title={s.phase}>
                    {s.label} <span className="text-xs">· {s.phase}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex min-w-0 flex-1 flex-col gap-8">{children}</main>
    </div>
  );
}
