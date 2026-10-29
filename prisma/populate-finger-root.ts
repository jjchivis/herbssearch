import { run } from "./lib/populate-herb";

// Finger Root (Boesenbergia rotunda), from a 2025 review (Wang et al.) and a
// 2026 trial of a mouth gargle in cancer patients (Sanguanboonyaphong et al.).
// Family per GBIF.

run({
  name: "Finger Root",
  profile: {
    family: "Zingiberaceae",
    genus: "Boesenbergia",
    species: "rotunda",
    nativeRange: "Southern China, Southeast Asia and South Asia",
    partsUsed: "The finger-shaped rhizomes (underground stems)",
  },
  sources: {
    wang: {
      title: "Traditional usages, chemical metabolites, pharmacological activities, and pharmacokinetics of Boesenbergia rotunda (L.) Mansf.: a comprehensive review",
      author: "Wang Y, Wen J, Liu F, Peng X, Xu G, Zhang M, Huang Z",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-03-19",
      doi: "10.3389/fphar.2025.1527210",
      pmid: "40176912",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11962002/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sanguanboonyaphong: {
      title: "Boesenbergia rotunda extract-based mucoadhesive mouth gargle for chemoradiation-induced oral mucositis: A prospective randomized controlled study",
      author: "Sanguanboonyaphong P, Lapmag A, Silaon W, et al.",
      journal: "Supportive Care in Cancer",
      publicationDate: "2026-10-03",
      doi: "10.1007/s00520-026-11282-w",
      pmid: "42828556",
      url: "https://doi.org/10.1007/s00520-026-11282-w",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Fingerroot", type: "COMMON_NAME" }, { name: "Chinese Ginger", type: "COMMON_NAME" }],
  constituents: [{ name: "Panduratin A", slug: "panduratin-a", type: "chalcone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Finger root is a food plant and spice in Asia, traditionally used to help appetite and relieve pain.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, finger root extracts and compounds slowed cancer cells, calmed inflammation, killed bacteria, acted as antioxidants, reduced weight gain and protected the liver and kidneys.",
      source: "wang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 56 people having chemotherapy and radiation for head and neck cancer, a finger root mouth gargle led to fewer mouth sores than no gargle (30% vs 41%). Side effects were similar in both groups.",
      source: "sanguanboonyaphong",
    },
  ],
});
