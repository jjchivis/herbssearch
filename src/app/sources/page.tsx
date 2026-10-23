import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TIER_LABELS, TIER_ORDER } from "@/lib/plain-language";

export const metadata: Metadata = {
  title: "Sources",
  description: "Every source cited in the library, grouped by type, with the herbs that cite it.",
};

const TIER_NOTES: Record<string, string> = {
  TIER_1_GOVERNMENT: "Health agencies such as the NIH, the European Medicines Agency and national poison centers.",
  TIER_2_SYSTEMATIC_REVIEW: "Reviews that pool many studies, and clinical trials in people.",
  TIER_3_PEER_REVIEWED: "Individual studies published in scientific journals, including lab and animal research.",
  TIER_4_TRADITIONAL_TEXT: "Historical herbals and traditional medicine references.",
  TIER_5_SECONDARY: "General health and herbal references, such as encyclopedias and herb schools.",
};

export default async function SourcesPage() {
  const sources = await prisma.source.findMany({
    orderBy: { title: "asc" },
    include: {
      evidenceEntries: { select: { herb: { select: { id: true, name: true } } } },
      safetyRecords: { select: { herb: { select: { id: true, name: true } } } },
    },
  });

  const withHerbs = sources
    .map((s) => {
      const herbs = new Map<string, string>();
      for (const r of [...s.evidenceEntries, ...s.safetyRecords]) herbs.set(r.herb.id, r.herb.name);
      return { ...s, herbs: [...herbs].map(([id, name]) => ({ id, name })).sort((a, b) => a.name.localeCompare(b.name)) };
    })
    .filter((s) => s.herbs.length > 0);

  const groups = TIER_ORDER.map((tier) => ({ tier, sources: withHerbs.filter((s) => s.tier === tier) })).filter(
    (g) => g.sources.length > 0
  );

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sources" }]} />
      <header className="flex max-w-2xl flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Sources</h1>
        <p className="text-[15px] text-[var(--muted)]">
          Every statement in the library is linked to the source it came from. These are all {withHerbs.length}{" "}
          sources, grouped by type, with the herbs that cite each one.
        </p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {groups.map((g) => (
            <li key={g.tier}>
              <a
                href={`#${g.tier.toLowerCase()}`}
                className="font-mono inline-block rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)] hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
              >
                {TIER_LABELS[g.tier]} · {g.sources.length}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {groups.map((g) => (
        <section key={g.tier} id={g.tier.toLowerCase()} className="scroll-mt-6 flex flex-col gap-3">
          <h2 className="font-serif text-2xl text-[var(--foreground)]">
            {TIER_LABELS[g.tier]} <span className="font-mono text-sm text-[var(--muted)]">({g.sources.length})</span>
          </h2>
          <p className="text-sm text-[var(--muted)]">{TIER_NOTES[g.tier]}</p>
          <ul className="flex flex-col gap-3">
            {g.sources.map((s) => (
              <li key={s.id} className="border-b border-[var(--border)] pb-3 text-sm">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--highlight)]"
                  >
                    {s.title}
                  </a>
                ) : (
                  <span className="text-[var(--foreground)]">{s.title}</span>
                )}
                {(s.journal || s.organization) && (
                  <span className="text-[var(--muted)]"> — {s.journal ?? s.organization}</span>
                )}
                {s.publicationDate && (
                  <span className="font-mono text-xs text-[var(--muted)]"> · {s.publicationDate.getUTCFullYear()}</span>
                )}
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Cited on:{" "}
                  {s.herbs.map((h, i) => (
                    <span key={h.id}>
                      {i > 0 && ", "}
                      <Link href={`/herbs/${h.id}`} className="hover:text-[var(--highlight)]">
                        {h.name}
                      </Link>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
