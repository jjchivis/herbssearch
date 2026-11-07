import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Adlay",
  profile: {
    family: "Poaceae",
    genus: "Coix",
    species: "lacryma-jobi",
    partsUsed: "The seeds",
  },
  sources: {
    weng: {
      title: "Adlay, an ancient functional plant with nutritional quality, improves human health",
      author: "Weng WF, Peng Y, Pan X, et al.",
      journal: "Frontiers in Nutrition",
      publicationDate: "2022-12-22",
      pmid: "36618703",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3389/fnut.2022.1019375",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9815450/",
    },
    huang: {
      title: "Kanglaite injection plus platinum-based chemotherapy for stage III/IV non-small cell lung cancer: A meta-analysis of 27 RCTs",
      author: "Huang X, Wang J, Lin W, et al.",
      journal: "Phytomedicine",
      publicationDate: "2020-02-01",
      pmid: "31926475",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
      doi: "10.1016/j.phymed.2019.153154",
      url: "https://doi.org/10.1016/j.phymed.2019.153154",
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
  synonyms: [{ name: "Coix Seed", type: "COMMON_NAME" }, { name: "Kanglaite", type: "COMMON_NAME" }],
  evidence: [
    { category: "TRADITIONAL", summary: "Adlay is a grain related to corn, from tropical Asia and Africa, used both as food and as medicine. Its seeds are a traditional Chinese medicine.", source: "weng" },
    { category: "HUMAN_RESEARCH", summary: "Kanglaite is an injected cancer medicine made from adlay seeds, used in China. A 2020 review of 27 trials in 2,243 people with advanced lung cancer found that adding it to chemotherapy improved tumor response, 1-year survival and quality of life, and cut severe chemotherapy side effects by 59%. The quality of evidence was moderate to low.", source: "huang" },
    { category: "PRECLINICAL", summary: "In mice, an acid fraction of the seeds slowed the growth of a transplanted tumor.", source: "bajpai" },
  ],
});
