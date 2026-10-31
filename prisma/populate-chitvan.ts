import { run } from "./lib/populate-herb";

// Chitvan (Alstonia scholaris), from a 2016 rat toxicity study
// (Bello et al.). No human studies were found. Family per GBIF.

run({
  name: "Chitvan",
  profile: {
    family: "Apocynaceae",
    genus: "Alstonia",
    species: "scholaris",
    nativeRange: "South and Southeast Asia to northern Australia",
    partsUsed: "The stem bark",
  },
  sources: {
    bello: {
      title: "Acute and Sub-Acute Toxicity Evaluation of the Methanolic Extract of Alstonia scholaris Stem Bark",
      author: "Bello I, Bakkouri AS, Tabana YM, et al.",
      journal: "Medical Sciences",
      publicationDate: "2016-03-08",
      doi: "10.3390/medsci4010004",
      pmid: "29083368",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5635771/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The bark of chitvan has been used by traditional healers since medieval times.",
      source: "bello",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies have found it may calm inflammation, ease pain, lower blood sugar and cholesterol, and act against malaria and microbes.",
      source: "bello",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In rats, a single large dose of bark extract was not toxic, but daily doses over 28 days changed blood results and damaged the liver at higher doses, and two rats died at the highest dose.",
      source: "bello",
    },
  ],
});
