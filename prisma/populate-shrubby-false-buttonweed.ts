import { run } from "./lib/populate-herb";

// Shrubby False Buttonweed (Spermacoce verticillata, also Borreria
// verticillata), from the USDA PLANTS database, a 2020 review (Izuogu et al.) and a
// 2017 pain study in rats and mice (Silva et al.). Family per GBIF.

run({
  name: "Shrubby False Buttonweed",
  profile: { family: "Rubiaceae", genus: "Spermacoce", species: "verticillata", nativeRange: "Tropical Americas; now widespread", partsUsed: "The leaves, roots and whole plant" },
  sources: {
    usda: {
      title: "Spermacoce verticillata L. (shrubby false buttonweed)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/SPVE2",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    izuogu: {
      title: "A review on Borreria verticillata: A potential bionematicide, channeling its significant antimicrobial activity against root-knot nematodes",
      author: "Izuogu NB, Bello OE, Bello OM",
      journal: "Heliyon",
      publicationDate: "2020-10-22",
      doi: "10.1016/j.heliyon.2020.e05322",
      pmid: "33134589",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7586115/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    silva: {
      title: "Antinociceptive Activity of Borreria verticillata: In vivo and In silico Studies",
      author: "Silva RHM, Lima NFM, Lopes AJO, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2017-05-22",
      doi: "10.3389/fphar.2017.00283",
      pmid: "28588488",
      url: "https://doi.org/10.3389/fphar.2017.00283",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Borreria verticillata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Vassourinha", type: "REGIONAL_NAME", region: "Brazil" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A common weedy herb in the coffee family, used traditionally for skin diseases such as eczema, infected rashes and scabies. In Brazil, the root is used to cause vomiting and the leaves for diarrhea, hemorrhoids and the skin infection erysipelas.",
      source: "izuogu",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats and mice, an extract reduced swelling and pain. Ursolic acid appeared to be the main active compound.",
      source: "silva",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab studies suggest it fights bacteria and fungi.",
      source: "izuogu",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "izuogu",
    },
  ],
  symptoms: [
    { slug: "lice-and-scabies", notes: "A traditional remedy for scabies and other skin diseases. Not tested in people." },
    { slug: "eczema", notes: "Traditionally used for eczema. Not tested in people." },
  ],
});
