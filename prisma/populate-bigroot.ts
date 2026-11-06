import { run } from "./lib/populate-herb";

// Bigroot (Geranium macrorrhizum, bigroot geranium), from a 2007 mouse study
// (Jurkstiene et al.) and a 2010 essential oil study (Radulović et al.).
// Family per GBIF.

run({
  name: "Bigroot",
  profile: { family: "Geraniaceae", genus: "Geranium", species: "macrorrhizum", partsUsed: "The leaves and rhizomes" },
  sources: {
    jurkstiene: {
      title: "Immunostimulatory properties of bigroot geranium (Geranium macrorrhizum L.) extract",
      author: "Jurkstiene V, Kondrotas AJ, Kevelaitis E",
      journal: "Medicina (Kaunas)",
      publicationDate: "2007-01-01",
      pmid: "17297285",
      url: "https://pubmed.ncbi.nlm.nih.gov/17297285/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    radulovic: {
      title: "Geranium macrorrhizum L. (Geraniaceae) essential oil: a potent agent against Bacillus subtilis",
      author: "Radulović NS, Dekić MS, Stojanović-Radić ZZ, Zoranić SK",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2010-11-01",
      doi: "10.1002/cbdv.201000100",
      pmid: "21072778",
      url: "https://doi.org/10.1002/cbdv.201000100",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bigroot Geranium", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A geranium that's highly valued in folk medicine. Oil from its leaves is rich in germacrone.",
      source: "radulovic",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, oil from the leaves and rhizomes strongly killed the bacterium Bacillus subtilis.",
      source: "radulovic",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice given a leaf extract for 4 weeks, white blood cell counts rose, suggesting it may stimulate the immune system.",
      source: "jurkstiene",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "jurkstiene",
    },
  ],
});
