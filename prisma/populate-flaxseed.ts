import { run } from "./lib/populate-herb";

// Flaxseed (Linum usitatissimum), from verified sources: NCCIH, the EMA/HMPC
// public summary on linseed (2016), a 2015 meta-analysis on blood pressure
// (Khalesi et al., J Nutr) and a 2009 meta-analysis on blood lipids (Pan et
// al., Am J Clin Nutr). Family per GBIF / Catalogue of Life. No sourced native
// range was found (GRIN lists no distribution), so none is given.

run({
  name: "Flaxseed",
  profile: {
    family: "Linaceae",
    genus: "Linum",
    species: "usitatissimum",
    partsUsed: "The seeds, eaten whole or ground, or pressed to make flaxseed (linseed) oil",
  },
  sources: {
    nccih: {
      title: "Flaxseed and Flaxseed Oil: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/flaxseed-and-flaxseed-oil",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "Linseed: Herbal medicine summary for the public (EMA/492394/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-02-01",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/linseed-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    khalesi: {
      title: "Flaxseed consumption may reduce blood pressure: a systematic review and meta-analysis of controlled trials",
      author: "Khalesi S, Irwin C, Schubert M",
      journal: "The Journal of Nutrition",
      organization: "The Journal of Nutrition",
      publicationDate: "2015-04-01",
      doi: "10.3945/jn.114.205302",
      pmid: "25740909",
      url: "https://pubmed.ncbi.nlm.nih.gov/25740909/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    pan: {
      title: "Meta-analysis of the effects of flaxseed interventions on blood lipids",
      author: "Pan A, Yu D, Demark-Wahnefried W, Franco OH, Lin X",
      journal: "The American Journal of Clinical Nutrition",
      organization: "The American Journal of Clinical Nutrition",
      publicationDate: "2009-08-01",
      doi: "10.3945/ajcn.2009.27469",
      pmid: "19515737",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3361740/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Flax", type: "COMMON_NAME" },
    { name: "Linseed", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Alpha-Linolenic Acid", slug: "alpha-linolenic-acid", type: "omega-3 fatty acid" },
    { name: "Lignans", slug: "lignans", type: "lignan" },
  ],
  traditions: [
    { slug: "mediterranean-folk-medicine", notes: "Used as a laxative in ancient Greece, and to make linen in ancient Egypt." },
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency for constipation and, based on long-standing use, for mild stomach and gut discomfort.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Flaxseed has a long history of use: to make linen in ancient Egypt, in stews in Ethiopia and as a laxative in ancient Greece. North American settlers used it in poultices (a paste put on the skin) and in paint oil. Today it's promoted for the heart, brain and immune system.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary: "Based on long-standing use, the European Medicines Agency recognizes linseed for relieving mild stomach and gut discomfort.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on clinical studies, the European Medicines Agency concluded that linseed can treat long-term (habitual) constipation or soften stools. Linseed swells with water in the gut to form a jelly-like substance that softens the stool and helps it pass.\n\nTechnical detail: \"well-established use\"; the jelly-like substance is mucilage.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "One trial suggests flaxseed fiber (mucilage) powder mixed with water might help overweight adults lose weight, but lignan extracts and oil supplements didn't help. Flaxseed oil might improve blood sugar measures in pregnant people with gestational diabetes. It's unclear whether flaxseed helps type 2 diabetes.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2015 review of 14 trials found flaxseed lowered blood pressure slightly: by about 1.8 mm Hg (systolic, the top number) and 1.6 mm Hg (diastolic, the bottom number). The effect on diastolic pressure may be larger with whole flaxseed eaten for 12 weeks or more.\n\nTechnical detail: 11 studies (14 trials); SBP −1.77 mm Hg (95% CI −3.45 to −0.09); DBP −1.58 mm Hg (95% CI −2.64 to −0.52); whole seed DBP −1.93 mm Hg; ≥12 weeks DBP −2.17 mm Hg.",
      source: "khalesi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2009 review of 28 studies found flaxseed lowered total and LDL (\"bad\") cholesterol slightly. Whole flaxseed and lignan supplements worked, but flaxseed oil didn't. The effect was clearer in women (especially after menopause) and in people who started with high cholesterol. It didn't change HDL (\"good\") cholesterol or triglycerides.\n\nTechnical detail: overall total cholesterol −0.10 mmol/L and LDL −0.08 mmol/L; whole flaxseed −0.21 and −0.16 mmol/L; lignans −0.28 and −0.16 mmol/L.",
      source: "pan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Don't eat raw or unripe flaxseeds; they may contain potentially toxic compounds.",
      source: "nccih",
    },
    { category: "ADVERSE_EFFECT", description: "Higher doses can cause bloating, fullness and diarrhea.", source: "nccih" },
    {
      category: "ADVERSE_EFFECT",
      description: "Bloating is a common side effect (1 to 10 in 100 people). Very rarely, allergic reactions, sometimes severe, have been reported.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use linseed if you have trouble swallowing or throat problems, a blocked or narrowed gut, a paralyzed or abnormally widened bowel, or a disease of the esophagus (food pipe). For constipation, don't use it if you've had a sudden change in bowel habits lasting more than 2 weeks, unexplained bleeding from the bottom, or constipation that laxatives haven't relieved. It's for adults and teens over 12 only.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description: "In theory, flaxseed could interact with blood thinners and anti-platelet medicines. Talk to your health care provider before using it.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "The evidence on flaxseed's safety during pregnancy isn't conclusive, and little is known about its safety while breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "A review of trials found flaxseed lowered blood pressure slightly, especially whole seeds eaten for 12 weeks or more.",
    },
    { slug: "high-cholesterol", notes: "Whole flaxseed and lignan supplements lowered total and LDL cholesterol slightly; flaxseed oil didn't." },
  ],
});
