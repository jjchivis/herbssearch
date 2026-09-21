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

const EVIDENCE_LABELS: Record<string, string> = {
  TRADITIONAL: "Traditional Evidence",
  PRECLINICAL: "Preclinical Evidence",
  HUMAN_RESEARCH: "Human Research",
};

const EVIDENCE_ORDER = ["TRADITIONAL", "PRECLINICAL", "HUMAN_RESEARCH"];

const SAFETY_LABELS: Record<string, string> = {
  CONTRAINDICATION: "Contraindications",
  ADVERSE_EFFECT: "Adverse Effects",
  DRUG_INTERACTION: "Drug Interactions",
  PREGNANCY: "Pregnancy",
  BREASTFEEDING: "Breastfeeding",
  SURGERY: "Surgery",
  TOXICITY: "Toxicity",
  DOSAGE: "Dosage",
  ALLERGY: "Allergy",
  CONTAMINATION: "Contamination",
  PREPARATION_SPECIFIC: "Preparation-Specific",
};

const TIER_LABELS: Record<string, string> = {
  TIER_1_GOVERNMENT: "Tier 1 — Government",
  TIER_2_SYSTEMATIC_REVIEW: "Tier 2 — Systematic Review",
  TIER_3_PEER_REVIEWED: "Tier 3 — Peer-Reviewed",
  TIER_4_TRADITIONAL_TEXT: "Tier 4 — Traditional Text",
  TIER_5_SECONDARY: "Tier 5 — Secondary",
};

const SYNONYM_LABELS: Record<string, string> = {
  SCIENTIFIC_SYNONYM: "Scientific synonym",
  COMMON_NAME: "Common name",
  REGIONAL_NAME: "Regional name",
  TRADITIONAL_NAME: "Traditional name",
  HISTORICAL_NAME: "Historical name",
};

