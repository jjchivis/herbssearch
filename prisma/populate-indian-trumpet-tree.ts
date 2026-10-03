import { run } from "./lib/populate-herb";

// Indian Trumpet Tree (Oroxylum indicum, shyonaka), from a 2011 review of its
// taxonomy, ethnobotany, chemistry and pharmacology (Harminder et al.).

run({
  name: "Indian Trumpet Tree",
  profile: {
    family: "Bignoniaceae",
    genus: "Oroxylum",
    species: "indicum",
    nativeRange: "Tropical Asia, including India, Sri Lanka, China, Malaysia and Japan",
    partsUsed: "The root bark, stem bark, seeds, leaves and fruit",
  },
  sources: {
    harminder: {
      title: "A Review on the Taxonomy, Ethnobotany, Chemistry and Pharmacology of Oroxylum indicum Vent.",
      author: "Harminder, Singh V, Chaudhary AK",
      journal: "Indian Journal of Pharmaceutical Sciences",
      publicationDate: "2011-09-01",
      doi: "10.4103/0250-474x.98981",
      pmid: "22923859",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3425058/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shyonaka", type: "TRADITIONAL_NAME" },
    { name: "Sonapatha", type: "REGIONAL_NAME", region: "India" },
    { name: "Tree of Damocles", type: "COMMON_NAME" },
    { name: "Indian Trumpet Flower", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Called shyonaka; the seeds go into Chyawanprash, and the root bark and bark are used for diarrhea, fever, coughs and joint pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda and folk medicine, parts of the Indian trumpet tree are used for:\n- Diarrhea and dysentery\n- Fever\n- Coughs, asthma and bronchitis\n- Indigestion, gas and colic\n- Joint pain and gout\n- Ulcers and jaundice\nThe seeds are used in tonics such as Chyawanprash, and a bark paste is put on skin diseases.",
      source: "harminder",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts and compounds from the tree have shown antioxidant activity, may help reduce inflammation, and have shown effects against ulcers, microbes and cancer cells, and protective effects on the liver. The review notes some traditional uses haven't been tested.\n\nTechnical detail: main flavonoids include baicalein, chrysin, oroxylin A and scutellarein.",
      source: "harminder",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "No detailed safety study has been published. Available information puts the highest tolerated dose at about 100 mg per kg of body weight.",
      source: "harminder",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Used in Ayurveda and folk medicine for diarrhea and dysentery. Not tested in trials." },
    { slug: "fever", notes: "Used in Ayurveda and folk medicine for fever. Not tested in trials." },
    { slug: "cough", notes: "Used in Ayurveda and folk medicine for coughs and bronchitis. Not tested in trials." },
  ],
});
