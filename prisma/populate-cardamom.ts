import { run } from "./lib/populate-herb";

// Cardamom (Elettaria cardamomum), from two meta-analyses of trials: heart and
// metabolic markers (Zhang et al. 2024) and inflammation and blood pressure
// (Heydarian et al. 2023). No safety sources were found. Family per GBIF.

run({
  name: "Cardamom",
  profile: {
    family: "Zingiberaceae",
    genus: "Elettaria",
    species: "cardamomum",
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
  },
  synonyms: [{ name: "Green Cardamom", type: "COMMON_NAME" }],
  evidence: [
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
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "A 2024 review of 12 trials found it lowered total cholesterol and triglycerides, but not LDL." },
    { slug: "high-blood-pressure", notes: "A 2023 review of 8 trials found a slight drop in blood pressure; few studies." },
  ],
});
