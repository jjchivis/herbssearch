import { run } from "./lib/populate-herb";

// Garlic (Allium sativum), from verified sources: NCCIH, the EU herbal
// monograph (EMA/HMPC), a 2016 meta-analysis (Ried, J Nutr) and a Jamaican
// survey of herbal remedy use (Owusu et al. 2020). Family per GBIF / Catalogue
// of Life. No sourced native range was found (GRIN lists no distribution), so
// none is given.

run({
  name: "Garlic",
  profile: {
    family: "Amaryllidaceae",
    genus: "Allium",
    species: "sativum",
    partsUsed: "The bulb (the cloves), used fresh, dried or powdered",
  },
  sources: {
    nccih: {
      title: "Garlic: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/garlic",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Allium sativum L., bulbus (EMA/HMPC/7685/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-07-18",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-allium-sativum-l-bulbus_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ried: {
      title: "Garlic Lowers Blood Pressure in Hypertensive Individuals, Regulates Serum Cholesterol, and Stimulates Immunity: An Updated Meta-analysis and Review",
      author: "Ried K",
      journal: "The Journal of Nutrition",
      organization: "The Journal of Nutrition",
      publicationDate: "2016-02-01",
      doi: "10.3945/jn.114.202192",
      pmid: "26764326",
      url: "https://pubmed.ncbi.nlm.nih.gov/26764326/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    owusu: {
      title: "Factors associated with the use of complementary and alternative therapies among patients with hypertension and type 2 diabetes mellitus in Western Jamaica: a cross-sectional study",
      author: "Owusu S, Gaye YE, Hall S, Junkins A, Sohail M, Franklin S, Aung M, Jolly PE",
      journal: "BMC Complementary Medicine and Therapies",
      organization: "BMC Complementary Medicine and Therapies",
      publicationDate: "2020-10-01",
      doi: "10.1186/s12906-020-03109-w",
      pmid: "33069215",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7568371/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    {
      slug: "mediterranean-folk-medicine",
      notes: "Used historically in ancient Egypt and Greece for headaches, pneumonia, throat conditions and digestive problems.",
    },
    {
      slug: "ayurveda",
      notes: "Used historically in India for headaches, pneumonia, throat conditions and digestive problems.",
    },
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized by the European Medicines Agency as a traditional herbal medicine to help prevent hardening of the arteries (atherosclerosis), alongside other measures, and to relieve cold symptoms.",
    },
    {
      slug: "caribbean-folk-medicine",
      notes: "One of the most commonly reported herbal remedies for high blood pressure among clinic patients in western Jamaica.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Garlic has been used historically in Egypt, Greece and India for headaches, pneumonia, throat conditions and digestive problems. Today it is promoted as a supplement for cholesterol, blood pressure, diabetes, cancer prevention and the immune system.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes garlic as a traditional herbal medicine, based only on its long history of use, for two purposes:\n- Alongside other measures, to help prevent atherosclerosis (fatty buildup that narrows and hardens the arteries)\n- Relief of common cold symptoms",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In a 2017 survey of clinic patients in western Jamaica who had high blood pressure or type 2 diabetes, garlic was one of the most commonly reported herbal remedies used for high blood pressure.",
      source: "owusu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Garlic supplements may lower total and LDL (\"bad\") cholesterol a little in people with high cholesterol. Limited evidence suggests they may lower blood pressure a little in people with high blood pressure, and may slightly lower blood sugar in people with diabetes. Eating garlic doesn't seem to lower the risk of stomach cancer, and it's unclear whether it affects the risk of colorectal cancer. Very little research has looked at garlic and the immune system.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2016 review combined 20 trials with 970 people. Garlic supplements lowered systolic blood pressure (the top number) by about 5 mm Hg compared with placebo, and by about 9 mm Hg in people who started with high blood pressure. An earlier review cited in the same paper found garlic lowered total and LDL cholesterol by about 10% when taken for more than 2 months by people with slightly high cholesterol. The author calls for longer trials to find out whether garlic reduces heart attacks, strokes or deaths.\n\nTechnical detail: SBP −5.1 ± 2.2 mm Hg and DBP −2.5 ± 1.6 mm Hg vs placebo; hypertensive subgroup (≥140/90 mm Hg) SBP −8.7 ± 2.2 and DBP −6.1 ± 1.3 mm Hg; lipid meta-analysis of 39 RCTs with 2,300 adults, total cholesterol >200 mg/dL (>5.5 mmol/L).",
      source: "ried",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Garlic supplements may raise the risk of bleeding. Talk to your health care provider before taking them if you take a blood thinner (anticoagulant), aspirin or other medicines.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't take garlic medicines with the HIV medicines saquinavir and ritonavir. Garlic can lower the amount of saquinavir in the blood, so the HIV treatment may stop working and the virus may become resistant. Use garlic medicines with caution if you take blood thinners or anti-platelet medicines, because they may make bleeding last longer.",
      source: "ema",
    },
    {
      category: "SURGERY",
      description: "Avoid garlic medicines for 7 days before surgery because of the risk of bleeding afterwards.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Garlic can cause bad breath and body odor, stomach pain, gas, nausea and allergic reactions.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Reported side effects of garlic medicines include:\n- Bad breath or body odor, stomach pain, bloating, gas, feeling full and loss of appetite\n- Allergic reactions such as skin rash, eye or nose irritation, or breathing problems, sometimes severe\n- Headache, dizziness and heavy sweating\n- Bleeding\nHow often these happen is not known.",
      source: "ema",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Don't put fresh raw garlic on the skin. It can cause severe skin irritation and chemical burns.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Taking garlic by mouth in amounts larger than those in food is not considered safe during pregnancy or while breastfeeding.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "European guidance doesn't recommend garlic medicines during pregnancy or breastfeeding, because their safety hasn't been established. Animal studies have shown effects on fertility.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "European guidance for adults using garlic powder to help prevent atherosclerosis: 300–750 mg per dose, 900–1,380 mg a day split into 3 to 5 doses. Not recommended for anyone under 18 for this use.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes:
        "Research suggests garlic supplements may lower blood pressure a little in people with high blood pressure. Also a common traditional remedy for high blood pressure in Jamaica.",
    },
    { slug: "high-cholesterol", notes: "Garlic supplements may lower total and LDL cholesterol a little in people with high cholesterol." },
    { slug: "high-blood-sugar", notes: "Garlic supplements may slightly lower blood sugar in people with diabetes." },
  ],
});
