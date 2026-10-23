import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HerbNoteList } from "@/components/herb-note-list";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tradition = await prisma.traditionSystem.findUnique({ where: { slug } });
  if (!tradition) return {};
  return {
    title: `Herbs in ${tradition.name}`,
    description: tradition.description ?? `Herbs used in ${tradition.name}.`,
  };
}

export default async function TraditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tradition = await prisma.traditionSystem.findUnique({
    where: { slug },
    include: { herbs: { include: { herb: true }, orderBy: { herb: { name: "asc" } } } },
  });
  if (!tradition) notFound();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Traditions", href: "/traditions" }, { label: tradition.name }]}
      />
      <header className="flex flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{tradition.name}</h1>
        {tradition.description && (
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">{tradition.description}</p>
        )}
      </header>
      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-xl text-[var(--foreground)]">
          {tradition.herbs.length} {tradition.herbs.length === 1 ? "herb" : "herbs"}
        </h2>
        <p className="text-sm text-[var(--muted)]">These are traditional uses, not proven treatments.</p>
        <HerbNoteList items={tradition.herbs.map((h) => ({ key: h.id, herb: h.herb, notes: h.notes }))} />
      </section>
    </main>
  );
}
