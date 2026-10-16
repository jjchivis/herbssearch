import { run } from "./lib/populate-herb";

// Speranskia (Speranskia tuberculata). Very little has been published in
// English; this uses the background of a 2026 quality-control study (Li et al.;
// abstract only).

run({
  name: "Speranskia",
  profile: {
    family: "Euphorbiaceae",
    genus: "Speranskia",
    species: "tuberculata",
    partsUsed: "The dried herb",
  },
  sources: {
    li: {
      title: "Comprehensive Analysis of Quality Markers in Speranskia tuberculata based on HPLC Fingerprinting, Chemometrics, and Network Pharmacology",
      author: "Li H, Wang J, Yang C, Wang X, Wang N",
      journal: "Journal of AOAC International",
      publicationDate: "2026-05-22",
      doi: "10.1093/jaoacint/qsag043",
      pmid: "42172619",
      url: "https://pubmed.ncbi.nlm.nih.gov/42172619/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Speranskia tuberculata", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used to \"dispel wind and dampness\", promote blood circulation and relieve pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Speranskia is a perennial herb used in traditional Chinese medicine to \"dispel wind and dampness\", promote blood circulation and relieve pain. Very little research on it has been published in English: a 2026 study notes that its quality markers and how it might work haven't been worked out.",
      source: "li",
    },
    {
      category: "PRECLINICAL",
      summary: "Chemical analysis found plant compounds including chlorogenic acid, kaempferol, diosmetin and amentoflavone. This was a quality-control study and doesn't show any health effect.",
      source: "li",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Traditionally used in Chinese medicine for \"wind-damp\" aches and pain. Not tested in trials." },
  ],
});
