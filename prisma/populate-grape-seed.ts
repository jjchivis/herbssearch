import { run } from "./lib/populate-herb";

// Grape seed (Vitis vinifera), from NCCIH's grape seed extract fact sheet (2025),
// which summarizes a 2020 review on blood fats and a 2022 review on blood
// pressure. Grapevine leaf has its own page (Grape Leaf). Family per GBIF.

run({
  name: "Grape Seed",
  profile: {
    family: "Vitaceae",
    genus: "Vitis",
    species: "vinifera",
    partsUsed: "The seeds of wine grapes",
  },
  sources: {
    nccih: {
      title: "Grape Seed Extract: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/grape-seed-extract",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Grape Seed Extract", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Grape seed extract contains proanthocyanidins, plant compounds with effects that might help manage some health conditions. In lab and animal studies, extract put on the skin may help wounds heal, and in mouth rinses it might help prevent tooth decay, but there's too little research in people to know.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 review of 11 studies with 536 people found grape seed extract may lower LDL (\"bad\") cholesterol and triglycerides, but not total or HDL (\"good\") cholesterol. The studies were small and used different products, so this isn't certain.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 19 studies with 1,080 people found grape seed extract lowered diastolic blood pressure (the bottom number) but not systolic (the top number). Results varied between studies, perhaps because of different doses, lengths of use and people studied.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Grape seed extract is generally well tolerated, taken by mouth or used on the skin.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "If you take any medicine, talk with your health care provider first. Some herbs and medicines interact in harmful ways.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Little is known about whether grape seed extract is safe during pregnancy or breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "A 2020 review found it may lower LDL cholesterol and triglycerides; the studies were small." },
    { slug: "high-blood-pressure", notes: "A 2022 review of 19 studies found it lowered the bottom number of blood pressure, but not the top number." },
  ],
  preparations: [
    {
      slug: "extract",
      notes: "Grape seed extract, made from the seeds of wine grapes, is sold as a dietary supplement and added to products for the skin.",
      source: "nccih",
    },
  ],
});
