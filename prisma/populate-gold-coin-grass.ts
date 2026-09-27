import { run } from "./lib/populate-herb";

// Gold coin grass (Lysimachia christinae, jin qian cao), from verified sources:
// a review of Chinese herbal medicines for gallstones (Chen et al. 2019), a
// review of Chinese herbal medicines for urinary stones (Jiang et al. 2023) and
// a quality study describing its traditional use (LuoRong et al. 2024). Family
// per GBIF / Catalogue of Life. No studies in people were found, and no source
// covered side effects, medicine interactions, pregnancy or breastfeeding, so
// none is stated.

run({
  name: "Gold Coin Grass",
  profile: {
    family: "Primulaceae",
    genus: "Lysimachia",
    species: "christinae",
    nativeRange: "Grows wild in almost every part of China",
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
  },
  synonyms: [
    { name: "Jin Qian Cao", type: "TRADITIONAL_NAME" },
    { name: "Jinqiancao", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Used for gallstones, gallbladder inflammation and kidney stones, and to increase urination. It is the only ingredient in Jin Qian Cao capsules and appears in many Chinese gallstone medicines.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Gold coin grass is a traditional Chinese medicine used for gallstones and inflammation of the gallbladder (cholecystitis).",
      source: "luorong",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Gold coin grass is an ingredient in 8 of 13 common gallstone medicines approved in China, and the only ingredient in Jin Qian Cao capsules.",
      source: "chen",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In China it has been used for thousands of years to prevent and treat kidney stones, to increase urination and to make urine more acidic. Traditional amounts are large: 150 to 200 g of the whole plant a day for more than six months.",
      source: "jiang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, gold coin grass helped shrink existing cholesterol gallstones, increased bile flow, and lowered cholesterol in the bile and blood. In lab tests, its extracts showed antioxidant activity.",
      source: "chen",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab experiments, gold coin grass reduced inflammation and increased bile flow. Researchers linked these effects to 15 of its flavonoids (a group of plant compounds).",
      source: "luorong",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a boiled extract slowed the growth and clumping of kidney-stone crystals.",
      source: "jiang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "No clinical trials of Jin Qian Cao capsules (gold coin grass on its own) have been reported. A 2019 review noted that the safety and effectiveness of Chinese herbal gallstone medicines still need to be confirmed.",
      source: "chen",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "The safety of gold coin grass hasn't been confirmed in studies in people.",
      source: "chen",
    },
    {
      category: "CONTAMINATION",
      description:
        "Several different plants share similar names, including Desmodium styracifolium (guang jin qian cao) and Glechoma longituba (lian qian cao).",
      source: "jiang",
    },
  ],
  symptoms: [
    {
      slug: "gallstones-and-bile-flow",
      notes: "Traditionally used in Chinese medicine for gallstones. It shrank gallstones in mice but hasn't been tested in people.",
    },
    {
      slug: "kidney-stones",
      notes: "Traditionally used in Chinese medicine for kidney stones. Only lab and animal studies have been done.",
    },
  ],
});
