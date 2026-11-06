import { run } from "./lib/populate-herb";

// Stinking Goosefoot (Chenopodium vulvaria), from a 2015 history of its range and
// ecology (Groom) and a 1950 study of the source of its smell (Cromwell). No
// published medicinal uses were found. Family per GBIF.

run({
  name: "Stinking Goosefoot",
  profile: { family: "Amaranthaceae", genus: "Chenopodium", species: "vulvaria", nativeRange: "Southern Europe, North Africa and western Asia", partsUsed: "The whole plant" },
  sources: {
    groom: {
      title: "Piecing together the biogeographic history of Chenopodium vulvaria L. using botanical literature and collections",
      author: "Groom QJ",
      journal: "PeerJ",
      publicationDate: "2015-01-08",
      doi: "10.7717/peerj.723",
      pmid: "25653906",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4304866/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cromwell: {
      title: "The micro-estimation and origin of trimethylamine in Chenopodium vulvaria L.",
      author: "Cromwell BT",
      journal: "Biochemical Journal",
      publicationDate: "1950-05-01",
      doi: "10.1042/bj0460578",
      pmid: "15420196",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1275478/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A low, grey-green weed known for its foul smell, often compared to rotten fish. It has become much rarer in northern Europe as its habitats changed. Grazing animals eat it despite the smell.",
      source: "groom",
    },
    {
      category: "PRECLINICAL",
      summary: "Its fishy smell comes from trimethylamine, the same compound that makes old fish smell.",
      source: "cromwell",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No published medicinal uses or human safety studies were found.",
      source: "groom",
    },
  ],
});
