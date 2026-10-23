import { run } from "./lib/populate-herb";

// Spearmint (Mentha spicata), from a 2021 ethnopharmacology review (Mahendran et
// al.), two small hormone studies in women with excess hair growth (Akdoğan 2007;
// Grant 2010), two trials of a spearmint extract (Herrlinger 2018; Falcone 2019),
// the extract's safety data (Lasrado 2017) and rat studies of strong spearmint
// tea (Akdoğan 2003, 2004). No reliable source links spearmint to acne, so it
// isn't on the acne topic. No sourced native range or pregnancy advice.

run({
  name: "Spearmint",
  profile: {
    family: "Lamiaceae",
    genus: "Mentha",
    species: "spicata",
    partsUsed: "The leaves and stems above ground, as tea, extract or essential oil",
  },
  sources: {
    mahendran: {
      title: "The traditional uses, phytochemistry and pharmacology of spearmint (Mentha spicata L.): A review",
      author: "Mahendran G, Verma SK, Rahman LU",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2021-10-05",
      doi: "10.1016/j.jep.2021.114266",
      pmid: "34087400",
      url: "https://pubmed.ncbi.nlm.nih.gov/34087400/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akdogan2007: {
      title: "Effect of spearmint (Mentha spicata Labiatae) teas on androgen levels in women with hirsutism",
      author: "Akdoğan M, Tamer MN, Cüre E, Cüre MC, Köroğlu BK, Delibaş N",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2007-05-01",
      doi: "10.1002/ptr.2074",
      pmid: "17310494",
      url: "https://pubmed.ncbi.nlm.nih.gov/17310494/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    grant: {
      title: "Spearmint herbal tea has significant anti-androgen effects in polycystic ovarian syndrome. A randomized controlled trial",
      author: "Grant P",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2010-02-01",
      doi: "10.1002/ptr.2900",
      pmid: "19585478",
      url: "https://pubmed.ncbi.nlm.nih.gov/19585478/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    herrlinger: {
      title: "Spearmint Extract Improves Working Memory in Men and Women with Age-Associated Memory Impairment",
      author: "Herrlinger KA, Nieman KM, Sanoshy KD, et al.",
      journal: "Journal of Alternative and Complementary Medicine",
      organization: "Journal of Alternative and Complementary Medicine",
      publicationDate: "2018-01-09",
      doi: "10.1089/acm.2016.0379",
      pmid: "29314866",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5779242/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    falcone: {
      title: "The attention-enhancing effects of spearmint extract supplementation in healthy men and women: a randomized, double-blind, placebo-controlled, parallel trial",
      author: "Falcone PH, Nieman KM, Tribby AC, et al.",
      journal: "Nutrition Research",
      organization: "Nutrition Research",
      publicationDate: "2018-12-07",
      doi: "10.1016/j.nutres.2018.11.012",
      pmid: "30802720",
      url: "https://pubmed.ncbi.nlm.nih.gov/30802720/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    lasrado: {
      title: "Safety and tolerability of a dried aqueous spearmint extract",
      author: "Lasrado JA, Nieman KM, Fonseca BA, Sanoshy KD, Schild AL, Herrlinger KA",
      journal: "Regulatory Toxicology and Pharmacology",
      organization: "Regulatory Toxicology and Pharmacology",
      publicationDate: "2017-03-07",
      doi: "10.1016/j.yrtph.2017.03.005",
      pmid: "28286189",
      url: "https://pubmed.ncbi.nlm.nih.gov/28286189/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akdoganKidney: {
      title: "Investigation of biochemical and histopathological effects of Mentha piperita L. and Mentha spicata L. on kidney tissue in rats",
      author: "Akdogan M, Kilinç I, Oncu M, Karaoz E, Delibas N",
      journal: "Human & Experimental Toxicology",
      organization: "Human & Experimental Toxicology",
      publicationDate: "2003-04-01",
      doi: "10.1191/0960327103ht332oa",
      pmid: "12755472",
      url: "https://pubmed.ncbi.nlm.nih.gov/12755472/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akdoganLiver: {
      title: "Investigation of biochemical and histopathological effects of Mentha piperita Labiatae and Mentha spicata Labiatae on liver tissue in rats",
      author: "Akdogan M, Ozguner M, Aydin G, Gokalp O",
      journal: "Human & Experimental Toxicology",
      organization: "Human & Experimental Toxicology",
      publicationDate: "2004-01-01",
      doi: "10.1191/0960327104ht412oa",
      pmid: "15027812",
      url: "https://pubmed.ncbi.nlm.nih.gov/15027812/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Spearmint is grown worldwide for its scent and as a food flavoring. It has traditionally been used for:\n- Colds, cough, asthma and fever\n- Digestive problems\n- Jaundice\n- Weight problems (obesity)",
      source: "mahendran",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, spearmint extracts and essential oil killed some bacteria and fungi, acted as antioxidants, lowered inflammation and helped protect the liver. The review's authors say clinical trials in people are needed to back up these traditional uses.",
      source: "mahendran",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small Turkish study, 21 women with excess body hair (hirsutism), 12 of them with polycystic ovary syndrome (PCOS), drank a cup of spearmint tea twice a day for 5 days. Their free testosterone, a male-type hormone, went down. There was no comparison group.\n\nTechnical detail: taken in the follicular phase; free testosterone fell and LH, FSH and estradiol rose; total testosterone and DHEA-S didn't change significantly.",
      source: "akdogan2007",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a UK trial, 42 women with PCOS and excess body hair drank spearmint tea or a placebo herbal tea twice a day for 30 days. Spearmint lowered testosterone, and women felt they had less unwanted hair. But a doctor's rating of hair growth didn't change. The author says a longer study is needed, because hair takes time to respond.\n\nTechnical detail: randomized, two centers; 41 of 42 completed; free and total testosterone fell (p < 0.05); LH and FSH rose; modified DLQI improved (p < 0.05); Ferriman-Gallwey score unchanged (p = 0.12).",
      source: "grant",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a US trial, 90 adults (average age 59) with mild memory problems linked to aging took 900 mg or 600 mg of a spearmint extract, or a placebo, every day for 90 days. At 900 mg, working memory improved by about 15% compared with placebo, and people said they fell asleep more easily. The extract's maker funded the study and employed some of the authors.\n\nTechnical detail: double-blind, placebo-controlled; extract high in rosmarinic acid; quality of working memory +15% (p = 0.0469), spatial working memory accuracy +9% (p = 0.0456).",
      source: "herrlinger",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a US trial, 142 healthy, active younger adults took 900 mg of the same spearmint extract or a placebo daily for 90 days. Those taking spearmint did slightly better on attention tests. Mood, sleep and quality of life didn't change. Several authors worked for the extract's maker.\n\nTechnical detail: randomized, double-blind, placebo-controlled; sustained attention day 30: 33.3 vs 31.2 (P = .001), day 90: 34.0 vs 32.7 (P = .007).",
      source: "falcone",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Spearmint is generally recognized as safe as a flavoring. In a 90-day trial, 600 or 900 mg a day of a spearmint extract didn't cause more side effects than a placebo, and it didn't change hormone or blood test results.",
      source: "lasrado",
    },
    {
      category: "TOXICITY",
      description:
        "In rats given very strong spearmint tea as their only drink for 30 days, it damaged the kidneys, and the harm was worse at the higher strength. These rats drank it all day for a month, and the effect hasn't been shown in people.\n\nTechnical detail: 20 g/L and 40 g/L Mentha spicata tea; raised plasma urea and creatinine; tubular degeneration.",
      source: "akdoganKidney",
    },
    {
      category: "TOXICITY",
      description:
        "A matching rat study found liver damage from the same strong spearmint teas, worse at the higher strength.\n\nTechnical detail: granular or ballooning hepatocyte degeneration and necrosis at 20 and 40 g/L.",
      source: "akdoganLiver",
    },
  ],
  symptoms: [
    {
      slug: "memory-and-thinking",
      notes:
        "Two trials funded by its maker found a spearmint extract slightly improved working memory in older adults with mild memory problems, and attention in younger adults.",
    },
  ],
});
