import { run } from "./lib/populate-herb";

// Eucalyptus (Eucalyptus globulus leaf), from verified sources: the EMA/HMPC
// public summary and community herbal monograph on eucalyptus leaf. Family per
// GBIF / Catalogue of Life. The oil is not covered here.

run({
  name: "Eucalyptus",
  profile: {
    family: "Myrtaceae",
    genus: "Eucalyptus",
    species: "globulus",
    partsUsed: "The leaves",
  },
  sources: {
    emaSummary: {
      title: "Eucalyptus leaf (Eucalyptus globulus Labill., folium): summary of the HMPC conclusions (EMA/HMPC/300235/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2014-06-16",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/eucalyptus-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Eucalyptus globulus Labill., folium (EMA/HMPC/892618/2011)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-04-19",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-eucalyptus-globulus-labill-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Eucalyptus Leaf", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "1,8-Cineole (Eucalyptol)", slug: "1-8-cineole", type: "essential oil compound" }],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for cough with a cold." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes eucalyptus leaf as a traditional herbal medicine to relieve cough with a cold. It is taken as a tea or breathed in with steam from hot water.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Lab tests and studies in patients looked at 1,8-cineole (eucalyptol), a compound in eucalyptus leaf. They suggest it might have an effect in airway diseases, but the leaf itself hasn't been proven in trials.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Never use eucalyptus leaf in children under 30 months (2½ years): products containing cineole, like other essential oils, can cause a sudden tightening of the vocal cords (laryngospasm).",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Leaf teas and inhalations aren't recommended under 12, and tinctures are for adults only because of their alcohol. See a doctor if symptoms last more than a week, or if you get shortness of breath, fever or colored phlegm.",
      source: "emaMonograph",
    },
    { category: "ADVERSE_EFFECT", description: "No side effects have been reported when used as directed.", source: "emaSummary" },
  ],
  symptoms: [
    { slug: "cough", notes: "Recognized in Europe as a traditional medicine for cough with a cold." },
    { slug: "colds-and-congestion", notes: "Used as a tea or steam inhalation for cough with a cold. Never use it in children under 2½." },
  ],
});
