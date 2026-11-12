import { run } from "./lib/populate-herb";

// Bloody Cranesbill (Geranium sanguineum), from a 2024 review of its polyphenols
// in viral infections (Abarova et al.) and a 2011 open study of Neomenor, a
// combination product for period pain (Sirakov et al.). Common name "bloody
// geranium" per USDA PLANTS; family per GBIF.

run({
  name: "Bloody Cranesbill",
  profile: { family: "Geraniaceae", genus: "Geranium", species: "sanguineum", partsUsed: "The above-ground parts" },
  sources: {
    abarova: {
      title: "Emerging Therapeutic Potential of Polyphenols from Geranium sanguineum L. in Viral Infections, Including SARS-CoV-2",
      author: "Abarova S, Alexova R, Dragomanova S, et al.",
      journal: "Biomolecules",
      publicationDate: "2024-01-19",
      doi: "10.3390/biom14010130",
      pmid: "38275759",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10812934/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sirakov: {
      title: "Six-month follow-up of the effect of neomenor in patients with painful menstruation",
      author: "Sirakov M, Karamisheva V, Ivanov S",
      journal: "Akusherstvo i Ginekologiia",
      publicationDate: "2011-01-01",
      pmid: "21695945",
      url: "https://pubmed.ncbi.nlm.nih.gov/21695945/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bloody Geranium", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary: "In lab studies, polyphenol extracts blocked virus replication, eased inflammation and acted as antioxidants. There's no clinical evidence yet, including for COVID-19.",
      source: "abarova",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In an open study of 35 young women with painful periods, a Bulgarian tablet (Neomenor) with bloody cranesbill and two other herbs eased period pain over 3 months in most of them. There was no comparison group.",
      source: "sirakov",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are few human safety studies.",
      source: "abarova",
    },
  ],
  symptoms: [
    { slug: "menstrual-discomfort", notes: "Part of a combination tablet that eased period pain in a small open study." },
  ],
});
