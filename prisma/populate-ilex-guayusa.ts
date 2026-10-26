import { run } from "./lib/populate-herb";

// Ilex guayusa, from a 2025 review (Noriega et al.). Family per GBIF.

run({
  name: "Ilex Guayusa",
  profile: {
    family: "Aquifoliaceae",
    genus: "Ilex",
    species: "guayusa",
    nativeRange: "The Amazon foothills of Ecuador, Colombia and Peru",
    partsUsed: "The leaves, made into a tea",
  },
  sources: {
    noriega: {
      title: "Guayusa (Ilex guayusa Loes.) Ancestral Plant of Ecuador: History, Traditional Uses, Chemistry, Biological Activity, and Potential Industrial Uses",
      author: "Noriega P, Moreno E, Falcón A, Quishpe V, Noriega PDC",
      journal: "Molecules",
      publicationDate: "2025-07-02",
      doi: "10.3390/molecules30132837",
      pmid: "40649351",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12251278/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Guayusa", type: "COMMON_NAME" }],
  constituents: [{ name: "Caffeine", slug: "caffeine", type: "xanthine alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Guayusa, a caffeine-rich holly, has been drunk for thousands of years by Amazonian peoples of Ecuador. The Kichwa drink it before dawn while telling stories and interpreting dreams, and consider it sacred. Mixed with ginger and lime, it's used for colds. The Achuar drink large amounts and then make themselves vomit, partly to avoid the effects of too much caffeine.",
      source: "noriega",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Its main compounds are caffeine-type alkaloids, terpenes and phenolic compounds. In studies, it acted as a physical and mental stimulant, may relieve pain and reduce inflammation, and showed antioxidant, antimicrobial and blood-sugar effects.",
      source: "noriega",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Too much can cause caffeine side effects such as headaches, nervousness and trembling.",
      source: "noriega",
    },
    {
      category: "TOXICITY",
      description:
        "In animal tests, guayusa showed low toxicity, even at high doses. No safety studies have been done in pregnant women or young children.",
      source: "noriega",
    },
  ],
  preparations: [{ slug: "tea-infusion", notes: "The leaves are brewed into a tea, traditionally before dawn.", source: "noriega" }],
});
