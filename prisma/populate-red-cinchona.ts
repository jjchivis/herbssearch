import { run } from "./lib/populate-herb";

// Red Cinchona (Cinchona pubescens, the red cinchona bark tree), from a 2018
// review of cinchona bark and its alkaloids quinine and quinidine (Eyal). The
// review covers cinchona bark in general, not only this species. Family per GBIF.

run({
  name: "Red Cinchona",
  profile: {
    family: "Rubiaceae",
    genus: "Cinchona",
    species: "pubescens",
    nativeRange: "The Andes of South America",
    partsUsed: "The bark",
  },
  sources: {
    eyal: {
      title: "The Fever Tree: from Malaria to Neurological Diseases",
      author: "Eyal S",
      journal: "Toxins",
      publicationDate: "2018-11-23",
      doi: "10.3390/toxins10120491",
      pmid: "30477182",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6316520/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Peruvian Bark", type: "COMMON_NAME" },
    { name: "Fever Tree", type: "COMMON_NAME" },
    { name: "Jesuit's Bark", type: "TRADITIONAL_NAME" },
    { name: "Cinchona succirubra", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Quinine", slug: "quinine", type: "quinoline alkaloid" },
    { name: "Quinidine", slug: "quinidine", type: "quinoline alkaloid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cinchona bark from South America reached Europe in the 1630s, brought by Spanish Jesuit missionaries, and became famous as a cure for malaria fevers. It was known as \"Peruvian bark\" and \"Jesuit's powder\".",
      source: "eyal",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The bark's main compounds, quinine and quinidine, became medicines. Quinine is still used for severe malaria where other drugs aren't available, and in pregnant women. Quinidine is used for some heart rhythm and nerve conditions. Both are now made as purified drugs, and their use has declined because of side effects.",
      source: "eyal",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Quinine has a narrow margin between a helpful and a harmful dose. Mild poisoning, called cinchonism, causes ringing in the ears, some hearing loss, headache, nausea, vision changes and dizziness on standing. Larger amounts can cause vertigo, vomiting, diarrhea, marked hearing loss and loss of vision. It can also cause low blood sugar and low blood pressure.",
      source: "eyal",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use quinine for leg cramps. In the US, its label carries a boxed warning against this use, and long-term quinine use has been linked to a higher risk of death.",
      source: "eyal",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Quinidine can cause dangerous heart rhythm changes in 2–8% of people who take it, as well as low platelet counts, hepatitis and lupus-like reactions.",
      source: "eyal",
    },
  ],
});
