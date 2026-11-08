import { run } from "./lib/populate-herb";

// Japanese ardisia (Ardisia japonica). Sources: a 2026 review of its traditional
// use, chemistry and pharmacology; a 2018 rat study describing its traditional
// uses; and a 2024 study on bergenin, its cough-relieving compound. Family per
// GBIF. No source covering human safety was found, so none is stated.

run({
  name: "Japanese Ardisia",
  profile: {
    family: "Primulaceae",
    genus: "Ardisia",
    species: "japonica",
    partsUsed: "The whole plant, dried",
  },
  sources: {
    gao: {
      title: "Ardisia japonica (Thunb.) Blume: Traditional applications, phytochemistry, pharmacological activities, network pharmacology, and quality control",
      author: "Gao P, Yang Y, Li Y, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2026-02-10",
      doi: "10.1016/j.jep.2025.120761",
      pmid: "41115484",
      url: "https://doi.org/10.1016/j.jep.2025.120761",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yu: {
      title:
        "Simultaneous Quantification of Gallic Acid, Bergenin, Epicatechin, Epicatechin Gallate, Isoquercitrin, and Quercetin-3-Rhamnoside in Rat Plasma by LC-MS/MS Method and Its Application to Pharmacokinetics after Oral Administration of Ardisia japonica Extract",
      author: "Yu XA, Teye Azietaku J, Li J, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2018-01-14",
      doi: "10.1155/2018/4964291",
      pmid: "29552082",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5820647/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yan: {
      title: "Unravelling and reconstructing the biosynthetic pathway of bergenin",
      author: "Yan R, Xie B, Xie K, et al.",
      journal: "Nature Communications",
      publicationDate: "2024-04-26",
      doi: "10.1038/s41467-024-47502-2",
      pmid: "38670975",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11053098/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Used for nearly a thousand years to relieve cough, loosen phlegm and ease asthma.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Japanese ardisia has been used as medicine in China for nearly a thousand years, to relieve cough, loosen phlegm and ease asthma. Today it is used in China for breathing and liver problems, and 23 Chinese patent medicines containing it are sold there for breathing conditions.",
      source: "gao",
    },
    {
      category: "TRADITIONAL",
      summary: "It is also used in traditional Chinese medicine to increase urine and to stop bleeding from the womb.",
      source: "yu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies report effects against inflammation, coughing, airway changes, liver injury and scarring, bacteria, viruses and tumors.",
      source: "gao",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Bergenin, one of the plant's compounds, is widely used in clinics in China as a cough and phlegm medicine for long-term inflammation of the windpipe (chronic tracheitis).",
      source: "yan",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Used in Chinese medicine for cough and phlegm; its compound bergenin is a cough medicine in China." },
    { slug: "chest-congestion", notes: "Traditionally used to loosen phlegm." },
  ],
});
