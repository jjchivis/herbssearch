import { run } from "./lib/populate-herb";

// Nicotiana glauca (tree tobacco), from a 2020 case report of poisoning
// (Kear et al.), a 2026 study of its toxin anabasine (Carollo et al.) and a
// 2026 lab study of the leaves (Saeed et al.). No source for traditional
// medicinal use was found. Family per GBIF.

run({
  name: "Nicotiana Glauca",
  profile: {
    family: "Solanaceae",
    genus: "Nicotiana",
    species: "glauca",
    nativeRange: "Argentina and Bolivia; now a weed in dry regions in 66 countries",
    partsUsed: "The leaves (poisonous)",
  },
  sources: {
    kear: {
      title: "Ingestion of A Common Plant's Leaves Leads to Acute Respiratory Arrest and Paralysis: A Case Report",
      author: "Kear BM, Lee RW, Church SB, Youssef FA, Arguija A",
      journal: "Clinical Practice and Cases in Emergency Medicine",
      publicationDate: "2020-07-09",
      doi: "10.5811/cpcem.2020.5.46703",
      pmid: "32926689",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7434294/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    carollo: {
      title: "Persistent foliar anabasine and unusually broad geographic distribution make Nicotiana glauca a distinctive toxicological concern",
      author: "Carollo CA, Macedo AL, Alves BC, et al.",
      journal: "Toxicon",
      publicationDate: "2026-10-12",
      doi: "10.1016/j.toxicon.2026.109325",
      pmid: "42863709",
      url: "https://pubmed.ncbi.nlm.nih.gov/42863709/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    saeed: {
      title: "Nicotiana glauca leaf extract exhibits synergistic antioxidant and anticancer activities revealed by phytochemical profiling and molecular docking",
      author: "Saeed MMH, Fayed SA, Hamdy R, Shalaby EA",
      journal: "Scientific Reports",
      publicationDate: "2026-09-03",
      doi: "10.1038/s41598-026-67585-9",
      pmid: "42693195",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13542203/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Tree Tobacco", type: "COMMON_NAME" }],
  constituents: [{ name: "Anabasine", slug: "anabasine", type: "piperidine alkaloid" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Tree tobacco leaves contain anabasine, a nicotine-like poison. Every one of 174 leaf samples tested in Brazil contained it, and no leaf size, plant age or season reliably had low levels.",
      source: "carollo",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a leaf extract showed antioxidant activity and killed some cancer cells.",
      source: "saeed",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Don't eat any part of this plant. A 65-year-old woman boiled and ate a few leaves of a new plant \"with yellow flowers\". Within about an hour she vomited, felt weak, and then stopped breathing and couldn't move. She needed a breathing machine for 3 days before recovering fully.",
      source: "kear",
    },
    {
      category: "TOXICITY",
      description:
        "Its poison, anabasine, first causes a fast heartbeat, small pupils and trembling. Larger amounts can stop breathing, cause paralysis and collapse the heart and circulation. Poisoning can also happen through the skin.",
      source: "kear",
    },
  ],
});
