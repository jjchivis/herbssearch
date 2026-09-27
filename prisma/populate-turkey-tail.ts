import { run } from "./lib/populate-herb";

// Turkey tail (Trametes versicolor, syn. Coriolus versicolor), a medicinal
// mushroom, from verified sources: Memorial Sloan Kettering's About Herbs entry
// (2026) and a small randomized trial in advanced liver cancer (Chay et al.
// 2017). Family per GBIF / Catalogue of Life.

run({
  name: "Turkey Tail",
  profile: {
    family: "Polyporaceae",
    genus: "Trametes",
    species: "versicolor",
    partsUsed: "The mushroom; extracts called PSK and PSP are made from it",
  },
  sources: {
    mskcc: {
      title: "Coriolus versicolor",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2026-04-22",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/coriolus-versicolor",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    chay: {
      title: "Coriolus versicolor (Yunzhi) Use as Therapy in Advanced Hepatocellular Carcinoma Patients with Poor Liver Function or Who Are Unfit for Standard Therapy",
      author: "Chay WY, Tham CK, Toh HC, Lim HY, Tan CK, Lim C, Wang WW, Choo SP",
      journal: "Journal of Alternative and Complementary Medicine",
      organization: "Journal of Alternative and Complementary Medicine",
      publicationDate: "2017-04-04",
      doi: "10.1089/acm.2016.0136",
      pmid: "28375640",
      url: "https://pubmed.ncbi.nlm.nih.gov/28375640/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Coriolus versicolor", type: "SCIENTIFIC_SYNONYM" },
    { name: "Polyporus versicolor", type: "SCIENTIFIC_SYNONYM" },
    { name: "Turkey Tail Mushroom", type: "COMMON_NAME" },
    { name: "Yun Zhi", type: "TRADITIONAL_NAME" },
    { name: "Yunzhi", type: "TRADITIONAL_NAME" },
    { name: "Kawaratake", type: "COMMON_NAME" },
    { name: "PSK", type: "COMMON_NAME" },
    { name: "PSP", type: "COMMON_NAME" },
    { name: "Krestin", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used as a tonic to improve general health and boost the immune system." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In traditional Chinese medicine, turkey tail (yun zhi) is used as a tonic to improve general health and boost the immune system.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, turkey tail extracts killed leukemia cells and slowed the growth of breast cancer cells. In mice, very high doses of a hot-water extract (10 to 13 times the doses people use) increased intestinal tumors.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "PSK, an extract developed in Japan, is used there and in China alongside standard cancer treatment to lower the chance of cancer coming back. Added to treatment, it appears to improve survival in stomach and colorectal cancer, and may help in esophageal cancer. Results in breast cancer, liver cancer and leukemia are mixed. The US FDA hasn't approved turkey tail extracts as cancer treatments.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial, 15 people with advanced liver cancer who couldn't have standard treatment took turkey tail or a placebo. There was no clear difference in survival or in how fast the cancer grew. People taking turkey tail reported better emotional and social wellbeing, less pain and less loss of appetite.\n\nTechnical detail: randomized 2:1; median overall survival 6.5 vs 2.2 months, HR 0.35 (95% CI 0.10 to 1.25, p = 0.105); time to progression HR 0.70 (p = 0.634).",
      source: "chay",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Turkey tail extracts are generally well tolerated. Reported side effects include dark stools (not caused by bleeding) and darkened fingernails. Mild digestive and blood-count problems were seen when it was used with chemotherapy, though the chemotherapy may have caused them.",
      source: "mskcc",
    },
    {
      category: "DOSAGE",
      description:
        "It's generally safe to use turkey tail in food and tea. Supplements are stronger than the amounts used in cooking, so talk with your healthcare providers before taking them.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Herbal supplements, including turkey tail, can interact with some medicines and affect how they work.",
      source: "mskcc",
    },
    {
      category: "CONTAMINATION",
      description: "Many over-the-counter turkey tail products aren't standardized, so their strength can vary between brands.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "It isn't known whether turkey tail supplements are safe during pregnancy or breastfeeding. Talk to your healthcare provider first.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "liver-disease",
      notes: "A small trial in advanced liver cancer found no clear effect on survival; results in liver cancer are described as mixed.",
    },
    { slug: "seasonal-immune-support", notes: "Traditionally used in Chinese medicine to boost the immune system." },
  ],
});
