import { run } from "./lib/populate-herb";

// Balm of Gilead, the resinous buds of balsam poplar (Populus balsamifera), as
// shown on the card. (The biblical balm of Gilead was a different plant.) From
// a 2026 lab study of the bud oil (Girard et al.) and a 2024 study of poplar
// bud chemistry (Pobłocka-Olech et al.). Family per GBIF.

run({
  name: "Balm of Gilead",
  profile: {
    family: "Salicaceae",
    genus: "Populus",
    species: "balsamifera",
    nativeRange: "Northern North America",
    partsUsed: "The sticky, fragrant leaf buds",
  },
  sources: {
    girard: {
      title: "Antiviral Activity of Essential Oil from Populus balsamifera L. Buds and Its Major Compounds Against Betacoronavirus HCoV-OC43 Using a Sensitive Cytoprotection Assay",
      author: "Girard L, Côté H, Pichette A, Savard J, Ripoll L, Legault J",
      journal: "Molecules",
      publicationDate: "2026-04-30",
      doi: "10.3390/molecules31091496",
      pmid: "42123861",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13165263/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    poblocka: {
      title: "Characterization of Secondary Metabolites of Leaf Buds from Some Species and Hybrids of Populus by Gas Chromatography Coupled with Mass Detection and Two-Dimensional High-Performance Thin-Layer Chromatography Methods with Assessment of Their Antioxidant Activity",
      author: "Pobłocka-Olech L, Isidorov VA, Krauze-Baranowska M",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2024-04-03",
      doi: "10.3390/ijms25073971",
      pmid: "38612781",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11011796/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Balsam Poplar", type: "COMMON_NAME" },
    { name: "Poplar Buds", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Alpha-Bisabolol", slug: "alpha-bisabolol", type: "sesquiterpene" },
    { name: "Nerolidol", slug: "nerolidol", type: "sesquiterpene" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Balsam poplar has traditionally been used for breathing problems and infections.",
      source: "girard",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, oil from the buds strongly protected cells from a common-cold coronavirus. Two of its main compounds, alpha-bisabolol and nerolidol, did the same.\n\nTechnical detail: HCoV-OC43; EC50 3.3 µg/mL (oil), 2.7 µg/mL (α-bisabolol), 2.6 µg/mL (nerolidol).",
      source: "girard",
    },
    {
      category: "PRECLINICAL",
      summary: "Poplar leaf buds contain many phenolic compounds and showed antioxidant activity in lab tests.",
      source: "poblocka",
    },
  ],
});
