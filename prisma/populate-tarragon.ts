import { run } from "./lib/populate-herb";

// Tarragon (Artemisia dracunculus), from a 2021 review of its traditional uses,
// chemistry and pharmacology (Ekiert et al.) and a 2011 critical review that
// includes its safety (Obolskiy et al.).

run({
  name: "Tarragon",
  profile: {
    family: "Asteraceae",
    genus: "Artemisia",
    species: "dracunculus",
    partsUsed: "The leaves and above-ground parts, fresh or dried, as a spice or tea",
  },
  sources: {
    ekiert: {
      title: "Artemisia dracunculus (Tarragon): A Review of Its Traditional Uses, Phytochemistry and Pharmacology",
      author: "Ekiert H, Świątkowska J, Knut E, Klin P, Rzepiela A, Tomczyk M, Szopa A",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-04-13",
      doi: "10.3389/fphar.2021.653993",
      pmid: "33927629",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8076785/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    obolskiy: {
      title: "Artemisia dracunculus L. (tarragon): a critical review of its traditional use, chemical composition, pharmacology, and safety",
      author: "Obolskiy D, Pischel I, Feistel B, Glotov N, Heinrich M",
      journal: "Journal of Agricultural and Food Chemistry",
      publicationDate: "2011-10-13",
      doi: "10.1021/jf202277w",
      pmid: "21942448",
      url: "https://pubmed.ncbi.nlm.nih.gov/21942448/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Estragon", type: "COMMON_NAME" },
    { name: "French Tarragon", type: "COMMON_NAME" },
    { name: "Russian Tarragon", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tarragon is a spice in Asia, Europe and the Americas. In traditional medicine in Iran, Pakistan, Azerbaijan and India, it's used:\n- For digestive problems\n- To ease pain and inflammation\n- To help sleep and for epilepsy\n- To lower fever\n- For intestinal worms",
      source: "ekiert",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, mainly in rodents, tarragon has shown possible effects on inflammation, pain, blood sugar and liver protection.",
      source: "obolskiy",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Tarragon essential oil can contain large amounts of estragole and methyleugenol, two substances that raise safety concerns. No poisoning or gene damage has been reported at amounts people normally eat. Water-based preparations such as tea contain very little of these substances and are considered low risk.\n\nTechnical detail: estragole up to 82% and methyleugenol up to 39% of the essential oil.",
      source: "obolskiy",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Traditionally used in Iran, Pakistan, Azerbaijan and India for digestive problems. Not tested in trials." },
  ],
});
