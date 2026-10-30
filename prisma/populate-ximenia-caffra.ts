import { run } from "./lib/populate-herb";

// Ximenia caffra (sour plum), from a 2025 survey of wild foods in Limpopo
// (Mothupi & Shackleton) and a 2026 rat study of its seed extract (Yosri et al.).
// No human studies were found. Family per GBIF.

run({
  name: "Ximenia Caffra",
  profile: {
    family: "Olacaceae",
    genus: "Ximenia",
    species: "caffra",
    nativeRange: "Southern and eastern Africa",
    partsUsed: "The fruit and seeds",
  },
  sources: {
    mothupi: {
      title: "Traditional knowledge and consumption of wild edible plants in rural households, Limpopo Province, South Africa",
      author: "Mothupi FM, Shackleton CM",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2025-04-04",
      doi: "10.1186/s13002-025-00773-5",
      pmid: "40186211",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11971914/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yosri: {
      title: "In vitro anti-inflammatory potential and in vivo anti-arthritis activities of Ximenia caffra extract on antigen-induced arthritis in rats",
      author: "Yosri M, Mekky AE, Elaasser MM, et al.",
      journal: "Scientific Reports",
      publicationDate: "2026-01-06",
      doi: "10.1038/s41598-025-32300-7",
      pmid: "41495193",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12779950/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Sour Plum", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In rural Limpopo, South Africa, sour plum is one of the best-known wild fruits: 83% of households surveyed named it, though few still eat it.",
      source: "mothupi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with arthritis, a seed extract reduced joint swelling and inflammation and helped restore the joints toward normal, compared with the arthritis drug methotrexate.",
      source: "yosri",
    },
  ],
});
