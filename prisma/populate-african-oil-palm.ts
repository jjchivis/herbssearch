import { run } from "./lib/populate-herb";

// African Oil Palm (Elaeis guineensis), from meta-analyses of red palm oil for
// vitamin A deficiency (Dong et al. 2017) and of palm oil and cholesterol (Sun et
// al. 2015). Not the same as the American oil palm (Elaeis oleifera). Family per
// GBIF.

run({
  name: "African Oil Palm",
  profile: { family: "Arecaceae", genus: "Elaeis", species: "guineensis", nativeRange: "West and Central Africa", partsUsed: "The fruit (palm oil) and kernel" },
  sources: {
    dong: {
      title: "The Effect of Red Palm Oil on Vitamin A Deficiency: A Meta-Analysis of Randomized Controlled Trials",
      author: "Dong S, Xia H, Wang F, Sun G",
      journal: "Nutrients",
      publicationDate: "2017-11-24",
      doi: "10.3390/nu9121281",
      pmid: "29186779",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5748732/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    sun: {
      title: "Palm Oil Consumption Increases LDL Cholesterol Compared with Vegetable Oils Low in Saturated Fat in a Meta-Analysis of Clinical Trials",
      author: "Sun Y, Neelakantan N, Wu Y, Lote-Oke R, Pan A, van Dam RM",
      journal: "Journal of Nutrition",
      publicationDate: "2015-07-01",
      doi: "10.3945/jn.115.210575",
      pmid: "25995283",
      url: "https://doi.org/10.3945/jn.115.210575",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Palm Oil", type: "COMMON_NAME" },
    { name: "Red Palm Oil", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary: "Unrefined red palm oil is rich in beta-carotene. A review of 9 trials found it cut the risk of vitamin A deficiency by about 45% and raised vitamin A levels in children and adults; about 8 grams a day was enough.",
      source: "dong",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "A review of clinical trials found palm oil raised LDL (\"bad\") cholesterol compared with oils low in saturated fat, like olive or canola.",
      source: "sun",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Palm oil is high in saturated fat and raises LDL cholesterol more than liquid vegetable oils.",
      source: "sun",
    },
  ],
});
