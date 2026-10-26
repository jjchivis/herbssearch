import { run } from "./lib/populate-herb";

// Spikenard (Nardostachys jatamansi), from a 2026 study of its essential oil
// (Zhang et al.), a 2026 lab study on blood-sugar enzymes (Iqbal et al.) and a
// 2026 chemistry study noting it's endangered (Cui et al.). No human or safety
// studies were found. Family per GBIF (Caprifoliaceae, which now includes the
// former valerian family).

run({
  name: "Spikenard",
  profile: {
    family: "Caprifoliaceae",
    genus: "Nardostachys",
    species: "jatamansi",
    nativeRange: "The Himalayas",
    partsUsed: "The fragrant root and rhizome (underground stem)",
  },
  sources: {
    zhang: {
      title: "Chemical analysis, antioxidant and antimicrobial activities of Nardostachys jatamansi essential oil, and computational evaluation of mechanisms",
      author: "Zhang H, Qin H, Zha J, et al.",
      journal: "Frontiers in Nutrition",
      publicationDate: "2026-03-03",
      doi: "10.3389/fnut.2026.1764021",
      pmid: "41852677",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12992287/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    iqbal: {
      title: "Computational-experimental integration identifies potent carbohydrate-hydrolyzing enzyme inhibitors from Nardostachys jatamansi: molecular docking, dynamics and pharmacokinetic predictions",
      author: "Iqbal MJ, Malik I, Bernal G, Salas-Burgos AM, Salazar LA",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-01-12",
      doi: "10.3389/fphar.2025.1713452",
      pmid: "41601970",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12833380/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cui: {
      title: "Comprehensive Liquid Chromatography-Mass Spectrometry-based Metabolite Annotation Elucidates the Chemical Diversity of an Endangered Plant Nardostachys jatamansi",
      author: "Cui Y, Otsuki K, Zhang M, et al.",
      journal: "Journal of Separation Science",
      publicationDate: "2026-07-01",
      doi: "10.1002/jssc.70494",
      pmid: "42494279",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13396975/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jatamansi", type: "REGIONAL_NAME", region: "India" },
    { name: "Nard", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used to regulate qi flow, relieve pain and improve digestion." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In traditional Chinese medicine, spikenard is a valued herb used to \"regulate qi\", relieve pain and help digestion.",
      source: "zhang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the root oil showed strong antioxidant activity and killed Staphylococcus aureus and E. coli bacteria.\n\nTechnical detail: 30 compounds identified by GC-MS; terpenes 68.8%; superoxide scavenging stronger than vitamin C.",
      source: "zhang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a root extract blocked two enzymes that break down starch into sugar, more strongly than the diabetes drug acarbose.\n\nTechnical detail: α-glucosidase IC50 61.7 µg/mL and α-amylase IC50 81.3 µg/mL vs acarbose 132.6 and 112.1 µg/mL.",
      source: "iqbal",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "Spikenard is an endangered plant, so wild-harvested root may come from threatened populations.",
      source: "cui",
    },
  ],
});
