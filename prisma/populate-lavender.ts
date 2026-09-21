import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Lavender, populated from three real, verified sources.
// Nothing here is invented — every claim traces to one of the three Source
// records below, all fetched and checked against the live page/article
// before being written here.
//
// Taxonomy (family/genus/species/synonyms) was cross-checked against GBIF
// Backbone Taxonomy, NCBI Taxonomy, and USDA GRIN-Global (all fetched live);
// Kew POWO was consulted via search only (the live page returned HTTP 403
// to direct fetch), so nothing from POWO alone is asserted here.

async function main() {
  const lavender = await prisma.herb.findUniqueOrThrow({ where: { name: "Lavender" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: lavender.id },
    data: {
      family: "Lamiaceae",
      genus: "Lavandula",
      species: "angustifolia",
      partsUsed: "Flower (flowering spikes/tops); essential oil is steam-distilled from the flowers",
      nativeRange: "Mediterranean basin (native to northeastern Spain, southern France, Andorra, and Italy)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (GBIF Backbone Taxonomy / NCBI Taxonomy / USDA GRIN-Global, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Lavandula officinalis Chaix ex Vill.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Lavandula vera DC.", type: "SCIENTIFIC_SYNONYM" },
    { name: "English Lavender", type: "COMMON_NAME" },
    { name: "True Lavender", type: "COMMON_NAME" },
    { name: "Garden Lavender", type: "COMMON_NAME" },
    { name: "Common Lavender", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: lavender.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: lavender.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/lavender", {
    title: "Lavender: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-02-01"),
    url: "https://www.nccih.nih.gov/health/lavender",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const anxiolyticReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC12454915/",
    {
      title: "A Comprehensive Review on Anxiolytic Effect of Lavandula Angustifolia Mill. in Clinical Studies",
      author: "Manzoor S, Rakha A, Rasheed H, Bhat ZF, Khan MSA, Abdi G, Aadil RM",
      organization: "Food Science & Nutrition",
      journal: "Food Science & Nutrition",
      publicationDate: new Date("2025-01-01"),
      doi: "10.1002/fsn3.70993",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12454915/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  const socialDefeatStudy = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC6222471/",
    {
      title: "Lavandula angustifolia Essential Oil and Linalool Counteract Social Aversion Induced by Social Defeat",
      author: "Caputo L, Reguilon MD, Minarro J, De Feo V, Rodriguez-Arias M",
      organization: "Molecules",
      journal: "Molecules",
      publicationDate: new Date("2018-10-01"),
      doi: "10.3390/molecules23102694",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6222471/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (linalool already exists in the taxonomy seed; add linalyl acetate) ---
  const linalool = await prisma.constituent.findUniqueOrThrow({ where: { slug: "linalool" } });
  const linalylAcetate = await prisma.constituent.upsert({
    where: { slug: "linalyl-acetate" },
    update: {},
    create: { name: "Linalyl Acetate", slug: "linalyl-acetate", type: "ester" },
  });

  for (const constituentId of [linalool.id, linalylAcetate.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: lavender.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: lavender.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const mediterraneanFolk = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: lavender.id, traditionId: mediterraneanFolk.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: lavender.id,
        traditionId: mediterraneanFolk.id,
        notes:
          "Used for medicinal and aromatic purposes by the ancient Greeks, Romans, and Egyptians for its antiseptic, calming, anti-inflammatory, and antioxidative properties; these traditional uses continued into European herbal medicine through the Middle Ages.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Lavender has been used for medicinal and aromatic purposes since antiquity by the ancient Greeks, Romans, and Egyptians for its antiseptic, calming, anti-inflammatory, and antioxidative properties. These traditional uses persisted into European herbal medicine through the Middle Ages, and lavender was historically used to treat conditions such as stomach ulcers and asthma.",
      sourceId: anxiolyticReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In a mouse model of social defeat stress, Lavandula angustifolia essential oil (200 mg/kg, intraperitoneal) blocked stress-induced anxiety-like behavior, and both the essential oil and its main constituent linalool (100 mg/kg) reversed social avoidance caused by social defeat, acting similarly to antidepressant agents; neither compound showed anxiolytic effects in non-stressed animals. In vitro, linalool (100-200 micrograms/mL) inhibited pERK and PKA signaling in SH-SY5Y neuroblastoma cells, suggesting a molecular mechanism for its central nervous system effects.",
      sourceId: socialDefeatStudy.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research suggests oral lavender oil products, including the proprietary preparation Silexan, might be beneficial for anxiety, including anxiety with co-occurring symptoms of depression, though the supporting studies have limitations such as small sample sizes and a lack of independent funding. Evidence on whether aromatherapy with lavender improves sleep quality or insomnia remains unclear. Preliminary findings suggest oral lavender capsules or tea may reduce depressive symptoms in some people, but should be interpreted with caution; one study found topical application had no effect on depression.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Clinical trials report reduced anxiety scores after lavender essential oil inhalation in hospitalized patients undergoing bone marrow biopsy, reduced depression and anxiety measures in elderly subjects given oral lavender tea, and reduced preoperative anxiety with lavender aromatherapy without the sedative side effects associated with benzodiazepines. Effective oral dosing used in trials included approximately 80 mg per day of lavender oil (Silexan).",
      sourceId: anxiolyticReview.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: lavender.id, category: entry.category, sourceId: entry.sourceId, summary: entry.summary },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: lavender.id, ...entry } });
    }
  }

  // --- safety, traced to NCCIH and the anxiolytic-effect review ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Oral lavender products may cause diarrhea, headache, nausea, or burping. Aromatherapy use can cause headache or coughing. Topical application carries a risk of allergic skin reactions.",
      sourceId: nccih.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "There are theoretical reasons to suspect that lavender might interact with some sedative drugs or herbs, which is particularly relevant before surgery.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Safety data on use during pregnancy or while breastfeeding is inadequate; little is known about its safety in these situations.",
      sourceId: nccih.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "A few case reports describe breast tissue swelling in children following topical use of lavender-containing products; causality has not been established.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Ingesting roughly 5 mL of diluted lavender essential oil can cause toxicity in adults, and as little as 2-3 mL may be toxic in children, with symptoms including nausea, vomiting, diarrhea, difficulty breathing, and confusion. Reported toxicity cases are rare, and the essential oil's oral LD50 in animal studies is 13.5 g/kg.",
      sourceId: anxiolyticReview.id,
    },
    {
      category: "ALLERGY" as const,
      description:
        "Prolonged skin exposure to linalool, a major constituent of lavender essential oil, may elicit allergic reactions; linalool must be listed as a potential allergen under European Union cosmetics regulations.",
      sourceId: anxiolyticReview.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: lavender.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: lavender.id, ...record },
      });
    }
  }

  console.log("Lavender populated from 3 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
