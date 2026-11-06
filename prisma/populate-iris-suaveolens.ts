import { run } from "./lib/populate-herb";

// Iris Suaveolens (Iris suaveolens), from a 2011 study of its rhizome compounds
// (Hacibekiroğlu and Kolak). Family per GBIF.

run({
  name: "Iris Suaveolens",
  profile: { family: "Iridaceae", genus: "Iris", species: "suaveolens", partsUsed: "The rhizomes" },
  sources: {
    hacibekiroglu: {
      title: "Antioxidant and anticholinesterase constituents from the petroleum ether and chloroform extracts of Iris suaveolens",
      author: "Hacibekiroğlu I, Kolak U",
      journal: "Phytotherapy Research",
      publicationDate: "2010-09-09",
      doi: "10.1002/ptr.3299",
      pmid: "20830698",
      url: "https://doi.org/10.1002/ptr.3299",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary: "In lab tests, rhizome extracts were antioxidant and blocked enzymes that break down acetylcholine, a target in Alzheimer's research. One compound, coniferaldehyde, was the strongest antioxidant. It hasn't been tested in people.",
      source: "hacibekiroglu",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "hacibekiroglu",
    },
  ],
});
