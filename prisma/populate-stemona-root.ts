import { run } from "./lib/populate-herb";

// Stemona Root (bai bu; Stemona species), from a 2021 review of the traditional
// uses, chemistry and pharmacology of the genus (Liu et al.; abstract only).

run({
  name: "Stemona Root",
  profile: {
    family: "Stemonaceae",
    genus: "Stemona",
    species: "several species",
    partsUsed: "The tuberous roots",
  },
  sources: {
    liu: {
      title: "The traditional uses, phytochemistry, and pharmacology of Stemona species: A review",
      author: "Liu Y, Shen Y, Teng L, Yang L, Cao K, Fu Q, Zhang J",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2020-07-26",
      doi: "10.1016/j.jep.2020.113112",
      pmid: "32726680",
      url: "https://pubmed.ncbi.nlm.nih.gov/32726680/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bai Bu", type: "TRADITIONAL_NAME" },
    { name: "Baibu", type: "TRADITIONAL_NAME" },
    { name: "Stemonae Radix", type: "COMMON_NAME" },
    { name: "Stemona", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called bai bu; used across South and East Asia to relieve cough and phlegm, for asthma, and to kill lice and other pests." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Stemona plants have long been used as medicine in many South and East Asian countries, to:\n- Relieve cough and clear phlegm\n- Prevent asthma\n- Kill lice and other pests\n- Reduce inflammation and pain\n- Treat some skin diseases",
      source: "liu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, Stemona extracts and their alkaloids killed and repelled insects, eased coughs, may help reduce inflammation, and showed activity against cancer cells, microbes and viruses. The reviewers say the research so far is insufficient.",
      source: "liu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Its possible toxicity hasn't been properly studied; the reviewers say this is needed before clinical studies.",
      source: "liu",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "A traditional Asian remedy for cough and phlegm. Not tested in trials." },
    { slug: "lice-and-scabies", notes: "Traditionally used to kill lice and other pests; killed insects in lab studies. Not tested in people." },
  ],
});
