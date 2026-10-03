import { run } from "./lib/populate-herb";

// Jasmine (Jasminum sambac, Arabian jasmine), from a 1988 trial comparing
// jasmine flowers with bromocriptine to stop breast milk after childbirth
// (Shrivastav et al.).

run({
  name: "Jasmine",
  profile: {
    family: "Oleaceae",
    genus: "Jasminum",
    species: "sambac",
    partsUsed: "The flowers",
  },
  sources: {
    shrivastav: {
      title: "Suppression of puerperal lactation using jasmine flowers (Jasminum sambac)",
      author: "Shrivastav P, George K, Balasubramaniam N, Jasper MP, Thomas M, Kanagasabhapathy AS",
      journal: "Australian and New Zealand Journal of Obstetrics and Gynaecology",
      publicationDate: "1988-02-01",
      doi: "10.1111/j.1479-828x.1988.tb01614.x",
      pmid: "3214386",
      url: "https://pubmed.ncbi.nlm.nih.gov/3214386/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Arabian Jasmine", type: "COMMON_NAME" },
    { name: "Jasminum", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial, women who needed to stop breast milk after childbirth had jasmine flowers placed on their breasts or took bromocriptine, a medicine that stops milk production. Both lowered prolactin, the hormone that drives milk production, though bromocriptine lowered it more.\nBreast swelling, milk production and use of pain relievers were similar in both groups, and both failed in a similar number of women. Some women on bromocriptine had their milk come back. The researchers called jasmine flowers a cheap alternative where bromocriptine isn't available.",
      source: "shrivastav",
    },
  ],
  safety: [
    {
      category: "BREASTFEEDING",
      description: "Jasmine flowers placed on the breasts reduced breast milk in a trial.",
      source: "shrivastav",
    },
  ],
  symptoms: [
    { slug: "breast-milk-supply", notes: "In a trial, jasmine flowers placed on the breasts reduced breast milk as well as the medicine bromocriptine did, by clinical signs." },
  ],
});
