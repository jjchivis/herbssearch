import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 py-3">
        {/* The logo's lettering is dark green and brown, so in dark mode it sits on a cream backing. */}
        <Link href="/" className="dark:rounded-2xl dark:bg-[#fbf6e8] dark:px-4 dark:py-2">
          <Image
            src="/brand/herbssearch-logo.png"
            alt="HerbsSearch — Discover the Power of Plants"
            width={650}
            height={420}
            priority
            className="h-14 w-auto"
          />
        </Link>
        <nav className="flex max-w-full items-center gap-5 overflow-x-auto whitespace-nowrap text-sm text-[var(--muted)] sm:gap-6">
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
        </nav>
      </div>
    </header>
  );
}
