import { run } from "./lib/populate-herb";

// Codonopsis (Codonopsis pilosula root, dang shen), from a 2023 review of
// Codonopsis Radix (Dong et al.).

run({
  name: "Codonopsis",
  profile: {
    family: "Campanulaceae",
    genus: "Codonopsis",
    species: "pilosula",
    nativeRange: "China, from Tibet and Sichuan to northeastern China",
    partsUsed: "The long, slightly sweet roots",
  },
  sources: {
    dong: {
      title: "A review of the botany, ethnopharmacology, phytochemistry, analysis method and quality control, processing methods, pharmacological effects, pharmacokinetics and toxicity of codonopsis radix",
      author: "Dong J, Na Y, Hou A, Zhang S, Yu H, Zheng S, Lan W, Yang L",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2023-04-06",
      doi: "10.3389/fphar.2023.1162036",
      pmid: "37089919",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10117688/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dang Shen", type: "TRADITIONAL_NAME" },
    { name: "Dangshen", type: "TRADITIONAL_NAME" },
    { name: "Codonopsis Radix", type: "COMMON_NAME" },
    { name: "Codonopsis Root", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called dang shen; a tonic used alongside or in place of ginseng for about 1,000 years, to strengthen the spleen, stomach and lungs." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Dang shen is a common tonic in Chinese medicine and has been used alongside ginseng for about 1,000 years. Its name was first recorded in the Qing Dynasty. Classical texts say it:\n- Strengthens the stomach and spleen\n- Benefits the lungs and \"lung qi\"\n- Moistens the lungs and relieves thirst\nOne 1920 text describes its effects as not far from those of ginseng.",
      source: "dong",
    },
    {
      category: "TRADITIONAL",
      summary: "Today it's usually combined with other Chinese medicines, mainly for anaemia, low blood pressure, digestive problems and altitude sickness. It's also used in health foods, teas, drinks, biscuits and cosmetics.",
      source: "dong",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, codonopsis protected nerves and the stomach lining, helped heal ulcers, affected the immune system, helped make blood cells, protected the heart and acted as an antioxidant. These haven't been confirmed in people.",
      source: "dong",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Reports indicate it has almost no toxic side effects. Because its sources are complex, poor-quality substitutes are sometimes sold.",
      source: "dong",
    },
  ],
  symptoms: [
    { slug: "fatigue", notes: "A traditional Chinese tonic, often used in place of ginseng. Not tested on its own in trials." },
    { slug: "indigestion", notes: "Traditionally used to strengthen the stomach and spleen. Not tested on its own in trials." },
  ],
});
