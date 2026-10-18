import { run } from "./lib/populate-herb";

// Drynaria Rhizome (Drynariae Rhizoma, gu sui bu, from Drynaria fortunei), from a
// 2024 animal study of its effects on bone formation (Lin et al.).

run({
  name: "Drynaria Rhizome",
  profile: {
    family: "Polypodiaceae",
    genus: "Drynaria",
    species: "fortunei",
    partsUsed: "The dried rhizome of a fern, usually as a water extract",
  },
  sources: {
    lin: {
      title: "Extracts of Drynariae Rhizoma Promote Bone Formation in OVX Rats through Modulating the Gut Microbiota",
      author: "Lin Q, Ouyang X, Pan Q, et al.",
      journal: "Planta Medica",
      publicationDate: "2024-11-05",
      doi: "10.1055/a-2462-4844",
      pmid: "39500341",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11928296/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Gu Sui Bu", type: "TRADITIONAL_NAME" },
    { name: "Gusuibu", type: "TRADITIONAL_NAME" },
    { name: "Drynariae Rhizoma", type: "COMMON_NAME" },
    { name: "Drynaria", type: "COMMON_NAME" },
    { name: "Drynaria roosii", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called gu sui bu; commonly used to prevent and treat bone diseases such as osteoporosis." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Gu sui bu is the dried rhizome of the fern Drynaria fortunei. In Chinese medicine it's commonly used, usually as a water extract in herbal prescriptions, to prevent and treat bone diseases such as osteoporosis, and it's an ingredient in bone health supplements in China.",
      source: "lin",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2024 study in rats with bone loss like that after menopause, drynaria extract improved bone structure and increased signs of new bone formation, possibly partly through changes in gut bacteria. Earlier lab studies found it helped bone-building cells grow. This hasn't been confirmed in people.",
      source: "lin",
    },
  ],
});
