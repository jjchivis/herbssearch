import { run } from "./lib/populate-herb";

// Paneer Doda (Withania coagulans, Indian rennet), from a 2026 case report of
// anaphylaxis (Daniel et al.) and a 2014 study in diabetic rats (Ojha et al.).
// No human trials were found. Family per GBIF.

run({
  name: "Paneer Doda",
  profile: {
    family: "Solanaceae",
    genus: "Withania",
    species: "coagulans",
    nativeRange: "South Asia, from Afghanistan and Pakistan to India",
    partsUsed: "The dried berries",
  },
  sources: {
    daniel: {
      title: "Anaphylaxis triggered by rennet flower (Withania coagulans): A cautionary tale from traditional medicine",
      author: "Daniel J, Rajasekar S, Christopher DJ",
      journal: "The Journal of Allergy and Clinical Immunology: Global",
      publicationDate: "2026-01-12",
      doi: "10.1016/j.jacig.2026.100640",
      pmid: "42516814",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13404012/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ojha: {
      title: "Withania coagulans fruit extract reduces oxidative stress and inflammation in kidneys of streptozotocin-induced diabetic rats",
      author: "Ojha S, Alkaabi J, Amir N, Sheikh A, Agil A, Fahim MA, Adem A",
      journal: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2014-09-14",
      doi: "10.1155/2014/201436",
      pmid: "25295146",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4177777/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Indian Rennet", type: "COMMON_NAME" },
    { name: "Rennet Flower", type: "COMMON_NAME" },
    { name: "Vegetable Rennet", type: "COMMON_NAME" },
    { name: "Panir Dodi", type: "REGIONAL_NAME", region: "India (Hindi)" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Used for centuries in Ayurveda and Unani medicine, especially for diabetes." }],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "Traditionally used for diabetes; lowered blood sugar in diabetic rats. Not tested in people.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Paneer doda, also called Indian rennet, has been used for centuries in Ayurveda and Unani medicine, especially for diabetes. The dried berries are made into a tea.",
      source: "daniel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with long-term diabetes, a fruit extract given for 3 weeks lowered blood sugar, reduced inflammation and oxidative damage in the kidneys, and lessened kidney enlargement. The authors say human studies are needed.",
      source: "ojha",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "In the first reported case, a man with diabetes had anaphylaxis, a severe and life-threatening allergic reaction, about 30 minutes after drinking a homemade paneer doda tea recommended for his blood sugar.",
      source: "daniel",
    },
  ],
});
