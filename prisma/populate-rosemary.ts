import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Rosemary, populated from three real, verified sources.
// Nothing here is invented — every claim traces to one of the three Source
// records below, each fetched and checked against the live page/article
// before being written here.
//
// Taxonomy note: Rosemary's accepted scientific name changed from
// Rosmarinus officinalis L. to Salvia rosmarinus Spenn. following the 2017
// molecular-phylogenetic reclassification of Rosmarinus into Salvia. This
// was verified live against Kew's Plants of the World Online (POWO) and the
// GBIF Backbone Taxonomy, both of which list Salvia rosmarinus as ACCEPTED
// and Rosmarinus officinalis L. as a synonym. EU (EMA/HMPC) regulatory
// monographs and most older peer-reviewed literature still use Rosmarinus
// officinalis L., which is why that name is recorded here as a scientific
// synonym rather than discarded.

async function main() {
  const rosemary = await prisma.herb.findUniqueOrThrow({ where: { name: "Rosemary" } });

  // --- botanical profile ---
  // Family/genus/species per Kew POWO (https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:457138-1)
  // and GBIF Backbone Taxonomy (https://api.gbif.org/v1/species/113618606), both confirming
  // Salvia rosmarinus Spenn. as the currently accepted name in family Lamiaceae.
  // partsUsed per EMA HMPC monographs, which cover both Rosmarini folium (leaf) and
  // Rosmarinus officinalis L., aetheroleum (essential oil).
  await prisma.herb.update({
    where: { id: rosemary.id },
    data: {
      family: "Lamiaceae",
      genus: "Salvia",
      species: "rosmarinus",
      partsUsed: "The leaves, fresh or dried. The essential oil is distilled from the leaves and flowering tops.",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO / GBIF, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Rosmarinus officinalis L.", type: "SCIENTIFIC_SYNONYM" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: rosemary.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: rosemary.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government/regulatory source. NCCIH has no dedicated rosemary page
  // (confirmed live: nccih.nih.gov/health/rosemary returns 404, and rosemary
  // does not appear in NCCIH's "Herbs at a Glance" index). EMA/HMPC is
  // explicitly listed as a Tier-1 government source in this project's own
  // schema (see SourceTier enum comment), so its "Rosmarini folium" herbal
  // medicinal product monograph page is used instead.
  const ema = await findOrCreateSource("https://www.ema.europa.eu/en/medicines/herbal/rosmarini-folium", {
    title: "Rosmarini folium - herbal medicinal product",
    organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
    publicationDate: new Date("2024-05-29"),
    url: "https://www.ema.europa.eu/en/medicines/herbal/rosmarini-folium",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  // Peer-reviewed phytochemistry/pharmacology review.
  const phytochemistryReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5905578/",
    {
      title: "Rosmarinus officinalis L.: an update review of its phytochemistry and biological activity",
      author: "Andrade JM, Faustino C, Garcia C, Ladeiras D, Reis CP, Rijo P",
      organization: "Future Science OA",
      journal: "Future Science OA",
      publicationDate: new Date("2018-01-01"),
      doi: "10.4155/fsoa-2017-0124",
      pmid: "29682318",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5905578/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed randomized human study on cognitive/mood effects.
  const mossCognitionTrial = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/12690999/",
    {
      title: "Aromas of rosemary and lavender essential oils differentially affect cognition and mood in healthy adults",
      author: "Moss M, Cook J, Wesnes K, Duckett P",
      organization: "International Journal of Neuroscience",
      journal: "International Journal of Neuroscience",
      publicationDate: new Date("2003-01-01"),
      doi: "10.1080/00207450390161903",
      pmid: "12690999",
      url: "https://pubmed.ncbi.nlm.nih.gov/12690999/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (rosmarinic-acid already exists in the taxonomy seed; add others found in the review) ---
  const carnosicAcid = await prisma.constituent.upsert({
    where: { slug: "carnosic-acid" },
    update: {},
    create: { name: "Carnosic Acid", slug: "carnosic-acid", type: "diterpenoid" },
  });
  const carnosol = await prisma.constituent.upsert({
    where: { slug: "carnosol" },
    update: {},
    create: { name: "Carnosol", slug: "carnosol", type: "diterpenoid" },
  });
  const cineole = await prisma.constituent.upsert({
    where: { slug: "1-8-cineole" },
    update: {},
    create: { name: "1,8-Cineole (Eucalyptol)", slug: "1-8-cineole", type: "volatile oil" },
  });
  const rosmarinicAcid = await prisma.constituent.findUniqueOrThrow({ where: { slug: "rosmarinic-acid" } });

  for (const constituentId of [carnosicAcid.id, carnosol.id, cineole.id, rosmarinicAcid.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: rosemary.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: rosemary.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: rosemary.id, traditionId: mediterraneanFolkMedicine.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: rosemary.id,
        traditionId: mediterraneanFolkMedicine.id,
        notes:
          "Native to the Mediterranean region, where it has long been used in cooking and in folk medicine for digestive complaints, muscle and joint pain, minor wounds and poor circulation.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "In traditional medicine, rosemary leaves have been used to fight bacteria, relieve gas, and ease muscle and joint pain. Oils and extracts from the flowers and leaves have traditionally been put on minor wounds and rashes, and used for headache, indigestion and poor circulation, to loosen mucus, to increase urination, and to ease cramping pain from kidney stones. Rosemary is widely used in Mediterranean cooking, and in folk medicine to prevent and treat colds, rheumatism, and muscle and joint pain.\n\nTechnical detail: carminative, analgesic, expectorant, diuretic, antispasmodic for renal colic; dyspepsia.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Lab and animal studies of rosemary's main natural compounds report:\n- Carnosic acid slowed or killed several kinds of human cancer cells in the lab, including breast and colon cancer cells, improved blood fat levels in rats, and acted against a common respiratory virus (RSV).\n- Carnosol was toxic to several kinds of cancer cells, showed antioxidant activity, and reduced inflammation.\n- Rosmarinic acid protected nerve cells and blocked an enzyme that breaks down a memory-related brain chemical (acetylcholine).\nThese are lab and animal findings, not established effects in people.\n\nTechnical detail: carnosic acid: HepG2, COLO 205 and HL-60 cell lines, dose-dependent; inhibited gastric lipase in Zucker rats. Carnosol: inhibited lipid peroxidation; COX-1/COX-2 inhibition. Rosmarinic acid: cholinergic effects, acetylcholinesterase inhibition, reduced pro-inflammatory cytokines.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a study of 144 healthy adults doing computer tests of memory and thinking, people smelled rosemary oil, lavender oil or nothing. The scent of rosemary had measurable effects on how people performed on the tests, and on how they said they felt, compared with lavender and no scent.\n\nTechnical detail: randomized controlled study; objective effects on cognitive performance and subjective effects on mood.",
      sourceId: mossCognitionTrial.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: rosemary.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: rosemary.id, ...entry } });
    }
  }

  // --- safety, all traced to the EMA/HMPC Rosmarini folium monograph ---
  const safetyRecords = [
    {
      category: "ALLERGY" as const,
      description: "Don't use rosemary leaf if you are allergic to it.",
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Rosemary medicines are not recommended for children under 12, or for people with a blocked bile duct, an inflamed gallbladder, gallstones or liver disease.",
    },
    {
      category: "PREGNANCY" as const,
      description: "Rosemary medicines are not recommended during pregnancy, according to the European Medicines Agency's traditional-use assessment.",
    },
    {
      category: "BREASTFEEDING" as const,
      description: "Rosemary medicines are not recommended while breastfeeding, according to the European Medicines Agency's traditional-use assessment.",
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Allergic reactions, including skin rashes from contact, can happen; how often is not known. Preparations meant to be taken by mouth should not be put on broken or irritated skin.",
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "No interactions between rosemary leaf and medicines had been described in the research at the time of this assessment.",
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: rosemary.id, category: record.category, sourceId: ema.id },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: rosemary.id, sourceId: ema.id, ...record },
      });
    }
  }

  console.log("Rosemary populated from 3 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
