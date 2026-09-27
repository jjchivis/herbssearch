import { run } from "./lib/populate-herb";

// Mullein (Verbascum thapsus and related species), from verified sources: the
// EMA/HMPC public summary (2018) and EU herbal monograph on mullein flower.
// Family per GBIF / Catalogue of Life.

run({
  name: "Mullein",
  profile: {
    family: "Scrophulariaceae",
    genus: "Verbascum",
    species: "thapsus",
    partsUsed: "The flowers",
  },
  sources: {
    emaSummary: {
      title: "Mullein flower (Verbascum thapsus L., V. densiflorum Bertol., V. phlomoides L., flos): summary of the HMPC conclusions (EMA/269687/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/mullein-flower-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Verbascum thapsus L., V. densiflorum Bertol. and V. phlomoides L., flos",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-verbascum-thapsus-l-v-densiflorum-bertol-v-thapsiforme-schrad-and-v-phlomoides-l-flos_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Mullein Flower", type: "COMMON_NAME" },
    { name: "Verbascum densiflorum", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for sore throat with a dry cough and cold." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes mullein flower as a traditional herbal medicine to relieve a sore throat that comes with a dry cough and a cold. It is taken as a tea, by adults and teens over 12.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "There are no clinical studies of mullein flower medicines.",
      source: "emaSummary",
    },
  ],
  safety: [
    { category: "ADVERSE_EFFECT", description: "No side effects have been reported.", source: "emaSummary" },
    {
      category: "DOSAGE",
      description:
        "Not recommended for children under 12. See a doctor if symptoms get worse or last more than 1 week, or if you get shortness of breath, fever or colored phlegm.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so it isn't recommended at these times.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional medicine for sore throat with a dry cough and cold." },
    { slug: "cough", notes: "Recognized in Europe for the sore throat that comes with a dry cough; no clinical studies exist." },
  ],
});
