import { run } from "./lib/populate-herb";

// Eyebright (Euphrasia officinalis / E. rostkoviana), from a verified source:
// the EMA/HMPC public statement (2010) explaining why no EU monograph was
// established. Family per GBIF / Catalogue of Life. No clinical studies were
// found.

run({
  name: "Eyebright",
  profile: {
    family: "Orobanchaceae",
    genus: "Euphrasia",
    species: "officinalis",
    partsUsed: "The above-ground parts (herb)",
  },
  sources: {
    ema: {
      title: "Public statement on Euphrasia officinalis L. and Euphrasia rostkoviana Hayne, herba (EMA/HMPC/727465/2009)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2010-09-16",
      url: "https://www.ema.europa.eu/en/documents/public-statement/final-public-statement-euphrasia-officinalis-l-and-euphrasia-rostkoviana-hayne-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Euphrasia", type: "COMMON_NAME" },
    { name: "Euphrasia rostkoviana", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Eyebright has traditionally been made into water-based infusions and used as soaked dressings on the eyes for minor eye irritation. A nasal ointment containing eyebright has also been used for nose irritation with a cold.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency decided not to recognize eyebright as a traditional medicine, because there isn't adequate data showing it works or is harmless for these uses.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Home-made eyebright preparations put on the eyes aren't hygienic or safe, so this use can't be recommended.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "colds-and-congestion",
      notes: "A nasal ointment has traditionally been used for nose irritation with a cold, but European regulators found no adequate data.",
    },
  ],
});
