import { run } from "./lib/populate-herb";

// Patchouli (Pogostemon cablin), from Britannica, the FDA list of natural
// flavoring substances, two reviews (Swamy and Sinniah 2015; Junren et al. 2021),
// a mouse allergy study (Yoon et al. 2016) and a 2026 contact dermatitis case
// (Rosato et al.). The Myhealthopedia article was reviewed but cites no studies,
// so its claims weren't used. Family per GBIF.

run({
  name: "Patchouli",
  profile: { family: "Lamiaceae", genus: "Pogostemon", species: "cablin", nativeRange: "Tropical Asia", partsUsed: "The leaves, mainly as an essential oil" },
  sources: {
    britannica: {
      title: "Patchouli",
      author: "Petruzzello M",
      organization: "Encyclopaedia Britannica",
      publicationDate: "2026-09-12",
      url: "https://www.britannica.com/plant/patchouli",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    fda: {
      title: "21 CFR 172.510 Natural flavoring substances and natural substances used in conjunction with flavors",
      organization: "US Food and Drug Administration",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-172/subpart-F/section-172.510",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    swamy: {
      title: "A Comprehensive Review on the Phytochemical Constituents and Pharmacological Activities of Pogostemon cablin Benth.: An Aromatic Medicinal Plant of Industrial Importance",
      author: "Swamy MK, Sinniah UR",
      journal: "Molecules",
      publicationDate: "2015-05-12",
      doi: "10.3390/molecules20058521",
      pmid: "25985355",
      url: "https://doi.org/10.3390/molecules20058521",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    junren: {
      title: "Pharmacological activities and mechanisms of action of Pogostemon cablin Benth: a review",
      author: "Junren C, Xiaofang X, Mengting L, et al.",
      journal: "Chinese Medicine",
      publicationDate: "2021-01-07",
      doi: "10.1186/s13020-020-00413-y",
      pmid: "33413544",
      url: "https://doi.org/10.1186/s13020-020-00413-y",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yoon: {
      title: "Anti-allergic and anti-inflammatory effects of aqueous extract of Pogostemon cablin",
      author: "Yoon SC, Je IG, Cui X, et al.",
      journal: "International Journal of Molecular Medicine",
      publicationDate: "2016-01-01",
      doi: "10.3892/ijmm.2015.2401",
      pmid: "26531835",
      url: "https://doi.org/10.3892/ijmm.2015.2401",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rosato: {
      title: "Allergic Contact Dermatitis to a Product Containing Patchouli Essential Oil in a Non-Occupational Setting",
      author: "Rosato WA, Danza P, Ciccarese G, Foti C, Sbarra G",
      journal: "Contact Dermatitis",
      publicationDate: "2026-04-01",
      doi: "10.1111/cod.70081",
      pmid: "41461377",
      url: "https://doi.org/10.1111/cod.70081",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Guang Huo Xiang", type: "REGIONAL_NAME", region: "China" },
    { name: "Patchouly", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Patchouli alcohol", slug: "patchouli-alcohol", type: "sesquiterpene" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A bushy, hairy-leaved mint-family plant from tropical Asia. Its steam-distilled leaf oil has a musky scent and is widely used in perfumes, soaps, cosmetics, incense and candles. The leaves are also used to keep moths off clothing.",
      source: "britannica",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Used in traditional Chinese medicine since the Eastern Han dynasty (about 2,000 years ago) for colds, nausea, fever, headache and diarrhea.",
      source: "junren",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Traditionally also used for vomiting, stomach pain and insect and snake bites. The oil is applied to the skin for fungal infections, dandruff and eczema, and used in aromatherapy for stress and low mood.",
      source: "swamy",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a water extract reduced allergic reactions and histamine release.",
      source: "yoon",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies suggest its compounds, especially patchouli alcohol, may protect the stomach lining, fight germs and reduce inflammation and pain. These haven't been confirmed in people.",
      source: "junren",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Patchouli oil can cause allergic skin rashes (contact dermatitis), including from everyday scented products.",
      source: "rosato",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "The FDA allows patchouli as a natural flavoring in foods and drinks.",
      source: "fda",
    },
  ],
  symptoms: [
    { slug: "occasional-nausea", notes: "A traditional Chinese remedy for nausea. Not well studied in people." },
    { slug: "colds-and-congestion", notes: "Used for colds in traditional Chinese medicine. Not well studied in people." },
    { slug: "fungal-skin-infections", notes: "The oil is traditionally applied for fungal skin infections. Not tested in people." },
  ],
});
