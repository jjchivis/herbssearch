import { run } from "./lib/populate-herb";

// Mouse-ear hawkweed (Pilosella officinarum, syn. Hieracium pilosella), whole
// plant. Sources: the EMA assessment report summary for the public (2025) and
// the EU herbal monograph, revision 1. Family per GBIF.

run({
  name: "Mouse-Ear Hawkweed",
  profile: {
    family: "Asteraceae",
    genus: "Pilosella",
    species: "officinarum",
    partsUsed: "The whole plant, above and below ground, as a tea or powder",
  },
  sources: {
    emaSummary: {
      title: "Assessment report summary for the public: Mouse-ear hawkweed (EMA/HMPC/387725/2025)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2025-11-19",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/mouse-ear-hawkweed-assessment-report-summary-public-arsp_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title:
        "European Union herbal monograph on Pilosella officinarum Vall. (syn Hieracium pilosella L.), herba cum radice, revision 1 (EMA/HMPC/493453/2023)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2024-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-pilosella-officinarum-vall-syn-hieracium-pilosella-l-herba-cum-radice-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Hieracium pilosella", type: "SCIENTIFIC_SYNONYM" }],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in the European Union as a traditional herbal medicine to relieve minor urinary complaints, alongside drinking plenty of fluids.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes mouse-ear hawkweed as a traditional herbal medicine for adults, to relieve the symptoms of minor urinary tract complaints, alongside drinking plenty of fluids to pass more urine. This is based on long-standing use, not on clinical studies.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects have been reported. No interactions with medicines have been described.",
      source: "emaSummary",
    },
    {
      category: "ALLERGY",
      description:
        "Don't use it if you are allergic to mouse-ear hawkweed or other plants in the daisy family (Asteraceae).",
      source: "emaSummary",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Not for anyone under 18. Don't use it if a doctor has told you to drink less fluid. See a doctor if you get a fever, pain when urinating, cramps or blood in the urine, or if symptoms last longer than 2 weeks.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description: "Don't use it if you are pregnant or breastfeeding.",
      source: "emaSummary",
    },
    {
      category: "DOSAGE",
      description:
        "For adults: a tea made with 2 to 4 g of the dried herb in 250 ml of boiling water, 3 times a day, or 200 to 520 mg of the powdered herb 2 to 4 times a day (560 to 1,300 mg a day).",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "urinary-tract-infections", notes: "Recognized in Europe as a traditional medicine for minor urinary complaints, alongside plenty of fluids. See a doctor for fever, pain or blood in the urine." },
  ],
});
