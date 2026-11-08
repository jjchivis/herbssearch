import { run } from "./lib/populate-herb";

// Patrinia (Patrinia scabiosifolia). Sources: a 2023 mouse study that also describes its traditional use, a 2021 lab study of its iridoids and a 2023 lab study against drug-resistant bacteria. Family per GBIF. No human safety data was found.

run({
  name: "Patrinia Herb",
  profile: {
    family: "Caprifoliaceae",
    genus: "Patrinia",
    species: "scabiosifolia",
    partsUsed: "The whole plant",
  },
  sources: {
    zorikova: {
      title: "Evaluation of the anxiolytic activity of dry extract of Patrinia scabiosifolia under acoustic stress",
      author: "Zorikova O, Manyakhin A, Kolyada N, et al.",
      journal: "European Review for Medical and Pharmacological Sciences",
      publicationDate: "2023-12-01",
      pmid: "38164833",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.26355/eurrev_202312_34767",
      url: "https://doi.org/10.26355/eurrev_202312_34767",
    },
    sun: {
      title: "Two New Iridoid Glucosides from the Whole Plant of Patrinia scabiosifolia Link.",
      author: "Sun S, Fu J, Liu K, et al.",
      journal: "Molecules",
      publicationDate: "2021-07-10",
      pmid: "34299477",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3390/molecules26144201",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8304010/",
    },
    liuX: {
      title: "Antibacterial Mechanism of Patrinia scabiosaefolia Against Methicillin Resistant Staphylococcus epidermidis",
      author: "Liu X, An L, Zhou Y, et al.",
      journal: "Infection and Drug Resistance",
      publicationDate: "2023-03-10",
      pmid: "36925724",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.2147/IDR.S398227",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10013587/",
    },
  },
  synonyms: [{ name: "Patrinia", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used for inflammation-related conditions." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "Patrinia has been used in traditional medicine in East Asia, Africa and South America for more than 2,000 years.", source: "zorikova" },
    { category: "TRADITIONAL", summary: "In traditional Chinese medicine it is used for inflammation-related conditions.", source: "sun" },
    { category: "PRECLINICAL", summary: "In stressed mice, a dry extract worked about as well as a reference anti-anxiety drug and improved sleep, and was found safe in the animals. The authors suggest it could be tested in people.", source: "zorikova" },
    { category: "PRECLINICAL", summary: "In a lab study, a compound from the plant reduced inflammation.", source: "sun" },
    { category: "PRECLINICAL", summary: "In a lab study, patrinia damaged drug-resistant Staphylococcus epidermidis bacteria.", source: "liuX" },
  ],
  symptoms: [
    { slug: "anxiety", notes: "Reduced anxiety in stressed mice; not yet tested in people." },
    { slug: "occasional-sleeplessness", notes: "Improved sleep in stressed mice; not yet tested in people." },
  ],
});
