import { run } from "./lib/populate-herb";

// Metaxya rostrata, a tree fern of Central and South American rainforests.
// Sources: Kainz et al. 2012 (traditional use in Costa Rica; chemistry) and
// Mittermair et al. 2020 (lab study on colon cancer cells). Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Metaxya Rostrata",
  profile: {
    family: "Metaxyaceae",
    genus: "Metaxya",
    species: "rostrata",
    partsUsed: "The rhizome (underground stem) and rootlets",
  },
  sources: {
    kainz: {
      title: "Two Unusual Methylidenecyclopropane Glucosides from Metaxya rostrata C.Presl",
      author: "Kainz KP, Virtbauer J, Kählig H, et al.",
      journal: "Helvetica Chimica Acta",
      publicationDate: "2012-09-13",
      doi: "10.1002/hlca.201200111",
      pmid: "23446492",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3569612/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mittermair: {
      title: "Destabilization of FoxM1 and Inhibition of Topoisomerase I Contribute to Cytotoxicity of Prenylated Xanthones Isolated from Metaxya rostrata",
      author: "Mittermair E, Schueffl H, Heffeter P, Krenn L, Marian B",
      journal: "Planta Medica",
      publicationDate: "2020-02-05",
      doi: "10.1055/a-1097-8722",
      pmid: "32023632",
      url: "https://doi.org/10.1055/a-1097-8722",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "This tree fern grows in lowland rainforests of Central and South America. In Costa Rica it is used in traditional medicine for intestinal problems such as ulcers and tumors.",
      source: "kainz",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, compounds called xanthones from the fern killed several types of colon cancer cells. This has not been tested in animals or people.\n\nTechnical detail: 2-deprenyl-rheediaxanthone B and its 7-hydroxy derivative destabilized FoxM1 and inhibited topoisomerase I.",
      source: "mittermair",
    },
  ],
});
