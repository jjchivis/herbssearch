import { run } from "./lib/populate-herb";

// Sweet Birch (Betula lenta), from a 2022 study of its bark oil and of
// commercial "birch oils" (Dosoky et al.). Safety notes on methyl salicylate
// come from the 2024 wintergreen review (Michel & Olszewska), labeled so.
// Family per GBIF.

run({
  name: "Sweet Birch",
  profile: {
    family: "Betulaceae",
    genus: "Betula",
    species: "lenta",
    nativeRange: "Eastern North America",
    partsUsed: "The bark and its essential oil",
  },
  sources: {
    dosoky: {
      title: "Authentication and Market Survey of Sweet Birch (Betula lenta L.) Essential Oil",
      author: "Dosoky NS, Poudel A, Satyal P",
      journal: "Plants",
      publicationDate: "2022-08-16",
      doi: "10.3390/plants11162132",
      pmid: "36015435",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9412571/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
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
  synonyms: [{ name: "Black Birch", type: "COMMON_NAME" }, { name: "Cherry Birch", type: "COMMON_NAME" }],
  constituents: [{ name: "Methyl Salicylate", slug: "methyl-salicylate", type: "salicylate" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Oil distilled from sweet birch bark is 93–99.8% methyl salicylate, the same aspirin-like compound as in wintergreen oil.",
      source: "dosoky",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "None of 27 commercial \"sweet birch oils\" tested was genuine. They contained wintergreen oil, synthetic methyl salicylate or castor oil instead.",
      source: "dosoky",
    },
    {
      category: "TOXICITY",
      description:
        "Oils that are mostly methyl salicylate are highly poisonous if swallowed: in wintergreen oil, as little as 4 mL can kill a child.",
      source: "michel",
    },
  ],
});
