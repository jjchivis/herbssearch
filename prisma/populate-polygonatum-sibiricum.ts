import { run } from "./lib/populate-herb";

// Polygonatum Sibiricum (huang jing), from a 2025 review of Polygonatum's
// traditional uses and anticancer research (Zhu et al.) and a 2025 review of
// P. sibiricum polysaccharides in foods (Li et al.).

run({
  name: "Polygonatum Sibiricum",
  profile: {
    family: "Asparagaceae",
    genus: "Polygonatum",
    species: "sibiricum",
    partsUsed: "The underground stem (rhizome)",
  },
  sources: {
    zhu: {
      title: "The antitumor potential of Polygonatum spp.: a narrative review of traditional uses, bioactive metabolites, and multi-targeted mechanisms",
      author: "Zhu M, Chen G, Li J, Yi C, Yuan Y, Liu W, Zhang X",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-11-10",
      doi: "10.3389/fphar.2025.1662839",
      pmid: "41293256",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12640998/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    li: {
      title: "Preparation, Structure, Function, and Application of Dietary Polysaccharides from Polygonatum sibiricum in the Food Industry: A Review",
      author: "Li P, Yao H, Yue H, et al.",
      journal: "Molecules",
      publicationDate: "2025-02-27",
      doi: "10.3390/molecules30051098",
      pmid: "40076321",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11901943/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Huang Jing", type: "TRADITIONAL_NAME" },
    { name: "Huangjing", type: "TRADITIONAL_NAME" },
    { name: "Polygonati Rhizoma", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called huang jing; used for over 2,000 years as a superior tonic for qi and yin and to strengthen the spleen, lungs and kidneys." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Huang jing has been used in China for over 2,000 years as both food and medicine. It's ranked a superior tonic, used to \"tonify qi and nourish yin\" and to strengthen the spleen, lungs and kidneys. Classical texts recommend it for \"deficiency\" conditions, including:\n- Tiredness and weight loss\n- Night sweats\n- A weak immune system\nIt was also used for sores, ulcers and slow-healing wounds.",
      source: "zhu",
    },
    {
      category: "TRADITIONAL",
      summary:
        "An early herbal, the Record of Famous Doctors, describes it as sweet, neutral and non-toxic. The Chinese Pharmacopoeia lists this and two related species as sources of huang jing. Today it's used in Chinese patent medicines, for example for memory problems and diabetes, and in drinks and health foods. It's a close relative of Solomon's seal (Polygonatum odoratum).",
      source: "li",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab studies, saponins from Polygonatum sibiricum killed several kinds of cancer cells, and other Polygonatum compounds boosted immune responses. These haven't been tested in people.",
      source: "zhu",
    },
  ],
  symptoms: [
    { slug: "fatigue", notes: "A traditional Chinese tonic for tiredness and weakness (\"deficiency\"). Not tested in trials." },
  ],
});
