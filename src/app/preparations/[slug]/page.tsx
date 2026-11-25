import { notFound } from "next/navigation";
import { cache } from "react";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HerbNoteList } from "@/components/herb-note-list";

// Each page is built the first time someone visits it, then saved and served
// from Vercel's cache, so visitors don't each wait on the database. Saved
// copies refresh once a day, and every new deployment starts fresh.
export const revalidate = 86400;

export async function generateStaticParams() {
  return [];
}

// generateMetadata and the page both need this record; React's cache()
// makes them share one database lookup per render.
const loadPreparation = cache((slug: string) =>
  prisma.preparation.findUnique({
    where: { slug },
    include: { herbs: { include: { herb: true }, orderBy: { herb: { name: "asc" } } } },
  }),
);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const preparation = await loadPreparation(slug);
  if (!preparation) return {};
  return {
    title: `Herbs Prepared as ${preparation.name}`,
    description: preparation.description ?? undefined,
  };
}

export default async function PreparationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preparation = await loadPreparation(slug);
  if (!preparation) notFound();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Preparations", href: "/preparations" }, { label: preparation.name }]}
      />
      <header className="flex flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{preparation.name}</h1>
        {preparation.description && (
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">{preparation.description}</p>
        )}
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-xl text-[var(--foreground)]">
          {preparation.herbs.length} {preparation.herbs.length === 1 ? "herb" : "herbs"}
        </h2>
        <p className="text-sm text-[var(--muted)]">
          How each herb is prepared this way. Open an herb for its sources and safety information.
        </p>
        <HerbNoteList items={preparation.herbs.map((h) => ({ key: h.id, herb: h.herb, notes: h.notes }))} />
      </section>
    </main>
  );
}
