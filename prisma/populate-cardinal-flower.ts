import { run } from "./lib/populate-herb";

// Cardinal Flower (Lobelia cardinalis), from a 2016 lab and rat study of its
// main alkaloid, lobinaline (Brown et al.). No human or safety studies were
// found. Traditional uses also from the Native American Ethnobotany
// Database. Family per GBIF.

run({
  name: "Cardinal Flower",
  profile: {
    family: "Campanulaceae",
    genus: "Lobelia",
    species: "cardinalis",
    nativeRange: "North and Central America",
    partsUsed: "The whole plant has been studied",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Lobelia cardinalis",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Lobelia+cardinalis",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    brown: {
      title: "Novel multifunctional pharmacology of lobinaline, the major alkaloid from Lobelia cardinalis",
      author: "Brown DP, Rogers DT, Pomerleau F, et al.",
      journal: "Fitoterapia",
      publicationDate: "2016-04-20",
      doi: "10.1016/j.fitote.2016.04.013",
      pmid: "27105955",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5299595/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Lobinaline", slug: "lobinaline", type: "alkaloid" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used by the Cherokee, Iroquois, Delaware, Meskwaki and Pawnee." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Cherokee used cardinal flower for colds, fever, stomach trouble, worms, rheumatism and sores that were hard to heal, and as a poultice for headache. The Delaware drank a root tea for typhoid.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Iroquois used it for pain, fever, cramps and sores, and as a medicine that strengthened all others. The Meskwaki and Pawnee used the roots as a love medicine.",
      source: "naeb",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Cardinal flower's main alkaloid, lobinaline, acts on the same brain receptors as nicotine and on dopamine, a brain messenger. In lab and rat studies, it was a strong antioxidant and slowed dopamine clearance. Researchers see it as a lead for Parkinson's disease and addiction research.\n\nTechnical detail: binds α4β2 and α7 nicotinic acetylcholine receptors; inhibits the dopamine transporter.",
      source: "brown",
    },
  ],
});
