import { run } from "./lib/populate-herb";

// Palo Santo (Bursera graveolens), from a 2024 survey of incense sold in the
// Netherlands (Pombo Geertsma et al.) and lab and animal studies of the
// essential oil (Sosa et al. 2023; Parichanon et al. 2025; Figueiredo et al.
// 2026). No source for traditional medicinal use was found. Family per GBIF.

run({
  name: "Palo Santo",
  profile: {
    family: "Burseraceae",
    genus: "Bursera",
    species: "graveolens",
    nativeRange: "Dry forests from Mexico to northwestern Venezuela and Peru",
    partsUsed: "The fragrant wood, burned as incense, and its essential oil",
  },
  sources: {
    pombo: {
      title: "Commercialized \"Smudge Sticks\" Used as Incense in the Netherlands: An Inventory of Plants and Trends Behind a New Age Fashion",
      author: "Pombo Geertsma I, Zandstra BE, Stefanaki A, van Andel TR",
      journal: "Plants",
      publicationDate: "2024-10-27",
      doi: "10.3390/plants13213003",
      pmid: "39519920",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11547997/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sosa: {
      title: "Therapeutic Applications of Essential Oils from Native and Cultivated Ecuadorian Plants: Cutaneous Candidiasis and Dermal Anti-Inflammatory Activity",
      author: "Sosa L, Espinoza LC, Valarezo E, et al.",
      journal: "Molecules",
      publicationDate: "2023-08-05",
      doi: "10.3390/molecules28155903",
      pmid: "37570874",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10420932/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    parichanon: {
      title: "Chemical Profiling, Sensory Qualities, and Bioactivities of Essential Oils Obtained from Aloysia citrodora and Bursera graveolens Ecuadorian Plants Against the Mosquito Aedes albopictus (Skuse) (Diptera: Culicidae)",
      author: "Parichanon P, Ascrizzi R, Tani C, et al.",
      journal: "Insects",
      publicationDate: "2025-02-12",
      doi: "10.3390/insects16020202",
      pmid: "40003832",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11857052/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    figueiredo: {
      title: "Palo Santo (Bursera graveolens) essential oil nanoemulsion: toxicological, antinociceptive and antimicrobial potential against bovine mastitis-associated strains",
      author: "Figueiredo AM, Dos Reis SVV, Rodrigues AA, et al.",
      journal: "Antonie van Leeuwenhoek",
      publicationDate: "2026-04-30",
      doi: "10.1007/s10482-026-02322-w",
      pmid: "42060026",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13133217/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Holy Wood", type: "COMMON_NAME" }],
  constituents: [{ name: "Limonene", slug: "limonene", type: "monoterpene" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sticks of palo santo wood are sold to burn as incense, often in \"energy cleansing\" kits alongside white sage. Some sellers know about overharvesting and illegal harvesting but sell it because customers ask for it.",
      source: "pombo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The essential oil is mostly limonene. In lab and mouse tests, it was well tolerated on the skin, killed Candida yeasts and reduced skin swelling.",
      source: "sosa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, the oil reduced pain responses and showed no signs of liver damage. In lab tests, it killed Staphylococcus aureus bacteria, including the drug-resistant strain MRSA.\n\nTechnical detail: D-limonene 38.7%; acetic acid writhing and formalin tests; nanoemulsion form.",
      source: "figueiredo",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Put on people's skin, palo santo oil repelled tiger mosquitoes for more than 45 minutes, about as well as DEET did in the first 15 minutes. It also stopped mosquitoes laying eggs. People found its smell less pleasant than lemon verbena oil.\n\nTechnical detail: 0.20 µL/cm²; RD50 0.136 µL/cm²; 64% fewer eggs at 200 µL/L.",
      source: "parichanon",
    },
  ],
});
