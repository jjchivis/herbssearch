import { run } from "./lib/populate-herb";

// PubMed Central sweep, batch 3. Searched: Korean Bellflower, Lemon Verbena,
// Lesser Galangal, Lindera Root, Maral Root, Marigold, Milky Oats, Osmanthus
// Fragrans, Prickly Ash, Red Peony Root, Scrophularia Root, Slippery Elm.
// Skipped: Maral Root, Prickly Ash and Scrophularia Root (trials found were on
// different species); Red Peony Root (trials used white peony root extract, a
// different preparation); Lindera Root (only a small cosmetic scalp study);
// Slippery Elm (none found).

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;
const T2 = "TIER_2_SYSTEMATIC_REVIEW" as const;

run(
  {
    name: "Korean Bellflower",
    sources: {
      hao: {
        title: "Platycodon grandiflorum Protects Against Anthracycline-Induced Cardiotoxicity in Early Breast Cancer Patients",
        author: "Hao W, Shi Y, Qin Y, et al.",
        journal: "Integrative Cancer Therapies",
        publicationDate: "2020-01-01",
        doi: "10.1177/1534735420945017",
        pmid: "32729334",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7491211/",
        sourceType: P,
        tier: T2,
      },
      kim: {
        title: "Intervention Study on the Efficacy and Safety of Platycodon grandiflorus Ethanol Extract in Overweight or Moderately Obese Adults: A Single-Center, Randomized, Double-Blind, Placebo-Controlled Trial",
        author: "Kim YJ, Kwon EY, Kim JW, et al.",
        journal: "Nutrients",
        publicationDate: "2019-10-14",
        doi: "10.3390/nu11102445",
        pmid: "31615016",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6836286/",
        sourceType: P,
        tier: T3,
      },
      park: {
        title: "An 8-week randomized, double-blind, placebo-controlled study to evaluate the efficacy and safety of red Platycodon grandiflorus root extract on enhancement of immune function",
        author: "Park EJ, Jung AJ, Lee SH, Kang SK, Lee HJ",
        journal: "Phytomedicine",
        publicationDate: "2021-10-19",
        doi: "10.1016/j.phymed.2021.153811",
        pmid: "34735908",
        url: "https://pubmed.ncbi.nlm.nih.gov/34735908/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Some breast cancer chemotherapy (anthracyclines) can damage the heart. In a Chinese trial, 125 women with early breast cancer took Korean bellflower granules or a dummy during chemotherapy. Early signs of heart damage were less common with bellflower (8.2% vs 21.9%), and it didn't make the chemotherapy less effective against the cancer. Serious heart failure was rare in both groups.",
        source: "hao",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 12-week Korean trial, 108 overweight adults took one of three doses of Korean bellflower root extract or a dummy pill. The lowest dose reduced body fat, and the highest dose reduced belly fat on scans, compared with the dummy pill.",
        source: "kim",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In an 8-week Korean trial, 100 healthy adults took a red Korean bellflower root extract or a dummy pill. The extract increased the activity of natural killer cells, a type of immune cell, and no serious side effects were seen.",
        source: "park",
      },
    ],
  },
  {
    name: "Lemon Verbena",
    sources: {
      perez: {
        title: "Dietary Supplementation with an Extract of Aloysia citrodora (Lemon verbena) Improves Sleep Quality in Healthy Subjects: A Randomized Double-Blind Controlled Study",
        author: "Pérez-Piñero S, Muñoz-Carrillo JC, Echepare-Taberna J, et al.",
        journal: "Nutrients",
        publicationDate: "2024-05-18",
        doi: "10.3390/nu16101523",
        pmid: "38794761",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11123999/",
        sourceType: P,
        tier: T3,
      },
      martinez: {
        title: "Anxiolytic Effect and Improved Sleep Quality in Individuals Taking Lippia citriodora Extract",
        author: "Martínez-Rodríguez A, Martínez-Olcina M, Mora J, Navarro P, Caturla N, Jones J",
        journal: "Nutrients",
        publicationDate: "2022-01-04",
        doi: "10.3390/nu14010218",
        pmid: "35011093",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8747367/",
        sourceType: P,
        tier: T3,
      },
      jackson: {
        title: "Daily supplementation with lemon verbena extract decreases subjective energy and parental reports of hyperactivity in children displaying sub-clinical attention deficit hyperactivity disorder-type behaviours: A randomised controlled trial",
        author: "Jackson PA, Smith EF, Forster J, et al.",
        journal: "Journal of Psychopharmacology",
        publicationDate: "2025-04-18",
        doi: "10.1177/02698811251324574",
        pmid: "40251851",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12287557/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2024 Spanish trial, 71 healthy adults with sleep problems took a lemon verbena extract or a dummy pill for 3 months. The extract improved sleep quality, helped people fall asleep faster and sleep more efficiently, and raised night-time melatonin.",
        source: "perez",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In an 8-week trial, people taking a lemon verbena extract reported less stress, with lower levels of the stress hormone cortisol, and felt better rested, spending more time in deep and dream (REM) sleep, compared with a dummy pill.",
        source: "martinez",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2025 UK trial, 120 children aged 8 to 17 with mild ADHD-like behaviour took lemon verbena extract or a dummy for 8 weeks. Children taking it felt less energetic but thinking wasn't impaired, had fewer depression symptoms at the end, and parents reported a trend toward less hyperactivity.",
        source: "jackson",
      },
    ],
    symptoms: [
      { slug: "occasional-sleeplessness", notes: "Two trials found a lemon verbena extract improved sleep quality." },
      { slug: "stress", notes: "In one trial, a lemon verbena extract lowered stress and cortisol." },
    ],
  },
  {
    name: "Lesser Galangal",
    sources: {
      kolangi: {
        title: "Effect of Alpinia officinarum Hance rhizome extract on spermatogram factors in men with idiopathic infertility: A prospective double-blinded randomised clinical trial",
        author: "Kolangi F, Shafi H, Memariani Z, et al.",
        journal: "Andrologia",
        publicationDate: "2018-10-31",
        doi: "10.1111/and.13172",
        pmid: "30378695",
        url: "https://pubmed.ncbi.nlm.nih.gov/30378695/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In an Iranian trial, 60 men with unexplained infertility took 300 mg a day of lesser galangal extract or a dummy pill for 3 months. Sperm count and the share of normally shaped sperm rose in the galangal group, and the researchers reported no adverse effects.",
        source: "kolangi",
      },
    ],
    symptoms: [{ slug: "fertility", notes: "In one trial, lesser galangal extract improved sperm count and shape in men with unexplained infertility." }],
  },
  {
    name: "Marigold",
    sources: {
      olmedilla: {
        title: "Bioavailability of Lutein from Marigold Flowers (Free vs. Ester Forms): A Randomised Cross-Over Study to Assess Serum Response and Visual Contrast Threshold in Adults",
        author: "Olmedilla-Alonso B, Granado-Lorencio F, Castro-Feito J, et al.",
        journal: "Nutrients",
        publicationDate: "2024-05-08",
        doi: "10.3390/nu16101415",
        pmid: "38794653",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11123982/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Marigold flowers are the main source of lutein, an eye-health nutrient sold as a supplement. In a 2024 Spanish study, 24 healthy adults took 6 mg a day of lutein from marigold extract. Blood lutein rose about 2.4-fold within 15 days, to levels linked with lower risk of age-related eye disease, whichever chemical form was used.",
        source: "olmedilla",
      },
    ],
  },
  {
    name: "Milky Oats",
    sources: {
      kennedy: {
        title: "Acute and Chronic Effects of Green Oat (Avena sativa) Extract on Cognitive Function and Mood during a Laboratory Stressor in Healthy Adults: A Randomised, Double-Blind, Placebo-Controlled Study in Healthy Humans",
        author: "Kennedy DO, Bonnländer B, Lang SC, et al.",
        journal: "Nutrients",
        publicationDate: "2020-05-29",
        doi: "10.3390/nu12061598",
        pmid: "32485993",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7352613/",
        sourceType: P,
        tier: T3,
      },
      friling: {
        title: "Dietary supplementation with a wild green oat extract (Avena sativa L.) to improve wellness and wellbeing during smoking reduction or cessation: a randomized double-blind controlled study",
        author: "Friling M, García-Muñoz AM, Lavie A, et al.",
        journal: "Frontiers in Nutrition",
        publicationDate: "2024-06-19",
        doi: "10.3389/fnut.2024.1405156",
        pmid: "38962436",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11220258/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2020 UK trial, 132 healthy adults aged 35 to 65 took a green oat herb extract or a dummy pill for 4 weeks. The extract improved working memory and multitasking, and the highest dose lowered the body's stress response during a stressful task, though mood didn't change.",
        source: "kennedy",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In an 8-week trial, 145 people trying to cut down or quit smoking took a wild green oat extract or a dummy pill. The oat group had better quality of life, less stress and better sleep, and more of them cut their smoking by over 20% (67% vs 49%).",
        source: "friling",
      },
    ],
    symptoms: [
      { slug: "memory-and-thinking", notes: "A green oat extract improved working memory and multitasking in healthy adults." },
      { slug: "stress", notes: "Green oat extracts lowered stress responses in two trials." },
    ],
  },
  {
    name: "Osmanthus Fragrans",
    sources: {
      hozumi: {
        title: "Aromatherapies using Osmanthus fragrans oil and grapefruit oil are effective complementary treatments for anxious patients undergoing colonoscopy: A randomized controlled study",
        author: "Hozumi H, Hasegawa S, Tsunenari T, et al.",
        journal: "Complementary Therapies in Medicine",
        publicationDate: "2017-08-24",
        doi: "10.1016/j.ctim.2017.08.012",
        pmid: "28917370",
        url: "https://pubmed.ncbi.nlm.nih.gov/28917370/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a Japanese trial of 361 people having a colonoscopy, breathing in osmanthus oil vapour during the procedure reduced anxiety, and eased stomach discomfort in people who were very anxious, compared with no aroma or plain vapour.",
        source: "hozumi",
      },
    ],
    symptoms: [{ slug: "anxiety", notes: "Osmanthus oil aromatherapy reduced anxiety during colonoscopy in one trial." }],
  },
);
