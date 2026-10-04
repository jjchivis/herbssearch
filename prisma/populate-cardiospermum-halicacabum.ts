import { run } from "./lib/populate-herb";

// Cardiospermum Halicacabum (balloon vine), from a 2022 review of its
// ethnomedicine, chemistry and pharmacology (Elangovan et al.) and a 2026
// scoping review (Vig et al.).

run({
  name: "Cardiospermum Halicacabum",
  profile: {
    family: "Sapindaceae",
    genus: "Cardiospermum",
    species: "halicacabum",
    nativeRange: "Found on almost every continent",
    partsUsed: "The leaves and whole plant; the leaves are eaten as a green vegetable in India",
  },
  sources: {
    elangovan: {
      title: "Ethnomedical, phytochemical and pharmacological insights on an Indian medicinal plant: The balloon vine (Cardiospermum halicacabum Linn.)",
      author: "Elangovan A, Ramachandran J, Lakshmanan DK, Ravichandran G, Thilagar S",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2022-02-25",
      doi: "10.1016/j.jep.2022.115143",
      pmid: "35227784",
      url: "https://pubmed.ncbi.nlm.nih.gov/35227784/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vig: {
      title: "Cardiospermum halicacabum: A Scoping Review on its Phytoactives, Neuroprotective, Anti-Inflammatory, and Antioxidant Potential",
      author: "Vig H, Mishra A, Wal A",
      journal: "Central Nervous System Agents in Medicinal Chemistry",
      publicationDate: "2026-05-09",
      doi: "10.2174/0118715249382675251026140404",
      pmid: "42136279",
      url: "https://pubmed.ncbi.nlm.nih.gov/42136279/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Balloon Vine", type: "COMMON_NAME" },
    { name: "Love in a Puff", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used in traditional Indian medicine for rheumatism, belly pain, back pain, coughs, skin diseases and fever." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Balloon vine is a well-known leafy green vegetable in India. In traditional Indian medicine it's used for:\n- Rheumatism and lower back pain\n- Belly pain\n- Swelling of the testicles and fluid build-up (dropsy)\n- Skin diseases\n- Coughs\n- Nervous complaints and fever",
      source: "elangovan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, balloon vine extracts have shown antioxidant activity, may help reduce inflammation, and have protected nerve cells from damage.",
      source: "vig",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Used in traditional Indian medicine for rheumatism. Not tested in people." },
  ],
});
