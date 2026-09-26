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
      nativeRange: "Southwestern India. Turmeric is known only as a cultivated plant and isn't found growing in the wild.",
      partsUsed: "The rhizome, the underground stem usually called turmeric root",
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
        "Known as Haridra in Sanskrit and Haldi in Hindi. Traditionally used for digestive problems, arthritis, skin diseases and inflammation, and valued for easing inflammation and pain.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes:
        "Known as Jiang Huang (姜黄). Traditionally used to \"promote blood circulation\", \"resolve blood stasis\" (poor blood flow, in Chinese medicine terms) and relieve pain, and prescribed for conditions involving \"stagnation\" and swelling.",
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
        "Turmeric has historically been used in Chinese, Indian (including Ayurvedic), Islamic and Thai traditional medicine for indigestion, the common cold, skin infections, arthritis, stomach pain and liver disease. It has also been used in some Indian religious ceremonies.",
      sourceId: nccih.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In Ayurvedic practice, turmeric (Haridra) has been used for digestive problems, arthritis, skin diseases and inflammation. In Traditional Chinese Medicine, turmeric (Jiang Huang) has been used to \"promote blood circulation\", \"resolve blood stasis\" and relieve pain, often for conditions involving \"stagnation\" and swelling.",
      sourceId: turmericFunctionalFoodReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab tests on cartilage cells and tissue, curcumin (turmeric's best-known natural compound) reduced chemical signals that drive inflammation, slowed the enzymes that break down cartilage, and helped protect cartilage cells from damage.\n\nTechnical detail: inhibits NF-κB activation; reduces COX-2, IL-6, IL-8 and PGE2; suppresses matrix metalloproteinase synthesis; counteracts IL-1β cytotoxicity in chondrocytes; stimulates anti-apoptotic factors; in vitro on chondrocytes and cartilage explants.",
      sourceId: henrotinOAReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab research, curcumin switched on the body's own antioxidant defenses and affected genetic signals linked to cancer.\n\nTechnical detail: activates Nrf2, inducing heme oxygenase-1 (HO-1), superoxide dismutase (SOD), catalase and glutathione peroxidase (GPx); modulates microRNAs and long noncoding RNAs in cancer-related signaling pathways.",
      sourceId: turmericFunctionalFoodReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review that combined 15 trials with 1,670 people found curcumin-type compounds reduced knee arthritis pain more than placebo, by an amount large enough to matter to patients, and improved scores for pain, stiffness and function. Side effects were no more common than with placebo, and less common than with standard painkillers such as ibuprofen (NSAIDs). The authors concluded these compounds help pain and function in the short term, but advised cautious use until better-quality evidence is available.\n\nTechnical detail: randomized controlled trials of curcuminoids; VAS pain WMD −1.77 (95% CI −2.44 to −1.09); WOMAC total WMD −10.47 (95% CI −15.65 to −5.3).",
      sourceId: curcuminoidsOAMetaAnalysis.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Several research reviews show early positive evidence that turmeric or curcumin taken by mouth may help knee arthritis (pain, stiffness, strength and movement), but better-quality studies are needed. It's unclear whether curcumin ointment on the skin helps knee pain. Early research suggests turmeric or curcumin by mouth might improve some measures of fatty liver disease not caused by alcohol (NAFLD), and, by mouth or as a mouthwash, mouth sores caused by cancer treatment. Overall, there isn't enough evidence to say for certain that turmeric or curcumin helps with any health condition.\n\nTechnical detail: oral mucositis.",
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
        "Regular turmeric or curcumin taken by mouth (not specially made to be absorbed better) is likely safe in recommended amounts for up to 2–3 months. By mouth, it can cause nausea and vomiting, acid reflux, stomach upset, diarrhea or constipation. On the skin, curcumin can cause hives or itching.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Curcumin products specially made to be absorbed better (\"highly bioavailable\" formulas) may harm the liver. Liver damage has been reported in some people who took them. Warning signs include tiredness, nausea, poor appetite, dark urine and yellowing of the skin or eyes (jaundice).",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "A US network that tracks drug-related liver damage identified 10 cases of liver injury linked to turmeric between 2011 and 2022 (6 of them since 2017). Five people were hospitalized, and one died of sudden liver failure. The damage appeared 1 to 4 months after starting turmeric and was strongly linked to a particular inherited gene variant. Three of the 7 products tested also contained piperine (from black pepper), which is added to help the body absorb curcumin. The authors concluded that turmeric-related liver injury appears to be increasing in the United States.\n\nTechnical detail: Drug-Induced Liver Injury Network (DILIN) case series; hepatocellular injury in 9 of 10 cases; HLA-B*35:01 allele.",
      sourceId: dilinLiverInjuryCaseSeries.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "If you take any medicine, talk with your health care provider before using turmeric or curcumin products, because some herbs and medicines interact in harmful ways.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description: "Turmeric supplements may be unsafe during pregnancy.",
      sourceId: nccih.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Little is known about whether turmeric is safe while breastfeeding in amounts larger than those normally found in food.",
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
