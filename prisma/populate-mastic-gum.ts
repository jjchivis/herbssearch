import { run } from "./lib/populate-herb";

// Mastic gum, the resin of Pistacia lentiscus. Sources: the EU herbal monograph
// (traditional use, doses, warnings), a 2010 placebo-controlled trial in
// functional dyspepsia, and a 2026 pilot trial with H. pylori treatment.
// Family per GBIF.

run({
  name: "Mastic Gum",
  profile: {
    family: "Anacardiaceae",
    genus: "Pistacia",
    species: "lentiscus",
    partsUsed: "The resin (a gum that seeps from the tree's bark)",
  },
  sources: {
    emaMonograph: {
      title: "European Union herbal monograph on Pistacia lentiscus L., resina (mastic) (EMA/HMPC/46758/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-02-02",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-pistacia-lentiscus-l-resin-mastic_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    dabos: {
      title:
        "Is Chios mastic gum effective in the treatment of functional dyspepsia? A prospective randomised double-blind placebo controlled trial",
      author: "Dabos KJ, Sfika E, Vlatta LJ, Frantzi D, Amygdalos GI, Giannikopoulos G",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2009-12-02",
      doi: "10.1016/j.jep.2009.11.021",
      pmid: "19961914",
      url: "https://doi.org/10.1016/j.jep.2009.11.021",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tulsian: {
      title:
        "Mastic gum as an adjunct therapy to standard bismuth quadruple therapy for Helicobacter pylori eradication: A randomized single-blind pilot study",
      author: "Tulsian V, Kant R, Patnaik I, Khapre M, Meena K, Routhu B",
      journal: "Indian Journal of Gastroenterology",
      publicationDate: "2026-03-15",
      doi: "10.1007/s12664-026-01968-8",
      pmid: "41832367",
      url: "https://doi.org/10.1007/s12664-026-01968-8",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mastic", type: "COMMON_NAME" },
    { name: "Chios Mastic Gum", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized in the European Union as a traditional herbal medicine for mild indigestion, and on the skin for minor inflammation and small wounds.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes mastic as a traditional herbal medicine for two uses, based on long-standing use rather than proof from clinical trials:\n- taken by mouth for mild indigestion\n- applied to the skin for minor skin inflammation and to help small wounds heal",
      source: "emaMonograph",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2010 trial, 148 people with ongoing indigestion that had no clear cause took mastic gum or a placebo for 3 weeks. Their symptoms improved significantly more with mastic.\n\nTechnical detail: functional dyspepsia; 350 mg three times daily for 3 weeks; randomized, double-blind, placebo-controlled.",
      source: "dabos",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 2026 trial, 64 people with H. pylori (a stomach infection that can cause ulcers) took standard antibiotic treatment with or without mastic gum. Adding mastic did not clearly clear the infection more often, but indigestion symptoms improved more.\n\nTechnical detail: added to bismuth quadruple therapy; eradication 85% vs 67%, not statistically significant; single-blind pilot study.",
      source: "tulsian",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Don't use mastic if you are allergic to it.",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects are known. No interactions with medicines have been reported.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description:
        "Its safety in pregnancy and breastfeeding has not been established, so it is not recommended during pregnancy or while breastfeeding.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "For indigestion: adults only (not for anyone under 18), 0.5 to 1 g twice a day. See a doctor if symptoms last longer than 2 weeks.\n\nOn the skin: for ages 12 and up, a thin layer of a cream or ointment up to 3 times a day. See a doctor if symptoms last longer than 1 week, get worse, or there are signs of skin infection.\n\nTechnical detail: skin preparations contain 9–11% powdered resin; daily oral dose 1–2 g.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "indigestion",
      notes: "Recognized in Europe as a traditional medicine for mild indigestion; one trial found it eased ongoing indigestion.",
    },
    {
      slug: "wounds-and-burns",
      notes: "Recognized in Europe as a traditional skin preparation to help small wounds heal.",
    },
    {
      slug: "skin-irritation",
      notes: "Recognized in Europe as a traditional skin preparation for minor skin inflammation.",
    },
  ],
});
