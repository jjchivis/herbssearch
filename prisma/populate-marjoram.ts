import { run } from "./lib/populate-herb";

// Marjoram (Origanum majorana, sweet marjoram), from a 2016 review of its
// ethnopharmacology, chemistry and biological activities (Bina & Rahimi) and a
// 2022 review of its essential oil (Kakouri et al.).

run({
  name: "Marjoram",
  profile: {
    family: "Lamiaceae",
    genus: "Origanum",
    species: "majorana",
    partsUsed: "The leaves and flowering tops, fresh or dried, and the essential oil",
  },
  sources: {
    bina: {
      title: "Sweet Marjoram: A Review of Ethnopharmacology, Phytochemistry, and Biological Activities",
      author: "Bina F, Rahimi R",
      journal: "Journal of Evidence-Based Complementary & Alternative Medicine",
      publicationDate: "2016-05-26",
      doi: "10.1177/2156587216650793",
      pmid: "27231340",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5871212/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kakouri: {
      title: "Origanum majorana Essential Oil: A Review of Its Chemical Profile and Pesticide Activity",
      author: "Kakouri E, Daferera D, Kanakis C, Revelou PK, Kaparakou EH, Dervisoglou S, Perdikis D, Tarantilis PA",
      journal: "Life",
      publicationDate: "2022-11-26",
      doi: "10.3390/life12121982",
      pmid: "36556347",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9785525/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Sweet Marjoram", type: "COMMON_NAME" },
    { name: "Majorana hortensis", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sweet marjoram has been used in traditional and folk medicine for many complaints, including:\n- Digestive problems\n- Eye, nose and throat problems\n- Breathing problems\n- Heart complaints\n- Joint and muscle pain\n- Nervous complaints\nIt's widely used in cooking and perfumes.",
      source: "bina",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, marjoram and its essential oil have shown antioxidant activity, killed bacteria and fungi, and shown possible protective effects on the liver, heart and stomach.",
      source: "bina",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, marjoram essential oil repelled and killed some insect pests.",
      source: "kakouri",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Traditionally used for digestive problems. Not tested in trials." },
  ],
});
