import { run } from "./lib/populate-herb";

// Meadow Saffron (Colchicum autumnale, autumn crocus), from a 2021 case series
// and review of accidental poisonings (Razinger et al.) and 17 years of Austrian
// poison centre data (Arif et al. 2023). Family per GBIF.

run({
  name: "Meadow Saffron",
  profile: { family: "Colchicaceae", genus: "Colchicum", species: "autumnale", nativeRange: "Europe", partsUsed: "The corm, seeds and leaves (all poisonous)" },
  sources: {
    razinger: {
      title: "Accidental poisoning with autumn crocus (Colchicum autumnale): a case series",
      author: "Razinger G, Kozelj G, Gorjup V, Grenc D, Brvar M",
      journal: "Clinical Toxicology",
      publicationDate: "2020-11-06",
      doi: "10.1080/15563650.2020.1832234",
      pmid: "33156711",
      url: "https://doi.org/10.1080/15563650.2020.1832234",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    arif: {
      title: "Colchicum autumnale intoxications: experience of the Poisons Information Centre, Austria 2002-2018",
      author: "Arif T, Bicker W, Pöchacker S, Kögler A, Gangl C, Holzer A",
      journal: "Clinical Toxicology",
      publicationDate: "2023-11-21",
      doi: "10.1080/15563650.2023.2272572",
      pmid: "37917169",
      url: "https://doi.org/10.1080/15563650.2023.2272572",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Autumn Crocus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A crocus-like meadow flower that blooms in autumn. It contains colchicine, a highly toxic alkaloid.",
      source: "razinger",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Highly poisonous. Its colchicine causes vomiting and diarrhea within hours, then can shut down the bone marrow and damage the heart. In reported accidental poisonings about a third of people died.",
      source: "razinger",
    },
    {
      category: "TOXICITY",
      description: "Most poisonings happen when people mistake its spring leaves for wild garlic (ramsons, Allium ursinum). Doctors are advised to suspect it in anyone with vomiting or diarrhea after eating wild greens in spring.",
      source: "arif",
    },
  ],
});
