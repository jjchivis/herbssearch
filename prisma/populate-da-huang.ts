import { run } from "./lib/populate-herb";

// Da Huang (rhubarb root, Rheum palmatum / R. officinale), from the European
// Medicines Agency's EU herbal monograph (Revision 1, 2020), a 2023 review of
// anthraquinone-containing Chinese herbs and melanosis coli (Zhang et al.) and a
// 2024 EFSA scientific opinion.

run({
  name: "Da Huang",
  profile: {
    family: "Polygonaceae",
    genus: "Rheum",
    species: "palmatum",
    partsUsed: "The dried root and rhizome",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Rheum palmatum L. and Rheum officinale Baillon, radix, Final – Revision 1 (EMA/HMPC/113700/2019)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2020-05-06",
      url: "https://ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rheum-palmatum-l-rheum-officinale-baillon-radix-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    zhang: {
      title: "Review on melanosis coli and anthraquinone-containing traditional Chinese herbs that cause melanosis coli",
      author: "Zhang R, Huang C, Wu F, Fang K, Jiang S, Zhao Y, Chen G, Dong R",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2023-05-04",
      doi: "10.3389/fphar.2023.1160480",
      pmid: "37214441",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10193150/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    efsa: {
      title: "Scientific Opinion on additional scientific data related to the safety of preparations of Rheum palmatum L., Rheum officinale Baill. and their hybrids, Rhamnus purshiana DC., Rhamnus frangula L. and Cassia senna L.",
      organization: "European Food Safety Authority, Panel on Nutrition, Novel Foods and Food Allergens (NDA)",
      publicationDate: "2024-05-23",
      doi: "10.2903/j.efsa.2024.8766",
      pmid: "38784839",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11112454/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Dahuang", type: "TRADITIONAL_NAME" },
    { name: "Rhubarb Root", type: "COMMON_NAME" },
    { name: "Chinese Rhubarb", type: "COMMON_NAME" },
    { name: "Rhei Radix et Rhizoma", type: "COMMON_NAME" },
    { name: "Rheum officinale", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called da huang; used for thousands of years as a purgative to \"clear heat\", and to restore menstruation and relieve \"blood stasis\"." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Da huang has been used in Chinese medicine for thousands of years. It's used to:\n- Loosen the bowels and \"clear heat\"\n- Remove \"heat\" and \"toxins\" from the blood\n- Relieve \"blood stasis\" and restore menstruation\nIt's an ingredient in many Chinese formulas and is commonly used as a laxative in both traditional and modern medicine.",
      source: "zhang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency accepts rhubarb root as an established medicine for short-term use in occasional constipation. It's a stimulant laxative: bacteria in the large intestine turn its compounds into active forms that make the bowel move.\n- Taken once a day at night, at the smallest dose that gives a soft stool\n- Not to be used for more than 1 week, and usually only 2 or 3 times in that week\n\nTechnical detail: dose equivalent to 20–30 mg hydroxyanthracene derivatives (as rhein) once daily; for adolescents over 12, adults and the elderly.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use rhubarb root if you have:\n- A blocked or narrowed bowel, or a bowel that doesn't move\n- Appendicitis\n- Inflammatory bowel disease such as Crohn's disease or ulcerative colitis\n- Stomach pain without a known cause\n- Severe dehydration\nIt's not for children under 12, or during pregnancy or breastfeeding.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "It can cause stomach cramps and watery stools, and allergic reactions such as itching, hives or rash. Long-term use can make the bowel work less well and lead to laxative dependence, and can cause loss of water and salts and protein or blood in the urine. It can turn urine yellow or red-brown, which is harmless. Long-term overdose can cause liver inflammation.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Long-term use of herbs like da huang is linked to melanosis coli, a brown discolouring of the bowel lining. It isn't cancerous and can go away, but people with it have a higher rate of bowel polyps. The reviewers advise against long-term use in large doses.",
      source: "zhang",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Long-term use can lower potassium, which can increase the effect of heart medicines such as cardiac glycosides and interact with heart-rhythm medicines. People taking these, medicines that lengthen the QT interval, water pills, corticosteroids or liquorice root should ask a doctor before using it.",
      source: "ema",
    },
    {
      category: "TOXICITY",
      description: "In 2024, the European Food Safety Authority said it couldn't establish the safety of rhubarb root preparations in foods and supplements, because they contain compounds known or suspected to damage DNA.",
      source: "efsa",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Accepted by the European Medicines Agency for short-term use in occasional constipation; not for more than 1 week." },
  ],
});
