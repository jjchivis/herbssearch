import { run } from "./lib/populate-herb";

// Three-Leafed Caper (Crateva nurvala), from a 2014 mouse pain study
// (Moniruzzaman & Imam), a 2010 study in diabetic rats (Sikarwar & Patil) and a
// 2026 review of the Crateva genus (Saleh et al.). No human trials were found.
// Family per GBIF.

run({
  name: "Three-Leafed Caper",
  profile: {
    family: "Capparaceae",
    genus: "Crateva",
    species: "nurvala",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The stem bark and leaves",
  },
  sources: {
    moniruzzaman: {
      title: "Evaluation of antinociceptive effect of methanolic extract of leaves of Crataeva nurvala Buch.-Ham.",
      author: "Moniruzzaman M, Imam MZ",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2014-09-24",
      doi: "10.1186/1472-6882-14-354",
      pmid: "25248349",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4182810/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sikarwar: {
      title: "Antidiabetic activity of Crateva nurvala stem bark extracts in alloxan-induced diabetic rats",
      author: "Sikarwar MS, Patil MB",
      journal: "Journal of Pharmacy & Bioallied Sciences",
      publicationDate: "2010-01-01",
      doi: "10.4103/0975-7406.62700",
      pmid: "21814425",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3146085/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    saleh: {
      title: "Crateva religiosa and Allied Species in Traditional Knowledge and Modern Pharmacology: A Review",
      author: "Saleh RT, Elhawary SS, Khairy SA, Hamdy SA",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2026-08-01",
      doi: "10.1002/cbdv.71597",
      pmid: "42599369",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13475595/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Crataeva nurvala", type: "SCIENTIFIC_SYNONYM" }],
  constituents: [{ name: "Lupeol", slug: "lupeol", type: "triterpene" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional medicine, three-leafed caper is used for inflammation, fever, kidney and bladder stones, constipation and as a tonic, and as a contraceptive.",
      source: "moniruzzaman",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Across the Crateva genus, lab and animal studies point to benefits for kidney and bladder stones, inflammation, and liver and kidney problems, often linked to the compound lupeol.",
      source: "saleh",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a leaf extract eased pain in several tests.",
      source: "moniruzzaman",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, stem bark extracts lowered blood sugar.",
      source: "sikarwar",
    },
  ],
});
