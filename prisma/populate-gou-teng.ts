import { run } from "./lib/populate-herb";

// Gambir Hook Vine / Gou Teng (Uncaria rhynchophylla), from a 2026
// ethnopharmacological review (Liu et al.).

run({
  name: "Gambir Hook Vine",
  profile: {
    family: "Rubiaceae",
    genus: "Uncaria",
    species: "rhynchophylla",
    partsUsed: "The hooked stems (hooks), dried and added to decoctions",
  },
  sources: {
    liu: {
      title: "Uncaria rhynchophylla: an ethnopharmacological review integrating traditional Chinese medicine uses with phytochemical and pharmacological evidence",
      author: "Liu T, Ren W, Geng X, Liu C",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-03-05",
      doi: "10.3389/fphar.2026.1723499",
      pmid: "41868131",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12999810/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Gou Teng", type: "TRADITIONAL_NAME" },
    { name: "Gouteng", type: "TRADITIONAL_NAME" },
    { name: "Uncaria", type: "COMMON_NAME" },
    { name: "Uncariae Ramulus cum Uncis", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called gou teng; used for over 1,500 years to \"extinguish wind\" and \"calm liver yang\": for convulsions, tremors, high blood pressure, headache and dizziness." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Gou teng is a climbing shrub that has been used in Chinese medicine for over 1,500 years, and China still uses over 5,000 tons a year. It's used to \"extinguish wind and stop spasms\" and to \"calm liver yang\", mainly for:\n- Convulsions in children, epilepsy and tremors\n- High blood pressure, with headache, dizziness and ringing in the ears\nThe hooks are traditionally added to a boiling decoction only for the last 5 to 10 minutes, because long boiling breaks down its main compounds.",
      source: "liu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its alkaloids (such as rhynchophylline) protected nerve cells, lowered blood pressure by relaxing blood vessels, and may help reduce inflammation.",
      source: "liu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Clinical studies are limited to small studies in Asia. The reviewers say larger, standardised trials are needed to show whether it works and is safe.",
      source: "liu",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description: "No toxicity has been reported at traditional doses of 3 to 12 g a day, but too much may cause dizziness or drowsiness.",
      source: "liu",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A traditional Chinese herb for high blood pressure with headache and dizziness; lowered blood pressure in animal studies. Clinical evidence is limited." },
    { slug: "headache", notes: "Traditionally used for headache and dizziness linked to high blood pressure. Not well tested in trials." },
  ],
});
