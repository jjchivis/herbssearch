import { run } from "./lib/populate-herb";

// Muna, muña (Minthostachys mollis), from a 2026 study of its essential oil
// (Herrera-Calderon et al.) and a 2025 field study of repellent plants in
// Peruvian potato stores (Villanueva et al.). No human or safety studies were
// found. Family per GBIF.

run({
  name: "Muna",
  profile: {
    family: "Lamiaceae",
    genus: "Minthostachys",
    species: "mollis",
    nativeRange: "The Andes of Venezuela to Bolivia",
    partsUsed: "The leaves",
  },
  sources: {
    herrera: {
      title: "Chemical and enantioselective GC-MS characterization of Minthostachys mollis (Benth.) Griseb. Essential oil from Peru and its acetylcholinesterase inhibitory activity",
      author: "Herrera-Calderon O, Calva J, Guzmán-Flores JM, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-06-24",
      doi: "10.3389/fphar.2026.1864128",
      pmid: "42422091",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13341438/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    villanueva: {
      title: "Effectiveness of Repellent Plants for Controlling Potato Tuber Moth (Symmetrischema tangolias) in the Andean Highlands",
      author: "Villanueva A, Escobal F, Cabrera H, et al.",
      journal: "Insects",
      publicationDate: "2025-12-24",
      doi: "10.3390/insects17010024",
      pmid: "41598878",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12842404/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Muña", type: "REGIONAL_NAME", region: "Peru" },
    { name: "Andean Mint", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Pulegone", slug: "pulegone", type: "monoterpene" },
    { name: "Carvacrol", slug: "carvacrol", type: "monoterpene" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Muña is an aromatic mint-family plant widely used in traditional medicine in Peru.",
      source: "herrera",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Andean farmers layer dried muña leaves in sacks of stored seed potatoes to keep pests away. In a 187-day trial in Peru, this cut potato moth damage and larvae by roughly 80–90%.",
      source: "villanueva",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The leaf oil is mostly pulegone (about 64%), with carvacrol and 1,8-cineole. In lab tests, it moderately blocked an enzyme that breaks down a memory-related brain messenger.\n\nTechnical detail: acetylcholinesterase IC50 466.4 µg/mL.",
      source: "herrera",
    },
  ],
});
