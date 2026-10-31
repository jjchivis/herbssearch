import { run } from "./lib/populate-herb";

// Cutch Tree (Acacia catechu, syn. Senegalia catechu, khair), from a 2025
// systematic review (Rana et al.), a 2025 mouthrinse trial in children (Joshi
// & Patil) and a 2017 knee osteoarthritis trial of a blend with white mulberry
// (Kalman & Hewlings). Family per GBIF.

run({
  name: "Cutch Tree",
  profile: {
    family: "Fabaceae",
    genus: "Senegalia",
    species: "catechu",
    nativeRange: "The sub-Himalayan region of India, Pakistan, Nepal, Bhutan, Thailand and China",
    partsUsed: "The heartwood (katha and cutch)",
  },
  sources: {
    rana: {
      title: "A Systematic Review Exploring the Phytochemical Composition and Anticancer Activities of Acacia catechu",
      author: "Rana N, Bala M, Kumar V, et al.",
      journal: "Medical Sciences",
      publicationDate: "2025-09-01",
      doi: "10.3390/medsci13030161",
      pmid: "40981159",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12452644/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    joshi: {
      title: "Comparison of antimicrobial efficacy of Acacia catechu mouthrinse and HiOra herbal mouthrinse and their influence on Streptococcus mutans count and Lactobacillus spp. count in children with early childhood caries",
      author: "Joshi M, Patil SB",
      journal: "GMS Hygiene and Infection Control",
      publicationDate: "2025-04-28",
      doi: "10.3205/dgkh000541",
      pmid: "40417280",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12101132/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kalman: {
      title: "The Effects of Morus alba and Acacia catechu on Quality of Life and Overall Function in Adults with Osteoarthritis of the Knee",
      author: "Kalman DS, Hewlings SJ",
      journal: "Journal of Nutrition and Metabolism",
      publicationDate: "2017-09-11",
      doi: "10.1155/2017/4893104",
      pmid: "29085676",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5612321/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Khair", type: "COMMON_NAME" },
    { name: "Catechu", type: "COMMON_NAME" },
    { name: "Acacia catechu", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Known as khair or cutch, this tree has long been used to treat many ailments. In India, katha and cutch, two commercial products, are made from its heartwood.",
      source: "rana",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies found its extracts harmed several kinds of cancer cells.",
      source: "rana",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 60 young children with tooth decay, a cutch mouthrinse used for 16 days reduced decay-causing mouth bacteria compared with no rinse.",
      source: "joshi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 12-week trial of 135 adults with knee osteoarthritis, a blend of cutch and white mulberry eased pain and stiffness, but no more than a placebo did. It did reduce a marker of cartilage breakdown compared with placebo.",
      source: "kalman",
    },
  ],
});
