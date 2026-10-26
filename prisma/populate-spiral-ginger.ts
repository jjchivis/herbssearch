import { run } from "./lib/populate-herb";

// Spiral Ginger (Costus spiralis), from a 2022 rat study with ethnobotanical
// background (Amorim et al.) and a 2020 mouse study (de Farias Silva et al.).
// No human studies were found. Family per GBIF.

run({
  name: "Spiral Ginger",
  profile: {
    family: "Costaceae",
    genus: "Costus",
    species: "spiralis",
    nativeRange: "Central and South America and the Caribbean, including Brazil",
    partsUsed: "The leaves and young stems",
  },
  sources: {
    amorim: {
      title: "Costus spiralis extract restores kidney function in cisplatin-induced nephrotoxicity model: Ethnopharmacological use, chemical and toxicological investigation",
      author: "Amorim JM, Ribeiro de Souza LC, Lemos de Souza RA, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2022-06-27",
      doi: "10.1016/j.jep.2022.115510",
      pmid: "35772602",
      url: "https://pubmed.ncbi.nlm.nih.gov/35772602/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    farias: {
      title: "Costus spiralis (Jacq.) Roscoe leaves fractions have potential to reduce effects of inflammatory diseases",
      author: "de Farias Silva D, Simões Bezerra PH, Lopes de Sousa Ribeiro L, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2020-11-23",
      doi: "10.1016/j.jep.2020.113607",
      pmid: "33242625",
      url: "https://pubmed.ncbi.nlm.nih.gov/33242625/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cana-do-Brejo", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Pacocatinga", type: "TRADITIONAL_NAME", region: "Brazil" },
  ],
  constituents: [
    { name: "Vicenin-2", slug: "vicenin-2", type: "flavonoid" },
    { name: "Schaftoside", slug: "schaftoside", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Brazil, spiral ginger is used for kidney problems such as kidney infections, kidney stones and an inflamed urethra, and for inflammation. Indigenous Brazilians used it as early as the 1600s, when it was called \"pacocatinga\". The Costus genus is on Brazil's national list of medicinal plants of interest to its public health system.",
      source: "amorim",
    },
    {
      category: "TRADITIONAL",
      summary: "Brazilian medicinal teas use it for urinary infections, coughs, inflammation and arthritis.",
      source: "farias",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats whose kidneys were damaged by the cancer drug cisplatin, a leaf extract almost fully restored kidney function. A single high dose caused no deaths in rats.\n\nTechnical detail: 5–30 mg/kg orally; plasma creatinine and creatinine clearance restored (p < 0.001); acute dose 2000 mg/kg, OECD 423 class 5.",
      source: "amorim",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, leaf fractions given by mouth reduced pain from inflammation and lowered inflammation in the belly and in arthritic paws. They didn't act on the brain's pain response.\n\nTechnical detail: acetic acid writhing, formalin (inflammatory phase), zymosan peritonitis and Freund's adjuvant arthritis models.",
      source: "farias",
    },
  ],
});
