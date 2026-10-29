import { run } from "./lib/populate-herb";

// Cardinal Flower (Lobelia cardinalis), from a 2016 lab and rat study of its
// main alkaloid, lobinaline (Brown et al.). No human or safety studies were
// found. Family per GBIF.

run({
  name: "Cardinal Flower",
  profile: {
    family: "Campanulaceae",
    genus: "Lobelia",
    species: "cardinalis",
    nativeRange: "North and Central America",
    partsUsed: "The whole plant has been studied",
  },
  sources: {
    brown: {
      title: "Novel multifunctional pharmacology of lobinaline, the major alkaloid from Lobelia cardinalis",
      author: "Brown DP, Rogers DT, Pomerleau F, et al.",
      journal: "Fitoterapia",
      publicationDate: "2016-04-20",
      doi: "10.1016/j.fitote.2016.04.013",
      pmid: "27105955",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5299595/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Lobinaline", slug: "lobinaline", type: "alkaloid" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Cardinal flower's main alkaloid, lobinaline, acts on the same brain receptors as nicotine and on dopamine, a brain messenger. In lab and rat studies, it was a strong antioxidant and slowed dopamine clearance. Researchers see it as a lead for Parkinson's disease and addiction research.\n\nTechnical detail: binds α4β2 and α7 nicotinic acetylcholine receptors; inhibits the dopamine transporter.",
      source: "brown",
    },
  ],
});
