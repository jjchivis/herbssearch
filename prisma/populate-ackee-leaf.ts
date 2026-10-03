import { run } from "./lib/populate-herb";

// Ackee Leaf (Blighia sapida), from a 2019 review of the ackee plant
// (Sinmisola et al., J Ethnopharmacol), a mouse study of the leaf for pain
// (Olayinka et al. 2021), a fly study of leaf and aril extracts (Ibraheem et
// al. 2022) and a report of fatal ackee poisoning (Gaillard et al. 2011).

run({
  name: "Ackee Leaf",
  profile: {
    family: "Sapindaceae",
    genus: "Blighia",
    species: "sapida",
    nativeRange: "Originally from sub-Saharan Africa; now grown in the Caribbean, the Americas and elsewhere",
    partsUsed: "The leaves. The bark, roots, seeds and fruit pods are also used in traditional medicine.",
  },
  sources: {
    sinmisola: {
      title: "Blighia sapida K.D. Koenig: A review on its phytochemistry, pharmacological and nutritional properties",
      author: "Sinmisola A, Oluwasesan BM, Chukwuemeka AP",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2019-01-24",
      doi: "10.1016/j.jep.2019.01.017",
      pmid: "30685434",
      url: "https://doi.org/10.1016/j.jep.2019.01.017",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    olayinka: {
      title: "Phytochemical screening of aqueous leaf extract of Blighia sapida K.D. Koenig (Sapindaceae) and its analgesic property in mice",
      author: "Olayinka JN, Ozolua RI, Akhigbemen AM",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2021-02-27",
      doi: "10.1016/j.jep.2021.113977",
      pmid: "33652110",
      url: "https://doi.org/10.1016/j.jep.2021.113977",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ibraheem: {
      title: "Ackee (Blighia sapida K.D. Koenig) Leaves and Arils Methanolic Extracts Ameliorate CdCl2-Induced Oxidative Stress Biomarkers in Drosophila melanogaster",
      author: "Ibraheem O, Oyewole TA, Adedara A, et al.",
      journal: "Oxidative Medicine and Cellular Longevity",
      organization: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2022-11-14",
      doi: "10.1155/2022/3235031",
      pmid: "36425055",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9679428/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gaillard: {
      title: "Fatal intoxication due to ackee (Blighia sapida) in Suriname and French Guyana. GC-MS detection and quantification of hypoglycin-A",
      author: "Gaillard Y, Carlier J, Berscht M, Mazoyer C, Bevalot F, Guitton J, Fanton L",
      journal: "Forensic Science International",
      organization: "Forensic Science International",
      publicationDate: "2011-02-16",
      doi: "10.1016/j.forsciint.2011.01.018",
      pmid: "21324617",
      url: "https://doi.org/10.1016/j.forsciint.2011.01.018",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ackee", type: "COMMON_NAME" },
    { name: "Akee", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "african-traditional-medicine", notes: "Used in sub-Saharan Africa, where it originated, for many ailments, including pain, fever and stomach problems." },
    { slug: "caribbean-folk-medicine", notes: "The fruit's aril is the main ingredient of Jamaica's national dish." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ackee comes from sub-Saharan Africa and is now grown in the Caribbean and elsewhere. The fruit's soft aril is the main ingredient of Jamaica's national dish. Parts of the plant, including the leaves, are traditionally used for:\n- Fever, including in young children\n- Stomach ache, constipation, diarrhea and dysentery\n- Backache and rheumatism\n- Skin infections and conjunctivitis (pink eye)\n- Malaria and typhoid",
      source: "sinmisola",
    },
    {
      category: "TRADITIONAL",
      summary: "The leaves are traditionally used for pain between the ribs, stomach ache, back pain, skin diseases and psychosis.",
      source: "olayinka",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a water-based leaf extract reduced pain. The researchers think it works in the body's tissues rather than in the brain.\n\nTechnical detail: 250 and 500 mg/kg by mouth; contains chlorogenic acid, saponins, tannins, caffeic acid, quercetin and gallic acid.",
      source: "olayinka",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In fruit flies, leaf and aril extracts helped protect against damage caused by the heavy metal cadmium, acting as antioxidants.",
      source: "ibraheem",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Unripe ackee fruit is poisonous. It contains large amounts of hypoglycin A, a toxic compound. Between 1998 and 2001, 16 children died in Suriname from suspected ackee poisoning, linked to its misuse by traditional healers; hypoglycin A was found in one child's stomach.\n\nTechnical detail: hypoglycin A measured at 9.2 mg/g in fruit from Jamaica, 8.1 mg/g from Burkina Faso and 5.1 mg/g from Suriname.",
      source: "gaillard",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "Parts of the ackee plant are traditionally used for fever. This use hasn't been tested in people." },
    { slug: "joint-discomfort", notes: "Traditionally used for backache and rheumatism; the leaf reduced pain in mice. It hasn't been tested in people." },
    { slug: "indigestion", notes: "Traditionally used for stomach ache. This use hasn't been tested in people." },
    { slug: "skin-irritation", notes: "Traditionally used for skin infections and skin diseases. This use hasn't been tested in people." },
  ],
});
