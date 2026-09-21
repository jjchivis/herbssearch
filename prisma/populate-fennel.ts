import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Fennel, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/document
// before being written here.
//
// Tier-1 source note: NCCIH's "Herbs at a Glance" index was fetched and
// checked; it does not include a dedicated fennel fact sheet (confirmed
// live: fennel does not appear between "Fenugreek" and "Feverfew" in the
// alphabetical list). Instead, the EMA/HMPC "European Union herbal
// monograph on Foeniculum vulgare Miller subsp. vulgare var. dulce (Mill.)
// Batt. & Trab., fructus" (Final, Revision 1, EMEA/HMPC/372839/2016,
// adopted 31 January 2024) is used as the Tier-1 government source. The
// full PDF was fetched and read directly from the EMA website before
// writing this file.
//
// Taxonomy note: family/genus/species cross-checked against Kew POWO
// (search snapshot: native range "Mediterranean to Ethiopia and W. Nepal",
// family Apiaceae), GBIF Backbone Taxonomy (species/103356016, family
// Apiaceae, genus Foeniculum, type species of the genus), and NCBI
// Taxonomy (Taxonomy ID 2849586, family Apiaceae; NCBI currently treats
// "Anethum foeniculum L., 1753" as the accepted name with "Foeniculum
// vulgare Mill., 1768" as a heterotypic synonym, though Foeniculum vulgare
// remains the name used by POWO/GBIF and throughout the botanical/medical
// literature, so it is kept as the primary name here per the existing
// seed).

