import { run } from "./lib/populate-herb";

// Bidens pilosa, from a 2025 systematic review of 50 studies (Etukudo et al.).
// Family per GBIF.

run({
  name: "Bidens Pilosa",
  profile: {
    family: "Asteraceae",
    genus: "Bidens",
    species: "pilosa",
    nativeRange: "The Americas; now a common weed throughout the tropics",
    partsUsed: "The leaves and whole plant",
  },
  sources: {
    etukudo: {
      title: "Exploring the phytochemical profile, antioxidant and anti-inflammatory potential of Bidens pilosa: A Systematic Review",
      author: "Etukudo EM, Usman IM, Oviosun A, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-08-01",
      doi: "10.3389/fphar.2025.1569527",
      pmid: "40822453",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12355053/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Blackjack", type: "COMMON_NAME" },
    { name: "Spanish Needles", type: "COMMON_NAME" },
    { name: "Beggar's Ticks", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 review of 50 studies, mostly from Africa, Asia and South America, found Bidens pilosa consistently showed antioxidant activity and may help reduce inflammation. Most studies were in the lab or in animals; only 2 involved people. It lowered several inflammation signals and raised the body's own antioxidant glutathione.\n\nTechnical detail: reduced TNF, IL-6, IL-1β, IL-8 and malondialdehyde.",
      source: "etukudo",
    },
  ],
});
