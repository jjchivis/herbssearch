import { run } from "./lib/populate-herb";

// Ground Ivy (Glechoma hederacea), from a 2026 review (Krasocka, Olszewska and
// Magiera) and a 2021 rodent gallstone study (Xiao et al.). Common name per USDA
// PLANTS; family per GBIF.

run({
  name: "Ground Ivy",
  profile: { family: "Lamiaceae", genus: "Glechoma", species: "hederacea", partsUsed: "The above-ground parts" },
  sources: {
    krasocka: {
      title: "Glechoma hederacea: A Comprehensive Insight into the Botanical Specification, Traditional Uses, Phytochemistry, Nutritional Value, Pharmacology, and Non-medicinal Applications",
      author: "Krasocka W, Olszewska MA, Magiera A",
      journal: "Planta Medica",
      publicationDate: "2026-05-22",
      doi: "10.1055/a-2866-3799",
      pmid: "42173111",
      url: "https://doi.org/10.1055/a-2866-3799",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    xiao: {
      title: "Protective effect of Glechoma hederacea extract against gallstone formation in rodent models",
      author: "Xiao M, Yang M, Ji X, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2021-07-14",
      doi: "10.1186/s12906-021-03368-1",
      pmid: "34261471",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8278774/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    { slug: "european-folk-medicine", notes: "Recorded in European medicine since antiquity for digestive, liver, breathing and skin complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "An aromatic mint-family herb recorded in European medicine since ancient times. It's still used for digestive problems, liver and bile complaints, breathing problems and skin conditions.",
      source: "krasocka",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, extracts protected the liver, eased inflammation, acted as antioxidants and slowed some cancer cells. There are no clinical studies yet.",
      source: "krasocka",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice fed a gallstone-causing diet, a ground ivy extract taken 3 times a day shrank gallstone crystals and lowered cholesterol in bile.",
      source: "xiao",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no clinical studies, so its safety in people isn't well known.",
      source: "krasocka",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Traditionally used for digestive problems." },
  ],
});
