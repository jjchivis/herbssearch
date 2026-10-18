import { run } from "./lib/populate-herb";

// Trichosanthes Peel (Trichosanthis Pericarpium, gua lou pi), from a 2018 lab
// study (Chu & Zhang), a 2025 rat study of the peel–root herb pair (Zhao et al.)
// and a 2018 review of the whole fruit, Trichosanthis Fructus (Yu et al.; abstract
// only).

run({
  name: "Trichosanthes Peel",
  profile: {
    family: "Cucurbitaceae",
    genus: "Trichosanthes",
    species: "kirilowii",
    partsUsed: "The dried ripe peel (pericarp) of the fruit",
  },
  sources: {
    chu: {
      title: "Trichosanthis Pericarpium Aqueous Extract Protects H9c2 Cardiomyocytes from Hypoxia/Reoxygenation Injury by Regulating PI3K/Akt/NO Pathway",
      author: "Chu D, Zhang Z",
      journal: "Molecules",
      publicationDate: "2018-09-20",
      doi: "10.3390/molecules23102409",
      pmid: "30241309",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6222483/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zhao: {
      title: "Investigating the Trichosanthis Pericarpium - Trichosanthis Radix herbal pair's role in alleviating COPD through gut microbiota",
      author: "Zhao Y, Tan X, Wang T, et al.",
      journal: "PLOS One",
      publicationDate: "2025-08-22",
      doi: "10.1371/journal.pone.0330621",
      pmid: "40845001",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12373185/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yu: {
      title: "Trichosanthis Fructus: botany, traditional uses, phytochemistry and pharmacology",
      author: "Yu X, Tang L, Wu H, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2018-05-26",
      doi: "10.1016/j.jep.2018.05.034",
      pmid: "29842965",
      url: "https://pubmed.ncbi.nlm.nih.gov/29842965/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Gua Lou Pi", type: "TRADITIONAL_NAME" },
    { name: "Gualoupi", type: "TRADITIONAL_NAME" },
    { name: "Trichosanthis Pericarpium", type: "COMMON_NAME" },
    { name: "Trichosanthes Fruit Peel", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called gua lou pi; used for about 2,000 years for heart and blood-vessel diseases such as angina, and for cough with \"lung heat\" and phlegm." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Gua lou pi is the dried ripe peel of the fruit of Trichosanthes kirilowii or a close relative, the same plant whose root is used as snake gourd root (see that page). It has been used for about 2,000 years for heart and blood-vessel diseases, and is used in China for coronary heart disease, angina and heart attack, including as an injection.",
      source: "chu",
    },
    {
      category: "TRADITIONAL",
      summary: "Paired with the root, it's part of the Qing Dynasty formula Bei Mu Gua Lou San, used for cough from \"lung heat\" with phlegm.",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab studies, a water extract of the peel protected heart cells from damage caused by loss and return of oxygen.",
      source: "chu",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with a COPD-like lung disease, the peel–root pair reduced lung damage.",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary: "Studies of the whole fruit (gua lou) found it protected against reduced blood flow to the heart, reduced blood clotting, helped clear phlegm and may help reduce inflammation.",
      source: "yu",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Used in Chinese formulas for cough with phlegm from \"lung heat\". Not tested on its own in trials." },
  ],
});
