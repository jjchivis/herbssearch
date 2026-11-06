import { run } from "./lib/populate-herb";

// Iris Illyrica (Iris illyrica, Iris pallida subsp. illyrica in some
// checklists), from a 2024 study of rhizome volatiles in three endemic Croatian
// irises (Friščić et al.). Family and synonym per GBIF / Catalogue of Life.

run({
  name: "Iris Illyrica",
  profile: { family: "Iridaceae", genus: "Iris", species: "illyrica", nativeRange: "Croatia", partsUsed: "The rhizomes" },
  sources: {
    friscic: {
      title: "Gas Chromatography-Mass Spectrometry Analysis of Volatile Organic Compounds from Three Endemic Iris Taxa: Headspace Solid-Phase Microextraction vs. Hydrodistillation",
      author: "Friščić M, Maleš Ž, Maleš I, et al.",
      journal: "Molecules",
      publicationDate: "2024-08-29",
      doi: "10.3390/molecules29174107",
      pmid: "39274954",
      url: "https://doi.org/10.3390/molecules29174107",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Iris pallida subsp. illyrica", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "An iris that grows wild only in Croatia. Aged iris rhizomes give essential oils used in medicine, cosmetics, perfume and food, mainly for their scent compounds called irones.",
      source: "friscic",
    },
    {
      category: "PRECLINICAL",
      summary: "A chemical study mapped the scent compounds in its dried rhizomes. No health effects have been studied.",
      source: "friscic",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "friscic",
    },
  ],
});
