import { run } from "./lib/populate-herb";

// Plum Flower (Prunus mume flower, Mume Flos), from a 2025 analysis of 50 edible
// flowers from Yunnan (Tao et al.) and a 2026 mouse study of Mume Flos in fatty
// liver disease (Cui et al.; abstract only). No source on its traditional uses
// was found, so none are stated.

run({
  name: "Plum Flower",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "mume",
    partsUsed: "The flowers, eaten or used as a herbal medicine (Mume Flos)",
  },
  sources: {
    tao: {
      title: "Comprehensive Analysis of 50 Edible Flowers From Yunnan Province: Active Components, Antioxidant Capacity, Tyrosinase Inhibitory Activity and Microbiological Safety",
      author: "Tao Y, Zhang X, Li Z, Tian S, Li L, Zhou X",
      journal: "Food Science & Nutrition",
      publicationDate: "2025-07-21",
      doi: "10.1002/fsn3.70666",
      pmid: "40697708",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12279552/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cui: {
      title: "Mume Flos ameliorates MASLD-associated cognitive impairment by attenuating IL-17/NF-κB-mediated metabolic neuroinflammation",
      author: "Cui S, Wang Y, Zhang Q, et al.",
      journal: "Metabolic Brain Disease",
      publicationDate: "2026-06-05",
      doi: "10.1007/s11011-026-01883-z",
      pmid: "42247178",
      url: "https://pubmed.ncbi.nlm.nih.gov/42247178/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mume Flos", type: "COMMON_NAME" },
    { name: "Plum Blossom", type: "COMMON_NAME" },
    { name: "Japanese Apricot Flower", type: "COMMON_NAME" },
    { name: "Prunus mume", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Plum flowers from Prunus mume are eaten as an edible flower in Yunnan, China. No reliable source describing their traditional medicinal uses was found.",
      source: "tao",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2025 analysis of 50 edible flowers from Yunnan, China, plum flowers had the highest polyphenol content and were among the richest in flavonoids, both antioxidants.",
      source: "tao",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice fed a high-fat diet, Mume Flos reduced fat build-up in the liver, improved liver tests and inflammation, and eased anxiety-like behaviour while improving learning and memory. This hasn't been tested in people.",
      source: "cui",
    },
  ],
  symptoms: [
    { slug: "fatty-liver", notes: "Reduced fat build-up in the liver in mice on a high-fat diet. Not tested in people." },
  ],
});
