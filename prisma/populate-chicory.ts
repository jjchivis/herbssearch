import { run } from "./lib/populate-herb";

// Chicory (Cichorium intybus), from the EMA herbal monograph on chicory root
// (2013). Family per GBIF.

run({
  name: "Chicory",
  profile: {
    family: "Asteraceae",
    genus: "Cichorium",
    species: "intybus",
    partsUsed: "The root",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Cichorium intybus L., radix",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-01-15",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-cichorium-intybus-l-radix_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Chicory Root", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes chicory root as a traditional herbal medicine for mild digestive problems, such as feeling overly full, gas and slow digestion, and for temporary loss of appetite. This is based on traditional use only, not on clinical trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Don't use chicory root if you're allergic to it or to other plants in the daisy family.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Safety in pregnancy hasn't been established, so it isn't recommended.",
      source: "ema",
    },
    {
      category: "BREASTFEEDING",
      description: "Safety while breastfeeding hasn't been established, so it isn't recommended.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Not recommended for children under 12, because there isn't enough data. See a doctor if symptoms get worse or last longer than 2 weeks.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects or drug interactions were known when the European Medicines Agency assessed it.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Recognized in Europe as a traditional remedy for mild digestive problems such as slow digestion." },
    { slug: "bloating", notes: "Recognized in Europe as a traditional remedy for feeling overly full and gas." },
    { slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional remedy for temporary loss of appetite." },
  ],
  preparations: [
    {
      slug: "tea-infusion",
      notes: "The cut root is steeped in boiling water as an herbal tea, once a day.",
      source: "ema",
    },
    { slug: "decoction", notes: "The cut root can also be simmered in water as a decoction, once a day.", source: "ema" },
  ],
});
