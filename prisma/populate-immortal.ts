import { run } from "./lib/populate-herb";

// Immortal (Helichrysum italicum), from a 2014 review of its traditional uses
// and pharmacology (Antunes Viegas et al.) and a 2021 review of its internal use
// (Kramberger et al.). Family per GBIF.

run({
  name: "Immortal",
  profile: { family: "Asteraceae", genus: "Helichrysum", species: "italicum", nativeRange: "The Mediterranean", partsUsed: "The flowers and leaves" },
  sources: {
    antunes: {
      title: "Helichrysum italicum: from traditional use to scientific data",
      author: "Antunes Viegas D, Palmeira-de-Oliveira A, Salgueiro L, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2013-11-14",
      doi: "10.1016/j.jep.2013.11.005",
      pmid: "24239849",
      url: "https://doi.org/10.1016/j.jep.2013.11.005",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kramberger: {
      title: "A Review and Evaluation of the Data Supporting Internal Use of Helichrysum italicum",
      author: "Kramberger K, Kenig S, Jenko Pražnikar Z, et al.",
      journal: "Plants",
      publicationDate: "2021-08-23",
      doi: "10.3390/plants10081738",
      pmid: "34451781",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8399527/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A Mediterranean plant whose yellow flowers keep their shape and color when dried, which is why the group is called \"everlasting\" or \"immortal.\" It is used in Italy, Spain, Portugal and Bosnia and Herzegovina. The flowers and leaves are taken for allergies, colds, cough, skin problems, liver and gallbladder complaints, inflammation, infections and trouble sleeping.",
      source: "antunes",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Six clinical trials looked at it for pain, cough and mental exhaustion, but it was usually mixed with other ingredients, so its own effect isn't clear.",
      source: "kramberger",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, its compounds fought bacteria such as Staph and the yeast Candida, and eased inflammation. Its flavonoids protected skin from sun redness in animals and people.",
      source: "antunes",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects were reported in the clinical trials.",
      source: "kramberger",
    },
    {
      category: "ALLERGY",
      description: "One allergic reaction to its extracts has been reported.",
      source: "antunes",
    },
    {
      category: "DRUG_INTERACTION",
      description: "One of its flavonoids blocked some CYP enzymes, the liver enzymes that break down many drugs.",
      source: "antunes",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Used traditionally for cough and studied in mixed cough products." },
  ],
});
