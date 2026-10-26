import { run } from "./lib/populate-herb";

// Mandrake (Mandragora autumnalis, the purple-flowered Mediterranean mandrake
// shown on the card), from a 2025 review (Albahri et al.). Family per GBIF.

run({
  name: "Mandrake",
  profile: {
    family: "Solanaceae",
    genus: "Mandragora",
    species: "autumnalis",
    nativeRange: "The Mediterranean region",
    partsUsed: "The root, leaves and berries",
  },
  sources: {
    albahri: {
      title: "Mandragora autumnalis Distribution, Phytochemical Characteristics, and Pharmacological Bioactivities",
      author: "Albahri G, Badran A, Baki ZA, et al.",
      journal: "Pharmaceuticals",
      publicationDate: "2025-02-26",
      doi: "10.3390/ph18030328",
      pmid: "40143106",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11944648/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Autumn Mandrake", type: "COMMON_NAME" }],
  constituents: [
    { name: "Scopolamine", slug: "scopolamine", type: "tropane alkaloid" },
    { name: "Hyoscyamine", slug: "hyoscyamine", type: "tropane alkaloid" },
    { name: "Atropine", slug: "atropine", type: "tropane alkaloid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Mandrake has long been used in herbal medicine around the Mediterranean and is famous in myth. It has been used as a hallucinogen, to boost fertility, and for ulcers, inflammation, sleeplessness and eye problems. In North Africa and Jordan, the leaves are taken for coughs, asthma and bronchitis.",
      source: "albahri",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The root is rich in tropane alkaloids such as scopolamine and hyoscyamine. In lab studies, extracts showed antioxidant activity, killed some bacteria, fungi and cancer cells, and blocked enzymes involved in blood sugar.",
      source: "albahri",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Mandrake's alkaloids block a key nerve messenger (acetylcholine) throughout the body. This can change breathing and heart rate and cause muscle twitching and hallucinations.",
      source: "albahri",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Putting the root or its sap on the skin has caused redness, swelling, burning and scaly patches.",
      source: "albahri",
    },
  ],
});
