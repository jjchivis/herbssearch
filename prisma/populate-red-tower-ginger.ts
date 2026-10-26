import { run } from "./lib/populate-herb";

// Red Tower Ginger (Costus comosus), from a 2024 review of Ecuadorian
// medicinal plants used for diabetes (Bhattacharya et al.). No human or safety
// studies were found. Family per GBIF.

run({
  name: "Red Tower Ginger",
  profile: {
    family: "Costaceae",
    genus: "Costus",
    species: "comosus",
    nativeRange: "Ecuador and nearby parts of tropical South and Central America",
    partsUsed: "The leaves, stems and rhizome (underground stem)",
  },
  sources: {
    bhattacharya: {
      title: "Exploring Folklore Ecuadorian Medicinal Plants and Their Bioactive Components Focusing on Antidiabetic Potential: An Overview",
      author: "Bhattacharya S, Gupta N, Flekalová A, et al.",
      journal: "Plants",
      publicationDate: "2024-05-22",
      doi: "10.3390/plants13111436",
      pmid: "38891245",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11174784/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Caña", type: "REGIONAL_NAME", region: "Ecuador" }],
  constituents: [{ name: "Camphene", slug: "camphene", type: "monoterpene" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ecuador, the leaves and rhizome have traditionally been used for:\n- fever and rashes\n- asthma and bronchitis\n- intestinal worms\n- diabetes\n- liver diseases\nThe stem is boiled into a decoction.",
      source: "bhattacharya",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a stem extract blocked an enzyme that breaks down starch into sugar, more strongly than the diabetes drug acarbose did.\n\nTechnical detail: methanolic extract α-glucosidase IC50 57.9 µg/mL vs acarbose 964.6 µg/mL.",
      source: "bhattacharya",
    },
  ],
});
