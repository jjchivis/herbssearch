import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth-guards";

export const metadata: Metadata = { title: "Marketplace admin", robots: { index: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <nav aria-label="Admin" className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[var(--border)] pb-4 text-sm">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--highlight)]">Marketplace admin</span>
        <Link href="/admin" className="hover:text-[var(--highlight)]">
          Overview
        </Link>
        <Link href="/admin/applications" className="hover:text-[var(--highlight)]">
          Seller applications
        </Link>
        <Link href="/admin/sellers" className="hover:text-[var(--highlight)]">
          Sellers
        </Link>
        <Link href="/admin/products" className="hover:text-[var(--highlight)]">
          Products
        </Link>
      </nav>
      <main className="flex flex-col gap-8">{children}</main>
    </div>
  );
}
