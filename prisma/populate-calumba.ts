import { run } from "./lib/populate-herb";

// Calumba (Jateorhiza palmata), from Rain-Tree's Tropical Plant Database (Taylor
// 2002), an 1870 BMJ report on calumba for chronic diarrhea, a 2026 study of
// its alkaloids (isoquinoline alkaloid study) and a 1995 mouse study of columbin
// and anesthetics (Wada et al., abstract only). Family per GBIF.

run({
  name: "Calumba",
  profile: { family: "Menispermaceae", genus: "Jateorhiza", species: "palmata", nativeRange: "Eastern and southern Africa", partsUsed: "The root" },
  sources: {
    raintree: {
      title: "Calumba (Jateorhiza palmata). Tropical Plant Database",
      author: "Taylor L",
      organization: "Rain-Tree Publishers",
      publicationDate: "2002-01-01",
      url: "https://www.rain-tree.com/calumba.htm",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    bmj: {
      title: "The Value of the Liquor of the Pernitrate of Iron, in Combination with Calumba, in Cases of Chronic Mucous Diarrhoea",
      journal: "British Medical Journal",
      publicationDate: "1870-12-10",
      doi: "10.1136/bmj.2.519.626",
      pmid: "20746042",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2261553/",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    alkaloids: {
      title: "Determination of the Content of Isoquinoline Alkaloids in Selected Plant Extracts and Study of Their Cholinesterase-Inhibiting Activity and Cytotoxicity Against Human Melanoma Cells Using In Vitro and In Silico Methods",
      journal: "Molecules",
      publicationDate: "2026-10-04",
      doi: "10.3390/molecules31193544",
      pmid: "42883309",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13666729/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wada: {
      title: "Columbin isolated from calumbae radix affects the sleeping time of anesthetized mice",
      author: "Wada K, Kurihara T, Yagi M, et al.",
      journal: "Biological & Pharmaceutical Bulletin",
      publicationDate: "1995-04-01",
      doi: "10.1248/bpb.18.634",
      pmid: "7655444",
      url: "https://doi.org/10.1248/bpb.18.634",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Columbo", type: "COMMON_NAME" },
    { name: "Colombo Root", type: "COMMON_NAME" },
    { name: "Jateorhiza columba", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Palmatine", slug: "palmatine", type: "alkaloid" },
    { name: "Columbamine", slug: "columbamine", type: "alkaloid" },
    { name: "Columbin", slug: "columbin", type: "diterpene" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Calumba root is a very bitter African herb, brought to Europe by Portuguese traders in the 1600s. It's used in Africa for diarrhea and dysentery, and in Brazil and Turkey for poor digestion, nausea, loss of appetite and as a bitter tonic.",
      source: "raintree",
    },
    {
      category: "TRADITIONAL",
      summary: "Victorian doctors gave calumba combined with an iron preparation for chronic diarrhea.",
      source: "bmj",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The root contains berberine-like alkaloids, including palmatine and columbamine. In lab tests, a root extract killed human melanoma cells.",
      source: "alkaloids",
    },
  ],
  safety: [
    { category: "PREPARATION_SPECIFIC", description: "No modern human medical or safety studies were found.", source: "raintree" },
    {
      category: "DRUG_INTERACTION",
      description:
        "In mice, calumba root and its compound columbin changed how long anesthetic drugs kept them asleep, shortening it for some and lengthening it for another. This suggests it could affect how the body handles some medicines; it hasn't been studied in people.",
      source: "wada",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "A traditional bitter tonic for poor digestion. Not studied in modern trials." },
    { slug: "loss-of-appetite", notes: "Used as a bitter to stimulate appetite. Not studied in modern trials." },
    { slug: "diarrhea", notes: "A traditional remedy for diarrhea and dysentery. Not studied in modern trials." },
  ],
});
