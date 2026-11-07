import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Vernonia Amygdalina",
  profile: {
    family: "Asteraceae",
    genus: "Vernonia",
    species: "amygdalina",
    partsUsed: "The leaves",
  },
  sources: {
    fu: {
      title: "A Systematic Review of Phytochemistry, Pharmacology, and Applications of Vernonia Amygdalina Del.",
      author: "Fu T, Wu F, Shen D, et al.",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2025-12-01",
      pmid: "41138269",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
      doi: "10.1002/cbdv.202502034",
      url: "https://doi.org/10.1002/cbdv.202502034",
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
  traditions: [
    { slug: "african-traditional-medicine", notes: "Used in folk medicine for cancers and malaria." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "A plant from West Africa, recently grown in southern China too. In African and Southeast Asian folk medicine it is used for breast, nose-and-throat, prostate and lung cancers, and for malaria.", source: "fu" },
    { category: "PRECLINICAL", summary: "Lab and animal studies report effects against tumors, inflammation, oxidation and high blood sugar.", source: "fu" },
    { category: "PRECLINICAL", summary: "Its extract slowed the growth of prostate cancer cells in the lab, causing DNA damage and cell death.", source: "bajpai" },
  ],
});
