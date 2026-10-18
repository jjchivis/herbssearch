import { run } from "./lib/populate-herb";

// Lesser Galangal (Alpinia officinarum rhizome, gao liang jiang), from a 2024
// review of its traditional uses, chemistry and pharmacology (Lei et al.).

run({
  name: "Lesser Galangal",
  profile: {
    family: "Zingiberaceae",
    genus: "Alpinia",
    species: "officinarum",
    partsUsed: "The dried aromatic root and rhizome",
  },
  sources: {
    lei: {
      title: "Alpinia officinarum Hance: a comprehensive review of traditional uses, phytochemistry, pharmacokinetic and pharmacology",
      author: "Lei X, Wang J, Zuo K, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-08-16",
      doi: "10.3389/fphar.2024.1414635",
      pmid: "39221146",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11362038/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Galangal", type: "COMMON_NAME" },
    { name: "Gao Liang Jiang", type: "TRADITIONAL_NAME" },
    { name: "Liangjiang", type: "TRADITIONAL_NAME" },
    { name: "Rhizome Alpiniae Officinarum", type: "COMMON_NAME" },
    { name: "Alpiniae Officinarum Rhizoma", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "First recorded in the Ming Yi Bie Lu; used for thousands of years to warm the stomach, dispel cold and relieve stomach pain, vomiting and diarrhoea." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Lesser galangal was first recorded in the Ming Yi Bie Lu during the Han Dynasty and has been used in Chinese medicine for thousands of years. It's described as pungent and warm, and is used to warm the stomach, dispel cold and relieve pain, mainly for:\n- Cold, painful stomach\n- Vomiting\n- Diarrhoea\n- Food sitting heavy in the stomach\nToday it's used mainly for digestive problems such as indigestion, acid reflux and stomach ulcers.",
      source: "lei",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, galangal and its compounds (flavonoids such as galangin, and diarylheptanoids) protected against stomach ulcers, changed gut movement, may help reduce inflammation and pain, acted as antioxidants, slowed tumours, killed bacteria and lowered blood sugar. These are lab and animal results.",
      source: "lei",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "A traditional Chinese remedy for a cold, painful stomach and indigestion. Not tested on its own in trials." },
    { slug: "stomach-ulcers", notes: "Protected against stomach ulcers in animal studies. Not tested in people." },
    { slug: "occasional-nausea", notes: "Traditionally used for vomiting. Not tested in trials." },
  ],
});
