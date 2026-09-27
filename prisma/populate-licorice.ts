import { run } from "./lib/populate-herb";

// Licorice (Glycyrrhiza glabra and related species), from verified sources:
// NCCIH (2025) and the EU herbal monograph, Revision 1 (EMA/HMPC, 2026). Family
// per GBIF / Catalogue of Life.

run({
  name: "Licorice",
  profile: {
    family: "Fabaceae",
    genus: "Glycyrrhiza",
    species: "glabra",
    nativeRange: "Grown across Europe, Asia and the Middle East",
    partsUsed: "The root",
  },
  sources: {
    nccih: {
      title: "Licorice Root: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/licorice-root",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Glycyrrhiza glabra L.; Glycyrrhiza inflata Bat.; Glycyrrhiza uralensis Fisch., radix, Revision 1 (EMA/HMPC/108399/2024)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2026-07-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-glycyrrhiza-glabra-l-glycyrrhiza-inflata-bat-glycyrrhiza-uralensis-fisch-radix-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Licorice Root", type: "COMMON_NAME" },
    { name: "Liquorice", type: "COMMON_NAME" },
    { name: "Glycyrrhiza uralensis", type: "COMMON_NAME" },
    { name: "DGL", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Glycyrrhizin", slug: "glycyrrhizin", type: "saponin" }],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional medicine for cough with a cold and for heartburn and indigestion." },
    { slug: "traditional-chinese-medicine", notes: "Used historically for coughs, asthma, wounds and lung, liver and artery diseases." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Licorice was used in ancient Assyrian, Egyptian, Greek, Arab, Chinese, Tibetan and Indian medicine for coughs, asthma and wound healing, and for diseases of the lungs, liver and arteries. Today it is promoted for digestive, breathing and energy support.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes licorice root as a traditional herbal medicine for adults:\n- To help bring up phlegm with a cough from a cold\n- To relieve digestive symptoms such as a burning feeling and indigestion",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Evidence is limited. Studies suggest licorice may help mouth ulcers (canker sores) and sore throat after a breathing tube is removed after surgery, and possibly eczema. There's no good evidence it helps COVID-19.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Licorice contains glycyrrhizin, which can cause serious problems, including an irregular heartbeat and cardiac arrest, especially in large amounts or with long-term use. Even small amounts can be risky if you eat a lot of salt or have high blood pressure, heart disease or kidney disease.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Licorice medicines aren't recommended if you have high blood pressure, kidney, liver or heart disease, or low potassium. Don't take them with other licorice products: this can cause fluid retention, low potassium, high blood pressure and heart rhythm problems. Not recommended under 18.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Licorice can work against blood pressure medicines. Don't take it with water pills, heart medicines such as digoxin, steroid medicines, stimulant laxatives or other medicines that affect potassium. It may also change levels of medicines broken down by the liver enzyme CYP3A4, such as midazolam and omeprazole.",
      source: "ema",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Deglycyrrhizinated licorice (DGL), which has the glycyrrhizin removed, appears safe for up to 4 months.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Eating large amounts (about 250 g a week) during pregnancy is unsafe and raises the risk of premature birth. Licorice medicines aren't recommended during pregnancy, for women who could become pregnant without contraception, or while breastfeeding.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Recognized in Europe as a traditional medicine to help bring up phlegm with a cough from a cold." },
    { slug: "chest-congestion", notes: "Recognized in Europe to help bring up phlegm. Watch for effects on blood pressure and potassium." },
    { slug: "sore-throat", notes: "Studies suggest it may ease sore throat after a breathing tube is removed; evidence is limited." },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for heartburn and indigestion." },
  ],
});
