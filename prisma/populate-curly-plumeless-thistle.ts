import { run } from "./lib/populate-herb";

// Curly Plumeless Thistle (Carduus crispus, also welted thistle), from the USDA
// PLANTS database, a 2008 comparison of Korean thistles (Jeong et al.), a 2005 study
// of its compounds (Xie et al.) and a 2022 sperm cell study (Kopalli et al.). Very
// little research exists. Family per GBIF.

run({
  name: "Curly Plumeless Thistle",
  profile: { family: "Asteraceae", genus: "Carduus", species: "crispus", nativeRange: "Europe and Asia", partsUsed: "The whole plant" },
  sources: {
    usda: {
      title: "Carduus crispus L. (curly plumeless thistle)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/CACR2",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    jeong: {
      title: "Comparative antioxidant activity and HPLC profiles of some selected Korean thistles",
      author: "Jeong DM, Jung HA, Choi JS",
      journal: "Archives of Pharmacal Research",
      publicationDate: "2008-01-01",
      doi: "10.1007/s12272-008-1116-7",
      pmid: "18277604",
      url: "https://doi.org/10.1007/s12272-008-1116-7",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    xie: {
      title: "A new flavone glycoside and other constituents from Carduus crispus",
      author: "Xie WD, Li PL, Jia ZJ",
      journal: "Die Pharmazie",
      publicationDate: "2005-03-01",
      pmid: "15801681",
      url: "https://pubmed.ncbi.nlm.nih.gov/15801681/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kopalli: {
      title: "Apigenin Isolated from Carduus crispus Protects against H2O2-Induced Oxidative Damage and Spermatogenic Expression Changes in GC-2spd Sperm Cells",
      author: "Kopalli SR, Yoo SK, Kim B, Kim SK, Koppula S",
      journal: "Molecules",
      publicationDate: "2022-03-08",
      doi: "10.3390/molecules27061777",
      pmid: "35335140",
      url: "https://doi.org/10.3390/molecules27061777",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Welted Thistle", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A spiny, purple-flowered thistle of Europe and Asia, also called welted thistle. It's being studied as a possible aid for male fertility.",
      source: "kopalli",
    },
    {
      category: "PRECLINICAL",
      summary: "Of seven Korean thistles tested, it had the strongest antioxidant activity in lab tests.",
      source: "jeong",
    },
    {
      category: "PRECLINICAL",
      summary: "Apigenin from the plant protected sperm-forming cells from oxidative damage in lab tests.",
      source: "kopalli",
    },
    {
      category: "PRECLINICAL",
      summary: "One compound from the plant was active against ovarian cancer cells in lab tests.",
      source: "xie",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "jeong",
    },
  ],
});
