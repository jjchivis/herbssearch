import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

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
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-12">
      <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
        ← Back to search
      </Link>

      <header className="flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">{herb.name}</h1>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            {herb.category}
          </span>
        </div>
        <p className="text-sm italic text-gray-500">{herb.scientificName}</p>
      </header>

      <p className="text-gray-700 dark:text-gray-300">{herb.summary}</p>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Common uses
        </h2>
        <ul className="flex flex-wrap gap-2">
          {uses.map((use) => (
            <li
              key={use}
              className="rounded-full border border-gray-200 px-3 py-1 text-sm dark:border-gray-700"
            >
              {use}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Properties
        </h2>
        <ul className="flex flex-wrap gap-2">
          {properties.map((property) => (
            <li
              key={property}
              className="rounded-full border border-gray-200 px-3 py-1 text-sm dark:border-gray-700"
            >
              {property}
            </li>
          ))}
        </ul>
      </section>

      {herb.cautions && (
        <section className="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide">Cautions</h2>
          <p>{herb.cautions}</p>
        </section>
      )}
    </main>
  );
}
