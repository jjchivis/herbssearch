import { run } from "./lib/populate-herb";

// Osha (Ligusticum porteri), from verified sources: a chemical study of Colorado
// osha root (Brown & Miller 2023) and a lab study of its extract (Nguyen et al.
// 2017). Family per GBIF / Catalogue of Life. No studies in people, and no
// source covering side effects, interactions, pregnancy or breastfeeding, were
// found, so none is stated.

run({
  name: "Osha",
  profile: {
    family: "Apiaceae",
    genus: "Ligusticum",
    species: "porteri",
    nativeRange: "Found in parts of the Rocky Mountains",
    partsUsed: "The root",
  },
  sources: {
    brown: {
      title: "Analysis of Southwestern Colorado Ligusticum porteri by Gas Chromatography-Mass Spectrometry",
      author: "Brown M, Miller E",
      journal: "Journal of Undergraduate Chemistry Research",
      organization: "Journal of Undergraduate Chemistry Research",
      publicationDate: "2023-06-13",
      pmid: "38362356",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10869123/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nguyen: {
      title: "Effects of Ligusticum porteri (Osha) Root Extract on Human Promyelocytic Leukemia Cells",
      author: "Nguyen K, Sparks J, Omoruyi F",
      journal: "Pharmacognosy Research",
      organization: "Pharmacognosy Research",
      publicationDate: "2017-04-01",
      doi: "10.4103/0974-8490.204641",
      pmid: "28539739",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5424556/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Osha Root", type: "COMMON_NAME" }],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used for many years by Hispanic and Native American peoples for colds, flu, chest infections and digestive upset." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Osha root is used to boost the immune system and for colds, flu, indigestion and body aches.",
      source: "brown",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Hispanic and Native American peoples have used osha for many years. It has been used for flu, chest infections (bronchial pneumonia) with shortness of breath, poor appetite, indigestion and upset stomach with vomiting.",
      source: "nguyen",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on human leukemia cells, osha root extract showed antioxidant activity and affected immune signals, but didn't stop the cancer cells growing.",
      source: "nguyen",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Traditionally used for colds and flu. It hasn't been studied in people." },
    {
      slug: "chest-congestion",
      notes: "Traditionally used for chest infections. It hasn't been studied in people; chest infections with shortness of breath need medical care.",
    },
  ],
});
