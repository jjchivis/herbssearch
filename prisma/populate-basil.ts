import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Basil, populated from three real, verified sources.
// Nothing here is invented — every claim traces to one of the Source
// records below, each fetched and checked against the live page/article
// before being written here. Note: the seeded scientific name is Ocimum
// basilicum (sweet/Genovese basil) — a different species from holy basil
// (Ocimum tenuiflorum / O. sanctum, "tulsi"). Research on holy basil was
// deliberately excluded from this file because it does not verify claims
// about O. basilicum.

async function main() {
  const basil = await prisma.herb.findUniqueOrThrow({ where: { name: "Basil" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: basil.id },
    data: {
      family: "Lamiaceae",
      genus: "Ocimum",
      species: "basilicum",
      partsUsed: "Leaf, aerial parts (essential oil)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO / NC State Extension Plant Toolbox, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" }[] = [
    { name: "Ocimum odorum Salisb.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Sweet Basil", type: "COMMON_NAME" },
    { name: "Genovese Basil", type: "COMMON_NAME" },
    { name: "Saint Joseph's Wort", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: basil.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: basil.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government source. NCCIH has no dedicated Basil or Holy Basil
  // page (confirmed by checking its "Herbs at a Glance" index, which does
  // not list any basil entry), so a WHO/EMA-tier regulatory source was
  // used instead, as instructed.
  const emaEstragole = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/other/public-statement-use-herbal-medicinal-products-containing-estragole-revision-1_en.pdf",
    {
      title: "Public statement on the use of herbal medicinal products containing estragole – Revision 1",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2023-06-09"),
      url: "https://www.ema.europa.eu/en/documents/other/public-statement-use-herbal-medicinal-products-containing-estragole-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  const basilReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC10748370/", {
    title:
      "Sweet Basil (Ocimum basilicum L.)―A Review of Its Botany, Phytochemistry, Pharmacological Activities, and Biotechnological Development",
    author:
      "Azizah NS, Irawan B, Kusmoro J, Safriansyah W, Farabi K, Oktavia D, Doni F, Miranti M",
    organization: "Plants (Basel)",
    journal: "Plants (Basel)",
    publicationDate: new Date("2023-12-01"),
    doi: "10.3390/plants12244148",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10748370/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  const anxietyRct = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC12617443/", {
    title:
      "Basil (Ocimum basilicum) to Alleviate Anxiety in Patients With Major Depressive Disorder: A Randomized Placebo-Controlled Clinical Trial",
    author:
      "Talaei M, Zare K, Hashemi Y, Pahlevani AH, Fakhraei B, Namjooyan F, Hashempur MH, Kouhpaye A, Mosavat SH",
    organization: "Brain and Behavior",
    journal: "Brain and Behavior",
    publicationDate: new Date("2025-11-01"),
    doi: "10.1002/brb3.70994",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12617443/",
    sourceType: "peer_reviewed",
    tier: "TIER_2_SYSTEMATIC_REVIEW",
  });

  // --- constituents (two already exist in the taxonomy seed, add the other two, then link) ---
  const eugenol = await prisma.constituent.upsert({
    where: { slug: "eugenol" },
    update: {},
    create: { name: "Eugenol", slug: "eugenol", type: "phenylpropanoid" },
  });
  const estragole = await prisma.constituent.upsert({
    where: { slug: "estragole" },
    update: {},
    create: { name: "Estragole", slug: "estragole", type: "phenylpropanoid" },
  });
  const linalool = await prisma.constituent.findUniqueOrThrow({ where: { slug: "linalool" } });
  const rosmarinicAcid = await prisma.constituent.findUniqueOrThrow({ where: { slug: "rosmarinic-acid" } });

  for (const constituentId of [eugenol.id, estragole.id, linalool.id, rosmarinicAcid.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: basil.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: basil.id, constituentId },
      });
    }
  }

  // --- traditions ---
  const traditionLinks: { slug: string; notes: string }[] = [
    {
      slug: "ayurveda",
      notes:
        "Used within Ayurvedic and Unani systems, particularly in South Asian practice, for fever, cough, cold, digestive complaints, and reproductive disorders.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Documented in African ethnomedicine for allergic reactions, inflammation, and the common cold.",
    },
  ];
  for (const t of traditionLinks) {
    const tradition = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: t.slug } });
    const existingTradition = await prisma.herbTradition.findFirst({
      where: { herbId: basil.id, traditionId: tradition.id },
    });
    if (!existingTradition) {
      await prisma.herbTradition.create({
        data: { herbId: basil.id, traditionId: tradition.id, notes: t.notes },
      });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Documented across multiple traditional medicine systems: in Ayurvedic and Unani systems, used for fever, cough, cold, digestive issues, and reproductive disorders in South Asian practice; in Southeast Asian traditions, for flatulence, peptic ulcers, tuberculosis, and ringworm; in African ethnomedicine, for allergic reactions, inflammation, and the common cold; and in Brazilian folk medicine, for delayed menstruation, indigestion, and nasal congestion. Traditional preparations included infusions, inhalations, pastes, powders, and teas.",
      sourceId: basilReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In vitro and animal studies report antiviral activity (against SARS-CoV-2, dengue, HIV, herpes simplex, hepatitis B, and Zika viruses in laboratory models), antibacterial activity against Gram-positive and Gram-negative species, antifungal activity against Candida albicans and Aspergillus species, antioxidant activity in DPPH assays, anticancer effects in breast cancer and glioblastoma cell lines, antidiabetic ('insulin-like') effects, neuroprotective effects including memory improvement and anticonvulsant activity in mice, anti-inflammatory effects in carrageenan-induced paw edema in mice, and wound-healing effects in topical formulations. The review notes that no human clinical trials were included in its pharmacological findings — all of this evidence derives from in vitro, animal, or computational studies.",
      sourceId: basilReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a single-blind, randomized, placebo-controlled trial (n=60) in patients with major depressive disorder already taking sertraline, adding a basil hydroalcoholic-extract syrup (1100 mg extract per 5 mL, nightly) for 4 weeks produced significantly greater reductions in anxiety (Hamilton Anxiety Rating Scale) and depression (Beck Depression Inventory) scores than placebo (p < 0.001 for both). This is a single trial and further replication would be needed to confirm the finding.",
      sourceId: anxietyRct.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: basil.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: basil.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "TOXICITY" as const,
      description:
        "Essential oil from the aerial parts of Ocimum basilicum can contain approximately 20-89% estragole (methyl chavicol) depending on chemotype. The EMA's Committee on Herbal Medicinal Products (HMPC) has concluded that estragole is a genotoxic carcinogen in animal studies and recommends that exposure to it from herbal products be kept as low as practically achievable.",
      sourceId: emaEstragole.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "HMPC guidance limits herbal medicinal products containing estragole (such as basil preparations) to short-term use of no more than 14 days, with a guidance value for maximum intake of 0.05 mg estragole per day for adults (1 microgram per kg body weight per day for children up to age 11).",
      sourceId: emaEstragole.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "HMPC guidance states that use of estragole-containing herbal medicinal products, including basil preparations, is not recommended during pregnancy above the 0.05 mg/day guidance value unless justified by an adequate risk assessment.",
      sourceId: emaEstragole.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "HMPC guidance states that use of estragole-containing herbal medicinal products, including basil preparations, is not recommended while breastfeeding above the 0.05 mg/day guidance value unless justified by an adequate risk assessment.",
      sourceId: emaEstragole.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "In a 4-week randomized controlled trial combining basil syrup with sertraline in patients with major depressive disorder, mild, transient adverse effects included gastrointestinal discomfort (1 of 27 participants) and headache (2 of 27); no serious adverse effects were observed, and the basil supplement was reported as well tolerated overall.",
      sourceId: anxietyRct.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: basil.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: basil.id, ...record },
      });
    }
  }

  console.log("Basil populated from 3 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
