import { run } from "./lib/populate-herb";

// Bloodwiss (Vitis tiliifolia, a wild grapevine). Very little has been published:
// this uses folk-use records in the USDA's Dr. Duke's Ethnobotanical Database and
// a 2020 lab study of its leaf tea (Alejandro et al.).

run({
  name: "Bloodwiss",
  profile: {
    family: "Vitaceae",
    genus: "Vitis",
    species: "tiliifolia",
    partsUsed: "The leaves, usually as a tea; the vine is also a source of water",
  },
  sources: {
    duke: {
      title: "Dr. Duke's Phytochemical and Ethnobotanical Databases: Vitis tiliifolia",
      organization: "U.S. Department of Agriculture, Agricultural Research Service",
      publicationDate: "1992-01-01",
      url: "https://phytochem.nal.usda.gov/node/13375",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    alejandro: {
      title: "Phenolic Content and Antioxidant Capacity of Infusions of Vitis tiliifolia (Humb & Bonpl. Ex Schult.) Leaves",
      author: "Alejandro HM, Cruz-Castillo JG, Galindo Tovar ME, et al.",
      journal: "Journal of Agricultural Science and Technology",
      publicationDate: "2020-04-01",
      url: "https://jast.modares.ac.ir/article_16448.html",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Blood Wiss", type: "COMMON_NAME" },
    { name: "Vitis tiliifolia", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bloodwiss is a wild grapevine. Folk-use records collected by the US Department of Agriculture, mostly from older Mexican surveys, list it for:\n- Increasing urination\n- Fever\n- Gout\n- Tumors\nIn Mexico and Honduras, the vine has also been used as a source of drinking water. These are recorded uses, not tested treatments.",
      source: "duke",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2020 lab study of tea made from the leaves of wild Mexican vines found 14 plant compounds, including resveratrol, quercetin and rutin, and antioxidant activity. The amounts varied a lot between vines. This was a chemistry study and doesn't show any health effect.",
      source: "alejandro",
    },
  ],
});
