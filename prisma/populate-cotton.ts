import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Cotton",
  profile: {
    family: "Malvaceae",
    genus: "Gossypium",
    species: "hirsutum",
    partsUsed: "The seeds, source of gossypol",
  },
  sources: {
    renner: {
      title: "Systematic Review of Gossypol/AT-101 in Cancer Clinical Trials",
      author: "Renner O, Mayer M, Leischner C, et al.",
      journal: "Pharmaceuticals",
      publicationDate: "2022-01-26",
      pmid: "35215257",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
      doi: "10.3390/ph15020144",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8879263/",
    },
    qian: {
      title: "Gossypol-hypokalaemia interrelationships",
      author: "Qian SZ",
      journal: "International Journal of Andrology",
      publicationDate: "1985-08-01",
      pmid: "3908325",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1111/j.1365-2605.1985.tb00844.x",
      url: "https://doi.org/10.1111/j.1365-2605.1985.tb00844.x",
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
  synonyms: [{ name: "Gossypol", type: "COMMON_NAME" }],
  evidence: [
    { category: "TRADITIONAL", summary: "Gossypol, from cotton seeds, has been used as a male contraceptive and to treat some cancers of the womb lining and ovary.", source: "bajpai" },
    { category: "HUMAN_RESEARCH", summary: "A 2022 review of 17 trials in 759 people with cancer found that low doses of gossypol (30 mg a day or less) taken by mouth were well tolerated, alone or with chemotherapy. Some higher-risk patients seemed to benefit, but the right dose and its full side effects still need to be confirmed.\n\nTechnical detail: AT-101, the R-(−)-enantiomer of gossypol.", source: "renner" },
  ],
  safety: [
    { category: "ADVERSE_EFFECT", description: "About 1% of 8,806 men taking gossypol as a contraceptive developed paralysis from very low blood potassium, and more had low potassium. Most recovered with potassium, but some had repeat attacks for months to years after stopping.", source: "qian" },
    { category: "DOSAGE", description: "There is no typical dose for cancer, and taking gossypol on your own is not safe because it can be toxic.", source: "bajpai" },
  ],
});
