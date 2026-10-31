import { run } from "./lib/populate-herb";

// Punarnava (Boerhavia diffusa), from a 2014 review (Mishra et al.) and a 2026
// rat study of its root (Dinesh Kumar et al.). No human trials were found.
// Family per GBIF.

run({
  name: "Punarnava",
  profile: {
    family: "Nyctaginaceae",
    genus: "Boerhavia",
    species: "diffusa",
    nativeRange: "Tropical and subtropical regions worldwide",
    partsUsed: "The root and whole plant",
  },
  sources: {
    mishra: {
      title: "Phytochemical, therapeutic, and ethnopharmacological overview for a traditionally important herb: Boerhavia diffusa Linn.",
      author: "Mishra S, Aeri V, Gaur PK, Jachak SM",
      journal: "BioMed Research International",
      publicationDate: "2014-05-14",
      doi: "10.1155/2014/808302",
      pmid: "24949473",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4053255/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dineshKumar: {
      title: "Protective role of Boerhavia diffusa root extract in methotrexate-induced renal injury: evidence from oxidative stress, molecular, and immunohistochemical markers",
      author: "Dinesh Kumar R, Lakshmanan G, Kalpana R, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2026-04-27",
      doi: "10.1186/s12906-026-05389-0",
      pmid: "42046059",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13251211/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "ayurveda", notes: "A rasayana (rejuvenating) herb in Ayurveda." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda, punarnava is a rasayana, a herb believed to slow aging and strengthen life. It is traditionally used for problems of the urinary system, liver and jaundice, digestion, breathing, the heart and the reproductive system.",
      source: "mishra",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given a cancer drug that damages the kidneys, punarnava root extract protected the kidneys, improving kidney test results and lowering signs of inflammation.",
      source: "dineshKumar",
    },
  ],
});
