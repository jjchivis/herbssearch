import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Health Topics",
  description: "Browse health topics by body system and see which herbs have been traditionally used or studied for each.",
};

export default async function TopicsPage() {
  const bodySystems = await prisma.bodySystem.findMany({
    orderBy: { name: "asc" },
    include: {
      symptoms: { orderBy: { name: "asc" }, include: { _count: { select: { herbs: true } } } },
    },
  });

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Health topics" }]} />
      <header className="flex max-w-2xl flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Health topics</h1>
        <p className="text-[15px] text-[var(--muted)]">
          Each topic lists the herbs people have traditionally used or researchers have studied for it, with a note
          on what the link is based on. Being listed doesn&apos;t mean an herb is a proven treatment.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {bodySystems
          .filter((bs) => bs.symptoms.length > 0)
          .map((bs) => (
            <section key={bs.id} className="flex flex-col gap-3">
              <h2 className="font-serif text-2xl text-[var(--foreground)]">
                <Link href={`/herbs?bodySystem=${bs.slug}`} className="hover:text-[var(--highlight)]">
                  {bs.name}
                </Link>
              </h2>
              <ul className="flex flex-col gap-1.5">
                {bs.symptoms.map((s) => (
                  <li key={s.id} className="flex items-baseline justify-between gap-3 text-sm">
                    <Link href={`/topics/${s.slug}`} className="text-[var(--foreground)] hover:text-[var(--highlight)]">
                      {s.name}
                    </Link>
                    <span className="font-mono shrink-0 text-xs text-[var(--muted)]">
                      {s._count.herbs} {s._count.herbs === 1 ? "herb" : "herbs"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </main>
  );
}
