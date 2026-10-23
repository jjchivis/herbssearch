import { run } from "./lib/populate-herb";

// Review sweep, batch A: systematic reviews and meta-analyses from PubMed Central
// for pages that had no government source or systematic review. Searched:
// Andrographis, Dan Shen, Dong Quai, Gotu Kola, Haritaki, Neem, Triphala, Turkey
// Tail, Rooibos, Rosehips, Soursop, Lemongrass. No single-herb reviews of human
// studies were found for Dong Quai (formulas only), Haritaki, Neem or Lemongrass.

const S = "systematic_review" as const;
const T2 = "TIER_2_SYSTEMATIC_REVIEW" as const;

run(
  {
    name: "Andrographis",
    sources: {
      hu: {
        title: "Andrographis paniculata (Chuān Xīn Lián) for symptomatic relief of acute respiratory tract infections in adults and children: A systematic review and meta-analysis",
        author: "Hu XY, Wu RH, Logue M, et al.",
        journal: "PLoS One",
        publicationDate: "2017-08-04",
        doi: "10.1371/journal.pone.0181780",
        pmid: "28783743",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5544222/",
        sourceType: S,
        tier: T2,
      },
      worakunphanich: {
        title: "Safety of Andrographis paniculata: A systematic review and meta-analysis",
        author: "Worakunphanich W, Thavorncharoensap M, Youngkong S, Thadanipon K, Thakkinstian A",
        journal: "Pharmacoepidemiology and Drug Safety",
        publicationDate: "2021-01-09",
        doi: "10.1002/pds.5190",
        pmid: "33372366",
        url: "https://pubmed.ncbi.nlm.nih.gov/33372366/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2017 review of 33 trials with 7,175 people found andrographis, taken by mouth, eased cough and sore throat from colds and other short-term chest and throat infections better than a dummy pill. Many trials used commercial products, some mixed with other herbs, and rarely described how they were made.\n\nTechnical detail: cough SMD −0.39 (95% CI −0.67 to −0.10); sore throat SMD −1.13 (−1.37 to −0.89).",
        source: "hu",
      },
    ],
    safety: [
      {
        category: "ADVERSE_EFFECT",
        description:
          "A 2021 review of andrographis taken by mouth found serious side effects were very rare (about 0.02 per 1,000 people in trials), but mild ones were common (about 1 in 10 in trials), mostly stomach and gut upset and skin reactions.",
        source: "worakunphanich",
      },
    ],
    symptoms: [
      { slug: "sore-throat", notes: "A review of 33 trials found andrographis eased sore throat from colds and similar infections." },
      { slug: "cough", notes: "A review of 33 trials found andrographis eased cough from colds and similar infections." },
    ],
  },
  {
    name: "Dan Shen",
    sources: {
      zheng: {
        title: "Effects and safety of Salvia miltiorrhiza on the improvement of renal function, inflammatory factors, and vascular endothelium in patients with diabetic kidney disease: a meta-analysis and systematic review",
        author: "Zheng S, Zhang M, Wang W, Zhang Q, Zhang N",
        journal: "Frontiers in Pharmacology",
        publicationDate: "2025-09-12",
        doi: "10.3389/fphar.2025.1556368",
        pmid: "41019991",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12464425/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2025 review of 21 Chinese trials with 1,970 people with kidney disease caused by diabetes found that adding dan shen products to usual treatment improved blood and urine measures of kidney function and lowered markers of inflammation.\n\nTechnical detail: reduced serum creatinine, blood urea nitrogen, urinary albumin excretion, 24-hour urine protein, CRP, TNF-α, IL-6 and endothelin-1.",
        source: "zheng",
      },
    ],
  },
  {
    name: "Gotu Kola",
    sources: {
      arribas: {
        title: "A Systematic Review of the Effect of Centella asiatica on Wound Healing",
        author: "Arribas-López E, Zand N, Ojo O, Snowden MJ, Kochhar T",
        journal: "International Journal of Environmental Research and Public Health",
        publicationDate: "2022-03-10",
        doi: "10.3390/ijerph19063266",
        pmid: "35328954",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8956065/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2022 review found 4 clinical trials of gotu kola for wound healing. They suggest it may help wounds close and heal, with less redness, possibly by boosting collagen and new blood vessels and calming inflammation. The reviewers say more studies are needed.",
        source: "arribas",
      },
    ],
    symptoms: [{ slug: "wounds-and-burns", notes: "A review of 4 trials suggests gotu kola may help wounds heal; more studies are needed." }],
  },
  {
    name: "Triphala",
    sources: {
      aljameel: {
        title: "Effect of triphala mouthrinse on plaque and gingival inflammation: A systematic review and meta-analysis of randomized controlled trials",
        author: "AlJameel AH, Almalki SA",
        journal: "International Journal of Dental Hygiene",
        publicationDate: "2020-05-20",
        doi: "10.1111/idh.12444",
        pmid: "32383334",
        url: "https://pubmed.ncbi.nlm.nih.gov/32383334/",
        sourceType: S,
        tier: T2,
      },
      phimarn: {
        title: "Effects of Triphala on Lipid and Glucose Profiles and Anthropometric Parameters: A Systematic Review",
        author: "Phimarn W, Sungthong B, Itabe H",
        journal: "Journal of Evidence-Based Integrative Medicine",
        publicationDate: "2021-01-01",
        doi: "10.1177/2515690X211011038",
        pmid: "33886393",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8072855/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2020 review of 7 trials found a triphala mouthwash reduced gum inflammation and plaque about as well as chlorhexidine, a standard antiseptic mouthwash, in people with gum disease caused by plaque. The results varied a lot between trials.",
        source: "aljameel",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2021 review of 12 trials with 749 people found triphala lowered LDL (\"bad\") cholesterol, total cholesterol and triglycerides in some trials, and reduced weight and waist size in people with obesity. It lowered fasting blood sugar in people with diabetes but not in those without it. No serious side effects were reported. Larger, well-designed trials are needed.",
        source: "phimarn",
      },
    ],
    symptoms: [{ slug: "high-cholesterol", notes: "A review of 12 trials found triphala lowered cholesterol and triglycerides in some studies." }],
  },
  {
    name: "Turkey Tail",
    sources: {
      cochrane: {
        title: "Coriolus (Trametes) versicolor mushroom to reduce adverse effects from chemotherapy or radiotherapy in people with colorectal cancer",
        author: "Pilkington K, Wieland LS, Teng L, Jin XY, Storey D, Liu JP",
        journal: "Cochrane Database of Systematic Reviews",
        publicationDate: "2022-11-29",
        doi: "10.1002/14651858.CD012053.pub2",
        pmid: "36445793",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9707730/",
        sourceType: S,
        tier: T2,
      },
      eliza: {
        title: "Efficacy of Yun Zhi (Coriolus versicolor) on survival in cancer patients: systematic review and meta-analysis",
        author: "Eliza WL, Fai CK, Chung LP",
        journal: "Recent Patents on Inflammation & Allergy Drug Discovery",
        publicationDate: "2012-01-01",
        doi: "10.2174/187221312798889310",
        pmid: "22185453",
        url: "https://pubmed.ncbi.nlm.nih.gov/22185453/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2022 Cochrane review of 7 trials (1,569 people, mostly in Japan) looked at a turkey tail extract (PSK) given with treatment for bowel cancer. It's uncertain whether it reduces chemotherapy side effects such as low white blood cells, mouth sores, nausea or tiredness. There was a small improvement in 5-year survival: about 1 extra person alive for every 16 treated. The evidence was of low to very low certainty.\n\nTechnical detail: 5-year survival RR 1.08 (95% CI 1.01 to 1.15; 3 studies, 1,094 people).",
        source: "cochrane",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "An older 2012 review of 13 trials found that adding turkey tail (yun zhi) to standard cancer treatment reduced 5-year deaths by 9%, mainly in breast, stomach and bowel cancer treated with chemotherapy, but not in oesophageal or nasopharyngeal cancer.",
        source: "eliza",
      },
    ],
  },
  {
    name: "Rooibos",
    sources: {
      sasaki: {
        title: "A Beneficial Role of Rooibos in Diabetes Mellitus: A Systematic Review and Meta-Analysis",
        author: "Sasaki M, Nishida N, Shimada M",
        journal: "Molecules",
        publicationDate: "2018-04-06",
        doi: "10.3390/molecules23040839",
        pmid: "29642387",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6017582/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary:
          "A 2018 review combined 12 studies in diabetic rats and mice. Rooibos extracts and their plant compounds lowered blood sugar, most strongly with extracts rich in a compound called PPAG. This hasn't been confirmed in people.",
        source: "sasaki",
      },
    ],
  },
  {
    name: "Rosehips",
    sources: {
      christensen: {
        title: "Does the hip powder of Rosa canina (rosehip) reduce pain in osteoarthritis patients? - a meta-analysis of randomized controlled trials",
        author: "Christensen R, Bartels EM, Altman RD, Astrup A, Bliddal H",
        journal: "Osteoarthritis and Cartilage",
        publicationDate: "2008-04-14",
        doi: "10.1016/j.joca.2008.03.001",
        pmid: "18407528",
        url: "https://pubmed.ncbi.nlm.nih.gov/18407528/",
        sourceType: S,
        tier: T2,
      },
      belkhelladi: {
        title: "Effects of Daily Intake of Rosehip Extract on Low-Density Lipoprotein Cholesterol and Blood Glucose Levels: A Systematic Review",
        author: "Belkhelladi M",
        journal: "Cureus",
        publicationDate: "2023-12-28",
        doi: "10.7759/cureus.51225",
        pmid: "38283449",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10821714/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2008 review of 3 trials with 287 people with osteoarthritis found rosehip powder reduced pain more than a dummy pill: people taking it were about twice as likely to improve, or 1 extra person helped for every 6 treated. All three trials were supported by the product's maker, and the authors called the data sparse.\n\nTechnical detail: effect size 0.37 (95% CI 0.13 to 0.60); odds ratio 2.19.",
        source: "christensen",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2023 review of trials of daily rosehip extract found mixed effects on cholesterol and blood sugar, with some studies showing benefits. More research is needed on the best dose and length of use.",
        source: "belkhelladi",
      },
    ],
    symptoms: [{ slug: "joint-discomfort", notes: "A review of 3 maker-supported trials found rosehip powder eased osteoarthritis pain." }],
  },
  {
    name: "Soursop",
    sources: {
      chan: {
        title: "The safety and tolerability of Annona muricata leaf extract: a systematic review",
        author: "Chan WJ, McLachlan AJ, Hanrahan JR, Harnett JE",
        journal: "Journal of Pharmacy and Pharmacology",
        publicationDate: "2019-10-28",
        doi: "10.1111/jphp.13182",
        pmid: "31659754",
        url: "https://pubmed.ncbi.nlm.nih.gov/31659754/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [],
    safety: [
      {
        category: "TOXICITY",
        description:
          "A 2019 review of lab, animal and human studies of soursop leaf extract found it was generally well tolerated, though some animal studies showed effects on the nerves at high doses. The authors note animal doses may not translate directly to people, and studies in people with cancer are still needed.",
        source: "chan",
      },
    ],
  },
);
