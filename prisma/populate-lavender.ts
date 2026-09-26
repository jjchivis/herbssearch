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
      partsUsed: "The flowers (the flowering spikes). The essential oil is made by steam-distilling the flowers.",
      nativeRange: "The Mediterranean region: native to northeastern Spain, southern France, Andorra and Italy",
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
          "The ancient Greeks, Romans and Egyptians used lavender as a medicine and for its scent. They valued it for fighting germs, calming, and easing inflammation. These traditional uses continued in European herbal medicine through the Middle Ages.\n\nTechnical detail: traditionally described as antiseptic, calming, anti-inflammatory and antioxidative.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Since ancient times, the Greeks, Romans and Egyptians used lavender as a medicine and for its scent. They valued it for fighting germs, calming, and easing inflammation. These traditional uses continued in European herbal medicine through the Middle Ages, and lavender was historically used for conditions such as stomach ulcers and asthma.\n\nTechnical detail: traditionally described as antiseptic, calming, anti-inflammatory and antioxidative.",
      sourceId: anxiolyticReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In mice under social stress, lavender essential oil reduced anxious behavior. Both the oil and linalool, its main natural compound, reversed the mice's tendency to avoid other mice, acting much like antidepressants. Neither had a calming effect on mice that weren't stressed. In lab tests on nerve cells, linalool blocked certain chemical signals inside the cells, which may help explain how it affects the brain.\n\nTechnical detail: social defeat stress model; Lavandula angustifolia essential oil 200 mg/kg intraperitoneal; linalool 100 mg/kg; in vitro linalool 100–200 µg/mL inhibited pERK and PKA signaling in SH-SY5Y neuroblastoma cells.",
      sourceId: socialDefeatStudy.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research suggests lavender oil taken by mouth, including a branded product called Silexan, might help with anxiety, including anxiety that comes with depression. But the studies have limitations, such as being small and not being independently funded. It's unclear whether breathing in lavender (aromatherapy) improves sleep or insomnia. Early findings suggest lavender capsules or tea may ease depression in some people, but these results should be treated with caution. One study found that putting lavender on the skin had no effect on depression.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Clinical trials have reported:\n- Less anxiety after breathing in lavender essential oil, in hospital patients having a bone marrow biopsy.\n- Less depression and anxiety in older adults who drank lavender tea.\n- Less anxiety before surgery with lavender aromatherapy, without the sleepiness caused by anti-anxiety medicines called benzodiazepines.\nTrials of lavender oil taken by mouth used about 80 mg a day (Silexan).",
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
        "Lavender taken by mouth may cause diarrhea, headache, nausea or burping. Breathing it in (aromatherapy) can cause headache or coughing. Putting it on the skin can cause allergic skin reactions.",
      sourceId: nccih.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "In theory, lavender might add to the effects of medicines or herbs that make you sleepy (sedatives). This matters especially before surgery.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "There isn't enough safety information about using lavender during pregnancy or while breastfeeding. Little is known about its safety in these situations.",
      sourceId: nccih.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "A few reports describe breast swelling in children after lavender-containing products were used on their skin. It has not been shown that lavender caused it.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Swallowing about 5 mL (one teaspoon) of diluted lavender essential oil can poison an adult, and as little as 2–3 mL may poison a child. Symptoms include nausea, vomiting, diarrhea, trouble breathing and confusion. Reported poisonings are rare.\n\nTechnical detail: oral LD50 of the essential oil in animal studies is 13.5 g/kg.",
      sourceId: anxiolyticReview.id,
    },
    {
      category: "ALLERGY" as const,
      description:
        "Long-term skin contact with linalool, a major natural compound in lavender oil, can cause allergic reactions. European Union cosmetics rules require linalool to be listed as a possible allergen.",
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
