import { run } from "./lib/populate-herb";

// Snowdrop (Galanthus nivalis), from a 2021 review of Galanthus biological
// activities (Kong et al.), a 1983 paper on Homer's "moly" (Plaitakis and
// Duvoisin) and the MedlinePlus (NIH) drug page for galantamine. Family per GBIF.

run({
  name: "Snowdrop",
  profile: { family: "Amaryllidaceae", genus: "Galanthus", species: "nivalis", nativeRange: "Europe", partsUsed: "The bulbs and leaves" },
  sources: {
    kong: {
      title: "Biological Activities of Snowdrop (Galanthus spp., Family Amaryllidaceae)",
      author: "Kong CK, Low LE, Siew WS, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-02-19",
      doi: "10.3389/fphar.2020.552453",
      pmid: "33679383",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7933568/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    plaitakis: {
      title: "Homer's moly identified as Galanthus nivalis L.: physiologic antidote to stramonium poisoning",
      author: "Plaitakis A, Duvoisin RC",
      journal: "Clinical Neuropharmacology",
      publicationDate: "1983-03-01",
      doi: "10.1097/00002826-198303000-00001",
      pmid: "6342763",
      url: "https://doi.org/10.1097/00002826-198303000-00001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    medlineplus: {
      title: "Galantamine",
      organization: "MedlinePlus, U.S. National Library of Medicine (NIH)",
      url: "https://medlineplus.gov/druginfo/meds/a699058.html",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A small early-spring bulb with nodding white flowers. In folk medicine it was used for pain, migraine and headache. In Bulgaria, people reportedly rubbed the leaves and bulbs on their foreheads to ease nerve pain.",
      source: "kong",
    },
    {
      category: "TRADITIONAL",
      summary: "Snowdrop bulbs contain galantamine (also spelled galanthamine), which was developed into a prescription drug for Alzheimer's disease. They also contain lycorine.",
      source: "kong",
    },
    {
      category: "TRADITIONAL",
      summary: "Researchers have suggested that \"moly,\" the plant Odysseus used against Circe's poisons in Homer's Odyssey, may have been the snowdrop.",
      source: "plaitakis",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, snowdrop extracts and compounds blocked the enzyme that galantamine targets in Alzheimer's disease, and showed antimicrobial, antioxidant and anticancer activity. These haven't been tested as snowdrop remedies in people.",
      source: "kong",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Galantamine, the drug from snowdrop, is a prescription medicine. Common side effects include nausea, vomiting, diarrhea, dizziness and weight loss. Serious ones include a slow heartbeat, fainting and seizures.",
      source: "medlineplus",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Wild snowdrops are protected under international trade rules (CITES Appendix II), and wild collection is limited.",
      source: "kong",
    },
  ],
});
