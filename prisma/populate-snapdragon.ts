import { run } from "./lib/populate-herb";

// Snapdragon (Antirrhinum majus), from a 2022 lab study of its antimicrobial
// activity, which also summarises its traditional uses (Saqallah et al.).

run({
  name: "Snapdragon",
  profile: {
    family: "Plantaginaceae",
    genus: "Antirrhinum",
    species: "majus",
    nativeRange: "The Mediterranean region",
    partsUsed: "The leaves, flowers and whole plant; the seeds give a cooking oil",
  },
  sources: {
    saqallah: {
      title: "Antimicrobial activity and molecular docking screening of bioactive components of Antirrhinum majus (snapdragon) aerial parts",
      author: "Saqallah FG, Hamed WM, Talib WH, Dianita R, Wahab HA",
      journal: "Heliyon",
      publicationDate: "2022-08-27",
      doi: "10.1016/j.heliyon.2022.e10391",
      pmid: "36072262",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9441312/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Snap Dragon", type: "COMMON_NAME" },
    { name: "Common Snapdragon", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Few sources describe snapdragon as a medicine. In Iraqi tradition, the whole plant is boiled and used as a wash and an astringent, to increase urination, and for liver problems. A boiled preparation of the whole plant, including the root, has been used for watery eyes. The seeds give an oil used in cooking.",
      source: "saqallah",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, extracts of fresh snapdragon flowers slowed or killed several bacteria, including Staphylococcus aureus and E. coli, and the yeast Candida. Drying the plant before extraction made the extracts much weaker. It hasn't been tested in animals or people.",
      source: "saqallah",
    },
  ],
});
