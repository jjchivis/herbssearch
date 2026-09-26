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
        "Originally from the eastern Mediterranean, the Middle East and the North Caucasus (according to Kew's Plants of the World Online). It has long been grown, and now grows wild, around the world.",
      partsUsed: "The fresh leaves (cilantro) and the dried seeds (coriander). Botanically, the \"seeds\" are tiny fruits.",
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
        "Traditionally used in India for digestive discomfort, rheumatoid arthritis, inflammation and joint pain.",
    },
    {
      slug: "traditional-chinese-medicine",
      notes: "Traditionally used in Chinese medicine for flu and bad breath.",
    },
    {
      slug: "mediterranean-folk-medicine",
      notes:
        "Native to the eastern Mediterranean. Traditionally used in Turkey to aid digestion and boost appetite.",
    },
    {
      slug: "european-folk-medicine",
      notes:
        "Coriander seed is a minor ingredient (about 13–40% by weight) in traditional German and Spanish herbal tea blends for digestive complaints such as fullness and gas, alongside fennel, caraway, chamomile, peppermint or yarrow. This is documented in a European Medicines Agency report. Coriander has no official European herbal profile of its own.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Traditionally used in Morocco to increase urination, and for diabetes and poor appetite.",
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
        "People in many parts of the world have used coriander in folk medicine:\n- India: digestive discomfort, rheumatoid arthritis and joint pain\n- Pakistan: gas, dysentery, diarrhea and vomiting\n- Iran: trouble sleeping, anxiety, seizures and liver disease\n- Turkey: to aid digestion\n- Morocco: to increase urination, and for diabetes and poor appetite\n- Traditional Chinese Medicine: flu and bad breath",
      sourceId: mahleyuddinReview.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Coriander seed doesn't have its own official European herbal profile. But it appears as a minor ingredient (about 20–40 g per blend) in traditional German and Spanish herbal teas for digestive complaints such as fullness and gas, as documented in a European Medicines Agency report on digestive tea blends.\n\nTechnical detail: Coriandri fructus; EMA/HMPC assessment report on Species digestivae.",
      sourceId: emaDigestivae.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab tests, coriander leaf extract blocked an enzyme (ACE) that raises blood pressure, and coriander blocked enzymes that turn starch into sugar and showed antioxidant activity. In rats and rabbits, coriander lowered blood fats (triglycerides and total cholesterol), relaxed arteries, helped keep heart rhythm normal and protected the heart from drug-induced injury.\n\nTechnical detail: hypolipidemic, anti-atherogenic (inhibited foam-cell formation and oxidized-LDL accumulation), antihypertensive (ACE inhibition, IC50 = 28.91 µg/mL for a leaf extract; arterial relaxation), antiarrhythmic (normalized ECG, reduced cardiac injury biomarkers), cardioprotective against isoproterenol-induced myocardial injury; alpha-amylase and alpha-glucosidase inhibition.",
      sourceId: mahleyuddinReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab tests, coriander essential oil slowed or killed many kinds of bacteria and fungi, including Candida yeast, and showed antioxidant activity. In animals, it protected rat livers from chemical damage, reduced seizures and anxious behavior in rodents, and acted against a parasitic worm. The review found no human trials for any of these effects.\n\nTechnical detail: linalool-rich oil; gram-positive and gram-negative bacteria; DPPH/FRAP assays; anthelmintic against Haemonchus contortus; hepatoprotective in CCl4-induced liver injury; anticonvulsant and anxiolytic in rodent seizure and elevated-plus-maze models.",
      sourceId: alKhayriReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In one trial, 86 university students took either 500 mg of coriander seed or a placebo (a dummy pill). Compared with placebo, the coriander group reported better memory, less anxiety, less depression and better sleep on standard questionnaires.\n\nTechnical detail: randomized, placebo-controlled; memory (PRMQ) p=0.006; anxiety p=0.04; depression (HADS) p=0.002; sleep (PSQI) p=0.03.",
      sourceId: alqudahRct.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Only two small studies have looked at coriander seed and heart health in people. One linked 2 g of seed powder a day to lower blood pressure and cholesterol. The other, in people with type 2 diabetes, found 5 g a day lowered blood fats and had antioxidant effects. The reviewers call this evidence sparse and say more trials are needed.",
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
        "Coriander can cause food or skin allergies. People allergic to mugwort pollen are more likely to react to coriander and its relatives: celery, carrot, parsley, fennel and cumin. Reactions include nausea, stomach pain, vomiting and diarrhea. In rare reported cases, people have had a severe whole-body allergic reaction (anaphylaxis).\n\nTechnical detail: \"celery-birch-mugwort-spice syndrome\"; shared allergens are Bet v 1 homologues and profilins.",
      sourceId: bergheaAllergyReview.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "A food-safety review judged coriander essential oil safe as a food ingredient, based on its long history in cooking with no recorded problems and on lab testing. It irritated skin in rabbit tests but did not cause skin allergies in human testing.\n\nTechnical detail: no-observed-effect level about 160 mg/kg/day (28-day rat study); linalool (about 70% of the oil) is not mutagenic; no evidence of clastogenicity.",
      sourceId: burdockSafetyAssessment.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "In rats, a strong water-based seed extract made it harder for a fertilized egg to implant early in pregnancy, but did not cause complete infertility. Given later in pregnancy, it did not cause miscarriage or affect how the babies developed. These were concentrated doses in animals, not the amounts used in cooking, and there is no human data.\n\nTechnical detail: 250–500 mg/kg orally; dose-dependent anti-implantation effect linked to lower serum progesterone on day 5; no abortifacient activity on days 8–12 or 12–20; no abnormalities in fetal weight, length or organ development.",
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
