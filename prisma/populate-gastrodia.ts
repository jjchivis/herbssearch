import { run } from "./lib/populate-herb";

// Gastrodia Elata Rhizome (tian ma), from a 2025 systematic review of its
// metabolites and therapeutic potential (Zhou et al.).

run({
  name: "Gastrodia Elata Rhizome",
  profile: {
    family: "Orchidaceae",
    genus: "Gastrodia",
    species: "elata",
    partsUsed: "The dried tuber (rhizome) of an orchid",
  },
  sources: {
    zhou: {
      title: "From molecules to medicine: a systematic review of Gastrodia elata's bioactive metabolites and therapeutic potential",
      author: "Zhou X, Han M, Yan S, Wang M, Zu S, Zhong S",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-11-07",
      doi: "10.3389/fphar.2025.1641443",
      pmid: "41282615",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12634510/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Tian Ma", type: "TRADITIONAL_NAME" },
    { name: "Tianma", type: "TRADITIONAL_NAME" },
    { name: "Gastrodia", type: "COMMON_NAME" },
    { name: "Rhizoma Gastrodiae", type: "COMMON_NAME" },
    { name: "Gastrodia Elate Rhizome", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called tian ma; recorded in the Shennong Herbal Classic over 2,000 years ago and used for headache, dizziness, high blood pressure, stroke and numbness." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tian ma is the dried tuber of an orchid, recorded in the Shennong Herbal Classic over 2,000 years ago. It's used in China, Korea, Japan and Russia, mainly for:\n- Headache and dizziness\n- High blood pressure\n- Stroke, one-sided weakness and numbness in the limbs\n- Arthritis\nIt's usually taken as a decoction, often with other herbs such as chuanxiong.",
      source: "zhou",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, tian ma and its main compound gastrodin had calming and sleep-promoting effects, reduced seizures, protected nerve cells in models of Alzheimer's and Parkinson's disease, lowered blood pressure and protected the heart and blood vessels. Its compound gastrodin is used as a single-ingredient medicine in China, but clinical trials for newer uses are limited.",
      source: "zhou",
    },
  ],
  symptoms: [
    { slug: "headache", notes: "A classic Chinese herb for headache and dizziness. Not well tested in trials." },
    { slug: "high-blood-pressure", notes: "Traditionally used for high blood pressure; lowered it in animal studies. Not well tested in trials." },
  ],
});
