import { run } from "./lib/populate-herb";

// Barleria (Barleria prionitis, porcupine flower), from a small mouthwash
// trial (Gupta et al. 2016) and a 2010 study in diabetic rats (Dheer &
// Bhatnagar). Family per GBIF.

run({
  name: "Barleria",
  profile: {
    family: "Acanthaceae",
    genus: "Barleria",
    species: "prionitis",
    nativeRange: "India, Southeast Asia and tropical Africa",
    partsUsed: "The leaves and roots",
  },
  sources: {
    gupta: {
      title: "Assessment of Effectiveness of Barleria prionitis on Oral Health",
      author: "Gupta D, Gupta RK, Jain A, et al.",
      journal: "Pharmacognosy Research",
      publicationDate: "2016-07-01",
      doi: "10.4103/0974-8490.181456",
      pmid: "27365983",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4908843/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dheer: {
      title: "A study of the antidiabetic activity of Barleria prionitis Linn.",
      author: "Dheer R, Bhatnagar P",
      journal: "Indian Journal of Pharmacology",
      publicationDate: "2010-04-01",
      doi: "10.4103/0253-7613.64493",
      pmid: "20711368",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2907017/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Porcupine Flower", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Barleria is a folk remedy for preventing mouth and gum infections.",
      source: "gupta",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 3-day trial of 30 people, a barleria mouthwash reduced dental plaque about as well as the standard antiseptic chlorhexidine, though chlorhexidine worked a little better.",
      source: "gupta",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, a leaf extract given for 2 weeks lowered blood sugar and raised insulin.",
      source: "dheer",
    },
  ],
});
