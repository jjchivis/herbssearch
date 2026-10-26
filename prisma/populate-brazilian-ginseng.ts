import { run } from "./lib/populate-herb";

// Brazilian Ginseng, suma (Hebanthe eriantha, formerly Pfaffia paniculata), a
// different species from Pfaffia glomerata. From two lab studies of the root
// (Rahamouz-Haghighi & Sharafi 2023; Miranda et al. 2024). No human or safety
// studies were found. Family per GBIF.

run({
  name: "Brazilian Ginseng",
  profile: {
    family: "Amaranthaceae",
    genus: "Hebanthe",
    species: "eriantha",
    nativeRange: "Brazil and other parts of South America",
    partsUsed: "The root",
  },
  sources: {
    rahamouz: {
      title: "Antiproliferative assay of suma or Brazilian ginseng (Hebanthe eriantha) methanolic extract on HCT116 and 4T1 cancer cell lines, in vitro toxicity on Artemia salina larvae, and antibacterial activity",
      author: "Rahamouz-Haghighi S, Sharafi A",
      journal: "Natural Product Research",
      publicationDate: "2023-06-19",
      doi: "10.1080/14786419.2023.2225688",
      pmid: "37337697",
      url: "https://pubmed.ncbi.nlm.nih.gov/37337697/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    miranda: {
      title: "Pfaffia paniculata Extract, a Potential Antimicrobial Agent against Candida spp., Pseudomonas aeruginosa, and Streptococcus mutans Biofilms",
      author: "Miranda DG, Ramos LP, Attik N, et al.",
      journal: "Microorganisms",
      publicationDate: "2024-06-08",
      doi: "10.3390/microorganisms12061165",
      pmid: "38930547",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11205454/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Suma", type: "COMMON_NAME" },
    { name: "Pfaffia paniculata", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Pfaffosides", slug: "pfaffosides", type: "saponin" },
    { name: "Beta-Ecdysone (20-Hydroxyecdysone)", slug: "20-hydroxyecdysone", type: "phytosteroid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Suma is used in folk medicine and is sold commercially. In Brazil it's nicknamed \"cure-everything\", though its proven effects are limited.",
      source: "miranda",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a root extract killed colon and breast cancer cells, slowed some bacteria, and was moderately toxic to brine shrimp.\n\nTechnical detail: IC50 272.6 µg/mL (HCT116) and 88.5 µg/mL (4T1) at 72 h; Artemia salina LC50 589.4 µg/mL.",
      source: "rahamouz",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a root extract weakened films of Candida yeast and of bacteria involved in tooth decay and infections. It also harmed human gum cells at higher doses.\n\nTechnical detail: Candida spp., Streptococcus mutans and Pseudomonas aeruginosa biofilms; FMM-1 fibroblast viability 55–66%.",
      source: "miranda",
    },
  ],
});
