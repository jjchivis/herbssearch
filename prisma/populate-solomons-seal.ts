import { run } from "./lib/populate-herb";

// Solomon's Seal (Polygonatum odoratum, angular Solomon's seal, yu zhu), from a
// 2026 review of its traditional uses, chemistry, pharmacology and toxicology
// (Sun et al.) and a 2026 review of the Polygonatum genus (Shu et al.).

run({
  name: "Solomon's Seal",
  profile: {
    family: "Asparagaceae",
    genus: "Polygonatum",
    species: "odoratum",
    partsUsed: "The underground stem (rhizome), sliced, as medicine and food",
  },
  sources: {
    sun: {
      title: "Polygonatum odoratum (Mill.) Druce: A Review of Traditional Uses, Phytochemistry, Mass Spectrometric Fragmentation, Pharmacology, Toxicology, and Q-Marker Prediction",
      author: "Sun W, Wang J, Wang R, Zhang Y, Zhang W, Zhang W, Li W",
      journal: "Drug Design, Development and Therapy",
      publicationDate: "2026-09-17",
      doi: "10.2147/DDDT.S631981",
      pmid: "42774396",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13594521/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shu: {
      title: "Botany, traditional uses, phytochemistry, pharmacology, toxicology, and applications of the genus Polygonatum: A comprehensive update review",
      author: "Shu Q, Liao B, Zhu Z, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2026-05-05",
      doi: "10.1016/j.jep.2026.121773",
      pmid: "42092474",
      url: "https://pubmed.ncbi.nlm.nih.gov/42092474/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Solomons Seal", type: "COMMON_NAME" },
    { name: "Angular Solomon's Seal", type: "COMMON_NAME" },
    { name: "Yu Zhu", type: "TRADITIONAL_NAME" },
    { name: "Wei Rui", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called yu zhu; listed as a superior-grade herb in the Shen Nong Ben Cao Jing and used as both food and medicine." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Solomon's seal was first recorded in China's Shen Nong Ben Cao Jing, where it was ranked a superior-grade herb, and it's eaten as both food and medicine. In traditional Chinese medicine it's used:\n- For dry cough with little phlegm, and a dry throat and tongue\n- For excessive thirst (\"wasting thirst\")\n- For poor appetite and stomach discomfort after a high fever\nIts name comes from scars on the root that look like old royal seals.",
      source: "sun",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Plants in the Solomon's seal group have been used for over 2,000 years as tonics in China, Japan, Korea, India, Iran and the Himalayas, mainly against ageing and tiredness and for metabolic problems.",
      source: "shu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts and compounds from Solomon's seal have lowered blood sugar and shown effects on the immune system, as well as antioxidant, antiviral and antibacterial activity, and may help reduce inflammation.",
      source: "sun",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Plants in the Solomon's seal group are reported to have low toxicity, but their safety in people hasn't been studied in detail.",
      source: "shu",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Used in traditional Chinese medicine for dry cough with little phlegm. Not tested in trials." },
  ],
});
