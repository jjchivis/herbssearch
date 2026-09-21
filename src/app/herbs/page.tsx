import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/fade-in";
import { HerbGrid, HerbCardMotion } from "@/components/motion/herb-grid";
import { HerbImage } from "@/components/herb-image";

export const metadata: Metadata = {
  title: "The Herbal Library",
  description: "Search and browse the full herb database by name, category, or body system.",
};

type SearchParams = { q?: string; category?: string; bodySystem?: string };

function libraryHref(params: { category?: string; q?: string; bodySystem?: string }) {
  const sp = new URLSearchParams();
  if (params.category) sp.set("category", params.category);
  if (params.q) sp.set("q", params.q);
  if (params.bodySystem) sp.set("bodySystem", params.bodySystem);
  const qs = sp.toString();
  return qs ? `/herbs?${qs}` : "/herbs";
}

export default async function HerbLibraryPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q = "", category = "", bodySystem = "" } = await searchParams;

  const [herbs, categories, bodySystems] = await Promise.all([
    prisma.herb.findMany({
      where: {
        AND: [
          category ? { category: { equals: category, mode: "insensitive" } } : {},
          bodySystem
            ? {
                symptoms: {
                  some: { symptom: { bodySystem: { slug: bodySystem } } },
                },
              }
            : {},
          q
            ? {
                OR: [
                  { name: { contains: q, mode: "insensitive" } },
                  { scientificName: { contains: q, mode: "insensitive" } },
                  { uses: { contains: q, mode: "insensitive" } },
                  { summary: { contains: q, mode: "insensitive" } },
                ],
              }
            : {},
        ],
      },
      orderBy: { name: "asc" },
    }),
    prisma.herb.findMany({
      distinct: ["category"],
      select: { category: true },
      orderBy: { category: "asc" },
    }),
    prisma.bodySystem.findMany({ orderBy: { name: "asc" } }),
  ]);

  const isFiltered = Boolean(q || category || bodySystem);
  const activeBodySystem = bodySystems.find((b) => b.slug === bodySystem);

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12 sm:py-16">
          <FadeIn className="flex max-w-2xl flex-col gap-3">
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--highlight)] uppercase">
              The Herbal Library
            </p>
            <h1 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
              Search the full collection
            </h1>
            <p className="text-[15px] text-[var(--muted)]">
              Browse every herb in the database by name, category, or the body system it's
              traditionally associated with.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-3">
            <form method="GET" action="/herbs" className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input type="hidden" name="category" value={category} />
              <input type="hidden" name="bodySystem" value={bodySystem} />
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Search by name, use, or property…"
                className="flex-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--highlight)]"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90"
              >
                Search
              </button>
            </form>

            <div className="flex flex-wrap gap-2">
              <a
                href={libraryHref({ q, bodySystem })}
                className={`font-mono rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                  category
                    ? "border-[var(--border)] text-[var(--muted)] hover:border-[var(--highlight)] hover:text-[var(--foreground)]"
                    : "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                }`}
              >
                All categories
              </a>
              {categories.map((c) => (
                <a
                  key={c.category}
                  href={libraryHref({ category: c.category, q, bodySystem })}
                  className={`font-mono rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                    category === c.category
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                      : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--highlight)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {c.category}
                </a>
              ))}
            </div>

            {activeBodySystem && (
              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                Filtered by body system:
                <span className="font-mono rounded-full bg-[var(--highlight-soft)] px-3 py-1 text-xs uppercase tracking-wide text-[var(--highlight)]">
                  {activeBodySystem.name}
                </span>
                <a href={libraryHref({ q, category })} className="text-xs underline hover:text-[var(--foreground)]">
                  Clear
                </a>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-xl text-[var(--foreground)]">
            {isFiltered ? "Results" : "Full collection"}
          </h2>
          <p className="font-mono text-xs text-[var(--muted)]">
            {herbs.length} herb{herbs.length === 1 ? "" : "s"}
          </p>
        </div>

        <HerbGrid>
          {herbs.map((herb, index) => (
            <HerbCardMotion key={herb.id} href={`/herbs/${herb.id}`}>
              <div className="font-mono flex items-baseline justify-between text-[11px] tracking-wide text-[var(--muted)]">
                <span>No. {String(index + 1).padStart(3, "0")}</span>
                <span className="uppercase text-[var(--highlight)]">{herb.category}</span>
              </div>
              <HerbImage
                src={herb.imageUrl}
                alt={`Botanical illustration of ${herb.name}`}
                className="aspect-[4/3] w-full bg-[var(--surface-2)]"
              />
              <h3 className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--highlight)]">
                {herb.name}
              </h3>
              <p className="font-mono text-xs italic text-[var(--muted)]">
                {herb.scientificName}
              </p>
              <p className="text-sm text-[var(--foreground)]/80">{herb.summary}</p>
            </HerbCardMotion>
          ))}
        </HerbGrid>

        {herbs.length === 0 && (
          <p className="rounded-xl border border-dashed border-[var(--border)] p-10 text-center text-sm text-[var(--muted)]">
            {activeBodySystem
              ? `No herbs are linked to ${activeBodySystem.name} yet — that connection work hasn't been sourced yet.`
              : "No herbs matched your search. Try a different term or category."}
          </p>
        )}
      </section>
    </main>
  );
}
