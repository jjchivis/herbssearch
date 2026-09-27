import { run } from "./lib/populate-herb";

// Rosehips (Rosa canina and other wild roses), from a verified source: a 2024
// review of rosehip-based skin products (Oargă Porumb et al.), which summarizes
// the two human trials used here. Family per GBIF / Catalogue of Life. No source
// covered side effects, interactions, pregnancy or breastfeeding, so none is stated.

run({
  name: "Rosehips",
  profile: {
    family: "Rosaceae",
    genus: "Rosa",
    species: "canina",
    partsUsed: "The fruit (hips) and the oil pressed from the seeds",
  },
  sources: {
    oarga: {
      title: "Unveiling the mechanisms for the development of rosehip-based dermatological products: an updated review",
      author: "Oargă Porumb DP, Cornea-Cipcigan M, Cordea MI",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2024-04-11",
      doi: "10.3389/fphar.2024.1390419",
      pmid: "38666029",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11043540/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Rosehip", type: "COMMON_NAME" },
    { name: "Rose Hip", type: "COMMON_NAME" },
    { name: "Dog Rose", type: "COMMON_NAME" },
    { name: "Rosehip Seed Oil", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Rosehips, the fruit of wild roses, have traditionally been used as herbal remedies for many disorders. They contain vitamins A, B, C and E, and are especially rich in vitamin C. The dog rose (Rosa canina) is the most studied species.",
      source: "oarga",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, rosehip extracts showed antioxidant activity and slowed the growth of bacteria linked to acne and skin infections. In animals, a related rose species eased signs of eczema (atopic dermatitis).",
      source: "oarga",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an 8-week trial, 34 adults aged 35 to 65 took 45 g of rosehip powder a day or a comparison. Crow's feet wrinkles were significantly reduced, and skin moisture and elasticity improved.\n\nTechnical detail: randomized, double-blind; Hyben Vital rose hip powder (Phetcharat et al. 2015).",
      source: "oarga",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a study of 108 people with scars after surgery, rosehip seed oil applied twice a day for 12 weeks improved scar color, discoloration and sunken (atrophic) scars.\n\nTechnical detail: comparative, single-center, prospective, double-blind; Repavar rosehip seed oil (Valerón-Almazán et al. 2015); assessed at 6 and 12 weeks.",
      source: "oarga",
    },
  ],
  symptoms: [
    {
      slug: "scars-and-skin-aging",
      notes: "Small trials found rosehip seed oil improved surgical scars and rosehip powder reduced crow's feet wrinkles.",
    },
  ],
});
