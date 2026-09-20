import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/fade-in";
import { TagList } from "@/components/motion/tag-list";
import { HerbImage } from "@/components/herb-image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const herb = await prisma.herb.findUnique({ where: { id } });
  if (!herb) return {};
  return {
    title: herb.name,
    description: herb.summary,
  };
}

export default async function HerbDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const herb = await prisma.herb.findUnique({ where: { id } });

  if (!herb) {
    notFound();
  }

  const uses = herb.uses.split(",").map((u) => u.trim()).filter(Boolean);
  const properties = herb.properties.split(",").map((p) => p.trim()).filter(Boolean);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-14">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
      >
        ← Back to search
      </Link>

      <FadeIn className="flex flex-col gap-6 border-b border-[var(--border)] pb-8">
        <HerbImage
          src={herb.imageUrl}
          alt={`Botanical illustration of ${herb.name}`}
          className="aspect-[4/5] w-full max-w-sm"
          priority
        />
        <header className="flex flex-col gap-2">
          <span className="w-fit rounded-full bg-[var(--highlight-soft)] px-3 py-1 text-xs tracking-wide text-[var(--highlight)] uppercase">
            {herb.category}
          </span>
          <h1 className="font-serif text-4xl text-[var(--foreground)] sm:text-5xl">
            {herb.name}
          </h1>
          <p className="font-serif text-lg text-[var(--muted)] italic">
            {herb.scientificName}
          </p>
        </header>
      </FadeIn>

      <p className="text-lg leading-relaxed text-[var(--foreground)]">{herb.summary}</p>

      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)] uppercase">
          Traditional uses
        </h2>
        <TagList tags={uses} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)] uppercase">
          Properties
        </h2>
        <TagList tags={properties} />
      </section>

      {herb.cautions && (
        <section className="rounded-xl border border-[var(--caution-border)] bg-[var(--caution-bg)] p-5 text-sm text-[var(--caution)]">
          <h2 className="mb-1 text-xs font-semibold tracking-[0.15em] uppercase">
            Cautions
          </h2>
          <p>{herb.cautions}</p>
        </section>
      )}

      <p className="text-xs text-[var(--muted)]">
        This information is educational and traditional in nature, and is not a
        substitute for professional medical advice.
      </p>
    </main>
  );
}
