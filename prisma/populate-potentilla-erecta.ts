import { run } from "./lib/populate-herb";

// Potentilla erecta (tormentil), rhizome. Sources: the EMA public summary and
// Community herbal monograph. Family per GBIF. Not the same species as
// Cinquefoil (Potentilla reptans).

run({
  name: "Potentilla Erecta",
  profile: {
    family: "Rosaceae",
    genus: "Potentilla",
    species: "erecta",
    partsUsed: "The rhizome (underground stem), as a tea, tincture or extract",
  },
  sources: {
    emaSummary: {
      title: "Tormentil: summary for the public (EMA/166412/2019)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2019-05-15",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/tormentillae-rhizoma-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Potentilla erecta (L.) Raeusch., rhizoma (EMA/HMPC/5513/2010)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2010-11-25",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-potentilla-erecta-l-raeusch-rhizoma_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Tormentil", type: "COMMON_NAME" }],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in the European Union as a traditional herbal medicine for mild diarrhea and minor inflammation inside the mouth.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes tormentil root as a traditional herbal medicine for adults, based on long-standing use rather than proof from clinical trials:\n- taken by mouth, for mild diarrhea\n- as a mouth rinse, for minor inflammation of the lining of the mouth",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies show that tannins, the main ingredients of tormentil, have an astringent (tightening) effect that reduces how much fluid passes into the intestines, and may help reduce inflammation.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "When taken for diarrhea, it can cause mild stomach complaints such as nausea and vomiting. How often this happens is not known.",
      source: "emaSummary",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Taken by mouth, it may slow how quickly other medicines are absorbed. Take it at least 1 hour before or after other medicines.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description: "Don't use tormentil if you are allergic to it.",
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
        "For adults only.\n- For diarrhea: a tea made with 1.4 to 4 g of the dried root several times a day (no more than 12 g a day), or 400 mg of dry extract 3 times a day. See a doctor if diarrhea lasts longer than 3 days, keeps coming back, or there is blood in the stool.\n- As a mouth rinse: 1.3 to 2 g of the dried root per 100 ml of water, rinsed several times a day. See a doctor if symptoms last longer than 1 week.\nTinctures may contain alcohol.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Recognized in Europe as a traditional medicine for mild diarrhea." },
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional mouth rinse for minor inflammation inside the mouth." },
  ],
});
