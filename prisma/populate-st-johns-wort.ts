import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// St. John's Wort, populated from four real, verified sources. Nothing here
// is invented — every claim traces to one of the Source records below, all
// fetched and checked against the live page/article before being written
// here. NCBI Taxonomy (txid 65561), Wikipedia's taxobox, and ITIS (TSN
// 21454) were cross-checked directly for taxonomy/synonyms, but per the
// chamomile/turmeric templates' pattern, taxonomy references aren't stored
// as their own Source row.
//
// This is one of the most safety-critical entries in the database: St.
// John's wort is a potent inducer of CYP3A4/CYP2C19/CYP2C9/CYP1A2/CYP2D6
// and P-glycoprotein (via hyperforin-driven PXR activation), giving it an
// unusually broad herb-drug interaction profile. Safety records below are
// kept granular and each traced to a specific source rather than blended
// into one generic warning.

async function main() {
  const sjw = await prisma.herb.findUniqueOrThrow({ where: { name: "St. John's Wort" } });

  // --- botanical profile (Hypericaceae; cross-checked via NCBI Taxonomy
  // txid 65561, ITIS TSN 21454, and Wikipedia's sourced taxobox) ---
  await prisma.herb.update({
    where: { id: sjw.id },
    data: {
      family: "Hypericaceae",
      genus: "Hypericum",
      species: "perforatum",
      nativeRange:
        "Native to Europe, Western Asia, and North Africa; naturalized worldwide, including North America and Australia",
      partsUsed: "Aerial parts (flowering tops, leaves, flowers)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (NCBI Taxonomy / ITIS / Wikipedia's sourced taxobox for
  // scientific synonyms and common names; Nobakht et al. 2022 for the TCM
  // traditional name) ---
  const synonyms: {
    name: string;
    type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "TRADITIONAL_NAME" | "REGIONAL_NAME";
    region?: string;
  }[] = [
    { name: "Hypericum officinale Gaterau", type: "SCIENTIFIC_SYNONYM" },
    { name: "Hypericum officinarum Crantz", type: "SCIENTIFIC_SYNONYM" },
    { name: "Hypericum vulgare Lam.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Klamath Weed", type: "COMMON_NAME" },
    { name: "Tipton Weed", type: "COMMON_NAME" },
    { name: "Goatweed", type: "COMMON_NAME" },
    { name: "Guan Ye Lian Qiao (贯叶连翘)", type: "TRADITIONAL_NAME", region: "China (TCM)" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: sjw.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: sjw.id, name: syn.name, type: syn.type, region: syn.region },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/st-johns-wort", {
    title: "St. John's Wort: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-05-01"),
    url: "https://www.nccih.nih.gov/health/st-johns-wort",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const nccihDepthDepression = await findOrCreateSource(
    "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
    {
      title: "St. John's Wort and Depression: In Depth",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: new Date("2017-12-01"),
      url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  const cochraneReview = await findOrCreateSource("https://pubmed.ncbi.nlm.nih.gov/18843608/", {
    title: "St John's wort for major depression",
    author: "Linde K, Berner MM, Kriston L",
    organization: "Cochrane Database of Systematic Reviews",
    journal: "Cochrane Database of Systematic Reviews",
    publicationDate: new Date("2008-10-08"),
    doi: "10.1002/14651858.CD000448.pub3",
    pmid: "18843608",
    url: "https://pubmed.ncbi.nlm.nih.gov/18843608/",
    sourceType: "systematic_review",
    tier: "TIER_2_SYSTEMATIC_REVIEW",
  });

  const nobakhtReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC9526892/", {
    title: "Hypericum perforatum: Traditional uses, clinical trials, and drug interactions",
    author: "Nobakht SZ, Akaberi M, Mohammadpour AH, Tafazoli Moghadam A, Emami SA",
    organization: "Iranian Journal of Basic Medical Sciences",
    journal: "Iranian Journal of Basic Medical Sciences",
    publicationDate: new Date("2022-09-01"),
    doi: "10.22038/IJBMS.2022.65112.14338",
    pmid: "36246064",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9526892/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // --- constituents (hypericin already exists in the taxonomy seed; add
  // pseudohypericin, the other key naphthodianthrone, and hyperforin, the
  // prenylated phloroglucinol responsible for most of the drug-interaction
  // profile — all documented in the Nobakht et al. 2022 review) ---
  const pseudohypericin = await prisma.constituent.upsert({
    where: { slug: "pseudohypericin" },
    update: {},
    create: { name: "Pseudohypericin", slug: "pseudohypericin", type: "naphthodianthrone" },
  });
  const hyperforin = await prisma.constituent.upsert({
    where: { slug: "hyperforin" },
    update: {},
    create: { name: "Hyperforin", slug: "hyperforin", type: "phloroglucinol derivative" },
  });
  const hypericin = await prisma.constituent.findUniqueOrThrow({ where: { slug: "hypericin" } });

  for (const constituentId of [hypericin.id, pseudohypericin.id, hyperforin.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: sjw.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: sjw.id, constituentId },
      });
    }
  }

  // --- traditions (NCCIH confirms use "in various systems of traditional
  // medicine, including Greek, Islamic, and Chinese medicine"; Nobakht et
  // al. 2022 gives system-specific detail for Greek and Chinese medicine) ---
  const traditionSlugs = [
    {
      slug: "western-herbalism",
      notes:
        "Historically used for depression, stomach ulcers, colds, and to aid wound healing; the common name is thought to derive from the plant's tendency to bloom around the feast of St. John the Baptist in late June.",
    },
    {
      slug: "mediterranean-folk-medicine",
      notes:
        "In ancient Greek medicine, used for snake or reptile bites, gastrointestinal distress, menstrual cramping, melancholy/depression, and wound healing.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes:
        "Known as Guan Ye Lian Qiao (贯叶连翘); historically used for hematemesis, hemoptysis, metrorrhagia, irregular menstruation, traumatic hemorrhage, and wound care.",
    },
  ];
  for (const t of traditionSlugs) {
    const tradition = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: t.slug } });
    const existingTradition = await prisma.herbTradition.findFirst({
      where: { herbId: sjw.id, traditionId: tradition.id },
    });
    if (!existingTradition) {
      await prisma.herbTradition.create({
        data: { herbId: sjw.id, traditionId: tradition.id, notes: t.notes },
      });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "St. John's wort has been widely used in various systems of traditional medicine, including Greek, Islamic, and Chinese medicine, historically for depression, stomach ulcers, colds, and to aid wound healing.",
      sourceId: nccih.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In Islamic traditional medicine it was documented for infectious wounds, burns, and bruises, and used as a diuretic and emmenagogue, an antipyretic, and a treatment for sciatica. In Traditional Chinese Medicine (as Guan Ye Lian Qiao) it was used for hematemesis, hemoptysis, metrorrhagia, irregular menstruation, traumatic hemorrhage, and wound care.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Hyperforin activates the pregnane X receptor (PXR), which induces cytochrome P450 enzymes — including CYP3A4, CYP2C19, CYP2C9, CYP1A2, and CYP2D6 — as well as the drug efflux transporter P-glycoprotein (P-gp/ABCB1). The degree of CYP3A4 induction correlates with the hyperforin content of the preparation, providing the pharmacological basis for St. John's wort's extensive herb-drug interaction profile; low-hyperforin extracts show minimal induction while high-hyperforin products show significant induction.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A 2008 Cochrane systematic review of 29 randomized, double-blind trials (5,489 patients) found the hypericum extracts tested were superior to placebo in patients with major depression, similarly effective to standard antidepressants, and had fewer side effects than standard antidepressants. However, trials from German-speaking countries showed clearly more positive effects than trials from elsewhere, complicating interpretation, and the authors noted results apply only to the specific extracts tested, since marketed products vary considerably in pharmaceutical quality.",
      sourceId: cochraneReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Individual trial results have been mixed: a 12-week 2011 trial found neither St. John's wort nor citalopram outperformed placebo for minor depression; a 26-week 2012 trial found St. John's wort, sertraline, and placebo similarly effective for moderate major depression; and a 2002 trial found St. John's wort no more effective than placebo for moderate major depression. A 2008 review concluded it may be better than placebo and as effective as standard prescription antidepressants for mild-to-moderate major depression.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research suggests St. John's wort may be helpful for mild or moderate depression and appears about as effective as standard antidepressant medications for mild or moderate depression over periods of up to 12 weeks, though effectiveness for severe depression or use beyond 12 weeks remains uncertain. Limited evidence suggests possible benefit for menopausal hot flashes and somatic symptom disorder; minimal research supports its use for ADHD, irritable bowel syndrome, obsessive-compulsive disorder, premenstrual syndrome, smoking cessation, or topical wound healing.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: sjw.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: sjw.id, ...entry } });
    }
  }

  // --- safety: kept granular given the unusually broad interaction profile ---
  const safetyRecords = [
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Hyperforin-driven activation of the pregnane X receptor (PXR) induces cytochrome P450 enzymes (CYP3A4, CYP2C19, CYP2C9, CYP1A2, CYP2D6) and the P-glycoprotein drug transporter, which is the pharmacological mechanism behind St. John's wort's broad drug-interaction profile; the strength of the interaction correlates with the hyperforin content of the specific product used.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Can weaken the effects of many medicines, including antidepressants, birth control pills, cyclosporine, digoxin, oxycodone, HIV drugs such as indinavir and nevirapine, cancer medications such as irinotecan, imatinib, and docetaxel, warfarin, seizure medications such as phenytoin and carbamazepine, heart medications such as digoxin and ivabradine, and statins such as simvastatin.",
      sourceId: nccih.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Combining St. John's wort with certain antidepressants and other serotonergic medications can lead to a potentially life-threatening increase in serotonin (serotonin syndrome), with symptoms including agitation, diarrhea, fast heartbeat, high blood pressure, hallucinations, and elevated body temperature.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Reduces blood levels of the immunosuppressants cyclosporine and tacrolimus through CYP3A4/P-gp induction, creating a risk of transplant organ rejection if co-administered without monitoring.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Reduces the effectiveness of oral contraceptives, increasing the chance of ovulation and breakthrough bleeding.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "A photosensitizing interaction has been observed when St. John's wort is combined with rifampicin, particularly in women.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Possible side effects include upset stomach, diarrhea, dry mouth, headache, fatigue, dizziness, confusion, sexual dysfunction, trouble sleeping, restlessness, and skin tingling.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "St. John's wort is a stimulant and may worsen feelings of anxiety in some people.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "When taken orally in large doses or applied topically, St. John's wort might cause severe skin reactions after sun exposure (photosensitivity).",
      sourceId: nccih.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Case reports document worsening of psychotic symptoms in people with bipolar disorder or schizophrenia; St. John's wort should not be used to replace conventional care or to postpone seeing a health care provider about a mental health problem.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "May be unsafe to use during pregnancy because it may increase the risk of birth defects; there is little safety information on its use in pregnant women.",
      sourceId: nccih.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Breastfed infants of mothers taking St. John's wort may experience colic, drowsiness, and lethargy; little safety information exists overall for use while breastfeeding.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: sjw.id, category: record.category, sourceId: record.sourceId, description: record.description },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: sjw.id, ...record },
      });
    }
  }

  console.log("St. John's Wort populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
