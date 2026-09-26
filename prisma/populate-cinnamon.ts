import { run } from "./lib/populate-herb";

// Cinnamon (Cinnamomum verum, Ceylon cinnamon), from verified sources: NCCIH,
// the EU Community herbal monograph (EMA/HMPC, 2011) and a 2013 meta-analysis
// in type 2 diabetes (Allen et al., Ann Fam Med). Family per GBIF / Catalogue
// of Life; origin per NCCIH.

run({
  name: "Cinnamon",
  profile: {
    family: "Lauraceae",
    genus: "Cinnamomum",
    species: "verum",
    nativeRange: "Ceylon (\"true\") cinnamon comes from Sri Lanka",
    partsUsed: "The dried bark. The leaves, flowers, fruits and roots have also been used in traditional medicine.",
  },
  sources: {
    nccih: {
      title: "Cinnamon: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/cinnamon",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "Community herbal monograph on Cinnamomum verum J.S. Presl, cortex (EMA/HMPC/246774/2009)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-05-10",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/community-herbal-monograph-cinnamomum-verum-js-presl-cortex_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    allen: {
      title: "Cinnamon use in type 2 diabetes: an updated systematic review and meta-analysis",
      author: "Allen RW, Schwartzman E, Baker WL, Coleman CI, Phung OJ",
      journal: "Annals of Family Medicine",
      organization: "Annals of Family Medicine",
      publicationDate: "2013-09-01",
      doi: "10.1370/afm.1517",
      pmid: "24019277",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3767714/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Cinnamomum zeylanicum Nees", type: "SCIENTIFIC_SYNONYM" },
    { name: "Ceylon Cinnamon", type: "COMMON_NAME" },
    { name: "True Cinnamon", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "The bark, leaves, flowers, fruits and roots have long been used in traditional medicine and cooking in China.",
    },
    { slug: "ayurveda", notes: "Long used in traditional medicine and cooking in India." },
    {
      slug: "european-folk-medicine",
      notes: "Recognized by the European Medicines Agency as a traditional herbal medicine for mild digestive cramps, bloating and gas, and for mild diarrhea.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cinnamon's bark, leaves, flowers, fruits and roots have a long history of use in traditional medicine and cooking in many parts of the world, including China, India and Persia (Iran).",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes cinnamon bark as a traditional herbal medicine, based only on long-standing use, for:\n- Mild digestive cramps, including bloating and gas\n- Mild diarrhea",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research doesn't clearly support using cinnamon for any health condition. It's unclear whether cinnamon supplements help with diabetes or weight loss. Early research suggests a nasal spray with Ceylon cinnamon extract might ease hay fever symptoms, but more reliable evidence is needed.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 review of 10 trials with 543 people with type 2 diabetes found that cinnamon (120 mg to 6 g a day for 4 to 18 weeks) lowered fasting blood sugar, total and LDL (\"bad\") cholesterol and triglycerides, and raised HDL (\"good\") cholesterol slightly. It didn't significantly change HbA1c, a measure of long-term blood sugar. Results varied a lot between studies, so the best dose and length of use are unclear.\n\nTechnical detail: fasting plasma glucose −24.59 mg/dL (95% CI −40.52 to −8.67); total cholesterol −15.60 mg/dL; LDL-C −9.42 mg/dL; triglycerides −29.59 mg/dL; HDL-C +1.66 mg/dL; HbA1c −0.16% (95% CI −0.39 to 0.02); I² 66.5–94.72%.",
      source: "allen",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Cinnamon is likely safe in the amounts normally used in food as a spice or flavoring.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description: "Cassia cinnamon, the most common kind in North America, contains coumarin, a compound that has been linked to liver problems.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Cinnamon may interact with some cancer medicines and with nicotine. Talk to your health care provider before using cinnamon supplements.",
      source: "nccih",
    },
    { category: "PREGNANCY", description: "Larger amounts of Ceylon cinnamon are considered unsafe during pregnancy.", source: "nccih" },
    {
      category: "PREGNANCY",
      description: "European guidance doesn't recommend cinnamon medicines during pregnancy or breastfeeding, because their safety hasn't been established.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use cinnamon medicines if you're allergic to cinnamon or to Peru balsam. They're not recommended for anyone under 18. For diarrhea, drink plenty of fluids first, and see a doctor if it lasts more than 2 days, keeps coming back or there's blood in the stool.",
      source: "ema",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Don't try the \"cinnamon challenge\" (trying to swallow a spoonful of dry ground cinnamon). It can cause serious harm.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description:
        "European guidance for adults: as a tea, 0.5–1 g of cinnamon bark as an infusion, up to 4 times a day. See a doctor if digestive symptoms last more than 2 weeks or get worse.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "In people with type 2 diabetes, a review found lower fasting blood sugar but no significant change in long-term blood sugar (HbA1c); results varied widely.",
    },
    {
      slug: "high-cholesterol",
      notes: "A review in people with type 2 diabetes found small drops in total and LDL cholesterol and triglycerides.",
    },
  ],
});
