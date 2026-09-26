import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Ashwagandha, populated from real, verified sources. Nothing here is
// invented — every claim traces to one of the Source records below, all
// fetched and checked against the live page/article before being written
// here (NCBI Taxonomy and Wikipedia's own citation of Kew POWO/GBIF-sourced
// taxonomic data were checked directly for family/genus/species and native
// range — Kew POWO's own site returned HTTP 403 to automated fetches during
// research, so per the chamomile template's pattern taxonomy references
// aren't stored as their own Source row regardless).
//
// Safety note: this is a safety-important entry. The traditional/regulatory
// "abortifacient" caution is represented carefully below, citing a 2025
// Phytotherapy Research critical review (Brendler) that traces the claim to
// a single 1869 anecdotal source and finds no abortifacient effect in modern
// animal studies up to 3000 mg/kg — while also accurately reporting that WHO
// and NCCIH still list pregnancy as a contraindication. Both sides of this
// are sourced; neither is invented.

async function main() {
  const ashwagandha = await prisma.herb.findUniqueOrThrow({ where: { name: "Ashwagandha" } });

  // --- botanical profile (NCBI Taxonomy ID 126910; native range per
  // Withania somnifera's Kew-POWO-sourced distribution as reflected on
  // Wikipedia, cross-checked against multiple reviews below) ---
  await prisma.herb.update({
    where: { id: ashwagandha.id },
    data: {
      family: "Solanaceae",
      genus: "Withania",
      species: "somnifera",
      nativeRange: "The Middle East, North Africa, southern Europe, the Indian subcontinent and Southeast Asia",
      partsUsed: "Mainly the root, which is traditionally preferred. Powders and extracts of the root and leaf are also used.",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (NCBI Taxonomy for the basionym; NCCIH and the Mikulska
  // 2023 Pharmaceutics review for common/Ayurvedic names) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "TRADITIONAL_NAME"; region?: string }[] = [
    { name: "Physalis somnifera L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Indian Ginseng", type: "COMMON_NAME" },
    { name: "Winter Cherry", type: "COMMON_NAME" },
    { name: "Ashwagandha", type: "TRADITIONAL_NAME", region: "India (Ayurveda, Sanskrit)" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: ashwagandha.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: ashwagandha.id, name: syn.name, type: syn.type, region: syn.region },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/ashwagandha", {
    title: "Ashwagandha: Science, Safety, and Cautions",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2023-03-01"),
    url: "https://www.nccih.nih.gov/health/ashwagandha",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const liverTox = await findOrCreateSource("https://www.ncbi.nlm.nih.gov/books/NBK548536/", {
    title: "Ashwagandha",
    organization: "LiverTox: Clinical and Research Information on Drug-Induced Liver Injury, National Institute of Diabetes and Digestive and Kidney Diseases (NIH)",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK548536/",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const stressAnxietyMeta = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/39348746/",
    {
      title: "Effects of Ashwagandha (Withania Somnifera) on stress and anxiety: A systematic review and meta-analysis",
      organization: "Explore (NY)",
      journal: "Explore (NY)",
      publicationDate: new Date("2024-11-01"),
      doi: "10.1016/j.explore.2024.103062",
      pmid: "39348746",
      url: "https://pubmed.ncbi.nlm.nih.gov/39348746/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const mikulskaReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC10147008/",
    {
      title: "Ashwagandha (Withania somnifera)—Current Research on the Health-Promoting Activities: A Narrative Review",
      author: "Mikulska P, Malinowska M, Ignacyk M, et al.",
      organization: "Pharmaceutics",
      journal: "Pharmaceutics",
      publicationDate: new Date("2023-03-24"),
      doi: "10.3390/pharmaceutics15041057",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10147008/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  const abortifacientReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC13436040/",
    {
      title: "Is Ashwagandha an Abortifacient?",
      author: "Brendler T",
      organization: "Phytotherapy Research",
      journal: "Phytotherapy Research",
      publicationDate: new Date("2025-12-26"),
      doi: "10.1002/ptr.70150",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13436040/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (withanolides and withaferin A, documented across
  // NCCIH, Wikipedia's phytochemistry summary, and the Mikulska 2023 review) ---
  const withanolides = await prisma.constituent.upsert({
    where: { slug: "withanolides" },
    update: {},
    create: {
      name: "Withanolides",
      slug: "withanolides",
      type: "steroidal lactone",
      description: "The main group of natural compounds thought to give ashwagandha its effects. About 40 different withanolides have been found in the plant.\n\nTechnical detail: C28 steroidal lactones; principal bioactive constituents of Withania somnifera.",
    },
  });
  const withaferinA = await prisma.constituent.upsert({
    where: { slug: "withaferin-a" },
    update: {},
    create: {
      name: "Withaferin A",
      slug: "withaferin-a",
      type: "steroidal lactone",
      description: "The most studied withanolide in ashwagandha. It has been investigated in lab and animal research for protecting nerve cells and for effects on cancer cells.",
    },
  });

  for (const constituentId of [withanolides.id, withaferinA.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: ashwagandha.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: ashwagandha.id, constituentId },
      });
    }
  }

  // --- tradition (Ayurveda; Mikulska 2023 confirms ~3000 years of use as a
  // rasayana/nervous-system tonic) ---
  const ayurveda = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: "ayurveda" } });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: ashwagandha.id, traditionId: ayurveda.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: ashwagandha.id,
        traditionId: ayurveda.id,
        notes:
          "One of the main rasayana (rejuvenating) herbs in Ayurveda, used for nearly 3,000 years to strengthen the nervous system, boost sex drive and build general strength. Its Sanskrit name means \"smell of horse\", referring to the root's distinctive smell and to the vigor it was traditionally believed to give.\n\nTechnical detail: nervine tonic, aphrodisiac.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Ashwagandha has been used in Ayurvedic medicine for nearly 3,000 years as a rasayana, a rejuvenating herb believed to strengthen the nervous system. The root has traditionally been used to boost sex drive, bring on sleep, restore strength, increase urination, expel intestinal worms and stimulate the body.\n\nTechnical detail: aphrodisiac, narcotic, tonic, diuretic, anthelmintic, stimulant.",
      sourceId: mikulskaReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab and animal studies, withaferin A and related compounds (withanolides) protected nerve cells. This included reducing the buildup of proteins linked to Alzheimer's disease, and switching on the cell's protective stress response in models of Huntington's disease. They also acted against bacteria, including the antibiotic-resistant \"superbug\" MRSA, and caused breast, colon, lung and prostate cancer cells to die in the lab.\n\nTechnical detail: reduced beta-amyloid aggregation; inhibited tau accumulation; heat shock response activation; methicillin-resistant Staphylococcus aureus; pro-apoptotic activity against cancer cell lines.",
      sourceId: mikulskaReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review that combined 9 trials with 558 people found ashwagandha products lowered stress, anxiety and levels of the stress hormone cortisol more than placebo (a dummy pill), with few reported side effects. The authors noted that more data is needed on long-term safety.\n\nTechnical detail: systematic review and meta-analysis of randomized controlled trials; Hamilton Anxiety Rating Scale; serum cortisol.",
      sourceId: stressAnxietyMeta.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research suggests some ashwagandha products may help with insomnia and stress, but it's unclear whether they help anxiety specifically. Limited evidence suggests taking ashwagandha for 2 to 4 months may improve testosterone levels and sperm quality in men, but more research is needed. There isn't enough reliable evidence to know whether it helps asthma, athletic performance, memory and thinking, diabetes, menopause symptoms, female infertility or COVID-19.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: ashwagandha.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: ashwagandha.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Ashwagandha can cause drowsiness, stomach upset, diarrhea and vomiting. It appears safe for most people for up to 3 months, but there isn't enough data on longer use.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Rarely, ashwagandha products have caused liver damage. It usually appeared 2 to 12 weeks after starting (in some cases as early as about 30 hours), often with yellowing of the skin or eyes (jaundice) and itching. Most cases were mild to moderate and cleared up within 1 to 5 months of stopping. A few cases in people who already had long-term liver disease were severe. Because products are sometimes mixed with other herbs or mislabeled, it isn't always certain that ashwagandha itself caused the damage.\n\nTechnical detail: clinically apparent liver injury, usually cholestatic or mixed pattern, with pruritus; self-limited.",
      sourceId: liverTox.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "The US National Center for Complementary and Integrative Health (NCCIH) advises avoiding ashwagandha if you are pregnant or breastfeeding, before or after surgery, or if you have an autoimmune disease, a thyroid condition, or hormone-sensitive prostate cancer.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "NCCIH lists pregnancy and breastfeeding as reasons to avoid ashwagandha. Older herbal and official sources, including the WHO, also advise against it in pregnancy, partly because the plant was historically recorded as being used to cause miscarriage. A 2025 review traced that claim mainly to a single 1869 anecdote (Stewart's Punjab Plants) and found no miscarriage or fertility effects in modern animal studies at high doses. It also noted that most historical reports were about the above-ground parts, not the root used in Ayurveda and most modern products. Because there is no controlled safety data in pregnant people either way, avoiding it during pregnancy is still the standard advice.\n\nTechnical detail: modern animal studies used doses up to 3000 mg/kg body weight; abortifacient and antifertility effects.",
      sourceId: abortifacientReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Ashwagandha may interact with medicines for diabetes, high blood pressure and thyroid conditions, as well as medicines that suppress the immune system, sedatives and seizure medicines. It has a calming, sleep-inducing effect, and early evidence suggests it may strengthen the effects of benzodiazepines and other sedative or anti-anxiety medicines.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: ashwagandha.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: ashwagandha.id, ...record },
      });
    }
  }

  console.log("Ashwagandha populated from 5 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
