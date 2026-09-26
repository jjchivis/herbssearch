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
      partsUsed: "Leaves, plus the above-ground parts used to make essential oil",
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
        "Used in Ayurvedic and Unani medicine, especially in South Asia, for fever, cough, colds, digestive complaints and reproductive problems.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Used in African traditional medicine for allergic reactions, inflammation and the common cold.",
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
        "Basil has been used in many traditional medicine systems:\n- Ayurvedic and Unani medicine (South Asia): fever, cough, colds, digestive problems and reproductive problems.\n- Southeast Asian traditions: gas, stomach ulcers, tuberculosis and ringworm (a fungal skin infection).\n- African traditional medicine: allergic reactions, inflammation and the common cold.\n- Brazilian folk medicine: late periods, indigestion and a stuffy nose.\nTraditional preparations included teas and infusions, steam inhalations, pastes and powders.",
      sourceId: basilReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab tests and animal studies, basil has shown a wide range of effects: it acted against several viruses (including SARS-CoV-2, dengue, HIV, herpes simplex, hepatitis B and Zika) and against many bacteria and fungi, including Candida yeast. It also showed antioxidant activity, slowed some breast and brain cancer cells in the lab, had insulin-like effects, improved memory and reduced seizures in mice, reduced swelling in mice, and helped wounds heal when applied to the skin. The review included no human trials. All of this comes from lab, animal or computer-model studies.\n\nTechnical detail: antiviral, antibacterial (Gram-positive and Gram-negative), antifungal (Candida albicans, Aspergillus), antioxidant (DPPH assays), anticancer (breast cancer and glioblastoma cell lines), antidiabetic, neuroprotective and anticonvulsant (mice), anti-inflammatory (carrageenan-induced paw edema in mice) and wound-healing effects in topical formulations.",
      sourceId: basilReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In one trial, 60 people with major depression who were already taking the antidepressant sertraline added either a basil syrup or a placebo (a dummy syrup) every night for 4 weeks. The basil group had much larger drops in anxiety and depression scores than the placebo group. This is a single trial, and the result needs to be repeated to be confirmed.\n\nTechnical detail: single-blind, randomized, placebo-controlled; hydroalcoholic-extract syrup, 1100 mg extract per 5 mL; Hamilton Anxiety Rating Scale and Beck Depression Inventory, p < 0.001 for both.",
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
        "Basil essential oil can contain a lot of a natural compound called estragole, anywhere from about 20% to 89% depending on the type of basil. The European Medicines Agency's herbal committee has concluded that estragole damages DNA and causes cancer in animal studies. It recommends keeping exposure from herbal products as low as practically possible.\n\nTechnical detail: estragole is also called methyl chavicol; HMPC classifies it as a genotoxic carcinogen in animal studies; content varies by chemotype.",
      sourceId: emaEstragole.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "European guidance limits herbal medicines that contain estragole, such as basil preparations, to short-term use of no more than 14 days. The suggested maximum is 0.05 mg of estragole a day for adults, and 1 microgram per kg of body weight a day for children up to age 11.",
      sourceId: emaEstragole.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "European guidance does not recommend basil herbal medicines (or other products containing estragole) during pregnancy above 0.05 mg of estragole a day, unless a proper risk assessment supports it. This applies to medicinal preparations, not normal cooking amounts.",
      sourceId: emaEstragole.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "European guidance does not recommend basil herbal medicines (or other products containing estragole) while breastfeeding above 0.05 mg of estragole a day, unless a proper risk assessment supports it.",
      sourceId: emaEstragole.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "In the 4-week trial of basil syrup taken alongside sertraline, side effects were mild and short-lived: stomach discomfort (1 of 27 people) and headache (2 of 27). There were no serious side effects, and people generally tolerated the basil syrup well.",
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
