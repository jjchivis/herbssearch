import { run } from "./lib/populate-herb";

// Shan Zha (Crataegus pinnatifida fruit, Chinese hawthorn, Fructus Crataegi),
// from a 2022 review of Chinese hawthorn (Zhang et al.; abstract only) and a 2023
// review of the hawthorn genus, including safety (Cui et al.; abstract only).

run({
  name: "Shan Zha",
  profile: {
    family: "Rosaceae",
    genus: "Crataegus",
    species: "pinnatifida",
    nativeRange: "China",
    partsUsed: "The fruit, usually dried and sliced; also eaten as food",
  },
  sources: {
    zhang: {
      title: "Botany, traditional uses, phytochemistry and pharmacological activity of Crataegus pinnatifida (Chinese hawthorn): a review",
      author: "Zhang SY, Sun XL, Yang XL, Shi PL, Xu LC, Guo QM",
      journal: "Journal of Pharmacy and Pharmacology",
      publicationDate: "2022-11-01",
      doi: "10.1093/jpp/rgac050",
      pmid: "36179124",
      url: "https://pubmed.ncbi.nlm.nih.gov/36179124/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cui: {
      title: "Traditional uses, phytochemistry, pharmacology, and safety concerns of hawthorn (Crataegus genus): A comprehensive review",
      author: "Cui M, Cheng L, Zhou Z, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2023-10-01",
      doi: "10.1016/j.jep.2023.117229",
      pmid: "37788786",
      url: "https://pubmed.ncbi.nlm.nih.gov/37788786/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shanzha", type: "TRADITIONAL_NAME" },
    { name: "Chinese Hawthorn", type: "COMMON_NAME" },
    { name: "Fructus Crataegi", type: "COMMON_NAME" },
    { name: "Fructose Crataegi", type: "COMMON_NAME" },
    { name: "Crataegi Fructus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called shan zha; used for over 2,000 years as food and medicine for indigestion (especially after meat), high blood fats and \"blood stasis\"." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chinese hawthorn has been used in China for over 2,000 years as both food and medicine. The fruit is traditionally used for:\n- Indigestion, especially after eating too much meat\n- High blood fats\n- \"Blood stasis\" and a tingling feeling in the heart\n- Sores",
      source: "zhang",
    },
    {
      category: "TRADITIONAL",
      summary: "Hawthorns grow across Asia, Europe and the Americas, and have been used for thousands of years to strengthen digestion and improve blood circulation, and also for painful periods and weak bones. The site's Hawthorn page covers the European species.",
      source: "cui",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, Chinese hawthorn lowered blood fats, protected the heart, reduced blood clotting and hardening of the arteries, may help reduce inflammation, and protected nerves. These are lab and animal results.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "A 2023 review of the hawthorn group found no evidence of toxicity in the studies it covered.",
      source: "cui",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "A traditional Chinese remedy for indigestion, especially after rich or meaty meals. Not tested on its own in trials." },
    { slug: "high-cholesterol", notes: "Traditionally used for high blood fats, and lowered them in animal studies. Not confirmed in people." },
  ],
});
