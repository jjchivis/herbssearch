import { run } from "./lib/populate-herb";

// Guggulu, guggul resin (Commiphora wightii, syn. Commiphora mukul), from the
// Memorial Sloan Kettering About Herbs monograph and a 2005 blood pressure trial
// (Panneerselvam et al.) found by direct PubMed Central search. A 2022 lipid
// study was left out because it tested a five-herb mix. The sources don't give
// a native range, so it's left out. Family and accepted name per GBIF.

run({
  name: "Guggulu",
  profile: {
    family: "Burseraceae",
    genus: "Commiphora",
    species: "wightii",
    partsUsed: "The resin (gum) from the tree",
  },
  sources: {
    mskcc: {
      title: "Guggul",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2022-01-05",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/guggul",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    panneerselvam: {
      title: "Single- or double-blind treatment with Balsamodendron mukul and nifedipine in hypertensive patients",
      author: "Panneerselvam J, Sambandam G, Nalini N",
      journal: "Journal of Clinical Hypertension",
      publicationDate: "2005-06-01",
      doi: "10.1111/j.1524-6175.2006.04281.x",
      pmid: "16088297",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8109702/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Commiphora mukul", type: "SCIENTIFIC_SYNONYM" },
    { name: "Balsamodendron mukul", type: "SCIENTIFIC_SYNONYM" },
    { name: "Guggul", type: "COMMON_NAME" },
    { name: "Gum guggul", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "ayurveda",
      notes: "Used for thousands of years, alone or in herbal formulas, for rheumatism and arthritis, nerve diseases, hemorrhoids, urinary problems and skin diseases.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Guggul resin has been used in Ayurveda for thousands of years, alone or mixed with other herbs. Traditional uses include rheumatism and arthritis, nerve diseases, hemorrhoids (piles), urinary problems and skin diseases.\nToday it's also promoted for acne, high cholesterol and weight loss. Memorial Sloan Kettering finds the evidence lacking for these uses, except cholesterol, where studies are mixed.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, guggulsterone, a compound in the resin, changed how the liver makes cholesterol. Mice fed guggul had lower cholesterol than mice on a normal diet. In lab and animal studies, guggulsterone also slowed tumor growth, and guggul protected the heart in one animal study.\n\nTechnical detail: cholesterol lowering in mice attributed to FXR inhibition; guggulsterone was antiangiogenic and induced apoptosis in tumor cells (JNK activation, Akt repression).",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies in people on whether guggul lowers cholesterol are mixed. Some small studies suggest it may help, others found unclear benefit, and one trial suggested it may actually raise cholesterol. It showed no benefit when taken with Triphala, an Ayurvedic herbal mix. More research is needed to know whether it's safe and effective.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 6-week trial in India, 57 people newly diagnosed with high blood pressure took guggul extract (1.5 g a day), the blood pressure medicine nifedipine, or both. Compared with untreated people, the guggul group had lower blood pressure and cholesterol and higher HDL (\"good\") cholesterol. Guggul plus nifedipine worked better than guggul alone. The trial was small.\n\nTechnical detail: randomized; guggul and nifedipine alone were single-blind, the combination double-blind; 10 mg/day nifedipine; also lower LDL, VLDL, triglycerides, free fatty acids and phospholipids.",
      source: "panneerselvam",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Guggul may make some medicines less effective. Lab studies suggest it speeds up a liver enzyme (CYP3A4) that breaks down many common medicines. Don't take it if you take medicines processed this way, and tell your doctor or pharmacist about any supplements you use.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Guggul may affect blood test results. It has raised thyroid test results (TSH, T3 and T4) and lowered triglycerides.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Side effects can include headache, mild nausea, belching, hiccups, loose stools and an allergic rash.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description: "Skin allergies (contact dermatitis) have been reported from slimming and anti-cellulite creams containing guggul.",
      source: "mskcc",
    },
    {
      category: "TOXICITY",
      description:
        "Liver problems have been reported with products that mix guggul with other ingredients:\n- very high liver enzymes in a 63-year-old woman after 6 months of a cholesterol product that also contained red yeast rice; she recovered after stopping it\n- liver failure needing a transplant in a woman who took a supplement with usnic acid, green tea and guggul; usnic acid was thought to be the main cause",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "high-cholesterol",
      notes: "Studies in people are mixed, and one trial suggested guggul may raise cholesterol. It may also make some medicines less effective.",
    },
    {
      slug: "high-blood-pressure",
      notes: "In one small 6-week trial, guggul extract lowered blood pressure compared with no treatment, and worked better combined with nifedipine.",
    },
    {
      slug: "joint-discomfort",
      notes: "Traditionally used in Ayurveda for arthritis and rheumatism. Memorial Sloan Kettering finds the evidence lacking.",
    },
    {
      slug: "acne",
      notes: "Promoted for acne, but Memorial Sloan Kettering finds the evidence lacking for guggul on its own.",
    },
  ],
  preparations: [
    {
      slug: "extract",
      notes: "A guggul extract was taken at 1.5 g a day in a blood pressure trial.",
      source: "panneerselvam",
    },
  ],
});
