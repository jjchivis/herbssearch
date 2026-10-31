import { run } from "./lib/populate-herb";

// Monkshood (Aconitum ferox, vatsanabha), from a 2013 study of Ayurvedic
// purification of its root (Deore et al.) and a 2024 fatal poisoning case
// (Adhikari). Family per GBIF.

run({
  name: "Monkshood",
  profile: {
    family: "Ranunculaceae",
    genus: "Aconitum",
    species: "ferox",
    nativeRange: "The Himalayas",
    partsUsed: "The root (deadly poisonous)",
  },
  sources: {
    deore: {
      title: "Evaluation of toxicity of 'Vatsanabha' (Aconitum ferox, Ranunculaceae) Before and After Shodhana",
      author: "Deore SL, Moon KV, Khadabadi SS, Deokate UA, Baviskar BA",
      journal: "Journal of Young Pharmacists",
      publicationDate: "2013-03-07",
      doi: "10.1016/j.jyp.2013.01.001",
      pmid: "24023444",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3758080/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adhikari: {
      title: "Fatal aconite poisoning in a rural Nepali traditional healer: clinical challenges and management strategies",
      author: "Adhikari P",
      journal: "Annals of Medicine and Surgery",
      publicationDate: "2024-09-04",
      doi: "10.1097/MS9.0000000000002543",
      pmid: "39359847",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11444581/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Vatsanabha", type: "TRADITIONAL_NAME" },
  ],
  constituents: [{ name: "Aconitine", slug: "aconitine", type: "diterpenoid alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Monkshood root, called vatsanabha, is used in Ayurveda only after a traditional purification process called shodhana. In a 2013 study, traditional shodhana turned the root's deadly poisons, aconitine and pseudoaconitine, into far less toxic compounds, while a modern chemical method did not.",
      source: "deore",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Monkshood is deadly. Aconitine, its main poison, acts on the nerves and heart. Poisoning starts with tingling around the mouth, then severe stomach pain, weakness and heart failure. In 2024 a traditional healer in Nepal died within 12 hours of drinking a homemade tea containing aconite.",
      source: "adhikari",
    },
  ],
});
