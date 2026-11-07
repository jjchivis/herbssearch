import { run } from "./lib/populate-herb";

// Butcher's broom (Ruscus aculeatus), root. Sources: the EMA public summary and
// EU herbal monograph (traditional use, doses, warnings) and a 2017
// meta-analysis of trials of a combination product containing Ruscus extract.
// Family per GBIF.

run({
  name: "Butcher's Broom",
  profile: {
    family: "Asparagaceae",
    genus: "Ruscus",
    species: "aculeatus",
    partsUsed: "The root (rhizome), powdered or as a dry extract",
  },
  sources: {
    emaSummary: {
      title: "Butcher's broom: summary for the public (EMA/845547/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2019-01-16",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/butchers-broom-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Ruscus aculeatus L., rhizoma, revision 1 (EMA/HMPC/188804/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-11-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-ruscus-aculeatus-l-rhizoma-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    kakkos: {
      title:
        "Efficacy of Ruscus extract, HMC and vitamin C, constituents of Cyclo 3 fort, on improving individual venous symptoms and edema: a systematic review and meta-analysis of randomized double-blind placebo-controlled trials",
      author: "Kakkos SK, Allaert FA",
      journal: "International Angiology",
      publicationDate: "2017-04-01",
      doi: "10.23736/S0392-9590.17.03815-9",
      pmid: "28225220",
      url: "https://doi.org/10.23736/S0392-9590.17.03815-9",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  traditions: [
    {
      slug: "european-folk-medicine",
      notes:
        "Recognized in the European Union as a traditional herbal medicine for heavy, uncomfortable legs from minor circulation problems, and for itching and burning from piles.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes butcher's broom root as a traditional herbal medicine for adults, based on long-standing use rather than proof from clinical trials:\n- to relieve discomfort and heaviness in the legs caused by minor blood circulation problems\n- to relieve itching and burning from hemorrhoids (piles), after a doctor has ruled out anything serious",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency looked at a 12-week trial in 166 women with minor circulation problems. Swelling of the feet and lower legs went down more with butcher's broom than with placebo, but the overall benefit was not convincing. The study included no men and was short, so no firm conclusion could be drawn. No studies have been done in people with hemorrhoids.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2017 review of 10 trials in 719 people with long-term vein problems in the legs tested a product that combines butcher's broom extract with two other ingredients. Compared with placebo, it reduced leg pain, heaviness, tiredness, a feeling of swelling, cramps, itching, and pins and needles, as well as actual swelling. Because the product had other ingredients, these results can't be credited to butcher's broom alone.\n\nTechnical detail: Cyclo 3 Fort (Ruscus extract, hesperidin methyl chalcone and vitamin C); randomized, double-blind, placebo-controlled trials; leg pain RR 0.35 (NNT 5).",
      source: "kakkos",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects are known. No interactions with medicines have been reported.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description: "Don't use butcher's broom if you are allergic to it.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description:
        "Its safety in pregnancy and breastfeeding has not been established, so it is not recommended during pregnancy or while breastfeeding.",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "For leg symptoms, see a doctor if you have skin inflammation, hardened skin, ulcers or sudden swelling of one or both legs, or if you have heart or kidney failure. For hemorrhoids, see a doctor if you have any bleeding from the bottom.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "For adults only. A typical dose is 350 mg of the powdered root 3 times a day, or a dry extract as directed on the product. See a doctor if symptoms last longer than 2 weeks or get worse.\n\nTechnical detail: other EU doses include aqueous dry extract (DER 2.5–6.5:1) 150–200 mg per dose, up to 450 mg daily.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "poor-circulation",
      notes:
        "Recognized in Europe as a traditional medicine for heavy, uncomfortable legs; a combination product with butcher's broom eased leg vein symptoms in trials.",
    },
  ],
});
