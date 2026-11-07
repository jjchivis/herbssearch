import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Mezereon",
  profile: {
    family: "Thymelaeaceae",
    genus: "Daphne",
    species: "mezereum",
    partsUsed: "The bark and fruits (toxic)",
  },
  sources: {
    gorick: {
      title: "Gniditrin is the main diterpenoid constituent in the bark of Daphne mezereum L.",
      author: "Görick C, Melzig MF",
      journal: "Pharmazie",
      publicationDate: "2013-07-01",
      pmid: "23923651",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      url: "https://pubmed.ncbi.nlm.nih.gov/23923651/",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Daphne Mezereum", type: "COMMON_NAME" }],
  evidence: [
    { category: "TRADITIONAL", summary: "Daphne mezereum is widely used as a folk remedy for cancer-like symptoms. Its bark is used to make homeopathic tinctures.", source: "bajpai" },
    { category: "PRECLINICAL", summary: "An extract was strongly active against a type of leukemia in mice. The active compound was identified as mezerein.", source: "bajpai" },
  ],
  safety: [
    { category: "TOXICITY", description: "The bark is known to be toxic because of compounds called diterpene esters. The fruits contain mezerein.", source: "gorick" },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "The bark is toxic because of diterpene esters." },
  ],
});
