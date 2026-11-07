import { run } from "./lib/populate-herb";

// Shepherd's purse (Capsella bursa-pastoris), aerial parts. Sources: the EMA
// public summary and Community herbal monograph. Family per GBIF.

run({
  name: "Shepherd's Purse",
  profile: {
    family: "Brassicaceae",
    genus: "Capsella",
    species: "bursa-pastoris",
    partsUsed: "The above-ground parts, as a tea or liquid extract",
  },
  sources: {
    emaSummary: {
      title: "Shepherd's purse: summary for the public (EMA/164805/2019)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2019-05-15",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/shepherds-purse-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Capsella bursa-pastoris (L.) Medikus, herba",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-07-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-capsella-bursa-pastoris-l-medikus-herba-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in the European Union as a traditional herbal medicine to reduce heavy periods in women with regular cycles.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes shepherd's purse as a traditional herbal medicine to reduce heavy menstrual bleeding in adult women with regular cycles, after a doctor has ruled out serious causes. This is based on long-standing use rather than proof from clinical trials.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The agency looked at a study in women with heavy periods that compared shepherd's purse plus pain relief with no treatment. No firm conclusion could be drawn, because the study didn't describe the shepherd's purse extract well enough.",
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
      category: "CONTRAINDICATION",
      description:
        "Heavy periods can have serious causes, so see a doctor first. Not for anyone under 18. Don't use it if you are allergic to it. See a doctor if symptoms continue or get worse.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description:
        "Its safety in pregnancy and breastfeeding has not been established, so it is not recommended during pregnancy or while breastfeeding.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "For adult women. Start 3 to 5 days before your period and continue during bleeding: a tea made with 1 to 5 g of the dried herb, 2 to 4 times a day, or 1 to 4 ml of liquid extract 3 times a day. Extracts may contain alcohol.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "menstrual-discomfort", notes: "Recognized in Europe as a traditional medicine to reduce heavy periods, after a doctor rules out serious causes." },
  ],
});
