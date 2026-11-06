import { run } from "./lib/populate-herb";

// Mustard Seed (Brassica juncea, brown mustard), from a 2025 review of its
// chemistry and uses (Hu and Yan), a 2019 review of mustard allergy (Sharma et al.)
// and a 2022 review of mustard oil and heart health (Poddar et al.). Family per
// GBIF.

run({
  name: "Mustard Seed",
  profile: { family: "Brassicaceae", genus: "Brassica", species: "juncea", nativeRange: "Central and South Asia; grown worldwide", partsUsed: "The seeds, and also leaves" },
  sources: {
    hu: {
      title: "Comprehensive advances in phytochemical components, bioactive functionality, and processing applications of mustard (Brassica juncea (L.) Czern.): a review",
      author: "Hu Y, Yan Z",
      journal: "Frontiers in Nutrition",
      publicationDate: "2025-07-31",
      doi: "10.3389/fnut.2025.1626333",
      pmid: "40823021",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12350256/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sharma: {
      title: "A Comprehensive Review on Mustard-Induced Allergy and Implications for Human Health",
      author: "Sharma A, Verma AK, Gupta RK, Neelabh, Dwivedi PD",
      journal: "Clinical Reviews in Allergy & Immunology",
      publicationDate: "2019-08-01",
      doi: "10.1007/s12016-017-8651-2",
      pmid: "29159565",
      url: "https://doi.org/10.1007/s12016-017-8651-2",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    poddar: {
      title: "Mustard oil and cardiovascular health: Why the controversy?",
      author: "Poddar KH, Sikand G, Kalra D, Wong N, Duell PB",
      journal: "Journal of Clinical Lipidology",
      publicationDate: "2021-12-02",
      doi: "10.1016/j.jacl.2021.11.002",
      pmid: "34924350",
      url: "https://doi.org/10.1016/j.jacl.2021.11.002",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Brown Mustard", type: "COMMON_NAME" },
    { name: "Indian Mustard", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Brown mustard is grown worldwide for its seeds, used whole or ground as a spice and condiment, and for its leaves and oil. Its sharp heat comes from sinigrin, which breaks down into allyl isothiocyanate when the seeds are crushed and wet.",
      source: "hu",
    },
    {
      category: "TRADITIONAL",
      summary: "Mustard oil is one of the most popular cooking oils in South Asia, especially India.",
      source: "poddar",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab and animal studies suggest its compounds may fight bacteria and kill some cancer cells.",
      source: "hu",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Mustard allergy is increasing and can cause severe reactions, including anaphylaxis. Mustard can be hidden in many processed foods.",
      source: "sharma",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Mustard oil is high in erucic acid, which caused fat buildup in heart muscle in rodents. The US FDA doesn't allow mustard oil to be sold for cooking, while India's lipid association recommends it as a heart-healthy oil.",
      source: "poddar",
    },
  ],
});
