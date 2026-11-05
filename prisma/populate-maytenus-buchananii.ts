import { run } from "./lib/populate-herb";

// Maytenus buchananii (Gymnosporia buchananii), from a 2018 review of plants
// tested against HIV (Salehi et al.). Very little research exists. Family per
// GBIF.

run({
  name: "Maytenus Buchananii",
  profile: { family: "Celastraceae", genus: "Gymnosporia", species: "buchananii", nativeRange: "East and Central Africa", partsUsed: "The root and bark" },
  sources: {
    salehi: {
      title: "Medicinal Plants Used in the Treatment of Human Immunodeficiency Virus",
      author: "Salehi B, Kumar NVA, Şener B, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2018-05-14",
      doi: "10.3390/ijms19051459",
      pmid: "29757986",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5983620/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Gymnosporia buchananii", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary: "A crude extract of the root and bark is listed among plants that have shown activity against HIV in lab studies.",
      source: "salehi",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "salehi",
    },
  ],
});
