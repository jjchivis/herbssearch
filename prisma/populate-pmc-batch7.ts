import { run } from "./lib/populate-herb";

// PubMed Central sweep, batch 7. Searched: Giloy, Bermuda Grass, Epazote,
// Periwinkle, Solomon's Seal, Stinging Nettle Seeds, Polyporus Umbellatus,
// Trichosanthes Peel, Wild Cherry, Pine Needles, Reed Rhizome, Lion's Ear,
// Vervain, Plum Flower. Others had no single-herb human studies, or only
// combinations, allergy testing or different plant parts (pine bark).

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run(
  {
    name: "Giloy (Guduchi)",
    sources: {
      kulkarni: {
        title: "Tinospora Cordifolia (Giloy)-Induced Liver Injury During the COVID-19 Pandemic-Multicenter Nationwide Study From India",
        author: "Kulkarni AV, Hanchanale P, Prakash V, et al.",
        journal: "Hepatology Communications",
        publicationDate: "2022-02-06",
        doi: "10.1002/hep4.1904",
        pmid: "35037744",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9134809/",
        sourceType: P,
        tier: T3,
      },
      nagral: {
        title: "Herb-induced Liver Injury-A Guide to Approach. Lessons from the Tinospora cordifolia (Giloy) Case Series Story",
        author: "Nagral A, Rudra OS, Menezes S, et al.",
        journal: "Journal of Clinical and Experimental Hepatology",
        publicationDate: "2022-11-06",
        doi: "10.1016/j.jceh.2022.11.001",
        pmid: "36950495",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10025683/",
        sourceType: P,
        tier: T3,
      },
      shirolkar: {
        title: "Intervention of Ayurvedic drug Tinospora cordifolia attenuates the metabolic alterations in hypertriglyceridemia: a pilot clinical trial",
        author: "Shirolkar A, Yadav A, Mandal TK, Dabur R",
        journal: "Journal of Diabetes and Metabolic Disorders",
        publicationDate: "2020-10-16",
        doi: "10.1007/s40200-020-00657-3",
        pmid: "33520840",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7843799/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small 2-week Indian pilot trial, 24 people with very high triglycerides took about 3 g a day of giloy water extract or the diabetes drug metformin. Giloy lowered triglycerides and LDL (\"bad\") cholesterol and raised HDL (\"good\") cholesterol.",
        source: "shirolkar",
      },
    ],
    safety: [
      {
        category: "TOXICITY",
        description:
          "A 2022 study from 13 Indian hospitals described 43 people who developed liver injury after taking giloy, many during the COVID-19 pandemic when it was promoted as an immune booster. Symptoms began a median of 46 days after starting it. Some had sudden hepatitis, some had existing liver disease that worsened, and some had liver failure. Giloy was judged the probable cause in about two-thirds, often with immune-type (autoimmune) features, and it can bring out hidden autoimmune hepatitis.",
        source: "kulkarni",
      },
      {
        category: "TOXICITY",
        description:
          "Some experts suggested liver injury blamed on giloy might really come from a look-alike plant (Tinospora crispa). But when doctors tested the plant samples their patients had taken, using DNA and chemical analysis, they were confirmed to be true giloy (Tinospora cordifolia).",
        source: "nagral",
      },
    ],
  },
  {
    name: "Epazote",
    sources: {
      kliks: {
        title: "Studies on the traditional herbal anthelmintic Chenopodium ambrosioides L.: ethnopharmacological evaluation and clinical field trials",
        author: "Kliks MM",
        journal: "Social Science & Medicine",
        publicationDate: "1985-01-01",
        doi: "10.1016/0277-9536(85)90144-3",
        pmid: "3906906",
        url: "https://pubmed.ncbi.nlm.nih.gov/3906906/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Epazote has been used for centuries in the Americas as a seasoning and to treat intestinal worms, and Mayan farmers in Chiapas, Mexico, regarded it highly for roundworm. But in controlled field trials there, even large doses of the dried plant had no clear effect on roundworm, hookworm or whipworm. The researcher suggested belief in it may come from worms being passed naturally after a dose.",
        source: "kliks",
      },
    ],
  },
  {
    name: "Plum Flower",
    sources: {
      choi: {
        title: "Efficacy and safety of fermented Prunus mume vinegar on fatigue improvement in adults with unexplained fatigue: A randomized controlled trial",
        author: "Choi JI, Lee YL, Lee SY",
        journal: "Frontiers in Nutrition",
        publicationDate: "2022-11-09",
        doi: "10.3389/fnut.2022.990418",
        pmid: "36438753",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9682036/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2022 Korean trial using the fruit rather than the flower, 80 adults with unexplained tiredness drank 70 ml a day of fermented Japanese apricot (Prunus mume) vinegar or a dummy drink for 8 weeks. It didn't reduce fatigue more than the dummy drink, and no side effects were reported.",
        source: "choi",
      },
    ],
  },
);
