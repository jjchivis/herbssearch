import { run } from "./lib/populate-herb";

// Star Anise (Illicium verum), from a 2023 review of its traditional uses,
// chemistry and pharmacology, and a 2004 report of poisoned infants.

run({
  name: "Star Anise",
  profile: {
    family: "Schisandraceae",
    genus: "Illicium",
    species: "verum",
    partsUsed: "The dried star-shaped fruit, used whole or ground as a spice, in teas, and for its essential oil",
  },
  sources: {
    zou: {
      title: "A Comprehensive Review of the Pharmacology, Chemistry, Traditional Uses and Quality Control of Star Anise (Illicium verum Hook. F.): An Aromatic Medicinal Plant",
      author: "Zou Q, Huang Y, Zhang W, Lu C, Yuan J",
      journal: "Molecules",
      publicationDate: "2023-11-01",
      doi: "10.3390/molecules28217378",
      pmid: "37959797",
      url: "https://pubmed.ncbi.nlm.nih.gov/37959797/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    izeLudlow: {
      title: "Neurotoxicities in infants seen with the consumption of star anise tea",
      author: "Ize-Ludlow D, Ragone S, Bruck IS, Bernstein JN, Duchowny M, Peña BM",
      journal: "Pediatrics",
      publicationDate: "2004-11-01",
      doi: "10.1542/peds.2004-0058",
      pmid: "15492355",
      url: "https://pubmed.ncbi.nlm.nih.gov/15492355/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chinese Star Anise", type: "COMMON_NAME" },
    { name: "Badian", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used in Chinese medicine to \"warm\" the body, ease pain and help the flow of qi, and in formulas for belly pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Star anise has long been a cooking spice in China and was brought to Europe in the 17th century. In traditional Chinese medicine it's described as warming, easing pain and helping the flow of qi (the body's energy).\nOld Chinese formulas include it for lower belly pain and hernia. China lists it as both a food and a medicine.",
      source: "zou",
    },
    {
      category: "TRADITIONAL",
      summary: "Many communities have given star anise tea to babies for colic. Doctors now advise against this (see Safety).",
      source: "izeLudlow",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, star anise and its essential oil have shown antioxidant activity and killed some bacteria. Star anise is also the main natural source of shikimic acid, the starting material for making the flu medicine Tamiflu.\n\nTechnical detail: 201 compounds identified; shikimic acid is the precursor for industrial synthesis of oseltamivir phosphate.",
      source: "zou",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Don't give star anise tea to babies. Doctors in one report saw 7 infants with nerve-related symptoms after being given star anise tea at home.\nPart of the problem is Japanese star anise, a related plant that is poisonous to the nerves. Dried, the two look alike, and the report found Chinese star anise contaminated with Japanese star anise.\n\nTechnical detail: Japanese star anise is Illicium anisatum.",
      source: "izeLudlow",
    },
    {
      category: "CONTAMINATION",
      description:
        "Japanese star anise contains substances that can cause seizures. Other poisoning cases from star anise products have been reported, mostly from accidentally eating related plants, and occasionally from eating far too much.\n\nTechnical detail: the convulsants anisatin and neoanisatin (I. anisatum); veranisatins A–C from I. verum were convulsant and lethal in mice at 3 mg/kg by mouth.",
      source: "zou",
    },
  ],
});
