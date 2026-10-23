import { run } from "./lib/populate-herb";

// Preparations sweep, batch 2: herbs with European Medicines Agency (EMA) herbal
// monographs that the site didn't cite yet. Each preparation comes from the
// monograph's "herbal preparations" and "pharmaceutical form" sections. Flaxseed
// is left out: its monograph covers whole or crushed seeds taken with water,
// which doesn't match any preparation type.

const G = "government" as const;
const T1 = "TIER_1_GOVERNMENT" as const;
const ORG = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run(
  {
    name: "Aloe",
    sources: {
      ema0: { title: "European Union herbal monograph on Aloe barbadensis Mill. and on Aloe (various species, mainly Aloe ferox Mill. and its hybrids), folii succus siccatus", organization: ORG, publicationDate: "2016-11-22", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-aloe-barbadensis-mill-and-aloe-various-species-mainly-aloe-ferox-mill-and-its-hybrids-folii-succus-siccatus_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "This covers the dried juice (latex) of the leaf, not aloe gel. A standardized water extract of the dried juice is taken by mouth as a laxative in tablets, capsules or liquids.", source: "ema0" },
    ],
  },
  {
    name: "Chamomile",
    sources: {
      ema0: { title: "European Union herbal monograph on Matricaria recutita L., flos", organization: ORG, publicationDate: "2015-07-07", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-matricaria-recutita-l-flos-first-version_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flower heads are made into an herbal tea to drink, or steeped in hot water for steam inhalation, mouth rinses or skin washes.", source: "ema0" },
      { slug: "extract", notes: "Liquid extracts of the flowers are taken by mouth, or diluted for rinses, skin washes, steam inhalation or bath water.", source: "ema0" },
      { slug: "salve", notes: "Creams and ointments made with chamomile flower extracts are applied to the skin.", source: "ema0" },
    ],
  },
  {
    name: "Echinacea",
    sources: {
      ema0: { title: "European Union herbal monograph on Echinacea purpurea (L.) Moench, herba recens", organization: ORG, publicationDate: "2015-11-24", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-echinacea-purpurea-l-moench-herba-recens_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "Juice pressed from the fresh flowering plant, or the dried juice, is taken by mouth in liquids or tablets.", source: "ema0" },
    ],
  },
  {
    name: "Ginger",
    sources: {
      ema0: { title: "European Union herbal monograph on Zingiber officinale Roscoe, rhizoma", organization: ORG, publicationDate: "2025-05-07", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-zingiber-officinale-roscoe-rhizoma-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "The powdered root is taken by mouth in tablets or capsules.", source: "ema0" },
      { slug: "tincture", notes: "Ginger tinctures (alcohol extracts) are used in products taken by mouth.", source: "ema0" },
    ],
  },
  {
    name: "Ginseng",
    sources: {
      ema0: { title: "European Union herbal monograph on Panax ginseng C.A.Mey., radix", organization: ORG, publicationDate: "2024-05-29", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-panax-ginseng-camey-radix-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea.", source: "ema0" },
      { slug: "powder", notes: "The powdered root is taken by mouth.", source: "ema0" },
      { slug: "extract", notes: "Dry, soft and liquid extracts of the root, some standardized to ginsenosides, are taken by mouth in tablets, capsules or liquids.", source: "ema0" },
    ],
  },
  {
    name: "Lavender",
    sources: {
      ema0: { title: "Community herbal monograph on Lavandula angustifolia Miller, flos", organization: ORG, publicationDate: "2012-03-27", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-lavandula-angustifolia-p-mill-flos_en.pdf", sourceType: G, tier: T1 },
      ema1: { title: "Community herbal monograph on Lavandula angustifolia Miller, aetheroleum", organization: ORG, publicationDate: "2012-03-27", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-lavandula-angustifolia-miller-aetheroleum_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowers are made into an herbal tea.", source: "ema0" },
      { slug: "tincture", notes: "Lavender flower tinctures (alcohol extracts) are taken by mouth.", source: "ema0" },
      { slug: "essential-oil", notes: "Lavender oil, steam-distilled from the flowering tops, is used in liquids taken by mouth and as a bath additive.", source: "ema1" },
    ],
  },
  {
    name: "Lemon Balm",
    sources: {
      ema0: { title: "Community herbal monograph on Melissa officinalis L., folium", organization: ORG, publicationDate: "2013-05-14", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-melissa-officinalis-l-folium_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea.", source: "ema0" },
      { slug: "powder", notes: "The powdered leaves are taken by mouth.", source: "ema0" },
      { slug: "extract", notes: "Liquid and dried extracts of the leaves are taken by mouth.", source: "ema0" },
      { slug: "tincture", notes: "Lemon balm tinctures (alcohol extracts) are taken by mouth.", source: "ema0" },
    ],
  },
  {
    name: "Peppermint",
    sources: {
      ema0: { title: "European Union herbal monograph on Mentha x piperita L., folium", organization: ORG, publicationDate: "2020-01-15", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-mentha-x-piperita-l-folium-revision-1_en.pdf", sourceType: G, tier: T1 },
      ema1: { title: "European Union herbal monograph on Mentha x piperita L., aetheroleum", organization: ORG, publicationDate: "2020-01-15", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-mentha-x-piperita-l-aetheroleum-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves are made into an herbal tea.", source: "ema0" },
      { slug: "tincture", notes: "Peppermint leaf tinctures (alcohol extracts) are taken by mouth.", source: "ema0" },
      { slug: "essential-oil", notes: "Peppermint oil, distilled from the plant, is taken by mouth in capsules coated to dissolve in the gut rather than the stomach, or used in liquids, rubs, creams and inhalations.", source: "ema1" },
    ],
  },
  {
    name: "St. John's Wort",
    sources: {
      ema0: { title: "European Union herbal monograph on Hypericum perforatum L., herba", organization: ORG, publicationDate: "2022-11-23", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-hypericum-perforatum-l-herba-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "Dry extracts of the flowering tops are taken by mouth in tablets or capsules. Liquid extracts and juice pressed from the fresh plant are also used.", source: "ema0" },
      { slug: "tea-infusion", notes: "The dried, cut plant is made into an herbal tea, or steeped to make a liquid for the skin.", source: "ema0" },
      { slug: "tincture", notes: "St. John's wort tinctures (alcohol extracts) are taken by mouth or used on the skin.", source: "ema0" },
      { slug: "oil", notes: "St. John's wort oil, made by soaking the plant in vegetable oil, is taken by mouth or used on the skin.", source: "ema0" },
    ],
  },
  {
    name: "Tea Tree",
    sources: {
      ema0: { title: "European Union herbal monograph on Melaleuca alternifolia (Maiden and Betch) Cheel, M. linariifolia Smith, M. dissitiflora F. Mueller and/or other species of Melaleuca, aetheroleum", organization: ORG, publicationDate: "2015-11-24", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-melaleuca-alternifolia-maiden-and-betch-cheel-m-linariifolia-smith-m-dissitiflora-f-mueller-and-or-other-species-melaleuca-aetheroleum-first-version_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "essential-oil", notes: "Tea tree oil is used in liquids, creams and gels for the skin, or in liquids for the mouth.", source: "ema0" },
    ],
  },
  {
    name: "Turmeric",
    sources: {
      ema0: { title: "European Union herbal monograph on Curcuma longa L., rhizoma", organization: ORG, publicationDate: "2018-09-25", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-curcuma-longa-l-rhizoma-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "The powdered root is taken by mouth.", source: "ema0" },
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea.", source: "ema0" },
      { slug: "tincture", notes: "Turmeric tinctures (alcohol extracts) are taken by mouth.", source: "ema0" },
      { slug: "extract", notes: "Dry alcohol extracts of the root are taken by mouth in tablets or capsules.", source: "ema0" },
    ],
  },
  {
    name: "Valerian",
    sources: {
      ema0: { title: "European Union herbal monograph on Valeriana officinalis L., radix", organization: ORG, publicationDate: "2016-02-02", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-valeriana-officinalis-l-radix_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "Dry extracts of the root are taken by mouth in tablets or capsules. Liquid extracts and juice pressed from the fresh root are also used.", source: "ema0" },
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea, or added to bath water.", source: "ema0" },
      { slug: "powder", notes: "The powdered root is taken by mouth.", source: "ema0" },
    ],
  },
);
