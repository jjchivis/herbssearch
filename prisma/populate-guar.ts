import { run } from "./lib/populate-herb";

// Guar (Cyamopsis tetragonoloba), from 21 CFR 184.1339 (guar gum, GRAS) and two
// 2023 GRADE-assessed meta-analyses of guar gum trials (Setayesh et al.; Javad
// Alaeian et al.). Common name per USDA PLANTS; family per GBIF.

run({
  name: "Guar",
  profile: { family: "Fabaceae", genus: "Cyamopsis", species: "tetragonoloba", partsUsed: "The seeds (source of guar gum)" },
  sources: {
    ecfr: {
      title: "21 CFR 184.1339 Guar gum",
      organization: "U.S. Food and Drug Administration (Electronic Code of Federal Regulations)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-184/subpart-B/section-184.1339",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    setayesh: {
      title: "The effects of guar gum supplementation on lipid profile in adults: a GRADE-assessed systematic review, meta-regression and dose-response meta-analysis of randomised placebo-controlled trials",
      author: "Setayesh L, Pourreza S, Zeinali Khosroshahi M, et al.",
      journal: "British Journal of Nutrition",
      publicationDate: "2022-07-15",
      doi: "10.1017/S0007114522002136",
      pmid: "35837742",
      url: "https://doi.org/10.1017/S0007114522002136",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    alaeian: {
      title: "The effects of guar gum supplementation on glycemic control, body mass and blood pressure in adults: A GRADE-assessed systematic review and meta-analysis of randomized clinical trials",
      author: "Javad Alaeian M, Pourreza S, Yousefi M, et al.",
      journal: "Diabetes Research and Clinical Practice",
      publicationDate: "2023-03-22",
      doi: "10.1016/j.diabres.2023.110604",
      pmid: "36958432",
      url: "https://doi.org/10.1016/j.diabres.2023.110604",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Guar Gum", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Guar gum comes from the seeds. The FDA lists it as generally recognized as safe (GRAS) for use in foods as a thickener and stabilizer, within set limits.",
      source: "ecfr",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a review of 19 trials, guar gum supplements lowered total cholesterol by about 19 mg/dL and LDL (\"bad\") cholesterol by about 16 mg/dL. It didn't change triglycerides or HDL.",
      source: "setayesh",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a review of 14 trials, guar gum lowered HbA1c, a long-term blood sugar measure. It didn't change body weight or blood pressure.",
      source: "alaeian",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "As a food additive, guar gum is allowed only up to set amounts in each food type.",
      source: "ecfr",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "Guar gum supplements lowered total and LDL cholesterol in a review of 19 trials." },
    { slug: "high-blood-sugar", notes: "Guar gum lowered HbA1c in a review of 14 trials." },
  ],
});
