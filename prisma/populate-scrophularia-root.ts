import { run } from "./lib/populate-herb";

// Scrophularia Root (Scrophularia ningpoensis, xuan shen), from a 2025 review of
// Scrophulariae Radix in thyroid disease and diabetes (Song et al.).

run({
  name: "Scrophularia Root",
  profile: {
    family: "Scrophulariaceae",
    genus: "Scrophularia",
    species: "ningpoensis",
    partsUsed: "The dried root",
  },
  sources: {
    song: {
      title: "The mechanism and application of Scrophulariae Radix in the treatment of endocrine disorders: focusing on thyroid diseases and diabetes mellitus",
      author: "Song J, Li J, Shi H, Liu H, Qu Y, Wang F",
      journal: "Frontiers in Endocrinology",
      publicationDate: "2025-11-21",
      doi: "10.3389/fendo.2025.1684744",
      pmid: "41356003",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12678101/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Xuan Shen", type: "TRADITIONAL_NAME" },
    { name: "Xuanshen", type: "TRADITIONAL_NAME" },
    { name: "Scrophulariae Radix", type: "COMMON_NAME" },
    { name: "Ningpo Figwort", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called xuan shen; recorded in the Shennong Herbal Classic and used to \"clear heat\", nourish yin and \"remove toxins\", for sore throat, abscesses and constipation." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Xuan shen was first recorded in the Shennong Herbal Classic and is widely used in Chinese medicine to \"clear heat\", nourish yin and \"remove toxins\". For thousands of years it has been used for:\n- Sore throat\n- Abscesses and boils\n- Constipation\nIt's also believed to dissolve lumps, which is why it's used for thyroid conditions.",
      source: "song",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal research, its compounds (iridoids, phenylpropanoids and organic acids) may help reduce inflammation, act as antioxidants and affect the immune system, with possible effects on thyroid disease and diabetes. These haven't been confirmed in trials.",
      source: "song",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "A traditional Chinese remedy for sore throat. Not tested on its own in trials." },
    { slug: "constipation", notes: "Traditionally used for constipation. Not tested on its own in trials." },
  ],
});
