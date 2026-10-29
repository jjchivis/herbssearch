import { run } from "./lib/populate-herb";

// Iron Bush (Fagonia schweinfurthii), from a 2013 lab and rat study of its
// effect on the liver (Pareek et al.). No human or safety studies were found.
// Family per GBIF.

run({
  name: "Iron Bush",
  profile: {
    family: "Zygophyllaceae",
    genus: "Fagonia",
    species: "schweinfurthii",
    nativeRange: "The deserts and dry areas of India",
    partsUsed: "The whole plant",
  },
  sources: {
    pareek: {
      title: "Antioxidant and hepatoprotective activity of Fagonia schweinfurthii (Hadidi) Hadidi extract in carbon tetrachloride induced hepatotoxicity in HepG2 cell line and rats",
      author: "Pareek A, Godavarthi A, Issarani R, Nagori BP",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2013-10-17",
      doi: "10.1016/j.jep.2013.09.048",
      pmid: "24140589",
      url: "https://pubmed.ncbi.nlm.nih.gov/24140589/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In the deserts and dry areas of India, the whole plant is used for many illnesses, including liver problems.",
      source: "pareek",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests and in rats, an extract was a strong antioxidant and protected liver cells and the liver from a chemical that damages it, bringing liver test results back toward normal.",
      source: "pareek",
    },
  ],
});
