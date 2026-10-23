import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EVIDENCE_LABELS, EVIDENCE_NOTES, GLOSSARY, TIER_BADGES, TIER_ORDER } from "@/lib/plain-language";

export const metadata: Metadata = {
  title: "What These Words Mean",
  description: "Plain-language definitions of the herbal and research terms used in the library.",
};

const TIER_EXPLAINED: Record<string, string> = {
  TIER_1_GOVERNMENT: "The source is a government health agency, such as the NIH or the European Medicines Agency.",
  TIER_2_SYSTEMATIC_REVIEW: "The source pools the results of many studies, or is a clinical trial in people.",
  TIER_3_PEER_REVIEWED: "The source is a single study published in a scientific journal. It may be in people, animals or the lab.",
  TIER_4_TRADITIONAL_TEXT: "The source is a historical herbal or traditional medicine text.",
  TIER_5_SECONDARY: "The source is a general reference, such as a health website, encyclopedia or herb school.",
};

export default function GlossaryPage() {
  const terms = Object.entries(GLOSSARY).sort(([a], [b]) => a.localeCompare(b, "en", { sensitivity: "base" }));

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "What these words mean" }]} />
      <header className="flex flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">What these words mean</h1>
        <p className="text-[15px] text-[var(--muted)]">
          The library is written in plain language, but a few terms can&apos;t always be avoided. Here&apos;s what they
          mean, along with the labels used on every herb page.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Kinds of evidence</h2>
        <dl className="flex flex-col gap-3">
          {Object.entries(EVIDENCE_LABELS).map(([key, label]) => (
            <div key={key}>
              <dt className="font-medium text-[var(--foreground)]">{label}</dt>
              <dd className="text-sm text-[var(--muted)]">
                {EVIDENCE_NOTES[key] ??
                  "Studies in people. Look at how many people took part and whether the herb was compared with a placebo."}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Source labels</h2>
        <p className="text-sm text-[var(--muted)]">Each citation number on an herb page has a label showing what kind of source it is.</p>
        <dl className="flex flex-col gap-3">
          {TIER_ORDER.map((tier) => (
            <div key={tier}>
              <dt className="font-mono text-xs uppercase tracking-wide text-[var(--foreground)]">{TIER_BADGES[tier]}</dt>
              <dd className="text-sm text-[var(--muted)]">{TIER_EXPLAINED[tier]}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Terms</h2>
        <dl className="flex flex-col gap-3">
          {terms.map(([term, definition]) => (
            <div key={term}>
              <dt className="font-medium text-[var(--foreground)]">{term}</dt>
              <dd className="text-sm text-[var(--muted)]">{definition}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
