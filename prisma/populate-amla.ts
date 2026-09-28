import { run } from "./lib/populate-herb";

// Amla (Phyllanthus emblica, Indian gooseberry), from verified sources: a review
// of its nutrition and health effects (Gul et al. 2022) and a meta-analysis of
// randomized trials (Setayesh et al. 2023). Family per GBIF / Catalogue of Life.
// No source covering side effects, pregnancy or interactions was used, so none
// is stated.

run({
  name: "Amla",
  profile: {
    family: "Phyllanthaceae",
    genus: "Phyllanthus",
    species: "emblica",
    nativeRange: "Native to India and Southeast Asia",
    partsUsed: "The fruit",
  },
  sources: {
    gul: {
      title: "Functional and Nutraceutical Significance of Amla (Phyllanthus emblica L.): A Review",
      author: "Gul M, Liu ZW, Iahtisham-Ul-Haq, et al.",
      journal: "Antioxidants",
      organization: "Antioxidants (Basel)",
      publicationDate: "2022-04-22",
      doi: "10.3390/antiox11050816",
      pmid: "35624683",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9137578/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    setayesh: {
      title: "The impact of Emblica Officinalis (Amla) on lipid profile, glucose, and C-reactive protein: A systematic review and meta-analysis of randomized controlled trials",
      author: "Setayesh L, Haghighat N, Rasaei N, et al.",
      journal: "Diabetes & Metabolic Syndrome",
      organization: "Diabetes & Metabolic Syndrome",
      publicationDate: "2023-03-11",
      doi: "10.1016/j.dsx.2023.102729",
      pmid: "36934568",
      url: "https://pubmed.ncbi.nlm.nih.gov/36934568/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Indian Gooseberry", type: "COMMON_NAME" },
    { name: "Amalaki", type: "TRADITIONAL_NAME" },
    { name: "Emblica officinalis", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Known as amalaki; one of the three fruits in Triphala." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Amla fruit is rich in vitamin C and plant compounds called polyphenols. It is widely used in traditional medicine for its antioxidant effects, and to help reduce inflammation, blood sugar and cholesterol.",
      source: "gul",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, amla improved the body's antioxidant defenses and showed effects on cholesterol, blood sugar, inflammation, the digestive tract and the nervous system.",
      source: "gul",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 5 randomized trials found amla supplements lowered C-reactive protein (a marker of inflammation), fasting blood sugar, total and LDL cholesterol, and triglycerides.",
      source: "setayesh",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Rich in vitamin C; trials found it lowered a marker of inflammation, but it hasn't been tested for preventing infections." },
    { slug: "high-cholesterol", notes: "A review of 5 trials found it lowered total and LDL cholesterol and triglycerides." },
    { slug: "high-blood-sugar", notes: "A review of 5 trials found it lowered fasting blood sugar." },
  ],
});
