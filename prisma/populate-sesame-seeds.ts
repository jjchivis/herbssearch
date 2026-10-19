import { run } from "./lib/populate-herb";

// Sesame (Sesamum indicum), from a 2025 meta-analysis of sesame products and heart
// risk factors (Jafari et al.) and the FDA consumer update on sesame allergen
// labeling (2023).

run({
  name: "Sesame Seeds",
  profile: {
    family: "Pedaliaceae",
    genus: "Sesamum",
    species: "indicum",
    partsUsed: "The seeds, and the oil pressed from them",
  },
  sources: {
    jafari: {
      title: "Clinical evidence of sesame (Sesamum indicum L.) products and its bioactive compounds on anthropometric measures, blood pressure, glycemic control, inflammatory biomarkers, lipid profile, and oxidative stress parameters in humans: a GRADE-assessed systematic review and dose-response meta-analysis",
      author: "Jafari A, Parsi Nezhad B, Rasaei N, Aleebrahim-Dehkordi E, Rajabi A, Alaghi A",
      journal: "Nutrition & Metabolism",
      publicationDate: "2025-03-11",
      doi: "10.1186/s12986-025-00910-7",
      pmid: "40069782",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11899564/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    fda: {
      title: "Allergic to Sesame? Food Labels Now Must List Sesame as an Allergen",
      organization: "U.S. Food and Drug Administration",
      publicationDate: "2023-01-10",
      url: "https://www.fda.gov/consumers/consumer-updates/allergic-sesame-food-labels-now-must-list-sesame-allergen",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Sesame", type: "COMMON_NAME" },
    { name: "Sesamum indicum", type: "COMMON_NAME" },
    { name: "Sesame Oil", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Sesamin", slug: "sesamin", type: "lignan" }],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 13 trials with 521 people looked at sesame seeds, oil, powder and bars taken for 4 to 12 weeks. Sesame lowered long-term blood sugar (HbA1c) and two markers of inflammation, and there was a borderline drop in fasting blood sugar. Cholesterol improved in some groups, such as people with long-term health conditions and at doses of 10 g a day or less. Sesame contains plant compounds called lignans, such as sesamin.\n\nTechnical detail: HbA1c SMD −0.67 (95% CI −1.01 to −0.32); CRP SMD −0.51 (−0.96 to −0.05); IL-6 SMD −0.74 (−1.16 to −0.32); fasting blood sugar SMD −0.57 (−1.16 to 0.02).",
      source: "jafari",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Sesame is one of the nine major food allergens in the US. Since January 1, 2023, packaged foods and dietary supplements must list sesame as an allergen, including when it's hidden in ingredients like \"natural flavor\" or \"spices\". Older stock may not be labeled, and recipes can change, so people with a sesame allergy should check the label every time. Unpackaged foods, like bagels in a bin, may not be labeled.",
      source: "fda",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "A review of 13 trials found sesame products lowered long-term blood sugar (HbA1c)." },
  ],
});
