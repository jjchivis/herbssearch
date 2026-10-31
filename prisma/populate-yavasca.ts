import { run } from "./lib/populate-herb";

// Yavasca, camel thorn (Alhagi maurorum), from a 2016 survey of plants used for
// kidney stones in Shiraz, Iran (Bahmani et al.) and a 2023 randomized trial
// for kidney and ureter stones (Mehrabi et al.). Family per GBIF.

run({
  name: "Yavasca",
  profile: {
    family: "Fabaceae",
    genus: "Alhagi",
    species: "maurorum",
    nativeRange: "North Africa, the Middle East and Central Asia",
    partsUsed: "The above-ground parts",
  },
  sources: {
    bahmani: {
      title: "Identification of medicinal plants for the treatment of kidney and urinary stones",
      author: "Bahmani M, Baharvand-Ahmadi B, Tajeddini P, Rafieian-Kopaei M, Naghdi N",
      journal: "Journal of Renal Injury Prevention",
      publicationDate: "2016-07-27",
      doi: "10.15171/jrip.2016.27",
      pmid: "27689108",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5039998/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mehrabi: {
      title: "Comparison of the Effect of Hydroalcholic Extract of Alhagi maurorum and Hydrochlorothiazide on Excretion of 4-10 mm Kidney and Ureteral Stones in Adults: A Randomized Prospective Study",
      author: "Mehrabi S, Beigi P, Salehpour Z",
      journal: "Advances in Pharmacological and Pharmaceutical Sciences",
      publicationDate: "2023-08-14",
      doi: "10.1155/2023/6624981",
      pmid: "37609006",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10442181/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Camel Thorn", type: "COMMON_NAME" },
    { name: "Kharshotor", type: "REGIONAL_NAME", region: "Iran (Persian)" },
  ],
  symptoms: [
    {
      slug: "kidney-stones",
      notes: "Traditionally used for kidney stones in Iran; in one trial its extract cleared stones as well as hydrochlorothiazide.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Shiraz, Iran, camel thorn (kharshotor) was the plant people mentioned most often for kidney stones, taken as a tea of the above-ground parts. It's also used for stomach upsets, ulcers, fever, headache, toothache, liver problems, urinary infections and high blood pressure.",
      source: "bahmani",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a randomized trial of 80 adults with 4 to 10 mm kidney or ureter stones, camel thorn extract capsules worked as well as the drug hydrochlorothiazide: stone size and number fell by up to 70% in both groups, with no serious side effects.",
      source: "mehrabi",
    },
  ],
});
