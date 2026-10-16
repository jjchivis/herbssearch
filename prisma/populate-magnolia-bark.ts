import { run } from "./lib/populate-herb";

// Magnolia Bark (Magnolia officinalis cortex, hou po, Cortex Magnoliae), from a
// 2024 review of the Coptis–Magnolia herb pair (Xie et al.) and two 2007 safety
// studies of magnolia bark extract (Liu et al.; Li et al.; abstracts only).

run({
  name: "Magnolia Bark",
  profile: {
    family: "Magnoliaceae",
    genus: "Magnolia",
    species: "officinalis",
    partsUsed: "The dried bark of the stem, root or branches",
  },
  sources: {
    xie: {
      title: "A Comprehensive Review of Coptidis Rhizoma and Magnoliae Officinalis Cortex Drug Pair and Their Chemical Composition, Pharmacological Effects and Pharmacokinetics Analysis",
      author: "Xie Q, Chen J, Yang H, Liang J, Ma R, Guo J, Zeng X",
      journal: "Drug Design, Development and Therapy",
      publicationDate: "2024-10-02",
      doi: "10.2147/DDDT.S477381",
      pmid: "39372674",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11456271/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liuTox: {
      title: "Evaluation of short-term and subchronic toxicity of magnolia bark extract in rats",
      author: "Liu Z, Zhang X, Cui W, et al.",
      journal: "Regulatory Toxicology and Pharmacology",
      publicationDate: "2007-07-04",
      doi: "10.1016/j.yrtph.2007.06.006",
      pmid: "17692445",
      url: "https://pubmed.ncbi.nlm.nih.gov/17692445/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liGeno: {
      title: "Evaluation of the in vitro and in vivo genotoxicity of magnolia bark extract",
      author: "Li N, Song Y, Zhang W, et al.",
      journal: "Regulatory Toxicology and Pharmacology",
      publicationDate: "2007-07-04",
      doi: "10.1016/j.yrtph.2007.06.005",
      pmid: "17692444",
      url: "https://pubmed.ncbi.nlm.nih.gov/17692444/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cortex Magnoliae", type: "COMMON_NAME" },
    { name: "Cortes Magnoliae", type: "COMMON_NAME" },
    { name: "Hou Po", type: "TRADITIONAL_NAME" },
    { name: "Houpo", type: "TRADITIONAL_NAME" },
    { name: "Magnoliae Officinalis Cortex", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called hou po; used to move qi, \"dry dampness\" and ease breathing, and with huang lian (coptis) for dysentery, bloating and stomach pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Magnolia bark, hou po in Chinese, is described as bitter, pungent and warm. It's used to \"move qi\", \"dry dampness\", settle \"rising qi\" and ease asthma. It's often paired with huang lian (coptis root) in classic formulas for:\n- Dysentery and \"damp-heat\" diarrhoea\n- Bloating\n- Stomach pain",
      source: "xie",
    },
    {
      category: "TRADITIONAL",
      summary: "Magnolia bark has been used in Chinese and Japanese medicine, and its extract is now used in dietary supplements and cosmetics.",
      source: "liuTox",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, magnolia bark killed bacteria, slowed tumours, relieved pain, may help reduce inflammation and acted as an antioxidant. With coptis, it reduced diarrhoea and pain in mice.",
      source: "xie",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In rats given magnolia bark extract in their food for up to 90 days, there were no signs of harm at any dose tested.",
      source: "liuTox",
    },
    {
      category: "TOXICITY",
      description: "A magnolia bark extract (mostly the compound magnolol) didn't damage DNA in lab tests with bacteria or in mice.",
      source: "liGeno",
    },
  ],
  symptoms: [
    { slug: "bloating", notes: "A traditional Chinese remedy for bloating and stomach pain, often with coptis. Not tested on its own in trials." },
    { slug: "diarrhea", notes: "Used with coptis for \"damp-heat\" diarrhoea and dysentery; reduced diarrhoea in mice. Not tested in trials." },
    { slug: "asthma-and-wheezing", notes: "Traditionally used to ease asthma. Not tested in trials." },
  ],
});
