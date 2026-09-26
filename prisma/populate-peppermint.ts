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
        "Native to Europe and Central Asia. Peppermint is a natural cross between watermint (Mentha aquatica) and spearmint (Mentha spicata). It is now grown and growing wild around the world, including across North America.",
      partsUsed: "The leaves and flowering above-ground parts, which are also the source of peppermint essential oil",
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
          "People in ancient Greece, Rome and Egypt used mint plants for digestive problems. Peppermint oil has been used for centuries in Western herbal medicine for stomach and gut complaints.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "People in ancient Greece, Rome and Egypt used mint plants for digestive problems, and peppermint oil has been used for centuries for stomach and gut complaints. Today, peppermint is traditionally promoted for irritable bowel syndrome (IBS), indigestion, headaches, muscle tension and nausea.",
      sourceId: nccih.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Besides flavoring food, peppermint has long been used in traditional medicine for fever, colds, digestive complaints, and sore or inflamed mouth and throat. It is traditionally thought to fight viruses and fungi.",
      sourceId: phytoPharmacologyReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab and animal studies, peppermint extracts and oil showed antioxidant, germ-fighting and antiviral activity, and reduced inflammation. They also killed or repelled insects and their larvae, slowed cancer cells, protected against radiation damage and lowered blood sugar. These effects are credited to the many natural compounds in the plant.\n\nTechnical detail: biopesticidal, larvicidal, anticancer, radioprotective, anti-diabetic; flavonoids, phenolics, lignans, stilbenes and essential oil components.",
      sourceId: phytoPharmacologyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A small amount of research, mostly on irritable bowel syndrome (IBS), suggests peppermint oil in enteric-coated capsules (capsules designed to open in the intestine rather than the stomach) may improve IBS symptoms in adults. A 2022 review of 10 studies with 1,030 people found peppermint oil worked better than placebo (a dummy pill) for overall IBS symptoms and stomach pain, though it caused more mild side effects, mainly acid reflux and indigestion. A 2021 guideline from the American College of Gastroenterology recommends peppermint oil, preferably enteric-coated, for overall IBS symptoms.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A small amount of research suggests that taking peppermint extract by mouth, or breathing in peppermint oil, can help reduce nausea and vomiting during cancer chemotherapy. A 2024 review of aromatherapy studies, including 4 trials with 290 people using peppermint oil, found breathing in peppermint oil was especially effective for chemotherapy-related nausea and vomiting.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "For indigestion, the evidence only covers specific products that combine peppermint oil with caraway oil, or combination products that contain peppermint leaf. There is no evidence that peppermint oil on its own helps indigestion, and it may make indigestion worse for some people. A limited amount of evidence suggests peppermint oil rubbed on the skin might relieve tension headaches.",
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
        "Peppermint oil taken by mouth can cause heartburn, nausea, stomach pain and dry mouth. Rarely, it can cause allergic reactions. On the skin, it can cause rashes and irritation.",
    },
    {
      category: "PREPARATION_SPECIFIC" as const,
      description:
        "Peppermint oil appears to be safe when taken by mouth or used on the skin in commonly used doses, and it has been used safely in many clinical trials. Peppermint oil capsules are often enteric-coated (designed to open in the intestine) to make heartburn less likely.",
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Peppermint in normal food amounts is likely safe during pregnancy. Little is known about whether larger, medicinal amounts are safe during pregnancy.",
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Peppermint in normal food amounts is likely safe while breastfeeding, but there is no safety data for medicinal amounts. A gel, water or cream with peppermint oil put on the nipple area may help reduce pain and cracked skin. Use it only after breastfeeding, and wipe it off before the next feeding.",
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Don't let a baby or young child breathe in menthol (found in peppermint oil), and don't put it on their face. It may affect their breathing.",
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
