import { run } from "./lib/populate-herb";

// Cynomorium Songaricum (suo yang), from a 2025 review of its effects on
// metabolic syndrome (Liu et al.; abstract only) and a 2026 lab study whose
// background describes its traditional use (Mao et al.).

run({
  name: "Cynomorium Songaricum",
  profile: {
    family: "Cynomoriaceae",
    genus: "Cynomorium",
    species: "songaricum",
    nativeRange: "Arid regions of Central Asia",
    partsUsed: "The fleshy stem of a parasitic plant",
  },
  sources: {
    liu: {
      title: "A decade review on phytochemistry and pharmacological activities of Cynomorium songaricum Rupr.: Insights into metabolic syndrome",
      author: "Liu Z, Li Q, Zhao F, Chen J",
      journal: "Phytomedicine",
      publicationDate: "2025-03-02",
      doi: "10.1016/j.phymed.2025.156602",
      pmid: "40058318",
      url: "https://pubmed.ncbi.nlm.nih.gov/40058318/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    mao: {
      title: "Systematic Investigation of Tumor Immune Microenvironment Modulation by Cynomorium songaricum Against Breast Cancer",
      author: "Mao ZA, Zhang ML, An ZY, Jin WL",
      journal: "Pharmaceuticals",
      publicationDate: "2026-02-13",
      doi: "10.3390/ph19020314",
      pmid: "41754854",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12944387/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Suo Yang", type: "TRADITIONAL_NAME" },
    { name: "Suoyang", type: "TRADITIONAL_NAME" },
    { name: "Cynomorii Herba", type: "COMMON_NAME" },
    { name: "Cynomorium", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called suo yang; used for centuries to \"tonify kidney yang\" and enrich the blood." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Suo yang is a perennial parasitic plant from the dry regions of Central Asia. In Chinese medicine it has been used for centuries to \"tonify kidney yang\" and enrich \"blood essence\".",
      source: "mao",
    },
    {
      category: "PRECLINICAL",
      summary: "A 2025 review of 92 studies found that its compounds may help metabolic syndrome in lab and animal research: proanthocyanidins reduced sugar absorption and acted as antioxidants, polysaccharides improved insulin sensitivity and gut bacteria, and triterpenoids reduced obesity. These haven't been confirmed in people.",
      source: "liu",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2026 lab and animal study, suo yang affected immune cells around breast tumours and slowed tumour growth.",
      source: "mao",
    },
  ],
});
