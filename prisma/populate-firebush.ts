import { run } from "./lib/populate-herb";

// Firebush (Hamelia patens), from a 2025 study of its leaf extracts (Thantry
// et al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Firebush",
  profile: {
    family: "Rubiaceae",
    genus: "Hamelia",
    species: "patens",
    nativeRange: "Florida, Mexico, Central and South America and the Caribbean",
    partsUsed: "The leaves",
  },
  sources: {
    thantry: {
      title: "Traditional Aqueous and Ethanol Maceration of Hamelia patens Leaves: A Phytochemical and Pharmacological Exploration",
      author: "Thantry ADK, Chakravarthi KK, Thundakattil AV, Vasodavan K",
      journal: "Annals of African Medicine",
      publicationDate: "2025-07-23",
      doi: "10.4103/aam.aam_152_25",
      pmid: "40699995",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13056305/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Scarlet Bush", type: "COMMON_NAME" },
    { name: "Hummingbird Bush", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Firebush has traditionally been used for skin infections, inflammation and stomach and gut problems.",
      source: "thantry",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A water extract of the leaves, made the traditional way, contains alkaloids, flavonoids, saponins and other plant compounds.",
      source: "thantry",
    },
  ],
});
