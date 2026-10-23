import { run } from "./lib/populate-herb";

// Wild lettuce / opium lettuce (Lactuca virosa), from a 2009 case series of wild
// lettuce poisoning with historical background (Besharat et al., BMJ Case Reports)
// and a 2006 mouse study of its bitter compounds (Wesołowska et al.).

run({
  name: "Wild Lettuce",
  profile: {
    family: "Asteraceae",
    genus: "Lactuca",
    species: "virosa",
    partsUsed: "The dried milky sap (lactucarium) and leaves",
  },
  sources: {
    besharat: {
      title: "Wild lettuce (Lactuca virosa) toxicity",
      author: "Besharat S, Besharat M, Jabbari A",
      journal: "BMJ Case Reports",
      publicationDate: "2009-04-28",
      doi: "10.1136/bcr.06.2008.0134",
      pmid: "21686920",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3031874/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wesolowska: {
      title: "Analgesic and sedative activities of lactucin and some lactucin-like guaianolides in mice",
      author: "Wesołowska A, Nikiforuk A, Michalska K, Kisiel W, Chojnacka-Wójcik E",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2006-03-17",
      doi: "10.1016/j.jep.2006.03.003",
      pmid: "16621374",
      url: "https://pubmed.ncbi.nlm.nih.gov/16621374/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Opium Lettuce", type: "COMMON_NAME" },
    { name: "Lactuca virosa", type: "COMMON_NAME" },
    { name: "Lactucarium", type: "TRADITIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Wild lettuce, also called opium lettuce, has a milky sap that hardens into a brown substance called lactucarium when dried. Before and during the 19th century it was well known as a painkiller and a way to calm people and bring on sleep, and was used to calm coughs, help sleep, and for kidney problems, painful womb cramps and swelling. A 1917 catalogue called it a safe sleep aid for when opium was unsuitable. It's also been used in skin lotions for sunburn.",
      source: "besharat",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, bitter compounds found in wild lettuce (lactucin and lactucopicrin) relieved pain about as well as ibuprofen, and two of them made the mice calmer and less active. They haven't been tested in people.\n\nTechnical detail: hot plate and tail-flick tests at 15–30 mg/kg; reduced spontaneous locomotor activity.",
      source: "wesolowska",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Eating wild lettuce can be poisonous. In Iran, 8 people who ate it raw as a vegetable were hospitalised with confusion or reduced consciousness, agitation and anxiety, hallucinations, widened pupils, blurred vision, dry mouth, trouble passing urine, sweating, vomiting and dizziness. All recovered, though one needed intensive care. It contains traces of hyoscyamine, a compound also found in belladonna.",
      source: "besharat",
    },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "Eating wild lettuce raw has caused poisoning with confusion, hallucinations and widened pupils." },
    { slug: "occasional-sleeplessness", notes: "Historically used as a sedative and sleep aid; only tested in mice." },
  ],
});
