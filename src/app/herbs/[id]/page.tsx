import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/fade-in";
import { TagList } from "@/components/motion/tag-list";
import { HerbImage } from "@/components/herb-image";
import { PlainText } from "@/components/plain-text";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  EVIDENCE_LABELS,
  EVIDENCE_NOTES,
  FAMILY_COMMON_NAMES,
  SAFETY_GLANCE,
  SAFETY_LABELS,
  TIER_BADGES,
  TIER_LABELS,
  herbPageTitle,
} from "@/lib/plain-language";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const herb = await prisma.herb.findUnique({
    where: { id },
    include: { safetyRecords: { where: { category: "DRUG_INTERACTION" } } },
  });
  if (!herb) return {};
  return {
    title: { absolute: herbPageTitle(herb.name, herb.scientificName, hasKnownInteractions(herb.safetyRecords)) },
    description: herb.summary,
  };
}

const EVIDENCE_ORDER = ["TRADITIONAL", "PRECLINICAL", "HUMAN_RESEARCH"];

// Some herbs carry a DRUG_INTERACTION record that says none are known
// ("No interactions ... have been described"); those shouldn't trigger the
// interaction alert.
function hasKnownInteractions(records: { category: string; description: string }[]) {
  return records.some((r) => r.category === "DRUG_INTERACTION" && !/^No interactions\b/.test(r.description));
}

