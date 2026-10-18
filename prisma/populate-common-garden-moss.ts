import { run } from "./lib/populate-herb";

// Common garden moss (Brachythecium rutabulum, rough-stalked feather-moss), from a
// 2021 review of medicinal mosses in European works from 1616 to 1889 (Drobnik &
// Stebel). No safety or modern research sources exist, so none are listed.

run({
  name: "Common Garden Moss",
  profile: {
    family: "Brachytheciaceae",
    genus: "Brachythecium",
    species: "rutabulum",
    nativeRange: "Common across Europe, on soil, tree trunks, logs, stones and walls, and often in lawns and gardens",
    partsUsed: "The whole moss",
  },
  sources: {
    drobnik: {
      title: "Four Centuries of Medicinal Mosses and Liverworts in European Ethnopharmacy and Scientific Pharmacy: A Review",
      author: "Drobnik J, Stebel A",
      journal: "Plants (Basel)",
      publicationDate: "2021-06-25",
      doi: "10.3390/plants10071296",
      pmid: "34202287",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8309153/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Brachythecium rutabulum", type: "COMMON_NAME" },
    { name: "Rough-stalked Feather-moss", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Probably recommended for dressing wounds and stopping bleeding in the 17th and 18th centuries." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "This common moss of lawns and gardens was probably recommended for dressing wounds and stopping bleeding, at least between 1651 and 1731. It's one of only three historically used European mosses that have never been tested for active substances, so nothing is known about how it might work.\n\nTechnical detail: recorded as \"muscus terrestris et hortensis\".",
      source: "drobnik",
    },
  ],
});
