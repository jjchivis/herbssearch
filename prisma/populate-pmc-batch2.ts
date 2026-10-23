import { run } from "./lib/populate-herb";

// PubMed Central sweep, batch 2. Searched: Drynaria Rhizome, English Plantain,
// Gastrodia Elata Rhizome, Glehnia Root, Honeysuckle, Hops, Hyssop, Indian Trumpet
// Tree, Isatis Root, Kadsura Pepper Stem. No human studies were found for Glehnia
// Root or Kadsura Pepper Stem.

const P = "peer_reviewed" as const;
const S = "systematic_review" as const;
const T2 = "TIER_2_SYSTEMATIC_REVIEW" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run(
  {
    name: "Drynaria Rhizome",
    sources: {
      lu: {
        title: "Drynaria fortunei improves lipid profiles of elderly patients with postmenopausal osteoporosis via regulation of Notch1-NLRP3 inflammasome-mediated inflammation",
        author: "Lu L, Wang Z, Zhang H, Liu T, Fang H",
        journal: "Gynecological Endocrinology",
        publicationDate: "2021-12-15",
        doi: "10.1080/09513590.2021.2015760",
        pmid: "34907823",
        url: "https://pubmed.ncbi.nlm.nih.gov/34907823/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a Chinese trial, 80 older women with osteoporosis after menopause and high blood fats were randomly assigned to drynaria or a control group, and followed for 12 months. Drynaria improved bone density and blood fats, and kept inflammation markers from rising as they did in the comparison group.",
        source: "lu",
      },
    ],
    symptoms: [{ slug: "high-cholesterol", notes: "In one trial in older women with osteoporosis, drynaria improved blood fats and bone density." }],
  },
  {
    name: "English Plantain",
    sources: {
      ferrazzano: {
        title: "Determination of the in vitro and in vivo antimicrobial activity on salivary Streptococci and Lactobacilli and chemical characterisation of the phenolic content of a Plantago lanceolata infusion",
        author: "Ferrazzano GF, Cantile T, Roberto L, et al.",
        journal: "BioMed Research International",
        publicationDate: "2015-02-15",
        doi: "10.1155/2015/286817",
        pmid: "25767805",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4341861/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small 2015 Italian study, people who rinsed with an English plantain tea mouthwash for 7 days had a bigger drop in tooth-decay-linked streptococcus bacteria in their saliva than those using a dummy rinse. The authors suggest it could help control decay-causing bacteria.",
        source: "ferrazzano",
      },
    ],
  },
  {
    name: "Gastrodia Elata Rhizome",
    sources: {
      zhouMigraine: {
        title: "Effectiveness of gastrodin for migraine: A meta-analysis",
        author: "Zhou X, Shao J, Xie X, Xu Y, Shao T, Jin Z",
        journal: "Frontiers in Neurology",
        publicationDate: "2022-08-25",
        doi: "10.3389/fneur.2022.939401",
        pmid: "36090869",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9454298/",
        sourceType: S,
        tier: T2,
      },
      bai: {
        title: "Efficacy and safety of gastrodin in preventing postoperative delirium following cardiac surgery: a randomized placebo controlled clinical trial",
        author: "Bai YX, Wu HL, Xie WL, et al.",
        journal: "Critical Care",
        publicationDate: "2025-03-11",
        doi: "10.1186/s13054-025-05331-9",
        pmid: "40069830",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11895371/",
        sourceType: P,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Gastrodin is the main active compound of gastrodia (tianma). A 2022 review of 16 Chinese trials with 1,332 people found gastrodin helped migraine: more people improved, and attacks were less painful, less frequent and shorter, with no safety concerns reported.\n\nTechnical detail: response RR 1.21 (95% CI 1.17 to 1.27); pain MD −1.65 (−2.28 to −1.02).",
        source: "zhouMigraine",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2025 Chinese trial, 155 adults having heart bypass surgery were given gastrodin by drip (600 mg twice a day) or a dummy drip for a week. Confusion after surgery (delirium) affected 19.5% of the gastrodin group versus 35.9% of the dummy group, and side effects were no more common.\n\nTechnical detail: relative risk 0.54 (95% CI 0.32 to 0.93).",
        source: "bai",
      },
    ],
    symptoms: [{ slug: "headache", notes: "A review of 16 trials found gastrodin, its main compound, reduced migraine pain and frequency." }],
  },
  {
    name: "Honeysuckle",
    sources: {
      liu: {
        title: "Safety and efficacy of honeysuckle therapy for epidermal growth factor receptor inhibitor-related rash: a systematic review and meta-analysis",
        author: "Liu LF, Liu S, Jiao J, Zhang FY",
        journal: "Frontiers in Pharmacology",
        publicationDate: "2026-08-31",
        doi: "10.3389/fphar.2026.1875649",
        pmid: "42741450",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13572728/",
        sourceType: S,
        tier: T2,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Some cancer drugs (EGFR inhibitors) often cause an acne-like rash. A 2026 review of 7 trials with 534 people found honeysuckle treatments, used on the skin or by mouth, reduced the chance of a more severe rash and helped existing rashes, with no serious side effects. Some trials used honeysuckle alone and others mixed formulas, and the evidence was of low quality.\n\nTechnical detail: grade ≥2 rash RR 0.43 (95% CI 0.29 to 0.65); treatment response RR 1.35 (1.13 to 1.62).",
        source: "liu",
      },
    ],
    symptoms: [{ slug: "skin-irritation", notes: "Low-quality trials suggest honeysuckle may ease the rash caused by some cancer drugs." }],
  },
  {
    name: "Hops",
    sources: {
      vahedpoorfard: {
        title: "Effect of Humulus lupulus L. (Hop) on Postmenopausal Sexual Dysfunction: A Randomized Clinical Trial",
        author: "Vahedpoorfard Z, Ferdosi S, Rahimi H, Motedayyen H",
        journal: "International Journal of Clinical Practice",
        publicationDate: "2023-04-17",
        doi: "10.1155/2023/9528335",
        pmid: "37101856",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10125751/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2023 Iranian trial, 63 women after menopause with sexual problems used either a vaginal gel with hop extract or vaginal estrogen cream for about 2 months. Both groups improved by a similar amount on a standard sexual function questionnaire, and no side effects were reported with the hop gel.",
        source: "vahedpoorfard",
      },
    ],
    symptoms: [{ slug: "menopause-symptoms", notes: "A vaginal hop gel worked about as well as vaginal estrogen for sexual problems after menopause in one trial." }],
  },
  {
    name: "Hyssop",
    sources: {
      daneshfard: {
        title: "Effect of Hyssop (Hyssopus officinalis) Syrup on Mild to Moderate Asthma: A Randomized Double-Blind Placebo-Controlled Trial",
        author: "Daneshfard B, Amini F, Jaladat AM, et al.",
        journal: "Tanaffos",
        publicationDate: "2024-02-01",
        pmid: "39959798",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11825080/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2024 Iranian trial, 60 people with mild to moderate asthma took hyssop syrup or a plain sugar syrup twice a day for 4 weeks, alongside their usual treatment. People whose cough brought up mucus improved in breathing tests, asthma control and wheezing, but people with a dry cough got worse. The authors say it may suit only asthma with a productive cough.",
        source: "daneshfard",
      },
    ],
    symptoms: [{ slug: "asthma-and-wheezing", notes: "In one trial, hyssop syrup helped asthma with a mucus-producing cough but worsened it in people with a dry cough." }],
  },
  {
    name: "Indian Trumpet Tree",
    sources: {
      lopresti: {
        title: "Effects of an Oroxylum indicum Extract (Sabroxy) on Cognitive Function in Adults With Self-reported Mild Cognitive Impairment: A Randomized, Double-Blind, Placebo-Controlled Study",
        author: "Lopresti AL, Smith SJ, Majeed M, Drummond PD",
        journal: "Frontiers in Aging Neuroscience",
        publicationDate: "2021-08-31",
        doi: "10.3389/fnagi.2021.728360",
        pmid: "34531736",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8438240/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 12-week Australian trial, 82 older adults with self-reported memory problems took 500 mg of an Indian trumpet tree extract or a dummy pill twice a day. The extract improved some memory tests, such as recalling words and numbers, but not most other thinking tests or overall scores. It was well tolerated, though mild stomach complaints and headaches were a little more common.",
        source: "lopresti",
      },
    ],
    symptoms: [{ slug: "memory-and-thinking", notes: "In one trial, an extract improved some memory tests in older adults with mild memory complaints." }],
  },
  {
    name: "Isatis Root",
    sources: {
      you: {
        title: "Effect of extracts from indigowood root (Isatis indigotica Fort.) on immune responses in radiation-induced mucositis",
        author: "You WC, Hsieh CC, Huang JT",
        journal: "Journal of Alternative and Complementary Medicine",
        publicationDate: "2009-07-01",
        doi: "10.1089/acm.2008.0322",
        pmid: "19534614",
        url: "https://pubmed.ncbi.nlm.nih.gov/19534614/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small 2009 trial in Taiwan, 20 people having radiation for head and neck cancer gargled and swallowed either an isatis root preparation or salt water. The isatis group had milder mouth sores, less loss of appetite and less trouble swallowing.",
        source: "you",
      },
    ],
  },
);
