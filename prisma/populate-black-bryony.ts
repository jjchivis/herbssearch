import { run } from "./lib/populate-herb";

// Black Bryony (Dioscorea communis, also Tamus communis), from a 2022 review of its
// rhizome (Slavova et al.) and a 1983 study of its skin-irritating berries and root
// (Schmidt and Moult). Not related to red bryony despite the name. Family per GBIF.

run({
  name: "Black Bryony",
  profile: { family: "Dioscoreaceae", genus: "Dioscorea", species: "communis", nativeRange: "Europe, North Africa and western Asia", partsUsed: "The rhizome (root), used externally" },
  sources: {
    slavova: {
      title: "Phytochemical Constituents and Pharmacological Potential of Tamus communis Rhizomes",
      author: "Slavova I, Tomova T, Kusovska S, Chukova Y, Argirova M",
      journal: "Molecules",
      publicationDate: "2022-03-12",
      doi: "10.3390/molecules27061851",
      pmid: "35335214",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8949886/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    schmidt: {
      title: "The dermatitic properties of black bryony (Tamus communis L.)",
      author: "Schmidt RJ, Moult SP",
      journal: "Contact Dermatitis",
      publicationDate: "1983-09-01",
      doi: "10.1111/j.1600-0536.1983.tb04435.x",
      pmid: "6627925",
      url: "https://doi.org/10.1111/j.1600-0536.1983.tb04435.x",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Tamus communis", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A climbing wild yam with heart-shaped leaves, red berries and a large root. In Bulgarian folk medicine the root juice is rubbed on for injuries, bruises, rheumatic and muscle pain and sciatica; in Turkey the pounded root is used for rheumatism.",
      source: "slavova",
    },
    {
      category: "PRECLINICAL",
      summary: "The root irritates the skin, which increases blood flow to the area, likely why it's used as a rub. Compounds from the root killed cervical cancer cells in lab tests.",
      source: "slavova",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Juice from the berries and the slimy root sap cause skin rashes, from tiny needle-like calcium oxalate crystals that pierce the skin and from histamine.",
      source: "schmidt",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "The root is rubbed on for rheumatic and muscle pain in Bulgarian and Turkish folk medicine. Not tested in people." },
  ],
});