export default async function HerbDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const herb = await prisma.herb.findUnique({
    where: { id },
    include: {
      synonyms: true,
      constituents: { include: { constituent: true } },
      preparations: { include: { preparation: true } },
      actions: { include: { action: true, source: true } },
      traditions: { include: { tradition: true } },
      evidence: { include: { source: true } },
      safetyRecords: { include: { source: true } },
    },
  });

  if (!herb) {
    notFound();
  }
  const herbData = herb;

  const uses = herbData.uses.split(",").map((u) => u.trim()).filter(Boolean);
  const properties = herbData.properties.split(",").map((p) => p.trim()).filter(Boolean);

  // Assign a stable citation number to every unique source referenced below,
  // in first-appearance order across evidence, then safety.
  const citations = new Map<string, { number: number; source: NonNullable<typeof herbData.evidence[number]["source"]> }>();
  function cite(source: typeof herbData.evidence[number]["source"]) {
    if (!source) return null;
    if (!citations.has(source.id)) {
      citations.set(source.id, { number: citations.size + 1, source });
    }
    return citations.get(source.id)!.number;
  }
  for (const e of herbData.evidence) cite(e.source);
  for (const s of herbData.safetyRecords) cite(s.source);

  const evidenceByCategory = EVIDENCE_ORDER.map((cat) => ({
    category: cat,
    entries: herbData.evidence.filter((e) => e.category === cat),
  })).filter((g) => g.entries.length > 0);

  const safetyByCategory = Object.keys(SAFETY_LABELS)
    .map((cat) => ({
      category: cat,
      records: herbData.safetyRecords.filter((s) => s.category === cat),
    }))
    .filter((g) => g.records.length > 0);

  const synonymsByType = Object.entries(SYNONYM_LABELS)
    .map(([type, label]) => ({
      label,
      names: herbData.synonyms.filter((s) => s.type === type).map((s) => s.name),
    }))
    .filter((g) => g.names.length > 0);

  const botanicalFacts = [
    { label: "Family", value: herbData.family },
    { label: "Genus", value: herbData.genus },
    { label: "Species", value: herbData.species },
    { label: "Subspecies / Variety", value: herbData.subspecies },
    { label: "Native Range", value: herbData.nativeRange },
    { label: "Habitat", value: herbData.habitat },
    { label: "Parts Used", value: herbData.partsUsed },
  ].filter((f) => f.value);

  const sortedCitations = [...citations.values()].sort((a, b) => a.number - b.number);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-14">
      <Link href="/herbs" className="text-sm text-[var(--muted)] hover:text-[var(--highlight)]">
        ← Back to the Herbal Library
      </Link>

      <FadeIn className="flex flex-col gap-6 border-b border-[var(--border)] pb-8">
        <HerbImage
          src={herbData.imageUrl}
          alt={`Botanical illustration of ${herbData.name}`}
          className="aspect-[4/5] w-full max-w-sm"
          priority
        />
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-fit rounded-full bg-[var(--highlight-soft)] px-3 py-1 text-xs tracking-wide text-[var(--highlight)] uppercase">
              {herbData.category}
            </span>
            {herbData.contentStatus === "VERIFIED" && (
              <span className="font-mono w-fit rounded-full border border-[var(--border)] px-3 py-1 text-[11px] tracking-wide text-[var(--muted)] uppercase">
                Sourced entry
              </span>
            )}
          </div>
          <h1 className="font-serif text-4xl text-[var(--foreground)] sm:text-5xl">{herbData.name}</h1>
          <p className="font-serif text-lg text-[var(--muted)] italic">{herbData.scientificName}</p>
        </header>
      </FadeIn>

      <p className="text-lg leading-relaxed text-[var(--foreground)]">{herbData.summary}</p>

      {/* BOTANICAL IDENTITY */}
      {(botanicalFacts.length > 0 || synonymsByType.length > 0) && (
        <section className="flex flex-col gap-4 border-t border-[var(--border)] pt-8">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Botanical Identity</h2>
          {botanicalFacts.length > 0 && (
            <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {botanicalFacts.map((f) => (
                <div key={f.label} className="flex items-baseline gap-2 text-sm">
                  <dt className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{f.label}</dt>
                  <dd className="text-[var(--foreground)]">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {synonymsByType.map((g) => (
            <div key={g.label} className="flex flex-col gap-1">
              <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{g.label}</h3>
              <p className="font-serif text-[var(--foreground)] italic">{g.names.join(", ")}</p>
            </div>
          ))}
        </section>
      )}

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

      {/* TRADITIONS */}
      {herbData.traditions.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Traditional Systems</h2>
          <ul className="flex flex-col gap-3">
            {herbData.traditions.map((t) => (
              <li key={t.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="font-medium text-[var(--foreground)]">{t.tradition.name}</p>
                {t.notes && <p className="mt-1 text-sm text-[var(--muted)]">{t.notes}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* CONSTITUENTS */}
      {herbData.constituents.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Constituents</h2>
          <div className="flex flex-wrap gap-2">
            {herbData.constituents.map((hc) => (
              <Link
                key={hc.id}
                href={`/herbs?q=${encodeURIComponent(hc.constituent.name)}`}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
                title={hc.constituent.type ?? undefined}
              >
                {hc.constituent.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* EVIDENCE */}
      {evidenceByCategory.length > 0 && (
        <section className="flex flex-col gap-6 border-t border-[var(--border)] pt-8">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Evidence</h2>
          {evidenceByCategory.map((g) => (
            <div key={g.category} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--highlight)]">
                {EVIDENCE_LABELS[g.category]}
              </h3>
              <ul className="flex flex-col gap-3">
                {g.entries.map((e) => {
                  const n = cite(e.source);
                  return (
                    <li key={e.id} className="text-sm leading-relaxed text-[var(--foreground)]/90">
                      {e.summary}
                      {n && (
                        <a href={`#source-${n}`} className="ml-1 text-[var(--highlight)] no-underline">
                          [{n}]
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* SAFETY */}
      {safetyByCategory.length > 0 && (
        <section className="flex flex-col gap-4 rounded-xl border border-[var(--caution-border)] bg-[var(--caution-bg)] p-6">
          <h2 className="text-sm font-semibold tracking-[0.1em] text-[var(--caution)] uppercase">
            Safety
          </h2>
          {safetyByCategory.map((g) => (
            <div key={g.category} className="flex flex-col gap-1">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--caution)]">
                {SAFETY_LABELS[g.category]}
              </h3>
              <ul className="flex flex-col gap-1">
                {g.records.map((s) => {
                  const n = cite(s.source);
                  return (
                    <li key={s.id} className="text-sm leading-relaxed text-[var(--caution)]">
                      {s.description}
                      {n && (
                        <a href={`#source-${n}`} className="ml-1 no-underline">
                          [{n}]
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      )}

      {herbData.cautions && (
        <section className="rounded-xl border border-[var(--caution-border)] bg-[var(--caution-bg)] p-5 text-sm text-[var(--caution)]">
          <h2 className="mb-1 text-xs font-semibold tracking-[0.15em] uppercase">Cautions</h2>
          <p>{herbData.cautions}</p>
        </section>
      )}

      {/* SOURCES */}
      {sortedCitations.length > 0 && (
        <section className="flex flex-col gap-3 border-t border-[var(--border)] pt-8">
          <h2 className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)] uppercase">
            Sources
          </h2>
          <ol className="flex flex-col gap-3">
            {sortedCitations.map(({ number, source }) => (
              <li key={source.id} id={`source-${number}`} className="text-sm text-[var(--foreground)]/90">
                <span className="font-mono text-[var(--muted)]">[{number}]</span>{" "}
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--highlight)]"
                  >
                    {source.title}
                  </a>
                ) : (
                  source.title
                )}
                {source.organization && <span className="text-[var(--muted)]"> — {source.organization}</span>}
                {source.doi && (
                  <span className="font-mono text-xs text-[var(--muted)]"> · DOI: {source.doi}</span>
                )}
                <span className="font-mono ml-2 text-xs text-[var(--muted)]">{TIER_LABELS[source.tier]}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <p className="text-xs text-[var(--muted)]">
        This information is educational and traditional in nature, and is not a substitute for
        professional medical advice.
      </p>
    </main>
  );
}
