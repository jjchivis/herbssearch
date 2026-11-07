import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Smilax China",
  profile: {
    family: "Smilacaceae",
    genus: "Smilax",
    species: "china",
    partsUsed: "The rhizome (underground stem)",
  },
  sources: {
    wang: {
      title: "Smilax china L.: A review of its botany, ethnopharmacology, phytochemistry, pharmacological activities, actual and potential applications",
      author: "Wang M, Bai QX, Zheng XX, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-01-10",
      pmid: "37541403",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2023.116992",
      url: "https://doi.org/10.1016/j.jep.2023.116992",
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
  synonyms: [{ name: "Baqia", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used for inflammatory conditions, especially pelvic inflammation." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "Known in China as Baqia, it is widely used in traditional Chinese medicine for inflammatory conditions, especially pelvic inflammation.", source: "wang" },
    { category: "PRECLINICAL", summary: "Lab and animal studies report effects against inflammation, cancer, diabetes, obesity, high uric acid, high blood pressure and bacteria, and in helping skin wounds heal. A 2024 review said some traditional uses still need to be confirmed.", source: "wang" },
    { category: "PRECLINICAL", summary: "A flavonoid from the rhizome killed several types of cancer cells in the lab.", source: "bajpai" },
  ],
});
