import { run } from "./lib/populate-herb";

// Great Yellow Gentian (Gentiana lutea), from the EMA/HMPC public summary (2019)
// and the European Union herbal monograph on gentian root (Revision 1).
// Common name "yellow gentian" per USDA PLANTS; family per GBIF.

run({
  name: "Great Yellow Gentian",
  profile: { family: "Gentianaceae", genus: "Gentiana", species: "lutea", partsUsed: "The root" },
  sources: {
    emaSummary: {
      title: "Gentian root (Gentiana lutea L., radix): summary of the HMPC conclusions (EMA/836995/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2019-01-16",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/gentian-root-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Gentiana lutea L., radix, Revision 1 (EMA/HMPC/607861/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/european-herbal-monograph-gentiana-lutea-l-radix-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Yellow Gentian", type: "COMMON_NAME" },
    { name: "Gentian Root", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for loss of appetite and indigestion." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes gentian root as a traditional herbal medicine for adults:\n- Temporary loss of appetite\n- Mild stomach and gut complaints, such as indigestion\nIt is taken as a tea, extract or tincture, before meals.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description: "Gentian root medicines are for adults only. See a doctor if symptoms get worse or last longer than 2 weeks.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been studied.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional medicine for temporary loss of appetite." },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for mild indigestion." },
  ],
});
