import { run } from "./lib/populate-herb";

// Motherwort (Leonurus cardiaca), from verified sources: the EMA/HMPC public
// summary (2019) and a 2019 review updating the EMA assessment report
// (Fierascu et al., BioMed Res Int). Family per GBIF / Catalogue of Life;
// native range per Fierascu et al.

run({
  name: "Motherwort",
  profile: {
    family: "Lamiaceae",
    genus: "Leonurus",
    species: "cardiaca",
    nativeRange: "Native to Asia and southeastern Europe; now found around the world",
    partsUsed: "The flowering parts",
  },
  sources: {
    ema: {
      title: "Motherwort (Leonurus cardiaca L., herba): summary of the HMPC conclusions (EMA/165476/2019)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2019-05-15",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/motherwort-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    fierascu: {
      title: "Leonurus cardiaca L. as a Source of Bioactive Compounds: An Update of the European Medicines Agency Assessment Report (2010)",
      author: "Fierascu RC, Fierascu I, Ortan A, Fierascu IC, Anuta V, Velescu BS, Pituru SM, Dinu-Pirvu CE",
      journal: "BioMed Research International",
      organization: "BioMed Research International",
      publicationDate: "2019-01-01",
      doi: "10.1155/2019/4303215",
      pmid: "31119169",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6500680/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Leonurine", slug: "leonurine", type: "alkaloid" },
    { name: "Stachydrine", slug: "stachydrine", type: "alkaloid" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency as a traditional herbal medicine for nervous tension and nervous heart complaints such as palpitations.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Motherwort has been used since ancient times as a heart tonic and for women's health problems such as missing or painful periods, anxiety around menopause and depression after childbirth.\n\nTechnical detail: cardiotonic; amenorrhea, dysmenorrhea, menopausal anxiety, postpartum depression.",
      source: "fierascu",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on at least 30 years of safe use, the European Medicines Agency recognizes motherwort as a traditional herbal medicine to relieve nervous tension and nervous heart complaints such as palpitations (more noticeable heartbeats), once a doctor has ruled out serious conditions.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies on rat heart cells, motherwort extracts reduced the production of harmful free radicals. In mice, leonurine, a compound found in motherwort, reduced inflammation.",
      source: "fierascu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In one study, 50 people with stage 1 or 2 high blood pressure took 1,200 mg of motherwort oil extract a day for 28 days. Their blood pressure and heart rate changed significantly, and anxiety, headaches and sleep problems improved, especially in people with stage 1 high blood pressure.\n\nTechnical detail: Shikov et al. 2011, Phytotherapy Research; changes in systolic and diastolic blood pressure, heart rate and ECG.",
      source: "fierascu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency considered that study. A possible blood-pressure-lowering effect was seen, but the study was short and didn't compare motherwort with any other treatment, so firm conclusions couldn't be drawn.",
      source: "ema",
    },
  ],
  safety: [
    { category: "PREGNANCY", description: "Motherwort medicines must not be taken during pregnancy.", source: "ema" },
    {
      category: "PREGNANCY",
      description: "Motherwort is listed as an herb to avoid in pregnancy, mainly because it may stimulate the womb and bring on menstruation.",
      source: "fierascu",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Motherwort may increase the risk of bleeding with blood thinners and anti-platelet medicines, and has been reported to strengthen the effect of warfarin. Taken with benzodiazepines (anti-anxiety and sleep medicines), it may add to their sleep-inducing effect; this has been reported to result in coma.",
      source: "fierascu",
    },
    {
      category: "SURGERY",
      description: "Motherwort has been listed as an herb linked to bleeding problems, which matters for anesthesia and surgery.",
      source: "fierascu",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "At the time of the European assessment, no side effects had been reported with motherwort medicines.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Taking 3 g of powdered extract a day has been linked to diarrhea, bleeding from the womb and stomach irritation.",
      source: "fierascu",
    },
    {
      category: "CONTRAINDICATION",
      description: "Motherwort medicines should only be used by adults. See a doctor if symptoms last longer than 4 weeks or get worse.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "heart-palpitations",
      notes: "Traditionally used in Europe for nervous heart complaints such as palpitations, once a doctor has ruled out serious conditions.",
    },
    {
      slug: "high-blood-pressure",
      notes: "One small, short study suggested it may lower blood pressure in people with anxiety, but firm conclusions can't be drawn.",
    },
  ],
});
