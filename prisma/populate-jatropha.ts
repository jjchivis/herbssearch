import { run } from "./lib/populate-herb";

// Jatropha (Jatropha curcas, physic nut), from a 2026 EFSA opinion on an edible
// variety, a 2017 study of plant poisoning in Sri Lankan children (Dayasiri et
// al.) and a 2018 systematic review of plant poisoning in children
// (Ghorani-Azam et al.). Family per GBIF.

run({
  name: "Jatropha",
  profile: { family: "Euphorbiaceae", genus: "Jatropha", species: "curcas", nativeRange: "Mexico and Central America", partsUsed: "The seeds (kernels) and their oil" },
  sources: {
    efsa: {
      title: "Safety of roasted and ground kernels of an edible variety of Jatropha curcas L. (Xuta) as a traditional food from a third country pursuant to Regulation (EU) No 2015/2283",
      organization: "European Food Safety Authority (EFSA), Panel on Nutrition, Novel Foods and Food Allergens",
      publicationDate: "2026-10-28",
      doi: "10.2903/j.efsa.2026.10389",
      pmid: "42953091",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13714695/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    dayasiri: {
      title: "Plant Poisoning among Children in Rural Sri Lanka",
      author: "Dayasiri MB, Jayamanne SF, Jayasinghe CY",
      journal: "International Journal of Pediatrics",
      publicationDate: "2017-03-09",
      doi: "10.1155/2017/6187487",
      pmid: "28377789",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5362701/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ghorani: {
      title: "Plant toxins and acute medicinal plant poisoning in children: A systematic literature review",
      author: "Ghorani-Azam A, Sepahi S, Riahi-Zanjani B, et al.",
      journal: "Journal of Research in Medical Sciences",
      publicationDate: "2018-03-27",
      doi: "10.4103/jrms.JRMS_629_17",
      pmid: "29692823",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5894275/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Physic Nut", type: "COMMON_NAME" },
    { name: "Barbados Nut", type: "COMMON_NAME" },
    { name: "Xuta", type: "REGIONAL_NAME", region: "Mexico (edible variety)" },
  ],
  constituents: [{ name: "Phorbol esters", slug: "phorbol-esters", type: "diterpene esters" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Most jatropha is toxic, but a non-toxic variety called xuta has been roasted and eaten in Mexico for over 25 years. In 2026 the European Food Safety Authority found roasted xuta kernels safe as a food, provided they're tested to keep out toxic kernels.",
      source: "efsa",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A review of plant poisoning in children found eating jatropha seeds or fruit is an important cause of acute poisoning in several countries, including Sri Lanka, Thailand and France.",
      source: "ghorani",
    },
    {
      category: "TOXICITY",
      description:
        "Toxic varieties contain high levels of phorbol esters, and toxic and non-toxic plants and kernels look exactly alike, so only lab testing can tell them apart.",
      source: "efsa",
    },
    {
      category: "TOXICITY",
      description: "In a study of children poisoned by plants in rural Sri Lanka, jatropha was the most common cause, usually eaten in home gardens.",
      source: "dayasiri",
    },
  ],
  symptoms: [{ slug: "poisonous-plants", notes: "The seeds are the most common plant poison eaten by children in some countries." }],
});
