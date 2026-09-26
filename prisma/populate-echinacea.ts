import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Echinacea, populated from three real, verified sources. Nothing here is
// invented — every claim traces to one of the Source records below, all
// fetched and checked against the live page/article before being written
// here (ITIS was also checked directly for taxonomy/synonyms, but per the
// chamomile/ginger templates' pattern, taxonomy references aren't stored as
// their own Source row).

async function main() {
  const echinacea = await prisma.herb.findUniqueOrThrow({ where: { name: "Echinacea" } });

  // --- botanical profile (ITIS TSN 37281, checked live) ---
  await prisma.herb.update({
    where: { id: echinacea.id },
    data: {
      family: "Asteraceae",
      genus: "Echinacea",
      species: "purpurea",
      nativeRange: "Central and eastern United States",
      partsUsed: "The root and the above-ground parts (leaves, flowers and stems)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (ITIS TSN 37281 for scientific synonyms/common names) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Rudbeckia purpurea L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Brauneria purpurea (L.) Britton", type: "SCIENTIFIC_SYNONYM" },
    { name: "Purple Coneflower", type: "COMMON_NAME" },
    { name: "Eastern Purple Coneflower", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: echinacea.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: echinacea.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/echinacea", {
    title: "Echinacea",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2024-11-01"),
    url: "https://www.nccih.nih.gov/health/echinacea",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const cochraneReview = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/24554461/",
    {
      title: "Echinacea for preventing and treating the common cold",
      author: "Karsch-Völk M, Barrett B, Kiefer D, Bauer R, Ardjomand-Woelkart K, Linde K",
      organization: "Cochrane Database of Systematic Reviews",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: new Date("2014-02-20"),
      doi: "10.1002/14651858.CD000530.pub3",
      pmid: "24554461",
      url: "https://pubmed.ncbi.nlm.nih.gov/24554461/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const bioPharmReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC9102300/",
    {
      title: "Echinacea purpurea (L.) Moench: Biological and Pharmacological Properties. A Review",
      author: "Burlou-Nagy C, Bănică F, Jurca T, Vicaș LG, Marian E, Muresan ME, Bácskay I, Kiss R, Fehér P, Pallag A",
      organization: "Plants (Basel)",
      journal: "Plants (Basel)",
      publicationDate: new Date("2022-05-05"),
      doi: "10.3390/plants11091244",
      pmid: "35567246",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9102300/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (alkylamides already exists in the taxonomy seed; add
  // cichoric acid and polysaccharides, both documented in Burlou-Nagy 2022) ---
  const cichoricAcid = await prisma.constituent.upsert({
    where: { slug: "cichoric-acid" },
    update: {},
    create: { name: "Cichoric Acid", slug: "cichoric-acid", type: "phenolic compound" },
  });
  const polysaccharides = await prisma.constituent.upsert({
    where: { slug: "echinacea-polysaccharides" },
    update: {},
    create: { name: "Polysaccharides (arabinogalactans)", slug: "echinacea-polysaccharides", type: "polysaccharide" },
  });
  const alkylamides = await prisma.constituent.findUniqueOrThrow({ where: { slug: "alkylamides" } });

  for (const constituentId of [alkylamides.id, cichoricAcid.id, polysaccharides.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: echinacea.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: echinacea.id, constituentId },
      });
    }
  }

  // --- tradition (Burlou-Nagy 2022 documents Native American use of
  // alkamide-rich preparations for toothache relief and as an antitussive
  // and sialagogue) ---
  const nativeAmerican = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "native-american-ethnobotany" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: echinacea.id, traditionId: nativeAmerican.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: echinacea.id,
        traditionId: nativeAmerican.id,
        notes:
          "Native American peoples used echinacea to relieve toothache, calm coughs and increase saliva, using preparations rich in natural compounds called alkamides. This use carried over into Eclectic medicine, a branch of American medicine in the early 1900s that relied heavily on plants.\n\nTechnical detail: antitussive, sialagogue.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Historically, Native American peoples used echinacea to relieve toothache, calm coughs and increase saliva. These uses were later taken up by Eclectic doctors in early-1900s America, who relied heavily on plant medicines.\n\nTechnical detail: antitussive, sialagogue.",
      sourceId: bioPharmReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab and animal studies, natural compounds in echinacea (Echinacea purpurea) made several types of immune cells more active, including cells that swallow germs and \"natural killer\" cells, and increased the chemical signals immune cells use to communicate. Some of these compounds also act on the same receptors (CB2) that respond to cannabis compounds.\n\nTechnical detail: constituents: alkylamides, caffeic acid derivatives such as chicoric acid, polysaccharides and glycoproteins. Effects: activated phagocytosis and fibroblast stimulation; increased leukocyte motility; enhanced neutrophil, macrophage and natural killer cell activity; increased TNF-alpha, IL-1 and IFN-beta; alkylamides interact with cannabinoid CB2 receptors.",
      sourceId: bioPharmReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A 2014 Cochrane review pooled 24 high-quality trials with 4,631 people. It found that echinacea products have not been shown to help treat colds in a meaningful way. Trials on preventing colds pointed toward a small benefit, but the results weren't statistically significant; one extra analysis suggested it might lower the risk of a cold by 10–20%, which may not matter much in practice. Side effects were no more common than with placebo (a dummy pill).\n\nTechnical detail: 24 double-blind randomized controlled trials, 33 comparisons; the 10–20% relative risk reduction came from a post hoc analysis.",
      sourceId: cochraneReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Taking echinacea may slightly lower your chances of catching a cold, but it's unclear whether it makes a cold go away faster. Research on whether some types of echinacea boost the immune system is inconclusive.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: echinacea.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: echinacea.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "ALLERGY" as const,
      description:
        "Echinacea is closely related to sunflowers, daisies and ragweed. Some people are allergic to echinacea, and reactions can be severe.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "The most common side effects are digestive, such as stomach pain, nausea and an upset stomach. Studies have reported few side effects overall, but one study in children linked echinacea to more rashes.",
      sourceId: nccih.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "It's unclear whether echinacea affects some medicines that are broken down by the liver; studies disagree. There are also theoretical reasons it might interact with medicines that suppress the immune system (immunosuppressants) or with caffeine.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Some solid or liquid extracts of Echinacea purpurea, and some mixtures of E. purpurea and E. angustifolia, are possibly safe for up to 7 days during the first 3 months of pregnancy, but there is little data. Talk to a health care provider before using it while pregnant.",
      sourceId: nccih.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Products with extracts of Echinacea purpurea, and some mixtures of E. purpurea and E. angustifolia, are likely safe for most adults for short periods. Whether long-term use is safe is unknown.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: echinacea.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: echinacea.id, ...record },
      });
    }
  }

  console.log("Echinacea populated from 3 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
