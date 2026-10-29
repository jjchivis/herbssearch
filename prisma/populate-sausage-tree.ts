import { run } from "./lib/populate-herb";

// Sausage Tree (Kigelia africana), from a 2025 lab study of the fruit
// (Mihaylova et al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Sausage Tree",
  profile: {
    family: "Bignoniaceae",
    genus: "Kigelia",
    species: "africana",
    nativeRange: "Tropical and southern Africa",
    partsUsed: "The large sausage-shaped fruit",
  },
  sources: {
    mihaylova: {
      title: "Integrative Evaluation of Kigelia africana Fruit Extract: Broad-Spectrum Anticancer Activity, Synergism with Cisplatin and Mechanistic Insights in Colorectal Carcinoma",
      author: "Mihaylova R, Bebrivenski N, Zheleva-Dimitrova D, et al.",
      journal: "Molecules",
      publicationDate: "2025-12-26",
      doi: "10.3390/molecules31010107",
      pmid: "41515404",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12786661/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Kigelia", type: "COMMON_NAME" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "An established medicinal plant in African traditional medicine." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The sausage tree is an established medicinal plant in African traditional medicine.",
      source: "mihaylova",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on colon cancer cells, a fruit extract moderately slowed the cells and changed proteins linked to cancer spread. Combined with the chemotherapy drug cisplatin, it killed more cancer cells, allowing a lower cisplatin dose.\n\nTechnical detail: HT-29 cells; 14 metabolites identified, including phenolic acids, naphthoquinones and iridoids.",
      source: "mihaylova",
    },
  ],
});
