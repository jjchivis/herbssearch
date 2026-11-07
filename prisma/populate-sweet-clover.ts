import { run } from "./lib/populate-herb";

// Sweet clover / melilot (Melilotus officinalis), above-ground parts. Sources:
// the EMA public summary and EU herbal monograph. Family per GBIF.

run({
  name: "Sweet Clover",
  profile: {
    family: "Fabaceae",
    genus: "Melilotus",
    species: "officinalis",
    partsUsed: "The above-ground parts, as a tea, powder or skin patch",
  },
  sources: {
    emaSummary: {
      title: "Melilot: summary for the public (EMA/795143/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-01-30",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/melilot-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Melilotus officinalis (L.) Lam., herba (EMA/HMPC/44166/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-11-21",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-melilotus-officinalis-l-lam-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Melilot", type: "COMMON_NAME" }],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized in the European Union as a traditional herbal medicine for heavy, uncomfortable legs from minor circulation problems, and on the skin for minor inflammation.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes melilot as a traditional herbal medicine for adults, based on long-standing use rather than proof from clinical trials:\n- taken by mouth, to relieve discomfort and heaviness in the legs caused by minor blood circulation problems\n- applied to the skin, for minor skin inflammation",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab studies have shown that melilot may help reduce inflammation.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies in people with minor circulation problems hint that melilot may ease discomfort and heaviness in the legs. But no firm conclusion could be drawn, because melilot often wasn't compared with any other treatment and the studies didn't measure results objectively. There are no studies on skin inflammation.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Taken by mouth, it can cause stomach and gut complaints. On the skin, allergic reactions have been reported. How often these happen is not known. No interactions with medicines have been reported.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description: "Don't use melilot if you are allergic to it.",
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
        "See a doctor if you get signs of an inflamed vein, hardened skin or sudden swelling of one or both legs, or if you have heart or kidney failure. When using it on the skin, see a doctor if the inflammation gets worse or there are signs of infection.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "For adults only.\n- For leg symptoms: a tea made with 1 to 1.2 g of the dried herb in boiling water, twice a day, or 250 mg of the powdered herb 3 times a day. See a doctor if symptoms last longer than 2 weeks.\n- For the skin: a patch with 3 g of liquid extract on the affected area, up to two patches a day. See a doctor if symptoms last longer than 1 week.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "poor-circulation",
      notes: "Recognized in Europe as a traditional medicine for heavy, uncomfortable legs from minor circulation problems.",
    },
    {
      slug: "skin-irritation",
      notes: "Recognized in Europe as a traditional skin preparation for minor skin inflammation.",
    },
  ],
});
