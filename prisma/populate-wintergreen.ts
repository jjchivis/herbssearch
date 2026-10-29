import { run } from "./lib/populate-herb";

// Wintergreen (Gaultheria procumbens), from a 2024 review (Michel &
// Olszewska). Family per GBIF.

run({
  name: "Wintergreen",
  profile: {
    family: "Ericaceae",
    genus: "Gaultheria",
    species: "procumbens",
    nativeRange: "Northeastern North America",
    partsUsed: "The leaves, berries and the essential oil distilled from them",
  },
  sources: {
    michel: {
      title: "Phytochemistry and Biological Profile of Gaultheria procumbens L. and Wintergreen Essential Oil: From Traditional Application to Molecular Mechanisms and Therapeutic Targets",
      author: "Michel P, Olszewska MA",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2024-01-01",
      doi: "10.3390/ijms25010565",
      pmid: "38203735",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10778675/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "American Wintergreen", type: "COMMON_NAME" },
    { name: "Eastern Teaberry", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Methyl Salicylate", slug: "methyl-salicylate", type: "salicylate" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Wintergreen has been used for hundreds of years for inflammation and infections, especially rheumatoid arthritis, flu, colds and fever. Its oil is used for muscle pain.",
      source: "michel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Wintergreen oil is almost entirely methyl salicylate, an aspirin-like compound. The plant also contains more than 70 other compounds, including flavonoids. In lab tests, extracts may help reduce inflammation and showed antioxidant activity, but there are no clinical trials.",
      source: "michel",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Wintergreen oil is highly poisonous if swallowed. As little as 4 mL can kill a child and 6 mL an adult. Poisoning causes dizziness, vision and hearing problems, seizures, fluid in the lungs, kidney failure and coma. Large amounts on the skin can also poison you.",
      source: "michel",
    },
  ],
});
