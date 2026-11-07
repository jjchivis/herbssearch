import { run } from "./lib/populate-herb";

// Malva sylvestris (common mallow), flower and leaf. Sources: the EMA public
// summaries and EU herbal monographs on mallow flower and mallow leaf.
// Family per GBIF.

run({
  name: "Malva Sylvestris",
  profile: {
    family: "Malvaceae",
    genus: "Malva",
    species: "sylvestris",
    partsUsed: "The flowers and leaves, as a tea",
  },
  sources: {
    emaFlowerSummary: {
      title: "Mallow flower: summary for the public (EMA/836527/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/malva-sylvestris-l-flos-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaLeafSummary: {
      title: "Mallow leaf: summary for the public (EMA/834778/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/mallow-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaFlowerMonograph: {
      title: "European Union herbal monograph on Malva sylvestris L., flos (EMA/HMPC/749511/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-malva-sylvestris-l-flos-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaLeafMonograph: {
      title: "European Union herbal monograph on Malva sylvestris L. and/or Malva neglecta Wallr., folium (EMA/HMPC/749510/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-malva-sylvestris-l-andor-malva-neglecta-wallr-folium-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Mallow", type: "COMMON_NAME" },
    { name: "Mallow Flower", type: "COMMON_NAME" },
    { name: "Mallow Leaf", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Its flowers and leaves are recognized in the European Union as a traditional soothing medicine for mouth and throat irritation with dry cough, and mild stomach discomfort.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes mallow flowers and leaves as a traditional soothing herbal medicine for ages 12 and up, based on long-standing use:\n- for irritation of the mouth or throat and the dry cough that comes with it\n- for mild stomach and gut discomfort\nThere are no studies of mallow in patients.",
      source: "emaFlowerSummary",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab studies have shown that mallow flower preparations reduce coughing and inflammation, and that mallow leaf reduces inflammation.",
      source: "emaFlowerSummary",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects are known. No interactions with medicines have been reported.",
      source: "emaFlowerMonograph",
    },
    {
      category: "ALLERGY",
      description: "Don't use mallow if you are allergic to it.",
      source: "emaFlowerMonograph",
    },
    {
      category: "PREGNANCY",
      description:
        "Its safety in pregnancy and breastfeeding has not been established, so it is not recommended during pregnancy or while breastfeeding.",
      source: "emaFlowerMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Not for children under 12. For throat symptoms, see a doctor if you become short of breath, get a fever or cough up pus, or if symptoms last longer than 1 week. For stomach discomfort, see a doctor if it lasts longer than 2 weeks.",
      source: "emaFlowerMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Ages 12 and up:\n- Flowers: 1 to 2 g in 250 ml of boiling water as a tea, 2 to 3 times a day (about 5 g a day).\n- Leaves: 1.8 g in 150 ml of boiling water as a tea, 3 times a day (5.4 g a day).",
      source: "emaLeafMonograph",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional soothing tea for mouth and throat irritation." },
    { slug: "cough", notes: "Recognized in Europe as a traditional soothing tea for the dry cough that comes with throat irritation." },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional soothing tea for mild stomach and gut discomfort." },
  ],
});
