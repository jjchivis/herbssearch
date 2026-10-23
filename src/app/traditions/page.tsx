import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Healing Traditions",
  description: "Traditional medicine systems, such as Ayurveda and Traditional Chinese Medicine, and the herbs they use.",
};

export default async function TraditionsPage() {
  const traditions = await prisma.traditionSystem.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { herbs: true } } },
  });

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Traditions" }]} />
      <header className="flex max-w-2xl flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Healing traditions</h1>
        <p className="text-[15px] text-[var(--muted)]">
          Traditional medicine systems and the herbs they use. Traditional use shows how a plant has been used, not
          that it works.
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {traditions.map((t) => (
          <li key={t.id}>
            <Link
              href={`/traditions/${t.slug}`}
              className="group flex h-full flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--highlight)]"
            >
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--highlight)]">
                  {t.name}
                </span>
                <span className="font-mono shrink-0 text-xs text-[var(--muted)]">
                  {t._count.herbs} {t._count.herbs === 1 ? "herb" : "herbs"}
                </span>
              </span>
              {t.description && <span className="text-sm text-[var(--muted)]">{t.description}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
