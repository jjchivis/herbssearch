import { run } from "./lib/populate-herb";

// Sweetgrass (Hierochloe odorata), from a 2015 ethnobotanical study of scented
// grasses in Norway (Alm) and a 2024 study of smudge sticks (Pombo Geertsma et
// al.). No medicinal or safety studies were found. Family per GBIF.

run({
  name: "Sweetgrass",
  profile: {
    family: "Poaceae",
    genus: "Hierochloe",
    species: "odorata",
    nativeRange: "Northern North America, Europe and Asia",
    partsUsed: "The fragrant leaves, often braided",
  },
  sources: {
    alm: {
      title: "Scented grasses in Norway—identity and uses",
      author: "Alm T",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2015-12-23",
      doi: "10.1186/s13002-015-0070-y",
      pmid: "26701261",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4690224/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pombo: {
      title: "Commercialized \"Smudge Sticks\" Used as Incense in the Netherlands: An Inventory of Plants and Trends Behind a New Age Fashion",
      author: "Pombo Geertsma I, Zandstra BE, Stefanaki A, van Andel TR",
      journal: "Plants",
      publicationDate: "2024-10-27",
      doi: "10.3390/plants13213003",
      pmid: "39519920",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11547997/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Vanilla Grass", type: "COMMON_NAME" }, { name: "Holy Grass", type: "COMMON_NAME" }],
  constituents: [{ name: "Coumarin", slug: "coumarin", type: "benzopyrone" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Burned in smudging ceremonies." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Sweetgrass is one of the plants Native Americans burn in smudging ceremonies.",
      source: "pombo",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In northern Norway, especially among the Sámi, sweetgrass is rich in sweet-smelling coumarin and is still gathered as a perfume and stored with clothes. Only its leaves are suitable for the traditional braids.",
      source: "alm",
    },
  ],
});
