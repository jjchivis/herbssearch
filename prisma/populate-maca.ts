import { run } from "./lib/populate-herb";

// Maca (Lepidium meyenii), from verified sources: NIH LiverTox (2019),
// Memorial Sloan Kettering's About Herbs entry and a 2011 systematic review
// for menopausal symptoms (Lee et al., Maturitas). Family per GBIF / Catalogue
// of Life; native range and parts used per LiverTox.

run({
  name: "Maca",
  profile: {
    family: "Brassicaceae",
    genus: "Lepidium",
    species: "meyenii",
    nativeRange: "Grown high in the Andes mountains of Peru, above 4,000 meters",
    partsUsed: "The underground tuber (root), similar to a radish or turnip, which can be white, black or red",
  },
  sources: {
    livertox: {
      title: "Maca. In: LiverTox: Clinical and Research Information on Drug-Induced Liver Injury",
      organization: "National Institute of Diabetes and Digestive and Kidney Diseases (NIH)",
      publicationDate: "2019-04-10",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK548552/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mskcc: {
      title: "Maca",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-06-07",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/maca",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    lee: {
      title: "Maca (Lepidium meyenii) for treatment of menopausal symptoms: A systematic review",
      author: "Lee MS, Shin BC, Yang EJ, Lim HJ, Ernst E",
      journal: "Maturitas",
      organization: "Maturitas",
      publicationDate: "2011-11-01",
      doi: "10.1016/j.maturitas.2011.07.017",
      pmid: "21840656",
      url: "https://pubmed.ncbi.nlm.nih.gov/21840656/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Peruvian Ginseng", type: "COMMON_NAME" },
    { name: "Maca Root", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes:
        "Used for centuries in the Peruvian Andes as a food and medicine to improve health, energy and fertility, and as an adaptogen for anemia and female hormone balance.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Maca is both a vegetable and a traditional herbal medicine. In Peru it has been used for centuries as a food supplement to improve health, and as a medicine to boost energy and fertility.",
      source: "livertox",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In the Andes, maca has been used for centuries as an adaptogen (a plant traditionally used to help the body cope with stress) to manage anemia, infertility and female hormone balance.",
      source: "lee",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animals, maca extracts improved sexual function and fertility, and also improved memory and learning, reduced prostate size and improved bone strength.",
      source: "livertox",
    },
    {
      category: "PRECLINICAL",
      summary: "Maca contains natural compounds, including glucosinolates, that showed antioxidant activity and reduced inflammation in lab studies.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies in people have had conflicting results. Maca is promoted for sex drive, sperm count, mood, memory, energy and stamina, but none of these effects has been proven in rigorous controlled trials.",
      source: "livertox",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Early studies suggest maca may improve how men feel about their sexual well-being, but results on semen quality are mixed. In women, several studies suggest it may help sexual problems caused by antidepressants or menopause.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2011 review found 4 small trials of maca for menopausal symptoms, all showing favorable effects. But the trials were too few, small and low in quality to draw firm conclusions, and maca's safety hadn't been proven. The reviewers called the evidence limited.\n\nTechnical detail: Kupperman Menopausal Index and Greene Climacteric Score.",
      source: "lee",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Side effects are uncommon and mild, mostly stomach and gut symptoms and headaches.",
      source: "livertox",
    },
    {
      category: "TOXICITY",
      description: "There have been no convincing reports linking maca to liver injury. LiverTox rates it an unlikely cause of liver damage, though its use has been limited.",
      source: "livertox",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Maca may add to the blood-pressure-lowering effect of losartan. It may also interfere with testosterone blood tests.",
      source: "mskcc",
    },
    {
      category: "CONTRAINDICATION",
      description: "If you have a hormone-sensitive cancer, such as breast or uterine cancer, talk with your doctor before using maca.",
      source: "mskcc",
    },
    { category: "PREGNANCY", description: "Avoid maca if you are pregnant or breastfeeding.", source: "mskcc" },
    {
      category: "DOSAGE",
      description: "Recommended daily amounts vary widely, from 500 to 3,000 mg a day, depending on the product and its intended use.",
      source: "livertox",
    },
  ],
  symptoms: [
    {
      slug: "sexual-health",
      notes: "Early studies suggest it may help sexual well-being in men and sexual problems in women, but it hasn't been proven in rigorous trials.",
    },
    { slug: "fertility", notes: "Traditionally used to boost fertility. Studies on sperm quality have mixed results." },
    { slug: "menopause-symptoms", notes: "A review of 4 small trials found limited evidence that it eases menopause symptoms." },
  ],
});
