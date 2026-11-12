import { run } from "./lib/populate-herb";

// Hadjod (Cissus quadrangularis, veldt grape), from a 2017 systematic review and
// meta-analysis of its clinical use (Sawangjit et al.), a 2025 meta-analysis of
// bone markers (Na Takuathung et al.) and a 2021 review (Bafna et al.). Common
// name "veldt-grape" per USDA PLANTS; family per GBIF.

run({
  name: "Hadjod",
  profile: { family: "Vitaceae", genus: "Cissus", species: "quadrangularis", partsUsed: "The stems" },
  sources: {
    sawangjit: {
      title: "Efficacy and Safety of Cissus quadrangularis L. in Clinical Use: A Systematic Review and Meta-analysis of Randomized Controlled Trials",
      author: "Sawangjit R, Puttarak P, Saokaew S, Chaiyakunapruk N",
      journal: "Phytotherapy Research",
      publicationDate: "2017-02-06",
      doi: "10.1002/ptr.5783",
      pmid: "28165166",
      url: "https://doi.org/10.1002/ptr.5783",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    naTakuathung: {
      title: "The effects of Cissus quadrangularis on bone-related biomarkers in humans: a systematic review and meta-analysis",
      author: "Na Takuathung M, Aisara J, Sawong S, Koonrungsesomboon N",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2025-07-24",
      doi: "10.1186/s12906-025-04995-8",
      pmid: "40707943",
      url: "https://doi.org/10.1186/s12906-025-04995-8",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    bafna: {
      title: "Cissus quadrangularis L: A comprehensive multidisciplinary review",
      author: "Bafna PS, Patil PH, Maru SK, Mutha RE",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-06-25",
      doi: "10.1016/j.jep.2021.114355",
      pmid: "34181958",
      url: "https://doi.org/10.1016/j.jep.2021.114355",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cissus", type: "COMMON_NAME" },
    { name: "Veldt Grape", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A vine in the grape family used across the tropics for malaria, fever, epilepsy, gout, piles, skin diseases and colic. Its name Hadjod reflects its use for bone problems.",
      source: "bafna",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a review of 9 trials with 1,108 people, it eased bone pain and helped bone fractures (low-quality evidence). It didn't help hemorrhoids. Combination products with it lowered weight, cholesterol and blood sugar more than placebo.",
      source: "sawangjit",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a review of 7 trials, it raised parathyroid hormone but didn't change calcium, phosphorus or other bone markers. The evidence was very low certainty.",
      source: "naTakuathung",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No serious side effects were reported in the clinical trials.",
      source: "sawangjit",
    },
  ],
});
