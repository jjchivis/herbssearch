import { run } from "./lib/populate-herb";

// Misijallo (Gaultheria insipida), from a 2026 review of Gaultheria berries
// (Michel). No research on this species' medicinal use was found; the
// review's folk-medicine statements are for the genus and are labeled so.
// Family per GBIF.

run({
  name: "Misijallo",
  profile: {
    family: "Ericaceae",
    genus: "Gaultheria",
    species: "insipida",
    nativeRange: "The Andes of South America",
    partsUsed: "The berries",
  },
  sources: {
    michel: {
      title: "Gaultheria Berries as Potential Functional Foods: Phytochemical Composition, Health-Promoting Properties, and Nutritional Potential",
      author: "Michel P",
      journal: "Nutrients",
      publicationDate: "2026-09-15",
      doi: "10.3390/nu18183015",
      pmid: "42796998",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13609934/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The berries of Gaultheria insipida have traditionally been gathered and eaten, fresh or dried. Across the genus, berries were eaten while foraging, kept as survival food and made into porridges, preserves and fermented drinks.",
      source: "michel",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Gaultheria berries in general are used in folk medicine for fever, pain, inflammation and digestive problems. In the Andes, they were also part of ceremonial foods and harvest offerings. No uses specific to this species were found.",
      source: "michel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Gaultheria fruits contain polyphenols, including salicylate-like compounds, that showed antioxidant activity in lab studies and may help reduce inflammation. This species itself hasn't been studied.",
      source: "michel",
    },
  ],
});
