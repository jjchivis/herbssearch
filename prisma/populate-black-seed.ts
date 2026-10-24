import { run } from "./lib/populate-herb";

// Black seed (Nigella sativa), from Memorial Sloan Kettering's About Herbs entry
// and three meta-analyses of trials in people: blood pressure and blood fats
// (Sahebkar et al. 2016) and type 2 diabetes (Daryabeygi-Khotbehsara et al.
// 2017). NCCIH has no fact sheet on it. Family per GBIF.

run({
  name: "Black Seed",
  profile: {
    family: "Ranunculaceae",
    genus: "Nigella",
    species: "sativa",
    nativeRange: "Found throughout India, Arabia and Europe",
    partsUsed: "The seeds and seed oil",
  },
  sources: {
    mskcc: {
      title: "Nigella sativa — About Herbs, Botanicals & Other Products",
      organization: "Memorial Sloan Kettering Cancer Center",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/nigella-sativa",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    bp: {
      title: "A systematic review and meta-analysis of randomized controlled trials investigating the effects of supplementation with Nigella sativa (black seed) on blood pressure",
      author: "Sahebkar A, Soranna D, Liu X, et al.",
      journal: "Journal of Hypertension",
      publicationDate: "2016-11-01",
      doi: "10.1097/HJH.0000000000001049",
      pmid: "27512971",
      url: "https://pubmed.ncbi.nlm.nih.gov/27512971/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    lipids: {
      title: "Nigella sativa (black seed) effects on plasma lipid concentrations in humans: A systematic review and meta-analysis of randomized placebo-controlled trials",
      author: "Sahebkar A, Beccuti G, Simental-Mendía LE, et al.",
      journal: "Pharmacological Research",
      publicationDate: "2016-02-10",
      doi: "10.1016/j.phrs.2016.02.008",
      pmid: "26875640",
      url: "https://pubmed.ncbi.nlm.nih.gov/26875640/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    diabetes: {
      title: "Nigella sativa improves glucose homeostasis and serum lipids in type 2 diabetes: A systematic review and meta-analysis",
      author: "Daryabeygi-Khotbehsara R, Golzarand M, Ghaffari MP, Djafarian K",
      journal: "Complementary Therapies in Medicine",
      publicationDate: "2017-08-30",
      doi: "10.1016/j.ctim.2017.08.016",
      pmid: "29154069",
      url: "https://pubmed.ncbi.nlm.nih.gov/29154069/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Black Cumin", type: "COMMON_NAME" },
    { name: "Black Caraway", type: "COMMON_NAME" },
    { name: "Kalonji", type: "REGIONAL_NAME" },
    { name: "Nigella", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Thymoquinone", slug: "thymoquinone", type: "quinone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The seeds are used in cooking and in traditional medicine in India, Arabia and Europe, to reduce inflammation and for infections and cancer. Black seed hasn't been shown to treat cancer in people.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, compounds from the seeds, including thymoquinone, acted as antioxidants, calmed the immune system, protected the liver and slowed tumor growth. These effects haven't been shown in people.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2016 review of 11 trials with 860 people found that taking black seed for about 8 weeks lowered blood pressure slightly more than a placebo or standard treatment, about 3 points for both numbers. Black seed powder seemed to work better than the oil.\n\nTechnical detail: SBP −3.26 mmHg (95% CI −5.10 to −1.42); DBP −2.80 mmHg (95% CI −4.28 to −1.32).",
      source: "bp",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2016 review of 17 trials found black seed lowered total cholesterol, LDL (\"bad\") cholesterol and triglycerides compared with a placebo. The oil had a bigger effect on cholesterol than the powder, and only the powder raised HDL (\"good\") cholesterol.\n\nTechnical detail: total cholesterol −15.65 mg/dL; LDL −14.10 mg/dL; triglycerides −20.64 mg/dL.",
      source: "lipids",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2017 review of 7 trials in people with type 2 diabetes found black seed improved fasting blood sugar and blood fats. The authors noted there were only a few studies and more research is needed.\n\nTechnical detail: fasting blood sugar −17.84 mg/dL (95% CI −21.19 to −14.49).",
      source: "diabetes",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small trials suggest black seed may help asthma, rheumatoid arthritis, indigestion and fatty liver, and a gel put on the skin made radiation skin damage less severe in women with breast cancer. Larger studies are needed. Results for blood pressure have been conflicting.",
      source: "mskcc",
    },
  ],
  safety: [
    { category: "ALLERGY", description: "Pure black seed oil put on the skin has caused allergic reactions.", source: "mskcc" },
    {
      category: "TOXICITY",
      description: "High doses caused liver and kidney damage in rats. There's no information on this in people.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Black seed may raise the risk of side effects from medicines broken down by the liver's CYP450 enzymes. How much this matters in practice isn't known.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A 2016 review of 11 trials found it lowered blood pressure by about 3 points." },
    { slug: "high-cholesterol", notes: "A 2016 review of 17 trials found it lowered total and LDL cholesterol and triglycerides." },
    { slug: "high-blood-sugar", notes: "A 2017 review of 7 trials in type 2 diabetes found it improved fasting blood sugar." },
  ],
  preparations: [
    { slug: "culinary-preparation", notes: "The seeds are used as a spice in cooking.", source: "mskcc" },
    { slug: "powder", notes: "In trials, black seed was taken as seed powder or seed oil.", source: "bp" },
    { slug: "oil", notes: "Black seed oil is taken by mouth or put on the skin, for example as a gel.", source: "mskcc" },
  ],
});
