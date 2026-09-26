import { run } from "./lib/populate-herb";

// Hibiscus (Hibiscus sabdariffa, roselle), from verified sources: three
// systematic reviews on blood pressure (Wahabi et al. 2010; Serban et al.
// 2015; Ellis et al. 2022) and a phytochemical and pharmacological review
// (Da-Costa-Rocha et al. 2014). Family per GBIF / Catalogue of Life. No source
// covering pregnancy or breastfeeding was found, so none is stated.

run({
  name: "Hibiscus",
  profile: {
    family: "Malvaceae",
    genus: "Hibiscus",
    species: "sabdariffa",
    nativeRange: "Widely grown in many African and Southeast Asian countries",
    partsUsed: "The calyces (the cup of leaf-like parts at the base of the flower), dried for tea and extracts",
  },
  sources: {
    wahabi: {
      title: "The effectiveness of Hibiscus sabdariffa in the treatment of hypertension: a systematic review",
      author: "Wahabi HA, Alansary LA, Al-Sabban AH, Glasziou P",
      journal: "Phytomedicine",
      organization: "Phytomedicine",
      publicationDate: "2010-02-01",
      doi: "10.1016/j.phymed.2009.09.002",
      pmid: "19801187",
      url: "https://pubmed.ncbi.nlm.nih.gov/19801187/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    serban: {
      title: "Effect of sour tea (Hibiscus sabdariffa L.) on arterial hypertension: a systematic review and meta-analysis of randomized controlled trials",
      author: "Serban C, Sahebkar A, Ursoniu S, Andrica F, Banach M",
      journal: "Journal of Hypertension",
      organization: "Journal of Hypertension",
      publicationDate: "2015-06-01",
      doi: "10.1097/HJH.0000000000000585",
      pmid: "25875025",
      url: "https://pubmed.ncbi.nlm.nih.gov/25875025/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    ellis: {
      title: "A systematic review and meta-analysis of the effects of Hibiscus sabdariffa on blood pressure and cardiometabolic markers",
      author: "Ellis LR, Zulfiqar S, Holmes M, Marshall L, Dye L, Boesch C",
      journal: "Nutrition Reviews",
      organization: "Nutrition Reviews",
      publicationDate: "2022-05-01",
      doi: "10.1093/nutrit/nuab104",
      pmid: "34927694",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9086798/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    dacosta: {
      title: "Hibiscus sabdariffa L. – a phytochemical and pharmacological review",
      author: "Da-Costa-Rocha I, Bonnlaender B, Sievers H, Pischel I, Heinrich M",
      journal: "Food Chemistry",
      organization: "Food Chemistry",
      publicationDate: "2014-12-01",
      doi: "10.1016/j.foodchem.2014.05.002",
      pmid: "25038696",
      url: "https://pubmed.ncbi.nlm.nih.gov/25038696/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Roselle", type: "COMMON_NAME" },
    { name: "Sour Tea", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Delphinidin-3-sambubioside", slug: "delphinidin-3-sambubioside", type: "anthocyanin" },
    { name: "Cyanidin-3-sambubioside", slug: "cyanidin-3-sambubioside", type: "anthocyanin" },
    { name: "Hibiscus Acid", slug: "hibiscus-acid", type: "organic acid" },
    { name: "Protocatechuic Acid", slug: "protocatechuic-acid", type: "phenolic acid" },
  ],
  traditions: [
    {
      slug: "african-traditional-medicine",
      notes: "Widely grown in many African and Southeast Asian countries, where it's drunk as a tea and used in traditional medicine.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Hibiscus (roselle) has traditionally been used as a food, in hot and cold drinks, as a flavoring and as an herbal medicine.",
      source: "dacosta",
    },
    {
      category: "TRADITIONAL",
      summary: "Hibiscus is drunk hot or cold in many countries and is used in folk medicine, including for high blood pressure.",
      source: "wahabi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, hibiscus extracts showed antibacterial and antioxidant effects, protected the kidneys and liver, increased urination, and affected cholesterol, blood sugar and blood pressure. Possible reasons include blocking ACE, an enzyme that raises blood pressure (the same target as some blood pressure medicines), and relaxing blood vessels. Many of these studies used extracts whose contents weren't well described.\n\nTechnical detail: inhibition of α-glucosidase, α-amylase and angiotensin-converting enzyme; direct vasorelaxant effect or calcium channel modulation.",
      source: "dacosta",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2010 review of 4 trials with 390 people found hibiscus lowered blood pressure more than black tea, but less than the blood pressure medicines captopril and lisinopril. The trials were short and mostly poor quality, so the reviewers concluded they don't provide reliable evidence to recommend hibiscus for high blood pressure.",
      source: "wahabi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2015 review of 5 trials with 390 people found hibiscus lowered systolic blood pressure (the top number) by about 7.6 mm Hg and diastolic (the bottom number) by about 3.5 mm Hg. The drops were bigger in people whose blood pressure started higher. The authors called for better-designed trials.\n\nTechnical detail: fixed-effect meta-regression; SBP WMD −7.58 mm Hg (95% CI −9.69 to −5.46); DBP WMD −3.53 mm Hg (95% CI −5.16 to −1.89).",
      source: "serban",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 17 trials found hibiscus lowered systolic blood pressure by about 7 mm Hg more than placebo, most in people with raised blood pressure, and about as much as blood pressure medicines in trials that compared them. It also lowered LDL (\"bad\") cholesterol slightly compared with other teas and placebo. The authors said more studies are needed to find the right dose and length of use.\n\nTechnical detail: SBP −7.10 mm Hg (95% CI −13.00 to −1.20) vs placebo, I² = 95%; vs medication SBP 2.13 mm Hg (95% CI −2.81 to 7.06); LDL −6.76 mg/dL (95% CI −13.45 to −0.07).",
      source: "ellis",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "In rats, hibiscus taken with the water pill hydrochlorothiazide greatly increased urine output, which raises the risk of dehydration, though the drug dose used doesn't match human doses. Because hibiscus acts on the same enzyme as ACE-inhibitor blood pressure medicines such as ramipril, how the two interact still needs to be studied.",
      source: "ellis",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Hibiscus is considered safe to consume. In the trials reviewed, one study reported mild stomach symptoms that went away within a week; no other side effects were reported at doses up to 10 g a day. Animal studies found no toxicity at high doses.",
      source: "ellis",
    },
    { category: "ADVERSE_EFFECT", description: "Hibiscus has an excellent safety and tolerability record.", source: "dacosta" },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "Reviews of trials found hibiscus tea or extract lowered blood pressure, though many trials were small or of poor quality.",
    },
    { slug: "high-cholesterol", notes: "A 2022 review found a small drop in LDL cholesterol." },
  ],
});
