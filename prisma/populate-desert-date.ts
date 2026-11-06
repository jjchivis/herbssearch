import { run } from "./lib/populate-herb";

// Desert Date (Balanites aegyptiaca), from a 2011 review (Chothani and
// Vaghasiya), a 2017 pilot trial in type 2 diabetes (Rashad et al.) and a 2025
// systematic review of animal diabetes studies (Odeniran et al.). Family per GBIF.

run({
  name: "Desert Date",
  profile: { family: "Zygophyllaceae", genus: "Balanites", species: "aegyptiaca", nativeRange: "Dry lands of Africa, the Middle East and South Asia", partsUsed: "The fruit, seeds, bark and leaves" },
  sources: {
    chothani: {
      title: "A review on Balanites aegyptiaca Del (desert date): phytochemical constituents, traditional uses, and pharmacological activity",
      author: "Chothani DL, Vaghasiya HU",
      journal: "Pharmacognosy Reviews",
      publicationDate: "2011-01-01",
      doi: "10.4103/0973-7847.79100",
      pmid: "22096319",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3210005/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rashad: {
      title: "Randomized double-blinded pilot clinical study of the antidiabetic activity of Balanites aegyptiaca and UPLC-ESI-MS/MS identification of its metabolites",
      author: "Rashad H, Metwally FM, Ezzat SM, et al.",
      journal: "Pharmaceutical Biology",
      publicationDate: "2017-12-01",
      doi: "10.1080/13880209.2017.1354388",
      pmid: "28724331",
      url: "https://doi.org/10.1080/13880209.2017.1354388",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    odeniran: {
      title: "Therapeutic effects of Balanites aegyptiaca DEL extract on diabetes mellitus: a systematic review",
      author: "Odeniran OA, Oyefabi AM, Oyeyemi IT, et al.",
      journal: "Frontiers in Clinical Diabetes and Healthcare",
      publicationDate: "2025-09-02",
      doi: "10.3389/fcdhc.2025.1651789",
      pmid: "40964503",
      url: "https://doi.org/10.3389/fcdhc.2025.1651789",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A spiny desert tree whose date-like fruit is traditionally used for high blood sugar. It's also used for jaundice, worms, wounds, malaria, syphilis, epilepsy, diarrhea, constipation, hemorrhoids, stomach aches, asthma and fever.",
      source: "chothani",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a small 8-week trial of 30 older Egyptians with type 2 diabetes, capsules of the fruit rind cut after-meal blood sugar by about 27% and improved cholesterol, with no low blood sugar episodes.",
      source: "rashad",
    },
    {
      category: "PRECLINICAL",
      summary: "A 2025 review of 32 animal studies found it lowered blood sugar in every diabetic animal study, whatever plant part was used.",
      source: "odeniran",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Only one small human trial has been done. It shouldn't replace diabetes medicine.",
      source: "rashad",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Lowered after-meal blood sugar in a small pilot trial in type 2 diabetes." },
  ],
});
