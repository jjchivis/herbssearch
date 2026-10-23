import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Preparations",
  description: "Teas, tinctures, capsules and other ways herbs are commonly prepared, and which herbs are prepared each way.",
};

export default async function PreparationsPage() {
  const preparations = await prisma.preparation.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { herbs: true } } },
  });

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Preparations" }]} />
      <header className="flex max-w-2xl flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Preparations</h1>
        <p className="text-[15px] text-[var(--muted)]">
          The common ways herbs are prepared or sold. Choose one to see which herbs are prepared that way, according
          to our sources.
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {preparations
          .filter((p) => p._count.herbs > 0)
          .map((p) => (
            <li key={p.id}>
              <Link
                href={`/preparations/${p.slug}`}
                className="group flex h-full flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--highlight)]"
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--highlight)]">
                    {p.name}
                  </span>
                  <span className="font-mono shrink-0 text-xs text-[var(--muted)]">
                    {p._count.herbs} {p._count.herbs === 1 ? "herb" : "herbs"}
                  </span>
                </span>
                {p.description && <span className="text-sm text-[var(--muted)]">{p.description}</span>}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
