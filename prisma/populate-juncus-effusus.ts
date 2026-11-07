import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Juncus Effusus",
  profile: {
    family: "Juncaceae",
    genus: "Juncus",
    species: "effusus",
    partsUsed: "The pith (inner stem)",
  },
  sources: {
    hu: {
      title: "Estrogenic and anti-neutrophilic inflammatory phenanthrenes from Juncus effusus L.",
      author: "Hu HC, Tsai YH, Chuang YC, et al.",
      journal: "Natural Product Research",
      publicationDate: "2022-06-01",
      pmid: "34498976",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1080/14786419.2021.1954644",
      url: "https://doi.org/10.1080/14786419.2021.1954644",
    },
    liX: {
      title: "Dihydrophenanthrenes from Juncus effusus as Inhibitors of OAT1 and OAT3",
      author: "Li X, Qiao Y, Wang X, et al.",
      journal: "Journal of Natural Products",
      publicationDate: "2019-04-26",
      pmid: "30892891",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1021/acs.jnatprod.8b00888",
      url: "https://doi.org/10.1021/acs.jnatprod.8b00888",
    },
    wangYG: {
      title: "Phenanthrenes from Juncus effusus with anxiolytic and sedative activities",
      author: "Wang YG, Wang YL, Zhai HF, et al.",
      journal: "Natural Product Research",
      publicationDate: "2012-01-01",
      pmid: "22017742",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1080/14786419.2011.561491",
      url: "https://doi.org/10.1080/14786419.2011.561491",
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
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used for sleeplessness, ringing in the ears and swelling." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "A rush used in traditional Chinese medicine to relieve sleeplessness, prevent ringing in the ears and reduce swelling by increasing urine. The pith is used for painful urination.", source: "hu" },
    { category: "PRECLINICAL", summary: "Two compounds from the plant showed calming effects in experiments, including effects that may cause sleepiness.", source: "wangYG" },
    { category: "PRECLINICAL", summary: "Dehydroeffusol, a compound from the plant, showed anticancer effects in the lab and in animals.", source: "bajpai" },
  ],
  symptoms: [
    { slug: "occasional-sleeplessness", notes: "Traditionally used for sleeplessness; its compounds were calming in experiments, not tested in people." },
  ],
});
