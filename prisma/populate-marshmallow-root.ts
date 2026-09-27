import { run } from "./lib/populate-herb";

// Marshmallow root (Althaea officinalis), from verified sources: the EMA/HMPC
// public summary (2016) and EU herbal monograph. Family per GBIF / Catalogue of
// Life.

run({
  name: "Marshmallow Root",
  profile: {
    family: "Malvaceae",
    genus: "Althaea",
    species: "officinalis",
    partsUsed: "The root",
  },
  sources: {
    emaSummary: {
      title: "Marshmallow root (Althaea officinalis L., radix): summary of the HMPC conclusions (EMA/570566/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-11-22",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/marshmallow-root-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Althaea officinalis L., radix",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-11-04",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-althaea-officinalis-l-radix_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Marshmallow", type: "COMMON_NAME" },
    { name: "Althaea", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for mouth and throat irritation with dry cough, and mild stomach and gut discomfort." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes marshmallow root as a traditional herbal medicine for:\n- Mouth or throat irritation and the dry cough that goes with it (from age 3)\n- Mild stomach and gut discomfort (from age 12)\nThe root is usually soaked in cold water to make a drink, or taken as a syrup or extract.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Two studies of marshmallow root syrup in about 900 children with throat irritation and dry cough found coughing improved, but there was no comparison group. In 63 adults with dry cough, marshmallow root drops reduced cough while placebo didn't. The studies had limitations, so firm conclusions can't be drawn.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description: "Marshmallow root may slow the absorption of other medicines. Take it at least 30 to 60 minutes before or after other medicines.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Not recommended for children under 3. See a doctor if throat symptoms last more than a week or stomach symptoms more than 2 weeks, or if you get shortness of breath, fever or colored phlegm.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so it isn't recommended at these times.",
      source: "emaMonograph",
    },
    { category: "ADVERSE_EFFECT", description: "No side effects are known.", source: "emaMonograph" },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for mild stomach and gut discomfort." },
    { slug: "sore-throat", notes: "Recognized in Europe for throat irritation with dry cough." },
    { slug: "cough", notes: "Recognized in Europe for dry cough; small studies suggest it may reduce coughing." },
  ],
});
