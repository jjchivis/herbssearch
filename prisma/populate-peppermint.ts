import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Peppermint, populated from two real, verified sources plus taxonomy
// databases used only for identification (Kew POWO, NCBI Taxonomy).
// Nothing here is invented — every claim traces to one of the two Source
// records below, both fetched and checked against the live page/article
// before being written here.

async function main() {
  const peppermint = await prisma.herb.findUniqueOrThrow({ where: { name: "Peppermint" } });

  // --- botanical profile (Kew Plants of the World Online + NCBI Taxonomy, cross-checked) ---
  await prisma.herb.update({
    where: { id: peppermint.id },
    data: {
      family: "Lamiaceae",
      genus: "Mentha",
      species: "× piperita",
      nativeRange:
        "Native to Europe and Central Asia; a naturally occurring hybrid of Mentha aquatica (watermint) and Mentha spicata (spearmint), now cultivated and naturalized worldwide, including throughout North America.",
      partsUsed: "Leaf and flowering aerial parts (source of peppermint essential oil)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO / NCBI Taxonomy, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Mentha × piperita L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Mentha × balsamea Willd.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Mentha aquatica × Mentha spicata", type: "SCIENTIFIC_SYNONYM" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: peppermint.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: peppermint.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/peppermint-oil", {
    title: "Peppermint Oil: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-05-01"),
    url: "https://www.nccih.nih.gov/health/peppermint-oil",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const phytoPharmacologyReview = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/32173933/",
    {
      title:
        "Ethnomedicinal, phytochemical and pharmacological updates on Peppermint (Mentha × piperita L.)-A review",
      author: "Mahendran G, Rahman LU",
      organization: "Phytotherapy Research",
      journal: "Phytotherapy Research",
      publicationDate: new Date("2020-09-01"),
      doi: "10.1002/ptr.6664",
      pmid: "32173933",
      url: "https://pubmed.ncbi.nlm.nih.gov/32173933/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (menthol already exists in the taxonomy seed; add menthone) ---
  const menthol = await prisma.constituent.findUniqueOrThrow({ where: { slug: "menthol" } });
  const menthone = await prisma.constituent.upsert({
    where: { slug: "menthone" },
    update: {},
    create: { name: "Menthone", slug: "menthone", type: "volatile oil" },
  });

  for (const constituentId of [menthol.id, menthone.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: peppermint.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: peppermint.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const westernHerbalism = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "western-herbalism" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: peppermint.id, traditionId: westernHerbalism.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: peppermint.id,
        traditionId: westernHerbalism.id,
        notes:
          "The medicinal use of mint plants for digestive disorders dates back to ancient Greece, Rome, and Egypt; peppermint oil has been used for centuries in Western herbal medicine to treat gastrointestinal ailments.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "The medicinal use of mint plants for digestive disorders dates back to ancient Greece, Rome, and Egypt, and peppermint oil has been used for centuries to treat gastrointestinal ailments. Today peppermint is traditionally promoted for irritable bowel syndrome (IBS), indigestion, headaches, muscle tension, and nausea.",
      sourceId: nccih.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Beyond its traditional culinary flavoring use, Mentha × piperita has long been used in traditional medicine to treat fever, colds, digestive complaints, and oral mucosa and throat inflammation, and is traditionally regarded as having antiviral and antifungal properties.",
      sourceId: phytoPharmacologyReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Laboratory and preclinical (in vitro and animal) research on M. × piperita extracts and essential oil has reported antioxidant, antimicrobial, antiviral, anti-inflammatory, biopesticidal, larvicidal, anticancer, radioprotective, and anti-diabetic activity, attributed to a wide range of bioactive phytochemicals including flavonoids, phenolics, lignans, stilbenes, and essential oil components.",
      sourceId: phytoPharmacologyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A small amount of clinical research, primarily on IBS, suggests peppermint oil in enteric-coated capsules may improve IBS symptoms in adults. A 2022 review of 10 studies (1,030 participants) found peppermint oil was better than placebo at improving overall IBS symptoms and reducing abdominal pain, though it caused more mild side effects (chiefly acid reflux and indigestion) than placebo. A 2021 American College of Gastroenterology clinical guideline recommends peppermint oil, preferably enteric-coated, for relief of overall IBS symptoms.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A small amount of research suggests taking peppermint extract by mouth or inhaling peppermint oil can help reduce nausea and vomiting in people undergoing chemotherapy for cancer. A 2024 review of aromatherapy studies, including 4 trials (290 participants) on peppermint oil specifically, found inhaled peppermint oil was particularly effective at reducing chemotherapy-related nausea and vomiting.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Evidence for indigestion is limited to specific products combining peppermint oil with caraway oil, or combination products containing peppermint leaf; there is no evidence that peppermint oil taken alone helps indigestion, and it may worsen indigestion in some people. A limited amount of evidence suggests topically applied peppermint oil might relieve tension headaches.",
      sourceId: nccih.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: peppermint.id, category: entry.category, sourceId: entry.sourceId, summary: entry.summary },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: peppermint.id, ...entry } });
    }
  }

  // --- safety, all traced to NCCIH ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Possible side effects of peppermint oil taken orally include heartburn, nausea, abdominal pain, and dry mouth; rarely, peppermint oil can cause allergic reactions. Side effects of applying peppermint oil to the skin can include skin rashes and irritation.",
    },
    {
      category: "PREPARATION_SPECIFIC" as const,
      description:
        "Peppermint oil appears to be safe when taken orally or applied topically in the doses commonly used, and has been safely used in multiple clinical trials. Capsules containing peppermint oil are often enteric-coated to reduce the likelihood of heartburn.",
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Use of oral peppermint in amounts commonly found in food is likely safe during pregnancy, but little is known about whether oral peppermint is safe to use in medicinal amounts during pregnancy.",
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Oral peppermint in amounts commonly found in food is likely safe while breastfeeding, though safety data for medicinal amounts are lacking. A gel, water, or cream containing peppermint oil applied topically to the nipple area may help reduce pain and cracked skin, but should be used only after breastfeeding and wiped off before the next feeding.",
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Menthol, which is in peppermint oil, should not be inhaled by or applied to the face of an infant or small child, because it may negatively affect their breathing.",
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: peppermint.id, category: record.category, sourceId: nccih.id },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: peppermint.id, sourceId: nccih.id, ...record },
      });
    }
  }

  console.log("Peppermint populated from 2 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
