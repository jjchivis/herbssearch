import { run } from "./lib/populate-herb";

// Lilac Tasselflower (Emilia sonchifolia), from the USDA PLANTS database, a 2025
// study of its liver-damaging alkaloid senkirkine (Yao et al.), a 2025 mouse
// liver toxicity study (Liu et al.), a 2012 study noting its folk
// uses in Taiwan and China (Lan et al.) and a 2025 mouse infection study (An et
// al.). Family per GBIF.

run({
  name: "Lilac Tasselflower",
  profile: { family: "Asteraceae", genus: "Emilia", species: "sonchifolia", nativeRange: "Tropical Asia and Africa; now a weed throughout the tropics", partsUsed: "The whole plant" },
  sources: {
    usda: {
      title: "Emilia sonchifolia (L.) DC. (lilac tasselflower)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/EMSO",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    yao: {
      title: "Combined metabolome and transcriptome to analyze the regulatory network of key enzymes in the synthesis of senkirkine in Emilia sonchifolia",
      author: "Yao J, Qin Y, Tu D, et al.",
      journal: "BMC Plant Biology",
      publicationDate: "2025-08-01",
      doi: "10.1186/s12870-025-07079-4",
      pmid: "40751133",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12315316/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liu: {
      title: "Comprehensive multi-omics analysis reveals the mechanism of hepatotoxicity induced by Emilia sonchifolia (L.) DC.",
      author: "Liu X, Chen G, Yang Y, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2025-02-27",
      doi: "10.1016/j.jep.2025.119371",
      pmid: "39826791",
      url: "https://doi.org/10.1016/j.jep.2025.119371",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lan: {
      title: "Activations of Both Extrinsic and Intrinsic Pathways in HCT 116 Human Colorectal Cancer Cells Contribute to Apoptosis through p53-Mediated ATM/Fas Signaling by Emilia sonchifolia Extract, a Folklore Medicinal Plant",
      author: "Lan YH, Chiang JH, Huang WW, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2012-02-28",
      doi: "10.1155/2012/178178",
      pmid: "22474491",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3303801/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    an: {
      title: "Emilia sonchifolia (L.) DC. inhibits the growth of Methicillin-Resistant Staphylococcus epidermidis by modulating its physiology through multiple mechanisms",
      author: "An L, Peng W, Yang Y, et al.",
      journal: "Scientific Reports",
      publicationDate: "2025-03-21",
      doi: "10.1038/s41598-025-93561-w",
      pmid: "40119097",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11928732/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A small weedy daisy with lilac tassel-like flowers, eaten as a vegetable and widely used in Chinese folk medicine for throat and chest infections, mouth ulcers, urinary infections, pneumonia, mastitis, gut infections and infected wounds.",
      source: "yao",
    },
    {
      category: "TRADITIONAL",
      summary: "In Taiwan and China it's also used for inflammation, rheumatism, eye sores, convulsions, cough and cuts.",
      source: "lan",
    },
    {
      category: "PRECLINICAL",
      summary: "An extract slowed drug-resistant Staphylococcus epidermidis bacteria in lab tests and in mice with blood infections.",
      source: "an",
    },
    {
      category: "PRECLINICAL",
      summary: "An extract killed colon cancer cells in lab tests.",
      source: "lan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "It contains senkirkine, a pyrrolizidine alkaloid that damages the liver.",
      source: "yao",
    },
    {
      category: "TOXICITY",
      description: "In mice, both water and alcohol extracts caused liver damage, raising bilirubin, bile acids and liver enzymes.",
      source: "liu",
    },
  ],
});
