import { run } from "./lib/populate-herb";

// Devil's Horsewhip (Achyranthes aspera, prickly chaff flower), from verified
// sources: a rat developmental toxicity study (Teshome et al. 2021), a 2025
// review (Luo et al., Front Pharmacol), a lab study of estrogen-like effects
// (Huq et al. 2024) and a lab study from Ivory Coast (Sinan et al. 2020). No
// peer-reviewed source on its Jamaican use, or any study in people, was found.

run({
  name: "Devil's Horsewhip",
  profile: {
    family: "Amaranthaceae",
    genus: "Achyranthes",
    species: "aspera",
  },
  sources: {
    teshome: {
      title: "Developmental Toxicity of Ethanolic Extracts of Leaves of Achyranthes aspera, Amaranthaceae in Rat Embryos and Fetuses",
      author: "Teshome D, Tiruneh C, Berhanu L, Berihun G, Belete ZW",
      journal: "Journal of Experimental Pharmacology",
      organization: "Journal of Experimental Pharmacology",
      publicationDate: "2021-06-02",
      doi: "10.2147/jep.s312649",
      pmid: "34104006",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8180308/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    luo: {
      title: "Role of Achyranthes aspera in neurodegenerative diseases: current evidence and future directions",
      author: "Luo H, Wei S, Fu S, Han L",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2025-04-09",
      doi: "10.3389/fphar.2025.1511011",
      pmid: "40271071",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12014640/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    huq: {
      title: "Estrogenic post-menopausal anti-osteoporotic mechanism of Achyranthes aspera L.: Phytochemicals and network pharmacology approaches",
      author: "Huq AM, Stanslas J, Nizhum N, Uddin MN, Maulidiani M, Roney M, Abas F, Jamal JA",
      journal: "Heliyon",
      organization: "Heliyon",
      publicationDate: "2024-10-02",
      doi: "10.1016/j.heliyon.2024.e38792",
      pmid: "39469676",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11513486/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sinan: {
      title: "Qualitative Phytochemical Fingerprint and Network Pharmacology Investigation of Achyranthes aspera Linn. Extracts",
      author: "Sinan KI, Zengin G, Zheleva-Dimitrova D, et al.",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2020-04-23",
      doi: "10.3390/molecules25081973",
      pmid: "32340217",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7221715/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Devils Horsewhip", type: "COMMON_NAME" },
    { name: "Devil's Horse Whip", type: "COMMON_NAME" },
    { name: "Prickly Chaff Flower", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "african-traditional-medicine", notes: "Used for fertility control in Ethiopia and as an herbal medicine in Ivory Coast." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "It has been widely used in traditional and folk medicine for many different ailments.",
      source: "luo",
    },
    {
      category: "TRADITIONAL",
      summary: "In India, it's traditionally used for menstrual problems.",
      source: "huq",
    },
    {
      category: "TRADITIONAL",
      summary: "In Ethiopia, it's widely used in local health practice for fertility control.",
      source: "teshome",
    },
    {
      category: "TRADITIONAL",
      summary: "Known as prickly chaff flower, it's used as an herbal medicine in Ivory Coast.",
      source: "sinan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 review reported that, in lab and animal studies, it protected the heart, blood vessels and brain cells, affected the immune system, and acted as an antioxidant.",
      source: "luo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, an extract acted like the hormone estrogen, making estrogen-sensitive breast cancer cells grow almost as much as estrogen itself did.\n\nTechnical detail: methanol fraction at 100 µg/mL; MCF-7 proliferation effect 138% vs 143% for 17β-estradiol; upregulated TFF1 and progesterone receptor via an ERα-associated mechanism.",
      source: "huq",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, extracts acted as antioxidants and blocked enzymes linked to Alzheimer's disease and type 2 diabetes.\n\nTechnical detail: inhibited AChE, BChE, α-glucosidase, α-amylase and tyrosinase to varying degrees; the infusion had the highest phenolic content and antioxidant activity.",
      source: "sinan",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "In pregnant rats, a high dose of leaf extract reduced the number of embryos that implanted, slowed their development, and caused fetal deaths and smaller babies. The researchers concluded it may harm developing babies at high doses.\n\nTechnical detail: 70% ethanol leaf extract at 250, 500 and 1000 mg/kg by mouth on gestation days 6–12; effects at 1000 mg/kg; no external malformations seen.",
      source: "teshome",
    },
  ],
  symptoms: [
    { slug: "menstrual-discomfort", notes: "Traditionally used for menstrual problems in India. This use hasn't been tested in people." },
    {
      slug: "menopause-symptoms",
      notes: "Lab tests found estrogen-like effects, which researchers link to its traditional use for menopause problems. It hasn't been tested in people.",
    },
    { slug: "fertility", notes: "Used for fertility control in Ethiopia. In pregnant rats, high doses harmed developing babies." },
    { slug: "pregnancy-and-childbirth", notes: "In pregnant rats, high doses harmed developing babies." },
    {
      slug: "memory-and-thinking",
      notes: "Lab and animal studies suggest it may protect brain cells. It hasn't been tested in people.",
    },
  ],
});
