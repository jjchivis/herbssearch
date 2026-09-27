import { run } from "./lib/populate-herb";

// Red clover (Trifolium pratense), from verified sources: NCCIH, Memorial
// Sloan Kettering's About Herbs entry and a Cochrane review of phytoestrogens
// for menopausal vasomotor symptoms (Lethaby et al. 2013). Family per GBIF /
// Catalogue of Life. No sourced native range or parts used was found.

run({
  name: "Red Clover",
  profile: { family: "Fabaceae", genus: "Trifolium", species: "pratense" },
  sources: {
    nccih: {
      title: "Red Clover: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/red-clover",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mskcc: {
      title: "Red Clover",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2022-02-10",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/red-clover",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    cochrane: {
      title: "Phytoestrogens for menopausal vasomotor symptoms",
      author: "Lethaby A, Marjoribanks J, Kronenberg F, Roberts H, Eden J, Brown J",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2013-12-01",
      doi: "10.1002/14651858.CD001395.pub4",
      pmid: "24323914",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10247921/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Cow Clover", type: "COMMON_NAME" },
    { name: "Meadow Clover", type: "COMMON_NAME" },
    { name: "Wild Clover", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Red clover has been used in traditional medicine for many health problems, including skin disorders, whooping cough and mastitis (inflammation of the breast).",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies give conflicting results on breast cancer. Some suggest red clover acts like estrogen in ways that could stimulate breast cancer cells, while other compounds in it blocked aromatase, an enzyme the body uses to make estrogen.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies of red clover for menopausal hot flashes have had inconsistent results, and some had a high risk of bias. Research on bone density in women after menopause is limited and mixed. Red clover may help cholesterol levels in women after menopause, but more research is needed. Overall, research hasn't shown clear benefits for any health condition.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 Cochrane review of plant estrogens (phytoestrogens) for hot flashes and night sweats included 43 trials. Combining the 5 trials of a red clover extract (Promensil), there was no significant difference in how often women had hot flashes compared with placebo. The reviewers found no conclusive evidence that phytoestrogen supplements reduce hot flashes or night sweats, and noted a strong placebo effect in most trials. No harmful effects on the lining of the womb or vagina were seen with use for up to 2 years.\n\nTechnical detail: 43 RCTs, 4,364 participants; Promensil vs placebo, daily hot flush frequency MD −0.93 (95% CI −1.95 to 0.10), I² = 31%.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Some trials found red clover isoflavones (plant estrogens) improved menopausal symptoms compared with placebo, but systematic reviews remain inconclusive. One study found an isoflavone-rich red clover extract slowed bone loss.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Red clover extracts appeared safe and were well tolerated in studies lasting up to 2 years.",
      source: "nccih",
    },
    { category: "ADVERSE_EFFECT", description: "Case reports describe serious bleeding.", source: "mskcc" },
    {
      category: "DRUG_INTERACTION",
      description:
        "Red clover may increase the risk of bleeding with blood thinners such as warfarin, may affect medicines that are broken down by liver enzymes, and has been linked to toxicity with methotrexate.\n\nTechnical detail: inhibits multiple cytochrome P450 enzymes.",
      source: "mskcc",
    },
    {
      category: "CONTRAINDICATION",
      description: "People with hormone-sensitive cancers, and people taking blood thinners, should avoid red clover.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "Red clover supplements may be unsafe during pregnancy or while breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "menopause-symptoms",
      notes: "Studied for hot flashes with inconsistent results. A Cochrane review found no clear benefit of a red clover extract over placebo.",
    },
  ],
});
