import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Worked example: Chamomile, populated from two real, verified sources.
// Nothing here is invented — every claim traces to one of the two Source
// records below, both fetched and checked against the live page/article
// before being written here.

async function main() {
  const chamomile = await prisma.herb.findUniqueOrThrow({ where: { name: "Chamomile" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: chamomile.id },
    data: {
      family: "Asteraceae",
      genus: "Matricaria",
      species: "chamomilla",
      partsUsed: "Flower (flower heads)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO / NCBI Taxonomy / ITIS, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Chamomilla recutita (L.) Rauschert", type: "SCIENTIFIC_SYNONYM" },
    { name: "Matricaria recutita L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "German Chamomile", type: "COMMON_NAME" },
    { name: "Wild Chamomile", type: "COMMON_NAME" },
    { name: "Scented Mayweed", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: chamomile.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: chamomile.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/chamomile", {
    title: "Chamomile: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2024-11-01"),
    url: "https://www.nccih.nih.gov/health/chamomile",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const pharmacognosyReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC3210003/",
    {
      title: "Chamomile (Matricaria chamomilla L.): An overview",
      author: "Singh O, Khanam Z, Misra N, Srivastava MK",
      organization: "Pharmacognosy Reviews",
      journal: "Pharmacognosy Reviews",
      publicationDate: new Date("2011-01-01"),
      doi: "10.4103/0973-7847.79103",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3210003/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (add the two not already in the taxonomy seed, then link) ---
  const chamazulene = await prisma.constituent.upsert({
    where: { slug: "chamazulene" },
    update: {},
    create: { name: "Chamazulene", slug: "chamazulene", type: "terpenoid" },
  });
  const bisabolol = await prisma.constituent.upsert({
    where: { slug: "alpha-bisabolol" },
    update: {},
    create: { name: "Alpha-Bisabolol", slug: "alpha-bisabolol", type: "terpenoid" },
  });
  const apigenin = await prisma.constituent.findUniqueOrThrow({ where: { slug: "apigenin" } });

  for (const constituentId of [chamazulene.id, bisabolol.id, apigenin.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: chamomile.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: chamomile.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const westernHerbalism = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "western-herbalism" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: chamomile.id, traditionId: westernHerbalism.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: chamomile.id,
        traditionId: westernHerbalism.id,
        notes:
          "Documented in ancient Egyptian, Greek, and Roman medical writings; long-standing use for digestive complaints and skin irritation.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Chamomile has been used since antiquity, documented in ancient medical writings from Egypt, Greece, and Rome, traditionally for digestive discomfort, skin irritation, and as a calming preparation.",
      sourceId: pharmacognosyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Human research has not produced sufficient reliable evidence to establish clinical usefulness for the conditions chamomile is commonly promoted for. Preliminary studies suggest possible benefit for generalized anxiety disorder and associated depression. A 2019 review found minimal research support for insomnia specifically.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: chamomile.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: chamomile.id, ...entry } });
    }
  }

  // --- safety, all traced to NCCIH ---
  const safetyRecords = [
    {
      category: "ALLERGY" as const,
      description:
        "Higher risk of allergic reaction in people allergic to ragweed, chrysanthemums, marigolds, daisies, or related plants.",
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Side effects are uncommon but may include nausea, dizziness, and allergic reactions including anaphylaxis in rare cases; eye irritation is possible with direct eye contact.",
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "May interact with birth control pills, drugs metabolized by the liver, blood thinners such as warfarin, and sedatives.",
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Little is known about whether chamomile is safe to use during pregnancy or while breastfeeding.",
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "May have estrogenic activity and could worsen hormone-sensitive conditions such as breast or uterine cancer.",
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: chamomile.id, category: record.category, sourceId: nccih.id },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: chamomile.id, sourceId: nccih.id, ...record },
      });
    }
  }

  console.log("Chamomile populated from 2 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
