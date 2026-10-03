import { run } from "./lib/populate-herb";

// Purslane (Portulaca oleracea), from verified sources: a review of
// ethnomedicines used in Trinidad and Tobago (Lans 2006), two meta-analyses of
// randomized trials (Abbasi et al. 2023; Donglin et al. 2024), a 2026 review of
// its traditional uses (Sun et al., J Ethnopharmacol), a 2026 nutrition review
// (Ampim et al.) and a 2025 study of its oxalate content (Zherkova et al.).

run({
  name: "Purslane",
  profile: {
    family: "Portulacaceae",
    genus: "Portulaca",
    species: "oleracea",
    partsUsed:
      "The whole plant. The leaves and stems are eaten as a vegetable, fresh, blanched or pickled.",
  },
  sources: {
    lans: {
      title: "Ethnomedicines used in Trinidad and Tobago for urinary problems and diabetes mellitus",
      author: "Lans CA",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      organization: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2006-10-13",
      doi: "10.1186/1746-4269-2-45",
      pmid: "17040567",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1624823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sun: {
      title: "Progress in extraction, purification, chemical structure, bioactivities, and food preservation applications of polysaccharides from Portulaca oleracea L.",
      author: "Sun S, Meng K, Zhang Q, Zhang J",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2026-08-17",
      doi: "10.1016/j.jep.2026.122317",
      pmid: "42607874",
      url: "https://doi.org/10.1016/j.jep.2026.122317",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    abbasi: {
      title: "The effects of purslane (Portulaca oleracea) on glycemic indices: A GRADE-assessed systematic review and meta-analysis of randomized controlled trials",
      author: "Abbasi S, Mashatan N, Farmani E, Khodashenas M, Musazadeh V, Ahrabi SS, Moridpour AH, Faghfouri AH",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2023-09-04",
      doi: "10.1002/ptr.7997",
      pmid: "37661794",
      url: "https://doi.org/10.1002/ptr.7997",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    donglin: {
      title: "The effects of purslane (Portulaca oleracea) on C-reactive protein, lipid profile, and glycemic control in patients with type 2 diabetes mellitus: A GRADE-assessed systematic review and meta-analysis of randomized controlled trials",
      author: "Donglin G, Birjandi R, Esfandabadi FM, Haedi A, Fujiang C",
      journal: "Prostaglandins & Other Lipid Mediators",
      organization: "Prostaglandins & Other Lipid Mediators",
      publicationDate: "2024-10-23",
      doi: "10.1016/j.prostaglandins.2024.106917",
      pmid: "39454818",
      url: "https://doi.org/10.1016/j.prostaglandins.2024.106917",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    ampim: {
      title: "Agronomic management enhances nutritional quality and functional food potential of purslane (Portulaca oleracea L.): a review",
      author: "Ampim PAY, Faluyi EA, Salisu MA, McDonald A, Branch-Vital A, Antwi J",
      journal: "Frontiers in Plant Science",
      organization: "Frontiers in Plant Science",
      publicationDate: "2026-07-29",
      doi: "10.3389/fpls.2026.1898609",
      pmid: "42592008",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13463944/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zherkova: {
      title: "Assessment of Purslane (Portulaca oleracea L.) Total Oxalate Content, Ascorbic Acid, and Total Organic Acids Using Near-Infrared Spectroscopy",
      author: "Zherkova Z, Todorova M, Grozeva N, Tzanova M, Petrova A, Veleva P, Atanassova S",
      journal: "Plants",
      organization: "Plants",
      publicationDate: "2025-11-09",
      doi: "10.3390/plants14223426",
      pmid: "41304577",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12656633/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pussley", type: "REGIONAL_NAME", region: "Trinidad and Tobago" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "In Trinidad and Tobago, where it's called pussley, the whole plant is used for high cholesterol and shortness of breath.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Trinidad and Tobago, where it's called pussley, the whole plant is used for high cholesterol and shortness of breath. The 2006 review that recorded this judged there was enough evidence to support its traditional use for high cholesterol.",
      source: "lans",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Purslane is a classic plant used as both food and medicine. It has a long traditional use for:\n- Inflammation\n- Dysentery (bloody diarrhea)\n- Skin infections\n- Diabetes and high blood fats",
      source: "sun",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab analyses show purslane is rich in an omega-3 fat (alpha-linolenic acid), vitamins C and E, carotenoids and minerals. Its nutrient content varies a lot depending on how and where it's grown.",
      source: "ampim",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review that combined randomized trials found purslane supplements lowered fasting blood sugar a little. They didn't change insulin levels or insulin resistance. The authors say longer, high-quality trials are needed to confirm this.\n\nTechnical detail: GRADE-assessed meta-analysis; fasting blood glucose WMD −6.37 (95% CI −9.34 to −3.40, p < 0.001); no significant effect on insulin, HOMA-IR or QUICKI.",
      source: "abbasi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2024 review of randomized trials in people with type 2 diabetes found purslane lowered fasting blood sugar, total cholesterol, triglycerides, LDL (\"bad\") cholesterol and CRP, a marker of inflammation. It raised HDL (\"good\") cholesterol. It didn't change insulin or HbA1c, a measure of long-term blood sugar. The authors say high-quality trials are needed to confirm the results.\n\nTechnical detail: WMDs — FBG −15.01 (95% CI −25.31 to −4.71); TC −17.75; TG −21.30; LDL-C −6.10; CRP −1.44; HDL-C +6.17; no significant effect on insulin, HbA1c or HOMA-IR.",
      source: "donglin",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Purslane is high in oxalates, natural compounds that reduce how well the body absorbs minerals. Blanching lowers the oxalate content, and pickling lowers it further.",
      source: "zherkova",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "Reviews of trials found purslane lowered fasting blood sugar a little, but not long-term blood sugar (HbA1c). Better trials are needed.",
    },
    {
      slug: "high-cholesterol",
      notes: "Traditionally used for high cholesterol in Trinidad. A 2024 review of trials in people with type 2 diabetes found it improved cholesterol and triglycerides; better trials are needed.",
    },
    { slug: "asthma-and-wheezing", notes: "Traditionally used for shortness of breath in Trinidad. This use hasn't been tested in people." },
    { slug: "diarrhea", notes: "Traditionally used for dysentery (bloody diarrhea). This use hasn't been tested in people." },
  ],
});
