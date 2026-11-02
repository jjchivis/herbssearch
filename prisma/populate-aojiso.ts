import { run } from "./lib/populate-herb";

// Aojiso (green shiso leaf, Perilla frutescens), from a 2018 review of perilla
// (Ahmed) and a 2023 review of human studies (Adam et al.). The seed has its
// own page, Shiso Perilla Seeds. Family per GBIF.

run({
  name: "Aojiso",
  profile: {
    family: "Lamiaceae",
    genus: "Perilla",
    species: "frutescens",
    nativeRange: "East and South Asia",
    partsUsed: "The leaves",
  },
  sources: {
    ahmed: {
      title: "Ethnomedicinal, Phytochemical and Pharmacological Investigations of Perilla frutescens (L.) Britt.",
      author: "Ahmed HM",
      journal: "Molecules",
      publicationDate: "2018-12-28",
      doi: "10.3390/molecules24010102",
      pmid: "30597896",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6337106/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adam: {
      title: "Applications of Perilla frutescens Extracts in Clinical Practice",
      author: "Adam G, Robu S, Flutur MM, et al.",
      journal: "Antioxidants",
      publicationDate: "2023-03-16",
      doi: "10.3390/antiox12030727",
      pmid: "36978975",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10045045/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Green Shiso", type: "COMMON_NAME" },
    { name: "Shiso Leaf", type: "COMMON_NAME" },
    { name: "Perilla Leaf", type: "COMMON_NAME" },
    { name: "Perillae Folium", type: "TRADITIONAL_NAME" },
  ],
  constituents: [{ name: "Rosmarinic acid", slug: "rosmarinic-acid", type: "phenolic acid" }],
  traditions: [{ slug: "traditional-chinese-medicine", notes: "Perilla leaf (Perillae Folium) is listed in the Chinese and Japanese pharmacopoeias." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Perilla leaf is an official herbal medicine in the Chinese and Japanese pharmacopoeias. Perilla has traditionally been used for coughs, colds and flu, fever, headache, a stuffy nose, nausea and vomiting, indigestion, allergies and anxiety.",
      source: "ahmed",
    },
    {
      category: "TRADITIONAL",
      summary: "The leaves are eaten as a spicy vegetable and herb across East Asia. Leaves range from green to purple, and both colors can appear in the same variety.",
      source: "ahmed",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of human studies found perilla extracts helped allergic hay fever and itchy, watery eyes, especially in young people, and lowered blood fats. Most perilla research is in animals and cells, so more controlled trials are needed.",
      source: "adam",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Rosmarinic acid, a main compound in perilla, reduced allergic reactions in rats and mice about as well as a whole perilla decoction.",
      source: "adam",
    },
  ],
  symptoms: [
    { slug: "hay-fever", notes: "Perilla extracts helped allergic hay fever and itchy eyes in human studies, especially in young people." },
    { slug: "colds-and-congestion", notes: "A traditional remedy for colds, flu and a stuffy nose. Not tested for colds in people." },
    { slug: "occasional-nausea", notes: "Traditionally used for nausea and vomiting. Not studied in people." },
  ],
});
