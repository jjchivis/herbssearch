import { run } from "./lib/populate-herb";

// Himalayan Birch (Betula utilis, bhojpatra), from a 2016 lab study of its
// bark (Mishra et al.) and a 2023 wound-dressing study in rats (Ishfaq et al.).
// No human trials were found. Family per GBIF.

run({
  name: "Himalayan Birch",
  profile: {
    family: "Betulaceae",
    genus: "Betula",
    species: "utilis",
    nativeRange: "The high Himalayas",
    partsUsed: "The bark",
  },
  sources: {
    mishra: {
      title: "Isolation, Characterization and Anticancer Potential of Cytotoxic Triterpenes from Betula utilis Bark",
      author: "Mishra T, Arya RK, Meena S, et al.",
      journal: "PLOS ONE",
      publicationDate: "2016-07-25",
      doi: "10.1371/journal.pone.0159430",
      pmid: "27453990",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4959718/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ishfaq: {
      title: "Design and evaluation of sodium alginate-based hydrogel dressings containing Betula utilis extract for cutaneous wound healing",
      author: "Ishfaq B, Khan IU, Khalid SH, Asghar S",
      journal: "Frontiers in Bioengineering and Biotechnology",
      publicationDate: "2023-01-26",
      doi: "10.3389/fbioe.2023.1042077",
      pmid: "36777244",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9909831/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Bhojpatra", type: "REGIONAL_NAME", region: "India" }, { name: "Himalayan Silver Birch", type: "COMMON_NAME" }],
  constituents: [{ name: "Betulinic Acid", slug: "betulinic-acid", type: "triterpene" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Himalayan silver birch (bhojpatra) grows high in the Himalayas. It has long been used in traditional medicine for inflammation, kidney and bladder problems, and cancers.",
      source: "mishra",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, compounds from the bark, including betulinic acid and ursolic acid, harmed several kinds of cancer cells, and ursolic acid targeted breast cancer cells over normal ones.",
      source: "mishra",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, a gel dressing containing birch bark extract helped wounds close by 93% and killed bacteria.",
      source: "ishfaq",
    },
  ],
});
