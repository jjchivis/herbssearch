import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Plant Compounds",
  description: "Natural compounds found in the herbs in this library, and which herbs contain them.",
};

export default async function CompoundsPage() {
  const compounds = await prisma.constituent.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { herbs: true } } },
  });

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compounds" }]} />
      <header className="flex max-w-2xl flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Plant compounds</h1>
        <p className="text-[15px] text-[var(--muted)]">
          Natural compounds recorded for the herbs in this library. Choose one to see which herbs contain it.
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {compounds.map((c) => (
          <li key={c.id} className="flex items-baseline justify-between gap-3 border-b border-[var(--border)] py-2 text-sm">
            <Link href={`/compounds/${c.slug}`} className="text-[var(--foreground)] hover:text-[var(--highlight)]">
              {c.name}
              {c.type && <span className="ml-2 text-xs text-[var(--muted)]">{c.type}</span>}
            </Link>
            <span className="font-mono shrink-0 text-xs text-[var(--muted)]">
              {c._count.herbs} {c._count.herbs === 1 ? "herb" : "herbs"}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
