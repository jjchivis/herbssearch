import { run } from "./lib/populate-herb";

// Dense-fruit pittany root, Bai Xian Pi, the root bark of Dictamnus dasycarpus. Sources: a 2021 review, a 2017 confirmed liver-injury case and a 2002 review of hepatitis linked to Chinese herbs. Family per GBIF.

run({
  name: "Dense-Fruit Pittany Root",
  profile: {
    family: "Rutaceae",
    genus: "Dictamnus",
    species: "dasycarpus",
    partsUsed: "The root bark",
  },
  sources: {
    qin: {
      title: "The traditional uses, phytochemistry, pharmacology and toxicology of Dictamnus dasycarpus: a review",
      author: "Qin Y, Quan HF, Zhou XR, et al.",
      journal: "Journal of Pharmacy and Pharmacology",
      publicationDate: "2021-12-07",
      pmid: "34874447",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1093/jpp/rgab141",
      url: "https://doi.org/10.1093/jpp/rgab141",
    },
    huangYX: {
      title: "Dictamni Cortex powder-induced liver injury based on integrated evidence chain",
      author: "Huang YX, Guo YM, Zhou YF, et al.",
      journal: "Zhongguo Zhong Yao Za Zhi",
      publicationDate: "2017-02-01",
      pmid: "28952271",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.19540/j.cnki.cjcmm.2017.0015",
      url: "https://doi.org/10.19540/j.cnki.cjcmm.2017.0015",
    },
    mcrae: {
      title: "Hepatitis associated with Chinese herbs",
      author: "McRae CA, Agarwal K, Mutimer D, et al.",
      journal: "European Journal of Gastroenterology & Hepatology",
      publicationDate: "2002-05-01",
      pmid: "11984156",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1097/00042737-200205000-00015",
      url: "https://doi.org/10.1097/00042737-200205000-00015",
    },
  },
  synonyms: [{ name: "Bai Xian Pi", type: "COMMON_NAME" }, { name: "Dictamni Cortex", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Bai Xian Pi is used to clear heat, remove dampness and dispel wind." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "The root bark of Dictamnus dasycarpus, called Bai Xian Pi, is used in traditional Chinese medicine to clear heat, remove dampness and dispel wind.", source: "qin" },
    { category: "PRECLINICAL", summary: "More than 200 compounds have been found in the plant. Lab and animal studies report effects against inflammation and cancer and in protecting the heart and blood vessels.", source: "qin" },
  ],
  safety: [
    { category: "TOXICITY", description: "Dense-fruit pittany root has been linked to serious liver damage. A 2002 review of hepatitis linked to Chinese herbs found it was taken by 6 patients, including two who died, though the products were mixtures that could have contained other ingredients.", source: "mcrae" },
    { category: "TOXICITY", description: "In 2017, doctors confirmed liver injury caused by the root bark alone in a patient taking 15 g a day of the powder, more than the amount set by the Chinese Pharmacopoeia. Tests showed the product was genuine and free of contaminants.", source: "huangYX" },
  ],
  symptoms: [
    { slug: "liver-safety-warnings", notes: "Linked to serious and sometimes fatal liver damage." },
    { slug: "poisonous-plants", notes: "Has caused confirmed liver injury." },
  ],
});
