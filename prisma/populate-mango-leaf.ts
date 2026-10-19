import { run } from "./lib/populate-herb";

// Mango leaf (Mangifera indica), from a 2021 review of mango leaves (Kumar et al.)
// and a 2024 randomized trial of a mango leaf extract on thinking (Dodd et al.).
// No safety sources, so none are listed.

run({
  name: "Mango Leaf",
  profile: {
    family: "Anacardiaceae",
    genus: "Mangifera",
    species: "indica",
    nativeRange: "South and Southeast Asia; grown widely in the tropics",
    partsUsed: "The leaves, as a tea or extract",
  },
  sources: {
    kumar: {
      title: "Mango (Mangifera indica L.) Leaves: Nutritional Composition, Phytochemical Profile, and Health-Promoting Bioactivities",
      author: "Kumar M, Saurabh V, Tomar M, et al.",
      journal: "Antioxidants (Basel)",
      publicationDate: "2021-02-16",
      doi: "10.3390/antiox10020299",
      pmid: "33669341",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7920260/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dodd: {
      title: "Acute effects of mango leaf extract on cognitive function in healthy adults: a randomised, double-blind, placebo-controlled crossover study",
      author: "Dodd FL, Kennedy DO, Johnson J, Haworth E, Greener JP, Jackson PA",
      journal: "Frontiers in Nutrition",
      publicationDate: "2024-04-11",
      doi: "10.3389/fnut.2024.1298807",
      pmid: "38665302",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11043474/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mangifera indica", type: "COMMON_NAME" },
    { name: "Mango Leaves", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Mangiferin", slug: "mangiferin", type: "polyphenol" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Mango leaves are made into a folk tea, especially in Asian and African countries. Traditionally, leaf extracts have been used for:\n- Diabetes\n- Bronchitis, asthma and other breathing problems\n- Diarrhea\n- Kidney and urinary problems\n- Scabies\n- Syphilis",
      source: "kumar",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Mango leaves are rich in mangiferin and other plant compounds. Lab and animal studies have reported that leaf extracts act as antioxidants and may lower blood sugar and blood fats, protect the liver, fight germs, and slow or kill some cancer cells. These effects haven't been confirmed in people.",
      source: "kumar",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2024 trial, 114 healthy adults took a single 300 mg dose of mango leaf extract or a dummy pill. The extract didn't improve thinking or mood over the next 5 hours. It slightly increased mistakes on one subtraction test, which the researchers said should be treated with caution.\n\nTechnical detail: randomized, double-blind, placebo-controlled crossover; extract standardised to at least 60% mangiferin; NCT05182450.",
      source: "dodd",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Traditionally used for diabetes; lowered blood sugar in lab and animal studies, but not tested for this in people." },
  ],
});
