import { run } from "./lib/populate-herb";

// Shilajit (mineral pitch), from two reviews (Meena et al. 2010; Carrasco-Gallardo
// et al. 2012, including its "Potential Risks" section), two studies in people and
// a 2025 thallium analysis, all found by direct PubMed Central search. Shilajit
// isn't a plant, so the profile says so, as populate-quercetin.ts does.

run({
  name: "Shilajit",
  profile: {
    family: "Not a plant: plant material and humus compressed in mountain rocks",
    genus: "",
    species: "",
    nativeRange: "The Himalayas at 1,000 to 5,000 meters; also Afghanistan, Nepal, Bhutan, Pakistan, China, Tibet and Russia",
    partsUsed: "The purified resin",
  },
  sources: {
    meena: {
      title: "Shilajit: A panacea for high-altitude problems",
      author: "Meena H, Pandey HK, Arya MC, Ahmed Z",
      journal: "International Journal of Ayurveda Research",
      publicationDate: "2010-01-01",
      doi: "10.4103/0974-7788.59942",
      pmid: "20532096",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2876922/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    carrasco: {
      title: "Shilajit: a natural phytocomplex with potential procognitive activity",
      author: "Carrasco-Gallardo C, Guzmán L, Maccioni RB",
      journal: "International Journal of Alzheimer's Disease",
      publicationDate: "2012-01-01",
      doi: "10.1155/2012/674142",
      pmid: "22482077",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3296184/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sharma: {
      title: "Shilajit: evalution of its effects on blood chemistry of normal human subjects",
      author: "Sharma P, Jha J, Shrinivas V, Dwivedi LK, Suresh P, Sinha M",
      journal: "Ancient Science of Life",
      publicationDate: "2003-10-01",
      pmid: "22557121",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3330960/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    keller: {
      title: "The effects of Shilajit supplementation on fatigue-induced decreases in muscular strength and serum hydroxyproline levels",
      author: "Keller JL, Housh TJ, Hill EC, Smith CM, Schmidt RJ, Johnson GO",
      journal: "Journal of the International Society of Sports Nutrition",
      publicationDate: "2019-02-01",
      doi: "10.1186/s12970-019-0270-2",
      pmid: "30728074",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6364418/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kamgar: {
      title: "Quantifying of thallium in Shilajit and its supplements to unveil the potential risk of consumption of this popular traditional medicine",
      author: "Kamgar E, Zembrzuska J, Zembrzuski W, Kaykhaii M",
      journal: "BMC Chemistry",
      publicationDate: "2025-01-01",
      doi: "10.1186/s13065-025-01384-7",
      pmid: "39827344",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11743217/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mineral pitch", type: "COMMON_NAME" },
    { name: "Mumiyo", type: "COMMON_NAME" },
    { name: "Silajit", type: "TRADITIONAL_NAME", region: "India (Sanskrit)" },
    { name: "Shilajatu", type: "REGIONAL_NAME", region: "Northern India" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used for centuries as a rejuvenator (rasayana); described in the Charaka Samhita." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Shilajit is a pale-brown to blackish-brown gummy substance that oozes from rocks in the Himalayas between May and July, at 1,000 to 5,000 meters. It's also found in Afghanistan, Nepal, Bhutan, Pakistan, China, Tibet and Russia. It's made of humus and plant material compressed by layers of rock, and contains fulvic acid.\nIts Sanskrit name is often translated as \"conqueror of mountains and destroyer of weakness\". Ayurveda has used it for centuries as a rejuvenator, and it's described in the Charaka Samhita.",
      source: "meena",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Supporters recommend it for tiredness, lack of energy and long-lasting fatigue, and for coping with the stresses of high altitude.",
      source: "meena",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an 8-week trial, 63 active young men took 250 mg or 500 mg a day of a shilajit product (PrimaVie) or a placebo. Among the stronger half of the men, the 500 mg group lost less leg strength after a tiring exercise and had lower levels of a marker of connective-tissue breakdown. The 250 mg dose did no better than the placebo.\n\nTechnical detail: randomized, placebo-controlled; 21 per group; percent decline in maximal voluntary isometric contraction 8.9% (500 mg) vs 17.0% (250 mg) and 16.0% (placebo); serum hydroxyproline lower with 500 mg.",
      source: "keller",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small study of healthy volunteers, 2 g of shilajit a day for 45 days didn't change blood pressure, pulse, weight or blood counts. Triglycerides and cholesterol fell and HDL (\"good\") cholesterol rose. There was no comparison group.",
      source: "sharma",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Unpurified shilajit may contain mold toxins, heavy metals and other harmful substances, so only purified preparations should be used. Some Ayurvedic products sold online, including shilajit, have been found to contain lead, mercury and arsenic.",
      source: "carrasco",
    },
    {
      category: "CONTAMINATION",
      description:
        "A 2025 study found thallium, a toxic metal, in natural shilajit (up to 0.226 µg per gram) and in shilajit supplements (up to 0.5 µg per gram). Some supplements had more than raw shilajit. The authors call for regular testing, especially for long-term use.",
      source: "kamgar",
    },
  ],
  symptoms: [
    {
      slug: "fatigue",
      notes:
        "Traditionally used for tiredness and weakness. In one 8-week trial, 500 mg a day helped stronger young men keep more strength after tiring exercise; a lower dose did nothing.",
    },
  ],
});
