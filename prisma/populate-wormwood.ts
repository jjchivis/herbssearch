import { run } from "./lib/populate-herb";

// Wormwood (Artemisia absinthium), from verified sources: the EMA/HMPC public
// summary (2017) and EU herbal monograph on wormwood herb. Family per GBIF /
// Catalogue of Life.

run({
  name: "Wormwood",
  profile: {
    family: "Asteraceae",
    genus: "Artemisia",
    species: "absinthium",
    partsUsed: "The above-ground parts (herb)",
  },
  sources: {
    emaSummary: {
      title: "Wormwood herb (Artemisia absinthium L., herba): summary of the HMPC conclusions (EMA/366468/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-07-18",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/wormwood-herb-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Artemisia absinthium L., herba",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-07-18",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-artemisia-absinthium-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for loss of appetite and mild stomach and gut complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes wormwood herb as a traditional herbal medicine for adults:\n- Temporary loss of appetite\n- Mild heartburn and stomach and gut complaints\nIt is taken as a tea, powder, juice or tincture.",
      source: "emaSummary",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, wormwood preparations protected against stomach ulcers. Its bitter compounds may stimulate the gut, which makes its use for poor appetite plausible. There are no studies in patients with these conditions.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use wormwood if you have liver disease, a blocked or inflamed bile duct, or an allergy to wormwood or other daisy-family plants. Ask a doctor first if you have gallstones or other bile problems.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description: "Wormwood medicines are for adults only. See a doctor if symptoms get worse or last longer than 2 weeks.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description: "There's little or no data on use during pregnancy and breastfeeding, so it isn't recommended at these times.",
      source: "emaMonograph",
    },
    { category: "ADVERSE_EFFECT", description: "No side effects have been reported.", source: "emaSummary" },
  ],
  symptoms: [
    { slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional medicine for temporary loss of appetite." },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for mild heartburn and stomach complaints." },
  ],
});
