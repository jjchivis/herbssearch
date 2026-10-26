import { run } from "./lib/populate-herb";

// Contrajerva (Dorstenia contrajerva), from a 2017 review of Central American
// snakebite remedies (Giovannini & Howes) and a 2009 lab study of Yucatecan
// medicinal plants (Getti et al.). No human or safety studies were found.
// Family per GBIF.

run({
  name: "Contrajerva",
  profile: {
    family: "Moraceae",
    genus: "Dorstenia",
    species: "contrajerva",
    nativeRange: "Mexico, Central America, the Caribbean and northern South America",
    partsUsed: "The rhizome (underground stem) and roots",
  },
  sources: {
    giovannini: {
      title: "Medicinal plants used to treat snakebite in Central America: Review and assessment of scientific evidence",
      author: "Giovannini P, Howes MR",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2017-02-04",
      doi: "10.1016/j.jep.2017.02.011",
      pmid: "28179114",
      url: "https://pubmed.ncbi.nlm.nih.gov/28179114/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    getti: {
      title: "Leishmanicidal activity of Yucatecan medicinal plants on Leishmania species responsible for cutaneous leishmaniasis",
      author: "Getti G, Durgadoss P, Domínguez-Carmona D, et al.",
      journal: "Journal of Parasitology",
      publicationDate: "2009-04-01",
      doi: "10.1645/GE-1675.1",
      pmid: "18771334",
      url: "https://pubmed.ncbi.nlm.nih.gov/18771334/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Contrayerba", type: "REGIONAL_NAME", region: "Central America" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Contrajerva is one of the plants most often reported as a snakebite remedy in Central America. Of 208 species used for snakebite there, it was one of only nine reported in at least three separate studies.",
      source: "giovannini",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Contrajerva was one of four Yucatán medicinal plants tested in the lab against the Leishmania parasites that cause skin sores. Its extracts weren't among the most active.",
      source: "getti",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "There's no clinical research on whether traditional snakebite remedies like this one work or are safe.",
      source: "giovannini",
    },
  ],
});
