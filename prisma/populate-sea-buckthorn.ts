import { run } from "./lib/populate-herb";

// Sea buckthorn (Hippophae rhamnoides), from a 2023 review of its botany and
// traditional uses (Ma et al.) and a 2022 meta-analysis on metabolic syndrome
// (Geng et al.). No safety sources, so none are listed.

run({
  name: "Sea Buckthorn",
  profile: {
    family: "Elaeagnaceae",
    genus: "Hippophae",
    species: "rhamnoides",
    partsUsed: "The berries (as juice, oil and food), and other parts in traditional Chinese medicine",
  },
  sources: {
    ma: {
      title: "Hippophae rhamnoides L.: A Comprehensive Review on the Botany, Traditional Uses, Phytonutrients, Health Benefits, Quality Markers, and Applications",
      author: "Ma QG, He NX, Huang HL, et al.",
      journal: "Journal of Agricultural and Food Chemistry",
      publicationDate: "2023-03-17",
      doi: "10.1021/acs.jafc.2c06916",
      pmid: "36930583",
      url: "https://pubmed.ncbi.nlm.nih.gov/36930583/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    geng: {
      title: "Effects of sea buckthorn (Hippophae rhamnoides L.) on factors related to metabolic syndrome: A systematic review and meta-analysis of randomized controlled trial",
      author: "Geng Y, Wang J, Chen K, Li Q, Ping Z, Xue R, Zhang S",
      journal: "Phytotherapy Research",
      publicationDate: "2022-08-31",
      doi: "10.1002/ptr.7596",
      pmid: "36043374",
      url: "https://pubmed.ncbi.nlm.nih.gov/36043374/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Hippophae rhamnoides", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used since ancient times to relieve cough, aid digestion, get the blood moving and ease pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sea buckthorn is eaten as a food and taken as a supplement worldwide, as juice, wine, oil, ferments and yogurt. In traditional Chinese medicine, different parts of the plant have been used since ancient times to relieve cough, aid digestion, get the blood moving and ease pain.",
      source: "ma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The berries contain many plant compounds, including flavonoids, vitamins and minerals. In lab and animal studies, extracts have acted as antioxidants, reduced inflammation and shown liver-protecting, blood-sugar-lowering and blood-fat-lowering effects. Possible toxicity still needs more study.",
      source: "ma",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 15 trials found sea buckthorn lowered triglycerides, total and LDL (\"bad\") cholesterol and raised HDL (\"good\") cholesterol, but only in people whose blood fats were already abnormal. It didn't change blood sugar, blood pressure or BMI. The results varied a lot between studies, and more trials are needed.\n\nTechnical detail: triglycerides SMD −0.72 (95% CI −1.13 to −0.32); total cholesterol SMD −0.35 (−0.64 to −0.05); LDL SMD −0.40 (−0.76 to −0.04); HDL SMD 0.37 (0.06 to 0.68).",
      source: "geng",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "A review of 15 trials found it improved blood fats in people whose levels were already abnormal." },
  ],
});
