import { run } from "./lib/populate-herb";

// Cardamom (Elettaria cardamomum), from two meta-analyses of trials: heart and
// metabolic markers (Zhang et al. 2024) and inflammation and blood pressure
// (Heydarian et al. 2023), plus a 2021 narrative review of cardamom and the
// metabolic syndrome (Yahyazadeh et al.). No safety sources were found. Family
// per GBIF.

run({
  name: "Cardamom",
  profile: {
    family: "Zingiberaceae",
    genus: "Elettaria",
    species: "cardamomum",
    nativeRange: "India, Indonesia and other parts of tropical and subtropical Asia",
    partsUsed: "The seed pods and seeds",
  },
  sources: {
    zhang: {
      title: "Cardamom consumption may improve cardiovascular metabolic biomarkers in adults: A systematic review and meta-analysis of randomized controlled trials",
      author: "Zhang X, Wang C, Min R, Zhou Q, Qi Y, Fan J",
      journal: "Nutrition Research",
      publicationDate: "2024-03-12",
      doi: "10.1016/j.nutres.2024.03.002",
      pmid: "38593657",
      url: "https://pubmed.ncbi.nlm.nih.gov/38593657/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    heydarian: {
      title: "Effect of cardamom consumption on inflammation and blood pressure in adults: A systematic review and meta-analysis of randomized clinical trials",
      author: "Heydarian A, Tahvilian N, Shahinfar H, et al.",
      journal: "Food Science & Nutrition",
      publicationDate: "2023-10-07",
      doi: "10.1002/fsn3.3738",
      pmid: "38268891",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10804083/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    yahyazadeh: {
      title: "The effect of Elettaria cardamomum (cardamom) on the metabolic syndrome: Narrative review",
      author: "Yahyazadeh R, Ghasemzadeh Rahbardar M, Razavi BM, Karimi G, Hosseinzadeh H",
      journal: "Iranian Journal of Basic Medical Sciences",
      publicationDate: "2021-11-01",
      doi: "10.22038/ijbms.2021.54417.12228",
      pmid: "35317114",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8917848/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Green Cardamom", type: "COMMON_NAME" }],
  constituents: [
    { name: "1,8-Cineole (Eucalyptol)", slug: "1-8-cineole", type: "volatile oil" },
    { name: "Alpha-Terpineol", slug: "alpha-terpineol", type: "volatile oil" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Cardamom is rich in phenolic compounds and volatile and fixed oils. In rats, cardamom lowered cholesterol and blood pressure, and two of its oil compounds, 1,8-cineole and alpha-terpineol, also lowered blood pressure. In the lab, cardamom extracts slowed enzymes that break down starch into sugar.",
      source: "yahyazadeh",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review of 12 trials with 989 adults found cardamom lowered total cholesterol, triglycerides and two markers of inflammation. It didn't change HDL (\"good\") or LDL (\"bad\") cholesterol. The authors say larger, better-designed trials are needed.\n\nTechnical detail: total cholesterol WMD −8.56 mg/dL (95% CI −14.90 to −2.22); triglycerides WMD −14.09 mg/dL (95% CI −24.01 to −4.17); hs-CRP WMD −1.01; IL-6 WMD −1.81 pg/mL.",
      source: "zhang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 8 trials found cardamom lowered markers of inflammation and slightly lowered blood pressure. Because there were few studies, the authors say the results should be interpreted with caution.\n\nTechnical detail: diastolic BP WMD −0.90 mmHg (95% CI −1.07 to −0.73); hs-CRP SMD −0.60; IL-6 WMD −1.25.",
      source: "heydarian",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2021 review gathered small trials in which people took 3 g of cardamom a day:\n- In people with mild high blood pressure, 12 weeks lowered blood pressure from about 154/92 to 135/80.\n- In women with prediabetes, 8 weeks didn't significantly change blood pressure, possibly because the study was short and small.\n- In people with type 2 diabetes, 10 weeks lowered HbA1c (a measure of average blood sugar), insulin and triglycerides compared with a placebo.\n- In people with fatty liver disease, 3 months reduced inflammation markers and the degree of fatty liver.\nThe authors say larger randomized trials are still needed.",
      source: "yahyazadeh",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "A 2024 review of 12 trials found it lowered total cholesterol and triglycerides, but not LDL." },
    { slug: "high-blood-pressure", notes: "A 2023 review of 8 trials found a slight drop in blood pressure; few studies." },
    { slug: "high-blood-sugar", notes: "In a small trial in type 2 diabetes, 3 g a day for 10 weeks lowered HbA1c." },
  ],
  preparations: [
    {
      slug: "capsule",
      notes: "In trials, people took about 3 g of green cardamom a day, for example as two 500 mg capsules three times a day.",
      source: "yahyazadeh",
    },
    { slug: "culinary-preparation", notes: "Cardamom is used as a spice to flavor food.", source: "yahyazadeh" },
  ],
});
