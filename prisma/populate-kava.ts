import { run } from "./lib/populate-herb";

// Kava (Piper methysticum), from verified sources: NCCIH (2025) and two
// systematic reviews on anxiety (Smith & Leiras 2018; Ooi et al. 2018). Family
// per GBIF / Catalogue of Life.

run({
  name: "Kava",
  profile: {
    family: "Piperaceae",
    genus: "Piper",
    species: "methysticum",
    nativeRange: "Native to the South Pacific",
    partsUsed: "The root and underground stem",
  },
  sources: {
    nccih: {
      title: "Kava: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/kava",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    smith: {
      title: "The effectiveness and safety of Kava Kava for treating anxiety symptoms: A systematic review and analysis of randomized clinical trials",
      author: "Smith K, Leiras C",
      journal: "Complementary Therapies in Clinical Practice",
      organization: "Complementary Therapies in Clinical Practice",
      publicationDate: "2018-09-15",
      doi: "10.1016/j.ctcp.2018.09.003",
      pmid: "30396607",
      url: "https://pubmed.ncbi.nlm.nih.gov/30396607/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    ooi: {
      title: "Kava for Generalized Anxiety Disorder: A Review of Current Evidence",
      author: "Ooi SL, Henderson P, Pak SC",
      journal: "Journal of Alternative and Complementary Medicine",
      organization: "Journal of Alternative and Complementary Medicine",
      publicationDate: "2018-04-11",
      doi: "10.1089/acm.2018.0001",
      pmid: "29641222",
      url: "https://pubmed.ncbi.nlm.nih.gov/29641222/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Kava Kava", type: "COMMON_NAME" },
    { name: "Kava-kava", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Kavalactones", slug: "kavalactones", type: "lactone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Kava, a member of the pepper family, has been used by Pacific Islanders for thousands of years in ceremonies and as a medicine. In the United States it is sold as a supplement and promoted for anxiety.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research suggests kava supplements may help with anxiety, but it takes several weeks to work. It doesn't appear to help symptoms of generalized anxiety disorder. There's little research on other uses.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2018 review of 7 placebo-controlled trials found kava worked better than placebo in 3 of them. Pooling 5 trials (330 people), people taking kava were 1.5 times as likely to respond. Side effects were no more common than with placebo. The authors concluded kava may be a short-term treatment for anxiety, and that liver damage is especially possible if it's taken for more than 8 weeks.\n\nTechnical detail: responder risk ratio 1.50 (95% CI 1.12 to 2.01).",
      source: "smith",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2018 review of kava for generalized anxiety disorder found mixed results: two placebo-controlled trials and one comparison trial favored kava, but one trial found no difference from placebo. Pooled results favored kava but weren't statistically significant, so the evidence isn't enough to confirm it works better than placebo.\n\nTechnical detail: 3 placebo-controlled trials (n = 130), SMD 0.59 to 0.99; 120 to 280 mg kavalactones a day for 4 to 8 weeks was well tolerated.",
      source: "ooi",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Kava products have been linked to rare but sometimes serious liver damage, including deaths. Early cases involved extracts made with alcohol or acetone, but traditional water-based kava drinks have also caused liver injury.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't combine kava with alcohol, sedatives (medicines that make you sleepy) or benzodiazepines. Talk to your healthcare provider before using it with any medicine.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Kava can cause stomach upset, headache and dizziness. Long-term, heavy use can cause dry, scaly, flaky skin, red eyes, and temporary yellowing of the skin and nails.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Kava carries special risks during pregnancy and breastfeeding because it contains harmful substances.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "anxiety",
      notes: "May ease anxiety short term, but doesn't appear to help generalized anxiety disorder, and has been linked to serious liver damage.",
    },
    { slug: "liver-safety-warnings", notes: "Kava products have been linked to rare but serious liver damage, including deaths." },
  ],
});
