import { run } from "./lib/populate-herb";

// Plum Flower (Prunus mume flower, Mume Flos), from a 2025 analysis of 50 edible
// flowers from Yunnan (Tao et al.) and a 2026 mouse study of Mume Flos in fatty
// liver disease (Cui et al.; abstract only), a 2025 study of a Chinese formula
// containing it (Wang et al.), a 2024 aromatherapy trial protocol (Li et al.)
// and a 2024 lab study on skin cells (Chen et al.).

run({
  name: "Plum Flower",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "mume",
    partsUsed: "The flowers, eaten or used as a herbal medicine (Mume Flos)",
  },
  sources: {
    tao: {
      title: "Comprehensive Analysis of 50 Edible Flowers From Yunnan Province: Active Components, Antioxidant Capacity, Tyrosinase Inhibitory Activity and Microbiological Safety",
      author: "Tao Y, Zhang X, Li Z, Tian S, Li L, Zhou X",
      journal: "Food Science & Nutrition",
      publicationDate: "2025-07-21",
      doi: "10.1002/fsn3.70666",
      pmid: "40697708",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12279552/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cui: {
      title: "Mume Flos ameliorates MASLD-associated cognitive impairment by attenuating IL-17/NF-κB-mediated metabolic neuroinflammation",
      author: "Cui S, Wang Y, Zhang Q, et al.",
      journal: "Metabolic Brain Disease",
      publicationDate: "2026-06-05",
      doi: "10.1007/s11011-026-01883-z",
      pmid: "42247178",
      url: "https://pubmed.ncbi.nlm.nih.gov/42247178/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Integrative network pharmacology, transcriptomics, and proteomics reveal the material basis and mechanism of the Shen Qing Weichang Formula against gastric cancer",
      author: "Wang Y, Sun X, Ren M, et al.",
      journal: "Chinese Medicine",
      publicationDate: "2025-03-29",
      doi: "10.1186/s13020-025-01091-4",
      pmid: "40155922",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11954191/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    li: {
      title: "The effect of aromatherapy on post-stroke depression: study protocol for a pilot randomized controlled trial",
      author: "Li Y, Hu Z, Zhou K, et al.",
      journal: "Frontiers in Psychiatry",
      publicationDate: "2024-07-25",
      doi: "10.3389/fpsyt.2024.1428028",
      pmid: "39119078",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11306873/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chen: {
      title: "Plum blossom low molecular weight polypeptide protects HaCaT cells against UVB-induced oxidative damage in vitro and underlying mechanism",
      author: "Chen Z, Cao P, Zhu T, Yan C, Zheng Z, Yao H",
      journal: "Skin Research and Technology",
      publicationDate: "2024-02-01",
      doi: "10.1111/srt.13582",
      pmid: "38282275",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10823150/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mume Flos", type: "COMMON_NAME" },
    { name: "Plum Blossom", type: "COMMON_NAME" },
    { name: "Japanese Apricot Flower", type: "COMMON_NAME" },
    { name: "Prunus mume", type: "COMMON_NAME" },
    { name: "Bai Mei Hua", type: "TRADITIONAL_NAME" },
    { name: "Meihua", type: "TRADITIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Plum flowers from Prunus mume are eaten as an edible flower in Yunnan, China.",
      source: "tao",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2025 analysis of 50 edible flowers from Yunnan, China, plum flowers had the highest polyphenol content and were among the richest in flavonoids, both antioxidants.",
      source: "tao",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice fed a high-fat diet, Mume Flos reduced fat build-up in the liver, improved liver tests and inflammation, and eased anxiety-like behaviour while improving learning and memory. This hasn't been tested in people.",
      source: "cui",
    },
    {
      category: "TRADITIONAL",
      summary: "In Chinese medicine, plum flower (bai mei hua) is an ingredient of herbal formulas. For example, it's one of seven herbs in Shen Qing Weichang Formula, a modern formula meant to \"regulate qi\" and strengthen the spleen, studied for stomach cancer.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary: "In animal research, flavonoids from plum flower had antidepressant-like effects and raised serotonin, and acted as antioxidants that protect nerve cells. Because of this, it was included in a Chinese herbal aromatherapy blend being tested for depression after stroke; that trial's results haven't been published.",
      source: "li",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2024 lab study, small proteins (polypeptides) from plum blossom protected skin cells from damage caused by UVB light. The study's lead author works for a company, Huzhou Jiahen Industrial.",
      source: "chen",
    },
  ],
  symptoms: [
    { slug: "fatty-liver", notes: "Reduced fat build-up in the liver in mice on a high-fat diet. Not tested in people." },
  ],
});
