import { run } from "./lib/populate-herb";

// Polyporus Umbellatus (zhu ling), from a 2013 review of its traditional uses,
// chemistry and pharmacology (Zhao; abstract only), a 2025 review of its
// polysaccharides (Gao et al.) and a 2025 review of Chinese medicines acting on
// the kidney's water channels (Chang et al.).

run({
  name: "Polyporus Umbellatus",
  profile: {
    family: "Polyporaceae",
    genus: "Polyporus",
    species: "umbellatus",
    partsUsed: "The dried sclerotium, a dark underground mass of the fungus",
  },
  sources: {
    zhao: {
      title: "Traditional uses, phytochemistry, pharmacology, pharmacokinetics and quality control of Polyporus umbellatus (Pers.) Fries: a review",
      author: "Zhao YY",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2013-06-26",
      doi: "10.1016/j.jep.2013.06.031",
      pmid: "23811047",
      url: "https://pubmed.ncbi.nlm.nih.gov/23811047/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gao: {
      title: "A systematic review of advances in preparation, structures, bioactivities, structural-property relationships, and applications of Polyporus umbellatus polysaccharides",
      author: "Gao W, Xu Y, Chen W, Wu J, He Y",
      journal: "Food Chemistry: X",
      publicationDate: "2025-01-06",
      doi: "10.1016/j.fochx.2025.102161",
      pmid: "39885918",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11780138/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chang: {
      title: "Regulation of aquaporin-2 using traditional Chinese medicine in water balance disorders: a literature review",
      author: "Chang Y, Liu L, Xu X, Zhang S",
      journal: "Frontiers in Cardiovascular Medicine",
      publicationDate: "2025-09-23",
      doi: "10.3389/fcvm.2025.1506190",
      pmid: "41063833",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12500708/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Zhu Ling", type: "TRADITIONAL_NAME" },
    { name: "Zhuling", type: "TRADITIONAL_NAME" },
    { name: "Polyporus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called zhu ling; used for swelling (oedema), scanty urine, urinary problems, vaginal discharge, jaundice and diarrhoea." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Zhu ling is a medicinal fungus used in Chinese medicine for:\n- Swelling from fluid build-up (oedema) and scanty urine\n- Urinary problems\n- Vaginal discharge\n- Jaundice and diarrhoea",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary: "In animal studies, zhu ling's main compound ergosterol increased urination and acted on the kidney's water channels. Zhu Ling Tang, a formula that also contains poria, increased urine output in rats with kidney disease.",
      source: "chang",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its extracts and polysaccharides also protected the kidneys and liver, boosted the immune system, slowed cancer cells, may help reduce inflammation and acted as antioxidants. These haven't been confirmed in people.",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary: "Its polysaccharides have been studied for about 50 years and are used in functional foods, medicines and cosmetics in China.",
      source: "gao",
    },
  ],
});
