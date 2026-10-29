import { run } from "./lib/populate-herb";

// Blackberry (Rubus fruticosus), from a 2014 review of its use as an herbal
// medicine (Verma et al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Blackberry",
  profile: {
    family: "Rosaceae",
    genus: "Rubus",
    species: "fruticosus",
    nativeRange: "Europe; now widespread in temperate regions",
    partsUsed: "The fruit, leaves, roots and stems",
  },
  sources: {
    verma: {
      title: "Rubus fruticosus (blackberry) use as an herbal medicine",
      author: "Verma R, Gangrade T, Punasiya R, Ghulaxe C",
      journal: "Pharmacognosy Reviews",
      publicationDate: "2014-07-01",
      doi: "10.4103/0973-7847.134239",
      pmid: "25125882",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4127818/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Bramble", type: "COMMON_NAME" }],
  constituents: [
    { name: "Anthocyanins", slug: "anthocyanins", type: "flavonoid" },
    { name: "Tannins", slug: "tannins", type: "polyphenol" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Wild European blackberry has been widely used in herbal medicine, including for diarrhea and dysentery.",
      source: "verma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The plant contains tannins and gallic acid, and the fruit is rich in vitamin C and anthocyanins (purple pigments). In lab studies, it showed strong antioxidant activity and effects against microbes, cancer cells and high blood sugar.",
      source: "verma",
    },
  ],
});
