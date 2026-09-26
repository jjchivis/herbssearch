import { run } from "./lib/populate-herb";

// Linden (Tilia cordata, lime flower), from verified sources: the EU
// Community herbal monograph (EMA/HMPC, 2012) and the EMA/HMPC assessment
// report (draft, first version, 2011), which records the traditional heart and
// blood pressure uses and the native range. Family per GBIF / Catalogue of
// Life.

run({
  name: "Linden",
  profile: {
    family: "Malvaceae",
    genus: "Tilia",
    species: "cordata",
    nativeRange: "Native throughout Europe, as far north as about 65° latitude; also cultivated in Europe and North America",
    partsUsed: "The dried flowers",
  },
  sources: {
    emaMonograph: {
      title: "Community herbal monograph on Tilia cordata Miller, Tilia platyphyllos Scop., Tilia x vulgaris Heyne or their mixtures, flos (EMA/HMPC/337066/2011)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2012-05-22",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-tilia-cordata-miller-tilia-platyphyllos-scop-tilia-x-vulgaris-heyne_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaReport: {
      title: "Assessment report on Tilia cordata Miller, Tilia platyphyllos Scop., Tilia x vulgaris Heyne or their mixtures, flos (draft, EMA/HMPC/337067/2011)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-09-13",
      url: "https://www.ema.europa.eu/en/documents/herbal-report/draft-assessment-report-tilia-cordata-miller-tilia-platyphyllos-scop-tilia-x-vulgaris-heyne-or-their-mixtures-flos-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Lime Flower", type: "COMMON_NAME" },
    { name: "Lime Tree", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency as a traditional herbal medicine for cold symptoms and mild mental stress. Traditionally drunk as a tea for anxiety-related indigestion, heart palpitations and vomiting.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes lime flower as a traditional herbal medicine, based only on long-standing use, for:\n- Relief of common cold symptoms\n- Relief of mild symptoms of mental stress",
      source: "emaMonograph",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Herbal references describe lime flower as traditionally used for migraine, feverish colds, and high blood pressure linked to hardened arteries and nervous tension. It has also been drunk as a tea for heart palpitations, anxiety-related indigestion and vomiting, and has been reported to lower high blood pressure caused by stress.\n\nTechnical detail: traditionally described as sedative, antispasmodic, diaphoretic, hypotensive and diuretic; \"arteriosclerotic hypertension\" (Barnes et al. 2007); Blumenthal et al. 1998, as cited in the EMA assessment report.",
      source: "emaReport",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, lime flowers strongly blocked enzymes that break down starch into sugar. Researchers suggested this may be relevant to preventing high blood sugar and high blood pressure in type 2 diabetes.\n\nTechnical detail: α-glucosidase and α-amylase inhibition (Ranilla et al. 2010, as cited in the EMA assessment report).",
      source: "emaReport",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Some herbal references advise people with an existing heart condition to avoid lime flower, because heavy use may affect the heart. The scientific basis for this warning is not known.",
      source: "emaReport",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use lime flower if you're allergic to it. For stress, it's not recommended for children under 12; for colds, not for children under 4. See a doctor if cold symptoms last more than a week or get worse, or if you become short of breath or develop a high fever or pus-like mucus.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description:
        "Allergy to lime tree pollen is one of the more common pollen allergies. Some allergic reactions to lime flower have been reported; how often is not known.",
      source: "emaReport",
    },
    {
      category: "DRUG_INTERACTION",
      description: "No interactions with medicines have been reported.",
      source: "emaMonograph",
    },
    { category: "ADVERSE_EFFECT", description: "No side effects are known.", source: "emaMonograph" },
    {
      category: "PREGNANCY",
      description: "Lime flower is not recommended during pregnancy or breastfeeding, because its safety hasn't been established.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "European guidance for adults and teens: as a tea, 1.5 g of dried flowers in 150 ml of boiling water, 2–4 times a day (3–6 g a day).",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "Traditionally used for high blood pressure linked to nervous tension. This use hasn't been confirmed by research.",
    },
    { slug: "heart-palpitations", notes: "Traditionally drunk as a tea for heart palpitations." },
    { slug: "stress", notes: "Recognized in Europe as a traditional remedy for mild symptoms of mental stress." },
  ],
});
