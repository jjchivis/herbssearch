import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Nux Vomica",
  profile: {
    family: "Loganiaceae",
    genus: "Strychnos",
    species: "nux-vomica",
    partsUsed: "The seeds (toxic)",
  },
  sources: {
    guo: {
      title: "Botany, Phytochemistry, Pharmacology and Toxicity of Strychnos nux-vomica L.: A Review",
      author: "Guo R, Wang T, Zhou G, et al.",
      journal: "American Journal of Chinese Medicine",
      publicationDate: "2018-01-01",
      pmid: "29298518",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1142/S0192415X18500015",
      url: "https://doi.org/10.1142/S0192415X18500015",
    },
    ponraj: {
      title: "A rare case report of Strychnos nux-vomica poisoning with bradycardia",
      author: "Ponraj L, Mishra AK, Koshy M, et al.",
      journal: "Journal of Family Medicine and Primary Care",
      publicationDate: "2017-07-01",
      pmid: "29417029",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.4103/2249-4863.222036",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5787976/",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    { category: "TRADITIONAL", summary: "A tree from Sri Lanka, India and Australia whose seed, called nux vomica, is used in traditional medicine.", source: "guo" },
    { category: "PRECLINICAL", summary: "More than 84 compounds have been found in the plant. In lab studies they affected the nervous system, relieved pain and inflammation, slowed tumors and germs and affected immunity. Brucine, one of its alkaloids, killed liver cancer cells in the lab.", source: "guo" },
  ],
  safety: [
    { category: "TOXICITY", description: "The plant contains strychnine, a poison. A patient who ate the leaves developed strychnine poisoning. In traditional use the seeds are processed to reduce their toxicity.", source: "ponraj" },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "Contains strychnine, a poison; poisoning has been reported." },
  ],
});
