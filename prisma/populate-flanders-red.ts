import { run } from "./lib/populate-herb";

// Flanders Red, a basket willow variety of common osier (Salix viminalis), from a 2024 study of five willows (Curtasu & Nørskov)
// and a 2014 lab study (Ilnicka et al.). Research is on the species; none
// was found on this variety. Family per GBIF.

run({
  name: "Flanders Red",
  profile: {
    family: "Salicaceae",
    genus: "Salix",
    species: "viminalis",
    partsUsed: "The rods (stems) for basket-making; the buds and bark have been studied",
  },
  sources: {
    curtasu: {
      title: "Quantitative distribution of flavan-3-ols, procyanidins, flavonols, flavanone and salicylic acid in five varieties of organic winter dormant Salix spp. by LC-MS/MS",
      author: "Curtasu MV, Nørskov NP",
      journal: "Heliyon",
      publicationDate: "2024-02-01",
      doi: "10.1016/j.heliyon.2024.e25129",
      pmid: "38333780",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850552/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ilnicka: {
      title: "Biologically active constituents from Salix viminalis bio-oil and their protective activity against hydrogen peroxide-induced oxidative stress in Chinese hamster ovary cells",
      author: "Ilnicka A, Roszek K, Olejniczak A, Komoszynski M, Lukaszewicz JP",
      journal: "Applied Biochemistry and Biotechnology",
      publicationDate: "2014-08-30",
      doi: "10.1007/s12010-014-1171-0",
      pmid: "25172057",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4207959/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Common Osier", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Willows have long been grown for basket-making and for their medicinal value.",
      source: "curtasu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a comparison of five willows, osier buds had the most catechin, an antioxidant also found in tea. In all of them, salicylic acid (a compound related to aspirin) was highest in the bark.",
      source: "curtasu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, an antioxidant extract made from osier wood helped up to 25% more cells survive oxidative damage.",
      source: "ilnicka",
    },
  ],
});
