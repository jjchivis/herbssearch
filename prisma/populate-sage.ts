import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Sage, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/document
// before being written here.
//
// Taxonomy note: this is Salvia officinalis L. (common/garden sage), family
// Lamiaceae — verified live against Kew's Plants of the World Online (POWO,
// https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:456833-1), the
// GBIF Backbone Taxonomy (https://www.gbif.org/species/2927004), and ITIS
// (TSN 32729, https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=32729),
// all three of which list Salvia officinalis L. as the ACCEPTED name with no
// competing accepted synonym (unlike rosemary, whose name changed in 2017).
// This species is deliberately kept distinct from Salvia hispanica (chia)
// and Salvia divinorum, which are unrelated Salvia species.

async function main() {
  const sage = await prisma.herb.findUniqueOrThrow({ where: { name: "Sage" } });

  // --- botanical profile ---
  // Family/genus/species per Kew POWO, GBIF Backbone Taxonomy, and ITIS (see
  // note above). partsUsed per the EMA/HMPC monograph, which covers the leaf
  // (Salviae officinalis folium).
  await prisma.herb.update({
    where: { id: sage.id },
    data: {
      family: "Lamiaceae",
      genus: "Salvia",
      species: "officinalis",
      partsUsed: "Leaf",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (ITIS / common usage, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Garden Sage", type: "COMMON_NAME" },
    { name: "Common Sage", type: "COMMON_NAME" },
    { name: "Kitchen Sage", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: sage.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: sage.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government source #1: NCCIH has a dedicated sage page (unlike rosemary).
  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/sage", {
    title: "Sage: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-04-01"),
    url: "https://www.nccih.nih.gov/health/sage",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  // Tier 1 government source #2: EMA/HMPC European Union herbal monograph
  // (EMA/HMPC/277152/2015), final, "date of compilation/last revision"
  // 20 September 2016, covering Salvia officinalis L., folium. Fetched and
  // read in full (9-page PDF) to extract exact posology and safety wording.
  const ema = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-salvia-officinalis-l-folium-revision-1_en.pdf",
    {
      title: "European Union herbal monograph on Salvia officinalis L., folium",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2016-09-20"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-salvia-officinalis-l-folium-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed phytochemistry/pharmacology review.
  const pharmacologyReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5634728/",
    {
      title: "Pharmacological properties of Salvia officinalis and its components",
      author: "Ghorbani A, Esmaeilizadeh M",
      organization: "Journal of Traditional and Complementary Medicine",
      journal: "Journal of Traditional and Complementary Medicine",
      publicationDate: new Date("2017-01-13"),
      doi: "10.1016/j.jtcme.2016.12.014",
      pmid: "29034191",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5634728/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed systematic review of clinical trials on cognition/memory.
  const cognitionSystematicReview = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/24836739/",
    {
      title:
        "Systematic Review of Clinical Trials Assessing Pharmacological Properties of Salvia Species on Memory, Cognitive Impairment and Alzheimer's Disease",
      author: "Miroddi M, Navarra M, Quattropani MC, Calapai F, Gangemi S, Calapai G",
      organization: "CNS Neuroscience & Therapeutics",
      journal: "CNS Neuroscience & Therapeutics",
      publicationDate: new Date("2014-06-01"),
      doi: "10.1111/cns.12270",
      pmid: "24836739",
      url: "https://pubmed.ncbi.nlm.nih.gov/24836739/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (rosmarinic-acid, carnosic-acid, and 1-8-cineole already
  // exist in the taxonomy/rosemary seeds; add thujone, which is documented
  // by both NCCIH and the EMA monograph as sage's key safety-relevant
  // constituent) ---
  const thujone = await prisma.constituent.upsert({
    where: { slug: "thujone" },
    update: {},
    create: { name: "Thujone", slug: "thujone", type: "volatile oil" },
  });
  const carnosicAcid = await prisma.constituent.upsert({
    where: { slug: "carnosic-acid" },
    update: {},
    create: { name: "Carnosic Acid", slug: "carnosic-acid", type: "diterpenoid" },
  });
  const cineole = await prisma.constituent.upsert({
    where: { slug: "1-8-cineole" },
    update: {},
    create: { name: "1,8-Cineole (Eucalyptol)", slug: "1-8-cineole", type: "volatile oil" },
  });
  const rosmarinicAcid = await prisma.constituent.findUniqueOrThrow({ where: { slug: "rosmarinic-acid" } });

  for (const constituentId of [thujone.id, carnosicAcid.id, cineole.id, rosmarinicAcid.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: sage.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: sage.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: sage.id, traditionId: mediterraneanFolkMedicine.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: sage.id,
        traditionId: mediterraneanFolkMedicine.id,
        notes:
          "In European folk medicine, sage leaf has long been used for dyspepsia, excessive sweating, cognitive complaints, and inflammation of the mouth, throat, and skin; the German Commission E approved its use for dyspepsia and excessive perspiration. Folk use in parts of Asia and Latin America has additionally included seizure, ulcers, gout, rheumatism, dizziness, tremor, paralysis, diarrhea, and hyperglycemia.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Sage leaf has a long history of traditional/folk use in Europe for dyspepsia, excessive sweating, and inflammation of the mouth, throat, and skin (reflected in the EU traditional-use herbal monograph's indications), with German Commission E approval for dyspepsia and excessive perspiration. Traditional use elsewhere has additionally included seizure, ulcers, gout, rheumatism, dizziness, tremor, paralysis, diarrhea, and hyperglycemia.",
      sourceId: pharmacologyReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In vitro and animal studies of sage and its constituents report: anti-inflammatory and analgesic effects from flavonoid extracts in the mouse carrageenan model, and from manool, carnosol, and ursolic acid; antioxidant activity from carnosol (radical-scavenging comparable to alpha-tocopherol) and rosmarinic-acid derivatives, with rosmarinic acid increasing pancreatic catalase, glutathione peroxidase, and superoxide dismutase activity in streptozotocin-induced diabetic rats; anticancer (pro-apoptotic, growth-inhibitory) effects of extracts and of rosmarinic acid, caryophyllene, alpha-humulene, manool, and ursolic acid against multiple human cancer cell lines and in mouse tumor models; hypoglycemic effects of extracts in normal and diabetic animal models, via inhibition of hepatocyte gluconeogenesis and PPAR-gamma-mediated reduction of insulin resistance; and activation of benzodiazepine receptors with inhibition of pentylenetetrazole-induced seizures. These are preclinical (cell-culture and animal) findings, not established clinical effects in humans.",
      sourceId: pharmacologyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Only a small amount of human research exists for sage. Preliminary studies suggest common sage may help reduce hot-flash frequency in menopausal women. A few studies indicate sage, Spanish sage, or combinations may improve memory and cognition scores in healthy people, though evidence remains limited, and very little research exists on sage in Alzheimer's disease. Some studies suggest possible beneficial effects on cholesterol and blood lipids, though evidence on blood glucose is insufficient. Sage has also been studied for sore throat.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A systematic review of clinical trials on Salvia species and cognition found several sage-specific trials: single doses of 300-1,332 mg of dried sage leaf or sage essential oil improved mood and cognitive-task performance in healthy adults under acute testing, with a 333-mg dose associated with significant enhancement of secondary memory across testing timepoints; and a 16-week randomized trial in patients with mild-to-moderate Alzheimer's disease found that 60 drops daily of a 1:1 Salvia officinalis extract (in 45% alcohol) produced significant cognitive improvement versus placebo on the Clinical Dementia Rating and Alzheimer's Disease Assessment Scale. The review's authors noted methodological limitations across studies, including heterogeneous preparations and lack of standardization, that prevent definitive conclusions about effectiveness.",
      sourceId: cognitionSystematicReview.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: sage.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: sage.id, ...entry } });
    }
  }

  // --- safety, traced to the EMA/HMPC monograph and NCCIH ---
  const safetyRecords = [
    {
      category: "ALLERGY" as const,
      description: "Contraindicated in people with a known hypersensitivity (allergy) to sage leaf or its constituents.",
      sourceId: ema.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Use in children and adolescents under 18 years of age is not recommended; safety and efficacy have not been established due to a lack of adequate data.",
      sourceId: ema.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Safety during pregnancy has not been established. In the absence of sufficient data, use during pregnancy is not recommended.",
      sourceId: ema.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Safety during breastfeeding has not been established. In the absence of sufficient data, use during breastfeeding is not recommended.",
      sourceId: ema.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "No interactions between sage leaf and other medicinal products have been described in the literature as of this assessment.",
      sourceId: ema.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Thujone content must be specified for any given product, and daily thujone exposure must stay below 6.0 mg; chemotypes with low thujone content should be preferred, as thujone is reported to be neurotoxic. Adequate genotoxicity, carcinogenicity, and reproductive-toxicity testing has not been performed.",
      sourceId: ema.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "No case of overdose from sage leaf itself has been reported, but intake of sage oil corresponding to more than 15 g of sage leaf is reported to cause a sensation of heat, tachycardia, vertigo, and epileptiform convulsions (seizures).",
      sourceId: ema.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Common sage (Salvia officinalis) contains thujone, which can be toxic if consumed in large amounts; thujone has caused seizures in animal models. Sage is likely safe in amounts commonly found in food, and larger amounts have been used safely for up to 8 weeks in research studies.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: sage.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: sage.id, ...record },
      });
    }
  }

  console.log("Sage populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
