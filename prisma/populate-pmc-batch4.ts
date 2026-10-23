import { run } from "./lib/populate-herb";

// PubMed Central sweep, batch 4. Searched: Snapdragon, Speranskia, Stemona Root,
// Vanilla, Yarrow, Alysicarpus Vaginalis, Angelica, Avocado Leaf, Bayberry,
// Bloodwiss, Boneset, Butterfly Pea Flower. No usable human studies for
// Snapdragon, Speranskia, Stemona Root, Alysicarpus Vaginalis, Avocado Leaf
// (fruit only), Bloodwiss or Boneset (homeopathic preparation only). A vanilla
// aromatherapy trial in children was retracted and is not used.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run(
  {
    name: "Vanilla",
    sources: {
      maya: {
        title: "Comparison of the analgesic effect of inhaled lavender vs vanilla essential oil for neonatal frenotomy: a randomized clinical trial (NCT04867824)",
        author: "Maya-Enero S, Fàbregas-Mitjans M, Llufriu-Marquès RM, et al.",
        journal: "European Journal of Pediatrics",
        publicationDate: "2022-09-08",
        doi: "10.1007/s00431-022-04608-3",
        pmid: "36076107",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9458311/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2022 Spanish trial, 142 newborns having a tongue-tie snipped smelled a drop of vanilla or lavender oil on gauze, along with usual comfort measures such as sugar water and swaddling. Pain scores, crying time and heart rate changes were similar with both scents, so neither could be shown to work better. No side effects were seen.",
        source: "maya",
      },
    ],
  },
  {
    name: "Yarrow",
    sources: {
      daneshvar: {
        title: "Achillea millefolium capsule improved liver enzymes and lipid profile compared to placebo in patients with type 2 diabetes: a double-blind randomized clinical trial",
        author: "Daneshvar-Ghahfarokhi S, Ahmadinia H, Sadeghi T, Basirat E, Mohammadi-Shahrokhi V",
        journal: "BMC Nutrition",
        publicationDate: "2025-01-24",
        doi: "10.1186/s40795-025-01005-5",
        pmid: "39856724",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761196/",
        sourceType: P,
        tier: T3,
      },
      ayoobi: {
        title: "Achillea millefolium is beneficial as an add-on therapy in patients with multiple sclerosis: A randomized placebo-controlled clinical trial",
        author: "Ayoobi F, Moghadam-Ahmadi A, Amiri H, et al.",
        journal: "Phytomedicine",
        publicationDate: "2018-06-27",
        doi: "10.1016/j.phymed.2018.06.017",
        pmid: "30599916",
        url: "https://pubmed.ncbi.nlm.nih.gov/30599916/",
        sourceType: P,
        tier: T3,
      },
      zakeri: {
        title: "The effect of Achillea Millefolium L. on vulvovaginal candidiasis compared with clotrimazole: A randomized controlled trial",
        author: "Zakeri S, Esmaeilzadeh S, Gorji N, et al.",
        journal: "Complementary Therapies in Medicine",
        publicationDate: "2020-06-10",
        doi: "10.1016/j.ctim.2020.102483",
        pmid: "32951733",
        url: "https://pubmed.ncbi.nlm.nih.gov/32951733/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2025 Iranian trial, 60 people with type 2 diabetes took 500 mg of yarrow a day or a dummy capsule for 3 months. Yarrow lowered liver enzymes, triglycerides, LDL (\"bad\") cholesterol and total cholesterol.",
        source: "daneshvar",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 1-year Iranian trial, 75 people with multiple sclerosis took yarrow extract (250 or 500 mg a day) or a dummy pill alongside their usual treatment. Both doses lowered the yearly relapse rate, and the higher dose reduced growth of brain lesions on scans. It's a single small trial.",
        source: "ayoobi",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a trial of 80 women with vaginal yeast infections, a yarrow vaginal cream used for 7 days reduced symptoms, but the standard antifungal cream (clotrimazole) worked better.",
        source: "zakeri",
      },
    ],
    symptoms: [{ slug: "high-cholesterol", notes: "In one trial in type 2 diabetes, yarrow capsules lowered LDL and total cholesterol." }],
  },
  {
    name: "Angelica",
    sources: {
      lopez: {
        title: "Effects of Angelica archangelica Extract on Overactive Bladder: A Pilot Randomized Controlled Trial",
        author: "López-Seoane J, Gesteiro E, Castro-Alija MJ, et al.",
        journal: "Food Science & Nutrition",
        publicationDate: "2025-12-08",
        doi: "10.1002/fsn3.71258",
        pmid: "41368330",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12683295/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2025 Spanish pilot trial, 143 adults with an overactive bladder took angelica leaf extract or a dummy pill for 6 weeks. The angelica group went to the toilet less often during the day and reported better quality of life and fewer bladder storage symptoms; night-time urination improved slightly but not clearly.",
        source: "lopez",
      },
    ],
  },
  {
    name: "Bayberry",
    sources: {
      guo: {
        title: "Effects of bayberry juice on inflammatory and apoptotic markers in young adults with features of non-alcoholic fatty liver disease",
        author: "Guo H, Zhong R, Liu Y, et al.",
        journal: "Nutrition",
        publicationDate: "2014-02-01",
        doi: "10.1016/j.nut.2013.07.023",
        pmid: "24377455",
        url: "https://pubmed.ncbi.nlm.nih.gov/24377455/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a Chinese trial, 44 young adults with signs of fatty liver disease drank 250 ml of Chinese bayberry juice or a dummy drink twice a day for 4 weeks each. The juice lowered blood markers of oxidative damage and inflammation, but didn't change weight or insulin resistance.",
        source: "guo",
      },
    ],
    symptoms: [{ slug: "fatty-liver", notes: "Bayberry juice lowered inflammation markers in young adults with signs of fatty liver in one small trial." }],
  },
  {
    name: "Butterfly Pea Flower",
    sources: {
      chusak: {
        title: "Acute effect of Clitoria ternatea flower beverage on glycemic response and antioxidant capacity in healthy subjects: a randomized crossover trial",
        author: "Chusak C, Thilavech T, Henry CJ, Adisakwattana S",
        journal: "BMC Complementary and Alternative Medicine",
        publicationDate: "2018-01-08",
        doi: "10.1186/s12906-017-2075-7",
        pmid: "29310631",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5759795/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small Thai study, 15 healthy young men drank sugar water with or without 1 to 2 g of butterfly pea flower extract. Adding the extract lowered the rise in blood sugar and insulin after 30 minutes and raised antioxidant levels in the blood. The extract on its own didn't change fasting blood sugar.",
        source: "chusak",
      },
    ],
  },
);
