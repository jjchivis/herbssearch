import { run } from "./lib/populate-herb";

// Country Mallow (Abutilon indicum), from a 2023 lab study of its leaves (Sunil
// et al.) and a 2020 lab study on human blood cells (Wu & Dhanasekaran). No
// human trials were found. Family per GBIF.

run({
  name: "Country Mallow",
  profile: {
    family: "Malvaceae",
    genus: "Abutilon",
    species: "indicum",
    nativeRange: "Hot regions of India and tropical Asia",
    partsUsed: "The leaves",
  },
  sources: {
    sunil: {
      title: "Phytochemical Analysis and Antioxidant Evaluation of the Ethanolic Extract of the Leaves of Abutilon indicum",
      author: "Sunil M, Vedavijaya T, Sree P K, Babu Sayana S",
      journal: "Cureus",
      publicationDate: "2023-10-26",
      doi: "10.7759/cureus.47703",
      pmid: "38021797",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10674109/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wu: {
      title: "Protective effect of leaf extract of Abutilon indicum on DNA damage and peripheral blood lymphocytes in combating the oxidative stress",
      author: "Wu X, Dhanasekaran S",
      journal: "Saudi Pharmaceutical Journal",
      publicationDate: "2020-06-25",
      doi: "10.1016/j.jsps.2020.06.015",
      pmid: "32792839",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7414073/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Thuthi", type: "REGIONAL_NAME", region: "India" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Indian traditional medicine, country mallow (thuthi) is used for bronchitis and diabetes. In Siddha medicine it is used for jaundice, piles, ulcers and leprosy.",
      source: "sunil",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a leaf extract was a strong antioxidant. It protected human white blood cells from oxidative damage and shielded DNA from damage by UV light.",
      source: "wu",
    },
  ],
});
