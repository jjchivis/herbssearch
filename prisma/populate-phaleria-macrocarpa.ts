import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Phaleria Macrocarpa",
  profile: {
    family: "Thymelaeaceae",
    genus: "Phaleria",
    species: "macrocarpa",
    partsUsed: "The fruit",
  },
  sources: {
    ahmad: {
      title: "Phaleria macrocarpa (Scheff.) Boerl.: An updated review of pharmacological effects, toxicity studies, and separation techniques",
      author: "Ahmad R, Khairul Nizam Mazlan M, Firdaus Abdul Aziz A, et al.",
      journal: "Saudi Pharmaceutical Journal",
      publicationDate: "2023-06-01",
      pmid: "37234341",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jsps.2023.04.006",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10205762/",
    },
    altaf: {
      title: "Phytochemistry and medicinal properties of Phaleria macrocarpa (Scheff.) Boerl. extracts",
      author: "Altaf R, Asmawi MZ, Dewa A, et al.",
      journal: "Pharmacognosy Reviews",
      publicationDate: "2013-01-01",
      pmid: "23922460",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.4103/0973-7847.112853",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3731883/",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Mahkota Dewa", type: "COMMON_NAME" }],
  evidence: [
    { category: "TRADITIONAL", summary: "Known as mahkota dewa, it grows around Papua, Indonesia, and in Malaysia. Traditionally it is used to reduce pain, stomachache, diarrhea, tumors, blood sugar, cholesterol and blood pressure.", source: "ahmad" },
    { category: "PRECLINICAL", summary: "Most research has focused on slowing colon and breast cancer cells, with low toxicity in the studies done. The fruit is the most studied part.", source: "ahmad" },
    { category: "PRECLINICAL", summary: "An extract slowed the growth and spread of breast cancer cells in the lab and triggered their death.", source: "bajpai" },
  ],
});
