import { run } from "./lib/populate-herb";

// Radula Marginata (Radula marginata), from a 2024 study of its cannabinoids
// (Andre et al.), a 2018 study of perrottetinene in mice (Chicca et al.) and a
// 2002 chemistry paper (Toyota et al.). Family per GBIF.

run({
  name: "Radula Marginata",
  profile: { family: "Radulaceae", genus: "Radula", species: "marginata", nativeRange: "New Zealand", partsUsed: "The whole plant" },
  sources: {
    andre: {
      title: "Unique bibenzyl cannabinoids in the liverwort Radula marginata: parallels with Cannabis chemistry",
      author: "Andre CM, Sansom CE, Plunkett BJ, et al.",
      journal: "New Phytologist",
      publicationDate: "2024-12-23",
      doi: "10.1111/nph.20349",
      pmid: "39716766",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12095976/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chicca: {
      title: "Uncovering the psychoactivity of a cannabinoid from liverworts associated with a legal high",
      author: "Chicca A, Schafroth MA, Reynoso-Moreno I, et al.",
      journal: "Science Advances",
      publicationDate: "2018-10-24",
      doi: "10.1126/sciadv.aat2166",
      pmid: "30397641",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6200358/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    toyota: {
      title: "New bibenzyl cannabinoid from the New Zealand liverwort Radula marginata",
      author: "Toyota M, Shimamura T, Ishii H, et al.",
      journal: "Chemical & Pharmaceutical Bulletin",
      publicationDate: "2002-10-01",
      doi: "10.1248/cpb.50.1390",
      pmid: "12372871",
      url: "https://doi.org/10.1248/cpb.50.1390",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A liverwort found only in New Zealand (Aotearoa). It makes perrottetinene, a cannabinoid similar to THC, the compound that makes cannabis cause a high. Some plants also make a CBD-like compound.",
      source: "andre",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, perrottetinene entered the brain and acted on the same receptor as THC (CB1). It lowered body temperature, slowed movement and eased pain.",
      source: "chicca",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Radula preparations are sold online as a legal high. Perrottetinene is a psychoactive cannabinoid, and there are no human safety studies.",
      source: "chicca",
    },
  ],
});
