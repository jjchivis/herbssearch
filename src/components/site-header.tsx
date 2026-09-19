import Link from "next/link";
import { LeafMark } from "@/components/leaf-mark";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <LeafMark className="h-6 w-6 text-[var(--accent)]" />
          <span className="font-serif text-lg tracking-tight text-[var(--foreground)]">
            Discover the Power of Plants
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] sm:flex">
          <Link href="/" className="hover:text-[var(--foreground)]">
            Discover
          </Link>
        </nav>
      </div>
    </header>
  );
}
