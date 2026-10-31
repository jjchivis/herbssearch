import { run } from "./lib/populate-herb";

// Ketaki, crepe ginger (Cheilocostus speciosus, syn. Costus speciosus), from a
// 2013 animal study (Srivastava et al.) and a 2016 lab study of its leaves
// (Perera et al.). No human trials were found. Family per GBIF.

run({
  name: "Ketaki",
  profile: {
    family: "Costaceae",
    genus: "Cheilocostus",
    species: "speciosus",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The rhizome, leaves and above-ground parts",
  },
  sources: {
    srivastava: {
      title: "Antiinflammatory, Analgesic and Antipyretic Activities of Aerial Parts of Costus speciosus Koen.",
      author: "Srivastava S, Singh P, Jha KK, Mishra G, Srivastava S, Khosa RL",
      journal: "Indian Journal of Pharmaceutical Sciences",
      publicationDate: "2013-01-01",
      doi: "10.4103/0250-474X.113532",
      pmid: "23901165",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3719154/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    perera: {
      title: "α-glucosidase and glycation inhibitory effects of costus speciosus leaves",
      author: "Perera HK, Premadasa WK, Poongunran J",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2016-01-05",
      doi: "10.1186/s12906-015-0982-z",
      pmid: "26727889",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4700779/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Crepe Ginger", type: "COMMON_NAME" },
    { name: "Costus speciosus", type: "SCIENTIFIC_SYNONYM" },
    { name: "Keu", type: "REGIONAL_NAME", region: "India" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Crepe ginger (keu) is an Indian ornamental plant that has long been used in traditional medicine.",
      source: "srivastava",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, an extract of the above-ground parts reduced swelling, eased pain and brought down fever.",
      source: "srivastava",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a leaf extract blocked enzymes that break down starch and sugar, and slowed glycation, a sugar-driven process that damages proteins in diabetes.",
      source: "perera",
    },
  ],
});
