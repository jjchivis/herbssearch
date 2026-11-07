import { run } from "./lib/populate-herb";

// Orange mullein (Verbascum phlomoides), flower. Sources: the EMA public
// summary and EU herbal monograph on mullein flower, which cover this species
// along with V. thapsus and V. densiflorum. Family per GBIF. Not the same
// species as Mullein (V. thapsus).

run({
  name: "Orange Mullein",
  profile: {
    family: "Scrophulariaceae",
    genus: "Verbascum",
    species: "phlomoides",
    partsUsed: "The dried flowers, as a tea",
  },
  sources: {
    emaSummary: {
      title: "Mullein flower: summary for the public (EMA/269687/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/mullein-flower-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title:
        "European Union herbal monograph on Verbascum thapsus L., V. densiflorum Bertol. (V. thapsiforme Schrad) and V. phlomoides L., flos (EMA/HMPC/611537/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-verbascum-thapsus-l-v-densiflorum-bertol-v-thapsiforme-schrad-and-v-phlomoides-l-flos_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Its flowers are recognized in the European Union as a traditional herbal medicine for a sore throat with a dry cough and cold.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes mullein flowers, including those of orange mullein, as a traditional herbal medicine for relieving a sore throat that comes with a dry cough and a cold, for ages 12 and up. This is based on long-standing use. There are no clinical studies of mullein flower.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects are known. No interactions with medicines have been reported.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description: "Don't use mullein flower if you are allergic to it.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description:
        "Its safety in pregnancy and breastfeeding has not been established, so it is not recommended during pregnancy or while breastfeeding.",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Not for children under 12. See a doctor if you become short of breath, get a fever or cough up pus, or if symptoms last longer than 1 week or get worse.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Ages 12 and up: a tea made with 1.5 to 2 g of the dried flowers in 150 ml of boiling water, 3 to 4 times a day (4.5 to 8 g a day).",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional tea for a sore throat with a dry cough and cold." },
    { slug: "cough", notes: "Recognized in Europe as a traditional tea for a sore throat that comes with a dry cough." },
  ],
});
