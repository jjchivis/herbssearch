import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Cannabis",
  profile: {
    family: "Cannabaceae",
    genus: "Cannabis",
    species: "sativa",
    partsUsed: "The flowers, leaves and their extracts",
  },
  sources: {
    nccih: {
      title: "Cannabis (Marijuana) and Cannabinoids: What You Need To Know",
      organization: "National Center for Complementary and Integrative Health (NCCIH), NIH",
      publicationDate: "2019-11-01",
      url: "https://www.nccih.nih.gov/health/cannabis-marijuana-and-cannabinoids-what-you-need-to-know",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
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
  synonyms: [{ name: "Marijuana", type: "COMMON_NAME" }, { name: "Hemp", type: "COMMON_NAME" }, { name: "CBD", type: "COMMON_NAME" }],
  evidence: [
    { category: "HUMAN_RESEARCH", summary: "The FDA hasn't approved the cannabis plant for any medical use, but it has approved drugs made from single cannabinoids:\n- a purified CBD medicine for two rare, severe forms of epilepsy\n- synthetic THC-type drugs for nausea and vomiting from chemotherapy, and for appetite and weight loss in HIV/AIDS\nSome evidence suggests modest benefits for chronic pain and multiple sclerosis symptoms. Cannabis doesn't help glaucoma.", source: "nccih" },
    { category: "HUMAN_RESEARCH", summary: "A 2018 review of 47 studies of cannabis or cannabinoids for long-term pain (not cancer pain) found a small benefit: 29% of people had their pain reduced by 30%, compared with 26% on placebo. Side effects were more common with cannabis.", source: "nccih" },
    { category: "PRECLINICAL", summary: "In cell and animal studies, a cannabis extract high in CBD slowed colon cancer.", source: "bajpai" },
  ],
  safety: [
    { category: "ADVERSE_EFFECT", description: "Cannabis use has been linked to a higher risk of car crashes, injuries in older adults, dizziness on standing up, and, especially with frequent use, schizophrenia or other psychoses in people prone to them. Some people develop cannabis use disorder; teenagers are four to seven times more likely than adults to.", source: "nccih" },
    { category: "PREGNANCY", description: "Smoking cannabis during pregnancy has been linked to lower birth weight.", source: "nccih" },
    { category: "PREPARATION_SPECIFIC", description: "Products containing THC or CBD can't legally be sold as dietary supplements in the U.S. The FDA has warned people not to use vaping products that contain THC.", source: "nccih" },
  ],
});
