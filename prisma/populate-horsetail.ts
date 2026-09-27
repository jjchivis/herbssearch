import { run } from "./lib/populate-herb";

// Horsetail (Equisetum arvense), from verified sources: the EMA/HMPC public
// summary and EU herbal monograph (2016) and a randomized trial of a horsetail
// ointment after episiotomy (Asgharikhatooni et al. 2015). Family per GBIF /
// Catalogue of Life.

run({
  name: "Horsetail",
  profile: {
    family: "Equisetaceae",
    genus: "Equisetum",
    species: "arvense",
    partsUsed: "The green above-ground parts (herb)",
  },
  sources: {
    emaSummary: {
      title: "Horsetail herb (Equisetum arvense L., herba): summary of the HMPC conclusions (EMA/147173/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-04-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/horsetail-herb-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Equisetum arvense L., herba (EMA/HMPC/278091/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-02-02",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-equisetum-arvense-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    asgharikhatooni: {
      title: "The effect of Equisetum arvense (horse tail) ointment on wound healing and pain intensity after episiotomy: a randomized placebo-controlled trial",
      author: "Asgharikhatooni A, Bani S, Hasanpoor S, Mohammad Alizade S, Javadzadeh Y",
      journal: "Iranian Red Crescent Medical Journal",
      organization: "Iranian Red Crescent Medical Journal",
      publicationDate: "2015-03-31",
      doi: "10.5812/ircmj.25637",
      pmid: "26019907",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4441770/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Field Horsetail", type: "COMMON_NAME" },
    { name: "Horse Tail", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in Europe as a traditional herbal medicine for minor urinary complaints and, used on the skin, for superficial wounds.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes horsetail as a traditional herbal medicine for:\n- Increasing urine to flush the urinary tract in minor urinary complaints (as a tea or by mouth)\n- Supporting the treatment of superficial wounds (as a boiled wash or soaked dressing)\nIt is for adults and teens over 12.",
      source: "emaMonograph",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A small study in healthy men suggested horsetail has a mild effect on increasing urine. The European Medicines Agency found no clinical studies of horsetail for wounds.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 108 first-time mothers, a 3% horsetail ointment or a placebo was applied to their episiotomy wound (a cut made during childbirth) for 10 days. Wound healing and pain scores were significantly better in the horsetail group at 5 and 10 days.\n\nTechnical detail: double-blind, randomized, placebo-controlled; REEDA wound-healing scale and visual analog pain scale; Tabriz, Iran.",
      source: "asgharikhatooni",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Allergic reactions, such as a rash or swelling of the face, have been reported. Taken by mouth, it may cause mild stomach and gut complaints. How often these happen isn't known.",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't take horsetail for urinary complaints if you've been told to limit how much you drink, for example because of serious heart or kidney disease. See a doctor if you get fever, painful urination, cramps or blood in the urine.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Horsetail medicines aren't recommended for children under 12. On wounds, see a doctor if the skin looks infected, symptoms get worse, or they last longer than 1 week.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "There isn't enough safety data, so horsetail isn't recommended during pregnancy.",
      source: "emaMonograph",
    },
    {
      category: "BREASTFEEDING",
      description: "Horsetail taken by mouth isn't recommended while breastfeeding, and horsetail products shouldn't be put on the breasts of breastfeeding women.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "wounds-and-burns",
      notes: "Recognized in Europe as a traditional medicine for superficial wounds. One trial found a horsetail ointment helped episiotomy wounds heal.",
    },
  ],
});
