import { run } from "./lib/populate-herb";

// Marula Tree (Sclerocarya birrea), from a 2010 review (Ojewole et al.), a 2025
// review of marula as food and medicine (Olas), a 2015 skin study of the oil
// (Komane et al.) and a 2024 rat toxicity study (Coulidiaty et al.). Family per
// GBIF.

run({
  name: "Marula Tree",
  profile: { family: "Anacardiaceae", genus: "Sclerocarya", species: "birrea", nativeRange: "Southern, East and West Africa", partsUsed: "The fruit, nut oil, bark and leaves" },
  sources: {
    ojewole: {
      title: "Sclerocarya birrea (A. Rich) Hochst. ['Marula'] (Anacardiaceae): a review of its phytochemistry, pharmacology and toxicology and its ethnomedicinal uses",
      author: "Ojewole JA, Mawoza T, Chiwororo WD, Owira PM",
      journal: "Phytotherapy Research",
      publicationDate: "2010-05-01",
      doi: "10.1002/ptr.3080",
      pmid: "20013815",
      url: "https://doi.org/10.1002/ptr.3080",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    olas: {
      title: "Marula [Sclerocarya birrea (A. Rich.) Hochst.] products as a food and medicine",
      author: "Olas B",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-02-18",
      doi: "10.3389/fphar.2025.1552355",
      pmid: "40041496",
      url: "https://doi.org/10.3389/fphar.2025.1552355",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    komane: {
      title: "Safety and efficacy of Sclerocarya birrea (A.Rich.) Hochst (Marula) oil: A clinical perspective",
      author: "Komane B, Vermaak I, Summers B, Viljoen A",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2015-12-24",
      doi: "10.1016/j.jep.2015.10.037",
      pmid: "26528587",
      url: "https://doi.org/10.1016/j.jep.2015.10.037",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    coulidiaty: {
      title: "Acute and Chronic Oral Toxicity of Hydroethanolic Extract of Sclerocarya birrea (Anacardiaceae) in Wistar Rats",
      author: "Coulidiaty AGV, Boni SI, Ouedraogo R, et al.",
      journal: "Journal of Experimental Pharmacology",
      publicationDate: "2024-07-12",
      doi: "10.2147/JEP.S467920",
      pmid: "39045603",
      url: "https://doi.org/10.2147/JEP.S467920",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Marula", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "One of southern Africa's most valued native trees. Its fruit pulp has more vitamin C than oranges and is made into sweets, wine and Amarula liqueur, and the nuts are eaten.",
      source: "olas",
    },
    {
      category: "TRADITIONAL",
      summary: "The bark, fruit and leaves are used in African traditional medicine, especially for diabetes, and also for diarrhea and other ailments.",
      source: "coulidiaty",
    },
    {
      category: "TRADITIONAL",
      summary: "Zulu people in South Africa have applied the nut oil to keep skin healthy, and it's now a popular cosmetic ingredient.",
      source: "komane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In skin tests on 20 women, marula oil didn't irritate the skin and moisturized and hydrated dry skin.",
      source: "komane",
    },
    {
      category: "PRECLINICAL",
      summary: "Animal and lab studies suggest it may lower blood sugar, ease diarrhea and inflammation, and fight germs.",
      source: "ojewole",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In rats, a leaf extract caused no deaths at a very high single dose and no harm to organs or blood after 90 days of use.",
      source: "coulidiaty",
    },
  ],
  symptoms: [
    { slug: "dry-skin", notes: "Marula oil moisturized dry skin in a small study." },
    { slug: "high-blood-sugar", notes: "A traditional diabetes remedy; lowered blood sugar in animal studies. Not tested in people." },
  ],
});
