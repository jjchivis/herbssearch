import { run } from "./lib/populate-herb";

// Senna (Senna alexandrina, syn. Cassia senna, C. angustifolia), from the EMA
// herbal monograph and summary for the public on senna leaf (2018), and a 2021 randomized trial in chronic constipation
// (Morishita et al.). Not the same plant as Siamese cassia (Senna siamea), which
// has its own page. Family per GBIF.

const EMA = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run({
  name: "Senna",
  profile: {
    family: "Fabaceae",
    genus: "Senna",
    species: "alexandrina",
    partsUsed: "The leaves and pods",
  },
  sources: {
    emaMono: {
      title: "European Union herbal monograph on Senna alexandrina Mill. (Cassia senna L.; Cassia angustifolia Vahl), folium, Revision 1",
      organization: EMA,
      publicationDate: "2018-09-25",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-senna-alexandrina-mill-cassia-senna-l-cassia-angustifolia-vahl-folium-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaSum: {
      title: "Senna leaf: summary for the public (EMA/697536/2018)",
      organization: EMA,
      publicationDate: "2018-09-25",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/senna-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    morishita: {
      title: "Senna Versus Magnesium Oxide for the Treatment of Chronic Constipation: A Randomized, Placebo-Controlled Trial",
      author: "Morishita D, Tomita T, Mori S, et al.",
      journal: "The American Journal of Gastroenterology",
      publicationDate: "2021-01-01",
      doi: "10.14309/ajg.0000000000000942",
      pmid: "32969946",
      url: "https://pubmed.ncbi.nlm.nih.gov/32969946/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cassia senna", type: "SCIENTIFIC_SYNONYM" },
    { name: "Cassia angustifolia", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on scientific evidence from at least 10 years of use in Europe, the European Medicines Agency recognizes senna leaf for short-term relief of occasional constipation in adults and teens over 12. It should only be used if changing your diet or taking a fiber laxative hasn't worked.",
      source: "emaMono",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Senna contains anthraquinones, compounds that stimulate the bowel to move. They also change how the gut absorbs water and salt, so the stool holds more water and passes more easily.",
      source: "emaSum",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2021 trial of 90 adults with long-term constipation, mostly women, senna taken for 28 days improved symptoms in 69% of people, compared with 12% on a placebo. It worked about as well as magnesium oxide, another laxative, and improved quality of life.",
      source: "morishita",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description:
        "Use senna for no more than 1 week; two or three times in that week is usually enough. Using stimulant laxatives for longer can damage how the bowel works and make you dependent on laxatives. If you need a laxative every day, see a doctor to find the cause.",
      source: "emaMono",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use senna if you have:\n- A blocked or narrowed gut, or a gut that isn't moving\n- Appendicitis\n- Inflammatory bowel disease, such as Crohn's disease or ulcerative colitis\n- Stomach pain with no known cause\n- Severe dehydration\nIt must not be used by children under 12.",
      source: "emaMono",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Talk to a doctor before using senna if you take heart medicines such as digoxin, medicines for heart rhythm or that affect the heart's QT interval, water pills, steroid medicines (corticosteroids) or licorice root. Long-term overuse can lower potassium, which strengthens the effect of digoxin and affects heart rhythm medicines.",
      source: "emaMono",
    },
    {
      category: "PREGNANCY",
      description:
        "Don't use senna during pregnancy, because lab data suggest some of its compounds (such as emodin) may damage genes.",
      source: "emaMono",
    },
    {
      category: "BREASTFEEDING",
      description: "Don't use senna while breastfeeding: small amounts of its active compounds pass into breast milk.",
      source: "emaMono",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Senna can cause stomach pain, cramps and watery stools, especially in people with irritable bowel syndrome or if the dose is too high. Long-term use can upset the body's water and salt balance and darken the lining of the bowel. It may turn urine yellow or red-brown, which is harmless. Allergic rashes and itching can occur.",
      source: "emaMono",
    },
  ],
  symptoms: [
    {
      slug: "constipation",
      notes: "Recognized in Europe, based on scientific evidence, for short-term relief of occasional constipation, for no more than a week.",
    },
  ],
  preparations: [
    {
      slug: "tea-infusion",
      notes: "The dried, cut leaves are sold as an herbal tea, standardized to a set amount of their laxative compounds.",
      source: "emaSum",
    },
    {
      slug: "extract",
      notes: "Standardized leaf preparations are taken by mouth as tablets or liquids, usually once at night.",
      source: "emaMono",
    },
  ],
});
