import { run } from "./lib/populate-herb";

// Ewe Akintola, Siam weed (Chromolaena odorata), from a 2021 inventory of
// Yoruba useful plants (Ajao et al.) and a 2026 review of plants that stop
// bleeding and heal wounds (Mora-Guzmán et al.). No human trials were found.
// Family per GBIF.

run({
  name: "Ewe Akintola",
  profile: {
    family: "Asteraceae",
    genus: "Chromolaena",
    species: "odorata",
    nativeRange: "The Americas; now a widespread weed in Africa and Asia",
    partsUsed: "The leaves",
  },
  sources: {
    ajao: {
      title: "Wandering through southwestern Nigeria: An inventory of Yoruba useful angiosperm plants",
      author: "Ajao AA, Mukaila YO, Sabiu S",
      journal: "Heliyon",
      publicationDate: "2021-12-25",
      doi: "10.1016/j.heliyon.2021.e08668",
      pmid: "35024488",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8733184/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mora: {
      title: "Plant-derived modulators of the hemostasis-wound healing axis: mechanisms, evidence, and translational potential",
      author: "Mora-Guzmán Z, Salvador Ibarra I, Chel-Guerrero L, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-10-16",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13659225/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Siam Weed", type: "COMMON_NAME" },
    { name: "Akintola", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Yoruba use of the leaf to stop bleeding and for fresh wounds, malaria and skin disease." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Among the Yoruba of southwestern Nigeria, akintola is used to stop bleeding and on fresh wounds, and for malaria, toothache, skin disease, diarrhea, headache and hemorrhoids. It's also used in body creams.",
      source: "ajao",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Siam weed is one of the main plants studied for stopping bleeding and healing wounds. In lab tests its leaf extract killed Staphylococcus aureus bacteria, including when added to a liquid wound plaster. Most studies used crude extracts, not tested in people.",
      source: "mora",
    },
  ],
});
