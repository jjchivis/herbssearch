import { run } from "./lib/populate-herb";

// Stinging Nettle Seeds (Urtica dioica), from a 2023 study of nettle seed oil
// (Mitrović et al.) and a 2024 study of nettle seed proteins (Aksoylu Özbek et
// al.). No studies of nettle seeds as a medicine were found in verified sources;
// see the Nettle page for the leaf and root.

run({
  name: "Stinging Nettle Seeds",
  profile: {
    family: "Urticaceae",
    genus: "Urtica",
    species: "dioica",
    partsUsed: "The seeds, pressed for oil",
  },
  sources: {
    mitrovic: {
      title: "The chemical characterisation of nettle (Urtica dioica L.) seed oil",
      author: "Mitrović J, Nikolić N, Ristić I, Karabegović I, Savić S, Šimurina O, Cvetković B, Pešić M",
      journal: "Natural Product Research",
      publicationDate: "2023-08-25",
      doi: "10.1080/14786419.2023.2250525",
      pmid: "37621206",
      url: "https://pubmed.ncbi.nlm.nih.gov/37621206/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    aksoylu: {
      title: "Isolation and characterization of nettle (Urtica dioica L.) seed proteins: Conversion of underutilized by-products of the edible oil industry into food emulsifiers",
      author: "Aksoylu Özbek Z, Kawata K, Zhou H, Chung C, Park JH, McClements DJ",
      journal: "Food Chemistry",
      publicationDate: "2024-06-03",
      doi: "10.1016/j.foodchem.2024.139878",
      pmid: "38852455",
      url: "https://pubmed.ncbi.nlm.nih.gov/38852455/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Nettle Seed", type: "COMMON_NAME" },
    { name: "Urtica Seed", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Nettle seed oil is an edible oil of the linoleic acid type, considered nutritionally valuable and stable when heated.\nNo studies of nettle seeds as a medicine were found. The Nettle page covers the leaf and root.",
      source: "mitrovic",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, proteins extracted from the meal left after pressing nettle seed oil worked as emulsifiers, helping oil and water mix in thick foods such as dressings and sauces.\n\nTechnical detail: protein powder was 48.3% protein; main amino acids glutamic acid (16.6%), asparagine (10.7%) and arginine (9.7%).",
      source: "aksoylu",
    },
  ],
});
