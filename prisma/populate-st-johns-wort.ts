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
        "Native to Europe, Western Asia and North Africa. It now grows wild in many places, including North America and Australia.",
      partsUsed: "The parts above ground: flowering tops, leaves and flowers",
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
        "Historically used for depression, stomach ulcers, colds and wound healing. The name probably comes from the plant blooming around the feast of St. John the Baptist in late June.",
    },
    {
      slug: "mediterranean-folk-medicine",
      notes:
        "In ancient Greek medicine, used for snake bites, stomach upset, menstrual cramps, low mood and wounds.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes:
        "Known as Guan Ye Lian Qiao (贯叶连翘). Historically used for vomiting or coughing up blood, bleeding between periods, irregular periods, bleeding from injuries and wound care.\n\nTechnical detail: hematemesis, hemoptysis, metrorrhagia, traumatic hemorrhage.",
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
        "St. John's wort has been widely used in Greek, Islamic and Chinese medicine. Historically, it has been used for depression, stomach ulcers, colds and wound healing.",
      sourceId: nccih.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In Islamic traditional medicine, it was used for infected wounds, burns and bruises; to increase urination; to bring on menstruation; to lower fever; and for sciatica (nerve pain down the leg). In Traditional Chinese Medicine (as Guan Ye Lian Qiao), it was used for vomiting or coughing up blood, bleeding between periods, irregular periods, bleeding from injuries and wound care.\n\nTechnical detail: diuretic, emmenagogue, antipyretic; hematemesis, hemoptysis, metrorrhagia, traumatic hemorrhage.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "This research explains St. John's wort's drug interactions. A compound in the plant called hyperforin switches on a sensor in the body that speeds up the liver enzymes and \"pump\" proteins that clear many medicines out of the body. The more hyperforin a product has, the stronger this effect. Low-hyperforin extracts showed little effect.\n\nTechnical detail: hyperforin activates the pregnane X receptor (PXR), inducing CYP3A4, CYP2C19, CYP2C9, CYP1A2 and CYP2D6, and the efflux transporter P-glycoprotein (P-gp/ABCB1); CYP3A4 induction correlates with hyperforin content.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A 2008 Cochrane review pooled 29 high-quality trials with 5,489 people with major depression. The extracts tested worked better than placebo (a dummy pill), about as well as standard antidepressants, and caused fewer side effects. But trials from German-speaking countries were much more positive than trials elsewhere, which makes the results harder to interpret. The findings only apply to the specific extracts tested, and products on the shelf vary a lot in quality.\n\nTechnical detail: randomized, double-blind trials of hypericum extracts.",
      sourceId: cochraneReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Individual trials have had mixed results:\n- 2011, 12 weeks, minor depression: neither St. John's wort nor the antidepressant citalopram did better than placebo.\n- 2012, 26 weeks, moderate major depression: St. John's wort, the antidepressant sertraline and placebo all worked about equally.\n- 2002, moderate major depression: St. John's wort did no better than placebo.\nA 2008 review concluded it may be better than placebo, and as effective as standard antidepressants, for mild to moderate major depression.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "St. John's wort may help mild or moderate depression, and seems about as effective as standard antidepressants over periods of up to 12 weeks. It's unclear whether it helps severe depression or works beyond 12 weeks. Limited evidence suggests it might help menopausal hot flashes and somatic symptom disorder (intense distress about physical symptoms). There is little research support for ADHD, irritable bowel syndrome, obsessive-compulsive disorder, PMS, quitting smoking or healing wounds on the skin.",
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
        "Why St. John's wort interacts with so many medicines: a compound in it called hyperforin speeds up the liver enzymes and \"pump\" proteins that clear medicines from the body. The stronger the product's hyperforin content, the stronger the interaction.\n\nTechnical detail: PXR activation inducing CYP3A4, CYP2C19, CYP2C9, CYP1A2, CYP2D6 and P-glycoprotein.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "St. John's wort can make many medicines work less well, including:\n- Antidepressants\n- Birth control pills\n- Transplant medicines such as cyclosporine\n- Heart medicines such as digoxin and ivabradine\n- The pain medicine oxycodone\n- HIV medicines such as indinavir and nevirapine\n- Cancer medicines such as irinotecan, imatinib and docetaxel\n- The blood thinner warfarin\n- Seizure medicines such as phenytoin and carbamazepine\n- Cholesterol medicines (statins) such as simvastatin",
      sourceId: nccih.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Taken with certain antidepressants or other medicines that raise serotonin, St. John's wort can cause serotonin to build up to dangerous, possibly life-threatening levels (serotonin syndrome). Signs include agitation, diarrhea, a fast heartbeat, high blood pressure, hallucinations and a high body temperature.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "St. John's wort lowers blood levels of the transplant medicines cyclosporine and tacrolimus. This can lead to organ rejection if they're taken together without monitoring.\n\nTechnical detail: via CYP3A4/P-gp induction.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "St. John's wort makes birth control pills less effective, raising the chance of ovulation and breakthrough bleeding.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Sun-sensitivity reactions have been seen when St. John's wort is combined with the antibiotic rifampicin, especially in women.",
      sourceId: nobakhtReview.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Possible side effects include upset stomach, diarrhea, dry mouth, headache, tiredness, dizziness, confusion, sexual problems, trouble sleeping, restlessness and skin tingling.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "St. John's wort can be stimulating and may make anxiety worse in some people.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Large doses by mouth, or use on the skin, might cause severe skin reactions after time in the sun (photosensitivity).",
      sourceId: nccih.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "There are reports of St. John's wort worsening psychotic symptoms in people with bipolar disorder or schizophrenia. Don't use it to replace regular care, or as a reason to put off seeing a health professional about a mental health problem.",
      sourceId: nccihDepthDepression.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "St. John's wort may be unsafe during pregnancy because it may raise the risk of birth defects. There is little safety information on its use by pregnant women.",
      sourceId: nccih.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Babies of mothers taking St. John's wort may have colic, drowsiness or low energy. There is little safety information overall on its use while breastfeeding.",
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
