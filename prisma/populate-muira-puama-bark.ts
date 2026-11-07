import { run } from "./lib/populate-herb";

// "Muira puama" bark from Croton echioides. True muira puama is Ptychopetalum
// olacoides (and Liriosma ovata); C. echioides has been used as a substitute
// (Ma et al. 2015). Other sources: two lab studies of C. echioides stem bark.
// Family per GBIF. No source covering human use or safety of C. echioides was
// found, so none is stated.

run({
  name: "Muira Puama Bark",
  profile: {
    family: "Euphorbiaceae",
    genus: "Croton",
    species: "echioides",
    partsUsed: "The stem bark",
  },
  sources: {
    ma: {
      title: "Sesquiterpenoid tropolone glycosides from Liriosma ovata",
      author: "Ma J, Pawar RS, Grundel E, et al.",
      journal: "Journal of Natural Products",
      publicationDate: "2015-01-14",
      doi: "10.1021/np5006696",
      pmid: "25587934",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7709799/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    novello: {
      title: "Antileishmanial activity of neo-clerodane diterpenes from Croton echioides",
      author: "Novello CR, Düsman E, Balbinot RB, et al.",
      journal: "Natural Product Research",
      publicationDate: "2020-11-28",
      doi: "10.1080/14786419.2020.1851221",
      pmid: "33249918",
      url: "https://doi.org/10.1080/14786419.2020.1851221",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vendruscolo: {
      title: "Cytotoxicity of extracts and compounds isolated from Croton echioides in animal tumor cell (HTC)",
      author: "Vendruscolo I, Venturella SRT, Bressiani PA, et al.",
      journal: "Brazilian Journal of Biology",
      publicationDate: "2022-09-26",
      doi: "10.1590/1519-6984.264356",
      pmid: "36169527",
      url: "https://doi.org/10.1590/1519-6984.264356",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Muira Puama", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "\"Muira puama\" usually refers to Amazonian plants of a different family (Ptychopetalum olacoides and Liriosma ovata), used in Brazil and France for nervous disorders, as a nerve stimulant and as an aphrodisiac. Because overharvesting has shrunk wild Ptychopetalum, Croton echioides, a small tree from northeastern Brazil, has been used as a substitute. The traditional uses belong to the original plants, not to this one. Supplements labeled \"muira puama\" may contain different plants.",
      source: "ma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a lab study, compounds from Croton echioides stem bark were active against Leishmania, the parasite that causes leishmaniasis.\n\nTechnical detail: two new neo-clerodane diterpenoids isolated by bioguided fractionation.",
      source: "novello",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2022 lab study, extracts and compounds from Croton echioides slowed the growth of rat liver cancer cells.",
      source: "vendruscolo",
    },
  ],
});
