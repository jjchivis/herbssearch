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
        "Leaf (Urticae folium) — traditionally for minor articular/joint pain and as a mild diuretic adjuvant for urinary tract complaints; Root (Urticae radix) — traditionally for lower urinary tract symptoms of benign prostatic hyperplasia (BPH). Leaf and root have distinct chemical profiles and are covered by separate EU herbal monographs.",
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
        "Most abundant phytosterol in the root (roughly 75-82% of total root sterols); considered, alongside lignans, polysaccharides, and the lectin UDA, among the active principles for BPH-related effects, though the specific contribution of each compound is not fully established (Martz & Kankaanpää, 2025).",
    },
    {
      constituentId: histamine.id,
      notes:
        "Present in the fluid of the stinging hairs (trichomes) on fresh leaves and stems; a biochemical mediator of the immediate stinging/contact-dermatitis reaction on skin contact, alongside serotonin, acetylcholine, and formic acid (Cummings & Olsen, 2011).",
    },
    {
      constituentId: formicAcid.id,
      notes:
        "Found at high concentration in the stinging-hair spicules; one of the biochemical mediators (with histamine, acetylcholine, and serotonin) implicated in the burning sensation from fresh-plant contact (Cummings & Olsen, 2011).",
    },
    {
      constituentId: scopoletin.id,
      notes: "A coumarin compound reported in the root (Martz & Kankaanpää, 2025).",
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
          "Long-standing traditional use across Europe as food (a spring vegetable eaten cooked or dried) and folk medicine — leaf for joint/muscle pain and as a diuretic, root for urinary complaints — reflected in the EU/HMPC herbal monographs, which list vernacular names for nettle root in over 20 European languages as evidence of widespread traditional use.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Nettle leaf (Urticae folium) is recognized by the EU/HMPC as a traditional herbal medicinal product, based exclusively on long-standing use, for two indications: relief of minor articular (joint) pain, and to increase the amount of urine to achieve flushing of the urinary tract as an adjuvant in minor urinary complaints.",
      sourceId: emaFolium.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Nettle root (Urticae radix) is recognized by the EU/HMPC as a traditional herbal medicinal product, based exclusively on long-standing use, for the relief of lower urinary tract symptoms related to benign prostatic hyperplasia (BPH), after serious conditions have been excluded by a doctor.",
      sourceId: emaRadix.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Historically, Urtica dioica has been widely used as a food (eaten as a cooked vegetable or dried and used as stock food during food shortages) and in traditional medicine across Europe, Asia, and Africa as a diuretic and for the treatment of cough, cold, cuts, and wounds, with external application of the leaves traditionally used for joint pain relief.",
      sourceId: devkotaLeafReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In vitro studies of nettle root extracts and their constituents report: phytosterols (chiefly beta-sitosterol), lignans (chiefly pinoresinol), polysaccharides, and the lectin UDA (Urtica dioica agglutinin) are considered among the active principles behind effects relevant to BPH, though the precise contribution of each compound is not fully demonstrated; UDA additionally shows antifungal and antibacterial activity via chitin-binding to fungal/bacterial cell-wall glycans, broad-spectrum in vitro antiviral activity against several enveloped viruses (including SARS-CoV-2, influenza, dengue, and HIV, but not non-enveloped viruses), and antiproliferative/cytotoxic and apoptotic effects against various cancer cell lines including acute myeloid leukemia cells. These are preclinical (in vitro) findings, not established clinical effects in humans.",
      sourceId: martzRootReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A randomized, double-blind, placebo-controlled crossover trial in 27 patients with osteoarthritic pain at the base of the thumb or index finger had patients apply stinging nettle leaf (Urtica dioica) topically to the painful area daily for one week, compared with a placebo leaf (white deadnettle, Lamium album) for one week after a five-week washout. Reductions in both pain (visual analogue scale) and disability (health assessment questionnaire) were significantly greater with nettle sting than placebo (P = 0.026 and P = 0.0027, respectively) — the first randomized controlled trial of this long-standing folk remedy.",
      sourceId: randallTrial.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "There is some limited clinical-trial evidence that nettle root may improve symptoms of benign prostatic hyperplasia (BPH), including lower urinary tract symptoms. A 2005 trial of 620 patients found significant improvement in International Prostate Symptom Score (IPSS) and maximum urinary flow rate compared with placebo over 6 months, with benefit maintained at 18 months. Combination trials of nettle root with saw palmetto have also shown superiority over placebo for inflammatory and obstructive symptoms, with one comparison finding the combination and the drug tamsulosin similarly effective. Nettle root appears to be generally well tolerated in these trials, with occasional mild gastrointestinal effects.",
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
      description: "Contraindicated in individuals with known hypersensitivity to nettle leaf (Urtica dioica L.; Urtica urens L.) or its constituents.",
      sourceId: emaFolium.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Not to be used in conditions where a reduced fluid intake is recommended, such as severe cardiac or renal disease — relevant because of the leaf's traditional diuretic/urinary-flushing use.",
      sourceId: emaFolium.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Mild gastrointestinal complaints (nausea, vomiting, diarrhoea) and skin reactions (itching, exanthema, hives) may occur with oral use of the leaf; frequency not known.",
      sourceId: emaFolium.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Safety of nettle leaf during pregnancy has not been established; in the absence of sufficient data, use during pregnancy is not recommended.",
      sourceId: emaFolium.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Safety of nettle leaf during lactation has not been established; in the absence of sufficient data, use during breastfeeding is not recommended.",
      sourceId: emaFolium.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Use of nettle leaf in children under 12 years of age is not recommended due to lack of adequate data. Traditional-use duration should not exceed 4 weeks for joint pain or 2-4 weeks for urinary complaints; a doctor should be consulted if joint pain is accompanied by swelling, redness, or fever, or if urinary symptoms worsen or are accompanied by fever, dysuria, spasm, or blood in the urine.",
      sourceId: emaFolium.id,
    },
    // Root (Urticae radix monograph)
    {
      category: "ALLERGY" as const,
      description: "Contraindicated in individuals with known hypersensitivity to nettle root (Urtica dioica L.; Urtica urens L.).",
      sourceId: emaRadix.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Gastrointestinal disorders (nausea, heartburn, feeling of fullness, flatulence, diarrhoea) and immune system disorders (allergic reactions including pruritus, rash, and urticaria) may occur with oral use of the root; frequency not known.",
      sourceId: emaRadix.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "The EU herbal monograph for nettle root states pregnancy and lactation are 'not relevant' for this product, which is indicated for lower urinary tract symptoms of benign prostatic hyperplasia in men; no fertility data are available.",
      sourceId: emaRadix.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Adequate tests on genotoxicity have not been performed for nettle root preparations, and tests on reproductive toxicity and carcinogenicity have not been performed.",
      sourceId: emaRadix.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "There is no relevant use of nettle root in children and adolescents under 18 years of age. A doctor should be consulted if complaints worsen or if fever, spasms, blood in the urine, painful urination, or urinary retention occur during use.",
      sourceId: emaRadix.id,
    },
    // Cross-cutting
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Urtica dioica contains tannins, which can interact with concomitant intake of iron, reducing the effectiveness of iron supplementation in patients who need it.",
      sourceId: nccihBph.id,
    },
    {
      category: "PREPARATION_SPECIFIC" as const,
      description:
        "Contact with the fresh (raw, undried) plant's stinging hairs causes an immediate stinging contact dermatitis: the hollow hairs mechanically inject a mix of histamine, serotonin, acetylcholine, and formic acid into the skin, producing burning pain, redness, and welts. This fresh-plant contact reaction is distinct from reactions to dried, cooked, or otherwise processed nettle preparations, which do not retain the stinging mechanism.",
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
