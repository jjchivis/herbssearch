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
          category
            ? { category: { equals: category } }
            : {},
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

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">HerbSearch</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Search and browse a database of herbs, their traditional uses, and properties.
        </p>
      </header>

      <form
        method="GET"
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search by name, use, or property…"
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500 dark:border-gray-700 dark:bg-gray-900"
        />
        <select
          name="category"
          defaultValue={category}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500 dark:border-gray-700 dark:bg-gray-900"
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
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
        >
          Search
        </button>
      </form>

      <p className="text-sm text-gray-500">
        {herbs.length} herb{herbs.length === 1 ? "" : "s"} found
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {herbs.map((herb) => (
          <Link
            key={herb.id}
            href={`/herbs/${herb.id}`}
            className="flex flex-col gap-2 rounded-lg border border-gray-200 p-5 transition hover:border-gray-400 hover:shadow-sm dark:border-gray-800 dark:hover:border-gray-600"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-lg font-medium">{herb.name}</h2>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {herb.category}
              </span>
            </div>
            <p className="text-sm italic text-gray-500">{herb.scientificName}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{herb.summary}</p>
          </Link>
        ))}
      </div>

      {herbs.length === 0 && (
        <p className="rounded-md border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500 dark:border-gray-700">
          No herbs matched your search. Try a different term or category.
        </p>
      )}
    </main>
  );
}
