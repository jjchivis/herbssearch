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
      partsUsed: "Root and rhizome",
      nativeRange: "Europe and Asia (from Iceland to Iran); naturalized in North America",
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
          "The roots and rhizomes have been used in official Western medicine for more than 240 years, traditionally regarded as a mild sedative, anxiolytic, and antispasmodic, with regional variation in emphasis: mainly for anxiety and restlessness in Europe, and mainly for sleep promotion in the United States.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Valerian root has been used in official medicine for more than 240 years and is traditionally regarded as a mild sedative, anxiolytic, and antispasmodic. Traditional use patterns differ regionally: in Europe it has been used mainly for anxiety and restlessness, in the United States mainly for its sleep-promoting activity, and in Brazilian traditional medicine for hypnotic, anticonvulsant, and anxiolytic purposes.",
      sourceId: cnsReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Preclinical studies indicate that Valeriana officinalis extract and its constituents, including valerenic acid and valepotriates, modulate GABAergic neurotransmission — in part by inhibiting GABA-transaminase (increasing CNS GABA levels) and through allosteric modulation of GABA-A receptors — and that adenosine A1 receptor activation separately contributes to valerian's sleep-inducing capacity. In animal models the extract has shown anxiolytic activity (e.g., in the elevated plus-maze) without myorelaxant effects, anticonvulsant activity in seizure models, neuroprotection against ischemic hippocampal damage, and modulation of stress-related norepinephrine, serotonin, and corticosterone changes in the amygdala and hippocampus. The review notes that research on which specific compounds drive these effects remains controversial, and that some Valeriana species with low valerenic acid content show similar pharmacological activity.",
      sourceId: cnsReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Evidence on whether valerian is useful for sleep problems is inconsistent, and the American Academy of Sleep Medicine's 2017 clinical practice guideline recommended against using valerian for chronic insomnia in adults. Overall, there is not enough evidence to determine whether valerian is useful for any health condition. Three small studies suggest valerian might help with menopause symptoms, but evidence is insufficient to know for certain, and there is not enough evidence to draw conclusions about its use for anxiety, depression, premenstrual syndrome, menstrual cramps, or stress.",
      sourceId: nccih.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A 2020 systematic review and meta-analysis of 60 studies (n=6,894) found valerian showed modest, inconsistent benefit for subjective sleep quality (10 studies, n=1,065; combined effect size 0.36) and for anxiety (8 studies, n=535; combined effect size 0.36). Effects were substantially stronger for whole root/rhizome preparations (effect size 0.83 for sleep) than for extracts (effect size 0.10), which the authors attributed to variable quality of herbal extracts, concluding that more reliable effects could be expected from the whole root/rhizome. The review also reported potential benefit for obsessive-compulsive disorder, cognitive dysfunction, menopausal hot flashes, and menstrual problems, though human evidence for these remains limited.",
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
        "Reported side effects include headache, stomach upset, mental dullness, excitability, uneasiness, and vivid dreams.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "If stopped abruptly after being taken for a long time, valerian may cause withdrawal symptoms such as anxiety, irritability, heart disturbances, and insomnia, and in rare cases hallucinations.",
      sourceId: nccih.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Across 60 studies in subjects aged 7 to 80, no severe adverse events were associated with valerian intake; reported side effects were mild and infrequent.",
      sourceId: sleepMetaAnalysis.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "Valerian should not be combined with alcohol or sedatives.",
      sourceId: nccih.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Little is known about whether it's safe to use valerian during pregnancy or while breastfeeding.",
      sourceId: nccih.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "In very rare cases, liver injury has been reported with valerian use; its long-term effects on the liver are unknown.",
      sourceId: nccih.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Research suggests valerian is generally safe for short-term use by most healthy adults at doses of 300 to 600 milligrams daily for up to 6 weeks; its safety with longer-term use is unknown.",
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
