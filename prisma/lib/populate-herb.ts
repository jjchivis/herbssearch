import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client";

// Shared loader for data-only populate scripts (populate-garlic.ts etc.).
// Every write is idempotent: rows are matched on their text, so re-running a
// script only adds what's missing and never duplicates. Write the content in
// plain language (docs/CONTENT_STYLE.md) and cite every entry to a source.

type Tier =
  | "TIER_1_GOVERNMENT"
  | "TIER_2_SYSTEMATIC_REVIEW"
  | "TIER_3_PEER_REVIEWED"
  | "TIER_4_TRADITIONAL_TEXT"
  | "TIER_5_SECONDARY";

type SafetyCategory =
  | "CONTRAINDICATION"
  | "ADVERSE_EFFECT"
  | "DRUG_INTERACTION"
  | "PREGNANCY"
  | "BREASTFEEDING"
  | "SURGERY"
  | "TOXICITY"
  | "DOSAGE"
  | "ALLERGY"
  | "CONTAMINATION"
  | "PREPARATION_SPECIFIC";

export type HerbContent = {
  name: string;
  // Omit profile to add entries to an existing herb without touching its
  // botanical fields (see populate-reproductive-links.ts).
  profile?: {
    family: string;
    genus: string;
    species: string;
    nativeRange?: string;
    partsUsed?: string;
  };
  sources: Record<
    string,
    {
      title: string;
      url: string;
      tier: Tier;
      sourceType: "government" | "systematic_review" | "peer_reviewed" | "historical_text" | "secondary";
      author?: string;
      organization?: string;
      journal?: string;
      publicationDate?: string;
      doi?: string;
      pmid?: string;
    }
  >;
  synonyms?: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "REGIONAL_NAME" | "TRADITIONAL_NAME"; region?: string }[];
  constituents?: { name: string; slug: string; type: string }[];
  traditions?: { slug: string; notes: string }[];
  evidence?: { category: "TRADITIONAL" | "PRECLINICAL" | "HUMAN_RESEARCH"; summary: string; source: string }[];
  safety?: { category: SafetyCategory; description: string; source: string }[];
  // Links to symptom-search topics (see prisma/seed-taxonomy.ts), with a plain
  // note on whether the link is traditional use or research.
  symptoms?: { slug: string; notes: string }[];
};

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });

async function populateHerb(c: HerbContent) {
  const herb = await prisma.herb.findUniqueOrThrow({ where: { name: c.name } });
  const herbId = herb.id;

  if (c.profile) {
    await prisma.herb.update({
      where: { id: herbId },
      data: { ...c.profile, contentStatus: "VERIFIED" },
    });
  }

  const sourceIds: Record<string, string> = {};
  for (const [key, s] of Object.entries(c.sources)) {
    const existing = await prisma.source.findFirst({ where: { url: s.url } });
    const { publicationDate, ...rest } = s;
    const row =
      existing ??
      (await prisma.source.create({
        data: { ...rest, publicationDate: publicationDate ? new Date(publicationDate) : undefined },
      }));
    sourceIds[key] = row.id;
  }
  const sourceId = (key: string) => {
    if (!sourceIds[key]) throw new Error(`${c.name}: unknown source key "${key}"`);
    return sourceIds[key];
  };

  for (const syn of c.synonyms ?? []) {
    const existing = await prisma.herbSynonym.findFirst({ where: { herbId, name: syn.name } });
    if (!existing) await prisma.herbSynonym.create({ data: { herbId, ...syn } });
  }

  for (const con of c.constituents ?? []) {
    const constituent = await prisma.constituent.upsert({
      where: { slug: con.slug },
      update: {},
      create: con,
    });
    const existing = await prisma.herbConstituent.findFirst({ where: { herbId, constituentId: constituent.id } });
    if (!existing) await prisma.herbConstituent.create({ data: { herbId, constituentId: constituent.id } });
  }

  for (const t of c.traditions ?? []) {
    const tradition = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: t.slug } });
    const existing = await prisma.herbTradition.findFirst({ where: { herbId, traditionId: tradition.id } });
    if (!existing) await prisma.herbTradition.create({ data: { herbId, traditionId: tradition.id, notes: t.notes } });
    else if (existing.notes !== t.notes) await prisma.herbTradition.update({ where: { id: existing.id }, data: { notes: t.notes } });
  }

  for (const e of c.evidence ?? []) {
    const data = { herbId, category: e.category, summary: e.summary, sourceId: sourceId(e.source) };
    const existing = await prisma.evidenceEntry.findFirst({ where: data });
    if (!existing) await prisma.evidenceEntry.create({ data });
  }

  for (const s of c.safety ?? []) {
    const data = { herbId, category: s.category, description: s.description, sourceId: sourceId(s.source) };
    const existing = await prisma.safetyRecord.findFirst({ where: data });
    if (!existing) await prisma.safetyRecord.create({ data });
  }

  for (const link of c.symptoms ?? []) {
    const symptom = await prisma.symptom.findUniqueOrThrow({ where: { slug: link.slug } });
    await prisma.herbSymptom.upsert({
      where: { herbId_symptomId: { herbId, symptomId: symptom.id } },
      update: { notes: link.notes },
      create: { herbId, symptomId: symptom.id, notes: link.notes },
    });
  }

  console.log(
    c.profile
      ? `${c.name} populated from ${Object.keys(c.sources).length} verified sources.`
      : `${c.name}: added ${c.evidence?.length ?? 0} evidence entries and ${c.symptoms?.length ?? 0} topic links.`,
  );
}

export function run(...contents: HerbContent[]) {
  (async () => {
    for (const c of contents) await populateHerb(c);
  })()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
