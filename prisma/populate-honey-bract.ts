import { run } from "./lib/populate-herb";

// Honey Bract (Renealmia alpinia), from a 2016 study of its compound
// pinostrobin against snake venom (Gómez-Betancur et al.) and a 2023 study of
// the leaf oil (de Souza et al.). No human or safety studies were found.
// Family per GBIF.

run({
  name: "Honey Bract",
  profile: {
    family: "Zingiberaceae",
    genus: "Renealmia",
    species: "alpinia",
    nativeRange: "Tropical forests from Mexico to Brazil and the Caribbean",
    partsUsed: "The leaves",
  },
  sources: {
    gomez: {
      title: "Inhibitory effect of pinostrobin from Renealmia alpinia, on the enzymatic and biological activities of a PLA2",
      author: "Gómez-Betancur I, Pereañez JA, Patiño AC, Benjumea D",
      journal: "International Journal of Biological Macromolecules",
      publicationDate: "2016-04-22",
      doi: "10.1016/j.ijbiomac.2016.04.042",
      pmid: "27109758",
      url: "https://pubmed.ncbi.nlm.nih.gov/27109758/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    souza: {
      title: "Chemical composition and antioxidant activity of the essential oil of Renealmia alpinia (Rottb.) Maas",
      author: "de Souza ECA, Flach A, da Costa LAMA",
      journal: "Natural Product Research",
      publicationDate: "2023-01-17",
      doi: "10.1080/14786419.2022.2164578",
      pmid: "36650708",
      url: "https://pubmed.ncbi.nlm.nih.gov/36650708/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Pinostrobin", slug: "pinostrobin", type: "flavanone" },
    { name: "Beta-Caryophyllene", slug: "beta-caryophyllene", type: "sesquiterpene" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Honey bract, a wild relative of ginger, is used in folk medicine to treat snakebites.",
      source: "gomez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Pinostrobin, a compound from the plant, blocked a rattlesnake venom toxin. In mice, mixing it with the toxin before injection prevented up to 87% of the muscle damage, and it also reduced swelling. It worked less well when given after the toxin.\n\nTechnical detail: phospholipase A2 from Crotalus durissus cumanensis venom; IC50 about 1.8 mM; 56% inhibition when injected after the toxin.",
      source: "gomez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the leaf oil showed strong antioxidant activity. Its main compounds were alpha-phellandrene and beta-caryophyllene.",
      source: "souza",
    },
  ],
});
