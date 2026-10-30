import { run } from "./lib/populate-herb";

// Arjuna (Terminalia arjuna), from a 2017 review of its traditional uses and
// pharmacology (Amalraj & Gopi), a 2014 systematic review of angina trials
// (Kaur et al.) and a 2024 diabetes study (Prakash et al.), found by direct
// PubMed Central search. Range per Amalraj & Gopi; family per GBIF.

run({
  name: "Arjuna",
  profile: {
    family: "Combretaceae",
    genus: "Terminalia",
    species: "arjuna",
    nativeRange: "India, Sri Lanka, Myanmar and Mauritius",
    partsUsed: "Mainly the bark",
  },
  sources: {
    amalraj: {
      title: "Medicinal properties of Terminalia arjuna (Roxb.) Wight & Arn.: A review",
      author: "Amalraj A, Gopi S",
      journal: "Journal of Traditional and Complementary Medicine",
      publicationDate: "2017-01-01",
      doi: "10.1016/j.jtcme.2016.02.003",
      pmid: "28053890",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5198828/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kaur: {
      title: "Terminalia arjuna in Chronic Stable Angina: Systematic Review and Meta-Analysis",
      author: "Kaur N, Shafiq N, Negi H, Pandey A, Reddy S, Kaur H, et al.",
      journal: "Cardiology Research and Practice",
      publicationDate: "2014-01-01",
      doi: "10.1155/2014/281483",
      pmid: "24600529",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3926224/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    prakash: {
      title: "Clinical study evaluating antihyperglycemic efficacy and safety of terminalia arjuna versus sitagliptin in Type-2 diabetes mellitus patients",
      author: "Prakash V, Goel N, Giri KR, Goel A",
      journal: "Bioinformation",
      publicationDate: "2024-01-01",
      doi: "10.6026/9732063002001862",
      pmid: "40230891",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11993424/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Indradru", type: "TRADITIONAL_NAME", region: "India" },
    { name: "Partha", type: "TRADITIONAL_NAME", region: "India" },
    { name: "Veeravriksha", type: "TRADITIONAL_NAME", region: "India" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "The bark is used as a heart tonic, and for fractures, ulcers, liver problems and anemia." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda, the bark has been used for centuries as a heart tonic, including for heart failure and other heart conditions. It has also been used for fractures, ulcers, liver problems, blood disorders and anemia.",
      source: "amalraj",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on rat heart muscle cells, a water extract of the bark made the cells contract more strongly and relax faster. Lab and animal studies also report antioxidant activity and effects on blood pressure and blood fats.\n\nTechnical detail: positive inotropy and faster relaxation in adult rat ventricular myocytes, attributed to enhanced sarcoplasmic reticulum function; saponin glycosides and flavonoids are thought to be the active compounds.",
      source: "amalraj",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2014 review looked at trials of arjuna in people with chronic stable angina, chest pain caused by narrowed heart arteries. The trials were poorly designed. Where results could be combined, arjuna did no better than the comparison treatments. The authors concluded there isn't enough evidence for or against it, and that larger, well-run trials are needed.\n\nTechnical detail: systematic review and meta-analysis of randomized, pseudo-randomized and before-after studies against standard treatment; no significant difference in pooled outcomes.",
      source: "kaur",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 3-month study in India, 60 people with type 2 diabetes took metformin plus either 1 g of arjuna bark or the diabetes medicine sitagliptin. Fasting blood sugar and HbA1c (a measure of blood sugar over about 3 months) improved similarly in both groups. No side effects were seen in the arjuna group. The study was small and had no placebo group.\n\nTechnical detail: metformin 500 mg twice daily in both groups; sitagliptin 100 mg once daily; fasting blood sugar, liver tests and side effects checked at 4, 8 and 12 weeks.",
      source: "prakash",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects were seen in 30 people who took arjuna bark with metformin for 3 months.",
      source: "prakash",
    },
  ],
  symptoms: [
    {
      slug: "heart-failure",
      notes: "Traditional use only: in Ayurveda the bark is used as a heart tonic, including for heart failure. Trials for chest pain (angina) were too poor to show a benefit.",
    },
    {
      slug: "high-blood-sugar",
      notes: "In one small 3-month study, arjuna bark plus metformin improved blood sugar about as much as sitagliptin plus metformin. There was no placebo group.",
    },
  ],
});
