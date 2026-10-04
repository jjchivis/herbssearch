import { run } from "./lib/populate-herb";

// Maral Root (Rhaponticum carthamoides, Russian leuzea), from a 2009 review of
// its chemistry and pharmacology based on 117 sources, many in Russian
// (Kokoska & Janovska).

run({
  name: "Maral Root",
  profile: {
    family: "Asteraceae",
    genus: "Rhaponticum",
    species: "carthamoides",
    nativeRange: "Eastern Russia",
    partsUsed: "The root and underground stem",
  },
  sources: {
    kokoska: {
      title: "Chemistry and pharmacology of Rhaponticum carthamoides: a review",
      author: "Kokoska L, Janovska D",
      journal: "Phytochemistry",
      publicationDate: "2009-05-18",
      doi: "10.1016/j.phytochem.2009.04.008",
      pmid: "19457517",
      url: "https://pubmed.ncbi.nlm.nih.gov/19457517/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Russian Leuzea", type: "COMMON_NAME" },
    { name: "Leuzea", type: "COMMON_NAME" },
    { name: "Leuzea carthamoides", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Maral root has been used for centuries in eastern Russia as a medicinal plant. Researchers have suggested it could work as an adaptogen, a plant thought to help the body cope with stress.",
      source: "kokoska",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Maral root contains ecdysteroids (plant compounds similar to insect hormones) and flavonoids. In lab and animal studies, mostly published in Russian, its extracts have shown effects on the brain, blood, heart and nervous system, protein building, physical work capacity, reproduction and sexual function, as well as antioxidant, immune, antimicrobial and antiparasitic activity.",
      source: "kokoska",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "The 2009 review's authors described its preparations as \"hopefully safe\", but its safety in people hasn't been well studied.",
      source: "kokoska",
    },
  ],
  symptoms: [
    { slug: "fatigue", notes: "Studied, mainly in animals, for effects on physical work capacity. Not well tested in people." },
  ],
});
