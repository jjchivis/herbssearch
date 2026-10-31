import { run } from "./lib/populate-herb";

// Staff Tree, jyotishmati (Celastrus paniculatus), from a 2015 study of pain
// and inflammation in mice and rats (Kulkarni et al.) and a 2016 mouse study of
// its seed oil and mood (Valecha & Dhingra). No human trials were found.
// Family per GBIF.

run({
  name: "Staff Tree",
  profile: {
    family: "Celastraceae",
    genus: "Celastrus",
    species: "paniculatus",
    nativeRange: "India and Southeast Asia",
    partsUsed: "The seeds and seed oil",
  },
  sources: {
    kulkarni: {
      title: "Effect of Jyotishmati (Celastrus paniculatus) seeds in animal models of pain and inflammation",
      author: "Kulkarni YA, Agarwal S, Garud MS",
      journal: "Journal of Ayurveda and Integrative Medicine",
      publicationDate: "2015-04-01",
      doi: "10.4103/0975-9476.146540",
      pmid: "26166997",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4484053/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    valecha: {
      title: "Behavioral and Biochemical Evidences for Antidepressant-Like Activity of Celastrus Paniculatus Seed Oil in Mice",
      author: "Valecha R, Dhingra D",
      journal: "Basic and Clinical Neuroscience",
      publicationDate: "2016-01-01",
      pmid: "27303599",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4892330/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jyotishmati", type: "TRADITIONAL_NAME" },
    { name: "Malkangni", type: "REGIONAL_NAME", region: "India" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Seed oil used as a brain tonic for memory and intellect." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jyotishmati is one of the most important plants in Ayurveda. Its seed oil is used as a brain tonic for memory and intellect.",
      source: "kulkarni",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice and rats, a seed extract eased pain and reduced swelling. Earlier animal studies found the seed oil reversed memory problems.",
      source: "kulkarni",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, the seed oil taken for 14 days had antidepressant-like effects comparable to the drug fluoxetine.",
      source: "valecha",
    },
  ],
});
