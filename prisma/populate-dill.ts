import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Dill, populated from three real, verified sources.
// Nothing here is invented — every claim traces to one of the three Source
// records below, each fetched and checked against the live page/document
// before being written here.
//
// Tier-1 source note: NCCIH has no dedicated dill page (confirmed live:
// nccih.nih.gov/health/herbsataglance was fetched and its full 59-herb index
// does not include dill), and the EMA/HMPC has not published a "Anethi
// fructus" (dill fruit) Community herbal monograph. Instead, the WHO
// "Monographs on Selected Medicinal Plants, Volume 3" (2007) "Fructus
// Anethi" monograph (pp. 33-41) is used as the Tier-1 government source,
// matching the WHO-monograph fallback pattern described for this project.
// The full monograph text (definition, synonyms, vernacular names,
// pharmacology, toxicology, contraindications, posology) was fetched and
// read from the official WHO IRIS repository PDF before writing this file.

async function main() {
  const dill = await prisma.herb.findUniqueOrThrow({ where: { name: "Dill" } });

  // --- botanical profile ---
  // Family/genus/species confirmed against both GBIF Backbone Taxonomy
  // (species match for "Anethum graveolens", status ACCEPTED, family
  // Apiaceae, genus Anethum) and NCBI Taxonomy (TaxID 40922, family
  // Apiaceae, genus Anethum, GenBank common name "dill").
  // partsUsed and nativeRange per the WHO Fructus Anethi monograph, which
  // covers the dried ripe fruit (seed) of Anethum graveolens L. and notes
  // the plant is "indigenous to southern Europe" and "cultivated widely
  // throughout the world"; the leaf ("dill weed") use is documented in the
  // Jana & Shekhawat phytochemistry review below.
  await prisma.herb.update({
    where: { id: dill.id },
    data: {
      family: "Apiaceae",
      genus: "Anethum",
      species: "graveolens",
      nativeRange: "Originally from southern Europe; now grown around the world",
      partsUsed: "The dried ripe seeds (botanically small fruits, called \"Fructus Anethi\" in herbal references) and the fresh or dried leaves (\"dill weed\")",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms, taken verbatim from the WHO Fructus Anethi monograph's
  // "Synonyms" and "Selected vernacular names" sections ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; language?: string; region?: string }[] = [
    { name: "Pastinaca anethum Spreng.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Peucedanum graveolens Benth. & Hook.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Selinum anethum Roth", type: "SCIENTIFIC_SYNONYM" },
    { name: "Garden Dill", type: "COMMON_NAME" },
    { name: "Aneth", type: "COMMON_NAME", language: "French" },
    { name: "Sowa", type: "COMMON_NAME", region: "India" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: dill.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: {
          herbId: dill.id,
          name: syn.name,
          type: syn.type,
          language: syn.language,
          region: syn.region,
        },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government source. NCCIH has no dedicated dill page and EMA/HMPC
  // has not published a dill (Anethi fructus) monograph, so the WHO
  // "Monographs on Selected Medicinal Plants, Volume 3" (2007) "Fructus
  // Anethi" monograph is used instead.
  const who = await findOrCreateSource(
    "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y",
    {
      title: "WHO monographs on selected medicinal plants, Volume 3 — \"Fructus Anethi\" monograph (pp. 33-41)",
      organization: "World Health Organization (WHO)",
      publicationDate: new Date("2007-01-01"),
      url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed ethnopharmacology/phytochemistry/traditional-use review.
  const phytochemistryReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC3249919/",
    {
      title: "Anethum graveolens: An Indian traditional medicinal herb and spice",
      author: "Jana S, Shekhawat GS",
      organization: "Pharmacognosy Reviews",
      journal: "Pharmacognosy Reviews",
      publicationDate: new Date("2010-07-01"),
      doi: "10.4103/0973-7847.70915",
      pmid: "22228959",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3249919/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed randomized clinical trial.
  const hyperlipidemiaTrial = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC4235097/",
    {
      title: "Anethum graveolens and hyperlipidemia: A randomized clinical trial",
      author: "Mirhosseini M, Baradaran A, Rafieian-Kopaei M",
      organization: "Journal of Research in Medical Sciences",
      journal: "Journal of Research in Medical Sciences",
      publicationDate: new Date("2014-08-01"),
      pmid: "25422662",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4235097/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (carvone, limonene, and alpha-phellandrene are
  // documented as major dill essential-oil components in both the WHO
  // monograph and the Jana & Shekhawat review; p-cymene already exists in
  // the taxonomy seed from thyme and is also listed as a dill oil
  // constituent by both sources, so it is reused/linked here) ---
  const carvone = await prisma.constituent.upsert({
    where: { slug: "carvone" },
    update: {},
    create: { name: "Carvone", slug: "carvone", type: "volatile oil" },
  });
  const limonene = await prisma.constituent.upsert({
    where: { slug: "limonene" },
    update: {},
    create: { name: "Limonene", slug: "limonene", type: "volatile oil" },
  });
  const alphaPhellandrene = await prisma.constituent.upsert({
    where: { slug: "alpha-phellandrene" },
    update: {},
    create: { name: "Alpha-Phellandrene", slug: "alpha-phellandrene", type: "volatile oil" },
  });
  const pCymene = await prisma.constituent.findUniqueOrThrow({ where: { slug: "p-cymene" } });

  for (const constituentId of [carvone.id, limonene.id, alphaPhellandrene.id, pCymene.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: dill.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: dill.id, constituentId },
      });
    }
  }

  // --- traditions ---
  const ayurveda = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: "ayurveda" } });
  const europeanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "european-folk-medicine" },
  });

  const traditionLinks = [
    {
      traditionId: ayurveda.id,
      notes:
        "In Ayurvedic medicine, where dill is known as \"sowa\", it is traditionally used to relieve gas, settle the stomach and increase urination. Dill seed (Fructus Anethi) is included in the Ayurvedic Pharmacopoeia of India.\n\nTechnical detail: carminative, stomachic, diuretic.",
    },
    {
      traditionId: europeanFolkMedicine.id,
      notes:
        "Dill comes from southern Europe and has a long history of folk use there. Egyptian physicians used it about 5,000 years ago, and traces have been found in Roman ruins in Britain. Dill is the classic ingredient in gripe water, a traditional European remedy given to babies for colic and gas.",
    },
  ];
  for (const link of traditionLinks) {
    const existing = await prisma.herbTradition.findFirst({
      where: { herbId: dill.id, traditionId: link.traditionId },
    });
    if (!existing) {
      await prisma.herbTradition.create({ data: { herbId: dill.id, ...link } });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "The World Health Organization's profile of dill seed lists these traditional uses:\n- Documented in official herbal references: indigestion, stomach inflammation (gastritis), gas and stomach ache.\n- In wider traditional medicine: to boost sex drive, relieve pain, lower fever, increase urination, bring on periods, increase breast milk and stimulate appetite; and for diarrhea, asthma, nerve pain, painful urination, period pain, gallbladder disease, trouble sleeping, hiatus hernia and kidney stones.\nThe WHO states that none of these uses is supported by clinical data (studies in people).\n\nTechnical detail: WHO terms: dyspepsia, gastritis, flatulence; aphrodisiac, analgesic, antipyretic, diuretic, emmenagogue, galactagogue; neuralgia, dysuria, dysmenorrhoea.",
      sourceId: who.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Dill has been used for about 5,000 years. Ancient Egyptian physicians used it, and traces have been found in Roman ruins in Britain. In Ayurvedic medicine, the seed and leaf are used to relieve gas, settle the stomach and increase urination. Dill is a traditional ingredient in gripe water, given for colic in babies and gas in young children.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "The World Health Organization summarizes these lab and animal findings:\n- In lab tests, a dill seed extract relaxed gut muscle, and the essential oil reduced gut contractions and helped break up gas bubbles. This fits dill's traditional use for cramps and gas.\n- Applied to the skin of mice, a seed extract reduced inflammation by 60%.\n- In mice, a water-based seed extract and the essential oil reduced pain about as well as aspirin.\n- Given by injection to dogs and cats, extracts increased urination and lowered blood pressure.\n- One dose of extract lowered blood sugar by 30% in fasting rats.\nThese results come from animals and lab tests. They are not established effects in people.\n\nTechnical detail: 50% ethanol extract inhibited acetylcholine- and histamine-induced contractions of guinea-pig ileum; essential oil reduced rabbit intestine contractions with carminative, antifoaming activity; TPA-induced mouse ear inflammation; hot-plate and acetic-acid writhing tests, comparable to acetylsalicylic acid; intravenous administration in dogs and cats; single intragastric dose in fasted rats.",
      sourceId: who.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "A research review reports that, in lab and animal testing, dill acted against several kinds of bacteria, showed antioxidant activity from natural plant compounds, relaxed gut muscle, and protected the stomach lining against acid- and alcohol-induced damage and ulcers. These are lab and animal findings, not established effects in people.\n\nTechnical detail: antioxidant flavonoids include quercetin and isorhamnetin; mucosal-protective, antisecretory and anti-ulcer activity against HCl- and ethanol-induced lesions.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In one trial, 91 people with high blood fats (cholesterol or triglycerides) took either dill tablets or the cholesterol drug gemfibrozil for 2 months. Among those who completed it, dill lowered total cholesterol more (18% vs. about 9%), while gemfibrozil lowered triglycerides more (about 33% vs. 7%) and raised \"good\" HDL cholesterol slightly (dill didn't change HDL). The authors said dill may help people with high cholesterol and triglycerides, but more research is needed.\n\nTechnical detail: randomized, single-blind; gemfibrozil 900 mg/day vs. six dill tablets daily; 42 completed the gemfibrozil arm and 35 the dill arm; total cholesterol −18% vs. −9.41%; triglycerides −32.7% vs. −7.38%; HDL +3.91% with gemfibrozil.",
      sourceId: hyperlipidemiaTrial.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: dill.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: dill.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Dill seed extracts have traditionally been used to prevent pregnancy and to bring on labor.",
      sourceId: who.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "In animal studies, dill seed extracts may cause birth defects. Using dill seed as a medicine during pregnancy is not recommended.\n\nTechnical detail: possible teratogenic effects.",
      sourceId: who.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Using dill seed as a medicine while breastfeeding is not recommended. The WHO applies the same caution as for pregnancy, because of its traditional use to prevent pregnancy and bring on labor, and possible birth defects seen in animals.",
      sourceId: who.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "One person with hay fever had an allergic reaction to dill seed, including an itchy mouth, a swollen tongue and throat, hives, vomiting and diarrhea.",
      sourceId: who.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "In the 2-month trial for high blood fats, people taking dill tablets (six a day) reported no side effects. By comparison, 21.4% of people taking gemfibrozil reported digestive problems.",
      sourceId: hyperlipidemiaTrial.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Lab tests on alcohol-based dill seed extracts found no DNA damage. However, dill seed essential oil damaged human white blood cells and their chromosomes in the lab, though it caused no DNA damage in a fruit-fly test. In 1976, a national regulator classed dill seed as \"generally regarded as safe\" (GRAS) for use as a food flavoring.\n\nTechnical detail: not mutagenic in the Salmonella/microsome (Ames) assay; essential oil was cytotoxic to human lymphocytes in vitro and produced chromosome aberrations and sister chromatid exchange; inactive in an in vivo Drosophila melanogaster genotoxicity assay.",
      sourceId: who.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Typical daily amount referenced by the WHO: 3 g of dried dill seed, or 0.1–0.3 g of essential oil, or an equivalent amount of another preparation.",
      sourceId: who.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: dill.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: dill.id, ...record },
      });
    }
  }

  console.log("Dill populated from 3 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
