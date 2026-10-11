import { run } from "./lib/populate-herb";

// Boneset (Eupatorium perfoliatum), from a 2025 review and survey of Eastern
// Kentucky medicinal plants (Veldhi et al.) and a 2016 lab study of its activity
// against influenza virus (Derksen et al.; abstract only).

run({
  name: "Boneset",
  profile: {
    family: "Asteraceae",
    genus: "Eupatorium",
    species: "perfoliatum",
    nativeRange: "North America, including Kentucky, in wet meadows and along streams",
    partsUsed: "The leaves and other above-ground parts, as tea or as an alcohol-and-water extract",
  },
  sources: {
    veldhi: {
      title: "A Review and Survey of Local Eastern Kentucky Medicinal Plants and Their Pharmacological Benefits",
      author: "Veldhi P, Crager C, Ghayur A, Ul-Haq Z, Ghayur MN",
      journal: "Plants",
      publicationDate: "2025-10-16",
      doi: "10.3390/plants14203182",
      pmid: "41157739",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566942/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    derksen: {
      title: "Antiviral activity of hydroalcoholic extract from Eupatorium perfoliatum L. against the attachment of influenza A virus",
      author: "Derksen A, Kühn J, Hafezi W, Sendker J, Ehrhardt C, Ludwig S, Hensel A",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2016-05-10",
      doi: "10.1016/j.jep.2016.05.016",
      pmid: "27178637",
      url: "https://pubmed.ncbi.nlm.nih.gov/27178637/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Thoroughwort", type: "COMMON_NAME" },
    { name: "Eupatorium", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used by Native Americans for fever and infections, and as a whole-plant tea for colds, sore throat and flu." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Boneset has long been used for fever, flu and the bone pain that comes with fevers. Native Americans used it as a tonic tea for colds, sore throat and flu. In Eastern Kentucky, local people still drink boneset leaf tea as a laxative and to calm coughs. It has also been used to bring on sweating and for digestion.",
      source: "veldhi",
    },
    {
      category: "TRADITIONAL",
      summary: "Native Americans used the above-ground parts for fever and infections. In Europe today, alcohol-and-water extracts are used in herbal medicine for infections of the nose and throat.",
      source: "derksen",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2016 lab study, an extract of boneset stopped flu viruses from attaching to and infecting cells. This hasn't been tested in people.",
      source: "derksen",
    },
    {
      category: "PRECLINICAL",
      summary: "Other lab and animal studies report that boneset stimulates the immune system, may help reduce inflammation, protects the heart and kills bacteria. These haven't been confirmed in people.",
      source: "veldhi",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A traditional Native American and folk remedy for fever and flu. Not tested in trials." },
    { slug: "colds-and-congestion", notes: "Used as a tea for colds and flu; an extract stopped flu viruses infecting cells in the lab. Not tested in people." },
    { slug: "cough", notes: "Eastern Kentucky locals drink boneset leaf tea to calm coughs. Not tested in trials." },
  ],
});