const SYNONYM_LABELS: Record<string, string> = {
  COMMON_NAME: "Also called",
  REGIONAL_NAME: "Regional names",
  TRADITIONAL_NAME: "Traditional names",
  HISTORICAL_NAME: "Historical names",
  SCIENTIFIC_SYNONYM: "Older scientific names",
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
      symptoms: { include: { symptom: true }, orderBy: { symptom: { name: "asc" } } },
      constituents: { include: { constituent: true } },
      preparations: { include: { preparation: true, source: true }, orderBy: { preparation: { name: "asc" } } },
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
  // in first-appearance order across preparations, safety, then evidence (the page order).
  const citations = new Map<string, { number: number; source: NonNullable<typeof herbData.evidence[number]["source"]> }>();
  function cite(source: typeof herbData.evidence[number]["source"]) {
    if (!source) return null;
    if (!citations.has(source.id)) {
      citations.set(source.id, { number: citations.size + 1, source });
    }
    return citations.get(source.id)!.number;
  }
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

  for (const hp of herbData.preparations) cite(hp.source);
  for (const g of safetyByCategory) for (const s of g.records) cite(s.source);
  for (const g of evidenceByCategory) for (const e of g.entries) cite(e.source);

  const synonymsByType = Object.entries(SYNONYM_LABELS)
    .map(([type, label]) => ({
      label,
      names: herbData.synonyms.filter((s) => s.type === type).map((s) => s.name),
    }))
    .filter((g) => g.names.length > 0);

  const familyCommonName = herbData.family ? FAMILY_COMMON_NAMES[herbData.family] : undefined;
  const botanicalFacts = [
    {
      label: "Plant family",
      value: herbData.family && (familyCommonName ? `${herbData.family}, ${familyCommonName}` : herbData.family),
    },
    { label: "Parts used", value: herbData.partsUsed },
    { label: "Where it grows", value: herbData.nativeRange },
    { label: "Habitat", value: herbData.habitat },
    { label: "Genus", value: herbData.genus },
    { label: "Species", value: herbData.species },
    { label: "Subspecies / variety", value: herbData.subspecies },
  ].filter((f) => f.value);
  const showInteractionAlert = hasKnownInteractions(herbData.safetyRecords);
  const glossaryUsed = new Set<string>();

  const sortedCitations = [...citations.values()].sort((a, b) => a.number - b.number);

  // Counts of safety notes per category for the "Safety at a glance" strip.
  // Notes can be warnings or reassurances, so the strip only links to them.
  const glance = SAFETY_GLANCE.map((g) => ({
    ...g,
    count: herbData.safetyRecords.filter((s) => s.category === g.category).length,
  }));

  const jumpLinks = [
    { id: "about", label: "Overview", show: botanicalFacts.length > 0 || synonymsByType.length > 0 },
    { id: "topics", label: "Health topics", show: herbData.symptoms.length > 0 },
    { id: "traditions", label: "Traditions", show: herbData.traditions.length > 0 },
    { id: "compounds", label: "Compounds", show: herbData.constituents.length > 0 },
    { id: "preparation", label: "Preparation", show: herbData.preparations.length > 0 },
    { id: "safety", label: "Safety", show: safetyByCategory.length > 0 },
    { id: "research", label: "Research", show: evidenceByCategory.length > 0 },
    { id: "sources", label: "Sources", show: sortedCitations.length > 0 },
  ].filter((l) => l.show);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Herbal Library", href: "/herbs" }, { label: herbData.name }]} />

      <FadeIn className="flex flex-col gap-6 border-b border-[var(--border)] pb-8">
        <HerbImage
          src={herbData.imageUrl}
          alt={`Botanical illustration of ${herbData.name}`}
          className="aspect-[4/5] w-full max-w-sm"
          sizes="(min-width: 640px) 360px, 90vw"
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

      {/* SAFETY AT A GLANCE */}
      <section aria-labelledby="glance-heading" className="flex flex-col gap-3">
        <h2 id="glance-heading" className="text-xs font-semibold tracking-[0.15em] text-[var(--caution)] uppercase">
          Safety at a glance
        </h2>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {glance.map((g) => (
            <li key={g.category}>
              {g.count > 0 ? (
                <a
                  href={`#safety-${g.category.toLowerCase()}`}
                  className="flex h-full flex-col gap-0.5 rounded-lg border border-[var(--caution-border)] bg-[var(--caution-bg)] px-3 py-2 text-[var(--caution)] hover:underline"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide">{g.label}</span>
                  <span className="text-sm">
                    {g.count} {g.count === 1 ? "note" : "notes"} →
                  </span>
                </a>
              ) : (
                <div className="flex h-full flex-col gap-0.5 rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--muted)]">
                  <span className="text-xs font-semibold uppercase tracking-wide">{g.label}</span>
                  <span className="text-sm">Nothing recorded</span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="text-xs text-[var(--muted)]">
          Tap a box to read the safety notes below. &ldquo;Nothing recorded&rdquo; means our sources don&apos;t
          cover it, not that it&apos;s safe.
        </p>
      </section>

      {/* JUMP LINKS */}
      {jumpLinks.length > 1 && (
        <nav
          aria-label="On this page"
          className="sticky top-0 z-10 -mx-6 overflow-x-auto border-y border-[var(--border)] bg-[var(--section-bar)] px-6 py-2 backdrop-blur"
        >
          <ul className="flex gap-4 whitespace-nowrap text-sm">
            {jumpLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="font-medium text-[var(--on-band)] underline decoration-[#ab5030] underline-offset-4 hover:text-[var(--highlight)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {showInteractionAlert && (
        <p
          role="note"
          className="rounded-xl border border-[var(--caution-border)] bg-[var(--caution-bg)] p-5 text-sm leading-relaxed text-[var(--caution)]"
        >
          <span className="font-semibold">{herbData.name} may interact with some medicines.</span> If you take
          any medicine, read{" "}
          <a href="#safety" className="underline underline-offset-2">
            Interactions with medicines
          </a>{" "}
          below and talk to your doctor or pharmacist before using it.
        </p>
      )}

      {/* BOTANICAL IDENTITY */}
      {(botanicalFacts.length > 0 || synonymsByType.length > 0) && (
        <section id="about" className="scroll-mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-8">
          <h2 className="font-serif text-xl text-[var(--foreground)]">What is {herbData.name}?</h2>
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
          Traditionally used for
        </h2>
        <TagList tags={uses} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)] uppercase">
          Traditionally described as
        </h2>
        <TagList tags={properties} />
      </section>

      {/* HEALTH TOPICS (symptom search) */}
      {herbData.symptoms.length > 0 && (
        <section id="topics" className="scroll-mt-16 flex flex-col gap-3">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Health topics</h2>
          <p className="text-sm text-[var(--muted)]">
            Where {herbData.name} appears in symptom search, and why. Being listed doesn&apos;t mean it&apos;s a
            proven treatment.
          </p>
          <ul className="flex flex-col gap-3">
            {herbData.symptoms.map((hs) => (
              <li key={hs.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                <Link
                  href={`/topics/${hs.symptom.slug}`}
                  className="font-medium text-[var(--foreground)] hover:text-[var(--highlight)]"
                >
                  {hs.symptom.name}
                </Link>
                {hs.notes && (
                  <div className="mt-1 text-sm text-[var(--muted)]">
                    <PlainText glossaryUsed={glossaryUsed} text={hs.notes} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* TRADITIONS */}
      {herbData.traditions.length > 0 && (
        <section id="traditions" className="scroll-mt-16 flex flex-col gap-3">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Traditions that use it</h2>
          <ul className="flex flex-col gap-3">
            {herbData.traditions.map((t) => (
              <li key={t.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                <Link
                  href={`/traditions/${t.tradition.slug}`}
                  className="font-medium text-[var(--foreground)] hover:text-[var(--highlight)]"
                >
                  {t.tradition.name}
                </Link>
                {t.notes && (
                  <div className="mt-1 text-sm text-[var(--muted)]">
                    <PlainText glossaryUsed={glossaryUsed} text={t.notes} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* CONSTITUENTS */}
      {herbData.constituents.length > 0 && (
        <section id="compounds" className="scroll-mt-16 flex flex-col gap-3">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Natural compounds</h2>
          <div className="flex flex-wrap gap-2">
            {herbData.constituents.map((hc) => (
              <Link
                key={hc.id}
                href={`/compounds/${hc.constituent.slug}`}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
                title={hc.constituent.type ?? undefined}
              >
                {hc.constituent.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* PREPARATION */}
      {herbData.preparations.length > 0 && (
        <section id="preparation" className="scroll-mt-16 flex flex-col gap-3">
          <h2 className="font-serif text-xl text-[var(--foreground)]">How it&apos;s prepared</h2>
          <p className="text-sm text-[var(--muted)]">
            Common ways {herbData.name} is prepared or sold. This isn&apos;t advice on how to take it; see Safety
            below.
          </p>
          <ul className="flex flex-col gap-3">
            {herbData.preparations.map((hp) => {
              const n = cite(hp.source);
              return (
                <li key={hp.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                  <Link
                    href={`/preparations/${hp.preparation.slug}`}
                    className="font-medium text-[var(--foreground)] hover:text-[var(--highlight)]"
                  >
                    {hp.preparation.name}
                  </Link>
                  {hp.notes && (
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      <PlainText
                        glossaryUsed={glossaryUsed}
                        text={hp.notes}
                        after={
                          n &&
                          hp.source && (
                            <a
                              href={`#source-${n}`}
                              className="ml-1 text-[var(--highlight)] no-underline"
                              title={TIER_LABELS[hp.source.tier]}
                            >
                              [{n}]
                              <span className="font-mono ml-1 rounded border border-[var(--border)] px-1 py-px text-[10px] uppercase tracking-wide text-[var(--muted)]">
                                {TIER_BADGES[hp.source.tier]}
                              </span>
                            </a>
                          )
                        }
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* SAFETY */}
      {safetyByCategory.length > 0 && (
        <section id="safety" className="scroll-mt-16 flex flex-col gap-4 rounded-xl border border-[var(--caution-border)] bg-[var(--caution-bg)] p-6">
          <h2 className="text-sm font-semibold tracking-[0.1em] text-[var(--caution)] uppercase">
            Safety
          </h2>
          {safetyByCategory.map((g) => (
            <div key={g.category} id={`safety-${g.category.toLowerCase()}`} className="scroll-mt-16 flex flex-col gap-1">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--caution)]">
                {SAFETY_LABELS[g.category]}
              </h3>
              <ul className="flex flex-col gap-3">
                {g.records.map((s) => {
                  const n = cite(s.source);
                  return (
                    <li key={s.id} className="text-sm leading-relaxed text-[var(--caution)]">
                      <PlainText
                        glossaryUsed={glossaryUsed}
                        text={s.description}
                        after={
                          n && s.source && (
                            <a href={`#source-${n}`} className="ml-1 no-underline" title={TIER_LABELS[s.source.tier]}>
                              [{n}]
                              <span className="font-mono ml-1 rounded border border-[var(--caution-border)] px-1 py-px text-[10px] uppercase tracking-wide">
                                {TIER_BADGES[s.source.tier]}
                              </span>
                            </a>
                          )
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* EVIDENCE */}
      {evidenceByCategory.length > 0 && (
        <section id="research" className="scroll-mt-16 flex flex-col gap-6 border-t border-[var(--border)] pt-8">
          <h2 className="font-serif text-xl text-[var(--foreground)]">What does the research say?</h2>
          {evidenceByCategory.map((g) => (
            <div key={g.category} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--highlight)]">
                {EVIDENCE_LABELS[g.category]}
              </h3>
              {EVIDENCE_NOTES[g.category] && (
                <p className="text-sm text-[var(--muted)] italic">{EVIDENCE_NOTES[g.category]}</p>
              )}
              <ul className="flex flex-col gap-4">
                {g.entries.map((e) => {
                  const n = cite(e.source);
                  return (
                    <li key={e.id} className="text-sm leading-relaxed text-[var(--foreground)]/90">
                      <PlainText
                        glossaryUsed={glossaryUsed}
                        text={e.summary}
                        after={
                          n && e.source && (
                            <a
                              href={`#source-${n}`}
                              className="ml-1 text-[var(--highlight)] no-underline"
                              title={TIER_LABELS[e.source.tier]}
                            >
                              [{n}]
                              <span className="font-mono ml-1 rounded border border-[var(--border)] px-1 py-px text-[10px] uppercase tracking-wide text-[var(--muted)]">
                                {TIER_BADGES[e.source.tier]}
                              </span>
                            </a>
                          )
                        }
                      />
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
          <h2 className="mb-1 text-xs font-semibold tracking-[0.15em] uppercase">In short</h2>
          <p>{herbData.cautions}</p>
        </section>
      )}

      {/* SOURCES */}
      {sortedCitations.length > 0 && (
        <section id="sources" className="scroll-mt-16 flex flex-col gap-3 border-t border-[var(--border)] pt-8">
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
        professional medical advice. Unfamiliar word?{" "}
        <Link href="/glossary" className="underline underline-offset-2 hover:text-[var(--highlight)]">
          See what these words mean
        </Link>
        .
      </p>
    </main>
  );
}
