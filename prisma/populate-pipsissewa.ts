import { run } from "./lib/populate-herb";

// Pipsissewa (Chimaphila umbellata), from a 2025 review and survey of eastern
// Kentucky medicinal plants (Veldhi et al.). No human or safety studies were
// found. Family per GBIF.

run({
  name: "Pipsissewa",
  profile: {
    family: "Ericaceae",
    genus: "Chimaphila",
    species: "umbellata",
    nativeRange: "Temperate forests of North America, Europe and Asia",
    partsUsed: "The leaves",
  },
  sources: { veldhi: { title: "A Review and Survey of Local Eastern Kentucky Medicinal Plants and Their Pharmacological Benefits", author: "Veldhi P, Crager C, Ghayur A, Ul-Haq Z, Ghayur MN", journal: "Plants", publicationDate: "2025-10-16", doi: "10.3390/plants14203182", pmid: "41157739", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566942/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" } },
  synonyms: [{ name: "Prince's Pine", type: "COMMON_NAME" }],
  constituents: [{ name: "Chimaphilin", slug: "chimaphilin", type: "naphthoquinone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In eastern Kentucky, the leaves are used for rheumatism. As early as 1844, pipsissewa was used for inflamed joint linings and damaged cartilage.",
      source: "veldhi",
    },
    {
      category: "PRECLINICAL",
      summary: "Its main compound, chimaphilin, killed fungi and made breast cancer cells self-destruct in lab tests. The plant also showed antioxidant activity.",
      source: "veldhi",
    },
  ],
});
