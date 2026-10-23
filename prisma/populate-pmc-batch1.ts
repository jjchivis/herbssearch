import { run } from "./lib/populate-herb";

// PubMed Central sweep, batch 1: human studies found for pages that had none.
// Searched: Aster Root, Bai Zhi, Bamboo Leaf, Bladderwrack, Chaney Root,
// Chickweed, Cleavers, Clematis Root, Codonopsis, Cramp Bark. No single-herb
// human studies were found for Aster Root, Bamboo Leaf, Chaney Root, Chickweed,
// Cleavers or Codonopsis (only multi-herb formulas or none).

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run(
  {
    name: "Bai Zhi",
    sources: {
      gong: {
        title: "Clinical effects of Angelica dahurica dressing on patients with I-II phase pressure sores",
        author: "Gong F, Niu J, Pei X",
        journal: "Die Pharmazie",
        publicationDate: "2016-11-01",
        doi: "10.1691/ph.2016.6704",
        pmid: "29441973",
        url: "https://pubmed.ncbi.nlm.nih.gov/29441973/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2016 Chinese trial, 98 people with early-stage pressure sores (bedsores) were randomly given either a bai zhi dressing or an antifungal cream (clotrimazole) for 4 weeks, along with nursing care. More sores improved with the bai zhi dressing. It was a single small trial.\n\nTechnical detail: stage I–II pressure ulcers; higher total effective rate; raised IL-8, EGF, TGF-β and VEGF.",
        source: "gong",
      },
    ],
    symptoms: [{ slug: "wounds-and-burns", notes: "In one small trial, a bai zhi dressing helped early pressure sores more than an antifungal cream." }],
  },
  {
    name: "Bladderwrack",
    sources: {
      geurts: {
        title: "The Effect of Sargassum fusiforme and Fucus vesiculosus on Continuous Glucose Levels in Overweight Patients with Type 2 Diabetes Mellitus: A Feasibility Randomized, Double-Blind, Placebo-Controlled Trial",
        author: "Geurts KAM, Meijer S, Roeters van Lennep JE, et al.",
        journal: "Nutrients",
        publicationDate: "2024-06-12",
        doi: "10.3390/nu16121837",
        pmid: "38931192",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11206271/",
        sourceType: P,
        tier: T3,
      },
      murray: {
        title: "A Single-Dose of a Polyphenol-Rich Fucus Vesiculosus Extract is Insufficient to Blunt the Elevated Postprandial Blood Glucose Responses Exhibited by Healthy Adults in the Evening: A Randomised Crossover Trial",
        author: "Murray M, Dordevic AL, Ryan L, Bonham MP",
        journal: "Antioxidants",
        publicationDate: "2019-02-24",
        doi: "10.3390/antiox8020049",
        pmid: "30813480",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6406275/",
        sourceType: P,
        tier: T3,
      },
      vodouhe: {
        title: "Marginal Impact of Brown Seaweed Ascophyllum nodosum and Fucus vesiculosus Extract on Metabolic and Inflammatory Response in Overweight and Obese Prediabetic Subjects",
        author: "Vodouhè M, Marois J, Guay V, et al.",
        journal: "Marine Drugs",
        publicationDate: "2022-02-26",
        doi: "10.3390/md20030174",
        pmid: "35323474",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8951415/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small 2024 trial, 36 people with type 2 diabetes added 5 g of dried bladderwrack, another brown seaweed, or a control seaweed to their diet daily for 5 weeks. Bladderwrack didn't change average blood sugar, weight or blood fats compared with the control.",
        source: "geurts",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2019 trial with 18 healthy adults, a single dose of a polyphenol-rich bladderwrack extract taken before an evening meal didn't lower the rise in blood sugar overall, though peak blood sugar was lower in women.",
        source: "murray",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 12-week trial, 56 overweight people with prediabetes on a weight-loss diet took 500 mg a day of an extract combining bladderwrack with another brown seaweed (Ascophyllum nodosum), or a dummy pill. It didn't change blood sugar, but produced small drops in insulin output and heart rate and limited a rise in an inflammation marker.",
        source: "vodouhe",
      },
    ],
  },
  {
    name: "Clematis Root",
    sources: {
      kimHalitosis: {
        title: "Efficacy of Clematis chinensis Osbeck extract mouthwash as a complementary therapy for halitosis: A randomized, double-blind controlled trial",
        author: "Kim YR, Nam SH",
        journal: "Complementary Therapies in Medicine",
        publicationDate: "2026-02-28",
        doi: "10.1016/j.ctim.2026.103340",
        pmid: "41771359",
        url: "https://pubmed.ncbi.nlm.nih.gov/41771359/",
        sourceType: P,
        tier: T3,
      },
      kimCaries: {
        title: "Clinical evaluation of a Clematis chinensis Osbeck-containing mouthwash for the prevention of dental caries: a randomized, controlled clinical trial",
        author: "Kim YR, Nam SH",
        journal: "Chinese Medicine",
        publicationDate: "2025-11-24",
        doi: "10.1186/s13020-025-01258-z",
        pmid: "41276841",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12642278/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2026 Korean trial, 67 people used a clematis root extract mouthwash, chlorhexidine (a standard antiseptic mouthwash) or salt water 4 times a day for 2 weeks. The clematis mouthwash reduced bad breath and lowered eight types of mouth bacteria linked to it; on a breath-gas meter, only the clematis group improved.",
        source: "kimHalitosis",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2025 Korean trial of 69 people, a clematis root extract mouthwash used 4 times a day for 2 weeks reduced plaque, tooth-decay bacteria and acid production in the mouth more than salt water or chlorhexidine.",
        source: "kimCaries",
      },
    ],
  },
  {
    name: "Cramp Bark",
    sources: {
      gok: {
        title: "Gilaburu extract (Viburnum opulus Linnaeus) is as effective as Tamsulosin in medical expulsive therapy of distal ureteral calculi",
        author: "Gok B, Tarik Atik Y, Uysal B, Koc E, Tastemur S, İbrahim Cimen H",
        journal: "International Journal of Clinical Practice",
        publicationDate: "2021-10-11",
        doi: "10.1111/ijcp.14950",
        pmid: "34610178",
        url: "https://pubmed.ncbi.nlm.nih.gov/34610178/",
        sourceType: P,
        tier: T3,
      },
      tuglu: {
        title: "Viburnum opulus: could it be a new alternative, such as lemon juice, to pharmacological therapy in hypocitraturic stone patients?",
        author: "Tuglu D, Yılmaz E, Yuvanc E, et al.",
        journal: "Archivio Italiano di Urologia e Andrologia",
        publicationDate: "2014-12-30",
        doi: "10.4081/aiua.2014.4.297",
        pmid: "25641457",
        url: "https://pubmed.ncbi.nlm.nih.gov/25641457/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2021 Turkish study, 86 people with a kidney stone of 10 mm or less in the lower ureter took either cramp bark (gilaburu) extract or tamsulosin, a standard medicine that helps stones pass. Stones passed at similar rates and speed, and the cramp bark group needed less extra pain relief and fewer emergency visits.\n\nTechnical detail: prospective two-group comparison (not described as randomized); on-demand diclofenac in both groups; extra analgesia 37.2% vs 65.1% (p = 0.017).",
        source: "gok",
      },
      {
        category: "PRECLINICAL",
        summary:
          "A 2014 lab analysis found cramp bark (gilaburu) fruit juice has as much citrate as lemon juice, more potassium and less calcium and sodium. Citrate helps prevent some kidney stones, so the authors suggest it may be an alternative for people with low urine citrate; this needs clinical testing.",
        source: "tuglu",
      },
    ],
    symptoms: [{ slug: "kidney-stones", notes: "In one study, cramp bark extract helped small ureter stones pass about as well as tamsulosin, with less pain medicine needed." }],
  },
);
