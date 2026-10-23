import { run } from "./lib/populate-herb";

// PubMed Central sweep, batches 5–6. Searched: Calamus Root, Cardiospermum,
// Ceylon Betel Leaf, Cloves, Cucumber Blossom, Cynomorium, Damiana, Eleuthera,
// Evodia Fruit, Fo-Ti, Goldenrod, Grindelia, Horehound, Linden, Marjoram,
// Ophiopogon Root, Osha, Polygonatum Sibiricum, Rehmannia Root, Sarsaparilla,
// Shan Zha, Shi Hu, Star Anise, Tarragon, Wormwood, Yellow Dock, Chaga, Magnolia
// Bark. Only single-herb human studies are used; the rest had none, or only
// multi-herb combinations, lab work, study protocols or other species.

const P = "peer_reviewed" as const;
const S = "systematic_review" as const;
const T2 = "TIER_2_SYSTEMATIC_REVIEW" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run(
  {
    name: "Ceylon Betel Leaf",
    sources: {
      ali: {
        title: "Effect of a Novel Betel Leaf Dentifrice on Commonly Seen Oral Hygiene Parameters - A Randomized Clinical Crossover Study",
        author: "Ali MZ, Elbaz WFA, Adouri S, et al.",
        journal: "Dentistry Journal",
        publicationDate: "2022-09-06",
        doi: "10.3390/dj10090166",
        pmid: "36135162",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9498039/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small 2022 study, 60 people with mild gum inflammation used a betel leaf toothpaste and a miswak (tooth-stick) toothpaste in turn. Both reduced plaque, and the betel leaf toothpaste reduced gum bleeding more.",
        source: "ali",
      },
    ],
  },
  {
    name: "Horehound",
    sources: {
      herrera: {
        title: "Clinical trial of Cecropia obtusifolia and Marrubium vulgare leaf extracts on blood glucose and serum lipids in type 2 diabetics",
        author: "Herrera-Arellano A, Aguilar-Santamaría L, García-Hernández B, et al.",
        journal: "Phytomedicine",
        publicationDate: "2004-11-01",
        doi: "10.1016/j.phymed.2004.01.006",
        pmid: "15636168",
        url: "https://pubmed.ncbi.nlm.nih.gov/15636168/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Horehound is used in Mexican folk medicine for diabetes. In a 2004 Mexican trial, 21 people with poorly controlled type 2 diabetes drank horehound leaf tea for 3 weeks alongside their usual treatment. It barely changed blood sugar (down 0.6%) or blood fats, while another plant tested in the same trial lowered them more.",
        source: "herrera",
      },
    ],
  },
  {
    name: "Marjoram",
    sources: {
      chahra: {
        title: "The effect of Origanum majorana tea on motor and non-motor symptoms in patients with idiopathic Parkinson's disease: A randomized controlled pilot study",
        author: "Chahra C, Anis H, Bissene D, et al.",
        journal: "Parkinsonism & Related Disorders",
        publicationDate: "2021-08-25",
        doi: "10.1016/j.parkreldis.2021.08.013",
        pmid: "34455218",
        url: "https://pubmed.ncbi.nlm.nih.gov/34455218/",
        sourceType: P,
        tier: T3,
      },
      lee: {
        title: "Inhalation of Origanum majorana L. essential oil while working reduces perceived stress and anxiety levels of nurses in a COVID-19 intensive care unit: a randomized controlled trial",
        author: "Lee SW, Shin YK, Lee JM, Seol GH",
        journal: "Frontiers in Psychiatry",
        publicationDate: "2023-11-17",
        doi: "10.3389/fpsyt.2023.1287282",
        pmid: "38045619",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10690939/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small Tunisian pilot trial, 60 people with Parkinson's disease drank marjoram tea or a dummy drink for 30 days alongside their medicine. Non-movement symptoms and depression improved with marjoram, but movement symptoms didn't change clearly.",
        source: "chahra",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2023 Korean trial, 57 nurses in a COVID-19 intensive care unit breathed in 3% marjoram oil or almond oil for 2 hours at work. Anxiety and stress fell in the marjoram group, but the difference compared with almond oil wasn't clear.",
        source: "lee",
      },
    ],
  },
  {
    name: "Ophiopogon Root",
    sources: {
      mainzer: {
        title: "Clinical Efficacy of Oligofructans from Ophiopogon japonicus in Reducing Atopic Dermatitis Flare-ups in Caucasian Patients",
        author: "Mainzer C, Le Guillou M, Vyumvuhore R, et al.",
        journal: "Acta Dermato-Venereologica",
        publicationDate: "2019-09-01",
        doi: "10.2340/00015555-3224",
        pmid: "31120541",
        url: "https://pubmed.ncbi.nlm.nih.gov/31120541/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2019 European trial, 90 children and 144 adults with mild to moderate atopic eczema applied a skin product containing sugars extracted from ophiopogon root, or a dummy product, twice a day for 60 days. The ophiopogon product reduced eczema severity, redness and itching, improved quality of life, and fewer people had flare-ups. The trial was single-blind.",
        source: "mainzer",
      },
    ],
    symptoms: [{ slug: "eczema", notes: "A skin product with ophiopogon extract reduced eczema severity and flare-ups in one trial." }],
  },
  {
    name: "Polygonatum Sibiricum",
    sources: {
      ha: {
        title: "Efficacy of Polygonatum sibiricum on Mild Insomnia: A Randomized Placebo-Controlled Trial",
        author: "Ha E, Hong H, Kim TD, et al.",
        journal: "Nutrients",
        publicationDate: "2019-07-25",
        doi: "10.3390/nu11081719",
        pmid: "31349690",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6723095/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2019 Korean trial, 80 people with mild insomnia took 500 mg a day of Polygonatum sibiricum root extract or a dummy pill for 4 weeks. The extract improved insomnia scores and increased total sleep time.",
        source: "ha",
      },
    ],
    symptoms: [{ slug: "occasional-sleeplessness", notes: "In one trial, the root extract improved mild insomnia and total sleep time." }],
  },
  {
    name: "Rehmannia Root",
    sources: {
      kong: {
        title: "Rehmannia glutinosa for perimenopausal syndrome in patients with breast cancer: A systematic review and meta-analysis",
        author: "Kong D, Huang F, Liu W, Lin M, Sheng Z, Xu J",
        journal: "Saudi Medical Journal",
        publicationDate: "2025-07-01",
        doi: "10.15537/smj.2025.46.7.20240572",
        pmid: "40628433",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12251504/",
        sourceType: S,
        tier: T2,
      },
      srivastava: {
        title: "Assessment of the Effect of Rehmannia glutinosa Leaf Extract in Maintaining Skin Health: A Proof-of-Concept, Double-Blind, Randomized, Placebo-Controlled Clinical Trial",
        author: "Srivastava S, Huang SF, Jagtap MS",
        journal: "Clinical, Cosmetic and Investigational Dermatology",
        publicationDate: "2024-04-18",
        doi: "10.2147/CCID.S448928",
        pmid: "38651075",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11034513/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Breast cancer treatment can bring on menopause-like symptoms. A 2025 review of 17 Chinese trials with 1,139 women found that herbal formulas with rehmannia as the main herb eased these symptoms more than standard Western medicines. The trials had design flaws and varied widely, and they tested formulas, not rehmannia alone.",
        source: "kong",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a very small trial, 22 women with moderate to severe acne took 100 mg a day of rehmannia leaf extract or a dummy capsule for 8 weeks. Acne improved somewhat more with the extract, along with some measures of skin quality. Note this used the leaf, not the root.",
        source: "srivastava",
      },
    ],
    symptoms: [{ slug: "menopause-symptoms", notes: "Formulas built around rehmannia eased menopause-like symptoms in women treated for breast cancer, in lower-quality trials." }],
  },
  {
    name: "Star Anise",
    sources: {
      assiry: {
        title: "Crossover Analysis of the Astringent, Antimicrobial, and Anti-inflammatory Effects of Illicium verum/Star Anise in the Oral Cavity",
        author: "Assiry AA, Karobari MI, Bhavikatti SK, Marya A",
        journal: "BioMed Research International",
        publicationDate: "2021-05-30",
        doi: "10.1155/2021/5510174",
        pmid: "34195261",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8181057/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2021 trial, 50 people used a star anise mouthwash and a dummy mouthwash in turn, for 21 days each. The star anise mouthwash reduced gum inflammation, gum bleeding and mouth bacteria compared with the dummy.",
        source: "assiry",
      },
    ],
  },
  {
    name: "Tarragon",
    sources: {
      mendez: {
        title: "Effect of Artemisia dracunculus Administration on Glycemic Control, Insulin Sensitivity, and Insulin Secretion in Patients with Impaired Glucose Tolerance",
        author: "Méndez-Del Villar M, Puebla-Pérez AM, Sánchez-Peña MJ, et al.",
        journal: "Journal of Medicinal Food",
        publicationDate: "2016-04-20",
        doi: "10.1089/jmf.2016.0005",
        pmid: "27097076",
        url: "https://pubmed.ncbi.nlm.nih.gov/27097076/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small Mexican trial, 24 people with prediabetes (impaired glucose tolerance) took 1,000 mg of tarragon or a dummy pill twice a day for 90 days. Tarragon slightly lowered long-term blood sugar (HbA1c), insulin output and systolic blood pressure, and raised HDL (\"good\") cholesterol.\n\nTechnical detail: HbA1c 5.8% to 5.6%; systolic BP 120 to 113 mmHg.",
        source: "mendez",
      },
    ],
    symptoms: [{ slug: "high-blood-sugar", notes: "In one small trial in prediabetes, tarragon slightly lowered HbA1c and insulin output." }],
  },
  {
    name: "Wormwood",
    sources: {
      krebs: {
        title: "Wormwood (Artemisia absinthium) suppresses tumour necrosis factor alpha and accelerates healing in patients with Crohn's disease - A controlled clinical trial",
        author: "Krebs S, Omer TN, Omer B",
        journal: "Phytomedicine",
        publicationDate: "2009-12-03",
        doi: "10.1016/j.phymed.2009.10.013",
        pmid: "19962291",
        url: "https://pubmed.ncbi.nlm.nih.gov/19962291/",
        sourceType: P,
        tier: T3,
      },
      niloufar: {
        title: "Evaluating the safety and efficacy of wormwood vaginal cream on sexual satisfaction and quality of sexual life of postmenopausal women: a randomized, triple-blinds, placebo-controlled clinical trial",
        author: "Niloufar H, Raheleh B, Roshanak S, Jamshid J, Sharbanoo I",
        journal: "BMC Women's Health",
        publicationDate: "2024-12-23",
        doi: "10.1186/s12905-024-03515-z",
        pmid: "39716229",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11665077/",
        sourceType: P,
        tier: T3,
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small trial, 20 people with active Crohn's disease added 750 mg of powdered wormwood 3 times a day, or nothing, to their usual treatment for 6 weeks. Symptoms went into remission in 8 of 10 people taking wormwood versus 2 of 10 without it, and an inflammation marker (TNF-alpha) fell.",
        source: "krebs",
      },
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 2024 Iranian trial, 112 women after menopause used a wormwood vaginal cream or a dummy cream 3 times a week for 4 weeks. Sexual satisfaction scores rose slightly with wormwood.",
        source: "niloufar",
      },
    ],
  },
);
