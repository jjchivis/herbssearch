import Link from "next/link";
import { LeafMark } from "@/components/leaf-mark";
import { AuthNav } from "@/components/marketplace/auth-nav";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <LeafMark className="h-6 w-6 text-[var(--accent)]" />
          <span className="font-serif text-lg tracking-tight text-[var(--foreground)]">
            Discover the Power of Plants
          </span>
        </Link>
        <nav className="flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap text-sm text-[var(--muted)] sm:w-auto sm:gap-6">
          <Link href="/" className="hover:text-[var(--foreground)]">
            Discover
          </Link>
          <Link href="/herbs" className="hover:text-[var(--foreground)]">
            Herbal Library
          </Link>
          <Link href="/topics" className="hover:text-[var(--foreground)]">
            Health Topics
          </Link>
          <Link href="/sources" className="hover:text-[var(--foreground)]">
            Sources
          </Link>
          <Link href="/shop" className="hover:text-[var(--foreground)]">
            Shop
          </Link>
          <AuthNav />
        </nav>
      </div>
    </header>
  );
}
