import { run } from "./lib/populate-herb";

// Buchu (Agathosma betulina), from a 2026 study of its leaf chemistry
// (Mnisi et al.), a 2022 review (Brendler & Abdel-Tawab) and the abstract of a
// 2008 review (Moolla & Viljoen; abstract, introduction and section excerpts). No human trials were
// found. Family per GBIF.

run({
  name: "Buchu",
  profile: {
    family: "Rutaceae",
    genus: "Agathosma",
    species: "betulina",
    nativeRange: "The mountains of the Western Cape, South Africa",
    partsUsed: "The leaves and their essential oil",
  },
  sources: {
    mnisi: {
      title: "Geographic Influence on Secondary Metabolite Profiles in Leaves of the Endemic Agathosma betulina (P.J. Bergius) Pillans. in the Western Cape Province, South Africa",
      author: "Mnisi NH, Gunununu RP, Dukashe L, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-05-16",
      doi: "10.3390/ijms27104486",
      pmid: "42196464",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13206881/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    brendler: {
      title: "Buchu (Agathosma betulina and A. crenulata): Rightfully Forgotten or Underutilized?",
      author: "Brendler T, Abdel-Tawab M",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-02-07",
      doi: "10.3389/fphar.2022.813142",
      pmid: "35197854",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8859318/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    moolla: {
      title: "'Buchu' – Agathosma betulina and Agathosma crenulata (Rutaceae): A review",
      author: "Moolla A, Viljoen AM",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2008-10-30",
      doi: "10.1016/j.jep.2008.07.036",
      pmid: "18725278",
      url: "https://www.sciencedirect.com/science/article/pii/S0378874108003966",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Round-Leaf Buchu", type: "COMMON_NAME" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "A long-standing South African household remedy." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Buchu has long been a household remedy in South Africa for various ailments. Its essential oil is also used in cosmetics and medicines.",
      source: "mnisi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Buchu leaves contain phenolic acids, flavonoids, saponins and terpenoids. The amounts differ a lot depending on where the plant grows.",
      source: "mnisi",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Khoisan peoples of South Africa used buchu long before written records: in rituals, for anointing and perfume, and as medicine. Traditional uses include kidney and urinary infections, colds, stomach problems, rheumatism, gout and fever.",
      source: "brendler",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In the 1800s buchu became a popular remedy for urinary infections in Europe and the US, and was listed in the Dublin pharmacopoeia in 1826 as a medicine to increase urine flow. It fell out of use once antibiotics arrived, but is still sold in herbal products for urinary problems.",
      source: "brendler",
    },
    {
      category: "TRADITIONAL",
      summary: "Buchu oil, made from Agathosma betulina, is one of South Africa's best-known plant products, sold around the world.",
      source: "moolla",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Research is scarce. In lab tests, a leaf extract had moderate activity against microbes (the essential oil didn't), and extracts reduced inflammation signals and helped cells take up sugar. In rats, a water extract brought high blood sugar down to normal, and in rats on a high-fat diet it reduced weight gain and lowered high blood pressure. The extracts' makeup often wasn't stated, and no proper human trials have been done.",
      source: "brendler",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Khoi-San used the word \"buchu\" for any fragrant plant that could be dried and powdered. Today it means two species, round-leaf buchu (Agathosma betulina) and oval-leaf buchu (Agathosma crenulata).",
      source: "moolla",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Indigenous people introduced buchu to European settlers at the Cape in the 1650s, and its use spread to Europe and America. It's still used across South Africa as a general tonic and medicine. Traditional uses include easing cramps, bringing down fever, as a rub, and for coughs.",
      source: "moolla",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2008 review reported that buchu extracts and essential oils were active against four disease-causing bacteria in lab tests, including Staphylococcus aureus. It noted that most buchu research has been in the lab, and few studies have tested its traditional uses.",
      source: "moolla",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "High doses of buchu essential oil damaged the liver and affected the uterus in rats. This is linked to pulegone, a compound in the oil that is toxic to the liver.",
      source: "brendler",
    },
  ],
});
