import { run } from "./lib/populate-herb";

// Cerasee (Momordica charantia, bitter melon), from verified sources: a survey
// of herbal remedy use in western Jamaica (Owusu et al. 2020), a Cochrane
// review in type 2 diabetes (Ooi et al. 2012), Memorial Sloan Kettering's
// About Herbs entry on bitter melon, and a 2023 review (Richter et al., Int J
// Mol Sci). Family per GBIF / Catalogue of Life. No sourced native range was
// found, so none is given.

run({
  name: "Cerasee",
  profile: {
    family: "Cucurbitaceae",
    genus: "Momordica",
    species: "charantia",
    partsUsed: "Different parts of the plant are used in herbal preparations. The fruit is known as bitter melon; its seeds are toxic.",
  },
  sources: {
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
    cochrane: {
      title: "Momordica charantia for type 2 diabetes mellitus",
      author: "Ooi CP, Yassin Z, Hamid TA",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2012-08-01",
      doi: "10.1002/14651858.CD007845.pub3",
      pmid: "22895968",
      url: "https://pubmed.ncbi.nlm.nih.gov/22895968/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    mskcc: {
      title: "Bitter Melon",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2021-12-22",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/bitter-melon",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    richter: {
      title: "The Effects of Momordica charantia on Type 2 Diabetes Mellitus and Alzheimer's Disease",
      author: "Richter E, Geetha T, Burnett D, Broderick TL, Babu JR",
      journal: "International Journal of Molecular Sciences",
      organization: "International Journal of Molecular Sciences",
      publicationDate: "2023-02-01",
      doi: "10.3390/ijms24054643",
      pmid: "36902074",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10002567/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bitter Melon", type: "COMMON_NAME" },
    { name: "Bitter Gourd", type: "COMMON_NAME" },
    { name: "Karela", type: "COMMON_NAME" },
    { name: "Balsam Pear", type: "COMMON_NAME" },
    { name: "Bitter Cucumber", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Vicine", slug: "vicine", type: "glycoside" }],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "In western Jamaica, cerasee is among the most commonly reported herbal remedies for both high blood pressure and type 2 diabetes.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Used to lower blood sugar by indigenous communities in East Africa, as well as in Asia, India and South America.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In a 2017 survey of clinic patients in western Jamaica who had high blood pressure or type 2 diabetes, cerasee was among the most commonly reported herbal remedies for both conditions.",
      source: "owusu",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Bitter melon is used to lower blood sugar, and to treat diabetes and related conditions, by indigenous communities in Asia, South America, India and East Africa.",
      source: "richter",
    },
    {
      category: "TRADITIONAL",
      summary: "It has traditionally been used for diabetes, cancer, viral infections and immune disorders.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies suggest natural compounds in bitter melon may lower blood sugar and increase insulin release. More studies are needed to show whether this happens in people.",
      source: "richter",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab studies suggest bitter melon has anticancer and antiviral effects, but studies of its effects on cancer in people are lacking.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2012 Cochrane review of 4 trials with 479 people with type 2 diabetes found bitter melon preparations didn't improve blood sugar control compared with placebo, or compared with the diabetes medicines metformin or glibenclamide. The trials lasted up to 3 months and were at high risk of bias. The reviewers concluded there isn't enough evidence, and that better-standardized preparations need to be studied. No serious side effects were reported.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Limited data suggest bitter melon may help lower blood sugar, but a review concluded the evidence is low quality with little safety data. One study found it had no effect on the immune system of women with cervical cancer.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Bitter melon may add to the effects of insulin and other diabetes medicines. It may also make some medicines more toxic by interfering with the proteins that clear them from the body.\n\nTechnical detail: P-glycoprotein substrates (increased toxicity); inhibits CYP2C9.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "Avoid bitter melon during pregnancy. Animal studies suggest it may cause birth defects.",
      source: "mskcc",
    },
    {
      category: "TOXICITY",
      description: "The seeds contain vicine, which has caused headache, fever, stomach pain and coma.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Bitter melon can cause stomach and gut problems. Case reports describe irregular heartbeat, stomach ulcers and severe kidney injury.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A common traditional remedy for high blood pressure in Jamaica. This use hasn't been confirmed by research." },
    {
      slug: "high-blood-sugar",
      notes: "Widely used traditionally for diabetes, but a Cochrane review found too little evidence that it works. It may add to the effects of diabetes medicines.",
    },
  ],
});
