import { run } from "./lib/populate-herb";

// Iceland moss (Cetraria islandica, a lichen), from the EMA/HMPC public summary
// (EMA/812331/2016) and the USDA Forest Service FEIS species review (Matthews 1993).
// Family per Catalogue of Life.

run({
  name: "Iceland Moss",
  profile: {
    family: "Parmeliaceae",
    genus: "Cetraria",
    species: "islandica",
    nativeRange: "Northern regions; in North America from Alaska and Canada south to the Pacific Northwest, the Rocky Mountains, the Great Lakes, New England and the Appalachians",
    partsUsed: "The whole dried lichen, as a tea, extract, or lozenge",
  },
  sources: {
    ema: {
      title: "Iceland moss (Cetraria islandica (L.) Acharius s.l., thallus): summary for the public (EMA/812331/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-03-09",
      url: "https://www.ema.europa.eu/en/medicines/herbal/lichen-islandicus",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    feis: {
      title: "Cetraria islandica, island cetraria lichen. Fire Effects Information System",
      author: "Matthews RF",
      organization: "U.S. Department of Agriculture, Forest Service, Rocky Mountain Research Station",
      publicationDate: "1993-06-01",
      doi: "10.2737/feis-species-review-cetisl",
      url: "https://research.fs.usda.gov/feis/species-reviews/cetisl",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Cetraria islandica", type: "COMMON_NAME" },
    { name: "Lichen Islandicus", type: "TRADITIONAL_NAME" },
    { name: "Iceland Lichen", type: "COMMON_NAME" },
    { name: "Island Cetraria Lichen", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for mouth and throat irritation, dry cough and loss of appetite." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Iceland moss isn't a true moss but a lichen. Based on long-standing use, the European Medicines Agency recognizes it as a traditional herbal medicine:\n- To soothe mouth and throat irritation and the dry cough that comes with it (adults and children over 6)\n- For temporary loss of appetite (adults only); its bitter-tasting lichen acids make this plausible\nThis rests on at least 30 years of safe use, not on proof from clinical trials.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Iceland moss is one of the few lichens people eat. In northern Europe, the dried powder is boiled into a jelly for soups, and it's also added to breads and cereals. It has been used in the past for:\n- Coughs\n- Tuberculosis\n- Fevers\n- Scurvy\nIt has traditionally held an important place in Chinese medicine, and has been used as a source of antibiotics. It's also used to tan leather and to make a brown dye. It's harvested commercially in Iceland and Sweden; it grows only about 0.5 cm a year.",
      source: "feis",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small studies in people with inflammation of the mouth and throat suggested Iceland moss might improve symptoms. But few people took part, and it wasn't compared with a dummy treatment, so the results aren't reliable.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "Lichens, including Iceland moss, absorb radioactive fallout from the air.",
      source: "feis",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "When the European Medicines Agency assessed Iceland moss medicines, no side effects had been reported.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "For appetite loss it's for adults only; to soothe the throat it's for adults and children over 6. See a doctor if symptoms last longer than a week or get worse.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional medicine to soothe mouth and throat irritation." },
    { slug: "cough", notes: "Recognized in Europe as a traditional medicine for the dry cough that comes with throat irritation." },
    { slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional medicine for temporary loss of appetite." },
  ],
});
