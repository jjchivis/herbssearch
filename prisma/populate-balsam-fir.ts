import { run } from "./lib/populate-herb";

// Balsam Fir (Abies balsamea), from a 2022 study of its needles and oil
// against ticks (Adamo et al.). No medicinal or safety studies were found.
// Family per GBIF.

run({
  name: "Balsam Fir",
  profile: {
    family: "Pinaceae",
    genus: "Abies",
    species: "balsamea",
    nativeRange: "Eastern and central Canada and the northeastern United States",
    partsUsed: "The needles and resin",
  },
  sources: {
    adamo: {
      title: "Balsam fir (Abies balsamea) needles and their essential oil kill overwintering ticks (Ixodes scapularis) at cold temperatures",
      author: "Adamo SA, El Nabbout A, Ferguson LV, Zbarsky JS, Faraone N",
      journal: "Scientific Reports",
      publicationDate: "2022-07-29",
      doi: "10.1038/s41598-022-15164-z",
      pmid: "35906288",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9338056/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Beta-Pinene", slug: "beta-pinene", type: "monoterpene" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Balsam fir needles and their essential oil killed blacklegged ticks, which spread Lyme disease, during winter. The oil worked within days at cold temperatures, and one of its main compounds, beta-pinene, also killed ticks.",
      source: "adamo",
    },
  ],
});
