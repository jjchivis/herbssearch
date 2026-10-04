import { run } from "./lib/populate-herb";

// Serpentina (Rauvolfia serpentina, Indian snakeroot), from a 2015 review of
// rauwolfia for high blood pressure (Lobay) and a 2016 Cochrane review of
// reserpine for primary hypertension (Shamon & Perez).

run({
  name: "Serpentina",
  profile: {
    family: "Apocynaceae",
    genus: "Rauvolfia",
    species: "serpentina",
    partsUsed: "The root",
  },
  sources: {
    lobay: {
      title: "Rauwolfia in the Treatment of Hypertension",
      author: "Lobay D",
      journal: "Integrative Medicine (Encinitas)",
      publicationDate: "2015-06-01",
      pmid: "26770146",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4566472/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cochrane: {
      title: "Blood pressure-lowering efficacy of reserpine for primary hypertension",
      author: "Shamon SD, Perez MI",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2016-12-21",
      doi: "10.1002/14651858.CD007655.pub3",
      pmid: "27997978",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6464022/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Indian Snakeroot", type: "COMMON_NAME" },
    { name: "Rauwolfia", type: "COMMON_NAME" },
    { name: "Serpentine", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Doctors throughout India used rauwolfia root for high blood pressure in the 1940s, and in the 1950s it was used around the world, including in the US and Canada. It fell out of favour when side effects, including depression and a suspected cancer link, were reported.",
      source: "lobay",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Reserpine, the main blood pressure-lowering compound from the root, is a medicine in its own right. A Cochrane review of 4 trials with 237 people found reserpine lowered the top number (systolic blood pressure) by about 8 points compared with a dummy pill. The trials were small and varied, so effects on other measures were unclear.\n\nTechnical detail: weighted mean difference in SBP −7.92 mmHg (95% CI −14.05 to −1.78).",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2015 review argued that low doses of rauwolfia, given to carefully chosen patients alongside standard medicines, can treat high blood pressure safely, and disputed the link to cancer. This is one author's view.",
      source: "lobay",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Rauwolfia and reserpine have been linked to depression, which is why the plant fell out of use. Correct dosing and screening people for depression are considered important. Use it only under a doctor's supervision.",
      source: "lobay",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "Its compound reserpine lowered systolic blood pressure by about 8 points in a Cochrane review, but it can cause depression. Don't use it without your doctor." },
  ],
});
