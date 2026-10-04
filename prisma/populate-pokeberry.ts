import { run } from "./lib/populate-herb";

// Pokeberry (Phytolacca americana, American pokeweed), from the Tennessee
// Poison Center (2002), the Northern New England Poison Center (2022) and a
// 2025 report of a fatal poisoning in China (Xu et al.).

run({
  name: "Pokeberry",
  profile: {
    family: "Phytolaccaceae",
    genus: "Phytolacca",
    species: "americana",
    partsUsed: "Young leaves and shoots, eaten after repeated boiling; the root and berries are poisonous",
  },
  sources: {
    tennessee: {
      title: "What is the toxicity of pokeweed?",
      organization: "Tennessee Poison Center, Vanderbilt University Medical Center",
      publicationDate: "2002-06-10",
      url: "https://vumc.org/poison-control/node/473",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    nnepc: {
      title: "Pokeweed (Pokeberry)",
      organization: "Northern New England Poison Center",
      publicationDate: "2022-05-17",
      url: "https://www.nnepc.org/poisons/p/pokeweed-pokeberry",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    xu: {
      title: "Description of a fatal case of acute Phytolacca americana poisoning due to leaf ingestion in China",
      author: "Xu H, Zhou H, Wang Q, Wan S, Chen W, Hu J, Zhao S",
      journal: "Toxicon",
      publicationDate: "2025-07-01",
      doi: "10.1016/j.toxicon.2025.108476",
      pmid: "40602544",
      url: "https://pubmed.ncbi.nlm.nih.gov/40602544/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pokeweed", type: "COMMON_NAME" },
    { name: "American Pokeweed", type: "COMMON_NAME" },
    { name: "Poke Sallet", type: "COMMON_NAME" },
    { name: "Poke Salad", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Some people eat young pokeweed leaves, a dish known as poke sallet. The leaves are boiled for 5 minutes, the water is thrown away, and they're boiled again in fresh water. This double boiling is said to destroy the poison, but people have still become ill after eating leaves prepared this way.",
      source: "tennessee",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "All parts of pokeweed are poisonous to people and animals, especially the root. The ripe berries are the least toxic. As little as half a teaspoon of root, or 10 or more berries, may cause poisoning.\nPoisoning usually causes a burning mouth, vomiting and diarrhea, which can be bad enough to cause dehydration. Headache, drooling, vision problems and possibly seizures can also occur.",
      source: "tennessee",
    },
    {
      category: "TOXICITY",
      description:
        "Symptoms may take 2 to 3 hours to start. Even several rounds of boiling can't guarantee that pokeweed is safe to eat. Touching the plant can cause a skin rash. If you have young children or pets, consider removing pokeweed from your yard. If someone swallows pokeweed, call Poison Control (1-800-222-1222 in the US).",
      source: "nnepc",
    },
    {
      category: "TOXICITY",
      description: "Pokeweed leaves have caused a death. In China, where the plant has spread, a person died after eating them.",
      source: "xu",
    },
  ],
});
