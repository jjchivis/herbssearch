import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/fade-in";
import { HerbGrid, HerbCardMotion } from "@/components/motion/herb-grid";
import { HerbImage } from "@/components/herb-image";

type SearchParams = { q?: string; category?: string };

function categoryHref(category: string, q: string) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (q) params.set("q", q);
  const qs = params.toString();
  return qs ? `/?${qs}` : "/";
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q = "", category = "" } = await searchParams;

  const [herbs, categories, featured] = await Promise.all([
    prisma.herb.findMany({
      where: {
        AND: [
          category ? { category: { equals: category, mode: "insensitive" } } : {},
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
    prisma.herb.findFirst({
      where: { name: "Echinacea" },
    }),
  ]);

  const isFiltered = Boolean(q || category);

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 sm:py-20">
          <FadeIn className="flex max-w-2xl flex-col gap-4">
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--highlight)] uppercase">
              A field guide, made searchable
            </p>
            <h1 className="font-serif text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Discover the Power of Plants
            </h1>
            <p className="text-lg text-[var(--muted)]">
              A botanical reference for researching herbs — their traditional uses,
              properties, and safety, in one considered place.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-3">
            <form
              method="GET"
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input type="hidden" name="category" value={category} />
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
                href={categoryHref("", q)}
                className={`font-mono rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                  category
                    ? "border-[var(--border)] text-[var(--muted)] hover:border-[var(--highlight)] hover:text-[var(--foreground)]"
                    : "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                }`}
              >
                All specimens
              </a>
              {categories.map((c) => (
                <a
                  key={c.category}
                  href={categoryHref(c.category, q)}
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
          </FadeIn>
        </div>
      </section>

      {!isFiltered && featured && (
        <section className="mx-auto w-full max-w-5xl px-6 pt-12">
          <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-gradient-to-b from-[var(--band)] to-[var(--band-2)] p-6 sm:grid-cols-[220px_1fr] sm:p-10">
            <HerbImage
              src={featured.imageUrl}
              alt={`Botanical illustration of ${featured.name}`}
              className="aspect-[4/5] w-full max-w-[220px]"
            />
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs tracking-[0.14em] text-[var(--highlight)] uppercase">
                Specimen of the day
              </p>
              <h2 className="font-serif text-3xl italic text-[var(--on-band)]">
                {featured.name}
              </h2>
              <p className="font-mono text-sm italic text-[var(--on-band-soft)]">
                {featured.scientificName}
              </p>
              <p className="max-w-prose text-[15px] text-[var(--on-band-soft)]">
                {featured.summary}
              </p>
              <span className="font-mono mt-2 w-fit rounded-full border border-[var(--on-band-soft)] px-4 py-2 text-xs uppercase tracking-wide text-[var(--on-band)]">
                {featured.category}
              </span>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-xl text-[var(--foreground)]">
            {isFiltered ? "Results" : "Specimen index"}
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
            No herbs matched your search. Try a different term or category.
          </p>
        )}
      </section>
    </main>
  );
}
