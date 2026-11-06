import { run } from "./lib/populate-herb";

// Coconut Palm (Cocos nucifera), from a 2020 meta-analysis of coconut oil and
// heart risk factors (Neelakantan et al.), a 2004 skin trial (Agero and
// Verallo-Rowell) and a 2024 ulcerative colitis trial of coconut water (Kedia et
// al.). Family per GBIF.

run({
  name: "Coconut Palm",
  profile: { family: "Arecaceae", genus: "Cocos", species: "nucifera", nativeRange: "Tropical coasts worldwide", partsUsed: "The nut meat, oil and water" },
  sources: {
    neelakantan: {
      title: "The Effect of Coconut Oil Consumption on Cardiovascular Risk Factors: A Systematic Review and Meta-Analysis of Clinical Trials",
      author: "Neelakantan N, Seah JYH, van Dam RM",
      journal: "Circulation",
      publicationDate: "2020-03-10",
      doi: "10.1161/CIRCULATIONAHA.119.043052",
      pmid: "31928080",
      url: "https://doi.org/10.1161/CIRCULATIONAHA.119.043052",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    agero: {
      title: "A randomized double-blind controlled trial comparing extra virgin coconut oil with mineral oil as a moisturizer for mild to moderate xerosis",
      author: "Agero AL, Verallo-Rowell VM",
      journal: "Dermatitis",
      publicationDate: "2004-09-01",
      doi: "10.2310/6620.2004.04006",
      pmid: "15724344",
      url: "https://doi.org/10.2310/6620.2004.04006",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kedia: {
      title: "Coconut Water Induces Clinical Remission in Mild to Moderate Ulcerative Colitis: Double-blind Placebo-controlled Trial",
      author: "Kedia S, Virmani S, Bajaj A, et al.",
      journal: "Clinical Gastroenterology and Hepatology",
      publicationDate: "2024-06-01",
      doi: "10.1016/j.cgh.2024.01.013",
      pmid: "38278200",
      url: "https://doi.org/10.1016/j.cgh.2024.01.013",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Coconut", type: "COMMON_NAME" },
    { name: "Coconut Oil", type: "COMMON_NAME" },
    { name: "Coconut Water", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary: "A 2020 review of 16 trials found coconut oil raised LDL (\"bad\") cholesterol by about 10 mg/dL compared with non-tropical vegetable oils like olive or canola. It also raised HDL, but didn't help weight, blood sugar or inflammation.",
      source: "neelakantan",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a trial of people with dry, scaly skin, virgin coconut oil moisturized as well as mineral oil, with no skin reactions.",
      source: "agero",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a placebo-controlled trial in mild to moderate ulcerative colitis, drinking coconut water for 8 weeks roughly doubled the rate of remission (53% vs 28%).",
      source: "kedia",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Coconut oil raises LDL cholesterol more than liquid vegetable oils, which matters for heart health.",
      source: "neelakantan",
    },
  ],
  symptoms: [
    { slug: "dry-skin", notes: "Virgin coconut oil moisturized dry skin as well as mineral oil in a trial." },
  ],
});
