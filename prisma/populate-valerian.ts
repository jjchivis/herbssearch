import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Valerian, populated from three real, verified sources.
// Nothing here is invented — every claim traces to one of the three Source
// records below, all fetched and checked against the live page/article
// before being written here.
//
// Taxonomy (family/genus/species/synonyms) was cross-checked against NCBI
// Taxonomy (taxid 19953), Wikispecies, and the NC State Extension Gardener
// Plant Toolbox (all fetched live); Kew POWO and GBIF returned HTTP 403 to
// direct fetch, so nothing from those two is asserted here. ITIS (TSN 35363)
// still lists the older family Valerianaceae rather than the current APG
// placement in Caprifoliaceae; the current placement is used below.

async function main() {
  const valerian = await prisma.herb.findUniqueOrThrow({ where: { name: "Valerian" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: valerian.id },
    data: {
      family: "Caprifoliaceae",
      genus: "Valeriana",
      species: "officinalis",
      partsUsed: "The root and rhizome (underground stem)",
      nativeRange: "Europe and Asia (from Iceland to Iran); now grows wild in North America",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (NCBI Taxonomy / Wikispecies / NC State Extension, cross-checked) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Valeriana exaltata J.C.Mikan ex Pohl", type: "SCIENTIFIC_SYNONYM" },
    { name: "Valeriana sylvestris Garsault", type: "SCIENTIFIC_SYNONYM" },
    { name: "All-Heal", type: "COMMON_NAME" },
    { name: "Garden Heliotrope", type: "COMMON_NAME" },
    { name: "Garden Valerian", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: valerian.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: valerian.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const nccih = await findOrCreateSource("https://www.nccih.nih.gov/health/valerian", {
    title: "Valerian: Usefulness and Safety",
    organization: "National Center for Complementary and Integrative Health (NIH)",
    publicationDate: new Date("2025-05-01"),
    url: "https://www.nccih.nih.gov/health/valerian",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  const sleepMetaAnalysis = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC7585905/",
    {
      title: "Valerian Root in Treating Sleep Problems and Associated Disorders—A Systematic Review and Meta-Analysis",
      author: "Shinjyo N, Waddell G, Green J",
      organization: "Journal of Evidence-Based Integrative Medicine",
      journal: "Journal of Evidence-Based Integrative Medicine",
      publicationDate: new Date("2020-01-01"),
      doi: "10.1177/2515690X20967323",
      pmid: "33086877",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7585905/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const cnsReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8144999/",
    {
      title: "Plant Species of Sub-Family Valerianaceae—A Review on Its Effect on the Central Nervous System",
      author: "Das G, Shin HS, Tundis R, Talukdar AD, Deshmukh SK, Loyilo B, Upadhye V, Sarkar C, Patra JK",
      organization: "Plants (Basel)",
      journal: "Plants (Basel)",
      publicationDate: new Date("2021-04-22"),
      doi: "10.3390/plants10050846",
      pmid: "33922184",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8144999/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (valerenic-acid already exists in the taxonomy seed; add valepotriates) ---
  const valerenicAcid = await prisma.constituent.findUniqueOrThrow({ where: { slug: "valerenic-acid" } });
  const valepotriates = await prisma.constituent.upsert({
    where: { slug: "valepotriates" },
    update: {},
    create: { name: "Valepotriates", slug: "valepotriates", type: "iridoid" },
  });

  for (const constituentId of [valerenicAcid.id, valepotriates.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: valerian.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: valerian.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const westernHerbalism = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "western-herbalism" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: valerian.id, traditionId: westernHerbalism.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: valerian.id,
        traditionId: westernHerbalism.id,
        notes:
          "Valerian root has been part of official Western medicine for more than 240 years. It is traditionally seen as mildly calming, anxiety-easing and cramp-relieving. In Europe it has mainly been used for anxiety and restlessness, and in the United States mainly to help with sleep.\n\nTechnical detail: traditionally described as a mild sedative, anxiolytic and antispasmodic.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Valerian root has been part of official medicine for more than 240 years. It is traditionally seen as mildly calming, anxiety-easing and cramp-relieving. Its use differs by region: in Europe mainly for anxiety and restlessness, in the United States mainly to help with sleep, and in Brazilian traditional medicine to bring on sleep, prevent seizures and ease anxiety.\n\nTechnical detail: traditionally described as a mild sedative, anxiolytic and antispasmodic; in Brazil, hypnotic, anticonvulsant and anxiolytic.",
      sourceId: cnsReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Lab and animal studies suggest valerian and its natural compounds (such as valerenic acid) raise levels of GABA, a brain chemical that calms nerve activity, and act on GABA receptors. Separately, valerian acts on adenosine receptors, which help make us sleepy. In animals, valerian reduced anxious behavior without relaxing the muscles, reduced seizures, protected the brain after blocked blood flow, and changed stress-related brain chemicals. Researchers still disagree about which compounds are responsible, and some types of valerian with little valerenic acid have similar effects.\n\nTechnical detail: valerenic acid and valepotriates; GABA-transaminase inhibition; allosteric modulation of GABA-A receptors; adenosine A1 receptor activation; elevated plus-maze; no myorelaxant effect; neuroprotection against ischemic hippocampal damage; modulation of norepinephrine, serotonin and corticosterone in the amygdala and hippocampus.",
      sourceId: cnsReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Research on whether valerian helps sleep problems is inconsistent. In 2017, the American Academy of Sleep Medicine recommended against using valerian for long-term insomnia in adults. Overall, there isn't enough evidence to say whether valerian helps any health condition. Three small studies suggest it might help menopause symptoms, but that isn't certain. There isn't enough evidence to draw conclusions about anxiety, depression, PMS, period cramps or stress.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A 2020 review of 60 studies with 6,894 people found valerian gave a modest and inconsistent improvement in how well people felt they slept, and in anxiety. The effect on sleep was much stronger with the whole dried root than with extracts, which the authors put down to the uneven quality of extracts. They concluded the whole root is likely to give more reliable results. The review also reported possible benefits for obsessive-compulsive disorder, problems with thinking and memory, menopausal hot flashes and menstrual problems, but evidence in people for these is limited.\n\nTechnical detail: systematic review and meta-analysis; sleep quality 10 studies, n=1,065, effect size 0.36; anxiety 8 studies, n=535, effect size 0.36; whole root/rhizome effect size 0.83 vs. extracts 0.10.",
      sourceId: sleepMetaAnalysis.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: valerian.id, category: entry.category, sourceId: entry.sourceId, summary: entry.summary },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: valerian.id, ...entry } });
    }
  }

  // --- safety, traced to NCCIH and the Shinjyo et al. sleep meta-analysis ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Reported side effects include headache, stomach upset, feeling mentally dull, feeling excitable or uneasy, and vivid dreams.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "If you stop valerian suddenly after taking it for a long time, you may get withdrawal symptoms such as anxiety, irritability, heart problems and trouble sleeping, and rarely hallucinations.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Across 60 studies in people aged 7 to 80, valerian caused no serious side effects. The side effects reported were mild and uncommon.",
      sourceId: sleepMetaAnalysis.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Don't combine valerian with alcohol or with sedatives (medicines that make you sleepy).",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Little is known about whether valerian is safe during pregnancy or while breastfeeding.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "In very rare cases, liver damage has been reported with valerian. Its long-term effects on the liver are unknown.",
      sourceId: nccih.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Research suggests valerian is generally safe for most healthy adults at 300 to 600 mg a day for up to 6 weeks. Whether longer use is safe is unknown.",
      sourceId: nccih.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: valerian.id, category: record.category, sourceId: record.sourceId, description: record.description },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: valerian.id, ...record },
      });
    }
  }

  console.log("Valerian populated from 3 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