async function main() {
  const fennel = await prisma.herb.findUniqueOrThrow({ where: { name: "Fennel" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: fennel.id },
    data: {
      family: "Apiaceae",
      genus: "Foeniculum",
      species: "vulgare",
      nativeRange: "Mediterranean region to Ethiopia and western Nepal; now cultivated and naturalized worldwide, including throughout Asia, Europe, and North America",
      partsUsed: "Dried ripe fruit (seed, \"Foeniculi fructus\"), the officinal part per the EMA monograph; leaf, stem, root, and bulb are also used culinarily",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "TRADITIONAL_NAME"; language?: string; region?: string }[] = [
    { name: "Anethum foeniculum L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Foeniculum officinale All.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Meum foeniculum (L.) Spreng.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Sweet Fennel", type: "COMMON_NAME" },
    { name: "Bitter Fennel", type: "COMMON_NAME" },
    { name: "Fenouil", type: "COMMON_NAME", language: "French" },
    { name: "Finocchio", type: "COMMON_NAME", language: "Italian" },
    { name: "Hui Xiang", type: "COMMON_NAME", language: "Chinese" },
    { name: "Saunf", type: "COMMON_NAME", language: "Hindi", region: "India" },
    { name: "Madhurika", type: "TRADITIONAL_NAME", language: "Sanskrit" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: fennel.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: {
          herbId: fennel.id,
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

  // Tier 1 government source. NCCIH has no dedicated fennel page (confirmed
  // live against the "Herbs at a Glance" index), so the EMA/HMPC European
  // Union herbal monograph on sweet fennel fruit is used instead.
  const ema = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-foeniculum-vulgare-miller-subsp-vulgare-var-dulce-mill-batt-trab-fructus-revision-1_en.pdf",
    {
      title:
        "European Union herbal monograph on Foeniculum vulgare Miller subsp. vulgare var. dulce (Mill.) Batt. & Trab., fructus — Final, Revision 1 (EMEA/HMPC/372839/2016)",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2024-01-31"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-foeniculum-vulgare-miller-subsp-vulgare-var-dulce-mill-batt-trab-fructus-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed botany/phytochemistry/pharmacology/toxicology review.
  const phytochemistryReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC4137549/",
    {
      title:
        "Foeniculum vulgare Mill: A Review of Its Botany, Phytochemistry, Pharmacology, Contemporary Application, and Toxicology",
      author: "Badgujar SB, Patel VV, Bandivdekar AH",
      organization: "BioMed Research International",
      journal: "BioMed Research International",
      publicationDate: new Date("2014-01-01"),
      doi: "10.1155/2014/842674",
      pmid: "25162032",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4137549/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed randomized, placebo-controlled clinical trial (infantile colic).
  const colicTrial = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/12868253/",
    {
      title:
        "The effect of fennel (Foeniculum vulgare) seed oil emulsion in infantile colic: a randomized, placebo-controlled study",
      author: "Alexandrovich I, Rakovitskaya O, Kolmo E, Sidorova T, Shushunov S",
      organization: "Alternative Therapies in Health and Medicine",
      journal: "Alternative Therapies in Health and Medicine",
      publicationDate: new Date("2003-07-01"),
      pmid: "12868253",
      url: "https://pubmed.ncbi.nlm.nih.gov/12868253/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // Peer-reviewed systematic review and meta-analysis (primary dysmenorrhea).
  const dysmenorrheaMetaAnalysis = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC7697926/",
    {
      title: "Fennel for Reducing Pain in Primary Dysmenorrhea: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      author: "Lee HW, Ang L, Lee MS, Alimoradi Z, Kim E",
      organization: "Nutrients",
      journal: "Nutrients",
      publicationDate: new Date("2020-11-10"),
      doi: "10.3390/nu12113438",
      pmid: "33182553",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7697926/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (anethole and fenchone are new; estragole and limonene
  // already exist in the taxonomy seed / basil & dill populate scripts and
  // are reused/linked here — all four are documented fennel essential-oil
  // constituents per both the EMA monograph and the Badgujar et al. review) ---
  const anethole = await prisma.constituent.upsert({
    where: { slug: "anethole" },
    update: {},
    create: { name: "Anethole", slug: "anethole", type: "phenylpropanoid" },
  });
  const fenchone = await prisma.constituent.upsert({
    where: { slug: "fenchone" },
    update: {},
    create: { name: "Fenchone", slug: "fenchone", type: "volatile oil" },
  });
  const estragole = await prisma.constituent.findUniqueOrThrow({ where: { slug: "estragole" } });
  const limonene = await prisma.constituent.findUniqueOrThrow({ where: { slug: "limonene" } });

  for (const constituentId of [anethole.id, fenchone.id, estragole.id, limonene.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: fennel.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: fennel.id, constituentId },
      });
    }
  }

  // --- traditions ---
  const ayurveda = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: "ayurveda" } });
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });

  const traditionLinks = [
    {
      traditionId: ayurveda.id,
      notes:
        "Fennel fruit is documented in the Ayurvedic Pharmacopoeia of India as an important component of polyherbal formulations. Sanskrit names recorded in the ethnomedical literature include Madhurika and Shatapushpa, and it is widely known in Hindi as saunf/badi saunf.",
    },
    {
      traditionId: mediterraneanFolkMedicine.id,
      notes:
        "Native to the Mediterranean region (per Kew POWO and GBIF, native range \"Mediterranean to Ethiopia and W. Nepal\"). Mediterranean and European folk medicine has long used fennel as a digestive aid and carminative for gastrointestinal disturbances and constipation, for respiratory ailments, in anti-inflammatory preparations, and as a galactagogue for nursing mothers.",
    },
  ];
  for (const link of traditionLinks) {
    const existing = await prisma.herbTradition.findFirst({
      where: { herbId: fennel.id, traditionId: link.traditionId },
    });
    if (!existing) {
      await prisma.herbTradition.create({ data: { herbId: fennel.id, ...link } });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "The EMA/HMPC traditional-use monograph recognizes fennel (as herbal tea) based exclusively on long-standing use for three indications: symptomatic treatment of mild, spasmodic gastro-intestinal complaints including bloating and flatulence; symptomatic treatment of minor spasm associated with menstrual periods; and as an expectorant in cough associated with cold. No well-established (clinically substantiated) use was recognized in this monograph.",
      sourceId: ema.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "The Badgujar et al. review documents traditional/ethnomedical use of fennel across more than forty types of disorders in Ayurvedic, Unani, Siddha, and Mediterranean/European folk traditions, including as a digestive aid and carminative, for abdominal pain and flatulence, diarrhoea, respiratory ailments, eye problems, kidney ailments, fever, arthritis, and as a galactagogue for nursing mothers, alongside culinary use as a spice.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "The Badgujar et al. review reports fennel methanolic extract showed inhibitory effects against acute and subacute inflammation in animal models (200 mg/kg oral), essential oil reduced elevated liver enzymes (AST, ALT, ALP) and bilirubin in carbon-tetrachloride-induced liver injury models (hepatoprotective), essential oil corrected hyperglycemia in streptozotocin-induced diabetic rats (30 mg/kg), aqueous extract improved memory in scopolamine-induced amnesia rodent models (50-200 mg/kg), essential oil and extracts inhibited growth of Staphylococcus aureus, Escherichia coli, and Bacillus species in vitro, and essential oil showed antithrombotic activity in mice. These are animal/in vitro findings, not established human clinical effects.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Animal studies reviewed by Badgujar et al. document estrogenic activity of fennel: acetone extracts induced vaginal cornification, increased mammary gland weight, and elevated nucleic acid concentrations in reproductive tissues, with the active estrogenic components identified as anethole polymers (dianethole and photoanethole). This preclinical mechanism is cited as a basis for fennel's traditional use as a galactagogue and for menopausal/menstrual complaints, but has not been established as a clinical mechanism in humans.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A randomized, placebo-controlled trial in 125 infants aged 2-12 weeks meeting Wessel's criteria for infantile colic compared a fennel (Foeniculum vulgare) seed oil emulsion with placebo. Colic resolved in 65% (40/62) of infants in the fennel group versus 23.7% (14/59) in the placebo group (p<0.01); Absolute Risk Reduction 41% (95% CI 25-57), Number Needed to Treat 2 (95% CI 2-4). No adverse effects were reported for infants in either group during the trial. The authors concluded fennel seed oil emulsion was superior to placebo in decreasing the intensity of infantile colic.",
      sourceId: colicTrial.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A systematic review and meta-analysis of 12 randomized controlled trials found fennel had favorable effects on reducing pain in primary dysmenorrhea versus placebo (n=468; standardized mean difference -3.27, 95% CI -5.28 to -1.26, p=0.001). Pooled results of 7 trials comparing fennel with conventional drug therapies (e.g. mefenamic acid, ibuprofen) found no significant difference in pain relief (n=502; standardized mean difference 0.07, 95% CI -0.08 to 0.21, p=0.37), suggesting comparable efficacy. Only 3 of the 12 trials assessed adverse events; one reported minor adverse events (nausea and vomiting) occurring equally in fennel and placebo groups. The authors noted a significant evidence gap in fennel's safety data.",
      sourceId: dysmenorrheaMetaAnalysis.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: fennel.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: fennel.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Contraindicated in hypersensitivity to the active substance or to plants of the Apiaceae (Umbelliferae) family (e.g. aniseed, caraway, celery, coriander, dill) or to anethole. Also contraindicated in hypersensitivity to mugwort pollen, due to cross-reactivity with fennel.",
      sourceId: ema.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Safety during pregnancy has not been established; in the absence of sufficient data, use during pregnancy is not recommended. No fertility data are available. An aqueous extract of fennel seeds given daily to pregnant BALB/c mice (days 6-15 of gestation) showed a dose-dependent teratogenic/embryotoxic effect (morphological changes, skeletal disorders, cellular alterations); adequate reproductive-toxicity tests in humans have not been performed.",
      sourceId: ema.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Safety during lactation has not been established; in the absence of sufficient data, use during breastfeeding is not recommended. There is evidence that trans-anethole is excreted in human breast milk.",
      sourceId: ema.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Use in children under 4 years of age is not recommended due to lack of adequate data. Use for menstrual-spasm indications in children under 12 years of age has not been established due to lack of adequate data. This official EU regulatory guidance for fennel herbal tea products contrasts with the folk/traditional use of fennel preparations for infant colic (see HUMAN_RESEARCH evidence citing a supervised clinical trial in infants aged 2-12 weeks); fennel should not be given to infants or young children without medical guidance.",
      sourceId: ema.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Allergic reactions to fennel, affecting the skin or the respiratory system, may occur; frequency is not known.",
      sourceId: ema.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Estragole, a constituent of fennel essential oil, has shown carcinogenic effects in mice (liver tumours) and suggestive but indirect evidence of carcinogenicity in rats, and is considered a genotoxic carcinogen in rodents. Studies in laboratory animals showed weak mutagenic activity of anethole, though a fennel aqueous extract tested negative in an Ames test (Salmonella typhimurium strains TA98, TA100). Guidance values: in the general population, exposure to estragole should be kept as low as practically achievable; in pregnant and breastfeeding women, daily estragole intake should be below 0.05 mg/person/day; in children under 12, daily estragole intake should be below 1.0 microgram/kg body weight.",
      sourceId: ema.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "EMA traditional-use posology (herbal tea/infusion): adults and adolescents, 1.5 g herbal substance in 250 ml boiling water (steep 15 minutes), 3 times daily (4.5 g/day); children 4-12 years, 1.0 g in 100 ml boiling water, 3 times daily (3.0 g/day). Not to be taken for more than 2 weeks in adults/adolescents; in children 4-12, for short-term use in mild transitory symptoms only (less than one week). If symptoms persist or worsen, a doctor or qualified healthcare practitioner should be consulted.",
      sourceId: ema.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Animal studies document estrogenic activity of fennel (acetone extracts induced vaginal cornification and increased mammary gland weight in reproductive tissue, attributed to the anethole polymers dianethole and photoanethole). While this is animal-derived preclinical data rather than established human clinical evidence, it is the traditional basis for caution around fennel use in individuals with hormone-sensitive conditions.",
      sourceId: phytochemistryReview.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: fennel.id, category: record.category, sourceId: record.sourceId, description: record.description },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: fennel.id, ...record },
      });
    }
  }

  console.log("Fennel populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
