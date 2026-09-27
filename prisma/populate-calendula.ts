import { run } from "./lib/populate-herb";

// Calendula (Calendula officinalis), from verified sources: the EMA/HMPC public
// summary and EU herbal monograph (2018), Memorial Sloan Kettering's About Herbs
// entry (2023) and a systematic review of wound healing (Givol et al. 2019).
// Family per GBIF / Catalogue of Life. "Golden Healer" is included as another
// name at the site owner's request.

run({
  name: "Calendula",
  profile: {
    family: "Asteraceae",
    genus: "Calendula",
    species: "officinalis",
    partsUsed: "The flowers",
  },
  sources: {
    emaSummary: {
      title: "Calendula flower (Calendula officinalis L., flos): summary of the HMPC conclusions (EMA/267467/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/calendula-flower-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Calendula officinalis L., flos, Revision 1 (EMA/HMPC/437450/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-calendula-officinalis-l-flos-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mskcc: {
      title: "Calendula",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-06-19",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/calendula",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    givol: {
      title: "A systematic review of Calendula officinalis extract for wound healing",
      author: "Givol O, Kornhaber R, Visentin D, Cleary M, Haik J, Harats M",
      journal: "Wound Repair and Regeneration",
      organization: "Wound Repair and Regeneration",
      publicationDate: "2019-06-20",
      doi: "10.1111/wrr.12737",
      pmid: "31145533",
      url: "https://pubmed.ncbi.nlm.nih.gov/31145533/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Golden Healer", type: "COMMON_NAME" },
    { name: "Pot Marigold", type: "COMMON_NAME" },
    { name: "Marigold", type: "COMMON_NAME" },
    { name: "Gold-bloom", type: "COMMON_NAME" },
    { name: "Marybud", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in Europe as a traditional herbal medicine for minor skin inflammation, minor wounds, and mouth or throat inflammation.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes calendula flower as a traditional herbal medicine for:\n- Minor skin inflammation, such as sunburn\n- Helping minor wounds heal\n- Minor inflammation in the mouth or throat\nOn the skin it is used as a cream or ointment, or as a warm tea soaked into a dressing.",
      source: "emaSummary",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Calendula comes as creams and ointments to soothe irritated skin, and is used for small cuts and burns. Fresh petals are eaten in salads, and dried petals add color to soups and stews.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, calendula reduced inflammation and showed antioxidant and antimicrobial activity. In animals, it helped burns heal faster and helped protect the skin from sun damage.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency looked at studies of calendula for leg ulcers caused by poor vein circulation, burns and skin inflammation. No firm conclusions could be drawn because of problems with how the studies were designed.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2019 review of 7 clinical trials and 7 animal studies found some evidence that calendula extract helps wounds heal:\n- Acute wounds: one trial and five animal studies found faster healing of inflammation.\n- Leg ulcers from poor vein circulation: two studies found the ulcers shrank more than with comparison treatments.\n- Diabetic leg ulcers and burns: trials found no benefit.\n- Skin damage from radiation therapy: one trial found calendula helped prevent it, another found no benefit.\nThe authors say larger, well-designed trials are needed.",
      source: "givol",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Other small studies suggest calendula may help when used to prevent skin damage from radiation therapy, and for diabetic foot and leg ulcers, vaginal yeast infections and pain after an episiotomy. Larger studies are needed.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Calendula can cause allergic reactions, including skin allergies. Don't use it if you're allergic to calendula or other plants in the daisy family.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description:
        "Calendula medicines are for use on the skin in people over 6, and in the mouth or throat in people over 12. See a doctor if the skin looks infected, symptoms get worse, or they last longer than 1 week.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been studied, so don't use calendula at these times.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "It's generally safe to use calendula in food and tea. Supplements are stronger and can affect how other medicines work, so talk with your healthcare provider before taking them.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "wounds-and-burns",
      notes: "Recognized in Europe as a traditional medicine to help minor wounds heal. A review found some evidence of benefit; results for burns were mixed.",
    },
    {
      slug: "skin-irritation",
      notes: "Recognized in Europe for minor skin inflammation such as sunburn. Studies of radiation skin damage have had mixed results.",
    },
  ],
});
