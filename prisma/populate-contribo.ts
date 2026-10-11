import { run } from "./lib/populate-herb";

// Contribo (Aristolochia trilobata), from a 2020 study of its folk use and
// essential oil (Salomé et al.), two studies of the Martinique preparation
// "chiniy-trèf" (Cachet et al. 2016 and Riffault-Valois et al. 2019; abstracts
// only) and a 2014 review of aristolochic acid harms (Yang et al.).

run({
  name: "Contribo",
  profile: {
    family: "Aristolochiaceae",
    genus: "Aristolochia",
    species: "trilobata",
    nativeRange: "The Caribbean, Central America and South America",
    partsUsed: "The leaves and stems",
  },
  sources: {
    salome: {
      title: "Aristolochia trilobata: Identification of the Anti-Inflammatory and Antinociceptive Effects",
      author: "Salomé DDC, Cordeiro NM, Valério TS, et al.",
      journal: "Biomedicines",
      publicationDate: "2020-05-06",
      doi: "10.3390/biomedicines8050111",
      pmid: "32384613",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7277703/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cachet: {
      title: "Detection of aristolochic acids I and II in \"Chiniy-trèf\", a traditional medicinal preparation containing caterpillars feeding on Aristolochia trilobata L. in Martinique, French West Indies",
      author: "Cachet X, Langrand J, Bottai C, Dufat H, Locatelli-Jouans C, Nossin E, Boucaud-Maitre D",
      journal: "Toxicon",
      publicationDate: "2016-02-12",
      doi: "10.1016/j.toxicon.2016.02.013",
      pmid: "26879332",
      url: "https://pubmed.ncbi.nlm.nih.gov/26879332/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    riffault: {
      title: "Health risk associated with the oral consumption of \"Chiniy-tref\", a traditional medicinal preparation used in Martinique (French West Indies): Qualitative and quantitative analyses of aristolochic acids contained therein",
      author: "Riffault-Valois L, Wattez C, Langrand J, et al.",
      journal: "Toxicon",
      publicationDate: "2019-10-01",
      doi: "10.1016/j.toxicon.2019.10.241",
      pmid: "31704310",
      url: "https://pubmed.ncbi.nlm.nih.gov/31704310/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yang: {
      title: "Chinese herbs containing aristolochic acid associated with renal failure and urothelial carcinoma: a review from epidemiologic observations to causal inference",
      author: "Yang HY, Chen PC, Wang JD",
      journal: "BioMed Research International",
      publicationDate: "2014-08-27",
      doi: "10.1155/2014/569325",
      pmid: "25431765",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4241283/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Contribo Bark", type: "COMMON_NAME" },
    { name: "Mil-Homens", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Birthwort", type: "COMMON_NAME" },
    { name: "Aristolochia", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used in folk medicine across the Caribbean and Central and South America for stomach aches, colic, asthma and other complaints. It contains kidney-damaging, cancer-causing aristolochic acids." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Central and South America, where it's known as mil-homens, contribo is an important folk medicine. It's used for:\n- Stomach aches and colic\n- Asthma and lung diseases\n- Diabetes\n- Skin problems",
      source: "salome",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Martinique, a folk preparation called chiniy-trèf is made by soaking the caterpillars that feed on contribo leaves, sometimes with a leaf of the plant, in rum. It's taken to protect against \"any manifestation of evil\", including poisoning and hexes.",
      source: "riffault",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, the oil distilled from contribo and its main compound reduced pain and inflammation. This doesn't show that the plant is safe or effective for people.",
      source: "salome",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Aristolochia plants such as contribo contain aristolochic acids, which cause kidney failure and cancer of the urinary tract. In the 1990s, many young women in Belgium developed kidney failure and urinary tract cancer after taking slimming pills containing an Aristolochia herb. Large studies in Taiwan later linked herbs containing aristolochic acid to kidney failure and cancer, and the reviewers call for such herbs to be banned.",
      source: "yang",
    },
    {
      category: "TOXICITY",
      description: "Aristolochic acids I and II were found in samples of chiniy-trèf, the Martinique preparation made with caterpillars that feed on contribo.",
      source: "cachet",
    },
    {
      category: "TOXICITY",
      description: "Testing of chiniy-trèf showed a real risk of kidney damage and cancer for people who drink it. Martinique's health agency issued an alert about it in 2015.",
      source: "riffault",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Warning: traditionally used for stomach aches and colic, but contribo contains aristolochic acids, which cause kidney failure and cancer." },
  ],
});
