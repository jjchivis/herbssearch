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
      nativeRange: "Indigenous to southern Europe; now cultivated worldwide",
      partsUsed: "Dried ripe fruit (seed, \"Fructus Anethi\") and fresh or dried leaf (\"dill weed\")",
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
        "Used in Ayurvedic medicine as a carminative, stomachic, and diuretic; dill fruit (Fructus Anethi) is included in the Ayurvedic Pharmacopoeia of India, and dill seed/herb has a long history of Ayurvedic use in India, where it is known as \"sowa\".",
    },
    {
      traditionId: europeanFolkMedicine.id,
      notes:
        "Indigenous to southern Europe with a long history of European folk use; documented use by Egyptian physicians roughly 5,000 years ago and archaeological traces found in Roman ruins in Great Britain. Dill is the classic ingredient in gripe water, a traditional European remedy given to relieve infant colic and flatulence.",
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
        "The WHO monograph records dill fruit (Fructus Anethi) uses described in pharmacopoeias and well-established documents as treatment of dyspepsia, gastritis, flatulence, and stomach ache. Broader uses described in traditional medicine include use as an aphrodisiac, analgesic, antipyretic, diuretic, emmenagogue, galactagogue, and appetite stimulant, and treatment of diarrhoea, asthma, neuralgia, dysuria, dysmenorrhoea, gallbladder disease, insomnia, hiatus hernia, and kidney stones. The monograph states there are no uses of Fructus Anethi supported by clinical data.",
      sourceId: who.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Dill has a documented history of use dating back roughly 5,000 years, with use by ancient Egyptian physicians and archaeological traces found in Roman ruins in Great Britain. In Ayurvedic medicine, dill seed and herb are used as a carminative, stomachic, and diuretic. Dill is a traditional ingredient in gripe water, given to relieve colic pain in babies and flatulence in young children.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Per the WHO monograph's experimental pharmacology summary: a 50% ethanol extract of dill fruit inhibited acetylcholine- and histamine-induced contractions of guinea-pig ileum in vitro, and the essential oil reduced contractions of rabbit intestine and had carminative, antifoaming activity in vitro, supporting traditional antispasmodic/carminative use. A topical ethanol extract of the fruits reduced TPA-induced mouse ear inflammation by 60%, and aqueous fruit extract and essential oil solution had analgesic effects in mouse hot-plate and acetic-acid writhing tests, comparable to acetylsalicylic acid. Intravenous extract and essential oil administration produced diuretic effects and reduced blood pressure in dogs and cats, and a single intragastric dose of ethanol extract reduced blood glucose by 30% in fasted rats. These are animal/in vitro findings, not established human clinical effects.",
      sourceId: who.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "The Jana & Shekhawat review reports antimicrobial activity of dill against multiple bacterial species, antioxidant activity attributed to isolated flavonoids (including quercetin and isorhamnetin), and mucosal-protective, antisecretory, and anti-ulcer activity against HCl- and ethanol-induced stomach lesions in preclinical testing, alongside antispasmodic effects consistent with dill's traditional gastrointestinal use. These are in vitro/animal findings, not established clinical effects in humans.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A randomized, single-blind clinical trial in 91 patients with hyperlipidemia compared gemfibrozil (900 mg/day) with dill tablets (six tablets daily) for 2 months; 42 patients completed the gemfibrozil arm and 35 completed the dill arm after exclusions for non-compliance. Dill reduced total cholesterol by 18% versus 9.41% for gemfibrozil, while gemfibrozil reduced triglycerides more (32.7% vs. 7.38% for dill) and increased HDL-cholesterol by 3.91% (dill did not significantly affect HDL). The authors concluded dill may be beneficial for hypercholesterolemic and hypertriglyceridemic patients, while noting the need for further study of mechanism and efficacy.",
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
        "Extracts of dill fruit (seed) have traditionally been used as a contraceptive and to induce labour.",
      sourceId: who.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Extracts of the fruit may have teratogenic effects in animal studies; use of Fructus Anethi during pregnancy is not recommended.",
      sourceId: who.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Use of Fructus Anethi during nursing is not recommended (the WHO monograph applies the same pregnancy contraindication to nursing mothers, citing traditional contraceptive/labour-inducing use and potential teratogenic effects).",
      sourceId: who.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Allergic reactions to Fructus Anethi — including oral pruritus, tongue and throat swelling, urticaria, vomiting, and diarrhoea — were reported in one patient with a history of allergic rhinitis.",
      sourceId: who.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "In a 2-month randomized clinical trial for hyperlipidemia, patients taking dill tablets (six daily) reported no adverse effects, compared with gastrointestinal complications reported by 21.4% of patients taking gemfibrozil.",
      sourceId: hyperlipidemiaTrial.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Ethanol extracts of dill fruit were not mutagenic in the Salmonella/microsome (Ames) assay. However, an essential oil prepared from the fruits was cytotoxic to human lymphocytes in vitro and produced chromosome aberrations and sister chromatid exchange in that system, though it was inactive in an in vivo Drosophila melanogaster genotoxicity assay. \"Generally regarded as safe\" (GRAS) status was granted to Fructus Anethi as a flavouring agent by a national regulatory authority in 1976.",
      sourceId: who.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "WHO-referenced average daily dose: 3 g dried fruit (Fructus Anethi), or 0.1-0.3 g essential oil, or an equivalent amount of other preparations.",
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
