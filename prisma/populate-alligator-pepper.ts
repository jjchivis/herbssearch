import { run } from "./lib/populate-herb";

// Alligator Pepper (Aframomum melegueta, grains of paradise), from a 2025
// pilot trial (Pérez-Machín et al.). Family per GBIF.

run({
  name: "Alligator Pepper",
  profile: {
    family: "Zingiberaceae",
    genus: "Aframomum",
    species: "melegueta",
    nativeRange: "Coastal West Africa",
    partsUsed: "The pungent seeds",
  },
  sources: {
    perez: {
      title: "Aframomum melegueta Seed Extract's Effects on Anxiety, Stress, Mood, and Sleep: A Randomized, Double-Blind, Pilot Clinical Trial",
      author: "Pérez-Machín R, Vega-Morales T, Elvira-Aranda C, et al.",
      journal: "Pharmaceuticals",
      publicationDate: "2025-02-19",
      doi: "10.3390/ph18020278",
      pmid: "40006090",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11859572/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Grains of Paradise", type: "COMMON_NAME" },
    { name: "Melegueta Pepper", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "6-Paradol", slug: "6-paradol", type: "vanilloid" },
    { name: "6-Gingerol", slug: "6-gingerol", type: "vanilloid" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "The pungent seeds are widely used in African folk medicine." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Alligator pepper, a relative of ginger, has pungent seeds widely used in African folk medicine.",
      source: "perez",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small pilot trial, healthy adults with moderate anxiety took 50–150 mg of a seed extract a day for 2 days. They reported less anxiety and stress, better mood and better sleep. No side effects were reported. This was a short, small study.\n\nTechnical detail: randomized, double-blind; extract standardized to 10% vanilloids (6-gingerol, 6-shogaol, 6-paradol); acted on TRPV1, CB2 and 5-HT1A receptors and inhibited FAAH in lab tests.",
      source: "perez",
    },
  ],
});
