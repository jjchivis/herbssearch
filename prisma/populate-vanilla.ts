import { run } from "./lib/populate-herb";

// Vanilla (Vanilla planifolia), from a 2024 review of medicinal orchids of
// Mexico (Castillo-Pérez et al.).

run({
  name: "Vanilla",
  profile: {
    family: "Orchidaceae",
    genus: "Vanilla",
    species: "planifolia",
    nativeRange: "Mexico",
    partsUsed: "The cured seed pods (vanilla beans) and the flowers",
  },
  sources: {
    castillo: {
      title: "Medicinal Orchids of Mexico: A Review",
      author: "Castillo-Pérez LJ, Ponce-Hernández A, Alonso-Castro AJ, et al.",
      journal: "Pharmaceuticals (Basel)",
      publicationDate: "2024-07-08",
      doi: "10.3390/ph17070907",
      pmid: "39065757",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11279439/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Tlilxochitl", type: "TRADITIONAL_NAME" },
    { name: "Xanat", type: "TRADITIONAL_NAME" },
    { name: "Vainilla", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Vanilla Bean", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Vanilla, called tlilxochitl, was the first native Mexican orchid whose medicinal uses were written down after the Spanish arrived, in a 1552 herbal by Martín de la Cruz. In Mexican traditional medicine, the pods and flowers have been used:\n- To flavor chocolate and drinks\n- For tiredness and nervous complaints\n- For stomach and gut problems, and pain and inflammation\n- To lower fever and increase urination\n- To bring on menstruation and speed up childbirth",
      source: "castillo",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "In Mexican traditional medicine, vanilla has been used to bring on menstruation and to speed up childbirth. Its effects in pregnancy haven't been studied.",
      source: "castillo",
    },
  ],
});
