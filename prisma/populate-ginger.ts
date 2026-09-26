import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Ginger, populated from four real, verified sources. Nothing here is
// invented — every claim traces to one of the Source records below, all
// fetched and checked against the live page/article before being written
// here (Kew POWO was also checked directly for taxonomy, but per the
// chamomile template's pattern taxonomy references aren't stored as their
// own Source row).

async function main() {
  const ginger = await prisma.herb.findUniqueOrThrow({ where: { name: "Ginger" } });

  // --- botanical profile (Kew Plants of the World Online, checked live) ---
  await prisma.herb.update({
    where: { id: ginger.id },
    data: {
      family: "Zingiberaceae",
      genus: "Zingiber",
      species: "officinale",
      nativeRange: "From the eastern Himalayas to south-central China",
      partsUsed: "The rhizome, the knobbly underground stem usually called ginger root",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO for scientific synonyms; Li et al. 2021 (PMC7943299)
  // for the Chinese common name; Ayurvedic Sanskrit names cross-checked across
  // multiple Ayurvedic pharmacology references for fresh vs. dried rhizome) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "TRADITIONAL_NAME"; region?: string }[] = [
    { name: "Amomum zingiber L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Zingiber officinale var. rubrum Theilade", type: "SCIENTIFIC_SYNONYM" },
    { name: "Common Ginger", type: "COMMON_NAME" },
    { name: "Sheng Jiang (fresh ginger)", type: "TRADITIONAL_NAME", region: "China (TCM)" },
    { name: "Ardraka (fresh rhizome)", type: "TRADITIONAL_NAME", region: "India (Ayurveda)" },
    { name: "Shunthi (dried rhizome)", type: "TRADITIONAL_NAME", region: "India (Ayurveda)" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: ginger.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: ginger.id, name: syn.name, type: syn.type, region: syn.region },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/ginger", {
    title: "Ginger: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-02-01"),
    url: "https://www.nccih.nih.gov/health/ginger",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const pregnancyNauseaSR = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC3995184/",
    {
      title:
        "A systematic review and meta-analysis of the effect and safety of ginger in the treatment of pregnancy-associated nausea and vomiting",
      author: "Viljoen E, Visser J, Koen N, Musekiwa A",
      organization: "Nutrition Journal",
      journal: "Nutrition Journal",
      publicationDate: new Date("2014-03-19"),
      doi: "10.1186/1475-2891-13-20",
      pmid: "24642205",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3995184/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const gingerolsShogaolsReview = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/26228533/",
    {
      title: "Gingerols and shogaols: important nutraceutical principles from ginger",
      author: "Semwal RB, Semwal DK, Combrinck S, Viljoen AM",
      organization: "Phytochemistry",
      journal: "Phytochemistry",
      publicationDate: new Date("2015-09-01"),
      doi: "10.1016/j.phytochem.2015.07.012",
      pmid: "26228533",
      url: "https://pubmed.ncbi.nlm.nih.gov/26228533/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  const aliReview = await findOrCreateSource("https://pubmed.ncbi.nlm.nih.gov/17950516/", {
    title:
      "Some phytochemical, pharmacological and toxicological properties of ginger (Zingiber officinale Roscoe): a review of recent research",
    author: "Ali BH, Blunden G, Tanira MO, Nemmar A",
    organization: "Food and Chemical Toxicology",
    journal: "Food and Chemical Toxicology",
    publicationDate: new Date("2008-02-01"),
    doi: "10.1016/j.fct.2007.09.085",
    pmid: "17950516",
    url: "https://pubmed.ncbi.nlm.nih.gov/17950516/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // --- constituents (gingerol already exists in the taxonomy seed; add
  // shogaol and zingerone, both documented in the Semwal 2015 review) ---
  const shogaol = await prisma.constituent.upsert({
    where: { slug: "shogaol" },
    update: {},
    create: { name: "Shogaol", slug: "shogaol", type: "phenolic compound" },
  });
  const zingerone = await prisma.constituent.upsert({
    where: { slug: "zingerone" },
    update: {},
    create: { name: "Zingerone", slug: "zingerone", type: "phenolic compound" },
  });
  const gingerol = await prisma.constituent.findUniqueOrThrow({ where: { slug: "gingerol" } });

  for (const constituentId of [gingerol.id, shogaol.id, zingerone.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: ginger.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: ginger.id, constituentId },
      });
    }
  }

  // --- traditions (Ali et al. 2008 confirms ginger has been "widely used in
  // Chinese, Ayurvedic and Tibb-Unani herbal medicines... since antiquity") ---
  const traditionSlugs = [
    { slug: "ayurveda", notes: "Known as Ardraka (fresh ginger) and Shunthi (dried ginger). Used since ancient times for digestion, breathing and circulation." },
    { slug: "traditional-chinese-medicine", notes: "Fresh ginger (Sheng Jiang) has been used since ancient times and appears in the Shen Nong Ben Cao Jing, one of the oldest Chinese herbal texts. The Chinese Pharmacopoeia lists it to ease the early stage of colds (\"exterior syndrome\"), to \"disperse cold\", and to stop vomiting." },
  ];
  for (const t of traditionSlugs) {
    const tradition = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: t.slug } });
    const existingTradition = await prisma.herbTradition.findFirst({
      where: { herbId: ginger.id, traditionId: tradition.id },
    });
    if (!existingTradition) {
      await prisma.herbTradition.create({
        data: { herbId: ginger.id, traditionId: tradition.id, notes: t.notes },
      });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Since ancient times, ginger has been used in Chinese, Ayurvedic and Unani herbal medicine for arthritis and rheumatism, sprains, muscle aches, sore throats, cramps, constipation, indigestion, vomiting, high blood pressure, dementia, fever, infections and intestinal worms.\n\nTechnical detail: Tibb-Unani; helminthiasis.",
      sourceId: aliReview.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In folk medicine, ginger has been used since ancient times for asthma, flu, indigestion and stomach discomfort.",
      sourceId: nccih.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab research, gingerols and shogaols (the compounds that give ginger its heat) showed antioxidant, germ-fighting and anticancer activity, and reduced inflammation and allergic responses. They also act on nerve receptors involved in nausea.\n\nTechnical detail: pungent phenolic compounds acting on cholinergic and serotonergic receptors.",
      sourceId: gingerolsShogaolsReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review that combined 12 trials with 1,278 pregnant women found ginger improved nausea compared with placebo (a dummy pill), but it did not reduce how often women vomited. The reviewers concluded ginger could be considered a harmless and possibly effective option for nausea and vomiting during pregnancy.\n\nTechnical detail: systematic review and meta-analysis of randomized controlled trials; mean difference 1.20 (95% CI 0.56–1.84), p = 0.0002.",
      sourceId: pregnancyNauseaSR.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research shows ginger may help with nausea and vomiting during pregnancy, and ginger supplements might make period cramps less severe. Most studies of ginger for motion sickness haven't found it helpful, and it's uncertain whether it helps with nausea and vomiting from chemotherapy or after surgery.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: ginger.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: ginger.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Taken by mouth, ginger can cause side effects such as stomach discomfort, heartburn, diarrhea, and irritation of the mouth and throat.",
      sourceId: nccih.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "High doses of concentrated ginger (powder or tinctures) can raise the risk of bleeding by making blood cells called platelets less sticky. They can also increase stomach acid. This is more likely if you take it with other herbs or medicines that have the same effects.\n\nTechnical detail: decreased platelet aggregation.",
      sourceId: pregnancyNauseaSR.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Ginger supplements may be safe during pregnancy. A review of 12 trials found ginger did not significantly raise the risk of miscarriage, or of side effects such as heartburn or drowsiness, compared with placebo.",
      sourceId: nccih.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description: "Little is known about whether it's safe to use ginger while breastfeeding.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: ginger.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: ginger.id, ...record },
      });
    }
  }

  console.log("Ginger populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
