import { run } from "./lib/populate-herb";

// Ewe Owu Akese, sea-island cotton leaves (Gossypium barbadense), from a 2021
// inventory of Yoruba useful plants (Ajao et al.) and the TRAMIL Caribbean
// monograph. Family per GBIF.

run({
  name: "Ewe Owu Akese",
  profile: {
    family: "Malvaceae",
    genus: "Gossypium",
    species: "barbadense",
    nativeRange: "Tropical South America; grown in West Africa and the Caribbean",
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
    tramil: {
      title: "Gossypium barbadense",
      organization: "TRAMIL (Traditional Medicine in the Islands)",
      url: "https://tramil.net/en/plant/gossypium-barbadense",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
  },
  synonyms: [
    { name: "Sea Island Cotton", type: "COMMON_NAME" },
    { name: "Owu Akese", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
  ],
  traditions: [
    { slug: "african-traditional-medicine", notes: "Yoruba use of the leaf for infertility, malaria, wounds and ulcers." },
    { slug: "caribbean-folk-medicine", notes: "Leaves used for skin problems, bellyache and wind, and cuts." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Among the Yoruba of southwestern Nigeria, owu akese is used for female infertility, malaria, ulcers and as a wound dressing.",
      source: "ajao",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In the Caribbean, TRAMIL recognizes three traditional uses of the leaves: crushed leaves rubbed on itchy skin conditions, a leaf tea for bellyache and wind, and leaf juice on bleeding cuts.",
      source: "tramil",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a leaf tea extract caused no poisoning, and the leaves didn't irritate rabbit skin.",
      source: "tramil",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "There isn't enough information to recommend it during pregnancy, while breastfeeding or for children under 12.",
      source: "tramil",
    },
  ],
});
