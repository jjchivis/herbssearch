import { run } from "./lib/populate-herb";

// Black Maul, a basket willow variety of almond willow (Salix triandra), from a 2022 study of Korean willows (Jang et al.).
// Research is on the species; none was found on this variety. Family per GBIF.

run({
  name: "Black Maul",
  profile: {
    family: "Salicaceae",
    genus: "Salix",
    species: "triandra",
    nativeRange: "Europe and Western and Central Asia",
    partsUsed: "The rods (stems) for basket-making; the leaves and bark have been studied",
  },
  sources: {
    jang: {
      title: "Phytochemical Investigation of Marker Compounds from Indigenous Korean Salix Species and Their Antimicrobial Effects",
      author: "Jang YS, Lee DE, Hong JH, et al.",
      journal: "Plants",
      publicationDate: "2022-12-26",
      doi: "10.3390/plants12010104",
      pmid: "36616234",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9824127/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Almond Willow", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Almond willow is used as a material for basket-making. Willow trees in general are used to treat pain and inflammatory diseases.",
      source: "jang",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, almond willow leaf extract acted as an antioxidant. Few studies have looked at its chemistry.",
      source: "jang",
    },
  ],
});
