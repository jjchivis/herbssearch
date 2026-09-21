import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Cilantro (Coriandrum sativum), populated from real, verified sources.
// Nothing here is invented — every claim traces to one of the Source
// records below, each fetched and checked against the live page/PDF/abstract
// before being written here. Note: "cilantro" (the fresh leaf) and
// "coriander" (the dried seed/fruit) are the same plant, Coriandrum sativum;
// both names are captured.
//
// No NCCIH page dedicated to coriander/cilantro exists (checked directly).
// No standalone EMA/HMPC monograph for Coriandrum sativum exists either —
// the EMA assessment report used below documents coriander only as a minor
// ingredient in traditional multi-herb digestive tea combinations.

async function main() {
  const cilantro = await prisma.herb.findUniqueOrThrow({ where: { name: "Cilantro" } });

  // --- botanical profile (Kew POWO + NCBI Taxonomy, cross-checked) ---
  await prisma.herb.update({
    where: { id: cilantro.id },
    data: {
      family: "Apiaceae",
      genus: "Coriandrum",
      species: "sativum",
      nativeRange:
        "Eastern Mediterranean, Middle East, and North Caucasus (native range per Kew Plants of the World Online); long cultivated and naturalized worldwide.",
      partsUsed: "Leaf (cilantro, fresh) and fruit/seed (coriander, dried)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO taxon urn:lsid:ipni.org:names:840760-1, verified directly) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "REGIONAL_NAME" }[] = [
    { name: "Coriandrum diversifolium Gilib.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Bifora loureiroi Kostel.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Coriander", type: "COMMON_NAME" },
    { name: "Chinese Parsley", type: "COMMON_NAME" },
    { name: "Dhania", type: "REGIONAL_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: cilantro.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: cilantro.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const emaDigestivae = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-report/assessment-report-species-digestivae_en.pdf",
    {
      title: "Assessment report on Species digestivae (herbal tea combinations for digestive complaints)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2022-03-30"),
      url: "https://www.ema.europa.eu/en/documents/herbal-report/assessment-report-species-digestivae_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  const mahleyuddinReview = await findOrCreateSource("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8747064/", {
    title: "Coriandrum sativum L.: A Review on Ethnopharmacology, Phytochemistry, and Cardiovascular Benefits",
    author:
      "Mahleyuddin NN, Moshawih S, Ming LC, Zulkifly HH, Kifli N, Loy MJ, Sarker MMR, Al-Worafi YM, Goh BH, Thuraisingam S, Goh HP",
    organization: "Molecules",
    journal: "Molecules",
    publicationDate: new Date("2021-12-30"),
    doi: "10.3390/molecules27010209",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8747064/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  const alKhayriReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC9864992/", {
    title: "Essential Oil from Coriandrum sativum: A Review on Its Phytochemistry and Biological Activity",
    author: "Al-Khayri JM, Banadka A, Nandhini M, Nagella P, Al-Mssallem MQ, Alessa FM",
    organization: "Molecules",
    journal: "Molecules",
    publicationDate: new Date("2023-01-08"),
    doi: "10.3390/molecules28020696",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9864992/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  const alqudahRct = await findOrCreateSource(
    "https://www.emerald.com/insight/content/doi/10.1108/nfs-08-2023-0193/full/html",
    {
      title:
        "Effects of Coriandrum sativum seeds on memory, anxiety, depression, and sleep quality in students: a randomized controlled study",
      author: "Alqudah A, Qnais E, Sabi SH, Bseiso Y, Gammoh O, Wedyan M",
      organization: "Nutrition & Food Science",
      journal: "Nutrition & Food Science",
      publicationDate: new Date("2024-02-21"),
      doi: "10.1108/NFS-08-2023-0193",
      url: "https://www.emerald.com/insight/content/doi/10.1108/nfs-08-2023-0193/full/html",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const bergheaAllergyReview = await findOrCreateSource("https://pmc.ncbi.nlm.nih.gov/articles/PMC12644062", {
    title: "Spices, herbs and allergic reactions in children: myth or reality — a narrative review with scoping elements",
    author: "Berghea EC, Feketea G, Cosoreanu MT, et al.",
    organization: "Frontiers in Allergy",
    journal: "Frontiers in Allergy",
    publicationDate: new Date("2025-01-01"),
    doi: "10.3389/falgy.2025.1698559",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12644062",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  const burdockSafetyAssessment = await findOrCreateSource("https://pubmed.ncbi.nlm.nih.gov/19032971/", {
    title: "Safety assessment of coriander (Coriandrum sativum L.) essential oil as a food ingredient",
    author: "Burdock GA, Carabin IG",
    organization: "Food and Chemical Toxicology",
    journal: "Food and Chemical Toxicology",
    publicationDate: new Date("2009-01-01"),
    doi: "10.1016/j.fct.2008.11.006",
    pmid: "19032971",
    url: "https://pubmed.ncbi.nlm.nih.gov/19032971/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  const alSaidAntifertilityStudy = await findOrCreateSource("https://pubmed.ncbi.nlm.nih.gov/3437767/", {
    title: "Post-coital antifertility activity of the seeds of Coriandrum sativum in rats",
    author: "Al-Said MS, Al-Khamis KI, Islam MW, Parmar NS, Tariq M, Ageel AM",
    organization: "Journal of Ethnopharmacology",
    journal: "Journal of Ethnopharmacology",
    publicationDate: new Date("1987-11-01"),
    doi: "10.1016/0378-8741(87)90126-7",
    pmid: "3437767",
    url: "https://pubmed.ncbi.nlm.nih.gov/3437767/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // --- constituents (linalool already exists in the taxonomy seed; add three documented in both reviews) ---
  const linalool = await prisma.constituent.findUniqueOrThrow({ where: { slug: "linalool" } });
  const geraniol = await prisma.constituent.upsert({
    where: { slug: "geraniol" },
    update: {},
    create: { name: "Geraniol", slug: "geraniol", type: "volatile oil" },
  });
  const petroselinicAcid = await prisma.constituent.upsert({
    where: { slug: "petroselinic-acid" },
    update: {},
    create: { name: "Petroselinic Acid", slug: "petroselinic-acid", type: "fatty acid" },
  });
  const quercetin = await prisma.constituent.upsert({
    where: { slug: "quercetin" },
    update: {},
    create: { name: "Quercetin", slug: "quercetin", type: "flavonoid" },
  });

  for (const constituentId of [linalool.id, geraniol.id, petroselinicAcid.id, quercetin.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: cilantro.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: cilantro.id, constituentId },
      });
    }
  }

  // --- traditions (each note traced to a specific regional use documented in the Mahleyuddin review or the EMA report) ---
  const traditionLinks: { slug: string; notes: string }[] = [
    {
      slug: "ayurveda",
      notes:
        "Documented traditional use in India for gastrointestinal discomfort, rheumatoid arthritis, inflammation, and joint pain.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes: "Traditionally used in Chinese medicine for influenza and to treat bad breath.",
    },
    {
      slug: "mediterranean-folk-medicine",
      notes:
        "Native to the eastern Mediterranean; used traditionally in Turkey as a digestive aid and appetizer.",
    },
    {
      slug: "european-folk-medicine",
      notes:
        "A minor ingredient (roughly 13-40% by weight, alongside fennel, caraway, chamomile, peppermint, or yarrow) in traditional German and Spanish herbal tea combinations for gastrointestinal complaints such as fullness and flatulence, per an EMA/HMPC assessment report; coriander itself has no standalone EU herbal monograph.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Traditional use documented in Morocco as a diuretic and for diabetes and loss of appetite.",
    },
  ];
  for (const link of traditionLinks) {
    const tradition = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: link.slug } });
    const existingTradition = await prisma.herbTradition.findFirst({
      where: { herbId: cilantro.id, traditionId: tradition.id },
    });
    if (!existingTradition) {
      await prisma.herbTradition.create({
        data: { herbId: cilantro.id, traditionId: tradition.id, notes: link.notes },
      });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Coriander/cilantro has a long history of regionally varied traditional use: in India for gastrointestinal discomfort, rheumatoid arthritis, and joint pain; in Pakistan for flatulence, dysentery, diarrhea, and vomiting; in Iran for insomnia, anxiety, convulsion, and liver disease; in Turkey as a digestive aid; in Morocco as a diuretic and for diabetes and appetite loss; and in Traditional Chinese Medicine for influenza and bad breath.",
      sourceId: mahleyuddinReview.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Coriandri fructus (coriander fruit/seed) is not covered by its own EU herbal monograph, but appears as a minor ingredient (about 20-40 g per formulation) in traditional German and Spanish herbal tea combinations used for gastrointestinal complaints such as fullness and flatulence, as documented in an EMA/HMPC assessment report on digestive herbal tea combinations (Species digestivae).",
      sourceId: emaDigestivae.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In animal and cell studies, coriander preparations show hypolipidemic activity (reduced triacylglycerol and total cholesterol in rats/rabbits), anti-atherogenic effects (inhibited foam-cell formation and oxidized-LDL accumulation), antihypertensive activity (ACE inhibition, IC50 = 28.91 micrograms/mL for a leaf extract; arterial relaxation), antiarrhythmic effects (normalized ECG, reduced cardiac injury biomarkers), and cardioprotective effects against isoproterenol-induced myocardial injury, alongside antidiabetic (alpha-amylase/alpha-glucosidase inhibition) and antioxidant activity.",
      sourceId: mahleyuddinReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Coriander essential oil (linalool-rich) shows broad-spectrum antimicrobial activity against gram-positive and gram-negative bacteria and fungi including Candida species, antioxidant activity in DPPH/FRAP assays, anthelmintic activity against Haemonchus contortus, hepatoprotective effects in CCl4-induced liver injury in rats, and anticonvulsant/anxiolytic effects in rodent seizure and elevated-plus-maze models. All of these findings are preclinical (in vitro or animal); the review reports no human clinical trials for these specific effects.",
      sourceId: alKhayriReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a randomized, placebo-controlled trial of 86 university students given 500 mg of Coriandrum sativum seeds versus placebo, the coriander group showed statistically significant improvement in memory (Prospective and Retrospective Memory Questionnaire, p=0.006), reduced anxiety (p=0.04), reduced depression (Hospital Anxiety and Depression Scale, p=0.002), and improved sleep quality (Pittsburgh Sleep Quality Index, p=0.03) compared to placebo.",
      sourceId: alqudahRct.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review identified only two small human studies of oral coriander seed: one reporting reduced blood pressure and cholesterol with 2 g/day of seed powder, and another reporting hypolipidemic and antioxidant effects with 5 g/day of powdered seed in people with type 2 diabetes. The review's authors describe cardiovascular human-trial evidence as sparse and state that further clinical trials are warranted.",
      sourceId: mahleyuddinReview.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: cilantro.id, category: entry.category, sourceId: entry.sourceId, summary: entry.summary },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: cilantro.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "ALLERGY" as const,
      description:
        "Coriander can cause food or skin allergy in sensitized individuals and shows cross-reactivity within the 'celery-birch-mugwort-spice syndrome': people with respiratory sensitization to mugwort (Artemisia) pollen may develop food allergy to coriander and related Apiaceae spices/vegetables (celery, carrot, parsley, fennel, cumin) via shared allergen epitopes (Bet v 1 homologues and profilins). Documented reactions include gastrointestinal symptoms (nausea, abdominal pain, vomiting, diarrhea) and, in some reported cases, anaphylaxis.",
      sourceId: bergheaAllergyReview.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "A food-safety review concluded coriander essential oil is safe as a food ingredient based on its long history of culinary use without recorded adverse effects and on toxicology data: an oral no-observed-effect level (NOEL) of approximately 160 mg/kg/day in a 28-day rat study, non-mutagenicity of linalool (the oil's major constituent, about 70%), and no evidence of clastogenicity. The oil caused irritation in rabbit skin models but showed no sensitizing properties in human testing.",
      sourceId: burdockSafetyAssessment.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "In rats, aqueous coriander seed extract given at 250-500 mg/kg orally produced a dose-dependent anti-implantation effect early in pregnancy (linked to reduced serum progesterone on day 5) but did not cause complete infertility. When the same extract was given later in pregnancy (days 8-12 and 12-20), it did not produce abortifacient activity, and no abnormalities in fetal weight, length, or organ development were observed. These are animal-study findings at concentrated, pharmacological doses, not human safety data on culinary-level coriander use.",
      sourceId: alSaidAntifertilityStudy.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: cilantro.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: cilantro.id, ...record },
      });
    }
  }

  console.log("Cilantro populated from 7 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
