import { run } from "./lib/populate-herb";

// Sacred Thornapple (Datura wrightii, sacred datura), from a 2013 lab study of
// its withanolides (Zhang et al.). Safety notes come from a 2021 review of
// Datura species (Sharma et al.) and are labeled as applying to the genus.
// Family per GBIF.

run({
  name: "Sacred Thornapple",
  profile: {
    family: "Solanaceae",
    genus: "Datura",
    species: "wrightii",
    nativeRange: "The southwestern United States and northern Mexico",
    partsUsed: "None recommended (the whole plant is poisonous)",
  },
  sources: {
    zhang: {
      title: "Antiproliferative withanolides from Datura wrightii",
      author: "Zhang H, Bazzill J, Gallagher RJ, et al.",
      journal: "Journal of Natural Products",
      publicationDate: "2012-12-19",
      doi: "10.1021/np300766p",
      pmid: "23252848",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3606642/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sharma: { title: "Phytochemistry, Pharmacology, and Toxicology of Datura Species—A Review", author: "Sharma M, Dhaliwal I, Rana K, Delta AK, Kaushik P", journal: "Antioxidants", publicationDate: "2021-08-15", doi: "10.3390/antiox10081291", pmid: "34439539", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8389218/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
  },
  synonyms: [{ name: "Sacred Datura", type: "COMMON_NAME" }],
  constituents: [{ name: "Withanolides", slug: "withanolides", type: "steroidal lactone" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary: "Withanolides from the leaves and stems slowed the growth of brain, head and neck cancer cells in lab tests, but also of normal lung cells.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Datura species contain tropane alkaloids such as atropine and scopolamine, which cause poisoning with confusion, hallucinations, a fast heartbeat, seizures, coma and death. Sacred thornapple is a datura and shouldn't be eaten or drunk.",
      source: "sharma",
    },
  ],
});
