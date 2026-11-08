import { run } from "./lib/populate-herb";

// Chinese anemone (Anemone hupehensis; GBIF lists it as a synonym of Eriocapitella hupehensis). Sources: two lab chemistry studies. No source describing its traditional medicinal use or safety was found, so none is stated.

run({
  name: "Chinese Anemone Root",
  profile: {
    family: "Ranunculaceae",
    genus: "Anemone",
    species: "hupehensis",
    partsUsed: "The roots and above-ground parts have been studied in the lab",
  },
  sources: {
    yuX: {
      title: "Anemhupehins A-C, Podocarpane Diterpenoids from Anemone hupehensis",
      author: "Yu X, Duan KT, Wang ZX, et al.",
      journal: "Natural Products and Bioprospecting",
      publicationDate: "2018-02-01",
      pmid: "29230718",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1007/s13659-017-0146-6",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5803142/",
    },
    wangMK: {
      title: "Triterpenoid saponins from Anemone hupehensis",
      author: "Wang MK, Wu FE, Chen YZ",
      journal: "Phytochemistry",
      publicationDate: "1993-01-01",
      pmid: "7764287",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/0031-9422(91)80036-z",
      url: "https://doi.org/10.1016/0031-9422(91)80036-z",
    },
  },
  synonyms: [{ name: "Eriocapitella hupehensis", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    { category: "PRECLINICAL", summary: "In a 2018 lab study, two compounds from the above-ground parts harmed human cancer cells. This has not been tested in animals or people.", source: "yuX" },
    { category: "PRECLINICAL", summary: "The plant contains triterpenoid saponins (soap-like compounds).", source: "wangMK" },
  ],
});
