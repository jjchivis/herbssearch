import { run } from "./lib/populate-herb";

// Saffron (Crocus sativus), from a 2019 meta-analysis of saffron versus placebo
// and fluoxetine for depression (Khaksarian et al.) and a 2026 systematic review
// of saffron's side effects in 102 human trials (Hasheminasab et al.).

run({
  name: "Saffron",
  profile: {
    family: "Iridaceae",
    genus: "Crocus",
    species: "sativus",
    nativeRange: "Native to regions such as Spain, India and Iran; Iran produces about 90% of the world's saffron",
    partsUsed: "The dried stigmas (the red threads inside the flower)",
  },
  sources: {
    khaksarian: {
      title: "The efficacy of Crocus sativus (Saffron) versus placebo and Fluoxetine in treating depression: a systematic review and meta-analysis",
      author: "Khaksarian M, Behzadifar M, Behzadifar M, et al.",
      journal: "Psychology Research and Behavior Management",
      publicationDate: "2019-04-23",
      doi: "10.2147/PRBM.S199343",
      pmid: "31118846",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6503633/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    hasheminasab: {
      title: "Adverse Events of Saffron (Crocus sativus L.): Systematic Review of Current Evidence",
      author: "Hasheminasab FS, Hajimonfarednejad M, Najibi SM, Hashempur MH",
      journal: "Health Science Reports",
      publicationDate: "2026-04-27",
      doi: "10.1002/hsr2.72212",
      pmid: "42057871",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13121846/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Crocus sativus", type: "COMMON_NAME" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used for thousands of years in traditional Chinese medicine." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Saffron is a costly spice made from the dried red threads (stigmas) of the saffron crocus flower. It has been used for thousands of years in traditional Chinese medicine, and medieval Persian doctors valued it for low mood, anxiety, pain and sex drive.",
      source: "hasheminasab",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2019 review combined 8 small trials in people with depression. Saffron worked about as well as fluoxetine (a common antidepressant), and looked better than a dummy pill, though that result was only just short of being clear. All the trials were done in Iran and lasted 6 to 12 weeks, so the reviewers said more and longer high-quality studies, in other countries too, are needed.\n\nTechnical detail: saffron vs placebo SMD −0.86 (95% CI −1.73 to 0.00, 4 trials); saffron vs fluoxetine 20–40 mg SMD 0.11 (95% CI −0.20 to 0.43, 4 trials).",
      source: "khaksarian",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "A 2026 review of 102 trials found saffron is generally well tolerated at usual doses (15–100 mg a day) for short periods. About 1 in 6 people had a side effect, most often mild stomach and gut problems that went away on their own. Headache, less appetite, nausea and dry mouth were also reported. Saffron in normal food amounts (usually under 30 mg a day) is considered safe.",
      source: "hasheminasab",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Saffron may affect blood clotting. One person taking the blood thinner rivaroxaban had sudden bleeding that stopped when both were stopped. Take extra care if you use blood thinners or anti-platelet medicines, and watch for unusual bleeding.",
      source: "hasheminasab",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "The reviewers advise extra caution with medicinal doses in older people and people with mental health conditions, and supervision by a doctor for high doses or long-term use.",
      source: "hasheminasab",
    },
    {
      category: "PREGNANCY",
      description: "There's little safety information on medicinal doses of saffron in pregnancy or breastfeeding, so caution is advised.",
      source: "hasheminasab",
    },
  ],
});
