import { run } from "./lib/populate-herb";

// Lindera Root (Lindera aggregata, wu yao), from a 2023 review of its chemistry
// and pharmacology (Lv et al.).

run({
  name: "Lindera Root",
  profile: {
    family: "Lauraceae",
    genus: "Lindera",
    species: "aggregata",
    nativeRange: "Asia",
    partsUsed: "The roots; the young leaves are drunk as a tea",
  },
  sources: {
    lv: {
      title: "A review on the chemical constituents and pharmacological efficacies of Lindera aggregata (Sims) Kosterm.",
      author: "Lv Y, Zou Y, Zhang X, Liu B, Peng X, Chu C",
      journal: "Frontiers in Nutrition",
      publicationDate: "2023-01-16",
      doi: "10.3389/fnut.2022.1071276",
      pmid: "36726818",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9884700/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wu Yao", type: "TRADITIONAL_NAME" },
    { name: "Wuyao", type: "TRADITIONAL_NAME" },
    { name: "Linderae Radix", type: "COMMON_NAME" },
    { name: "Lindera strychnifolia", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called wu yao; the roots and leaves have been used for thousands of years as medicine and food, for digestive, urinary and inflammatory problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Lindera's roots and leaves have been used in China for thousands of years as medicine and food. The roots are used for problems of the digestive tract and urinary system, inflammation and metabolism, and are traditionally said to protect the liver and kidneys. The young leaves are drunk as a tea or taken as a supplement.",
      source: "lv",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, lindera lowered blood fats, protected the liver and kidneys, may help reduce inflammation and pain, acted as an antioxidant, slowed some cancer cells and expelled worms. These haven't been confirmed in people.",
      source: "lv",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "The root is traditionally used for digestive problems. Not tested in trials." },
  ],
});
