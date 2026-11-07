import { run } from "./lib/populate-herb";

// Red yeast rice: rice fermented with the mold Monascus purpureus. Sources:
// NCCIH fact sheet (what it is, monacolin K = lovastatin, FDA status, EFSA
// opinion, side effects, citrinin, pregnancy), a 2024 meta-analysis of
// double-blind trials, and a 2026 test of products sold in Bulgaria.
// Family per GBIF.

run({
  name: "Red Yeast Rice",
  profile: {
    family: "Monascaceae",
    genus: "Monascus",
    species: "purpureus",
    partsUsed: "Rice fermented with the mold, usually sold as a powder or capsule",
  },
  sources: {
    nccih: {
      title: "Red Yeast Rice: What You Need To Know",
      organization: "National Center for Complementary and Integrative Health (NCCIH), NIH",
      publicationDate: "2022-11-01",
      url: "https://www.nccih.nih.gov/health/red-yeast-rice",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    trogkanis: {
      title:
        "Safety and Efficacy of the Consumption of the Nutraceutical \"Red Yeast Rice Extract\" for the Reduction of Hypercholesterolemia in Humans: A Systematic Review and Meta-Analysis",
      author: "Trogkanis E, Karalexi MA, Sergentanis TN, Kornarou E, Vassilakou T",
      journal: "Nutrients",
      publicationDate: "2024-05-11",
      doi: "10.3390/nu16101453",
      pmid: "38794691",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11124448/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    todorova: {
      title: "Quality and Authenticity Evaluation of Red Yeast Rice Food Supplements from the Bulgarian Market",
      author: "Todorova V, Dzhakova Z, Ivanov K, Grekova-Kafalova D, Slavcheva K, Ivanova S",
      journal: "Foods",
      publicationDate: "2026-10-09",
      doi: "10.3390/foods15203583",
      pmid: "42940221",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13702926/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Red Mold Rice", type: "COMMON_NAME" }],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Red yeast rice is used as a food and in traditional Chinese medicine.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Red yeast rice is made by growing a mold on rice. It is used as a food, in traditional Chinese medicine and in dietary supplements. Despite the name, the mold is not a yeast.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Red yeast rice can contain monacolin K, which is the same chemical as the prescription cholesterol medicine lovastatin. Products with large amounts of it may lower cholesterol, blood sugar and blood pressure. But how much a product contains varies hugely, and labels usually don't say. For products with very little, it's unknown whether they work.\n\nTechnical detail: a 2017 analysis of 28 US brands found monacolin K ranged more than 60-fold, from 0.09 to 5.48 mg per 1,200 mg of red yeast rice; 2 brands had none detectable.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review of 14 double-blind trials, lasting 4 to 24 weeks, found that red yeast rice lowered total cholesterol and LDL (\"bad\") cholesterol compared with placebo. It did not change HDL (\"good\") cholesterol or triglycerides.\n\nTechnical detail: total cholesterol mean difference −37.43 mg/dL; LDL-C −35.82 mg/dL; no significant change in HDL-C or triglycerides.",
      source: "trogkanis",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 test of 14 red yeast rice supplements sold in Bulgaria found the daily amount of monacolin K ranged from almost none to more than 14 mg. Three products provided 3 mg a day or more.\n\nTechnical detail: 0.06 to 14.11 mg/day monacolin K at the labeled dose.",
      source: "todorova",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Products with a lot of monacolin K can cause the same side effects as statin cholesterol medicines, including muscle, kidney and liver damage. They may also cause diarrhea, nausea and stomach pain.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Red yeast rice can interact with other medicines in the same ways statins do, which may raise the chance of side effects. Ask your doctor or pharmacist before using it, especially if you already take a cholesterol medicine.",
      source: "nccih",
    },
    {
      category: "CONTAMINATION",
      description:
        "Some products contain citrinin, a toxin that can damage the kidneys. In a 2021 test of 37 products, only 1 had citrinin below the European Union's limit, and 4 products labeled \"citrinin-free\" were contaminated.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description:
        "In 2018 the European Food Safety Authority concluded that monacolin K from red yeast rice could cause severe side effects, and it could not identify a safe daily amount.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "There are no studies on its safety in pregnancy or breastfeeding, and it is not recommended for people who are pregnant or breastfeeding.",
      source: "nccih",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "In the United States, the FDA treats red yeast rice products with added or boosted lovastatin as unapproved drugs, not dietary supplements. You can't tell from the label how much monacolin K a product contains.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "high-cholesterol",
      notes: "Trials show it lowers total and LDL cholesterol, because some products contain the same chemical as the statin lovastatin.",
    },
    {
      slug: "liver-safety-warnings",
      notes: "Products high in monacolin K can cause statin-like liver, kidney and muscle damage.",
    },
  ],
});
