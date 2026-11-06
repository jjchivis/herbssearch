import { run } from "./lib/populate-herb";

// Liverwort (Marchantia polymorpha, common or umbrella liverwort), from a 2021
// lab study of its anti-inflammatory effect (Kim et al.) and a 2025 review of
// its compounds (Nowaczyński et al.). Family per GBIF.

run({
  name: "Liverwort",
  profile: { family: "Marchantiaceae", genus: "Marchantia", species: "polymorpha", partsUsed: "The whole plant" },
  sources: {
    kim: {
      title: "Anti-Inflammatory Effect of Liverwort (Marchantia polymorpha L.) and Racomitrium Moss (Racomitrium canescens (Hedw.) Brid.) Growing in Korea",
      author: "Kim SY, Hong M, Kim TH, et al.",
      journal: "Plants",
      publicationDate: "2021-09-30",
      doi: "10.3390/plants10102075",
      pmid: "34685885",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8541563/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nowaczynski: {
      title: "Marchantia polymorpha as a Source of Biologically Active Compounds",
      author: "Nowaczyński F, Nicoletti R, Zimowska B, Ludwiczuk A",
      journal: "Molecules",
      publicationDate: "2025-01-26",
      doi: "10.3390/molecules30030558",
      pmid: "39942661",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11820628/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Common Liverwort", type: "COMMON_NAME" },
    { name: "Umbrella Liverwort", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A flat, spore-bearing plant and the most widespread liverwort in the world.",
      source: "nowaczynski",
    },
    {
      category: "TRADITIONAL",
      summary: "It's been used traditionally for boils, abscesses, wounds, broken bones, snakebites and liver problems.",
      source: "kim",
    },
    {
      category: "PRECLINICAL",
      summary: "In human skin cells, a liverwort extract lowered several signals of inflammation.",
      source: "kim",
    },
    {
      category: "PRECLINICAL",
      summary: "Its main compound, marchantin A, and related compounds fought fungi and bacteria in lab tests.",
      source: "nowaczynski",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "kim",
    },
  ],
});
