import { run } from "./lib/populate-herb";

// Artichoke leaf (Cynara cardunculus, syn. C. scolymus), from verified sources:
// the EMA/HMPC public summary and EU herbal monograph (2018) and a systematic
// review of trials in fatty liver disease (Kamel & Farag 2022). Family per GBIF /
// Catalogue of Life. No source covering native range was used, so none is stated.

run({
  name: "Artichoke Leaf",
  profile: {
    family: "Asteraceae",
    genus: "Cynara",
    species: "cardunculus",
    partsUsed: "The leaves",
  },
  sources: {
    emaSummary: {
      title: "Artichoke leaf (Cynara cardunculus L. (syn. Cynara scolymus L.), folium): summary of the HMPC conclusions (EMA/268161/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/artichoke-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Cynara cardunculus L. (syn. Cynara scolymus L.), folium (EMA/HMPC/194014/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-cynara-cardunculus-l-syn-cynara-scolymus-l-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    kamel: {
      title: "Therapeutic Potential of Artichoke in the Treatment of Fatty Liver: A Systematic Review and Meta-Analysis",
      author: "Kamel AM, Farag MA",
      journal: "Journal of Medicinal Food",
      organization: "Journal of Medicinal Food",
      publicationDate: "2022-06-28",
      doi: "10.1089/jmf.2022.0025",
      pmid: "35763310",
      url: "https://pubmed.ncbi.nlm.nih.gov/35763310/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Cynara scolymus", type: "SCIENTIFIC_SYNONYM" },
    { name: "Artichoke", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in Europe as a traditional herbal medicine for indigestion, based on at least 30 years of use, including 15 in the EU.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes artichoke leaf as a traditional herbal medicine for indigestion with a feeling of fullness, bloating and gas. It is for adults and teens over 12, and is taken as a tea or in liquid or solid forms by mouth.",
      source: "emaSummary",
    },
    {
      category: "TRADITIONAL",
      summary: "Artichoke leaf extract is well known in folk medicine for protecting the liver.",
      source: "kamel",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies in people with digestive problems suggest artichoke leaf may improve indigestion. No firm conclusions could be drawn, because the studies were small, short and poorly designed.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review combined 5 randomized controlled trials with 333 people with non-alcoholic fatty liver disease. Artichoke leaf extract lowered liver enzymes more than the comparison groups did. It also lowered total cholesterol, LDL cholesterol and triglycerides (blood fats). The authors say these trials support its use in fatty liver disease.\n\nTechnical detail: ALT SMD 1.1 (95% CI 0.79 to 1.73); AST SMD 1.01 (0.52 to 1.51); total cholesterol SMD 0.98; LDL SMD 0.96; triglycerides SMD 0.95; PROSPERO CRD42020182502.",
      source: "kamel",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use artichoke leaf medicines if you have:\n- A blocked or inflamed bile duct (cholangitis)\n- Gallstones or any other bile problem that needs medical care\n- Liver disease\n- An allergy to daisy-family plants",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects include mild diarrhea with belly cramps, nausea, heartburn and allergic reactions. How often they happen isn't known.",
      source: "emaSummary",
    },
    {
      category: "DOSAGE",
      description: "Artichoke leaf medicines are for adults and teens over 12. See a doctor if symptoms last longer than 2 weeks.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so European guidance doesn't recommend it at these times.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "fatty-liver",
      notes: "A 2022 review of 5 trials found artichoke leaf extract lowered liver enzymes in people with fatty liver disease.",
    },
    {
      slug: "gallstones-and-bile-flow",
      notes: "Not for people with gallstones, a blocked bile duct or other bile problems (European Medicines Agency).",
    },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for indigestion with fullness. Small studies suggest it may help." },
    { slug: "bloating", notes: "Recognized in Europe as a traditional medicine for bloating and gas." },
    {
      slug: "high-cholesterol",
      notes: "In trials in people with fatty liver disease, artichoke leaf extract lowered total and LDL cholesterol and triglycerides.",
    },
  ],
});
