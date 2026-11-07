import { run } from "./lib/populate-herb";

// Red goosefoot (Oxybasis rubra, syn. Chenopodium rubrum). Sources: two 2025
// lab studies of its saponins. Family per GBIF. No source describing a
// traditional medicinal use, or covering safety, was found, so none is stated.

run({
  name: "Red Goosefoot",
  profile: {
    family: "Amaranthaceae",
    genus: "Oxybasis",
    species: "rubra",
    partsUsed: "The fruits and other parts have been studied in the lab",
  },
  sources: {
    grabowska2025a: {
      title:
        "Saponins from Oxybasis rubra (L.) S.Fuentes, Uotila & Borsh: Comparative Assessment of Cytotoxic Potential Against a Wide Panel of Cancer Cell Lines",
      author: "Grabowska K, Mynarski A, Galanty A, Wróbel-Biedrawa D, Żmudzki P, Podolak I",
      journal: "Molecules",
      publicationDate: "2025-07-25",
      doi: "10.3390/molecules30153126",
      pmid: "40807298",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12348107/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    grabowska2025b: {
      title:
        "Simultaneous Quantification of Bioactive Triterpene Saponins Calenduloside E and Chikusetsusaponin IVa in Different Plant Parts of Ten Amaranthaceae Species by UPLC-ESI-MS/MS Method",
      author: "Grabowska K, Żmudzki P, Galanty A, Podolak I",
      journal: "Molecules",
      publicationDate: "2025-02-27",
      doi: "10.3390/molecules30051088",
      pmid: "40076312",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11901714/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Chenopodium rubrum", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 lab study, saponins (soap-like compounds) taken from red goosefoot fruits killed several kinds of cancer cells, including skin, prostate, gut, thyroid and lung cancer cells. The strongest one was most active against melanoma cells and had little effect on normal skin cells. This has not been tested in animals or people.\n\nTechnical detail: hederagenin glucosides, including a new monodesmoside; IC50 6.52 μg/mL against WM793 melanoma vs 39.94 μg/mL in HaCaT cells.",
      source: "grabowska2025a",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 lab analysis found two active saponins in red goosefoot for the first time.\n\nTechnical detail: calenduloside E and chikusetsusaponin IVa.",
      source: "grabowska2025b",
    },
  ],
});
