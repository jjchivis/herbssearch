import { run } from "./lib/populate-herb";

// Supari, areca nut (Areca catechu), from a 2017 review of betel quid and
// cancer (Chen et al.) and a 2023 systematic review of arecoline and oral
// cancer (Ko et al.). Family per GBIF.

run({
  name: "Supari",
  profile: {
    family: "Arecaceae",
    genus: "Areca",
    species: "catechu",
    nativeRange: "South and Southeast Asia and the Pacific",
    partsUsed: "The seed (areca nut)",
  },
  sources: {
    chen: {
      title: "Adverse Health Effects of Betel Quid and the Risk of Oral and Pharyngeal Cancers",
      author: "Chen PH, Mahmood Q, Mariottini GL, Chiang TA, Lee KW",
      journal: "BioMed Research International",
      publicationDate: "2017-12-11",
      doi: "10.1155/2017/3904098",
      pmid: "29376073",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5742426/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    arecoline: {
      title: "Systematic Review of Roles of Arecoline and Arecoline N-Oxide in Oral Cancer and Strategies to Block Carcinogenesis",
      author: "Ko AM, Tu HP, Ko YC",
      journal: "Cells",
      publicationDate: "2023-04-21",
      doi: "10.3390/cells12081208",
      pmid: "37190117",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10137008/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Areca Nut", type: "COMMON_NAME" },
    { name: "Betel Nut", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Arecoline", slug: "arecoline", type: "alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Areca nut is chewed by about 600 million people worldwide, usually in betel quid with betel leaf and slaked lime, often with tobacco.",
      source: "chen",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Chewing areca nut or betel quid causes cancers of the mouth and throat and precancerous mouth conditions, with or without tobacco. Arecoline, the nut's main alkaloid, and its breakdown products drive this damage.",
      source: "chen",
    },
  ],
});
