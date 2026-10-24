import { run } from "./lib/populate-herb";

// Ajos sacha (Mansoa alliacea), from a 2025 review of Ecuador's herbal
// pharmacopoeia project (Llivisaca-Contreras et al.) and a mouse study of pain
// (Hamann et al. 2018). No human studies or safety sources were found. Family
// per GBIF.

run({
  name: "Ajos Sacha",
  profile: {
    family: "Bignoniaceae",
    genus: "Mansoa",
    species: "alliacea",
    partsUsed: "The root, stem, leaves and flowers",
  },
  sources: {
    llivisaca: {
      title: "The herbal pharmacopoeia of Ecuador: a national model for integrating traditional knowledge and biodiscovery",
      author: "Llivisaca-Contreras S, Naranjo-Morán J, Bastidas-Gálvez M, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-10-30",
      doi: "10.3389/fphar.2025.1662980",
      pmid: "41244834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12611923/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hamann: {
      title: "Mansoa alliacea extract presents antinociceptive effect in a chronic inflammatory pain model in mice through opioid mechanisms",
      author: "Hamann FR, Brusco I, de Campos Severo G, et al.",
      journal: "Neurochemistry International",
      publicationDate: "2018-11-27",
      doi: "10.1016/j.neuint.2018.11.017",
      pmid: "30496767",
      url: "https://pubmed.ncbi.nlm.nih.gov/30496767/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ajo de Monte", type: "REGIONAL_NAME" },
    { name: "Sacha Ajo", type: "REGIONAL_NAME" },
    { name: "Cipó-alho", type: "REGIONAL_NAME" },
    { name: "Bejuco de Ajo", type: "REGIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ecuador, ajos sacha has traditionally been used for headache, stomach pain, joint and muscle pain, fever, cough, colds, infections, tiredness, anemia, nausea and constipation, as a purgative, for blood pressure and as an insect repellent. It was one of 14 plants chosen for Ecuador's national herbal pharmacopoeia project.",
      source: "llivisaca",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies suggest antioxidant, antimicrobial, antifungal and antiparasitic effects. So far its effects have only been checked in the lab, not in people.",
      source: "llivisaca",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice with long-lasting inflammatory pain, an extract of the plant reduced pain sensitivity, apparently through the body's opioid receptors, but didn't reduce swelling. It's popularly used for pain.",
      source: "hamann",
    },
  ],
});
