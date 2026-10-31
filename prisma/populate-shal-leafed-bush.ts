import { run } from "./lib/populate-herb";

// Shal Leafed Bush (Clerodendrum infortunatum, bhant), from a 2014 study of
// its leaves (Verma & Gupta) and a 2025 study in diabetic rats (Kumar et al.).
// No human trials were found. Family per GBIF.

run({
  name: "Shal Leafed Bush",
  profile: {
    family: "Lamiaceae",
    genus: "Clerodendrum",
    species: "infortunatum",
    nativeRange: "India and Southeast Asia",
    partsUsed: "The leaves and root",
  },
  sources: {
    verma: {
      title: "Pharmacognostical and high performance thin layer chromatography studies on leaves of Clerodendrum infortunatum L.",
      author: "Verma S, Gupta R",
      journal: "Ayu",
      publicationDate: "2014-10-01",
      doi: "10.4103/0974-8520.159009",
      pmid: "26195905",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4492027/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kumar: {
      title: "Evaluation of the Antidiabetic Potential of Methanolic Extract of Clerodendrum infortunatum Compared to Metformin in Streptozotocin-induced Diabetic Rats",
      author: "Kumar M, Prabhakar P, Hameed S, et al.",
      journal: "International Journal of Applied & Basic Medical Research",
      publicationDate: "2025-04-07",
      doi: "10.4103/ijabmr.ijabmr_580_24",
      pmid: "40343236",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12058047/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Bhant", type: "COMMON_NAME" }, { name: "Bhandira", type: "TRADITIONAL_NAME" }],
  traditions: [{ slug: "ayurveda", notes: "Used for postnatal care, wounds, jaundice and snakebite." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda, bhant is used in care after childbirth, to dress fresh wounds, and for tumors, liver disease, jaundice, scorpion stings and snakebite. In Indian folk medicine it is used for bronchitis, asthma, fever, inflammation and epilepsy.",
      source: "verma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, a leaf extract lowered blood sugar, though less than the diabetes drug metformin, and improved liver and kidney test results.",
      source: "kumar",
    },
  ],
});
