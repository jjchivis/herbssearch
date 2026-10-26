import { run } from "./lib/populate-herb";

// Huacatay (Tagetes minuta), from a 2025 lab study of its essential oil
// (Bordón et al.) and a 2025 review of plants used against ticks in South
// Africa (Makwarela et al.). No human or safety studies were found. Family per
// GBIF.

run({
  name: "Huacatay",
  profile: {
    family: "Asteraceae",
    genus: "Tagetes",
    species: "minuta",
    nativeRange: "Southern South America; now a widespread weed",
    partsUsed: "The leaves and their essential oil",
  },
  sources: {
    bordon: {
      title: "Antimicrobial Action of Essential Oil of Tagetes minuta: Role of the Bacterial Membrane in the Mechanism of Action",
      author: "Bordón A, Rodríguez SA, Chaves DSA, Cutró AC, Hollmann A",
      journal: "Antibiotics",
      publicationDate: "2025-06-21",
      doi: "10.3390/antibiotics14070632",
      pmid: "40723935",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12291637/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    makwarela: {
      title: "Plants Used for Tick and Tick-Borne Disease Control in South Africa: Ethnoveterinary Knowledge, Bioactivity Evidence, and Translation Pathways",
      author: "Makwarela TG, Seoraj-Pillai N, Malatji DP, Nangammbi TC",
      journal: "Plants",
      publicationDate: "2025-12-05",
      doi: "10.3390/plants14243720",
      pmid: "41470604",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12737041/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Black Mint", type: "COMMON_NAME" },
    { name: "Khakibos", type: "REGIONAL_NAME", region: "South Africa" },
    { name: "Wild Marigold", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Tagetone", slug: "tagetone", type: "monoterpene" },
    { name: "Ocimenone", slug: "ocimenone", type: "monoterpene" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In South Africa, where it's called khakibos, communities use it to repel ticks from livestock. Lab tests confirm its oil strongly repels ticks.",
      source: "makwarela",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the leaf oil killed E. coli and Staphylococcus aureus bacteria by damaging their outer membranes.\n\nTechnical detail: main compounds (E)-tagetone, (Z)-ocimenone and β-pinene; E. coli MIC 17 mg/mL; S. aureus MIC 8.5 mg/mL.",
      source: "bordon",
    },
  ],
});
