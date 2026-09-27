import { run } from "./lib/populate-herb";

// Grindelia (Grindelia robusta and related species, gumweed), from verified
// sources: the EMA/HMPC community herbal monograph (2013) and a lab study on
// respiratory cells (Gierlikowska et al. 2020). Family per GBIF / Catalogue of
// Life.

run({
  name: "Grindelia",
  profile: {
    family: "Asteraceae",
    genus: "Grindelia",
    species: "robusta",
    partsUsed: "The above-ground parts (herb)",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Grindelia robusta Nutt., Grindelia squarrosa (Pursh) Dunal, Grindelia humilis Hook. et Arn., Grindelia camporum Greene, herba (EMA/HMPC/748220/2011)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-03-11",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-grindelia-robusta-nutt-grindelia-squarrosa-pursh-dunal-grindelia-humilis-hook-et-arn-grindelia-camporum-greene-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    gierlikowska: {
      title: "Inula helenium and Grindelia squarrosa as a source of compounds with anti-inflammatory activity in human neutrophils and cultured human respiratory epithelium",
      author: "Gierlikowska B, Gierlikowski W, Bekier K, Skalicka-Woźniak K, Czerwińska ME, Kiss AK",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2019-10-20",
      doi: "10.1016/j.jep.2019.112311",
      pmid: "31644941",
      url: "https://pubmed.ncbi.nlm.nih.gov/31644941/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Gumweed", type: "COMMON_NAME" },
    { name: "Grindelia squarrosa", type: "COMMON_NAME" },
  ],
  traditions: [{ slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for cough with a cold." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes grindelia as a traditional herbal medicine to relieve cough with a cold in adults. It is taken as a tea, liquid extract or tincture.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Grindelia is one of several plants traditionally used in Europe for breathing problems. In lab tests on human immune cells and airway cells, its compounds reduced signals that drive inflammation.",
      source: "gierlikowska",
    },
  ],
  safety: [
    { category: "ALLERGY", description: "Don't use it if you're allergic to grindelia or other daisy-family plants.", source: "ema" },
    {
      category: "DOSAGE",
      description:
        "Not recommended for anyone under 18. See a doctor straight away if symptoms get worse or you get shortness of breath, a high fever or colored phlegm, and if symptoms last more than 1 week.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so it isn't recommended at these times.",
      source: "ema",
    },
    { category: "ADVERSE_EFFECT", description: "No side effects are known.", source: "ema" },
  ],
  symptoms: [
    { slug: "cough", notes: "Recognized in Europe as a traditional medicine for cough with a cold, in adults." },
    { slug: "colds-and-congestion", notes: "Recognized in Europe for cough with a cold." },
  ],
});
