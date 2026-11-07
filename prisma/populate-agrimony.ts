import { run } from "./lib/populate-herb";

// Agrimony (Agrimonia eupatoria), flowering tops. Sources: the EMA public
// summary and EU herbal monograph. The EMA noted there are no clinical studies.
// Family per GBIF.

run({
  name: "Agrimony",
  profile: {
    family: "Rosaceae",
    genus: "Agrimonia",
    species: "eupatoria",
    partsUsed: "The flowering tops, as a tea, gargle, tincture or skin wash",
  },
  sources: {
    emaSummary: {
      title: "Agrimony: summary for the public (EMA/HMPC/332849/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-07-10",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/agrimony-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Agrimonia eupatoria L., herba (EMA/HMPC/680597/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-01-28",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-agrimonia-eupatoria-l-herba-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized in the European Union as a traditional herbal medicine for mild diarrhea, as a gargle for mild mouth and throat inflammation, and on the skin for minor inflammation and small wounds.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes agrimony as a traditional herbal medicine for adults and children over 12, based on well-documented long-standing use:\n- taken by mouth as a tea or liquid, for mild diarrhea\n- as a gargle, for mild inflammation of the mouth and throat\n- on the skin, as a compress or bath, for minor inflammation and small, shallow wounds\nThere are no clinical studies of agrimony.",
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
      description: "Don't use agrimony if you are allergic to it.",
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
        "Not for children under 12. For diarrhea, see a doctor if it keeps coming back or there is blood in the stool. Tinctures and liquid extracts may contain alcohol.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "For ages 12 and up.\n- For diarrhea: a tea made with 1.5 to 4 g of the dried herb in up to 250 ml of boiling water, 2 to 3 times a day. See a doctor if diarrhea lasts longer than 3 days.\n- As a gargle: 1.5 g of the dried herb in 150 ml of boiling water, 2 to 4 times a day.\n- On the skin: a strong tea (3 to 10 g in up to 250 ml of water) used on a compress, or in a bath for up to 30 minutes.\nFor mouth, throat or skin use, see a doctor if symptoms last longer than 1 week or get worse.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Recognized in Europe as a traditional medicine for mild diarrhea; no clinical studies." },
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional gargle for mild mouth and throat inflammation." },
    { slug: "wounds-and-burns", notes: "Recognized in Europe as a traditional skin preparation for small, shallow wounds." },
    { slug: "skin-irritation", notes: "Recognized in Europe as a traditional skin preparation for minor skin inflammation." },
  ],
});
