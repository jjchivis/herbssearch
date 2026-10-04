import { run } from "./lib/populate-herb";

// Sophora Root (Sophora flavescens, ku shen), from a 2026 review of its
// flavonoids (Guo et al.), a 2024 systematic review of its prenylated
// flavonoids (Kong et al.) and a 2022 meta-analysis of a Chinese capsule for
// ulcerative colitis (Hou et al.).

run({
  name: "Sophora Root",
  profile: {
    family: "Fabaceae",
    genus: "Sophora",
    species: "flavescens",
    partsUsed: "The root",
  },
  sources: {
    guo: {
      title: "Chemical composition, antitumor properties and underlying mechanism of Sophora flavescens flavonoids: A review",
      author: "Guo Z, Dong G, Liu X, Gao H, Chen L, Yang H, Wang Z",
      journal: "Chinese Herbal Medicines",
      publicationDate: "2026-02-11",
      doi: "10.1016/j.chmed.2026.02.011",
      pmid: "41971589",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13069629/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kong: {
      title: "Prenylated Flavonoids in Sophora flavescens: A Systematic Review of Their Phytochemistry and Pharmacology",
      author: "Kong S, Liao Q, Liu Y, Luo Y, Fu S, Lin L, Li H",
      journal: "American Journal of Chinese Medicine",
      publicationDate: "2024-06-13",
      doi: "10.1142/S0192415X24500447",
      pmid: "38864547",
      url: "https://pubmed.ncbi.nlm.nih.gov/38864547/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hou: {
      title: "Five-Flavor Sophora flavescens Enteric-Coated Capsules for Ulcerative Colitis: A Systematic Review and Meta-Analysis of Randomized Clinical Trials",
      author: "Hou WB, Sun WJ, Zhang XW, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2022-01-12",
      doi: "10.1155/2022/9633048",
      pmid: "35069773",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8769833/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Ku Shen", type: "TRADITIONAL_NAME" },
    { name: "Shrubby Sophora", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called ku shen; recorded in the Shennong Bencao Jing and used for over 1,700 years for dysentery, jaundice and skin diseases." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sophora root has been used in traditional Chinese medicine for over 1,700 years and was recorded in the Shennong Bencao Jing. It's used to \"clear heat\" and \"dry dampness\", to kill worms and to increase urination, and for dysentery, jaundice and skin diseases.",
      source: "guo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, flavonoids from sophora root have killed microbes and cancer cells, shown antioxidant activity, protected the liver, and lowered blood sugar. Some of its compounds killed several types of cancer cells while sparing normal cells.",
      source: "guo",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review combined 15 trials with 1,194 people with ulcerative colitis, a long-term inflammation of the bowel. A licensed Chinese capsule containing sophora root improved symptoms and bowel examinations slightly more often than standard medicines such as mesalazine, with no more side effects. The trials were few and of low quality, so the results should be treated with caution.\n\nTechnical detail: clinical effective rate RR 1.12 (95% CI 1.05–1.20; 8 trials, 729 participants; low-quality evidence).",
      source: "hou",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "How sophora root's main compounds are processed by the body, and how toxic they are, hasn't been studied systematically.",
      source: "kong",
    },
  ],
});
