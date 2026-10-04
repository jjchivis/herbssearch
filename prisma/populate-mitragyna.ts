import { run } from "./lib/populate-herb";

// Mitragyna (Mitragyna speciosa, kratom), from the National Institute on Drug
// Abuse's research topic page on kratom (March 2026).

run({
  name: "Mitragyna",
  profile: {
    family: "Rubiaceae",
    genus: "Mitragyna",
    species: "speciosa",
    nativeRange: "Southeast Asia",
    partsUsed: "The leaves, as capsules, powder, tea or liquid extracts",
  },
  sources: {
    nida: {
      title: "Kratom",
      organization: "National Institute on Drug Abuse (NIH)",
      publicationDate: "2026-03-11",
      url: "https://nida.nih.gov/research-topics/kratom",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Kratom", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Kratom is a tree native to Southeast Asia. Products made from its leaves are sold as capsules, powders, teas and liquid extracts. People report using it for pain, opioid withdrawal and mental health problems. In 2021, about 0.6% of Americans aged 12 and over said they'd used it in the past year.",
      source: "nida",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Kratom's main compounds act on the same brain receptors as opioids, but produce only part of an opioid's effect. At low doses it acts like a stimulant, raising energy, alertness and heart rate. At higher doses it acts more like an opioid, causing relaxation, drowsiness, pain relief and confusion.\n\nTechnical detail: mitragynine and 7-hydroxymitragynine are partial agonists at mu-opioid receptors.",
      source: "nida",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "The National Institute on Drug Abuse is funding research into whether kratom could help treat any conditions. It hasn't been approved for any medical use.",
      source: "nida",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Common side effects include nausea, constipation and dizziness. Rarer but serious effects include seizures, high blood pressure, liver problems and psychiatric symptoms. People can become dependent on kratom and have withdrawal symptoms, though this is still being studied. A small number of deaths have been linked to kratom, mostly involving other drugs or contaminants.",
      source: "nida",
    },
    {
      category: "CONTAMINATION",
      description: "Kratom products may contain heavy metals and harmful bacteria. The FDA has warned people not to use kratom.",
      source: "nida",
    },
  ],
});
