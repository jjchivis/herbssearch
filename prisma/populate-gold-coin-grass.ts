import { run } from "./lib/populate-herb";

// Gold coin grass: the name covers two plants used in traditional Chinese
// medicine, Lysimachia christinae (jin qian cao) and Desmodium styracifolium
// (guang jin qian cao). Every entry names which plant it's about.
// Sources: a review of Chinese herbal medicines for gallstones (Chen et al.
// 2019), a review for urinary stones (Jiang et al. 2023), a quality study
// describing Lysimachia's traditional use (LuoRong et al. 2024), a review of
// Desmodium styracifolium (Opryshko et al. 2024) and a phase 3 trial of a
// Desmodium extract for ureteral stones (Wang et al. 2026). Families per GBIF /
// Catalogue of Life. No source covered pregnancy, breastfeeding or medicine
// interactions for either plant, so none is stated.

run({
  name: "Gold Coin Grass",
  profile: {
    family: "Primulaceae (the primrose family) for Lysimachia; Fabaceae (the pea and bean family) for Desmodium",
    genus: "Lysimachia / Desmodium",
    species: "christinae / styracifolium",
    nativeRange:
      "Lysimachia christinae grows wild in almost every part of China. Desmodium styracifolium grows in southern China and in parts of South and Southeast Asia.",
    partsUsed: "The whole plant",
  },
  sources: {
    chen: {
      title: "Mechanisms Underlying the Prevention and Treatment of Cholelithiasis Using Traditional Chinese Medicine",
      author: "Chen Q, Zhang Y, Li S, Chen S, Lin X, Li C, Asakawa T",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2019-06-17",
      doi: "10.1155/2019/2536452",
      pmid: "31316569",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6601506/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jiang: {
      title: "Therapeutic effects of Chinese herbal medicines for treatment of urolithiasis: A review",
      author: "Jiang C, Wang L, Wang Y, Xu R, Yang H, Peng J",
      journal: "Chinese Herbal Medicines",
      organization: "Chinese Herbal Medicines",
      publicationDate: "2023-09-27",
      doi: "10.1016/j.chmed.2023.09.001",
      pmid: "38094012",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10715892/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    luorong: {
      title: "Comprehensive quality evaluation of Lysimachia christinae Hance via fingerprint, spectrum-effect relationship, and quantitative analyses of multiple components by single marker",
      author: "LuoRong Q, Tan LH, Yu B, Wu Y, Luo J, Cao WG, Li J, Chen H, Zhang D",
      journal: "Phytochemical Analysis",
      organization: "Phytochemical Analysis",
      publicationDate: "2024-05-21",
      doi: "10.1002/pca.3394",
      pmid: "38772567",
      url: "https://pubmed.ncbi.nlm.nih.gov/38772567/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    opryshko: {
      title: "Desmodium styracifolium: Botanical and ethnopharmacological insights, phytochemical investigations, and prospects in pharmacology and pharmacotherapy",
      author: "Opryshko V, Prokhach A, Akimov O, Riabushko M, Kostenko H, Kostenko V, Mishchenko A, Solovyova N, Kostenko V",
      journal: "Heliyon",
      organization: "Heliyon",
      publicationDate: "2024-01-20",
      doi: "10.1016/j.heliyon.2024.e25058",
      pmid: "38317880",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10838797/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Desmodium styracifolium Total Flavone Capsules for Urolithiasis: A Phase 3 Randomized Clinical Trial",
      author: "Wang D, Zhang S, Zhao W, Chen S, Zhou W, Xue Y, He Z, Yang M, Chen L, Zhu S",
      journal: "JAMA Network Open",
      organization: "JAMA Network Open",
      publicationDate: "2026-09-01",
      doi: "10.1001/jamanetworkopen.2026.32874",
      pmid: "42714908",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13559602/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jin Qian Cao", type: "TRADITIONAL_NAME" },
    { name: "Jinqiancao", type: "TRADITIONAL_NAME" },
    { name: "Guang Jin Qian Cao", type: "TRADITIONAL_NAME" },
    { name: "Guangjinqiancao", type: "TRADITIONAL_NAME" },
    { name: "Guangdong Jin Qian Cao", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes:
        "Both plants are used for gallstones and urinary stones. Lysimachia christinae is the only ingredient in Jin Qian Cao capsules. Desmodium styracifolium is listed in the Chinese Pharmacopoeia and is also used for poor bile flow, hepatitis and jaundice.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Gold coin grass is a name used for two different plants in traditional Chinese medicine:\n- Lysimachia christinae (jin qian cao)\n- Desmodium styracifolium (guang jin qian cao, \"Guangdong gold coin grass\")\nBoth are used for gallstones and urinary stones. Research on one plant doesn't necessarily apply to the other.",
      source: "jiang",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Lysimachia christinae is used for gallstones and inflammation of the gallbladder (cholecystitis). It is an ingredient in 8 of 13 common gallstone medicines approved in China, and the only ingredient in Jin Qian Cao capsules.",
      source: "chen",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In China, Lysimachia christinae has been used for thousands of years to prevent and treat kidney stones, to increase urination and to make urine more acidic. Traditional amounts are large: 150 to 200 g of the whole plant a day for more than six months.",
      source: "jiang",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Desmodium styracifolium is listed in the Chinese Pharmacopoeia. It is traditionally used for urinary stones, bladder problems, slow and painful urination, poor bile flow, hepatitis, jaundice and gallbladder inflammation. The whole plant is boiled into a tea (a decoction), for example 24 to 60 g for urinary stones.",
      source: "opryshko",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, Lysimachia christinae helped shrink existing cholesterol gallstones, increased bile flow, and lowered cholesterol in the bile and blood. In lab tests, its extracts showed antioxidant activity.",
      source: "chen",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab experiments, Lysimachia christinae reduced inflammation and increased bile flow. Researchers linked these effects to 15 of its flavonoids (a group of plant compounds).",
      source: "luorong",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a boiled extract of Lysimachia christinae slowed the growth and clumping of kidney-stone crystals.",
      source: "jiang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, Desmodium styracifolium reduced the buildup of stone-forming minerals in the urinary tract and made urine less acidic. Experiments also found it helped dissolve gallstones, increased bile flow and protected the liver, including from acetaminophen damage and from fat buildup on a high-fat diet.\n\nTechnical detail: effects attributed mainly to the flavonoid schaftoside, acting on liver X receptor α and the farnesoid X receptor (FXR); antioxidant and anti-inflammatory activity; urine alkalinization.",
      source: "opryshko",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2026 trial at 34 hospitals in China, 606 adults with small stones in the ureter (the tube from the kidney to the bladder) took a Desmodium styracifolium extract or a placebo 3 times a day for 28 days, alongside their usual medicines. By day 28, 44.6% of the extract group had passed their stone, compared with 33.8% of the placebo group. Side effects were about as common in both groups. Because the trial was only done in China, the authors say the results may not apply everywhere.\n\nTechnical detail: phase 3, double-blind, randomized 3:1; total flavone capsules (Guang Jing), 0.6 g three times daily; stone passage confirmed by CT, RR 1.32 (95% CI 1.03 to 1.69), absolute difference 10.9 percentage points; stones 5 to 10 mm; no significant difference by day 14; adverse events 19.3% vs 18.2%; ChiCTR-IIR-17013275.",
      source: "wang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "China's medicines regulator has approved a capsule made from Desmodium styracifolium flavonoids.",
      source: "opryshko",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "No clinical trials of Jin Qian Cao capsules (Lysimachia christinae on its own) have been reported. A 2019 review noted that the safety and effectiveness of Chinese herbal gallstone medicines still need to be confirmed.",
      source: "chen",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "The safety of Lysimachia christinae hasn't been confirmed in studies in people.",
      source: "chen",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In a 28-day trial of a Desmodium styracifolium extract, side effects were about as common as with placebo (19% vs 18% of people).",
      source: "wang",
    },
    {
      category: "CONTAMINATION",
      description:
        "Several different plants are sold under similar names, including Lysimachia christinae (jin qian cao), Desmodium styracifolium (guang jin qian cao) and Glechoma longituba (lian qian cao).",
      source: "jiang",
    },
  ],
  symptoms: [
    {
      slug: "gallstones-and-bile-flow",
      notes: "Both plants are traditionally used in Chinese medicine for gallstones. They have been studied for this only in the lab and in animals.",
    },
    {
      slug: "kidney-stones",
      notes: "Traditionally used for urinary stones. In a 2026 trial, a Desmodium styracifolium extract helped more people pass small ureter stones than placebo (45% vs 34%).",
    },
    {
      slug: "liver-disease",
      notes: "Desmodium styracifolium is traditionally used for hepatitis and jaundice. Its effects on the liver have only been studied in the lab and in animals.",
    },
  ],
});
