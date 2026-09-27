import { run } from "./lib/populate-herb";

// Chanca piedra (Phyllanthus niruri), from verified sources: a 12-month
// randomized trial in fatty liver disease (Abu Hassan et al. 2023), a Cochrane
// review of phyllanthus for chronic hepatitis B (Xia et al. 2011) and a
// systematic review for kidney stones (Iregui-Parra et al. 2025). Family per
// GBIF / Catalogue of Life. None of these sources covers the parts used, native
// range, pregnancy, breastfeeding or medicine interactions, so none is stated.

run({
  name: "Chanca Piedra",
  profile: {
    family: "Phyllanthaceae",
    genus: "Phyllanthus",
    species: "niruri",
  },
  sources: {
    abuHassan: {
      title: "Effects of one-year supplementation with Phyllanthus niruri on fibrosis score and metabolic markers in patients with non-alcoholic fatty liver disease: A randomized, double-blind, placebo-controlled trial",
      author: "Abu Hassan MR, Hj Md Said R, Zainuddin Z, Omar H, Md Ali SM, Aris SA, Chan HK",
      journal: "Heliyon",
      organization: "Heliyon",
      publicationDate: "2023-05-30",
      doi: "10.1016/j.heliyon.2023.e16652",
      pmid: "37313177",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10258366/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cochrane: {
      title: "Phyllanthus species for chronic hepatitis B virus infection",
      author: "Xia Y, Luo H, Liu JP, Gluud C",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2011-04-13",
      doi: "10.1002/14651858.CD008960.pub2",
      pmid: "21491412",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD008960.pub2/full",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    iregui: {
      title: "Phyllanthus niruri in the management of nephrolithiasis: A systematic review of the literature",
      author: "Iregui-Parra J, Rojas Ossa V, Arias Salazar CM, López Estupiñán AD, Díaz Varela D, Sinisterra Parra LM, Diéguez L, Emiliani E",
      journal: "Actas Urológicas Españolas",
      organization: "Actas Urológicas Españolas",
      publicationDate: "2025-06-04",
      doi: "10.1016/j.acuroe.2025.501791",
      pmid: "40480426",
      url: "https://pubmed.ncbi.nlm.nih.gov/40480426/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  traditions: [
    { slug: "ayurveda", notes: "Known in Ayurvedic medicine for liver and kidney problems." },
    { slug: "traditional-chinese-medicine", notes: "Known in Chinese medicine for liver and kidney problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chanca piedra has traditionally been used for many conditions, including indigestion, diarrhea, jaundice (yellowing of the skin and eyes), kidney stones and urinary infections. It is especially known in Malay, Chinese and Ayurvedic medicine for liver and kidney problems.",
      source: "abuHassan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, chanca piedra extracts helped the liver recover from damage caused by chemicals and some medicines, including acetaminophen. In rats fed a high-fat diet, an extract slowed the development of fatty liver disease.\n\nTechnical detail: carbon tetrachloride, acetaminophen and nimesulide injury models; 50% methanolic extract rich in ellagic acid and phyllanthin in Sprague-Dawley rats.",
      source: "abuHassan",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 12-month trial, 226 adults with mild to moderate fatty liver disease took 3,000 mg of a chanca piedra extract or a placebo every day. It didn't reduce liver fat or liver enzymes more than placebo. Liver stiffness, a sign of scarring, improved slightly in the chanca piedra group but not in the placebo group. No major side effects were reported.\n\nTechnical detail: randomized, double-blind, placebo-controlled; CAP change −15.05 vs −14.74 dB/m (p = 0.869); liver stiffness −0.64 vs +0.10 kPa (p = 0.001); standardized extract EPN 797.",
      source: "abuHassan",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2011 Cochrane review looked at 16 trials with 1,326 people with long-term hepatitis B. It found no convincing evidence that phyllanthus (the plant group chanca piedra belongs to) works better than placebo. Adding it to antiviral medicines may have worked better than the medicines alone. However, the trials were of low quality, so these results are uncertain. No serious side effects were reported.\n\nTechnical detail: one placebo-controlled trial (42 participants); 15 trials of phyllanthus plus an antiviral vs the antiviral alone; HBeAg seroconversion RR 0.77 (95% CI 0.63 to 0.92) with substantial heterogeneity; species not always reported.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review of 16 studies in people and rats looked at chanca piedra for kidney stones, where research has had mixed results. The authors concluded that, used alongside standard treatment, it appears safe and may help more people become stone-free after shock-wave treatment (lithotripsy).",
      source: "iregui",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Studies of chanca piedra for kidney stones describe it as safe over long periods, without significant side effects. Blood salt (electrolyte) levels and liver tests stayed normal.",
      source: "iregui",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In a 12-month trial in people with fatty liver disease, no major side effects were reported.",
      source: "abuHassan",
    },
  ],
  symptoms: [
    {
      slug: "fatty-liver",
      notes: "In a 12-month trial, it didn't reduce liver fat or liver enzymes more than placebo, though liver stiffness improved slightly.",
    },
    {
      slug: "liver-disease",
      notes: "Traditionally used for liver problems. A Cochrane review found no convincing evidence it helps hepatitis B on its own.",
    },
    {
      slug: "kidney-stones",
      notes: "Traditionally used for kidney stones. A 2025 review suggests it may help alongside shock-wave treatment; results have been mixed.",
    },
  ],
});
