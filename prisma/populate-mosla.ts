import { run } from "./lib/populate-herb";

// Mosla Herb (Moslae Herba, xiang ru, from Mosla chinensis), from a 2024 review of
// its botany, traditional uses, chemistry and pharmacology (Duan et al.) and a
// 2025 lab study of its antiviral activity (Feng et al.).

run({
  name: "Mosla Herb",
  profile: {
    family: "Lamiaceae",
    genus: "Mosla",
    species: "chinensis",
    nativeRange: "Southern China",
    partsUsed: "The dried, aromatic above-ground parts",
  },
  sources: {
    duan: {
      title: "Moslae Herba: Botany, Traditional Uses, Phytochemistry, and Pharmacology",
      author: "Duan ZY, Sun YP, Wang ZB, Kuang HX",
      journal: "Molecules",
      publicationDate: "2024-04-10",
      doi: "10.3390/molecules29081716",
      pmid: "38675535",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11051901/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    feng: {
      title: "Antiviral Activity and Underlying Mechanism of Moslae herba Aqueous Extract for Treating SARS-CoV-2",
      author: "Feng Y, Ge Q, Gao J, et al.",
      journal: "Molecules",
      publicationDate: "2025-01-17",
      doi: "10.3390/molecules30020387",
      pmid: "39860255",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11767572/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Xiang Ru", type: "TRADITIONAL_NAME" },
    { name: "Xiangru", type: "TRADITIONAL_NAME" },
    { name: "Moslae Herba", type: "COMMON_NAME" },
    { name: "Mosla", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called xiang ru; used for about 1,500 years as food and medicine to bring on sweating and treat summer colds, heatstroke and diarrhoea." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Xiang ru is an aromatic herb of the mint family from southern China, used as both food and medicine for about 1,500 years. It's used to bring on sweating and \"remove dampness\", mainly for colds caused by summer heat and damp. On its own it has been used for cholera, nosebleeds, beriberi, bad breath and swelling (oedema). In the formula Xiang Ru San it's used for heatstroke and diarrhoea, and it's cooked into porridge.",
      source: "duan",
    },
    {
      category: "TRADITIONAL",
      summary: "Modern Chinese formulas containing it are used for summer colds, upper respiratory infections in summer and flu.",
      source: "feng",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2025 lab study, a water extract of xiang ru slowed the COVID-19 virus from multiplying in cells and reduced cell death caused by the infection. This hasn't been tested in people.",
      source: "feng",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "A traditional Chinese remedy for colds in summer heat and damp. Not tested on its own in trials." },
  ],
});
