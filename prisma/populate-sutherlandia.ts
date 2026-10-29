import { run } from "./lib/populate-herb";

// Sutherlandia (Lessertia frutescens, "cancer bush"), from a 2025 review
// (Ndjoubi et al.) and a 2025 critical review of its cancer research (Gernandt
// & van der Kooy). Family per GBIF.

run({
  name: "Sutherlandia",
  profile: {
    family: "Fabaceae",
    genus: "Lessertia",
    species: "frutescens",
    nativeRange: "The drier regions of southern Africa",
    partsUsed: "The leaves and shoots",
  },
  sources: {
    ndjoubi: {
      title: "Phytochemistry, Ethnopharmacology, and Pharmacology of Lessertia frutescens (Cancer Bush): A Comprehensive Review",
      author: "Ndjoubi KO, Sharma R, Hussein AA",
      journal: "Plants",
      publicationDate: "2025-07-08",
      doi: "10.3390/plants14142086",
      pmid: "40733322",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12299841/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gernandt: {
      title: "The \"Cancer Bush\" Sutherlandia (syn. Lessertia) frutescens. An Example of Promotional Research, or Is There Scientific Merit?",
      author: "Gernandt N, van der Kooy F",
      journal: "Planta Medica",
      publicationDate: "2025-08-05",
      doi: "10.1055/a-2654-6280",
      pmid: "40763763",
      url: "https://pubmed.ncbi.nlm.nih.gov/40763763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cancer Bush", type: "COMMON_NAME" },
    { name: "Sutherlandia frutescens", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "One of South Africa's most popular medicinal plants." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sutherlandia, or cancer bush, is one of South Africa's most widely used medicinal plants. It's used by Indigenous communities and, as its name suggests, to prevent and treat cancer.",
      source: "ndjoubi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, it has shown effects on cancer cells, the immune system, inflammation, blood sugar, stress and microbes.",
      source: "ndjoubi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 critical review found that many cancer studies of Sutherlandia used far too-high doses or lacked proper controls, making them look overly hopeful. It concluded that the plant doesn't show acceptable anticancer activity, and there are no rigorous animal studies or clinical trials.",
      source: "gernandt",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "The reviewers say Sutherlandia shouldn't currently be recommended for cancer, partly because of possible interactions with other medicines.",
      source: "gernandt",
    },
  ],
});
