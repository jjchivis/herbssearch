import { run } from "./lib/populate-herb";

// Old Man Saltbush (Atriplex nummularia), from a 2021 review of the Atriplex
// genus (Ali et al.) and a 2018 livestock feeding study (Hintsa et al.). No
// human medical research was found. Family per GBIF.

run({
  name: "Old Man Saltbush",
  profile: {
    family: "Amaranthaceae",
    genus: "Atriplex",
    species: "nummularia",
    nativeRange: "Australia",
    partsUsed: "The seeds and leaves",
  },
  sources: {
    ali: {
      title: "The Therapeutic Properties, Ethno pharmacology and Phyto-chemistry of Atriplex Species: A review",
      author: "Ali B, Musaddiq S, Iqbal S, Rehman T, Shafiq N, Hussain A",
      journal: "Pakistan Journal of Biochemistry and Biotechnology",
      publicationDate: "2021-01-01",
      doi: "10.52700/pjbb.v2i1.38",
      url: "https://doi.org/10.52700/pjbb.v2i1.38",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hintsa: {
      title: "Effect of replacing concentrate feed with leaves of Oldman saltbush (Atriplex nummularia) on feed intake, weight gain, and carcass parameters of highland sheep fed on wheat straw in northern Ethiopia",
      author: "Hintsa K, Berhe A, Balehegn M, Berhe K",
      journal: "Tropical Animal Health and Production",
      publicationDate: "2018-03-25",
      doi: "10.1007/s11250-018-1577-8",
      pmid: "29577173",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6156750/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Old man saltbush is named for its high mineral content and survives drought and flooding. Its seeds have traditionally been used as food.",
      source: "ali",
    },
    {
      category: "TRADITIONAL",
      summary: "Its leaves are fed to livestock in dry regions; in Ethiopia they replaced costly feed for sheep.",
      source: "hintsa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies found extracts active against fungi and snails, and against ulcerative colitis in rats. The seeds contain 20-hydroxyecdysone, a plant steroid.",
      source: "ali",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "ali",
    },
  ],
});
