import { run } from "./lib/populate-herb";

// Ju Hua (Chrysanthemum morifolium flower), from a 2025 review of it and wild
// chrysanthemum (Liang et al.) and a 2024 review of its history and uses (Liu et
// al.; abstract only).

run({
  name: "Ju Hua",
  profile: {
    family: "Asteraceae",
    genus: "Chrysanthemum",
    species: "morifolium",
    nativeRange: "China",
    partsUsed: "The dried flower heads, usually as tea; also in decoctions and patent medicines, or as a wash or paste on the skin",
  },
  sources: {
    liang: {
      title: "Exploring the antimicrobial, anti-inflammatory, antioxidant, and immunomodulatory properties of Chrysanthemum morifolium and Chrysanthemum indicum: a narrow review",
      author: "Liang Y, Liu T, Wang D, Liu Q",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-03-19",
      doi: "10.3389/fphar.2025.1538311",
      pmid: "40176916",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11963160/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liu: {
      title: "Chrysanthemum morifolium as a traditional herb: A review of historical development, classification, phytochemistry, pharmacology and application",
      author: "Liu Y, Lu C, Zhou J, Zhou F, Gui A, Chu H, Shao Q",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-04-14",
      doi: "10.1016/j.jep.2024.118198",
      pmid: "38621465",
      url: "https://pubmed.ncbi.nlm.nih.gov/38621465/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Juhua", type: "TRADITIONAL_NAME" },
    { name: "Chrysanthemum", type: "COMMON_NAME" },
    { name: "Chrysanthemum Flower", type: "COMMON_NAME" },
    { name: "Chrysanthemum Tea", type: "COMMON_NAME" },
    { name: "Chrysanthemi Flos", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called ju hua; recorded since the Shennong Herbal Classic. Used to \"disperse wind-heat\", calm the liver, brighten the eyes, and for dizziness and colds." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ju hua comes from China, where it has been used for more than 3,000 years, first as a food and tea and later as a medicine. It's still drunk as a flower tea for health and is used for colds and inflammation.",
      source: "liu",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Shennong Herbal Classic, the earliest record, used it mainly for dizziness and pain caused by \"wind\". Later texts say it benefits the liver, and a Qing Dynasty doctor wrote that drinking it for a long time strengthens the body and promotes long life. Today the Chinese Pharmacopoeia lists it to:\n- \"Disperse wind and clear heat\", as in colds\n- Calm the liver and \"brighten the eyes\"\n- \"Clear toxins\"\nIt's an ingredient in Chinese patent medicines for colds and coughs, pain and eyesight.",
      source: "liang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, ju hua extracts and compounds have killed or slowed bacteria and viruses, may help reduce inflammation, acted as antioxidants and affected the immune system. These haven't been confirmed in people.",
      source: "liang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review found no clinical studies of ju hua on its own. In Chinese medicine it's usually given as part of a formula with other herbs, which makes single-herb trials hard to do.",
      source: "liang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In rat studies, a single large dose of ju hua extract and daily doses for 26 weeks caused no signs of harm. These were animal tests, not studies in people. The Chinese Pharmacopoeia lists a dose of 5 to 10 g.",
      source: "liang",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Used in Chinese medicine and patent medicines for colds (\"wind-heat\"). Not tested on its own in trials." },
    { slug: "headache", notes: "Traditionally used for dizziness and pain caused by \"wind\". Not tested on its own in trials." },
  ],
});
