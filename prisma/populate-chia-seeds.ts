import { run } from "./lib/populate-herb";

// Chia (Salvia hispanica), from a 2024 meta-analysis of chia in people with
// overweight (Karimi et al.). Kept distinct from Sage (Salvia officinalis).

run({
  name: "Chia Seeds",
  profile: {
    family: "Lamiaceae",
    genus: "Salvia",
    species: "hispanica",
    partsUsed: "The seeds, often soaked into a gel",
  },
  sources: {
    karimi: {
      title: "Effects of chia seed (Salvia hispanica L.) supplementation on cardiometabolic health in overweight subjects: a systematic review and meta-analysis of RCTs",
      author: "Karimi M, Pirzad S, Shirsalimi N, et al.",
      journal: "Nutrition & Metabolism",
      publicationDate: "2024-09-16",
      doi: "10.1186/s12986-024-00847-3",
      pmid: "39285289",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11406937/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Chia", type: "COMMON_NAME" },
    { name: "Salvia hispanica", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chia seeds have traditionally been used as both food and medicine. They're rich in protein, omega-3 fats and fibre; when mixed with water, the fibre forms a gel.",
      source: "karimi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review of 10 trials in people with overweight found chia seeds didn't change cholesterol, triglycerides, blood sugar or insulin. They did reduce waist size, blood pressure and a marker of inflammation (C-reactive protein), but didn't change body weight or BMI. The reviewers said chia should be part of a wider plan including a balanced diet and exercise.\n\nTechnical detail: waist circumference MD −2.82 cm; CRP MD −1.18 mg/L; LDL MD 0.63 mg/dL (p = 0.88); fasting glucose MD −0.03 mg/dL (p = 0.98).",
      source: "karimi",
    },
  ],
});
