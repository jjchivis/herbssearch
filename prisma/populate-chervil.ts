import { run } from "./lib/populate-herb";

// Chervil (Anthriscus cerefolium), from a 2025 study of edible Apiaceae plants
// (Nazli et al.), a 2024 study of its compounds and lab effects (Stojković et al.)
// and a 2000 antioxidant study (Fejes et al.). Family per GBIF.

run({
  name: "Chervil",
  profile: { family: "Apiaceae", genus: "Anthriscus", species: "cerefolium", nativeRange: "Southeastern Europe and western Asia", partsUsed: "The leaves" },
  sources: {
    nazli: {
      title: "Malonyl-Caffeoylquinic Acids and Malonyl-Flavonoid-Glucosides from Three Edible Apiaceae Plants Anthriscus Cerefolium, Anthriscus Sylvestris, and Chaerophyllum Bulbosum",
      author: "Nazli A, Gáborová M, Ausbüttel T, et al.",
      journal: "ACS Omega",
      publicationDate: "2025-09-22",
      doi: "10.1021/acsomega.5c03770",
      pmid: "41048795",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12489727/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    stojkovic: {
      title: "Chemical profiling of Anthriscus cerefolium (L.) Hoffm., biological potential of the herbal extract, molecular modeling and KEGG pathway analysis",
      author: "Stojković D, Gašić U, Uba AI, et al.",
      journal: "Fitoterapia",
      publicationDate: "2024-07-06",
      doi: "10.1016/j.fitote.2024.106115",
      pmid: "38977255",
      url: "https://doi.org/10.1016/j.fitote.2024.106115",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fejes: {
      title: "In vitro antioxidant activity of Anthriscus cerefolium L. (Hoffm.) extracts",
      author: "Fejes S, Blázovics A, Lugasi A, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2000-03-01",
      doi: "10.1016/s0378-8741(99)00171-3",
      pmid: "10722209",
      url: "https://doi.org/10.1016/s0378-8741(99)00171-3",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "French Parsley", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A delicate, parsley-like kitchen herb with a mild anise flavor, also called French parsley and used as a seasoning. In traditional medicine it's been used to reduce inflammation, lower blood pressure and increase urine.",
      source: "nazli",
    },
    {
      category: "PRECLINICAL",
      summary: "The leaves are rich in phenolic compounds, mainly caffeoylquinic acids. In lab tests an extract fought germs and oxidation and may help reduce inflammation.",
      source: "stojkovic",
    },
    {
      category: "PRECLINICAL",
      summary: "Water extracts of the herb protected fats from oxidation in lab tests better than root extracts.",
      source: "fejes",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "It's widely eaten as a herb, but no human medical or safety studies were found.",
      source: "stojkovic",
    },
  ],
});
