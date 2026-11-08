import { run } from "./lib/populate-herb";

// Lily bulb (Lilium species such as L. brownii and L. lancifolium), known in Chinese medicine as Baihe. Sources: a 2024 review of L. brownii as food and medicine and a 2017 lab study of L. lancifolium polysaccharides. Family per GBIF. No source covering safety was found, so none is stated.

run({
  name: "Lily Bulb",
  profile: {
    family: "Liliaceae",
    genus: "Lilium",
    species: "brownii",
    partsUsed: "The bulb scales",
  },
  sources: {
    wangYF: {
      title: "Lilium brownii/Baihe as Nutraceuticals: Insights into Its Composition and Therapeutic Properties",
      author: "Wang YF, An ZY, Yuan LQ, et al.",
      journal: "Pharmaceuticals",
      publicationDate: "2024-09-20",
      pmid: "39338404",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/ph17091242",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11434738/",
    },
    pan: {
      title: "Immune-enhancing effects of polysaccharides extracted from Lilium lancifolium Thunb.",
      author: "Pan G, Xie Z, Huang S, et al.",
      journal: "International Immunopharmacology",
      publicationDate: "2017-11-01",
      pmid: "28898768",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.intimp.2017.08.030",
      url: "https://doi.org/10.1016/j.intimp.2017.08.030",
    },
  },
  synonyms: [{ name: "Baihe", type: "COMMON_NAME" }, { name: "Lilii Bulbus", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Baihe preparations have been used for breathing problems." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "Lily bulb, known in China as Baihe, has a long history as both food and medicine. Preparations based on it have been used for breathing problems in traditional Chinese medicine, and Lanzhou lily is eaten as a vegetable.", source: "wangYF" },
    { category: "PRECLINICAL", summary: "Sugars (polysaccharides) from tiger lily bulbs (Lilium lancifolium) made immune cells more active in a 2017 lab study.", source: "pan" },
  ],
});
