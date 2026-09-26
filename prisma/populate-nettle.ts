import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Nettle (Urtica dioica), populated from seven real, verified sources.
// Nothing here is invented — every claim traces to one of the Source records
// below, each fetched and checked against the live page/document before
// being written here.
//
// Key nuance for this herb: nettle LEAF and nettle ROOT are traditionally
// used differently and are covered by two SEPARATE EU/HMPC monographs
// (Urticae folium and Urticae radix). Leaf: minor joint/muscle pain and as
// a mild diuretic/urinary-tract adjuvant. Root: lower urinary tract symptoms
// of benign prostatic hyperplasia (BPH). Evidence and safety entries below
// are kept attributed to the correct part/monograph wherever the source
// distinguishes them.
//
// Taxonomy: verified live against GBIF Backbone Taxonomy
// (https://api.gbif.org/v1/species/match?name=Urtica%20dioica -> ACCEPTED,
// family Urticaceae, genus Urtica) and ITIS (TSN 19152, family Urticaceae,
// genus Urtica, vernacular "Stinging Nettle"). Kew POWO's own taxon pages
// returned HTTP 403 to direct fetches during this research session, so POWO
// is not cited as a Source record here; GBIF and ITIS were used instead,
// both of which are standard authoritative taxonomic databases. No credible
// scientific synonym for Urtica dioica L. could be positively verified in
// this session, so none is recorded (better to omit than guess).

