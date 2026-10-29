import { run } from "./lib/populate-herb";

// Olive (Olea europaea fruit and oil), from a 2015 meta-analysis of olive oil
// trials (Schwingshackl et al.), the 2018 Jaén consensus on virgin olive oil
// (Gaforio et al.) and a 2017 review of plant oils on the skin (Lin et al.).
// The leaf has its own page (Olive Leaf). Family per GBIF.

run({
  name: "Olive",
  profile: {
    family: "Oleaceae",
    genus: "Olea",
    species: "europaea",
    nativeRange: "The Mediterranean region",
    partsUsed: "The fruit and the oil pressed from it",
  },
  sources: {
    schwingshackl: {
      title: "Effects of Olive Oil on Markers of Inflammation and Endothelial Function-A Systematic Review and Meta-Analysis",
      author: "Schwingshackl L, Christoph M, Hoffmann G",
      journal: "Nutrients",
      publicationDate: "2015-09-11",
      doi: "10.3390/nu7095356",
      pmid: "26378571",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4586551/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    gaforio: {
      title: "Virgin Olive Oil and Health: Summary of the III International Conference on Virgin Olive Oil and Health Consensus Report, JAEN (Spain) 2018",
      author: "Gaforio JJ, Visioli F, Alarcón-de-la-Lastra C, et al.",
      journal: "Nutrients",
      publicationDate: "2019-09-01",
      doi: "10.3390/nu11092039",
      pmid: "31480506",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770785/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lin: {
      title: "Anti-Inflammatory and Skin Barrier Repair Effects of Topical Application of Some Plant Oils",
      author: "Lin TK, Zhong L, Santiago JL",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2017-12-27",
      doi: "10.3390/ijms19010070",
      pmid: "29280987",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5796020/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Olive Oil", type: "COMMON_NAME" }],
  traditions: [{ slug: "mediterranean-folk-medicine", notes: "The main dietary fat of the Mediterranean, long used on skin and hair." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Olive oil is the main fat of the Mediterranean diet, and many studies link eating it with better overall health. It has also long been used on the skin and hair in several cultures.",
      source: "gaforio",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A review of 30 trials with over 3,000 people found that olive oil lowered markers of inflammation and improved how well blood vessels widen, compared with control diets. The trials differed a lot, so the authors urge caution.",
      source: "schwingshackl",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice and rats, olive oil on the skin helped pressure sores and burns heal.",
      source: "lin",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Olive oil put on the skin can weaken the skin's protective barrier, so it may not suit dry or eczema-prone skin.",
      source: "lin",
    },
  ],
  symptoms: [
    {
      slug: "dry-skin",
      notes: "Long used on the skin, but research shows olive oil can weaken the skin barrier, so it may not help dry skin.",
    },
  ],
});
