import { run } from "./lib/populate-herb";

// Osmanthus Fragrans (sweet osmanthus, gui hua), from a 2022 review of its
// traditional uses, chemistry and pharmacology (Wang et al.; abstract only).

run({
  name: "Osmanthus Fragrans",
  profile: {
    family: "Oleaceae",
    genus: "Osmanthus",
    species: "fragrans",
    nativeRange: "Southwestern China, Japan and Korea",
    partsUsed: "The small fragrant flowers; also other parts of the plant",
  },
  sources: {
    wang: {
      title: "Traditional uses, phytochemical constituents and pharmacological properties of Osmanthus fragrans: A review",
      author: "Wang B, Luan F, Bao Y, Peng X, Rao Z, Tang Q, Zeng N",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2022-04-09",
      doi: "10.1016/j.jep.2022.115273",
      pmid: "35405258",
      url: "https://pubmed.ncbi.nlm.nih.gov/35405258/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Sweet Osmanthus", type: "COMMON_NAME" },
    { name: "Osmanthus", type: "COMMON_NAME" },
    { name: "Gui Hua", type: "TRADITIONAL_NAME" },
    { name: "Osmanthus Fragans", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Osmanthus is a medicinal plant found in southwestern China, Japan and Korea. It has traditionally been used for:\n- Weak eyesight\n- Bad breath\n- Shortness of breath, asthma and cough\n- Toothache and stomach ache\n- Diarrhoea\n- Rheumatism and body pain\n- Hepatitis",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, osmanthus and its compounds (ionones, flavonoids, polyphenols and iridoids) acted as antioxidants, slowed tumours, may help reduce inflammation, lowered blood sugar, reduced blood clotting, lightened skin pigment and protected nerves. These haven't been confirmed in people.",
      source: "wang",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for cough, asthma and shortness of breath. Not tested in trials." },
  ],
});
