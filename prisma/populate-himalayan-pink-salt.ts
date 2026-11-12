import { run } from "./lib/populate-herb";

// Himalayan Pink Salt (halite, rock salt), from a 2020 analysis of pink salts sold
// in Australia (Fayet-Moore et al.), a 2023 analysis of gourmet salts (Di Salvo et
// al.) and a 2022 crossover study in people with high blood pressure (Loyola et
// al.). It isn't a plant, so the profile says so, as populate-shilajit.ts does.

run({
  name: "Himalayan Pink Salt",
  profile: {
    family: "Not a plant: a mineral (halite, rock salt)",
    genus: "",
    species: "",
    nativeRange: "The Himalayas",
    partsUsed: "The salt crystals",
  },
  sources: {
    fayetMoore: {
      title: "An Analysis of the Mineral Composition of Pink Salt Available in Australia",
      author: "Fayet-Moore F, Wibisono C, Carr P, et al.",
      journal: "Foods",
      publicationDate: "2020-10-19",
      doi: "10.3390/foods9101490",
      pmid: "33086585",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7603209/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    diSalvo: {
      title: "Gourmet Table Salts: The Mineral Composition Showdown",
      author: "Di Salvo E, Tardugno R, Nava V, et al.",
      journal: "Toxics",
      publicationDate: "2023-08-15",
      doi: "10.3390/toxics11080705",
      pmid: "37624210",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10459412/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    loyola: {
      title: "Comparison between the Effects of Hymalaian Salt and Common Salt Intake on Urinary Sodium and Blood Pressure in Hypertensive Individuals",
      author: "Loyola IP, Sousa MF, Jardim TV, et al.",
      journal: "Arquivos Brasileiros de Cardiologia",
      publicationDate: "2022-05-01",
      doi: "10.36660/abc.20210069",
      pmid: "35137791",
      url: "https://doi.org/10.36660/abc.20210069",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Himalayan Salt", type: "COMMON_NAME" },
    { name: "Pink Salt", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary: "Like table salt, it's mostly sodium chloride. It contains other minerals, but you'd need more than 30 g a day (about 6 teaspoons) for them to add meaningfully to your diet. That much salt would be harmful.",
      source: "fayetMoore",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a small crossover study of 17 women with high blood pressure, switching to Himalayan salt didn't change blood pressure or urine sodium compared with table salt.",
      source: "loyola",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "In a test of 31 pink salts sold in Australia, one had lead above the national limit.",
      source: "fayetMoore",
    },
    {
      category: "CONTAMINATION",
      description: "In an Italian study, lead was above the maximum level in all 10 gourmet salts tested, including Himalayan pink.",
      source: "diSalvo",
    },
    {
      category: "DOSAGE",
      description: "Treat it like any salt: keep total salt under 5 g a day, as Australian and New Zealand guidelines advise.",
      source: "fayetMoore",
    },
  ],
});
