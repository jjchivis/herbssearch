import { run } from "./lib/populate-herb";

// Horehound (Marrubium vulgare, white horehound), from verified sources: the
// EMA/HMPC public summary (2013) and community herbal monograph. Family per
// GBIF / Catalogue of Life.

run({
  name: "Horehound",
  profile: {
    family: "Lamiaceae",
    genus: "Marrubium",
    species: "vulgare",
    partsUsed: "The above-ground parts (herb)",
  },
  sources: {
    emaSummary: {
      title: "White horehound (Marrubium vulgare L., herba): summary of the HMPC conclusions (EMA/HMPC/446032/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2014-10-10",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/white-horehound-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Marrubium vulgare L., herba (EMA/HMPC/604271/2012)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-08-01",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-marrubium-vulgare-l-herba-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "White Horehound", type: "COMMON_NAME" },
    { name: "Marrubium", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for cough with a cold, indigestion and poor appetite." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes white horehound as a traditional herbal medicine for adults and teens over 12:\n- To help bring up phlegm with a cough from a cold\n- For mild indigestion, such as bloating and gas\n- For short-term loss of appetite",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Its bitter compounds and essential oils may stimulate appetite and the secretions lining the airways. Lab studies suggest several effects that could plausibly help mild indigestion.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use horehound if you have liver disease, a blocked or inflamed bile duct, a bowel blockage, or an allergy to mint-family plants. Ask a doctor first if you have a stomach ulcer, gallstones or other bile problems.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Not recommended for children under 12. See a healthcare practitioner if a cough lasts more than a week, or indigestion or poor appetite lasts more than 2 weeks.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so it isn't recommended at these times.",
      source: "emaMonograph",
    },
    { category: "ADVERSE_EFFECT", description: "No side effects have been reported.", source: "emaSummary" },
  ],
  symptoms: [
    { slug: "cough", notes: "Recognized in Europe as a traditional medicine to help bring up phlegm with a cough from a cold." },
    { slug: "chest-congestion", notes: "Recognized in Europe to help bring up phlegm." },
    { slug: "indigestion", notes: "Recognized in Europe for mild indigestion such as bloating and gas." },
  ],
});
