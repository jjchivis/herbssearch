import { run } from "./lib/populate-herb";

// Western Mugwort (Artemisia ludoviciana), from a 2021 study of its Mexican
// subspecies against H. pylori (Palacios-Espinosa et al.) and a 2024 study
// against a ringworm fungus (Villarreal Villarreal et al.). Family per GBIF.

run({
  name: "Western Mugwort",
  profile: {
    family: "Asteraceae",
    genus: "Artemisia",
    species: "ludoviciana",
    nativeRange: "North America and Mexico",
    partsUsed: "The leaves and stems",
  },
  sources: {
    palacios: {
      title: "Anti-Helicobacter pylori Activity of Artemisia ludoviciana subsp. mexicana and Two of Its Bioactive Components, Estafiatin and Eupatilin",
      author: "Palacios-Espinosa JF, Núñez-Aragón PN, Gomez-Chang E, et al.",
      journal: "Molecules",
      publicationDate: "2021-06-15",
      doi: "10.3390/molecules26123654",
      pmid: "34203927",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8232798/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    villarreal: {
      title: "Phytotherapeutic potential of Artemisia ludoviciana and Cordia boissieri extracts against the dermatophyte Microsporum canis",
      author: "Villarreal Villarreal JP, Medina Soto BA, Heya MS, et al.",
      journal: "Journal of Veterinary Research",
      publicationDate: "2024-08-07",
      doi: "10.2478/jvetres-2024-0046",
      pmid: "39324026",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11424138/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Estafiate", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "White Sagebrush", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Estafiatin", slug: "estafiatin", type: "sesquiterpene lactone" },
    { name: "Eupatilin", slug: "eupatilin", type: "flavone" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Mexico, where it's called estafiate, western mugwort is traditionally used for digestive problems such as gastritis.",
      source: "palacios",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a water extract killed Helicobacter pylori, the bacterium behind many stomach ulcers. In mice, it protected the stomach by about 70% and reduced inflammation, with no signs of poisoning. Two of its compounds, estafiatin and eupatilin, were active against the bacterium.",
      source: "palacios",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, an extract slowed a ringworm fungus that spreads from pets to people, without harming human skin cells.",
      source: "villarreal",
    },
  ],
});
