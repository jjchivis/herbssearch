import { run } from "./lib/populate-herb";

// Mediterranean Saltbush (Atriplex halimus), from a 2025 study of its leaves
// (Foletti et al.), a 2024 review (Roubi et al., abstract only), a 2021 review
// of the Atriplex genus (Ali et al.), a 2013 lab study of Greco-Arab diabetes
// herbs (Kadan et al.), a 2025 enzyme study (Roubi et al.) and a 2026 rat
// arthritis study (Kaouane et al.), the 2008 Glucolevel study (Said et al.), a
// 2022 review of the fat sand rat (Bilu et al.) and a 2005 sand rat diet study
// (Palgi et al.). Family per GBIF.

run({
  name: "Mediterranean Saltbush",
  profile: {
    family: "Amaranthaceae",
    genus: "Atriplex",
    species: "halimus",
    nativeRange: "The Mediterranean and North Africa",
    partsUsed: "The leaves",
  },
  sources: {
    foletti: {
      title: "Investigating the Nutritional Properties, Chemical Composition (UPLC-HR-MS) and Safety (Ames Test) of Atriplex halimus L. Leaves and Their Potential Health Implications",
      author: "Foletti ME, Tacchini M, Sacchetti G, et al.",
      journal: "Plants",
      publicationDate: "2025-10-31",
      doi: "10.3390/plants14213350",
      pmid: "41225900",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12609473/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    roubiReview: {
      title: "Atriplex halimus: Phytochemical Insights, Traditional Applications, and Pharmacological Promises",
      author: "Roubi M, Dalli M, Azizi SE, Gseyra N",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2024-12-16",
      doi: "10.1002/cbdv.202402171",
      pmid: "39558878",
      url: "https://doi.org/10.1002/cbdv.202402171",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ali: {
      title: "The Therapeutic Properties, Ethno pharmacology and Phyto-chemistry of Atriplex Species: A review",
      author: "Ali B, Musaddiq S, Iqbal S, Rehman T, Shafiq N, Hussain A",
      journal: "Pakistan Journal of Biochemistry and Biotechnology",
      publicationDate: "2021-01-01",
      doi: "10.52700/pjbb.v2i1.38",
      url: "https://doi.org/10.52700/pjbb.v2i1.38",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kadan: {
      title: "In Vitro Evaluations of Cytotoxicity of Eight Antidiabetic Medicinal Plants and Their Effect on GLUT4 Translocation",
      author: "Kadan S, Saad B, Sasson Y, Zaid H",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2013-03-28",
      doi: "10.1155/2013/549345",
      pmid: "23606883",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3625546/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    roubiEnzyme: {
      title: "Phytochemical Profiling, Antioxidant Capacity, and the Antidiabetic Potential of Atriplex halimus Extracts: UHPLC-MS/MS Analysis, In Vitro Enzyme Inhibition Assays, and Molecular Docking Studies",
      author: "Roubi M, Daoudi NE, Dalli M, et al.",
      journal: "Food Science & Nutrition",
      publicationDate: "2025-08-02",
      doi: "10.1002/fsn3.70745",
      pmid: "40755500",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12317189/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    said: {
      title: "Maintaining a physiological blood glucose level with 'glucolevel', a combination of four anti-diabetes plants used in the traditional Arab herbal medicine",
      author: "Said O, Fulder S, Khalil K, Azaizeh H, Kassis E, Saad B",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2007-05-17",
      doi: "10.1093/ecam/nem047",
      pmid: "18955212",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2586306/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bilu: {
      title: "Circadian rhythms-related disorders in diurnal fat sand rats under modern lifestyle conditions: A review",
      author: "Bilu C, Einat H, Zimmet P, Kronfeld-Schor N",
      journal: "Frontiers in Physiology",
      publicationDate: "2022-09-07",
      doi: "10.3389/fphys.2022.963449",
      pmid: "36160856",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9489903/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    palgi: {
      title: "Oxalate, calcium and ash intake and excretion balances in fat sand rats (Psammomys obesus) feeding on two different diets",
      author: "Palgi N, Vatnick I, Pinshow B",
      journal: "Comparative Biochemistry and Physiology Part A",
      publicationDate: "2005-05-01",
      doi: "10.1016/j.cbpb.2005.03.011",
      pmid: "15922640",
      url: "https://doi.org/10.1016/j.cbpb.2005.03.011",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kaouane: {
      title: "Phytochemical Characterization and Evaluation of Antioxidant, Anti-Inflammatory, Cytotoxic, Genotoxic, and Anti-Arthritic Activities of Atriplex halimus Aqueous Leaf Extract",
      author: "Kaouane K, Madoui S, Kemchache H, et al.",
      journal: "Plants",
      publicationDate: "2026-07-14",
      doi: "10.3390/plants15142164",
      pmid: "42514532",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13416023/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Saltbush", type: "COMMON_NAME" }],
  traditions: [
    {
      slug: "mediterranean-folk-medicine",
      notes: "Leaf decoctions and teas used across the Mediterranean and North Africa for diabetes, heart, gut and joint problems.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The salty leaves are eaten in salads and as a seasoning, and were eaten in times of famine. Since ancient times the shrub has also fed livestock.",
      source: "foletti",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A decoction or tea of the leaves is a traditional remedy for heart disease, stomach and gut problems, diabetes and arthritis. The Sahrawi people living in refugee camps in Algeria still use it.",
      source: "foletti",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Pakistan a leaf decoction is taken to purify the blood and for fever, jaundice and liver disease, and in Algeria it's used for thyroid problems.",
      source: "ali",
    },
    {
      category: "TRADITIONAL",
      summary: "It's one of the herbs strongly recommended in Greco-Arab and Islamic medicine to treat and prevent diabetes.",
      source: "kadan",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 2008 study, 16 people with newly diagnosed type 2 diabetes took Glucolevel, a tablet combining saltbush with walnut, olive and nettle leaves, 3 times a day for 4 weeks. Average blood sugar fell from 290 to 210 mg/dl in the first week, HbA1c (long-term blood sugar) fell from 8.2 to 6.9 in the 6 people tested, and no side effects were reported. Because it was a mixture with no comparison group, saltbush's own effect isn't known.",
      source: "said",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Leaf juice and water extracts lowered blood sugar in diabetic rats.",
      source: "ali",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Saltbush is the favorite food of the fat sand rat, a North African desert gerbil, and is low in calories. When sand rats are kept in a lab and fed standard rodent food instead, they develop type 2 diabetes within 4 weeks, which makes them a common animal model for studying diabetes.",
      source: "bilu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a leaf extract helped muscle cells move glucose transporters to their surface, one way the body takes up sugar.",
      source: "kadan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Extracts slowed alpha-amylase, an enzyme that breaks down starch into sugar, and reduced sugar damage to proteins in lab tests.",
      source: "roubiEnzyme",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with arthritis, a water extract of the leaves taken for 21 days reduced paw swelling and joint damage and brought blood tests back toward normal.",
      source: "kaouane",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The leaves are high in fiber and iron and contain healthy omega fats. Most of the plant compounds in the traditional decoction survived a simulated digestion.",
      source: "foletti",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 review found lab studies reporting antioxidant, antibacterial, blood-sugar-lowering and anti-parasite effects.",
      source: "roubiReview",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Leaf extracts didn't damage DNA in a standard bacterial test (Ames test), and in lab tests they only harmed cells at high concentrations. No human safety studies were found.",
      source: "foletti",
    },
    {
      category: "CONTAMINATION",
      description: "The plant absorbs heavy metals from the soil and is used to clean up polluted land.",
      source: "foletti",
    },
    {
      category: "TOXICITY",
      description:
        "Like other plants in its family, saltbush is high in salts and in oxalates, compounds that bind calcium in the body.",
      source: "palgi",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "A traditional diabetes remedy. Lowered blood sugar in rats, and a small study of a four-herb tablet including it helped people with type 2 diabetes.",
    },
    { slug: "joint-discomfort", notes: "Used traditionally for arthritis. A leaf extract reduced joint swelling in arthritic rats; not tested in people." },
    { slug: "indigestion", notes: "A leaf tea is a traditional remedy for stomach and gut problems. Not studied in people." },
  ],
  preparations: [
    { slug: "decoction", notes: "Leaves boiled in water, the traditional way it's taken.", source: "foletti" },
    { slug: "culinary-preparation", notes: "Salty leaves eaten in salads and as a seasoning.", source: "foletti" },
  ],
});
