import { run } from "./lib/populate-herb";

// Pfaffia glomerata, from a 2024 review (Cotrim Ribeiro et al.) and a 2025
// mouse study (Xue et al.). No human or safety studies were found. Family per
// GBIF.

run({
  name: "Pfaffia Glomerata",
  profile: {
    family: "Amaranthaceae",
    genus: "Pfaffia",
    species: "glomerata",
    nativeRange: "South America, mainly Brazil",
    partsUsed: "The root",
  },
  sources: {
    cotrim: {
      title: "A comprehensive review of Pfaffia glomerata botany, ethnopharmacology, phytochemistry, biological activities, and biotechnology",
      author: "Cotrim Ribeiro ST, Gancedo NC, Braz de Oliveira AJ, Correia Gonçalves RA",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-03-12",
      doi: "10.1016/j.jep.2024.118003",
      pmid: "38484957",
      url: "https://pubmed.ncbi.nlm.nih.gov/38484957/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    xue: {
      title: "Pfaffia glomerata Ameliorates BPA-Induced Reproductive Impairments in Mice by Suppressing Apoptosis via PI3K/AKT Signaling Activation",
      author: "Xue H, Zhang S, Lu J, Liu J, Li Y, Chen X",
      journal: "Pharmaceuticals",
      publicationDate: "2025-10-25",
      doi: "10.3390/ph18111614",
      pmid: "41304861",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12655148/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Brazilian Ginseng", type: "COMMON_NAME" }],
  constituents: [{ name: "Beta-Ecdysone (20-Hydroxyecdysone)", slug: "20-hydroxyecdysone", type: "phytosteroid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Brazil, where it's also called Brazilian ginseng, the root is popular as a tonic and aphrodisiac, to reduce inflammation and to relieve pain.",
      source: "cotrim",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 review of 76 studies found about 40 compounds in the plant. The main one is beta-ecdysone, a plant steroid in the roots. In lab and animal studies, the plant may help reduce inflammation and pain, and showed antidepressant, aphrodisiac, stomach-protecting and antioxidant effects.",
      source: "cotrim",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In male mice exposed to the plastic chemical BPA, Pfaffia glomerata reduced damage to the testes.\n\nTechnical detail: bisphenol A-induced injury; PI3K/AKT pathway; network pharmacology.",
      source: "xue",
    },
  ],
});
