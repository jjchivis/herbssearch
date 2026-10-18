import { run } from "./lib/populate-herb";

// Cat's Claw (Uncaria tomentosa), from NCCIH's fact sheet (November 2024).

run({
  name: "Cat's Claw",
  profile: {
    family: "Rubiaceae",
    genus: "Uncaria",
    species: "tomentosa",
    nativeRange: "The Amazon rainforest and other tropical areas of Central and South America",
    partsUsed: "The bark and root of the woody vine",
  },
  sources: {
    nccih: {
      title: "Cat's Claw: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/cats-claw",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    sheng: {
      title: "DNA repair enhancement of aqueous extracts of Uncaria tomentosa in a human volunteer study",
      author: "Sheng Y, Li L, Holmgren K, Pero RW",
      journal: "Phytomedicine",
      publicationDate: "2001-07-01",
      doi: "10.1078/0944-7113-00045",
      pmid: "11515717",
      url: "https://pubmed.ncbi.nlm.nih.gov/11515717/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cats Claw", type: "COMMON_NAME" },
    { name: "Uña de Gato", type: "REGIONAL_NAME", region: "South America" },
    { name: "Uncaria guianensis", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Indigenous peoples of the Amazon have used cat's claw for centuries to prevent illness. Today it's promoted for osteoarthritis, rheumatoid arthritis, cancer, viral infections and COVID-19. Most products sold in the US contain Uncaria tomentosa.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There's no conclusive evidence from studies in people that cat's claw helps any health condition. Many of the existing studies were poorly designed or too small.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 2001 study, 12 healthy adults were split into 3 groups: 250 mg or 350 mg a day of a water extract of cat's claw (Uncaria tomentosa) for 8 weeks, or nothing. When their blood cells were exposed to a chemical that damages DNA, the cells of people taking cat's claw had less DNA damage and repaired it better. No harmful effects showed up in symptoms or blood tests. The study was very small and didn't test whether this prevents or treats any disease.\n\nTechnical detail: C-Med-100 extract; DNA damage induced by hydrogen peroxide; p < 0.05 versus non-supplemented controls.",
      source: "sheng",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Cat's claw may stimulate the immune system, which could make autoimmune diseases worse. It's considered safe to take by mouth for up to 6 months.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Cat's claw may slow blood clotting and increase bleeding during surgery. It may interact with blood thinners, anti-platelet medicines and blood pressure medicines.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Some studies suggest cat's claw is unsafe during pregnancy. Its safety while breastfeeding is unknown.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Promoted for osteoarthritis and rheumatoid arthritis, but there's no conclusive evidence from studies in people." },
  ],
});
