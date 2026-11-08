import { run } from "./lib/populate-herb";

// Pittosporum tobira, an evergreen shrub. Sources: a 2014 lab study against gum-disease bacteria, a 2010 mosquito-larvae study and a 2024 essential oil analysis. Family per GBIF. No source describing traditional medicinal use or human safety was found, so none is stated.

run({
  name: "Pittosporum Tobira",
  profile: {
    family: "Pittosporaceae",
    genus: "Pittosporum",
    species: "tobira",
    partsUsed: "The leaves, stems, flowers and roots have been studied in the lab",
  },
  sources: {
    oh: {
      title: "Antimicrobial activities against periodontopathic bacteria of Pittosporum tobira and its active compound",
      author: "Oh JH, Jeong YJ, Koo HJ, et al.",
      journal: "Molecules",
      publicationDate: "2014-03-24",
      pmid: "24662076",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/molecules19033607",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6270877/",
    },
    chung: {
      title: "Larvicidal effects of the major essential oil of Pittosporum tobira against Aedes aegypti (L.)",
      author: "Chung IM, Seo SH, Kang EY, et al.",
      journal: "Journal of Enzyme Inhibition and Medicinal Chemistry",
      publicationDate: "2010-06-01",
      pmid: "19874194",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3109/14756360903185952",
      url: "https://doi.org/10.3109/14756360903185952",
    },
    kahlaoui: {
      title: "Characterization of Volatile Organic Compounds and Essential Oil Profile of Pittosporum tobira (Thunb.) W.T. Aiton Cultivated in Tunisia",
      author: "Kahlaoui S, Hcini K, Haddada A, et al.",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2024-09-01",
      pmid: "38935806",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1002/cbdv.202401360",
      url: "https://doi.org/10.1002/cbdv.202401360",
    },
  },
  evidence: [
    { category: "PRECLINICAL", summary: "In a Korean screening of 558 plant extracts, Pittosporum tobira was the most active against bacteria that cause gum disease. Its main active compound is R1-barrigenol.", source: "oh" },
    { category: "PRECLINICAL", summary: "Oil from the leaves killed the larvae of the mosquito that spreads dengue and yellow fever.", source: "chung" },
    { category: "PRECLINICAL", summary: "Essential oils from its roots, stems, leaves and flowers contain compounds such as beta-caryophyllene and limonene.", source: "kahlaoui" },
  ],
});
