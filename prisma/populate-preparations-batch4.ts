import { run } from "./lib/populate-herb";

// Preparations sweep, batch 4: preparations described in the full text of papers
// each herb already cites (read on PubMed Central). Only sentences about the same
// species were used; sources are matched by URL.

run(
  {
    name: "Abrus Precatorius",
    sources: {
      s1: { title: "The potential of Abrus precatorius leaves in arthritis alleviation computational approaches through LC-MS analysis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11938972/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In West Java, Indonesia, a decoction of the leaves is commonly drunk.", source: "s1" },
    ],
  },
  {
    name: "Amla",
    sources: {
      s1: { title: "Functional and Nutraceutical Significance of Amla (Phyllanthus emblica L.): A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9137578/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "In clinical trials, amla extract has been taken as capsules or tablets.", source: "s1" },
    ],
  },
  {
    name: "Andrographis",
    sources: {
      s1: { title: "Andrographis paniculata (Chuān Xīn Lián) for symptomatic relief of acute respiratory tract infections in adults and children: A systematic review and meta-analysis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5544222/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "capsule", notes: "In clinical trials, andrographis is mostly taken as capsules or tablets; granules and pills are also used.", source: "s1" },
    ],
  },
  {
    name: "Angelica",
    sources: {
      s1: { title: "Effects of Angelica archangelica Extract on Overactive Bladder: A Pilot Randomized Controlled Trial", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12683295/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "In one trial, angelica leaf extract was taken as capsules.", source: "s1" },
    ],
  },
  {
    name: "Aster Root",
    sources: {
      s1: { title: "Aster tataricus L. f.: a review on the botany, phytochemistry, ethnopharmacology, pharmacology, toxicology and comprehensive utilization", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12014666/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The root is boiled (decocted) with other herbs, such as licorice and honey, for coughs.", source: "s1" },
      { slug: "culinary-preparation", notes: "In China, North Korea and Japan, the young leaves are eaten as a vegetable, fresh or dried, in soups or with sauce.", source: "s1" },
      { slug: "tea-infusion", notes: "The dried leaves are also soaked in scented tea to make Zi Wan tea.", source: "s1" },
    ],
  },
  {
    name: "Bearded Scutellaria",
    sources: {
      s1: { title: "Chemical Constituents, Anti-Tumor Mechanisms, and Clinical Application: A Comprehensive Review on Scutellaria barbata", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11397148/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "It's used in Chinese patent medicines such as Scutellaria barbata capsules and tablets.", source: "s1" },
    ],
  },
  {
    name: "Bitter Melon",
    sources: {
      s1: { title: "Momordica charantia L.—Diabetes-Related Bioactivities, Quality Control, and Safety Considerations", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9152207/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The unripe fruits are eaten as a vegetable in many tropical and subtropical countries.", source: "s1" },
      { slug: "extract", notes: "The most common traditional preparation is karela juice, made by crushing and straining the unripe fruits.", source: "s1" },
      { slug: "capsule", notes: "Most clinical studies used capsules or tablets of dried fruit powder.", source: "s1" },
    ],
  },
  {
    name: "Butterfly Pea Flower",
    sources: {
      s1: { title: "Traditionally Used Edible Flowers as a Source of Neuroactive, Antioxidant, and Anti-Inflammatory Extracts and Bioactive Compounds: A Narrative Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11820717/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The flowers have been used as a food dye and vegetable in Southeast Asia.", source: "s1" },
    ],
  },
  {
    name: "Caulis Spatholobus",
    sources: {
      s1: { title: "A Review of the Pharmacological Potential of Spatholobus suberectus Dunn on Cancer", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9497142/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's the main ingredient in Chinese herbal decoctions such as Gubi decoction.", source: "s1" },
    ],
  },
  {
    name: "Cedar",
    sources: {
      s1: { title: "Thuja occidentalis (Arbor vitae): A Review of its Pharmaceutical, Pharmacological and Clinical Properties", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1062158/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tincture", notes: "Today it's mainly used in homeopathy, as a mother tincture or dilution.", source: "s1" },
    ],
  },
  {
    name: "Chaga",
    sources: {
      s1: { title: "A brief overview of the medicinal and nutraceutical importance of Inonotus obliquus (chaga) mushrooms", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11336990/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The hard woody mass is boiled to make a tea.", source: "s1" },
    ],
  },
  {
    name: "Chanca Piedra",
    sources: {
      s1: { title: "Effects of one-year supplementation with Phyllanthus niruri on fibrosis score and metabolic markers in patients with non-alcoholic fatty liver disease: A randomized, double-blind, placebo-controlled trial", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10258366/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "In one 12-month study, it was taken as capsules.", source: "s1" },
    ],
  },
  {
    name: "Cilantro",
    sources: {
      s1: { title: "Essential Oil from Coriandrum sativum: A Review on Its Phytochemistry and Biological Activity", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9864992/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The leaves are used as a vegetable and in salads.", source: "s1" },
    ],
  },
  {
    name: "Damiana",
    sources: {
      s1: { title: "Flavonoid Composition and Molecular Basis of the Potential Sexual-Enhancing Properties of a Turnera diffusa Extract (Liboost)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118355/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The leaves and stems are usually taken as an infusion (tea) or in herbal formulas.", source: "s1" },
    ],
  },
  {
    name: "Dan Shen",
    sources: {
      s1: { title: "Cardiovascular Benefits of Salvia miltiorrhiza (Danshen) Supplementation: Bioactive Constituents, Mechanisms, Clinical Evidence, and Formulation Strategies", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13111759/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's used crude or in preparations such as decoctions, dripping pills and injections.", source: "s1" },
    ],
  },
  {
    name: "Devil's Horsewhip",
    sources: {
      s1: { title: "Qualitative Phytochemical Fingerprint and Network Pharmacology Investigation of Achyranthes aspera Linn. Extracts", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7221715/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In the Ivory Coast, decoctions are used for diabetes and to increase urination.", source: "s1" },
    ],
  },
  {
    name: "Evodia Fruit",
    sources: {
      s1: { title: "Euodiae Fructus: a review of botany, application, processing, phytochemistry, quality control, pharmacology, and toxicology", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11813794/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The usual dose of 2 to 5 g is taken as a water decoction, or as pills or powder.", source: "s1" },
    ],
  },
  {
    name: "Giloy (Guduchi)",
    sources: {
      s1: { title: "Immunomodulatory properties of Giloy (Tinospora cordifolia) leaves and its applications in value-added products", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11699423/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Tinospora Cordifolia (Giloy)-Induced Liver Injury During the COVID-19 Pandemic-Multicenter Nationwide Study From India", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9134809/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "powder", notes: "Products include giloy leaf powder and traditional churan (powder).", source: "s1" },
      { slug: "capsule", notes: "It's also sold as capsules, juice and leaf extract.", source: "s1" },
      { slug: "decoction", notes: "In one study of patients with liver injury, people had taken it as tablets or decoctions.", source: "s2" },
    ],
  },
  {
    name: "Glehnia Root",
    sources: {
      s1: { title: "Extraction, Purification, Structure, and Bioactivities of Polysaccharides from Glehnia littoralis: A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12610580/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's used in Chinese formulas such as Yiguanjian decoction and Yiwei decoction.", source: "s1" },
    ],
  },
  {
    name: "Gui Pi Wan",
    sources: {
      s1: { title: "Systematic review and meta-analysis of Guipi Decoction in the treatment of anemia", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12303479/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "decoction", notes: "The formula is also prepared as Guipi decoction.", source: "s1" },
    ],
  },
  {
    name: "Gungo Peas",
    sources: {
      s1: { title: "The flavonoid profile of pigeonpea, Cajanus cajan: a review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4365078/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Pigeon peas are an important source of protein, eaten in dhal and as a green vegetable.", source: "s1" },
    ],
  },
  {
    name: "Holy Basil",
    sources: {
      s1: { title: "The Clinical Efficacy and Safety of Tulsi in Humans: A Systematic Review of the Literature", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5376420/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "A tea of the leaves has been used for stomach and liver problems.", source: "s1" },
      { slug: "capsule", notes: "In one study, a leaf extract was taken as 250 mg capsules before meals.", source: "s1" },
    ],
  },
  {
    name: "Leaf of Life",
    sources: {
      s1: { title: "Bryophyllum pinnatum and Improvement of Nocturia and Sleep Quality in Women: A Multicentre, Nonrandomised Prospective Trial", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9928503/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "extract", notes: "Juice pressed from the fresh leaves is made into chewable tablets (Bryophyllum 50%).", source: "s1" },
    ],
  },
  {
    name: "Moringa",
    sources: {
      s1: { title: "The Effect of Moringa oleifera on Body Weight and Blood Pressure: A Systematic Review and Meta-Analysis of Randomized Controlled Trials", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13238855/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "powder", notes: "Moringa is used as leaf powder.", source: "s1" },
      { slug: "capsule", notes: "It's also taken as extracts and capsules.", source: "s1" },
    ],
  },
  {
    name: "Periwinkle",
    sources: {
      s1: { title: "Hypoglycemic Activity of Aqueous Extracts from Catharanthus roseus", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3463976/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Ornamental exterior versus therapeutic interior of Madagascar periwinkle (Catharanthus roseus): the two faces of a versatile herb", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4312627/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "In Indian traditional medicine, an infusion of seven flowers or leaves is taken for diabetes.", source: "s1" },
      { slug: "decoction", notes: "In Togo, a decoction of the root is taken for painful periods.", source: "s2" },
    ],
  },
  {
    name: "Polygonatum Sibiricum",
    sources: {
      s1: { title: "Preparation, Structure, Function, and Application of Dietary Polysaccharides from Polygonatum sibiricum in the Food Industry: A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11901943/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's mostly used as Chinese patent medicines, simple preparations or decoctions.", source: "s1" },
    ],
  },
  {
    name: "Polyporus Umbellatus",
    sources: {
      s1: { title: "A systematic review of advances in preparation, structures, bioactivities, structural-property relationships, and applications of Polyporus umbellatus polysaccharides", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11780138/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "Polysaccharide capsules made from it are approved as medicines in China.", source: "s1" },
    ],
  },
  {
    name: "Poria Cocos",
    sources: {
      s1: { title: "Phytochemistry and Pharmacological Activities of Wolfiporia cocos (F.A. Wolf) Ryvarden & Gilb.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7533546/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's used in decoctions such as compound fuling and licorice decoction.", source: "s1" },
    ],
  },
  {
    name: "Purslane",
    sources: {
      s1: { title: "Agronomic management enhances nutritional quality and functional food potential of purslane (Portulaca oleracea L.): a review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13463944/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Purslane is eaten raw in salads, cooked as a green, or in soups, in Mediterranean, Middle Eastern, Asian and African cooking.", source: "s1" },
    ],
  },
  {
    name: "Queen Anne's Lace",
    sources: {
      s1: { title: "The Wild Carrot (Daucus carota): A Phytochemical and Pharmacological Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10781147/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The young taproot is eaten cooked, and the flower heads are fried.", source: "s1" },
      { slug: "oil", notes: "Oil from the seeds is used as a flavoring in drinks and foods.", source: "s1" },
    ],
  },
  {
    name: "Rosehips",
    sources: {
      s1: { title: "Unveiling the mechanisms for the development of rosehip-based dermatological products: an updated review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11043540/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Effects of Daily Intake of Rosehip Extract on Low-Density Lipoprotein Cholesterol and Blood Glucose Levels: A Systematic Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10821714/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "decoction", notes: "A rosehip decoction can be used on sensitive skin as an astringent moisturizer.", source: "s1" },
      { slug: "extract", notes: "In one trial, a rosehip extract was taken as a 100 mg tablet once a day.", source: "s2" },
    ],
  },
  {
    name: "Sceletium Tortuosum",
    sources: {
      s1: { title: "Proof-of-Concept Randomized Controlled Study of Cognition Effects of the Proprietary Extract Sceletium tortuosum (Zembrin) Targeting Phosphodiesterase-4 in Cognitively Healthy Subjects: Implications for Alzheimer's Dementia", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4217361/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "A standardized extract (Zembrin) has been taken as capsules in clinical trials.", source: "s1" },
    ],
  },
  {
    name: "Schisandra",
    sources: {
      s1: { title: "Efficacy of Schisandra chinensis in liver injury: a systematic review and preclinical meta-analysis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12358260/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "decoction", notes: "The Chinese Pharmacopoeia describes 3 to 9 g of dried berries, usually boiled in water as a decoction.", source: "s1" },
      { slug: "powder", notes: "The berries are also made into pills or powders.", source: "s1" },
    ],
  },
  {
    name: "Sheng Mai Yin Wan",
    sources: {
      s1: { title: "Effectiveness and Safety of Shengmai San for Viral Myocarditis: A Systematic Review and Meta-Analysis of Randomized Controlled Trials", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11211013/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "decoction", notes: "The formula is prepared as a decoction, made by a pharmacy or by patients.", source: "s1" },
      { slug: "capsule", notes: "It's also made into patent medicines as capsules, pills and oral liquids.", source: "s1" },
    ],
  },
  {
    name: "Siamese Cassia",
    sources: {
      s1: { title: "Antidiabetic Potential of Senna siamea: α-Glucosidase Inhibition, Postprandial Blood Glucose Reduction, Toxicity Evaluation, and Molecular Docking", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11824848/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "In Thailand, the dried leaves are used as a laxative and sleeping aid in capsule form.", source: "s1" },
    ],
  },
  {
    name: "Spearmint",
    sources: {
      s1: { title: "Spearmint Extract Improves Working Memory in Men and Women with Age-Associated Memory Impairment", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5779242/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "capsule", notes: "In one trial, a spearmint extract was taken as capsules with breakfast.", source: "s1" },
    ],
  },
  {
    name: "Triphala",
    sources: {
      s1: { title: "Effects of Triphala on Lipid and Glucose Profiles and Anthropometric Parameters: A Systematic Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8072855/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "powder", notes: "Triphala is used as an extract or as capsules containing the powder.", source: "s1" },
    ],
  },
  {
    name: "Yerba Santa",
    sources: {
      s1: { title: "Chemical Composition of Eriodictyon californicum (California Yerba Santa) Cultivated in Ontario, Oregon, USA", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118867/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The Miwok took an infusion (tea) of the leaves and flowers for coughs and colds.", source: "s1" },
      { slug: "poultice", notes: "The Miwok put a poultice of the leaves on aching or sore spots.", source: "s1" },
    ],
  },
);
