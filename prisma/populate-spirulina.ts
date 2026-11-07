import { run } from "./lib/populate-herb";

// Spirulina (Arthrospira platensis), a blue-green alga (cyanobacterium) eaten
// as a food and supplement. Sources: MSKCC's "Blue-green Algae" monograph (uses,
// side effects, contamination, interactions) and two meta-analyses of trials
// (Serban 2016 on blood fats; Fu 2025 in overweight and obese adults).
// Family per GBIF. No traditional medicinal use was found in these sources,
// so none is stated.

run({
  name: "Spirulina",
  profile: {
    family: "Microcoleaceae",
    genus: "Arthrospira",
    species: "platensis",
    partsUsed: "The whole dried alga, usually as a powder or tablet",
  },
  sources: {
    mskcc: {
      title: "Blue-green Algae",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-06-05",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/blue-green-algae",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    serban: {
      title: "A systematic review and meta-analysis of the impact of Spirulina supplementation on plasma lipid concentrations",
      author: "Serban MC, Sahebkar A, Dragan S, et al.",
      journal: "Clinical Nutrition",
      publicationDate: "2015-09-25",
      doi: "10.1016/j.clnu.2015.09.007",
      pmid: "26433766",
      url: "https://doi.org/10.1016/j.clnu.2015.09.007",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    fu: {
      title:
        "Effects of spirulina supplementation alone or with exercise on cardiometabolic health in overweight and obese adults: a systematic review and meta-analysis",
      author: "Fu Z, Zhou S, Gu X",
      journal: "Frontiers in Nutrition",
      publicationDate: "2025-06-27",
      doi: "10.3389/fnut.2025.1624982",
      pmid: "40655486",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12245695/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Spirulina platensis", type: "SCIENTIFIC_SYNONYM" },
    { name: "Blue-green Algae", type: "COMMON_NAME" },
    { name: "Tecuitlatl", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Spirulina is a blue-green alga, a tiny water organism related to bacteria. It is grown in alkaline fresh water and eaten as a food in some parts of the world. It is a natural source of protein and vitamins.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, a substance from spirulina stopped several viruses from multiplying, including HIV, herpes and flu viruses. In animals, spirulina protected against genetic damage from chemicals and radiation. It isn't known whether these effects happen in people.\n\nTechnical detail: calcium spirulan inhibited HIV-1, herpes simplex 1, cytomegalovirus and influenza replication in vitro.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2016 review of 7 randomized trials found spirulina lowered total cholesterol, LDL (\"bad\") cholesterol and triglycerides, and raised HDL (\"good\") cholesterol.\n\nTechnical detail: total cholesterol weighted mean difference −46.76 mg/dL.",
      source: "serban",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 23 studies in 1,035 overweight or obese adults found that spirulina:\n- slightly lowered body weight\n- lowered total cholesterol, LDL (\"bad\") cholesterol and triglycerides, and raised HDL (\"good\") cholesterol\n- lowered the bottom number of blood pressure (diastolic)\nIt had little effect on body fat or blood sugar. Longer studies are needed.\n\nTechnical detail: Hedges' g: body weight −0.30, total cholesterol −0.79, triglycerides −0.64, LDL-C −0.71, diastolic BP −0.73, HDL-C +0.53.",
      source: "fu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Spirulina has not been shown to treat or prevent cancer, AIDS, ADHD or other serious medical conditions. There is no good evidence that it suppresses appetite or relieves fatigue.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Blue-green algae products can be contaminated with toxic algae. In rare cases these toxins have caused liver damage, kidney failure, nerve damage, seizures, breathing failure, pancreatitis and heart muscle damage.\n\nTechnical detail: cyanotoxins such as microcystins, anatoxin and saxitoxin, mainly from Microcystis species.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description: "Severe allergic reactions (anaphylaxis) have been reported.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "A 28-year-old man developed rhabdomyolysis (severe muscle breakdown, with muscle weakness and pain) after taking spirulina supplements for a month. He recovered after stopping.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description:
        "A newborn baby had seizures caused by high blood calcium, which was linked to the mother taking spirulina supplements for a long time.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Research suggests spirulina may slow how the body breaks down some medicines, which could raise their side effects. Whether this matters in people is not known. Ask your doctor or pharmacist if you take medicines.\n\nTechnical detail: inhibits CYP1A2 and CYP2E1.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "high-cholesterol",
      notes: "Reviews of trials found it lowered total and LDL cholesterol and triglycerides and raised HDL cholesterol.",
    },
    {
      slug: "high-blood-pressure",
      notes: "Lowered diastolic (bottom number) blood pressure in overweight and obese adults in a 2025 review of trials.",
    },
  ],
});
