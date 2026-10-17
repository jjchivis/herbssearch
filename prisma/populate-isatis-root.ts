import { run } from "./lib/populate-herb";

// Isatis Root (Isatidis Radix, ban lan gen, from Isatis indigotica), from a 2022
// systematic review of Isatidis Radix and Isatidis Folium (Chen et al.; abstract
// only).

run({
  name: "Isatis Root",
  profile: {
    family: "Brassicaceae",
    genus: "Isatis",
    species: "indigotica",
    partsUsed: "The dried root (ban lan gen); the leaves are a separate medicine (da qing ye)",
  },
  sources: {
    chen: {
      title: "Isatidis Radix and Isatidis Folium: A systematic review on ethnopharmacology, phytochemistry and pharmacology",
      author: "Chen J, Zhu Z, Gao T, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-09-20",
      doi: "10.1016/j.jep.2021.114648",
      pmid: "34543684",
      url: "https://pubmed.ncbi.nlm.nih.gov/34543684/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ban Lan Gen", type: "TRADITIONAL_NAME" },
    { name: "Banlangen", type: "TRADITIONAL_NAME" },
    { name: "Isatidis Radix", type: "COMMON_NAME" },
    { name: "Radix Isatidis", type: "COMMON_NAME" },
    { name: "Satis Root", type: "COMMON_NAME" },
    { name: "Isatis", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called ban lan gen; used for centuries to \"clear toxins\", for flu and other viral infections, fever, cough and sore throat." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ban lan gen has been used in Chinese medicine for centuries as both food and medicine. It's described as bitter and cool, and is used to \"clear toxins\". It's often used for:\n- Flu and other viral infections\n- Fever and dizziness\n- Cough and sore throat from \"lung heat\"\nAt least 39 Chinese patent medicines contain it or the leaves of the same plant.",
      source: "chen",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its compounds acted against several viruses, including flu, respiratory syncytial virus (RSV) and herpes simplex, partly by affecting the immune system and inflammation. These are lab and animal results.",
      source: "chen",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "A traditional Chinese remedy for flu and viral infections; acted against flu viruses in lab studies. Not tested on its own in trials." },
    { slug: "sore-throat", notes: "Traditionally used for sore throat and cough from \"lung heat\". Not tested on its own in trials." },
  ],
});
