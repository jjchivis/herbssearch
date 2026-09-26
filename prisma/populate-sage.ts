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
      partsUsed: "The leaves",
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
          "In European folk medicine, sage leaf has long been used for indigestion, heavy sweating, memory and thinking complaints, and inflammation of the mouth, throat and skin. Germany's Commission E approved it for indigestion and heavy sweating. In parts of Asia and Latin America, folk use has also included seizures, ulcers, gout, rheumatism, dizziness, tremor, paralysis, diarrhea and high blood sugar.\n\nTechnical detail: dyspepsia, excessive perspiration, hyperglycemia.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Sage leaf has long been used in European folk medicine for indigestion, heavy sweating, and inflammation of the mouth, throat and skin. These uses are reflected in the European Medicines Agency's traditional-use profile, and Germany's Commission E approved sage for indigestion and heavy sweating. Elsewhere, traditional uses have also included seizures, ulcers, gout, rheumatism, dizziness, tremor, paralysis, diarrhea and high blood sugar.\n\nTechnical detail: dyspepsia, excessive perspiration, hyperglycemia.",
      sourceId: pharmacologyReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Lab and animal studies of sage and its natural compounds report:\n- Reduced inflammation and pain in mice.\n- Antioxidant activity; in diabetic rats, rosmarinic acid boosted the body's own protective enzymes in the pancreas.\n- Slowed growth or death of several kinds of human cancer cells in the lab, and effects on tumors in mice.\n- Lower blood sugar in normal and diabetic animals.\n- Action on the same brain receptors as anti-anxiety medicines (benzodiazepines), and fewer seizures in animals.\nThese are lab and animal findings, not established effects in people.\n\nTechnical detail: anti-inflammatory and analgesic effects from flavonoid extracts (mouse carrageenan model), manool, carnosol and ursolic acid; carnosol radical-scavenging comparable to alpha-tocopherol; rosmarinic acid increased pancreatic catalase, glutathione peroxidase and superoxide dismutase in streptozotocin-induced diabetic rats; pro-apoptotic and growth-inhibitory effects of extracts, rosmarinic acid, caryophyllene, alpha-humulene, manool and ursolic acid; hypoglycemic effects via inhibition of hepatocyte gluconeogenesis and PPAR-gamma-mediated reduction of insulin resistance; benzodiazepine receptor activation and inhibition of pentylenetetrazole-induced seizures.",
      sourceId: pharmacologyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "There is only a small amount of research on sage in people:\n- Early studies suggest common sage may reduce how often menopausal women have hot flashes.\n- A few studies suggest sage, Spanish sage or combinations may improve memory and thinking scores in healthy people, but the evidence is limited. Very little research has looked at sage for Alzheimer's disease.\n- Some studies suggest possible benefits for cholesterol and other blood fats, but there isn't enough evidence on blood sugar.\n- Sage has also been studied for sore throat.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review of trials on sage and memory found:\n- In healthy adults, a single dose of dried sage leaf or sage oil improved mood and performance on thinking tasks during testing, and a 333 mg dose improved memory.\n- In a 16-week trial in people with mild to moderate Alzheimer's disease, 60 drops a day of a sage extract improved thinking and memory scores compared with placebo.\nThe reviewers noted the studies had weaknesses, including different, non-standardized preparations, so firm conclusions about how well sage works can't be drawn.\n\nTechnical detail: single doses of 300–1,332 mg; 333 mg enhanced secondary memory across timepoints; Alzheimer's trial used a 1:1 Salvia officinalis extract in 45% alcohol, randomized, measured on the Clinical Dementia Rating and Alzheimer's Disease Assessment Scale.",
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
      description: "Don't use sage leaf if you are allergic to it or to any of its components.",
      sourceId: ema.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Sage medicines are not recommended for anyone under 18, because there isn't enough data to show they are safe and effective.",
      sourceId: ema.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Sage has not been shown to be safe during pregnancy, so using it as a medicine while pregnant is not recommended.",
      sourceId: ema.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Sage has not been shown to be safe while breastfeeding, so using it as a medicine while breastfeeding is not recommended.",
      sourceId: ema.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "No interactions between sage leaf and medicines had been described in the research at the time of this assessment.",
      sourceId: ema.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Sage contains thujone, a compound reported to harm the nerves. Products must state how much thujone they contain, and daily intake must stay below 6.0 mg. Types of sage low in thujone should be preferred. Sage has not been properly tested for DNA damage, cancer risk or harm to reproduction.\n\nTechnical detail: neurotoxic; low-thujone chemotypes; genotoxicity, carcinogenicity and reproductive-toxicity testing.",
      sourceId: ema.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "No overdose from sage leaf itself has been reported. But taking sage oil in an amount equal to more than 15 g of sage leaf is reported to cause a feeling of heat, a racing heart, dizziness and seizures.\n\nTechnical detail: tachycardia, vertigo, epileptiform convulsions.",
      sourceId: ema.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Common sage (Salvia officinalis) contains thujone, which can be toxic in large amounts and has caused seizures in animals. Sage is likely safe in normal food amounts, and larger amounts have been used safely for up to 8 weeks in research studies.",
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
