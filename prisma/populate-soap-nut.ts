import { run } from "./lib/populate-herb";

// Soap Nut (Sapindus mukorossi), from a 2022 review of its saponins (Sochacki and
// Vogt) and a 2012 review of its pharmacology (Upadhyay and Singh). Common name
// "Chinese soapberry" per USDA PLANTS; family per GBIF.

run({
  name: "Soap Nut",
  profile: { family: "Sapindaceae", genus: "Sapindus", species: "mukorossi", nativeRange: "Tropical and subtropical Asia", partsUsed: "The fruit shells and seeds" },
  sources: {
    sochacki: {
      title: "Triterpenoid Saponins from Washnut (Sapindus mukorossi Gaertn.)-A Source of Natural Surfactants and Other Active Components",
      author: "Sochacki M, Vogt O",
      journal: "Plants",
      publicationDate: "2022-09-09",
      doi: "10.3390/plants11182355",
      pmid: "36145756",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9502486/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    upadhyay: {
      title: "Pharmacological effects of Sapindus mukorossi",
      author: "Upadhyay A, Singh DK",
      journal: "Revista do Instituto de Medicina Tropical de São Paulo",
      publicationDate: "2012-09-01",
      doi: "10.1590/s0036-46652012000500007",
      pmid: "22983291",
      url: "https://doi.org/10.1590/s0036-46652012000500007",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Soapnut", type: "COMMON_NAME" },
    { name: "Washnut", type: "COMMON_NAME" },
    { name: "Reetha", type: "TRADITIONAL_NAME" },
    { name: "Chinese Soapberry", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A tropical Asian tree whose fruit is used as a natural soap and detergent, thanks to its saponins. Ground seeds are used for tooth problems, arthritis, colds, nausea and constipation.",
      source: "sochacki",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, extracts killed sperm, protected the liver, eased inflammation and acted against protozoa (single-celled parasites).",
      source: "upadhyay",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Studies report it can cause vomiting.",
      source: "upadhyay",
    },
  ],
});
