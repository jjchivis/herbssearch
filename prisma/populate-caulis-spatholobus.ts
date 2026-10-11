import { run } from "./lib/populate-herb";

// Caulis Spatholobus (Spatholobus suberectus vine stem, ji xue teng), from a 2022
// review of its pharmacology in cancer (Zhang et al.) and two 2023 reviews of its
// traditional uses and pharmacology (Pan et al.; Huang et al.; abstracts only).

run({
  name: "Caulis Spatholobus",
  profile: {
    family: "Fabaceae",
    genus: "Spatholobus",
    species: "suberectus",
    nativeRange: "China and parts of Southeast Asia",
    partsUsed: "The dried, woody vine stem",
  },
  sources: {
    zhang: {
      title: "A Review of the Pharmacological Potential of Spatholobus suberectus Dunn on Cancer",
      author: "Zhang F, Ganesan K, Liu Q, Chen J",
      journal: "Cells",
      publicationDate: "2022-09-15",
      doi: "10.3390/cells11182885",
      pmid: "36139460",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9497142/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pan: {
      title: "Spatholobi caulis: A systematic review of its traditional uses, chemical constituents, biological activities and clinical applications",
      author: "Pan Y, Luo X, Gong P",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2023-06-29",
      doi: "10.1016/j.jep.2023.116854",
      pmid: "37393029",
      url: "https://pubmed.ncbi.nlm.nih.gov/37393029/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    huang: {
      title: "A comprehensive review: Botany, phytochemistry, traditional uses, pharmacology, and toxicology of Spatholobus suberectus vine stems",
      author: "Huang X, Fei Q, Yu S, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2023-04-14",
      doi: "10.1016/j.jep.2023.116500",
      pmid: "37062528",
      url: "https://pubmed.ncbi.nlm.nih.gov/37062528/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ji Xue Teng", type: "TRADITIONAL_NAME" },
    { name: "Jixueteng", type: "TRADITIONAL_NAME" },
    { name: "Spatholobi Caulis", type: "COMMON_NAME" },
    { name: "Chicken Blood Vine", type: "COMMON_NAME" },
    { name: "Spatholobus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called ji xue teng (\"chicken blood vine\"); used for nearly 1,000 years for anemia, irregular menstruation and rheumatic joint pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Chinese it's called ji xue teng, meaning \"chicken blood vine\", because a blood-red sap flows from the stem when it's cut. It has been used in Chinese medicine for nearly 1,000 years for anemia, rheumatism and irregular periods.",
      source: "zhang",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Chinese medicine uses the vine stem to \"promote blood circulation and nourish the blood\", regulate menstruation and relieve pain. It's traditionally used for:\n- Rheumatic joint pain\n- Numbness and paralysis\n- \"Blood deficiency\"\n- Irregular periods and other women's health problems",
      source: "huang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts and compounds from the stem have acted as antioxidants, lowered blood sugar, may help reduce inflammation, helped the body make blood cells, protected nerves and killed microbes. Several compounds killed or slowed cancer cells, especially breast cancer cells. These haven't been confirmed in people.",
      source: "zhang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Clinical reports from China describe its use for low white blood cell counts, aplastic anemia (when the bone marrow stops making enough blood cells) and endometriosis, usually as part of herbal formulas. The review summarizing them didn't rate how strong this evidence is.",
      source: "pan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Research on its toxicity is limited.",
      source: "pan",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Traditionally used in Chinese medicine for rheumatic joint pain. Not tested on its own in trials." },
    { slug: "menstrual-discomfort", notes: "Traditionally used to regulate menstruation and for other women's health problems. Not tested on its own in trials." },
  ],
});
