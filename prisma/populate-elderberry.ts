import { run } from "./lib/populate-herb";

// Elderberry (Sambucus nigra, European elder), from verified sources: NCCIH
// (2024) on the berries and the EU herbal monograph, Revision 1 (EMA/HMPC, 2018)
// on elder flower. Family per GBIF / Catalogue of Life.

run({
  name: "Elderberry",
  profile: {
    family: "Viburnaceae",
    genus: "Sambucus",
    species: "nigra",
    partsUsed: "The berries (cooked) and the flowers",
  },
  sources: {
    nccih: {
      title: "Elderberry: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/european-elder",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Sambucus nigra L., flos, Revision 1 (EMA/HMPC/611512/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-sambucus-nigra-l-flos-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "European Elder", type: "COMMON_NAME" },
    { name: "Black Elderberry", type: "COMMON_NAME" },
    { name: "Elder Flower", type: "COMMON_NAME" },
    { name: "Sambucus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Berries used for colds and flu; elder flower recognized in Europe as a traditional medicine for early cold symptoms." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Elderberry has been used in folk medicine for colds and flu, and is sold as a supplement for these and other upper respiratory infections.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes elder flower as a traditional herbal medicine to relieve early symptoms of a common cold, in adults and teens over 12. It is taken as a tea or liquid preparation.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Only a small number of studies have looked at elderberry for colds, flu and other upper respiratory infections. One meta-analysis found black elderberry supplements eased upper respiratory symptoms in randomized trials, but the evidence overall is preliminary. There isn't enough evidence to know whether it helps COVID-19 symptoms, and US regulators have taken action against companies making unsupported COVID-19 claims.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Raw or unripe elderberries, and other parts of the elder such as the leaves and stems, contain poisonous substances that produce cyanide. They can cause nausea, vomiting and severe diarrhea. Cooking destroys this toxin.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description: "Elder flower medicines aren't recommended for children under 12. See a doctor if symptoms last more than a week or get worse, or if you get shortness of breath, fever or colored phlegm.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Talk with your healthcare provider before using elderberry with medicines; some herbs and medicines interact in harmful ways.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Little is known about whether elderberry is safe for health purposes during pregnancy or breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Traditionally used for colds and flu; a meta-analysis found it eased upper respiratory symptoms, though evidence is preliminary." },
    { slug: "colds-and-congestion", notes: "Elder flower is recognized in Europe for early cold symptoms." },
  ],
});
