import { run } from "./lib/populate-herb";

// Agave (Agave americana, century plant), from a 2026 ethnobotanical study in
// Mexico (Campos-Salas et al.). No medicinal or safety studies were found.
// Family per GBIF.

run({
  name: "Agave",
  profile: {
    family: "Asparagaceae",
    genus: "Agave",
    species: "americana",
    nativeRange: "Mexico; now grown in warm, dry regions worldwide",
    partsUsed: "The sap, the stem (heart) and the leaf fibers",
  },
  sources: {
    campos: {
      title: "Use, management and domestication of Agave americana in Mexico",
      author: "Campos-Salas N, Casas A, Jacques-Hernández C",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2026-07-03",
      doi: "10.1186/s13002-026-00924-2",
      pmid: "42399974",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13625399/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Century Plant", type: "COMMON_NAME" },
    { name: "Maguey", type: "REGIONAL_NAME", region: "Mexico" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Mexico, agave sap is fermented into the drink pulque. The stems have been eaten since prehistoric times, cooked in underground ovens, and the cooked stems are now fermented and distilled into mezcal. Fibers from some varieties are made into cord and cloth.",
      source: "campos",
    },
  ],
});
