import { run } from "./lib/populate-herb";

// Gudmar (Gymnema sylvestre, gurmar), from a 2026 review of its effects on
// diabetes (Ziyanok-Demirtas & Serin) and a 2025 review of herbal medicines for
// diabetes (Chahrour et al.). Family per GBIF.

run({
  name: "Gudmar",
  profile: {
    family: "Apocynaceae",
    genus: "Gymnema",
    species: "sylvestre",
    nativeRange: "India, tropical Africa and Australia",
    partsUsed: "The leaves",
  },
  sources: {
    ziyanok: {
      title: "Gymnema sylvestre as a Multi-Target Antidiabetic Agent: Mechanistic Insights and Metabolic Regulation",
      author: "Ziyanok-Demirtas S, Serin I",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-06-22",
      doi: "10.3390/ijms27125609",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13299998/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chahrour: {
      title: "Herbal Medicines in the Management of Diabetes Mellitus: Plants, Bioactive Compounds, and Mechanisms of Action",
      author: "Chahrour JA, Abdel Baki Z, El Badan D, Nasser G, Maresca M, Hijazi A",
      journal: "Biomolecules",
      publicationDate: "2025-12-01",
      doi: "10.3390/biom15121674",
      pmid: "41463330",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12731053/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Gurmar", type: "COMMON_NAME" },
    { name: "Gymnema", type: "COMMON_NAME" },
    { name: "Madhunashini", type: "TRADITIONAL_NAME" },
    { name: "Meshashringi", type: "TRADITIONAL_NAME" },
  ],
  constituents: [
    { name: "Gymnemic Acids", slug: "gymnemic-acids", type: "triterpenoid saponin" },
    { name: "Gurmarin", slug: "gurmarin", type: "peptide" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Called gurmar, \"sugar destroyer\"; described in the Charaka and Sushruta Samhitas for diabetes." }],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "Used in Ayurveda for diabetes; lowered blood sugar in animal studies, with mixed results in people.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Gudmar's Hindi name, gurmar, means \"sugar destroyer\", because it can block the taste of sweetness. It is described in the classic Ayurvedic texts and widely used in Ayurveda for diabetes, and also for digestive, liver, breathing, heart, skin and eye problems.",
      source: "ziyanok",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats and rabbits, leaf extracts lowered blood sugar and raised insulin, and in rabbits it added to the effect of the diabetes drug metformin. Researchers think it helps regrow insulin-making cells in the pancreas and slows sugar absorption from the gut.",
      source: "chahrour",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies in people with diabetes found benefits, but results vary. In one study of people with metabolic syndrome, it didn't change how well the body used insulin, possibly because most of them had normal blood sugar to begin with.",
      source: "ziyanok",
    },
  ],
});
