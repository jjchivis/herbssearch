import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Dryopteris Crassirhizoma",
  profile: {
    family: "Dryopteridaceae",
    genus: "Dryopteris",
    species: "crassirhizoma",
    partsUsed: "The rhizome (underground stem)",
  },
  sources: {
    bai: {
      title: "Dryopteris crassirhizoma Nakai.: A review of its botany, traditional use, phytochemistry, pharmacological activity, toxicology and pharmacokinetics",
      author: "Bai QX, Zhang ZJ, Tang HP, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-06-28",
      pmid: "38570147",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2024.118109",
      url: "https://doi.org/10.1016/j.jep.2024.118109",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Guan Zhong", type: "COMMON_NAME" }, { name: "Oshida", type: "COMMON_NAME" }, { name: "Gwanjung", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Guan Zhong has long been used for parasites, bleeding and epidemic flu." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "A fern known as Guan Zhong in China, Oshida in Japan and Gwanjung in Korea. It has long been used for parasites, bleeding and epidemic flu.", source: "bai" },
    { category: "PRECLINICAL", summary: "Lab studies report effects against parasites, germs, viruses, cancer, inflammation, high blood sugar and high uric acid.", source: "bai" },
    { category: "PRECLINICAL", summary: "An extract slowed the growth of advanced prostate cancer cells in the lab.", source: "bajpai" },
  ],
  safety: [
    { category: "TOXICITY", description: "A 2024 review notes the fern has particular toxicity concerns that need more study.", source: "bai" },
  ],
});
