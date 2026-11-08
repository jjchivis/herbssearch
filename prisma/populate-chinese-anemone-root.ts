import { run } from "./lib/populate-herb";

// Chinese anemone root = Bai Tou Weng, the dried root of Pulsatilla chinensis
// (identified by the site owner via TCMIO). Sources: the TCMIO herb guide
// (traditional use, protoanemonin, pregnancy), two meta-analyses of trials of
// Baitouweng decoction (a multi-herb formula), and a 2022 review of anticancer
// research. Family per GBIF. (An earlier version of this page wrongly covered
// Anemone hupehensis.)

run({
  name: "Chinese Anemone Root",
  profile: {
    family: "Ranunculaceae",
    genus: "Pulsatilla",
    species: "chinensis",
    partsUsed: "The dried root",
  },
  sources: {
    tcmio: {
      title: "Bai Tou Weng (Pulsatilla chinensis / Chinese Anemone Root) in Traditional Chinese Medicine",
      organization: "TCMIO",
      publicationDate: "2026-07-31",
      url: "https://www.tcmio.com/herbs/bai-tou-weng",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    xie: {
      title: "Efficacy and safety of BaitouWeng decoction for ulcerative colitis: A meta-analysis of randomized and controlled trials",
      author: "Xie Q, Yu W, He Y, et al.",
      journal: "Medicine",
      publicationDate: "2024-07-05",
      doi: "10.1097/MD.0000000000038704",
      pmid: "38968514",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11224827/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    wu: {
      title: "Clinical Evidence and Potential Mechanisms in Treating Radiation Enteritis with Modified Baitouweng Decoction",
      author: "Wu Z, Yin B, Wang Z, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2023-01-30",
      doi: "10.1155/2023/9731315",
      pmid: "36756038",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9902141/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    liH: {
      title: "Pulsatilla chinensis (Bge.) Regel: A Systematic Review on Anticancer of Its Pharmacological Properties, Clinical Researches and Pharmacokinetic Studies",
      author: "Li H, Wang L, Zhang X, et al.",
      journal: "Frontiers in Oncology",
      publicationDate: "2022-06-23",
      doi: "10.3389/fonc.2022.888075",
      pmid: "35814470",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9259996/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Bai Tou Weng", type: "COMMON_NAME" },
    { name: "Pulsatilla Root", type: "COMMON_NAME" },
    { name: "Radix Pulsatillae", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Considered the most important single herb for dysentery, especially with blood and pus in the stool.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chinese anemone root, Bai Tou Weng, is the dried root of Pulsatilla chinensis. In traditional Chinese medicine it is considered the most important single herb for dysentery, especially with blood and pus in the stool, and is used to clear heat and cool the blood.",
      source: "tcmio",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Baitouweng decoction is a traditional formula built around this root together with other herbs. A 2024 review of 24 trials in 2,131 people with ulcerative colitis found it worked better than standard Western medicines in those trials and lowered signs of inflammation. The authors said better-designed, blinded, placebo-controlled trials are still needed. Because it is a formula, the root's own effect is unclear.",
      source: "xie",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 17 trials in 1,611 people found a modified Baitouweng decoction may help bowel inflammation caused by radiation treatment, but the quality of the evidence was low and its safety still needs confirming.",
      source: "wu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Many lab and animal studies show compounds from the root slowing the growth of different cancer cells and triggering their death.",
      source: "liH",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The fresh plant and root contain protoanemonin, a strong irritant. Touching it can cause redness, blistering and itching, and eating the fresh herb can cause nausea, vomiting, stomach pain and diarrhea. Drying and boiling turn it into a much less toxic compound, which is why only the dried root, boiled into a tea, is used. Never use the fresh herb.",
      source: "tcmio",
    },
    {
      category: "PREGNANCY",
      description: "It is not recommended during pregnancy.",
      source: "tcmio",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "The main traditional Chinese herb for dysentery; a formula containing it helped ulcerative colitis in trials." },
  ],
});
