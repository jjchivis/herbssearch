import { run } from "./lib/populate-herb";

// Tayuya (Cayaponia tayuya), from a 2008 study of flavonoids from the root
// (Aquila et al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Tayuya",
  profile: {
    family: "Cucurbitaceae",
    genus: "Cayaponia",
    species: "tayuya",
    nativeRange: "Brazil, Peru and Colombia",
    partsUsed: "The large swollen root",
  },
  sources: {
    aquila: {
      title: "Anti-inflammatory activity of flavonoids from Cayaponia tayuya roots",
      author: "Aquila S, Giner RM, Recio MC, Spegazzini ED, Ríos JL",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2008-11-08",
      doi: "10.1016/j.jep.2008.11.002",
      pmid: "19041703",
      url: "https://pubmed.ncbi.nlm.nih.gov/19041703/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Taiuiá", type: "REGIONAL_NAME", region: "Brazil" }],
  constituents: [
    { name: "Vicenin-2", slug: "vicenin-2", type: "flavonoid" },
    { name: "Spinosin", slug: "spinosin", type: "flavonoid" },
    { name: "Isovitexin", slug: "isovitexin", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tayuya is a climbing vine with a large swollen root. In the folk medicine of Brazil, Peru and Colombia, the root is used to reduce inflammation and for rheumatism.",
      source: "aquila",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Flavonoids from the root, applied to swollen mouse ears, reduced the swelling by 66% after a single application and by 37% in longer-lasting inflammation. In lab tests, they blocked enzymes that drive inflammation.\n\nTechnical detail: TPA-induced ear oedema, 0.5 mg/ear; inhibited iNOS (98%) and COX-2 (49%) expression in RAW 264.7 macrophages.",
      source: "aquila",
    },
  ],
});
