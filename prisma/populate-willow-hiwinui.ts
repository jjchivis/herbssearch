import { run } from "./lib/populate-herb";

// Willow Hiwinui, a willow variety of Chinese willow (Salix matsudana), from a
// 2021 genetic study (Zhang et al.). No medicinal studies were found on the
// species or this variety. Family per GBIF.

run({
  name: "Willow Hiwinui",
  profile: {
    family: "Salicaceae",
    genus: "Salix",
    species: "matsudana",
    partsUsed: "No medicinal use was found",
  },
  sources: {
    zhang: {
      title: "Genome-wide investigation of the AP2/ERF superfamily and their expression under salt stress in Chinese willow (Salix matsudana)",
      author: "Zhang J, Shi SZ, Jiang Y, Zhong F, Liu G, Yu C, Lian B, Chen Y",
      journal: "PeerJ",
      publicationDate: "2021-04-13",
      doi: "10.7717/peerj.11076",
      pmid: "33954030",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8051338/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Chinese Willow", type: "COMMON_NAME" }],
});
