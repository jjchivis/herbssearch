import { run } from "./lib/populate-herb";

// Abrus Precatorius (rosary pea, jumbee bead), from a 2023 case report of fatal
// seed poisoning (Kumar et al.), a 2026 survey of toxic plants in St Kitts (Nagy
// et al.) and a 2025 study of its leaves (Vijayan & Margesan).

run({
  name: "Abrus Precatorius",
  profile: {
    family: "Fabaceae",
    genus: "Abrus",
    species: "precatorius",
    partsUsed: "The leaves are used in traditional medicine; the red-and-black seeds are deadly poisonous",
  },
  sources: {
    kumar: {
      title: "Fatal Curiosity: A Case of Suicidal Attempt by Abrus Seeds Consumption Through Online Research",
      author: "Kumar M, Dinkar PK, Abbas H, Chaudhary E",
      journal: "Cureus",
      publicationDate: "2023-05-02",
      doi: "10.7759/cureus.38458",
      pmid: "37273369",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10234767/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nagy: {
      title: "Toxic Plants Potentially Impacting the Health Status of Livestock in St. Kitts—A Surveillance Study",
      author: "Nagy AL, Caloni F, Kemper RT, et al.",
      journal: "Toxins",
      publicationDate: "2026-09-03",
      doi: "10.3390/toxins18090380",
      pmid: "42784304",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13611601/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vijayan: {
      title: "The potential of Abrus precatorius leaves in arthritis alleviation computational approaches through LC-MS analysis",
      author: "Vijayan S, Margesan T",
      journal: "Future Science OA",
      publicationDate: "2025-03-25",
      doi: "10.1080/20565623.2025.2483131",
      pmid: "40131221",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11938972/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Rosary Pea", type: "COMMON_NAME" },
    { name: "Jumbee Bead", type: "REGIONAL_NAME", region: "Caribbean" },
    { name: "Crab's Eye", type: "COMMON_NAME" },
    { name: "Jequirity", type: "COMMON_NAME" },
    { name: "Indian Liquorice", type: "COMMON_NAME" },
    { name: "Precatory Bean", type: "COMMON_NAME" },
    { name: "Gunja", type: "REGIONAL_NAME", region: "India" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Abrus is a plant with bright red-and-black seeds, also known as rosary pea or crab's eye. It's often used in traditional medicine, and its leaves have been studied for joint inflammation.",
      source: "vijayan",
    },
    {
      category: "TRADITIONAL",
      summary: "In the Caribbean it's known as jumbee bead. A 2026 survey found it growing widely across St Kitts.",
      source: "nagy",
    },
    {
      category: "PRECLINICAL",
      summary: "A 2025 computer and chemistry study of the leaves found flavonoids and other compounds predicted to reduce inflammation, suggesting possible use in arthritis. This was not tested in animals or people.",
      source: "vijayan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "The seeds contain abrin, one of the deadliest poisons known and considered even more fatal than ricin. Swallowed whole, the hard shell may pass through, but if the seeds are chewed or crushed, as little as 1 or 2 seeds has killed people. Symptoms include vomiting, diarrhoea, stomach pain and bleeding from the gut.",
      source: "kumar",
    },
    {
      category: "TOXICITY",
      description: "Children are drawn to the brightly coloured seeds and can swallow them by accident.",
      source: "kumar",
    },
    {
      category: "TOXICITY",
      description: "In St Kitts, jumbee bead was found on almost half the farms surveyed and is known to poison livestock, causing stomach pain, vomiting, bleeding in the gut and nervous system signs.",
      source: "nagy",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Warning: the leaves were studied for arthritis only in a computer and chemistry study; the seeds are deadly poisonous." },
  ],
});
