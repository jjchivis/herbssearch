import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Thyme, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/article
// before being written here.
//
// Tier-1 source note: NCCIH has no dedicated thyme page (confirmed live:
// nccih.nih.gov/health/herbsataglance was fetched and its full 59-herb index
// does not include thyme). The EMA/HMPC "Thymi herba" traditional-use
// monograph (EMA/HMPC/342332/2013) is used instead, matching the pattern
// used for rosemary in this project.

async function main() {
  const thyme = await prisma.herb.findUniqueOrThrow({ where: { name: "Thyme" } });

  // --- botanical profile ---
  // Family/genus/species per GBIF Backbone Taxonomy (species match for
  // "Thymus vulgaris", status ACCEPTED, family Lamiaceae, genus Thymus) and
  // Kew POWO listing Thymus vulgaris L. as an accepted name in Lamiaceae.
  // partsUsed per the EMA/HMPC Thymi herba monograph, which covers the dried
  // leaf and flower / aerial parts ("herba") of Thymus vulgaris L. and
  // Thymus zygis L.
  await prisma.herb.update({
    where: { id: thyme.id },
    data: {
      family: "Lamiaceae",
      genus: "Thymus",
      species: "vulgaris",
      partsUsed: "Leaf and flowering top (aerial parts), dried or fresh",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (no accepted scientific synonyms found on Kew POWO/GBIF for
  // Thymus vulgaris L.; only common names are recorded here) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Common Thyme", type: "COMMON_NAME" },
    { name: "Garden Thyme", type: "COMMON_NAME" },
    { name: "German Thyme", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: thyme.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: thyme.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government/regulatory source. NCCIH has no dedicated thyme page
  // (confirmed live against the full "Herbs at a Glance" index), so the
  // EMA/HMPC traditional-use monograph is used instead, as with rosemary.
  const ema = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-thymus-vulgaris-l-and-thymus-zygis-l-herba_en.pdf",
    {
      title: "Community herbal monograph on Thymus vulgaris L. and Thymus zygis L., herba",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2013-11-12"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-thymus-vulgaris-l-and-thymus-zygis-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed ethnopharmacology/phytochemistry/traditional-use review.
  const ethnopharmacologyReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8141878/",
    {
      title: "A systematic review on ethnopharmacology, phytochemistry and pharmacological aspects of Thymus vulgaris Linn.",
      author: "Patil SM, Ramu R, Shirahatti PS, Shivamallu C, Amachawadi RG",
      organization: "Heliyon",
      journal: "Heliyon",
      publicationDate: new Date("2021-05-18"),
      doi: "10.1016/j.heliyon.2021.e07054",
      pmid: "34041399",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8141878/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed primary research on thyme essential oil composition and
  // in vitro biological activity (antioxidant, antimicrobial, antibiofilm).
  const essentialOilStudy = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8467294/",
    {
      title: "Thymus vulgaris Essential Oil and Its Biological Activity",
      author: "Galovicova L, Borotova P, Valkova V, Vukovic NL, Vukic M, Stefanikova J, Duranova H, Kowalczewski PL, Cmikova N, Kacaniova M",
      organization: "Plants (Basel)",
      journal: "Plants (Basel)",
      publicationDate: new Date("2021-09-17"),
      doi: "10.3390/plants10091959",
      pmid: "34579491",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8467294/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed randomized, double-blind, placebo-controlled human trial.
  const bronchitisTrial = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/17966760/",
    {
      title:
        "Evaluation of efficacy and tolerability of a fixed combination of dry extracts of thyme herb and primrose root in adults suffering from acute bronchitis with productive cough. A prospective, double-blind, placebo-controlled multicentre clinical trial",
      author: "Kemmerich B",
      organization: "Arzneimittelforschung",
      journal: "Arzneimittelforschung",
      publicationDate: new Date("2007-01-01"),
      doi: "10.1055/s-0031-1296656",
      pmid: "17966760",
      url: "https://pubmed.ncbi.nlm.nih.gov/17966760/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (thymol already exists in the taxonomy seed; add
  // carvacrol and p-cymene, both documented as major thyme oil components
  // in the phytochemistry sources above) ---
  const thymol = await prisma.constituent.findUniqueOrThrow({ where: { slug: "thymol" } });
  const carvacrol = await prisma.constituent.upsert({
    where: { slug: "carvacrol" },
    update: {},
    create: { name: "Carvacrol", slug: "carvacrol", type: "volatile oil" },
  });
  const pCymene = await prisma.constituent.upsert({
    where: { slug: "p-cymene" },
    update: {},
    create: { name: "p-Cymene", slug: "p-cymene", type: "volatile oil" },
  });

  for (const constituentId of [thymol.id, carvacrol.id, pCymene.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: thyme.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: thyme.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: thyme.id, traditionId: mediterraneanFolkMedicine.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: thyme.id,
        traditionId: mediterraneanFolkMedicine.id,
        notes:
          "Native to the Mediterranean region; used since antiquity by the Egyptians, Greeks, and Romans for embalming, purification, and disinfection, and long-standing folk use across the Mediterranean and Europe for respiratory complaints, digestive upset, intestinal parasites, and minor wounds.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Thyme has a long history of ethnomedicinal use dating to ancient Egypt, Greece, and Rome, where it was used for wound healing and disinfection (including burning bundles for purification) and for skin ailments during plague outbreaks. Traditionally used for respiratory ailments including bronchitis, asthma, whooping cough, and pharyngitis; for gastrointestinal complaints and intestinal worm infestations; for rheumatic aches via topical/aromatherapy use; and in food preparation for its antimicrobial, preservative properties.",
      sourceId: ethnopharmacologyReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Steam-distilled Thymus vulgaris essential oil (thymol chemotype: thymol 48.1%, p-cymene 11.7%, 1,8-cineole 6.7%, gamma-terpinene 6.1%, carvacrol 5.5%) showed strong antioxidant activity in a DPPH radical-scavenging assay (85.2% inhibition). In antimicrobial testing, the oil produced moderate-to-strong inhibition zones (9.89-22.44 mm) against gram-positive and gram-negative bacteria, yeasts, and biofilm-forming strains, with the lowest minimum inhibitory concentrations against Bacillus subtilis, Enterococcus faecalis, and Staphylococcus aureus. Vapor-phase exposure also inhibited Penicillium growth on bread and Serratia marcescens on stored carrots, and MALDI-TOF analysis indicated disruption of biofilm protein profiles in Salmonella Enteritidis and Pseudomonas fluorescens. These are in vitro/food-model findings, not established clinical effects in humans.",
      sourceId: essentialOilStudy.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A prospective, double-blind, placebo-controlled, multicentre phase IV trial randomized 361 adult outpatients with acute bronchitis and productive cough to an 11-day course of a fixed thyme herb/primrose root dry-extract combination (183 patients) or placebo (178 patients), three tablets daily. The active-treatment group had a significantly greater mean reduction in coughing fits on days 7-9 relative to baseline (67.1% vs. 51.3% with placebo, p < 0.0001), reached a 50% reduction in coughing fits about two days sooner than placebo, and had a higher responder rate on the Bronchitis Severity Score at study end (92.9% vs. 75.8%, p < 0.0001).",
      sourceId: bronchitisTrial.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: thyme.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: thyme.id, ...entry } });
    }
  }

  // --- safety, all traced to the EMA/HMPC Thymi herba monograph ---
  const safetyRecords = [
    {
      category: "CONTRAINDICATION" as const,
      description: "Hypersensitivity to thyme (the active substance) or to other plants of the Lamiaceae (Labiatae) family.",
    },
    {
      category: "DOSAGE" as const,
      description:
        "For most oral preparations (tinctures, soft/dry extracts, comminuted herb as tea), use in children under 12 years of age is not recommended due to lack of adequate data. For certain liquid extract preparations, use in children under 4 years is not recommended and medical advice should be sought. If symptoms persist longer than 1 week, or if dyspnoea, fever, or purulent sputum occur, a doctor or qualified health care practitioner should be consulted.",
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description: "Gastric disorders may occur; frequency not known. If other adverse reactions occur, a doctor or qualified health care practitioner should be consulted.",
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "No interactions between thyme herb preparations and other medicinal products have been reported.",
    },
    {
      category: "PREGNANCY" as const,
      description: "Safety during pregnancy has not been established. In the absence of sufficient data, use during pregnancy is not recommended; no fertility data are available.",
    },
    {
      category: "BREASTFEEDING" as const,
      description: "Safety during breastfeeding has not been established. In the absence of sufficient data, use during breastfeeding is not recommended.",
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: thyme.id, category: record.category, sourceId: ema.id },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: thyme.id, sourceId: ema.id, ...record },
      });
    }
  }

  console.log("Thyme populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
