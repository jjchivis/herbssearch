import { run } from "./lib/populate-herb";

// Preparations sweep, batch 3: preparations already described in each herb's
// cited sources (traditional-use and dosage entries), restated as preparation
// links with the same source. All sources already exist in the database, so
// they are matched by URL. Left out on purpose: Pokeberry (eating boiled leaves
// still poisons people), star anise tea for babies (risk of toxic look-alikes),
// Cilantro and Cucumber Blossom (sources cover a different plant part), and uses
// that are chewed or smoked, which match no preparation type.

run(
  {
    name: "Alysicarpus Vaginalis",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In Jamaica, the plant is boiled with other roots and herbs, such as chaney root, sarsaparilla and ginger, into a \"roots tonic\" drink.", source: "s1" },
    ],
  },
  {
    name: "Amaranth",
    sources: {
      s1: { title: "Botany, ethnomedicine, phytochemistry and pharmacology of Amaranthus spp.: a review", url: "https://doi.org/10.1016/j.sajb.2025.01.030", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "About 17 of the roughly 70 amaranth species are eaten as food.", source: "s1" },
    ],
  },
  {
    name: "Ashwagandha",
    sources: {
      s1: { title: "The Medicinal Benefits of Ashwagandha", url: "https://chestnutherbs.com/the-medicinal-benefits-of-ashwagandha/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
      s2: { title: "Ashwagandha: Science, Safety, and Cautions", url: "https://www.nccih.nih.gov/health/ashwagandha", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer the root in water as a tea (decoction), and in Ayurveda it's traditionally cooked in milk or ghee (clarified butter).", source: "s1" },
      { slug: "powder", notes: "The powdered root is taken by mouth, often in capsules.", source: "s1" },
      { slug: "tincture", notes: "Tinctures (alcohol extracts) of the dried root are taken by mouth.", source: "s1" },
      { slug: "extract", notes: "Supplements usually contain extracts of the root, the leaf, or both.", source: "s2" },
    ],
  },
  {
    name: "Bai Zhi",
    sources: {
      s1: { title: "The Angelica dahurica: A Review of Traditional Uses, Phytochemistry and Pharmacology", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9283917/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "It's also made into teas.", source: "s1" },
    ],
  },
  {
    name: "Bamboo Leaf",
    sources: {
      s1: { title: "Research and utilization status of Lophatherum gracile: A medicinal and food homologous plant", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12009075/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Bamboo leaf is a popular tea in southern China, and it's added to drinks and other foods.", source: "s1" },
    ],
  },
  {
    name: "Basil",
    sources: {
      s1: { title: "Sweet Basil (Ocimum basilicum L.)―A Review of Its Botany, Phytochemistry, Pharmacological Activities, and Biotechnological Development", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10748370/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Basil Seeds as a Novel Food, Source of Nutrients and Functional Ingredients with Beneficial Properties: A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8303141/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Traditional preparations include teas and infusions of the leaves, and steam inhalations.", source: "s1" },
      { slug: "powder", notes: "The plant has also been used as powders and pastes.", source: "s1" },
      { slug: "culinary-preparation", notes: "Basil seeds (sabja) are traditionally soaked in water and eaten as a refreshing food.", source: "s2" },
    ],
  },
  {
    name: "Batana",
    sources: {
      s1: { title: "Batana Oil for Hair Growth", url: "https://www.webmd.com/beauty/batana-oil-hair-growth", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "oil", notes: "Indigenous people in Central America, including the Miskito of Honduras, have used batana oil for centuries on their hair and skin.", source: "s1" },
    ],
  },
  {
    name: "Bee Balm",
    sources: {
      s1: { title: "The Phytochemistry of Cherokee Aromatic Medicinal Plants", url: "https://pubmed.ncbi.nlm.nih.gov/30424560/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Monarda for the Mid-Atlantic Region (research report)", url: "https://publuu.com/flip-book/948685/2085804/page/2", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "poultice", notes: "The plant has been used as a poultice (a moist paste put on the skin) for colds and headaches.", source: "s1" },
      { slug: "tea-infusion", notes: "Native Americans and early settlers flavored drinks with the leaves, which is why it's also called Oswego tea.", source: "s2" },
    ],
  },
  {
    name: "Bermuda Grass",
    sources: {
      s1: { title: "Therapeutic Effects of Cynodon dactylon against Polycystic Ovary Syndrome Induced by Letrozole in Adult Rats: Ovarian and Uterine Aspects", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11976885/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "extract", notes: "In India, a juice made from the grass (durva swaras) is used as an herbal medicine.", source: "s1" },
    ],
  },
  {
    name: "Black Garlic",
    sources: {
      s1: { title: "Black Garlic and Its Bioactive Compounds on Human Health Diseases: A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8401630/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Black garlic is thought to have been eaten in Korea, Japan and Thailand since ancient times.", source: "s1" },
    ],
  },
  {
    name: "Boneset",
    sources: {
      s1: { title: "A Review and Survey of Local Eastern Kentucky Medicinal Plants and Their Pharmacological Benefits", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566942/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Native Americans drank it as a tonic tea, and in Eastern Kentucky people still drink boneset leaf tea.", source: "s1" },
    ],
  },
  {
    name: "Cardiospermum Halicacabum",
    sources: {
      s1: { title: "Ethnomedical, phytochemical and pharmacological insights on an Indian medicinal plant: The balloon vine (Cardiospermum halicacabum Linn.)", url: "https://pubmed.ncbi.nlm.nih.gov/35227784/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Balloon vine is a well-known leafy green vegetable in India.", source: "s1" },
    ],
  },
  {
    name: "Castor Oil",
    sources: {
      s1: { title: "Phytochemistry, Pharmacological Potential and Industrial Applications of Ricinus communis L.: A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13516395/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "oil", notes: "Castor oil is taken by mouth as a strong laxative.", source: "s1" },
    ],
  },
  {
    name: "Cerasee",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "In Jamaica, a handful of leaves and stems is steeped in a cup of water for about 10 minutes and sweetened as desired.", source: "s1" },
    ],
  },
  {
    name: "Chaney Root",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In Jamaica, the roots are soaked, then brewed in water for about 10 minutes with other roots and herbs, such as sarsaparilla and ginger, and sweetened to taste.", source: "s1" },
    ],
  },
  {
    name: "Chickweed",
    sources: {
      s1: { title: "Small Steps to the Big Picture for Health-Promoting Applications Through the Use of Chickweed (Stellaria media): In Vitro, In Silico, and Pharmacological Network Approaches", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11606822/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Chickweed is eaten as part of the diet.", source: "s1" },
    ],
  },
  {
    name: "Cleavers",
    sources: {
      s1: { title: "Bringing back Galium aparine L. from forgotten corners of traditional wound treatment procedures: an antimicrobial, antioxidant, and in-vitro wound healing assay along with HPTLC fingerprinting study", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11267910/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "salve", notes: "In one folk recipe, the fresh juice is mixed with butter into an ointment for scalds, burns and swelling.", source: "s1" },
    ],
  },
  {
    name: "Codonopsis",
    sources: {
      s1: { title: "A review of the botany, ethnopharmacology, phytochemistry, analysis method and quality control, processing methods, pharmacological effects, pharmacokinetics and toxicity of codonopsis radix", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10117688/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "It's used in teas, drinks and health foods.", source: "s1" },
    ],
  },
  {
    name: "Common Garden Moss",
    sources: {
      s1: { title: "Brachythecium rutabulum, A Neglected Medicinal Moss", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5849649/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "salve", notes: "In the Himalayas, the ash of burnt mosses, including this one, is mixed with fat and honey as an ointment for cuts, burns and wounds.", source: "s1" },
    ],
  },
  {
    name: "Cordyceps",
    sources: {
      s1: { title: "Effects and safety of Ophiocordyceps sinensis preparation in the adjuvant treatment for dialysis patients: a systematic review and meta-analysis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11294943/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "capsule", notes: "Most products today are made from lab-grown fungus, such as Bailing and Jinshuibao capsules.", source: "s1" },
    ],
  },
  {
    name: "Cramp Bark",
    sources: {
      s1: { title: "Viburnum opulus L.—A Review of Phytochemistry and Biological Effects", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7694363/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The sour red berries are cooked into jams, cordials and pies, and in Turkey the fermented juice (gilaburu) is a traditional drink.", source: "s1" },
    ],
  },
  {
    name: "Dill",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 3 — \"Fructus Anethi\" monograph (pp. 33-41)", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "essential-oil", notes: "The World Health Organization lists dill essential oil among dill preparations.", source: "s1" },
    ],
  },
  {
    name: "Dog's Blood",
    sources: {
      s1: { title: "The Consumption of Edible Leaves by Afro-Descendants in French Guiana and Suriname: An Overview of a Constantly Evolving Ethno-Culinary Practice", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13363756/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The red berries are eaten.", source: "s1" },
    ],
  },
  {
    name: "Drynaria Rhizome",
    sources: {
      s1: { title: "Extracts of Drynariae Rhizoma Promote Bone Formation in OVX Rats through Modulating the Gut Microbiota", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11928296/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "extract", notes: "In Chinese medicine it's usually taken as a water extract in herbal prescriptions.", source: "s1" },
    ],
  },
  {
    name: "Duckweed",
    sources: {
      s1: { title: "Lemna minor: Unlocking the Value of This Duckweed for the Food and Feed Industry", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11120004/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Duckweed has historically been eaten in southwest Asia.", source: "s1" },
    ],
  },
  {
    name: "Elecampane",
    sources: {
      s1: { title: "From Monographs to Chromatograms: The Antimicrobial Potential of Inula helenium L. (Elecampane) Naturalised in Ireland", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8874828/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The root is traditionally boiled in water to make a decoction.", source: "s1" },
    ],
  },
  {
    name: "Eleuthera",
    sources: {
      s1: { title: "King's American Dispensatory: Cascarilla (U.S.P.)", url: "https://henriettes-herb.com/eclectic/kings/croton-elut.html", sourceType: "historical_text", tier: "TIER_4_TRADITIONAL_TEXT" },
    },
    preparations: [
      { slug: "powder", notes: "Historically, the bark was taken as a powder.", source: "s1" },
      { slug: "tincture", notes: "Historically, the bark was taken as a tincture.", source: "s1" },
      { slug: "tea-infusion", notes: "Historically, the bark was taken as a tea.", source: "s1" },
    ],
  },
  {
    name: "Epazote",
    sources: {
      s1: { title: "A Fatal Case Report of Chenopodium ambrosioides L. (M'khinza) Intoxication", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11177892/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "It's traditionally taken as a tea.", source: "s1" },
    ],
  },
  {
    name: "Eyebright",
    sources: {
      s1: { title: "Public statement on Euphrasia officinalis L. and Euphrasia rostkoviana Hayne, herba (EMA/HMPC/727465/2009)", url: "https://www.ema.europa.eu/en/documents/public-statement/final-public-statement-euphrasia-officinalis-l-and-euphrasia-rostkoviana-hayne-herba_en.pdf", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Water-based infusions have traditionally been used as soaked dressings on the eyes.", source: "s1" },
      { slug: "salve", notes: "A nasal ointment containing eyebright has been used for nose irritation with a cold.", source: "s1" },
    ],
  },
  {
    name: "Flaxseed",
    sources: {
      s1: { title: "Flaxseed and Flaxseed Oil: Usefulness and Safety", url: "https://www.nccih.nih.gov/health/flaxseed-and-flaxseed-oil", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "oil", notes: "Flaxseed oil is sold as a supplement.", source: "s1" },
      { slug: "poultice", notes: "North American settlers used flaxseed in poultices (a paste put on the skin).", source: "s1" },
    ],
  },
  {
    name: "Fo-Ti",
    sources: {
      s1: { title: "Polygonum multiflorum-Induced Liver Injury: Clinical Characteristics, Risk Factors, Material Basis, Action Mechanism and Current Challenges", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6923272/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The root is used raw or processed (boiled in black-bean liquid), as decoctions and in Chinese patent medicines.", source: "s1" },
    ],
  },
  {
    name: "Gambir Hook Vine",
    sources: {
      s1: { title: "Uncaria rhynchophylla: an ethnopharmacological review integrating traditional Chinese medicine uses with phytochemical and pharmacological evidence", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12999810/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The hooks are traditionally added to a boiling decoction only for the last 5 to 10 minutes, because long boiling breaks down its main compounds.", source: "s1" },
    ],
  },
  {
    name: "Gastrodia Elata Rhizome",
    sources: {
      s1: { title: "From molecules to medicine: a systematic review of Gastrodia elata's bioactive metabolites and therapeutic potential", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12634510/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "decoction", notes: "It's usually taken as a decoction, often with other herbs such as chuanxiong.", source: "s1" },
    ],
  },
  {
    name: "Gold Coin Grass",
    sources: {
      s1: { title: "Desmodium styracifolium: Botanical and ethnopharmacological insights, phytochemical investigations, and prospects in pharmacology and pharmacotherapy", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10838797/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Mechanisms Underlying the Prevention and Treatment of Cholelithiasis Using Traditional Chinese Medicine", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6601506/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "The whole plant is boiled in water as a decoction.", source: "s1" },
      { slug: "capsule", notes: "It's the only ingredient in Jin Qian Cao capsules, a gallstone medicine approved in China.", source: "s2" },
    ],
  },
  {
    name: "Green Tea",
    sources: {
      s1: { title: "Green Tea: Usefulness and Safety", url: "https://www.nccih.nih.gov/health/green-tea", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Green tea is made from the leaves of the tea plant (Camellia sinensis), the same plant as black and oolong tea, prepared in a different way.", source: "s1" },
      { slug: "extract", notes: "Green tea extracts are sold as dietary supplements.", source: "s1" },
    ],
  },
  {
    name: "Gynostemma",
    sources: {
      s1: { title: "Prebiotic properties of jiaogulan in the context of gut microbiome", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8907712/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Jiaogulan tea and drinks are sold in the United States, China and other Asian countries.", source: "s1" },
      { slug: "culinary-preparation", notes: "It's also used in foods such as bread and noodles.", source: "s1" },
    ],
  },
  {
    name: "Hibiscus",
    sources: {
      s1: { title: "The effectiveness of Hibiscus sabdariffa in the treatment of hypertension: a systematic review", url: "https://pubmed.ncbi.nlm.nih.gov/19801187/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
      s2: { title: "The Medicinal Benefits of Hibiscus", url: "https://chestnutherbs.com/medicinal-benefits-of-hibiscus/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Hibiscus tea is drunk hot or cold in many countries.", source: "s1" },
      { slug: "syrup", notes: "The calyces (the fleshy red cups often sold as \"flowers\") are made into syrups and jams.", source: "s2" },
      { slug: "culinary-preparation", notes: "The sour young leaves are eaten as a vegetable.", source: "s2" },
    ],
  },
  {
    name: "Honeysuckle",
    sources: {
      s1: { title: "Lonicera japonica Thunb.: ethnopharmacology, phytochemistry and pharmacology of an important traditional Chinese medicine", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7127058/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Honeysuckle is eaten as a health food.", source: "s1" },
    ],
  },
  {
    name: "Hyssop",
    sources: {
      s1: { title: "Hyssopus Essential Oil: An Update of Its Phytochemistry, Biological Activities, and Safety Profile", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8776447/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "essential-oil", notes: "Hyssop essential oil is used to flavor foods and drinks and in cosmetics.", source: "s1" },
    ],
  },
  {
    name: "Indian Trumpet Tree",
    sources: {
      s1: { title: "A Review on the Taxonomy, Ethnobotany, Chemistry and Pharmacology of Oroxylum indicum Vent.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3425058/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "poultice", notes: "A paste of the bark is put on skin diseases.", source: "s1" },
    ],
  },
  {
    name: "Ju Hua",
    sources: {
      s1: { title: "Chrysanthemum morifolium as a traditional herb: A review of historical development, classification, phytochemistry, pharmacology and application", url: "https://pubmed.ncbi.nlm.nih.gov/38621465/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The flowers are drunk as a tea in China.", source: "s1" },
    ],
  },
  {
    name: "Katuki",
    sources: {
      s1: { title: "Pharmacological and Clinical Efficacy of Picrorhiza kurroa and Its Secondary Metabolites: A Comprehensive Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9738980/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "capsule", notes: "It's usually taken as capsules of standardized extract.", source: "s1" },
    ],
  },
  {
    name: "Korean Bellflower",
    sources: {
      s1: { title: "Ethnopharmacology, phytochemistry, pharmacology and product application of Platycodon grandiflorum: A review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11283231/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It's widely eaten as a vegetable.", source: "s1" },
    ],
  },
  {
    name: "Lemongrass",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "A handful of leaves and stems is brewed in a cup of water for about 10 minutes and sweetened to taste.", source: "s1" },
    ],
  },
  {
    name: "Lindera Root",
    sources: {
      s1: { title: "A review on the chemical constituents and pharmacological efficacies of Lindera aggregata (Sims) Kosterm.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9884700/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The young leaves are drunk as a tea.", source: "s1" },
    ],
  },
  {
    name: "Maca",
    sources: {
      s1: { title: "Maca. In: LiverTox: Clinical and Research Information on Drug-Induced Liver Injury", url: "https://www.ncbi.nlm.nih.gov/books/NBK548552/", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Maca is eaten as a vegetable.", source: "s1" },
    ],
  },
  {
    name: "Magnolia Bark",
    sources: {
      s1: { title: "Evaluation of short-term and subchronic toxicity of magnolia bark extract in rats", url: "https://pubmed.ncbi.nlm.nih.gov/17692445/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "extract", notes: "Magnolia bark extract is used in dietary supplements.", source: "s1" },
    ],
  },
  {
    name: "Malabar Nut",
    sources: {
      s1: { title: "A clinical review of different formulations of Vasa (Adhatoda vasica) on Tamaka Shwasa (asthma)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202261/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "extract", notes: "In Ayurveda, a concentrated extract (vasa ghana) is one of several vasa preparations used for asthma.", source: "s1" },
    ],
  },
  {
    name: "Mango Leaf",
    sources: {
      s1: { title: "Mango (Mangifera indica L.) Leaves: Nutritional Composition, Phytochemical Profile, and Health-Promoting Bioactivities", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7920260/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Mango leaves are made into a folk tea, especially in Asia and Africa.", source: "s1" },
    ],
  },
  {
    name: "Marigold",
    sources: {
      s1: { title: "Tagetes spp. Essential Oils and Other Extracts: Chemical Characterization and Biological Activity", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6278309/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The flowers are drunk as a tea.", source: "s1" },
    ],
  },
  {
    name: "Mitragyna",
    sources: {
      s1: { title: "Kratom", url: "https://nida.nih.gov/research-topics/kratom", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "capsule", notes: "Kratom leaf products are sold as capsules.", source: "s1" },
      { slug: "powder", notes: "Kratom leaf products are sold as powders.", source: "s1" },
      { slug: "tea-infusion", notes: "Kratom leaf products are sold as teas.", source: "s1" },
      { slug: "extract", notes: "Kratom leaf products are sold as liquid extracts.", source: "s1" },
    ],
  },
  {
    name: "Mosla Herb",
    sources: {
      s1: { title: "Moslae Herba: Botany, Traditional Uses, Phytochemistry, and Pharmacology", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11051901/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It's cooked into porridge.", source: "s1" },
    ],
  },
  {
    name: "Mugwort",
    sources: {
      s1: { title: "Significance of Artemisia Vulgaris L. (Common Mugwort) in the History of Medicine and Its Possible Contemporary Applications Substantiated by Phytochemical and Pharmacological Studies", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7583039/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "essential-oil", notes: "Mugwort essential oil is used in insect repellents.", source: "s1" },
    ],
  },
  {
    name: "Oregano",
    sources: {
      s1: { title: "A Review of the Phytochemistry and Antimicrobial Properties of Origanum vulgare L. and Subspecies", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8457725/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Oregano", url: "https://www.ncbi.nlm.nih.gov/books/NBK591556/", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Oregano has long been used as a cooking spice.", source: "s1" },
      { slug: "essential-oil", notes: "Oregano oil is sold over the counter as a supplement, in capsules or as an oil.", source: "s2" },
    ],
  },
  {
    name: "Parsley",
    sources: {
      s1: { title: "Parsley herb and root (Petroselini herba/radix) — German Commission E Monograph", url: "https://www.herbalgram.org/resources/commission-e-monographs/monograph-approved-herbs/parsley-herb-and-root/", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Commission E describes the dried leaf or root, crushed, for tea.", source: "s1" },
    ],
  },
  {
    name: "Pepper Elder",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "1 to 2 teaspoons of leaves are brewed in a cup of water, left to steep for about 10 minutes, and sweetened as desired.", source: "s1" },
    ],
  },
  {
    name: "Pine Needles",
    sources: {
      s1: { title: "Ethnopharmacology of Pinus species with focus on the Hispaniola pine (Pinus occidentalis Swartz): evidence, gaps, and research roadmap", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12657381/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Pine needle tea is very popular in Japan, Russia, Korea and China.", source: "s1" },
    ],
  },
  {
    name: "Plum Flower",
    sources: {
      s1: { title: "Comprehensive Analysis of 50 Edible Flowers From Yunnan Province: Active Components, Antioxidant Capacity, Tyrosinase Inhibitory Activity and Microbiological Safety", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12279552/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Plum flowers are eaten as an edible flower in Yunnan, China.", source: "s1" },
    ],
  },
  {
    name: "Prickly Ash",
    sources: {
      s1: { title: "Plant Guide: Common Pricklyash, Zanthoxylum americanum P. Mill.", url: "https://plants.usda.gov/DocumentLibrary/plantguide/pdf/pg_zaam.pdf", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The bark has traditionally been made into a tea.", source: "s1" },
    ],
  },
  {
    name: "Prunella Vulgaris",
    sources: {
      s1: { title: "Anti-Tumor Effects and Toxicity Reduction Mechanisms of Prunella vulgaris: A Comprehensive Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11052495/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "It's made into teas.", source: "s1" },
      { slug: "culinary-preparation", notes: "The young leaves have been cooked as a vegetable since at least the Song Dynasty, and it's made into porridge.", source: "s1" },
    ],
  },
  {
    name: "Ra-Moon",
    sources: {
      s1: { title: "Raise libido with ra-moon", url: "https://www.jamaicaobserver.com/2010/09/08/raise-libido-with-ra-moon/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The bark is mostly used, as a tea or in roots drinks.", source: "s1" },
    ],
  },
  {
    name: "Rooibos",
    sources: {
      s1: { title: "The health benefits of rooibos tea in humans (Aspalathus linearis): a scoping review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10774856/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Rooibos is a popular South African herbal tea, mostly drunk as red or green rooibos.", source: "s1" },
      { slug: "capsule", notes: "It's also sold as capsules and tablets.", source: "s1" },
    ],
  },
  {
    name: "Saffron",
    sources: {
      s1: { title: "Adverse Events of Saffron (Crocus sativus L.): Systematic Review of Current Evidence", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13121846/", sourceType: "systematic_review", tier: "TIER_2_SYSTEMATIC_REVIEW" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Saffron is a costly spice made from the dried red threads (stigmas) of the flower.", source: "s1" },
    ],
  },
  {
    name: "Sarsaparilla",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In Jamaica, the root is one of those boiled into the \"roots tonic\" or \"strong back\" drink.", source: "s1" },
    ],
  },
  {
    name: "Scutellaria Baicalensis",
    sources: {
      s1: { title: "Recent advances in Scutellariae radix: A comprehensive review on ethnobotanical uses, processing, phytochemistry, pharmacological effects, quality control and influence factors of biosynthesis", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11388511/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "It's an ingredient in many formulas, such as Huangqin decoction.", source: "s1" },
    ],
  },
  {
    name: "Sea Buckthorn",
    sources: {
      s1: { title: "Hippophae rhamnoides L.: A Comprehensive Review on the Botany, Traditional Uses, Phytonutrients, Health Benefits, Quality Markers, and Applications", url: "https://pubmed.ncbi.nlm.nih.gov/36930583/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It's eaten as a food worldwide, as juice, wine, ferments and yogurt.", source: "s1" },
      { slug: "oil", notes: "Sea buckthorn oil is taken as a supplement.", source: "s1" },
    ],
  },
  {
    name: "Search Mi Heart",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "1 to 2 teaspoons of dried leaves are brewed in a cup of water, left to steep for about 10 minutes, and sweetened as desired.", source: "s1" },
    ],
  },
  {
    name: "Shame O' Lady",
    sources: {
      s1: { title: "Mimosa pudica", url: "https://tramil.net/en/plant/mimosa-pudica", sourceType: "historical_text", tier: "TIER_4_TRADITIONAL_TEXT" },
    },
    preparations: [
      { slug: "decoction", notes: "5 grams of leaves and roots are boiled for 10 minutes, or steeped, in 4 cups (1 litre) of water.", source: "s1" },
    ],
  },
  {
    name: "Shiso Perilla Seeds",
    sources: {
      s1: { title: "A comprehensive review on nutritional, nutraceutical, and industrial perspectives of perilla (Perilla frutscens L.) seeds: An orphan oilseed crop", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11252951/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "oil", notes: "One variety of perilla is grown mainly for its seeds and oil.", source: "s1" },
    ],
  },
  {
    name: "Skullcap",
    sources: {
      s1: { title: "LiverTox: Skullcap", url: "https://www.ncbi.nlm.nih.gov/books/NBK548757/", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves and stems are taken as a tea.", source: "s1" },
      { slug: "extract", notes: "The dried leaves and stems are also taken as an extract.", source: "s1" },
    ],
  },
  {
    name: "Snapdragon",
    sources: {
      s1: { title: "Antimicrobial activity and molecular docking screening of bioactive components of Antirrhinum majus (snapdragon) aerial parts", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9441312/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In Iraqi tradition, the whole plant is boiled and used as a wash.", source: "s1" },
      { slug: "oil", notes: "The seeds give an oil used in cooking.", source: "s1" },
    ],
  },
  {
    name: "Solomon's Seal",
    sources: {
      s1: { title: "Polygonatum odoratum (Mill.) Druce: A Review of Traditional Uses, Phytochemistry, Mass Spectrometric Fragmentation, Pharmacology, Toxicology, and Q-Marker Prediction", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13594521/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It's eaten as both food and medicine.", source: "s1" },
    ],
  },
  {
    name: "Soursop",
    sources: {
      s1: { title: "Annona muricata: Comprehensive Review on the Ethnomedicinal, Phytochemistry, and Pharmacological Aspects Focusing on Antidiabetic Properties", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9968120/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The fruit is widely eaten in sweets, ice cream and juices.", source: "s1" },
    ],
  },
  {
    name: "Sphagnum Moss",
    sources: {
      s1: { title: "Four Centuries of Medicinal Mosses and Liverworts in European Ethnopharmacy and Scientific Pharmacy: A Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8309153/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "poultice", notes: "It has been boiled with beer and applied as a poultice to swollen feet.", source: "s1" },
    ],
  },
  {
    name: "Star Anise",
    sources: {
      s1: { title: "A Comprehensive Review of the Pharmacology, Chemistry, Traditional Uses and Quality Control of Star Anise (Illicium verum Hook. F.): An Aromatic Medicinal Plant", url: "https://pubmed.ncbi.nlm.nih.gov/37959797/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Star anise has long been a cooking spice in China.", source: "s1" },
    ],
  },
  {
    name: "Stinging Nettle Seeds",
    sources: {
      s1: { title: "The chemical characterisation of nettle (Urtica dioica L.) seed oil", url: "https://pubmed.ncbi.nlm.nih.gov/37621206/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "oil", notes: "Nettle seed oil is an edible oil that stays stable when heated.", source: "s1" },
    ],
  },
  {
    name: "Strong Back Root",
    sources: {
      s1: { title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "decoction", notes: "In Jamaica, redgal (Morinda royoc) is one of the plants boiled into a \"roots tonic\" or \"strong back\" drink.", source: "s1" },
    ],
  },
  {
    name: "Susumber",
    sources: {
      s1: { title: "Electromyographic and laboratory findings in acute Solanum torvum poisoning", url: "https://doi.org/10.3109/15563650.2015.1110749", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Phytochemistry and Pharmacological Studies on Solanum torvum Swartz", url: "https://www.japsonline.com/admin/php/uploads/868_pdf.pdf", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s3: { title: "Steroidal Saponins from Water Eggplant (Fruits of Solanum torvum) Exhibit Anti-Epileptic Activity against Pentylenetetrazole-Induced Seizure Model in Zebrafish", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10974013/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "In Jamaica, the berries are cooked in traditional dishes, usually served with cod and rice.", source: "s1" },
      { slug: "powder", notes: "In India, dried leaf powder is taken in hot water or milk for colds and coughs.", source: "s2" },
      { slug: "decoction", notes: "In the Philippines, a tea is made by boiling the plant in water.", source: "s3" },
    ],
  },
  {
    name: "Tarragon",
    sources: {
      s1: { title: "Artemisia dracunculus (Tarragon): A Review of Its Traditional Uses, Phytochemistry and Pharmacology", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8076785/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Tarragon is a spice in Asia, Europe and the Americas.", source: "s1" },
    ],
  },
  {
    name: "Tepezcohuite",
    sources: {
      s1: { title: "Description, distribution, anatomy, chemical composition and uses of Mimosa tenuiflora (Fabaceae-Mimosoideae) in Mexico", url: "https://pubmed.ncbi.nlm.nih.gov/11487939/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "In southern Mexico, the bark is made into a tea that's used on skin wounds and burns.", source: "s1" },
      { slug: "powder", notes: "The powdered bark is put on skin wounds and burns.", source: "s1" },
      { slug: "salve", notes: "The bark is made into ointments, and it's sold in creams, shampoos and soaps.", source: "s1" },
      { slug: "capsule", notes: "It's also sold in capsules.", source: "s1" },
    ],
  },
  {
    name: "Tremella",
    sources: {
      s1: { title: "Recent advances in polysaccharides from Tremella fuciformis: isolation, structures, bioactivities and application", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12672291/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "It has been eaten in Asian countries for centuries.", source: "s1" },
    ],
  },
  {
    name: "Vervain",
    sources: {
      s1: { title: "Stachytarpheta jamaicensis (L.) Vahl: From Traditional Usage to Pharmacological Evidence", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4746381/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Older people often drink a \"cooling\" tea made from the leaves and stems.", source: "s1" },
    ],
  },
  {
    name: "Wereke",
    sources: {
      s1: { title: "Wereke (Ibervillea sonorae): Herbal Facts Sheet", url: "https://www.utep.edu/herbal-safety/herbal-facts/herbal%20facts%20sheet/wereke.html", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Slices of dried root are boiled in water and the tea is drunk.", source: "s1" },
    ],
  },
  {
    name: "Wild Cherry",
    sources: {
      s1: { title: "Simultaneous quantification by HPLC of the phenolic compounds for the crude drug of Prunus serotina subsp. capuli", url: "https://pubmed.ncbi.nlm.nih.gov/24617838/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
      s2: { title: "Nutritional value and volatile compounds of black cherry (Prunus serotina) seeds", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6272227/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "In Mexico, capulín is most often used as a tea of the leaves.", source: "s1" },
      { slug: "culinary-preparation", notes: "The seeds are eaten as snacks in Mexico.", source: "s2" },
    ],
  },
);
