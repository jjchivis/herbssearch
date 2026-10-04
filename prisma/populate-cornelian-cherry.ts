import { run } from "./lib/populate-herb";

// Cornelian Cherry, here the Asiatic species Cornus officinalis (shan zhu yu,
// Corni Fructus), from a 2021 review of its pharmacology (Gao et al.), a 2025
// review of its ethnopharmacology (Cui et al.; abstract only), a 2018 review
// comparing it with the European Cornus mas (Czerwińska & Melzig) and a 2024
// review of its use in foods (Deng et al.).

run({
  name: "Cornelian Cherry",
  profile: {
    family: "Cornaceae",
    genus: "Cornus",
    species: "officinalis",
    nativeRange: "Eastern Asia, mainly China, as well as Korea and Japan",
    partsUsed: "The ripe, dried fruit (\"Cornus flesh\")",
  },
  sources: {
    gao: {
      title: "Active Components and Pharmacological Effects of Cornus officinalis: Literature Review",
      author: "Gao X, Liu Y, An Z, Ni J",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-04-12",
      doi: "10.3389/fphar.2021.633447",
      pmid: "33912050",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8072387/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cui: {
      title: "Cornus officinalis Sieb.: An updated review on the ethnopharmacology, phytochemistry, pharmacology, toxicology, and pharmacokinetics",
      author: "Cui C, Liu W, Feng L, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2025-08-08",
      doi: "10.1016/j.jep.2025.120365",
      pmid: "40784528",
      url: "https://pubmed.ncbi.nlm.nih.gov/40784528/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    czerwinska: {
      title: "Cornus mas and Cornus Officinalis—Analogies and Differences of Two Medicinal Plants Traditionally Used",
      author: "Czerwińska ME, Melzig MF",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2018-08-28",
      doi: "10.3389/fphar.2018.00894",
      pmid: "30210335",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6121078/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deng: {
      title: "A comprehensive review of Cornus officinalis: health benefits, phytochemistry, and pharmacological effects for functional drug and food development",
      author: "Deng W, Liu Y, Guo Y, et al.",
      journal: "Frontiers in Nutrition",
      publicationDate: "2024-01-11",
      doi: "10.3389/fnut.2023.1309963",
      pmid: "38274211",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10809406/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shan Zhu Yu", type: "TRADITIONAL_NAME" },
    { name: "Shanzhuyu", type: "TRADITIONAL_NAME" },
    { name: "Corni Fructus", type: "COMMON_NAME" },
    { name: "Asiatic Dogwood", type: "COMMON_NAME" },
    { name: "Japanese Cornel", type: "COMMON_NAME" },
    { name: "Cornel Dogwood", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called shan zhu yu; recorded since the Shennong Ben Cao Jing and used for about 2,000 years as a liver and kidney tonic, and for dizziness, ringing in the ears, frequent urination and heavy sweating." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Shan zhu yu has been used in Chinese medicine for nearly 2,000 years and is first recorded in the Shennong Ben Cao Jing. It's described as sour, astringent and warming, and is used for:\n- Dizziness and ringing in the ears\n- Weakness in the lower back and knees\n- Impotence and involuntary loss of semen\n- Heavy sweating\nIt has also been used for infections, inflammation, and nerve and urinary or reproductive disorders.",
      source: "cui",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Chinese medicine it's a tonic for the liver and kidneys, used for weakness, liver and kidney diseases and reproductive problems. The classic Compendium of Materia Medica says it stops heavy menstrual bleeding and treats frequent urination in older people. It has also long been used for thirst with frequent urination, now recognized as signs of diabetes, and for ringing in the ears, deafness, forgetfulness and hair loss.",
      source: "gao",
    },
    {
      category: "TRADITIONAL",
      summary:
        "This Asian cornelian cherry grows mainly in China, Korea and Japan. It's a close relative of the European cornelian cherry (Cornus mas), but the two plants' medicinal uses grew up separately.",
      source: "czerwinska",
    },
    {
      category: "TRADITIONAL",
      summary: "Besides its use as medicine, the fruit is used in foods such as drinks, jams, preserves and canned products.",
      source: "deng",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, the fruit and its compounds (especially morroniside and loganin) have lowered blood sugar, protected nerve cells, the liver and the kidneys, slowed bone loss, affected the immune system, protected the heart, and acted as antioxidants and may help reduce inflammation. Researchers say clinical trials are still needed to find out whether these effects happen in people.",
      source: "gao",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review found that research on shan zhu yu is mainly lab and animal studies, and that clinical trials are lacking, so there's no good evidence yet on whether it works or is safe in people.",
      source: "cui",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Traditionally used for thirst with frequent urination (signs of diabetes), and lowered blood sugar in animal studies. Not tested in clinical trials." },
    { slug: "hair-loss", notes: "A traditional use in Chinese medicine. Not studied in modern research." },
  ],
});
