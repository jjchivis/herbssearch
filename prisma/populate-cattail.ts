import { run } from "./lib/populate-herb";

// Cattail (Typha angustifolia, narrowleaf cattail), from a 2012 rat study of
// its pollen (Varpe et al.). No human or safety studies were found. Family
// per GBIF.

run({
  name: "Cattail",
  profile: {
    family: "Typhaceae",
    genus: "Typha",
    species: "angustifolia",
    nativeRange: "Wetlands across North America, Europe and Asia",
    partsUsed: "The pollen",
  },
  sources: {
    varpe: {
      title: "Evaluation of anti-inflammatory activity of Typha angustifolia pollen grains extracts in experimental animals",
      author: "Varpe SS, Juvekar AR, Bidikar MP, Juvekar PR",
      journal: "Indian Journal of Pharmacology",
      publicationDate: "2012-11-01",
      doi: "10.4103/0253-7613.103303",
      pmid: "23248413",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3523511/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Narrowleaf Cattail", type: "COMMON_NAME" }, { name: "Bulrush", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In rats, extracts of cattail pollen reduced both sudden (acute) and long-lasting inflammation. The authors say this supports its traditional use.\n\nTechnical detail: carrageenan paw edema and cotton pellet granuloma models; 44.3% granuloma inhibition at 125 mg/kg.",
      source: "varpe",
    },
  ],
});
