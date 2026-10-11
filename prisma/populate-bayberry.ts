import { run } from "./lib/populate-herb";

// Bayberry, here Chinese bayberry (Myrica rubra, yangmei), from a 2013 review of
// its biological activities (Sun et al.; abstract only) and a 2026 systematic
// review of fruits and leaves of the Myrica genus (Florença et al.).

run({
  name: "Bayberry",
  profile: {
    family: "Myricaceae",
    genus: "Myrica",
    species: "rubra",
    nativeRange: "China and other Asian countries",
    partsUsed: "The fruit; other parts of the tree are used in folk medicine",
  },
  sources: {
    sun: {
      title: "Biological activities of extracts from Chinese bayberry (Myrica rubra Sieb. et Zucc.): a review",
      author: "Sun C, Huang H, Xu C, Li X, Chen K",
      journal: "Plant Foods for Human Nutrition",
      publicationDate: "2013-06-01",
      doi: "10.1007/s11130-013-0349-x",
      pmid: "23605674",
      url: "https://pubmed.ncbi.nlm.nih.gov/23605674/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    florenca: {
      title: "Phytochemical, Nutritional and Physicochemical Characteristics of Fruits and Leaves from the Myrica L. Genus: A Systematic Review",
      author: "Florença SG, Barroca MJ, Lima MJ, Nunes C",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-09-16",
      doi: "10.3390/ijms27188237",
      pmid: "42794665",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13607124/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Chinese Bayberry", type: "COMMON_NAME" },
    { name: "Yangmei", type: "TRADITIONAL_NAME" },
    { name: "Red Bayberry", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Grown in China for more than 2,000 years; different parts of the tree have been used as folk medicines." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chinese bayberry is a fruit tree from China and other Asian countries that has been grown in China for more than 2,000 years. Its fruit is prized for its colour and flavour, and different parts of the tree have been used as folk medicines.",
      source: "sun",
    },
    {
      category: "TRADITIONAL",
      summary: "Plants in the bayberry group have been used as food, as medicine and to make natural dyes.",
      source: "florenca",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The fruit is rich in a red pigment called cyanidin-3-glucoside, an antioxidant. In lab and animal studies, bayberry extracts showed effects against inflammation, allergy, diabetes, cancer, bacterial infection and diarrhea. These haven't been confirmed in people.",
      source: "sun",
    },
    {
      category: "PRECLINICAL",
      summary: "A 2026 review found that only a few studies have measured the nutrients and plant compounds in bayberry fruits and leaves, and that results vary a lot between species and even within one species.",
      source: "florenca",
    },
  ],
});
