import { run } from "./lib/populate-herb";

// Bamboo Leaf / Dan Zhu Ye (Lophatherum gracile, Lophatheri Herba), from a 2024
// review of its research and use as food and medicine (Yao et al.).

run({
  name: "Bamboo Leaf",
  profile: {
    family: "Poaceae",
    genus: "Lophatherum",
    species: "gracile",
    partsUsed: "The dried stems and leaves, usually as tea",
  },
  sources: {
    yao: {
      title: "Research and utilization status of Lophatherum gracile: A medicinal and food homologous plant",
      author: "Yao B, Zhang M, Zhao S, Yu H, Zhang J, Liu D",
      journal: "Chinese Herbal Medicines",
      publicationDate: "2024-07-30",
      doi: "10.1016/j.chmed.2024.07.006",
      pmid: "40256707",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12009075/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dan Zhu Ye", type: "TRADITIONAL_NAME" },
    { name: "Danzhuye", type: "TRADITIONAL_NAME" },
    { name: "Lophatheri Herba", type: "COMMON_NAME" },
    { name: "Lophatherum", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called dan zhu ye; used for feverish heartburn and thirst, painful urination and tongue sores, and drunk as tea in southern China." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Chinese herb sold as \"bamboo leaf\" (dan zhu ye) is the dried stems and leaves of Lophatherum gracile, a bamboo-like grass. It's used as both food and medicine, mainly for:\n- Feverish heartburn and thirst\n- Painful urination\n- Sores on the tongue\nIn southern China it's a popular tea, and it's added to drinks and other foods.",
      source: "yao",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its extracts and flavonoids slowed bacteria and viruses, may help reduce inflammation, protected the liver and heart, lowered blood sugar and slowed some cancer cells. Research on it is limited, and its clinical use hasn't been well studied.",
      source: "yao",
    },
  ],
  symptoms: [
    { slug: "urinary-tract-infections", notes: "Traditionally used for painful urination. Not tested in trials." },
  ],
});
