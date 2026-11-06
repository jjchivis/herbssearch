import { run } from "./lib/populate-herb";

// Ephedra Distachya (Ephedra distachya, sea grape or joint pine), from the FDA rule
// banning ephedrine-alkaloid supplements (21 CFR 119.1), a 2015 study of ephedrine
// levels in Ephedra species (Ibragic and Sofić), a 2024 review of Moroccan Ephedra
// uses (Chroho et al.) and a 1985 blood sugar study (Konno et al.). Family per
// GBIF.

run({
  name: "Ephedra Distachya",
  profile: { family: "Ephedraceae", genus: "Ephedra", species: "distachya", nativeRange: "Southern Europe, North Africa and Central Asia", partsUsed: "The green stems" },
  sources: {
    fda: {
      title: "21 CFR 119.1 Dietary supplements containing ephedrine alkaloids",
      organization: "US Food and Drug Administration",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-119/section-119.1",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ibragic: {
      title: "Chemical composition of various Ephedra species",
      author: "Ibragic S, Sofić E",
      journal: "Bosnian Journal of Basic Medical Sciences",
      publicationDate: "2015-07-18",
      doi: "10.17305/bjbms.2015.539",
      pmid: "26295290",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4594322/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chroho: {
      title: "Ethnobotanical Uses and Pharmacological Activities of Moroccan Ephedra Species",
      author: "Chroho M, Bailly C, Bouissane L",
      journal: "Planta Medica",
      publicationDate: "2024-02-29",
      doi: "10.1055/a-2269-2113",
      pmid: "38423032",
      url: "https://doi.org/10.1055/a-2269-2113",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    konno: {
      title: "Isolation and hypoglycemic activity of ephedrans A, B, C, D and E, glycans of Ephedra distachya herbs",
      author: "Konno C, Mizuno T, Hikino H",
      journal: "Planta Medica",
      publicationDate: "1985-04-01",
      doi: "10.1055/s-2007-969437",
      pmid: "4034736",
      url: "https://doi.org/10.1055/s-2007-969437",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A low, jointed, nearly leafless shrub with red berry-like cones. In Morocco it's one of the Ephedra species used for colds, asthma and breathing problems, flu, diabetes, rheumatism and high blood pressure, and sometimes to control weight.",
      source: "chroho",
    },
    {
      category: "PRECLINICAL",
      summary: "Its stems contain ephedrine and pseudoephedrine, about 21 mg per gram dried, which act like adrenaline in the body.",
      source: "ibragic",
    },
    {
      category: "PRECLINICAL",
      summary: "Sugar compounds from the plant (ephedrans) showed blood-sugar-lowering activity in a 1985 lab study.",
      source: "konno",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "In the US, dietary supplements containing ephedrine alkaloids are banned: the FDA found they present an unreasonable risk of illness or injury.",
      source: "fda",
    },
    {
      category: "TOXICITY",
      description: "Ephedrine is a stimulant whose effects vary with the amount and ratio of alkaloids in the plant, which differ widely between species and batches.",
      source: "ibragic",
    },
  ],
  symptoms: [
    { slug: "asthma-and-wheezing", notes: "A traditional Moroccan remedy for asthma. Ephedrine supplements are banned in the US." },
  ],
});
