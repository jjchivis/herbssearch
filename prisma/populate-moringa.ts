import { run } from "./lib/populate-herb";

// Moringa (Moringa oleifera), from verified sources: a review of its use in
// chronic disease (Villegas-Vazquez et al. 2025), a meta-analysis of animal
// studies on stomach ulcers (Akiode et al. 2026) and a meta-analysis of trials
// on blood pressure and weight (Samarin et al. 2026). Family per GBIF /
// Catalogue of Life. No source covering pregnancy, breastfeeding or medicine
// interactions was used, so none is stated.

run({
  name: "Moringa",
  profile: {
    family: "Moringaceae",
    genus: "Moringa",
    species: "oleifera",
    partsUsed: "The leaves, seeds and pods",
  },
  sources: {
    villegas: {
      title: "Unveiling the Miracle Tree: Therapeutic Potential of Moringa oleifera in Chronic Disease Management and Beyond",
      author: "Villegas-Vazquez EY, Gómez-Cansino R, Marcelino-Pérez G, Jiménez-López D, Quintas-Granados LI",
      journal: "Biomedicines",
      organization: "Biomedicines",
      publicationDate: "2025-03-05",
      doi: "10.3390/biomedicines13030634",
      pmid: "40149610",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11939887/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akiode: {
      title: "Preclinical evidence of the therapeutic effect of Moringa oleifera in peptic ulcer disease: a systematic review and meta-analysis",
      author: "Akiode SO, Adeniran AG, Akano OP, et al.",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2026-03-20",
      doi: "10.3389/fphar.2026.1689789",
      pmid: "41939826",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13047084/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    samarin: {
      title: "The Effect of Moringa oleifera on Body Weight and Blood Pressure: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      author: "Samarin MM, Sheikhhossein F, Khalilkhaneh AH, et al.",
      journal: "Food Science & Nutrition",
      organization: "Food Science & Nutrition",
      publicationDate: "2026-05-22",
      doi: "10.1002/fsn3.71899",
      pmid: "42254443",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13238855/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Miracle Tree", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Moringa is used as food, especially in low- and middle-income countries, to fight malnutrition. In traditional medicine it has been used for many conditions, including sore throat, intestinal worms, diabetes and supporting breast milk.",
      source: "villegas",
    },
    {
      category: "TRADITIONAL",
      summary: "Moringa has traditionally been used for stomach and gut disorders.",
      source: "akiode",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A review of 11 animal studies found moringa extracts consistently protected the stomach and helped ulcers heal, though not better than standard ulcer medicines. There are no clinical trials in people for ulcers. In animals, moringa seed extract also reduced the severity of colitis.",
      source: "akiode",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of 8 randomized trials found moringa lowered blood pressure (by about 6 points on the top number and 7 on the bottom), but didn't change body weight.\n\nTechnical detail: SBP WMD −6.00 mm Hg, DBP WMD −7.32 mm Hg (p < 0.001); larger effect with 5 to 10 g/day for more than 4 weeks.",
      source: "samarin",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "In healthy volunteers, moringa showed no toxic effects at the doses studied. Large clinical trials are still needed to confirm its safety, effects and dosing.",
      source: "villegas",
    },
  ],
  symptoms: [
    { slug: "stomach-ulcers", notes: "Helped stomach ulcers heal in animal studies; there are no trials in people." },
    { slug: "high-blood-pressure", notes: "A review of 8 trials found it lowered blood pressure modestly." },
  ],
});
