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
      nativeRange: "Middle East, North Africa, southern Europe, Indian subcontinent, and Southeast Asia",
      partsUsed: "Root (traditionally preferred); root and leaf powders/extracts also used",
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
      description: "Class of C28 steroidal lactones; the principal bioactive constituents of Withania somnifera, with roughly 40 withanolides isolated from the plant.",
    },
  });
  const withaferinA = await prisma.constituent.upsert({
    where: { slug: "withaferin-a" },
    update: {},
    create: {
      name: "Withaferin A",
      slug: "withaferin-a",
      type: "steroidal lactone",
      description: "The most studied withanolide in Withania somnifera; investigated in preclinical research for neuroprotective and anticancer activity.",
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
          "One of the principal rasayana (rejuvenative) herbs in Ayurveda, used for nearly 3000 years as a nervine tonic, aphrodisiac, and general strengthening agent; its Sanskrit name (\"smell of horse\") refers to the root's characteristic odor and to the vigor it was traditionally believed to confer.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Used in Ayurvedic medicine for nearly 3000 years as a rasayana (rejuvenative) herb believed to strengthen the nervous system; the root has traditionally been used as an aphrodisiac, narcotic, tonic, diuretic, anthelmintic, and stimulant.",
      sourceId: mikulskaReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Withaferin A and other withanolides have shown neuroprotective activity in laboratory and animal models, including reduced beta-amyloid aggregation and inhibited tau protein accumulation relevant to Alzheimer's disease, activation of the heat shock response in Huntington's disease models, and antibacterial activity against organisms including methicillin-resistant Staphylococcus aureus. Withanolides have also shown pro-apoptotic activity against breast, colon, lung, and prostate cancer cell lines.",
      sourceId: mikulskaReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A systematic review and meta-analysis of 9 randomized controlled trials (558 participants) found that Ashwagandha formulations produced statistically significant reductions in perceived stress, anxiety (Hamilton Anxiety Rating Scale), and serum cortisol compared with placebo, with limited reported adverse effects; the authors noted more data are needed on long-term safety.",
      sourceId: stressAnxietyMeta.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research indicates that some ashwagandha preparations may be effective for insomnia and stress, though evidence for anxiety specifically remains unclear. Limited evidence suggests taking ashwagandha for 2 to 4 months may improve testosterone levels and sperm quality in men, though more research is needed. There isn't enough reliable evidence to show whether ashwagandha is helpful for asthma, athletic performance, cognitive function, diabetes, menopause symptoms, female infertility, or COVID-19.",
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
        "Can cause drowsiness, stomach upset, diarrhea, and vomiting. Appears safe for most people when used for up to 3 months, but data on longer-term safety are insufficient.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Rare but documented cases of clinically apparent liver injury have been reported, typically presenting 2 to 12 weeks (and in some reported cases as early as ~30 hours) after starting ashwagandha-containing products, usually with a cholestatic or mixed pattern of injury, jaundice, and pruritus. Most cases were mild-to-moderate and self-limited, resolving within 1 to 5 months of stopping the product, though a minority of cases in patients with underlying chronic liver disease have been severe. Because commercial products are sometimes mixed with other herbs or mislabeled, it is not always certain the injury was caused by ashwagandha itself rather than a contaminant.",
      sourceId: liverTox.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "NCCIH advises avoiding ashwagandha if pregnant or breastfeeding, before or after surgery, or if you have an autoimmune disorder, a thyroid disorder, or hormone-sensitive prostate cancer.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "NCCIH lists pregnancy and breastfeeding as reasons to avoid ashwagandha. Older herbal and regulatory sources, including the WHO monograph, contraindicate use in pregnancy in part because the crude drug was historically documented as being used to induce abortion. A 2025 critical review traced that historical claim mainly to a single 1869 anecdotal source (Stewart's Punjab Plants) and found no abortifacient or antifertility effect in modern animal studies using doses up to 3000 mg/kg body weight; it also noted most historical reports referred to the above-ground plant parts rather than the root, which is the part used in Ayurveda and in most modern preparations. Given the lack of controlled human pregnancy safety data either way, avoidance during pregnancy remains the prevailing guidance.",
      sourceId: abortifacientReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "May interact with medications for diabetes, high blood pressure, and thyroid conditions, as well as immunosuppressants, sedatives, and anticonvulsants. Ashwagandha has sedative effects and there is preliminary evidence it may increase the effects of benzodiazepines and other sedative/anti-anxiety drugs.",
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
