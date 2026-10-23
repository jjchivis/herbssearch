import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HerbNoteList } from "@/components/herb-note-list";
import { BODY_SYSTEM_NOTES } from "@/lib/plain-language";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = await prisma.symptom.findUnique({ where: { slug } });
  if (!topic) return {};
  return {
    title: `${topic.name}: Herbs Used and Studied`,
    description: topic.description ?? `Herbs traditionally used or studied for ${topic.name.toLowerCase()}.`,
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = await prisma.symptom.findUnique({
    where: { slug },
    include: {
      bodySystem: true,
      herbs: { include: { herb: true }, orderBy: { herb: { name: "asc" } } },
    },
  });
  if (!topic) notFound();

  const caution = topic.bodySystem ? BODY_SYSTEM_NOTES[topic.bodySystem.slug] : undefined;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-14">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Health topics", href: "/topics" }, { label: topic.name }]}
      />
      <header className="flex flex-col gap-3">
        {topic.bodySystem && (
          <p className="font-mono text-xs tracking-[0.15em] text-[var(--highlight)] uppercase">{topic.bodySystem.name}</p>
        )}
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{topic.name}</h1>
        {topic.description && <p className="text-[15px] leading-relaxed text-[var(--muted)]">{topic.description}</p>}
      </header>

      {caution && (
        <p
          role="note"
          className="rounded-xl border border-[var(--caution-border)] bg-[var(--caution-bg)] p-4 text-sm leading-relaxed text-[var(--caution)]"
        >
          {caution}
        </p>
      )}

      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-xl text-[var(--foreground)]">
          {topic.herbs.length} {topic.herbs.length === 1 ? "herb" : "herbs"}
        </h2>
        <p className="text-sm text-[var(--muted)]">
          Each note says whether the link comes from traditional use or research, and what the research found.
        </p>
        <HerbNoteList items={topic.herbs.map((h) => ({ key: h.id, herb: h.herb, notes: h.notes }))} />
      </section>
    </main>
  );
}
