import { run } from "./lib/populate-herb";

// Diosma (Coleonema album), from a 2017 lab study of its essential oil and leaf
// extracts (Fajinmi et al.). No human or safety studies were found. Family per
// GBIF.

run({
  name: "Diosma",
  profile: {
    family: "Rutaceae",
    genus: "Coleonema",
    species: "album",
    nativeRange: "South Africa",
    partsUsed: "The leaves and their essential oil",
  },
  sources: {
    fajinmi: {
      title: "Antifungal and antioxidant activities of Coleonema album and C. pulchellum against skin diseases",
      author: "Fajinmi OO, Grúz J, Tarkowski P, Kulkarni MG, Finnie JF, Van Staden J",
      journal: "Pharmaceutical Biology",
      publicationDate: "2017-12-01",
      doi: "10.1080/13880209.2017.1296470",
      pmid: "28262031",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6130550/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "african-traditional-medicine", notes: "Rubbed on the skin by the Khoisan." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The Khoisan rub diosma on their skin to give it a shine, and it's used in skincare products.",
      source: "fajinmi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, diosma's essential oil, which is mostly terpenes, slowed the growth of Trichophyton rubrum, a fungus behind athlete's foot and ringworm. The researchers suggest it could be used in natural skin ointments.",
      source: "fajinmi",
    },
  ],
});
