import Link from "next/link";
import { prisma } from "@/lib/prisma";

type SearchParams = { q?: string; category?: string };

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q = "", category = "" } = await searchParams;

  const [herbs, categories] = await Promise.all([
    prisma.herb.findMany({
      where: {
        AND: [
          category ? { category: { equals: category } } : {},
          q
            ? {
                OR: [
                  { name: { contains: q } },
                  { scientificName: { contains: q } },
                  { uses: { contains: q } },
                  { summary: { contains: q } },
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
  ]);

  const isFiltered = Boolean(q || category);

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 sm:py-20">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--highlight)] uppercase">
              Discover · Learn · Explore
            </p>
            <h1 className="font-serif text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Discover the Power of Plants
            </h1>
            <p className="text-lg text-[var(--muted)]">
              A botanical reference for researching herbs — their traditional uses,
              properties, and safety, in one considered place.
            </p>
          </div>

          <form
            method="GET"
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search by name, use, or property…"
              className="flex-1 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
            />
            <select
              name="category"
              defaultValue={category}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)]"
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.category} value={c.category}>
                  {c.category}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-xl text-[var(--foreground)]">
            {isFiltered ? "Results" : "All herbs"}
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {herbs.length} herb{herbs.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {herbs.map((herb) => (
            <Link
              key={herb.id}
              href={`/herbs/${herb.id}`}
              className="group flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {herb.name}
                </h3>
                <span className="shrink-0 rounded-full bg-[var(--highlight-soft)] px-3 py-1 text-xs tracking-wide text-[var(--highlight)] uppercase">
                  {herb.category}
                </span>
              </div>
              <p className="font-serif text-sm text-[var(--muted)] italic">
                {herb.scientificName}
              </p>
              <p className="text-sm text-[var(--foreground)]/80">{herb.summary}</p>
            </Link>
          ))}
        </div>

        {herbs.length === 0 && (
          <p className="rounded-xl border border-dashed border-[var(--border)] p-10 text-center text-sm text-[var(--muted)]">
            No herbs matched your search. Try a different term or category.
          </p>
        )}
      </section>
    </main>
  );
}
