import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Turmeric, populated from five real, verified sources. Nothing here is
// invented — every claim traces to one of the Source records below, all
// fetched and checked against the live page/article before being written
// here (Kew POWO was also checked directly for taxonomy and synonyms, but
// per the chamomile template's pattern taxonomy references aren't stored as
// their own Source row).
//
// Note: a specific claim about turmeric/curcumin interacting with blood
// thinners (e.g. warfarin) was deliberately NOT added as a SafetyRecord.
// The NCCIH page only gives a generic "some herbs and medicines interact in
// harmful ways" caution (included below), and the one primary-literature
// source found on the specific anticoagulant question (Liu AC et al.,
// Planta Med 2013, PMID 23807811) is a rat pharmacokinetics study that
// found curcumin altered warfarin/clopidogrel pharmacokinetics but had NO
// significant effect on anticoagulation or platelet aggregation — too thin
// and mixed to state as a documented interaction risk.

async function main() {
  const turmeric = await prisma.herb.findUniqueOrThrow({ where: { name: "Turmeric" } });

  // --- botanical profile (Kew Plants of the World Online, checked live) ---
  await prisma.herb.update({
    where: { id: turmeric.id },
    data: {
      family: "Zingiberaceae",
      genus: "Curcuma",
      species: "longa",
      nativeRange: "SW. India (known only as a cultigen; not found in the wild)",
      partsUsed: "Rhizome (underground stem)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO for scientific synonyms and NCCIH for the common
  // name "Indian saffron"; Wang et al. 2026 and Ayurvedic/TCM references
  // cross-checked for the Sanskrit, Hindi, and Chinese traditional names) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "TRADITIONAL_NAME" | "REGIONAL_NAME"; region?: string }[] = [
    { name: "Curcuma domestica Valeton", type: "SCIENTIFIC_SYNONYM" },
    { name: "Amomum curcuma Jacq.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Indian Saffron", type: "COMMON_NAME" },
    { name: "Haridra", type: "TRADITIONAL_NAME", region: "India (Ayurveda, Sanskrit)" },
    { name: "Haldi", type: "REGIONAL_NAME", region: "India (Hindi)" },
    { name: "Jiang Huang (姜黄)", type: "TRADITIONAL_NAME", region: "China (TCM)" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: turmeric.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: turmeric.id, name: syn.name, type: syn.type, region: syn.region },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/turmeric", {
    title: "Turmeric: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-04-01"),
    url: "https://www.nccih.nih.gov/health/turmeric",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const curcuminoidsOAMetaAnalysis = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC9580113/",
    {
      title:
        "Efficacy and safety of curcuminoids alone in alleviating pain and dysfunction for knee osteoarthritis: a systematic review and meta-analysis of randomized controlled trials",
      author: "Feng J, Li Z, Tian L, Mu P, Hu Y, Xiong F, Ma X",
      organization: "BMC Complementary Medicine and Therapies",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: new Date("2022-10-19"),
      doi: "10.1186/s12906-022-03740-9",
      pmid: "36261810",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9580113/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const henrotinOAReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC3591524/", {
    title: "Curcumin: a new paradigm and therapeutic opportunity for the treatment of osteoarthritis",
    author: "Henrotin Y, Priem F, Mobasheri A",
    organization: "SpringerPlus",
    journal: "SpringerPlus",
    publicationDate: new Date("2013-02-18"),
    doi: "10.1186/2193-1801-2-56",
    pmid: "23487030",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3591524/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  const turmericFunctionalFoodReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118882/",
    {
      title: "Turmeric: A Comprehensive Review of Its Botany, Traditional Uses, Phytochemistry, and Mechanisms as a Functional Food",
      author: "Wang Z, Zhong W, Zhao W, Zhou Q, Wang Y, Zhang B, Lin Z",
      organization: "Nutrients",
      journal: "Nutrients",
      publicationDate: new Date("2026-04-10"),
      doi: "10.3390/nu18081197",
      pmid: "42075010",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118882/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  const dilinLiverInjuryCaseSeries = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/36252717/",
    {
      title: "Liver Injury Associated with Turmeric—A Growing Problem: Ten Cases from the Drug-Induced Liver Injury Network [DILIN]",
      author: "Halegoua-DeMarzio D, Navarro V, Ahmad J, et al.",
      organization: "The American Journal of Medicine",
      journal: "The American Journal of Medicine",
      publicationDate: new Date("2023-02-01"),
      doi: "10.1016/j.amjmed.2022.09.026",
      pmid: "36252717",
      url: "https://pubmed.ncbi.nlm.nih.gov/36252717/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (curcumin already exists in the taxonomy seed; add
  // demethoxycurcumin and bisdemethoxycurcumin, the other two curcuminoids,
  // and turmerone, the main essential-oil sesquiterpene — all documented in
  // the Wang et al. 2026 Nutrients review) ---
  const demethoxycurcumin = await prisma.constituent.upsert({
    where: { slug: "demethoxycurcumin" },
    update: {},
    create: { name: "Demethoxycurcumin", slug: "demethoxycurcumin", type: "phenolic compound" },
  });
  const bisdemethoxycurcumin = await prisma.constituent.upsert({
    where: { slug: "bisdemethoxycurcumin" },
    update: {},
    create: { name: "Bisdemethoxycurcumin", slug: "bisdemethoxycurcumin", type: "phenolic compound" },
  });
  const turmerone = await prisma.constituent.upsert({
    where: { slug: "turmerone" },
    update: {},
    create: { name: "Turmerone", slug: "turmerone", type: "sesquiterpene" },
  });
  const curcumin = await prisma.constituent.findUniqueOrThrow({ where: { slug: "curcumin" } });

  for (const constituentId of [curcumin.id, demethoxycurcumin.id, bisdemethoxycurcumin.id, turmerone.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: turmeric.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: turmeric.id, constituentId },
      });
    }
  }

  // --- traditions (NCCIH confirms turmeric has been used "in Chinese,
  // Indian (e.g., Ayurvedic)... traditional medicine systems"; Wang et al.
  // 2026 gives system-specific detail for Ayurveda and TCM) ---
  const traditionSlugs = [
    {
      slug: "ayurveda",
      notes:
        "Known as Haridra (Sanskrit) or Haldi (Hindi); traditionally used as a remedy for digestive disorders, arthritis, skin diseases, and inflammatory conditions, valued for reducing inflammation and pain.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes:
        "Known as Jiang Huang (姜黄); traditionally used to promote blood circulation, resolve blood stasis, and relieve pain, and prescribed for conditions involving stagnation and swelling.",
    },
  ];
  for (const t of traditionSlugs) {
    const tradition = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: t.slug } });
    const existingTradition = await prisma.herbTradition.findFirst({
      where: { herbId: turmeric.id, traditionId: tradition.id },
    });
    if (!existingTradition) {
      await prisma.herbTradition.create({
        data: { herbId: turmeric.id, traditionId: tradition.id, notes: t.notes },
      });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Turmeric has historically been used in Chinese, Indian (e.g., Ayurvedic), Islamic, and Thai traditional medicine systems for conditions such as indigestion, the common cold, skin infections, arthritis, abdominal pain, and liver disease, and has also been used in some Indian religious ceremonies.",
      sourceId: nccih.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In Ayurvedic practice turmeric (Haridra) has been used as a remedy for digestive disorders, arthritis, skin diseases, and inflammatory conditions. In Traditional Chinese Medicine, turmeric (Jiang Huang) has been used to promote blood circulation, resolve blood stasis, and relieve pain, often prescribed for conditions involving stagnation and swelling.",
      sourceId: turmericFunctionalFoodReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Curcumin inhibits NF-κB activation and reduces pro-inflammatory mediators (COX-2, IL-6, IL-8, PGE2), suppresses matrix metalloproteinase synthesis that drives cartilage degradation, counteracts IL-1β cytotoxicity in chondrocytes, and stimulates anti-apoptotic factors — effects demonstrated in vitro on chondrocytes and cartilage explants.",
      sourceId: henrotinOAReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Curcumin activates nuclear factor erythroid 2-related factor 2 (Nrf2), inducing antioxidant enzymes including heme oxygenase-1 (HO-1), superoxide dismutase (SOD), catalase, and glutathione peroxidase (GPx), and modulates microRNAs and long noncoding RNAs implicated in cancer-related signaling pathways.",
      sourceId: turmericFunctionalFoodReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A systematic review and meta-analysis of 15 randomized controlled trials (1,670 patients) found curcuminoids alone reduced knee osteoarthritis pain versus placebo (VAS pain WMD -1.77, 95% CI -2.44 to -1.09, exceeding the clinical significance threshold) and improved WOMAC total score (WMD -10.47, 95% CI -15.65 to -5.3), with adverse event rates not significantly different from placebo and lower than with NSAIDs. The authors concluded curcuminoids show short-term analgesic and functional benefit but recommended cautious, conservative clinical use pending higher-quality evidence.",
      sourceId: curcuminoidsOAMetaAnalysis.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Several meta-analyses of oral turmeric or curcumin for knee osteoarthritis (pain, stiffness, joint strength, and mobility) show positive initial evidence, though higher-quality evidence is needed; it is unclear whether topical curcumin ointment affects knee osteoarthritis pain. Initial research suggests oral turmeric or curcumin might improve some measures of non-alcoholic fatty liver disease (NAFLD) and, in oral or mouthwash form, symptoms of cancer-treatment-related oral mucositis, but overall there is not enough evidence to definitively conclude turmeric or curcumin is beneficial for any health purpose.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: turmeric.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: turmeric.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Conventionally formulated oral turmeric or curcumin (not modified to enhance bioavailability) is likely safe in recommended amounts for up to 2-3 months. Oral turmeric can cause nausea and vomiting, acid reflux, stomach upset, diarrhea, or constipation; topical curcumin can cause hives or itching.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Highly bioavailable formulations of curcumin, which enhance the body's ability to absorb curcumin, may harm the liver; liver damage has been reported in some people who consumed these bioavailable formulations. Warning signs include fatigue, nausea, poor appetite, dark urine, or jaundice.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "A US Drug-Induced Liver Injury Network (DILIN) case series identified 10 cases of turmeric-associated liver injury enrolled between 2011 and 2022 (6 since 2017); liver injury was hepatocellular in 9 of 10 cases, 5 patients were hospitalized, and 1 died of acute liver failure. Injury had a latency of 1 to 4 months and was strongly linked to the HLA-B*35:01 allele; 3 of 7 chemically analyzed products also contained piperine (black pepper), which is used to boost curcumin bioavailability. The authors concluded turmeric-related liver injury appears to be increasing in the United States.",
      sourceId: dilinLiverInjuryCaseSeries.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "People who take any type of medicine should talk with their health care provider before using turmeric or curcumin products, as some herbs and medicines interact in harmful ways.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description: "The use of turmeric supplements during pregnancy may be unsafe.",
      sourceId: nccih.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Little is known about whether it's safe to use turmeric in amounts greater than those commonly found in food while breastfeeding.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: turmeric.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: turmeric.id, ...record },
      });
    }
  }

  console.log("Turmeric populated from 5 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
