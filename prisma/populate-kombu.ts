import { run } from "./lib/populate-herb";

// Kombu (Saccharina japonica, also Laminaria japonica), from the NIH Office of
// Dietary Supplements iodine fact sheet, a 2026 nationwide survey of iodine in
// Japanese adults (Fuse et al.) and a 2006 case report of kelp tea causing an
// overactive thyroid (Müssig et al.). Family per GBIF.

run({
  name: "Kombu",
  profile: {
    family: "Laminariaceae",
    genus: "Saccharina",
    species: "japonica",
    nativeRange: "The coasts of Japan, Korea and northern China",
    partsUsed: "The dried fronds (blades)",
  },
  sources: {
    ods: {
      title: "Iodine: Fact Sheet for Consumers",
      organization: "National Institutes of Health, Office of Dietary Supplements",
      url: "https://ods.od.nih.gov/factsheets/Iodine-Consumer/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    fuse: {
      title: "Nationwide survey on iodine nutritional status and thyroid function in Japanese adults",
      author: "Fuse Y, Kunii Y, Tsukada N, Ito Y, Shishiba Y",
      journal: "Endocrine Journal",
      publicationDate: "2026-03-27",
      doi: "10.1507/endocrj.EJ25-0603",
      pmid: "41905952",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13378846/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mussig: {
      title: "Iodine-induced thyrotoxicosis after ingestion of kelp-containing tea",
      author: "Müssig K, Thamer C, Bares R, Lipp HP, Häring HU, Gallwitz B",
      journal: "Journal of General Internal Medicine",
      publicationDate: "2006-06-01",
      doi: "10.1111/j.1525-1497.2006.00416.x",
      pmid: "16808731",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1924637/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Laminaria japonica", type: "SCIENTIFIC_SYNONYM" },
    { name: "Kelp", type: "COMMON_NAME" },
    { name: "Konbu", type: "REGIONAL_NAME", region: "Japan" },
  ],
  constituents: [{ name: "Iodine", slug: "iodine", type: "mineral" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Kombu is a brown seaweed central to Japanese cooking, eaten in many forms. About 90% of Japan's kombu is harvested around Hokkaido and has been shipped across the country along the \"Kombu Road\" since the 1600s.",
      source: "fuse",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Brown seaweed like kombu is the main source of iodine in Japan, where people eat more iodine than most other populations, about 400 micrograms a day on average. In a survey of 2,845 adults, iodine levels were highest in areas that eat a lot of kelp.",
      source: "fuse",
    },
    {
      category: "TRADITIONAL",
      summary: "Seaweed is generally rich in iodine, which the body needs to make thyroid hormones. Kelp is also sold as an iodine supplement.",
      source: "ods",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Too much iodine can cause goiter (an enlarged thyroid), thyroid inflammation and thyroid cancer. The safe upper limit for adults is 1,100 micrograms a day from all sources, and lower for children (200 micrograms at ages 1 to 3).",
      source: "ods",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Iodine can interact with antithyroid medicines such as methimazole.",
      source: "ods",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "A woman with an enlarged thyroid developed an overactive thyroid after drinking a kelp tea for 4 weeks. People with thyroid disease should avoid iodine-containing herbal products.",
      source: "mussig",
    },
  ],
  preparations: [{ slug: "culinary-preparation", notes: "Dried fronds used in Japanese cooking.", source: "fuse" }],
});
