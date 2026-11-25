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
const loadCompound = cache((slug: string) =>
  prisma.constituent.findUnique({
    where: { slug },
    include: { herbs: { include: { herb: true }, orderBy: { herb: { name: "asc" } } } },
  }),
);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const compound = await loadCompound(slug);
  if (!compound) return {};
  return {
    title: `Herbs Containing ${compound.name}`,
    description: compound.description ?? `Herbs in this library that contain ${compound.name}.`,
  };
}

export default async function CompoundPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const compound = await loadCompound(slug);
  if (!compound) notFound();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Compounds", href: "/compounds" }, { label: compound.name }]}
      />
      <header className="flex flex-col gap-3">
        {compound.type && (
          <p className="font-mono text-xs tracking-[0.15em] text-[var(--highlight)] uppercase">{compound.type}</p>
        )}
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{compound.name}</h1>
        {compound.description && (
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">{compound.description}</p>
        )}
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-xl text-[var(--foreground)]">
          Found in {compound.herbs.length} {compound.herbs.length === 1 ? "herb" : "herbs"}
        </h2>
        <HerbNoteList items={compound.herbs.map((h) => ({ key: h.id, herb: h.herb, notes: h.notes }))} />
      </section>
    </main>
  );
}