async function main() {
  const nettle = await prisma.herb.findUniqueOrThrow({ where: { name: "Nettle" } });

  // --- botanical profile ---
  // Family/genus/species per GBIF Backbone Taxonomy and ITIS (TSN 19152),
  // both confirming Urtica dioica L. as the accepted name in family
  // Urticaceae. partsUsed reflects the EMA/HMPC split between Urticae
  // folium (leaf) and Urticae radix (root) monographs.
  await prisma.herb.update({
    where: { id: nettle.id },
    data: {
      family: "Urticaceae",
      genus: "Urtica",
      species: "dioica",
      partsUsed:
        "Leaf (Urticae folium): traditionally used for minor joint pain, and alongside other care to increase urination for minor urinary complaints. Root (Urticae radix): traditionally used for urinary symptoms caused by an enlarged prostate (benign prostatic hyperplasia, or BPH). The leaf and root contain different natural compounds and have separate official European herbal profiles.",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (ITIS TSN 19152, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" }[] = [
    { name: "Stinging Nettle", type: "COMMON_NAME" },
    { name: "Common Nettle", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: nettle.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: nettle.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government/regulatory source. NCCIH has no dedicated stand-alone
  // nettle page (confirmed live: nettle does not appear in NCCIH's "Herbs
  // at a Glance" index), but its clinician-facing digest on BPH has a
  // detailed, dated section on Urtica dioica root.
  const nccihBph = await findOrCreateSource(
    "https://www.nccih.nih.gov/health/providers/digest/benign-prostatic-hyperplasia-and-complementary-and-integrative-approaches-science",
    {
      title:
        "Benign Prostatic Hyperplasia and Complementary and Integrative Approaches: What the Science Says",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: new Date("2022-01-01"),
      url: "https://www.nccih.nih.gov/health/providers/digest/benign-prostatic-hyperplasia-and-complementary-and-integrative-approaches-science",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Tier 1 government/regulatory source: EU herbal monograph for the LEAF.
  // Fetched and read directly (full PDF text) during this research session.
  const emaFolium = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-urtica-dioica-l-urtica-urens-l-folium_en.pdf",
    {
      title: "Community herbal monograph on Urtica dioica L.; Urtica urens L., folium",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2010-01-14"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-urtica-dioica-l-urtica-urens-l-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Tier 1 government/regulatory source: EU herbal monograph for the ROOT
  // (Revision 1). Fetched and read directly (full PDF text) during this
  // research session.
  const emaRadix = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-urtica-dioica-l-urtica-urens-l-radix-revision-1_en.pdf",
    {
      title: "European Union herbal monograph on Urtica dioica L.; Urtica urens L., radix - Revision 1",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2025-01-22"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-urtica-dioica-l-urtica-urens-l-radix-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Tier 2: randomized controlled clinical trial.
  const randallTrial = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC1298033/", {
    title: "Randomized controlled trial of nettle sting for treatment of base-of-thumb pain",
    author: "Randall C, Randall H, Dobbs F, Hutton C, Sanders H",
    organization: "Journal of the Royal Society of Medicine",
    journal: "Journal of the Royal Society of Medicine",
    publicationDate: new Date("2000-06-01"),
    pmid: "10911825",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1298033/",
    sourceType: "peer_reviewed",
    tier: "TIER_2_SYSTEMATIC_REVIEW",
  });

  // Tier 3 peer-reviewed source on the chemistry/mechanism of the sting itself.
  const cummingsOlsen = await findOrCreateSource("https://pubmed.ncbi.nlm.nih.gov/21396858/", {
    title: "Mechanism of action of stinging nettles",
    author: "Cummings AJ, Olsen M",
    organization: "Wilderness & Environmental Medicine",
    journal: "Wilderness & Environmental Medicine",
    publicationDate: new Date("2011-06-01"),
    doi: "10.1016/j.wem.2011.01.001",
    pmid: "21396858",
    url: "https://pubmed.ncbi.nlm.nih.gov/21396858/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // Tier 3 peer-reviewed review focused on the ROOT's phytochemistry/pharmacology.
  const martzRootReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC11768490/", {
    title: "Stinging Nettle (Urtica dioica) Roots: The Power Underground—A Review",
    author: "Martz F, Kankaanpää S",
    organization: "Plants (Basel)",
    journal: "Plants (Basel)",
    publicationDate: new Date("2025-01-19"),
    doi: "10.3390/plants14020279",
    pmid: "39861633",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11768490/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // Tier 3 peer-reviewed review focused on the LEAF's nutritional/bioactive composition.
  const devkotaLeafReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC9413031/", {
    title:
      "Stinging Nettle (Urtica dioica L.): Nutritional Composition, Bioactive Compounds, and Food Functional Properties",
    author: "Devkota HP, Paudel KR, Khanal S, et al.",
    organization: "Molecules",
    journal: "Molecules",
    publicationDate: new Date("2022-08-16"),
    doi: "10.3390/molecules27165219",
    pmid: "36014458",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9413031/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // --- constituents ---
  const betaSitosterol = await prisma.constituent.upsert({
    where: { slug: "beta-sitosterol" },
    update: {},
    create: { name: "Beta-Sitosterol", slug: "beta-sitosterol", type: "phytosterol" },
  });
  const histamine = await prisma.constituent.upsert({
    where: { slug: "histamine" },
    update: {},
    create: { name: "Histamine", slug: "histamine", type: "biogenic amine" },
  });
  const formicAcid = await prisma.constituent.upsert({
    where: { slug: "formic-acid" },
    update: {},
    create: { name: "Formic Acid", slug: "formic-acid", type: "organic acid" },
  });
  const scopoletin = await prisma.constituent.upsert({
    where: { slug: "scopoletin" },
    update: {},
    create: { name: "Scopoletin", slug: "scopoletin", type: "coumarin" },
  });

  const constituentLinks: { constituentId: string; notes: string }[] = [
    {
      constituentId: betaSitosterol.id,
      notes:
        "The most plentiful plant sterol in the root (about 75–82% of the root's sterols). Along with lignans, polysaccharides and the lectin UDA, it is thought to be one of the compounds behind the root's effects on prostate symptoms, though how much each one contributes isn't fully known (Martz & Kankaanpää, 2025).",
    },
    {
      constituentId: histamine.id,
      notes:
        "Found in the fluid of the stinging hairs on fresh leaves and stems. It helps cause the immediate sting and skin rash when you touch the plant, along with serotonin, acetylcholine and formic acid (Cummings & Olsen, 2011).",
    },
    {
      constituentId: formicAcid.id,
      notes:
        "Found in high amounts in the tips of the stinging hairs. It is one of the substances, along with histamine, acetylcholine and serotonin, behind the burning feeling from touching the fresh plant (Cummings & Olsen, 2011).",
    },
    {
      constituentId: scopoletin.id,
      notes: "A coumarin compound found in the root (Martz & Kankaanpää, 2025).",
    },
  ];
  for (const link of constituentLinks) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: nettle.id, constituentId: link.constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: nettle.id, constituentId: link.constituentId, notes: link.notes },
      });
    }
  }

  // --- tradition ---
  const europeanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "european-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: nettle.id, traditionId: europeanFolkMedicine.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: nettle.id,
        traditionId: europeanFolkMedicine.id,
        notes:
          "Nettle has long been used across Europe as food (a spring vegetable eaten cooked or dried) and in folk medicine: the leaf for joint and muscle pain and to increase urination, and the root for urinary complaints. The official European herbal profiles list local names for nettle root in more than 20 European languages, a sign of how widely it has been used.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "The European Medicines Agency recognizes nettle leaf as a traditional herbal medicine, based only on its long history of use, for two purposes:\n- Relief of minor joint pain\n- Increasing urination to help flush the urinary tract, alongside other care for minor urinary complaints",
      sourceId: emaFolium.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "The European Medicines Agency recognizes nettle root as a traditional herbal medicine, based only on its long history of use, for relieving urinary symptoms caused by an enlarged prostate (benign prostatic hyperplasia, or BPH), once a doctor has ruled out serious conditions.",
      sourceId: emaRadix.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Historically, nettle has been widely eaten, as a cooked vegetable or dried and stored as food during shortages. In traditional medicine across Europe, Asia and Africa it has been used to increase urination and for coughs, colds, cuts and wounds. Fresh leaves were traditionally applied to the skin to relieve joint pain.",
      sourceId: devkotaLeafReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Lab studies of nettle root and its natural compounds report:\n- Several compounds, including plant sterols (mainly beta-sitosterol), lignans, polysaccharides and a protein called UDA, are thought to be behind the root's effects on prostate symptoms, though how much each contributes isn't fully shown.\n- UDA acted against fungi and bacteria, and against several viruses that have an outer envelope (including SARS-CoV-2, flu, dengue and HIV) but not viruses without one.\n- UDA slowed or killed several types of cancer cells in the lab, including leukemia cells.\nThese are lab findings, not established effects in people.\n\nTechnical detail: main lignan is pinoresinol; UDA is Urtica dioica agglutinin, a lectin that binds chitin in fungal and bacterial cell walls; antiproliferative, cytotoxic and apoptotic effects including against acute myeloid leukemia cells.",
      sourceId: martzRootReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a trial of 27 people with arthritis pain at the base of the thumb or index finger, people rubbed fresh stinging nettle leaf on the painful area every day for a week, and a look-alike non-stinging plant (white deadnettle) for another week. Pain and disability dropped significantly more with the stinging nettle. This was the first controlled trial of this long-standing folk remedy.\n\nTechnical detail: randomized, double-blind, placebo-controlled crossover with a five-week washout; osteoarthritis; visual analogue scale P = 0.026; health assessment questionnaire P = 0.0027; placebo was Lamium album.",
      sourceId: randallTrial.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "There is some limited evidence from trials that nettle root may improve urinary symptoms of an enlarged prostate (BPH). A 2005 trial of 620 men found better symptom scores and urine flow than placebo over 6 months, with the benefit lasting to 18 months. Trials combining nettle root with saw palmetto also did better than placebo, and one found the combination worked about as well as the prostate drug tamsulosin. Nettle root was generally well tolerated, with occasional mild stomach upset.\n\nTechnical detail: International Prostate Symptom Score (IPSS) and maximum urinary flow rate; combination trials showed benefit for inflammatory and obstructive symptoms.",
      sourceId: nccihBph.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: nettle.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: nettle.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    // Leaf (Urticae folium monograph)
    {
      category: "ALLERGY" as const,
      description: "Don't use nettle leaf if you are allergic to nettle (Urtica dioica or Urtica urens) or any of its components.",
      sourceId: emaFolium.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Don't use nettle leaf if you have been told to limit how much fluid you drink, for example because of severe heart or kidney disease. This matters because nettle leaf is traditionally used to increase urination.",
      sourceId: emaFolium.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Taken by mouth, nettle leaf may cause mild stomach upset (nausea, vomiting, diarrhea) and skin reactions (itching, rash, hives). How often is not known.",
      sourceId: emaFolium.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Nettle leaf has not been shown to be safe during pregnancy, so using it as a medicine while pregnant is not recommended.",
      sourceId: emaFolium.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Nettle leaf has not been shown to be safe while breastfeeding, so using it as a medicine while breastfeeding is not recommended.",
      sourceId: emaFolium.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Nettle leaf is not recommended for children under 12, because there isn't enough data. Traditional use should last no more than 4 weeks for joint pain, or 2–4 weeks for urinary complaints. See a doctor if joint pain comes with swelling, redness or fever, or if urinary symptoms get worse or come with fever, painful urination, cramps or blood in the urine.",
      sourceId: emaFolium.id,
    },
    // Root (Urticae radix monograph)
    {
      category: "ALLERGY" as const,
      description: "Don't use nettle root if you are allergic to it (Urtica dioica or Urtica urens).",
      sourceId: emaRadix.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Taken by mouth, nettle root may cause stomach problems (nausea, heartburn, feeling full, gas, diarrhea) and allergic reactions (itching, rash, hives). How often is not known.",
      sourceId: emaRadix.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "The European herbal profile for nettle root says pregnancy and breastfeeding don't apply, because the product is meant for prostate symptoms in men. There is no data on fertility.",
      sourceId: emaRadix.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Nettle root products have not been properly tested for DNA damage, harm to reproduction, or cancer risk.",
      sourceId: emaRadix.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Nettle root is not used in children or teenagers under 18. See a doctor if symptoms get worse, or if you get a fever, cramps, blood in the urine, painful urination, or can't pass urine.",
      sourceId: emaRadix.id,
    },
    // Cross-cutting
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Nettle contains tannins, which can reduce how well your body absorbs iron. This can make iron supplements less effective for people who need them.",
      sourceId: nccihBph.id,
    },
    {
      category: "PREPARATION_SPECIFIC" as const,
      description:
        "Touching the fresh, raw plant causes an immediate stinging rash. Its hollow hairs inject a mix of histamine, serotonin, acetylcholine and formic acid into the skin, causing burning pain, redness and welts. Dried, cooked or otherwise processed nettle doesn't sting.\n\nTechnical detail: stinging contact dermatitis from trichomes.",
      sourceId: cummingsOlsen.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: nettle.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: nettle.id, ...record },
      });
    }
  }

  console.log("Nettle populated from 7 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
