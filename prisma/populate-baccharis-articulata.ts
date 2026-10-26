import { run } from "./lib/populate-herb";

// Baccharis articulata (carqueja), from two lab studies (Boeff et al. 2025;
// Gualdieri et al. 2025) and a 2024 identification study of carquejas
// (Antunes et al.). No safety sources were found. Family per GBIF.

run({
  name: "Baccharis Articulata",
  profile: {
    family: "Asteraceae",
    genus: "Baccharis",
    species: "articulata",
    nativeRange: "Southern Brazil, Uruguay and Argentina",
    partsUsed: "The winged green stems and other above-ground parts",
  },
  sources: {
    boeff: {
      title: "Baccharis articulata aqueous extract exerts in vitro antifibrotic effect in hepatic stellate cells by attenuating collagen deposition and TGF-ß1 protein expression",
      author: "Boeff DD, Berger M, Koetz M, et al.",
      journal: "EXCLI Journal",
      publicationDate: "2025-05-13",
      doi: "10.17179/excli2025-8394",
      pmid: "40630469",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12235268/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gualdieri: {
      title: "Antioxidant Capacity and Inhibition of Lipid Accumulation Effect of Baccharis articulata and Citrus sinensis Infusions",
      author: "Gualdieri F, Rocha G, Iacono R, De Marzi M, Guerra LN",
      journal: "Plant Foods for Human Nutrition",
      publicationDate: "2025-12-08",
      doi: "10.1007/s11130-025-01452-2",
      pmid: "41359076",
      url: "https://pubmed.ncbi.nlm.nih.gov/41359076/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    antunes: {
      title: "Authentication and Quality Control of the Brazilian Traditional Herb 'Carquejas' (Baccharis Species) Using Morpho-Anatomy and Microscopy",
      author: "Antunes KA, Raman V, Perera WH, et al.",
      journal: "Plants",
      publicationDate: "2024-10-30",
      doi: "10.3390/plants13213030",
      pmid: "39519949",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11548319/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Carqueja", type: "REGIONAL_NAME", region: "Brazil" }],
  constituents: [{ name: "Chlorogenic Acid", slug: "chlorogenic-acid", type: "phenolic acid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In southern Brazil, this carqueja is widely used for weight loss and for digestive and liver problems.",
      source: "boeff",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Several Baccharis species are sold as \"carqueja\" and are used for digestion and to increase urination. They're often confused with each other, so the plant you buy may not be this species.",
      source: "antunes",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on mouse liver cells involved in scarring, a water extract calmed the cells and reduced the scar protein collagen, without harming them. Chlorogenic acid in the extract may be partly responsible.\n\nTechnical detail: GRX hepatic stellate cells; reduced TGF-β1; 26 metabolites identified.",
      source: "boeff",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a carqueja tea had strong antioxidant activity and cut fat build-up in human liver cells by about half.\n\nTechnical detail: 86% DPPH inhibition; HepG2 cells loaded with oleic acid as a fatty liver model.",
      source: "gualdieri",
    },
  ],
});
