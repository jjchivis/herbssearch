import { run } from "./lib/populate-herb";

// Jonathan apple, a variety of the common apple (Malus domestica). The research
// below is on apple cider vinegar (made by fermenting apple juice), not on the
// Jonathan variety itself. Sources: MSKCC's "Apple Cider Vinegar" monograph
// and two meta-analyses of trials (Arjmandfard 2025; Tehrani 2023/2025).
// A 2025 meta-analysis on body weight (Castagna) was not used because it
// includes a trial that was later retracted. Family per GBIF.

run({
  name: "Jonathan Apple",
  profile: {
    family: "Rosaceae",
    genus: "Malus",
    species: "domestica",
    partsUsed: "The fruit, and apple cider vinegar made by fermenting apple juice",
  },
  sources: {
    mskcc: {
      title: "Apple Cider Vinegar",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2026-04-03",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/apple-cider-vinegar",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    arjmandfard: {
      title:
        "Effects of apple cider vinegar on glycemic control and insulin sensitivity in patients with type 2 diabetes: A GRADE-assessed systematic review and dose-response meta-analysis of controlled clinical trials",
      author: "Arjmandfard D, Behzadi M, Sohrabi Z, Mohammadi Sartang M",
      journal: "Frontiers in Nutrition",
      publicationDate: "2025-01-30",
      doi: "10.3389/fnut.2025.1528383",
      pmid: "39949546",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11821484/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    tehrani: {
      title: "The Effects of Apple Cider Vinegar on Cardiometabolic Risk Factors: A Systematic Review and Meta-analysis of Clinical Trials",
      author: "Tehrani SD, Keshani M, Rouhani MH, Moallem SA, Bagherniya M, Sahebkar A",
      journal: "Current Medicinal Chemistry",
      publicationDate: "2023-08-22",
      doi: "10.2174/0929867331666230822102021",
      pmid: "37608660",
      url: "https://doi.org/10.2174/0929867331666230822102021",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Apple", type: "COMMON_NAME" },
    { name: "Apple Cider Vinegar", type: "COMMON_NAME" },
    { name: "ACV", type: "COMMON_NAME" },
    { name: "Cider Vinegar", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jonathan is a variety of the common apple. Apple cider vinegar, made by fermenting apple juice, is widely used to flavor and preserve food. As a folk remedy it has been used for infections, insect bites, warts and scurvy. Today it is promoted for weight loss, blood sugar, cholesterol, sore throat, indigestion, arthritis and skin problems such as acne, eczema and dandruff.\n\nThe research on this page is on apple cider vinegar, not on Jonathan apples in particular.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, apple cider vinegar slowed how fast the stomach emptied and made animals feel full, so they ate less. It also improved blood fats in rats, including diabetic rats, and protected the liver in mice on a high-fat diet.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 7 trials in people with type 2 diabetes found apple cider vinegar lowered fasting blood sugar and HbA1c (a measure of average blood sugar over about 3 months).\n\nTechnical detail: fasting blood sugar WMD −21.9 mg/dL; insulin increased; no change in HOMA-IR.",
      source: "arjmandfard",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A review of 25 trials in 1,320 adults found apple cider vinegar lowered fasting blood sugar, HbA1c and total cholesterol, mostly in people with diabetes. It did not change body weight, LDL (\"bad\") or HDL (\"good\") cholesterol, or triglycerides overall. The results varied a lot between studies.\n\nTechnical detail: fasting glucose −21.20 mg/dL; HbA1c −0.91; total cholesterol −6.72 mg/dL; high heterogeneity (I² up to 98.9%).",
      source: "tehrani",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Memorial Sloan Kettering says the evidence for apple cider vinegar isn't conclusive, because the studies differ in length, dose and product, and larger, better trials are needed. It did not help eczema (atopic dermatitis) when used on the skin. There is no evidence that it can prevent or cure skin cancer or any other cancer, although it is promoted online as a cancer remedy.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Putting apple cider vinegar on the skin has caused chemical burns and scarring, including in children it was used on for a skin infection, a fever, head lice and a mole.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Reported harms from taking it include:\n- an injured food pipe (esophagus) in a woman who swallowed apple cider vinegar tablets\n- low potassium and weak bones in a young woman who drank large amounts for years\n- liver injury in a man who drank vinegar regularly\n- pancreatitis in an older woman taking a weight-loss supplement that contained it",
      source: "mskcc",
    },
    {
      category: "CONTAMINATION",
      description:
        "Unpasteurized apple products, including raw apple cider vinegar and apple cider, have caused outbreaks of E. coli and Cryptosporidium infections. It's best to avoid raw or home-fermented products.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "Apple cider vinegar lowered fasting blood sugar and HbA1c in trials in people with type 2 diabetes.",
    },
    {
      slug: "high-cholesterol",
      notes: "Apple cider vinegar slightly lowered total cholesterol in a review of trials, mostly in people with diabetes; LDL didn't change.",
    },
  ],
});
