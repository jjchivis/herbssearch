import { run } from "./lib/populate-herb";

// Cardoon (Cynara cardunculus var. altilis), from a 2022 review of its health
// compounds (Silva et al.), a 2020 review of uses beyond cheese-making (Barbosa
// et al.), a 2018 review of cardoon rennets (Almeida & Simões), a lab study of
// its leaf stalks (Mandim et al. 2021), two human trials of cardoon-based
// supplements (Ferro et al. 2020; Terzo et al. 2023), and the European
// Medicines Agency monograph on leaves of this species (sold as artichoke leaf).
// Artichoke trials (Cynara scolymus) are on the Artichoke Leaf page, not here.

run({
  name: "Cardoon",
  profile: {
    family: "Asteraceae",
    genus: "Cynara",
    species: "cardunculus",
    nativeRange: "The Mediterranean",
    partsUsed: "The leaf stalks (as a vegetable), the flowers (to curdle milk) and the leaves (in extracts)",
  },
  sources: {
    silva: {
      title: "Bioactive Compounds from Cardoon as Health Promoters in Metabolic Disorders",
      author: "Silva LR, Jacinto TA, Coutinho P",
      journal: "Foods",
      publicationDate: "2022-01-25",
      doi: "10.3390/foods11030336",
      pmid: "35159487",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8915173/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    barbosa: {
      title: "A New Insight on Cardoon: Exploring New Uses besides Cheese Making with a View to Zero Waste",
      author: "Barbosa CH, Andrade MA, Vilarinho F, Castanheira I, Fernando AL, Loizzo MR, et al.",
      journal: "Foods",
      publicationDate: "2020-05-02",
      doi: "10.3390/foods9050564",
      pmid: "32370268",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7278730/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    almeida: {
      title: "Cardoon-based rennets for cheese production",
      author: "Almeida CM, Simões I",
      journal: "Applied Microbiology and Biotechnology",
      publicationDate: "2018-06-01",
      doi: "10.1007/s00253-018-9032-3",
      pmid: "29696340",
      url: "https://doi.org/10.1007/s00253-018-9032-3",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mandim: {
      title: "Phenolic Composition and Biological Properties of Cynara cardunculus L. var. altilis Petioles: Influence of the Maturity Stage",
      author: "Mandim F, Petropoulos SA, Dias MI, Pinela J, Kostić M, Soković M, et al.",
      journal: "Antioxidants",
      publicationDate: "2021-11-28",
      doi: "10.3390/antiox10121907",
      pmid: "34943010",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8750300/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ferro: {
      title:
        "Randomized Clinical Trial: Bergamot Citrus and Wild Cardoon Reduce Liver Steatosis and Body Weight in Non-diabetic Individuals Aged Over 50 Years",
      author: "Ferro Y, Montalcini T, Mazza E, Foti D, Angotti E, Gliozzi M, et al.",
      journal: "Frontiers in Endocrinology",
      publicationDate: "2020-08-11",
      doi: "10.3389/fendo.2020.00494",
      pmid: "32849284",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7431622/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    terzo: {
      title:
        "A Nutraceutical Containing Chlorogenic Acid and Luteolin Improves Cardiometabolic Parameters in Subjects with Pre-Obesity: A 6-Month Randomized, Double-Blind, Placebo-Controlled Study",
      author: "Terzo S, Amato A, Magán-Fernández A, Castellino G, Calvi P, Chianetta R, et al.",
      journal: "Nutrients",
      publicationDate: "2023-01-16",
      doi: "10.3390/nu15020462",
      pmid: "36678333",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9862908/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    emaSummary: {
      title: "Artichoke leaf (Cynara cardunculus L. (syn. Cynara scolymus L.), folium): summary of the HMPC conclusions (EMA/268161/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/artichoke-leaf-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "European Union herbal monograph on Cynara cardunculus L. (syn. Cynara scolymus L.), folium (EMA/HMPC/194014/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-03-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-cynara-cardunculus-l-syn-cynara-scolymus-l-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Artichoke Thistle", type: "COMMON_NAME" },
    { name: "Cardone", type: "REGIONAL_NAME", region: "Italy" },
    { name: "Cardo", type: "REGIONAL_NAME", region: "Spain and Portugal" },
  ],
  traditions: [
    {
      slug: "mediterranean-folk-medicine",
      notes: "Part of Mediterranean diets and folk medicine since ancient times; its flowers curdle milk for traditional cheeses.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cardoon has been part of Mediterranean diets and folk medicine since ancient times. It's the same species as the globe artichoke and the wild cardoon, but it's grown for its leaf stalks rather than its flower buds.\n\nTechnical detail: Cynara cardunculus has three botanical forms: wild cardoon (var. sylvestris), globe artichoke (var. scolymus) and cultivated cardoon (var. altilis).",
      source: "silva",
    },
    {
      category: "TRADITIONAL",
      summary: "The fleshy leaf stalks are eaten in salads and soups.",
      source: "barbosa",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Since ancient times, a water extract of the flowers has been used instead of animal rennet to curdle milk. This is how several Portuguese and Spanish sheep and goat cheeses with protected status are made.\n\nTechnical detail: the milk-clotting enzymes in the flowers are aspartic proteases called cardosins and cyprosins.",
      source: "almeida",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Some studies suggest the leaves could increase urine and bile flow, protect the liver, lower cholesterol, and act against bacteria and cancer cells. These effects are linked mainly to the leaves' polyphenols (antioxidant plant compounds).\n\nTechnical detail: reported properties are diuretic, hepatoprotective, choleretic, hypocholesterolemic, anticarcinogenic and antibacterial.",
      source: "barbosa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2022 review describes the plant's natural compounds and the effects reported for them, especially on the liver, blood fats and blood sugar.\n\nTechnical detail: compounds include phenolics, minerals, inulin, fiber and sesquiterpene lactones. Reported activities include antimicrobial, anti-inflammatory, anticancer, antioxidant, lipid-lowering, cytotoxic, antidiabetic, antihemorrhoidal, cardiotonic and choleretic effects; the review focuses on hepatoprotective, hypolipidemic and antidiabetic activity.",
      source: "silva",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, extracts of the leaf stalks were tested for whether they could act as antioxidants, reduce inflammation and fight germs. How strong these effects were depended on how mature the stalks were when picked.\n\nTechnical detail: hydroethanolic extracts of petioles from 16 growth stages; the main phenolics were 5-O-caffeoylquinic (chlorogenic) acid and 1,5-di-O-caffeoylquinic acid. Antifungal activity varied with maturity stage and fungal strain.",
      source: "mandim",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial with 102 people with fatty liver, a supplement combining wild cardoon and bergamot extracts (300 mg a day for 12 weeks) reduced liver fat more than a placebo. After allowing for weight loss, the benefit held only in people over 50. Because the supplement had two ingredients, the effect of cardoon on its own isn't known.\n\nTechnical detail: double-blind, placebo-controlled; liver fat measured as CAP score by transient elastography (−48.2 ± 39 vs −26.9 ± 43 dB/m, p = 0.02). After adjusting for weight change, the percentage CAP reduction was significant only in those over 50 (78% vs 44%, p = 0.007).",
      source: "ferro",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A reanalysis of a 6-month trial looked at 50 people who were overweight but not obese. In those taking a cardoon-based supplement (150 mg a day), body weight, blood sugar and cholesterol fell, and liver and blood-vessel measures improved.\n\nTechnical detail: post-hoc subgroup analysis (BMI 25–29.9) of a 100-person randomized, double-blind, placebo-controlled study of Altilix (Bionap, Italy), a Cynara cardunculus-based supplement containing chlorogenic acid and luteolin. Outcomes included HbA1c, HOMA-IR, total cholesterol, triglycerides, LDL, fatty liver index, AST/ALT, carotid intima-media thickness and flow-mediated dilation.",
      source: "terzo",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "European guidance on medicines made from the leaves of this species (sold as artichoke leaf) says not to use them if you have:\n- A blocked or inflamed bile duct (cholangitis)\n- Gallstones or any other bile problem that needs medical care\n- Liver disease\n- An allergy to daisy-family plants",
      source: "emaMonograph",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "With these leaf medicines, side effects include mild diarrhea with belly cramps, nausea, heartburn and allergic reactions. How often they happen isn't known.",
      source: "emaSummary",
    },
    {
      category: "PREGNANCY",
      description:
        "The safety of these leaf medicines during pregnancy and breastfeeding hasn't been established, so European guidance doesn't recommend them at these times.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    {
      slug: "fatty-liver",
      notes: "In a 12-week trial, a supplement combining wild cardoon and bergamot reduced liver fat more than placebo.",
    },
    {
      slug: "high-cholesterol",
      notes: "Cholesterol fell in people taking a cardoon-based supplement in a 6-month trial reanalysis; leaves are also studied in the lab.",
    },
  ],
});
