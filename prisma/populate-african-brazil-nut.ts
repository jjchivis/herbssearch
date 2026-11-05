import { run } from "./lib/populate-herb";

// African Brazil Nut (Poga oleosa), from a 2020 survey of Baka wild food plants
// (Billong Fils et al.), a 2021 Baka food study (Gallois et al.) and a 2007 rat and
// lab study of its fruit (Ogbole et al.). Very little research exists. Not related
// to the South American Brazil nut (Bertholletia excelsa). Family per GBIF.

run({
  name: "African Brazil Nut",
  profile: { family: "Anisophylleaceae", genus: "Poga", species: "oleosa", nativeRange: "Central and West African rainforest", partsUsed: "The seeds (nuts) and fruit" },
  sources: {
    billong: {
      title: "Ethnobotanical survey of wild edible plants used by Baka people in southeastern Cameroon",
      author: "Billong Fils PE, Afiong Nana N, Betti JL, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2020-10-22",
      doi: "10.1186/s13002-020-00413-0",
      pmid: "33092623",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7579891/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gallois: {
      title: "The importance of choosing appropriate methods for assessing wild food plant knowledge and use: A case study among the Baka in Cameroon",
      author: "Gallois S, Heger T, Henry AG, van Andel T",
      journal: "PLoS One",
      publicationDate: "2021-02-18",
      doi: "10.1371/journal.pone.0247108",
      pmid: "33600479",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7891729/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ogbole: {
      title: "Anti-inflammatory and antimicrobial activities of Hippocratea indica root bark and Poga oleosa fruits",
      author: "Ogbole OO, Ekor MN, Oluremi BB, et al.",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2007-02-16",
      pmid: "20161902",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2816494/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Po'o", type: "REGIONAL_NAME", region: "Cameroon (Baka)" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A rainforest tree whose oily seeds are one of the most used wild foods of Baka people in Cameroon, eaten as a main food and used as a cooking ingredient in several recipes.",
      source: "billong",
    },
    {
      category: "TRADITIONAL",
      summary: "The Baka rely heavily on its large fruits and seeds, and those of the related Panda oleosa, for their daily fat.",
      source: "gallois",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a fruit extract reduced swelling. It had a weak effect against bacteria in lab tests and none against yeast.",
      source: "ogbole",
    },
  ],
  safety: [
    { category: "PREPARATION_SPECIFIC", description: "No human medical or safety studies were found.", source: "ogbole" },
  ],
});
