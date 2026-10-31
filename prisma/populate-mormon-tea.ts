import { run } from "./lib/populate-herb";

// Mormon Tea (Ephedra trifurca, longleaf jointfir), from the Native American
// Ethnobotany Database (Moerman, BRIT), a 2020 review of the Ephedra genus
// (González-Juárez et al.) and the NCCIH fact sheet on Chinese ephedra, a
// related species, for the FDA ban on ephedrine supplements. Family per GBIF.

run({
  name: "Mormon Tea",
  profile: {
    family: "Ephedraceae",
    genus: "Ephedra",
    species: "trifurca",
    nativeRange: "Southwestern US and northern Mexico",
    partsUsed: "The green stems",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Ephedra trifurca",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Ephedra+trifurca",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    gonzalez: {
      title: "A Review of the Ephedra genus: Distribution, Ecology, Ethnobotany, Phytochemistry and Pharmacological Properties",
      author: "González-Juárez DE, Escobedo-Moratilla A, Flores J, et al.",
      journal: "Molecules",
      publicationDate: "2020-07-20",
      doi: "10.3390/molecules25143283",
      pmid: "32698308",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7397145/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nccih: {
      title: "Ephedra",
      organization: "National Center for Complementary and Integrative Health (NCCIH), NIH",
      url: "https://www.nccih.nih.gov/health/ephedra",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Longleaf Jointfir", type: "COMMON_NAME" },
    { name: "Popotillo", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Cola de Zorra", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Tepopote", type: "REGIONAL_NAME", region: "Mexico" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used by the Navajo, Pima (O'odham) and Cocopa peoples." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The Navajo drank a tea of the dried plant for stomach troubles, kidney problems and venereal disease.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Cocopa put ground or boiled stems on sores. The Pima (O'odham) put the plant on bleeding sores and burned the dried plant on the skin, like moxibustion, to treat boils and sores.",
      source: "naeb",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "American Ephedra species like Mormon tea are thought to lack ephedrine, the stimulant in Chinese ephedra, but a few reports say they do contain it, so this is unclear. Very few studies have looked at what they contain or how they affect the body.",
      source: "gonzalez",
    },
    {
      category: "TOXICITY",
      description:
        "Chinese ephedra (a related species, Ephedra sinica) has been linked to high blood pressure, heart attack, seizure, stroke and psychosis, and the FDA banned supplements containing ephedrine in 2004. It's considered unsafe in pregnancy, while breastfeeding and for children.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "The Navajo drank a tea of the dried plant for stomach troubles. Not studied in people." },
    { slug: "wounds-and-burns", notes: "Ground or boiled stems were put on sores by the Cocopa. Not studied in people." },
  ],
  preparations: [{ slug: "tea-infusion", notes: "Tea of the dried plant taken by the Navajo for stomach and kidney troubles.", source: "naeb" }],
});
