import { run } from "./lib/populate-herb";

// Velvetweed (Abutilon theophrasti, velvetleaf), from a 2019 mouse study of
// its leaf flavonoids (Tian et al.). No human or safety studies were found.
// Family per GBIF.

run({
  name: "Velvetweed",
  profile: {
    family: "Malvaceae",
    genus: "Abutilon",
    species: "theophrasti",
    nativeRange: "Asia; now a widespread weed",
    partsUsed: "The leaves",
  },
  sources: {
    tian: {
      title: "The regulatory effect of flavonoids extracted from Abutilon theophrasti leaves on gene expression in LPS-induced ALI mice via the NF-κB and MAPK signaling pathways",
      author: "Tian C, Chen X, Chang Y, Wang R, Ning J, Cui C, Liu M",
      journal: "Pharmaceutical Biology",
      publicationDate: "2019-08-09",
      doi: "10.1080/13880209.2019.1648523",
      pmid: "31401916",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6713108/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Velvetleaf", type: "COMMON_NAME" }],
  constituents: [{ name: "Flavonoids", slug: "flavonoids", type: "flavonoid" }],
  traditions: [{ slug: "traditional-chinese-medicine", notes: "Used for inflammation, ulcers, swelling, venom and pain." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine, velvetleaf is used for inflammation, ulcers, swelling, venomous bites and pain.",
      source: "tian",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice with sudden lung inflammation, flavonoids from the leaves reduced the signals that drive inflammation.",
      source: "tian",
    },
  ],
});
