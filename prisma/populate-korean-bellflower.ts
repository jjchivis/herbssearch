import { run } from "./lib/populate-herb";

// Korean Bellflower (Platycodon grandiflorus root, jie geng / doraji), from a 2024
// review of its ethnopharmacology, chemistry, pharmacology and products (Zhang
// et al.).

run({
  name: "Korean Bellflower",
  profile: {
    family: "Campanulaceae",
    genus: "Platycodon",
    species: "grandiflorus",
    partsUsed: "The root, eaten as a vegetable or used as medicine, often honey-processed",
  },
  sources: {
    zhang: {
      title: "Ethnopharmacology, phytochemistry, pharmacology and product application of Platycodon grandiflorum: A review",
      author: "Zhang L, Wang X, Zhang J, Liu D, Bai G",
      journal: "Chinese Herbal Medicines",
      publicationDate: "2024-05-14",
      doi: "10.1016/j.chmed.2024.01.005",
      pmid: "39072195",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11283231/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Balloon Flower", type: "COMMON_NAME" },
    { name: "Jie Geng", type: "TRADITIONAL_NAME" },
    { name: "Jiegeng", type: "TRADITIONAL_NAME" },
    { name: "Doraji", type: "REGIONAL_NAME", region: "Korea" },
    { name: "Platycodonis Radix", type: "COMMON_NAME" },
    { name: "Platycodon", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called jie geng; first recorded in the Shennong Herbal Classic and used to clear phlegm, ease sore throats and treat cough and lung abscesses." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jie geng was first recorded in the Shennong Herbal Classic during the Eastern Han Dynasty (25–220 CE) and has been used for centuries as both food and medicine. Classical texts use it to:\n- Clear mucus and ease a painful throat\n- Treat cough with a full chest\n- Treat lung abscesses and coughing up pus, in the classic formula Jie Geng Tang with licorice\nIt's widely eaten as a vegetable and exported to South Korea, Japan and Southeast Asia.",
      source: "zhang",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, the root eased coughing and helped clear phlegm (honey processing made the anti-cough effect stronger). It may also help reduce inflammation, affect the immune system, act as an antioxidant, and slow some cancer cells, and it showed anti-obesity and blood-sugar-lowering effects. These haven't been confirmed in people.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "The review notes that its heavy-metal content needs monitoring to make sure it's safe.",
      source: "zhang",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "A classic Chinese remedy for cough and phlegm; eased coughing in mice. Not tested on its own in trials." },
    { slug: "sore-throat", notes: "Traditionally used for a painful throat. Not tested on its own in trials." },
  ],
});
