import { run } from "./lib/populate-herb";

// Hawthorn (Crataegus monogyna), from verified sources: NCCIH, the EU herbal
// monograph on hawthorn leaf and flower (EMA/HMPC, 2016) and a Cochrane review
// on chronic heart failure (Pittler et al. 2008). Family per GBIF / Catalogue
// of Life.

run({
  name: "Hawthorn",
  profile: {
    family: "Rosaceae",
    genus: "Crataegus",
    species: "monogyna",
    nativeRange: "Hawthorns grow in temperate regions around the world.",
    partsUsed: "The leaves and flowers",
  },
  sources: {
    nccih: {
      title: "Hawthorn: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/hawthorn",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Crataegus spp., folium cum flore (EMA/HMPC/159075/2014)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-04-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-crataegus-spp-folium-cum-flore_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Hawthorn extract for treating chronic heart failure",
      author: "Pittler MH, Guo R, Ernst E",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2008-01-01",
      doi: "10.1002/14651858.CD005312.pub2",
      pmid: "18254076",
      url: "https://pubmed.ncbi.nlm.nih.gov/18254076/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "English Hawthorn", type: "COMMON_NAME" },
    { name: "Mexican Hawthorn", type: "COMMON_NAME" },
    { name: "Tejocote", type: "COMMON_NAME" },
    { name: "Shanzha", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency as a traditional herbal medicine for heart complaints linked to nervousness, such as palpitations, and for mild stress and sleep.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Hawthorn is a flowering shrub or tree of the rose family. It has traditionally been used for heart disease, digestion, circulation, and kidney and bladder problems, and on the skin for sores and frostbite. Today it is promoted for heart and blood vessel health, weight loss and anxiety.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes hawthorn leaf and flower as a traditional herbal medicine, based only on long-standing use, for:\n- Temporary heart complaints linked to nervousness, such as palpitations or feeling an extra heartbeat from mild anxiety, once a doctor has ruled out serious conditions\n- Mild symptoms of mental stress, and to help sleep",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2008 Cochrane review included 14 high-quality trials in people with long-term heart failure, most taking hawthorn extract alongside their usual heart medicines. Pooling 10 trials with 855 people, hawthorn improved how much exercise people could do and eased symptoms such as shortness of breath and tiredness compared with placebo. The trials gave almost no useful information on heart attacks or deaths. Side effects were uncommon, mild and short-lived.\n\nTechnical detail: double-blind, randomized, placebo-controlled trials of hawthorn leaf and flower extract; NYHA classes I–III; maximal workload WMD 5.35 W (95% CI 0.71 to 10.00); symptom score WMD −5.47 (95% CI −8.68 to −2.26); one trial reported 3 deaths with hawthorn and 1 with placebo without further details.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The evidence on hawthorn for heart failure is conflicting. There isn't enough evidence to know whether it helps chest pain from heart disease (angina), irregular heartbeat or plaque buildup in the arteries. There's no evidence it helps weight loss, and its effects on anxiety are unclear.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "In one study, a hawthorn product may have raised the early risk of heart failure getting worse, possibly because of an interaction with medicines.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "No interactions with medicines were reported in the European assessment.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Only use hawthorn for heart symptoms after a doctor has ruled out serious conditions, and not in anyone under 18. Get medical help straight away if your ankles or legs swell, if you have pain around the heart that may spread to the arms, upper belly or neck, or if you're short of breath.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects can include dizziness, nausea, vomiting, diarrhea and muscle pain. No studies have tested hawthorn's safety for longer than 16 weeks.",
      source: "nccih",
    },
    {
      category: "CONTAMINATION",
      description:
        "In January 2024 the US Food and Drug Administration warned that some supplements sold as \"tejocote root\" (a type of hawthorn) actually contained yellow oleander, a poisonous plant that can cause severe harm or death.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Little is known about whether hawthorn is safe during pregnancy or while breastfeeding.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "European guidance doesn't recommend hawthorn medicines during pregnancy or breastfeeding, because their safety hasn't been established.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "European guidance for adults with heart complaints: as a tea, 1–2 g of dried leaf and flower in 150 ml of boiling water, up to 4 times a day (no more than 6 g a day). See a doctor if symptoms last more than 2 weeks or get worse.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "heart-palpitations",
      notes: "Traditionally used in Europe for heart complaints linked to nervousness, such as palpitations, once a doctor has ruled out serious conditions.",
    },
    {
      slug: "heart-failure",
      notes: "Studied as an add-on to standard heart failure treatment, with conflicting results. Only use under a doctor's care.",
    },
    { slug: "poor-circulation", notes: "Traditionally used for circulation problems." },
  ],
});
