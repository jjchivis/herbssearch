import { run } from "./lib/populate-herb";

// Red Bryony (Bryonia dioica), from a 2020 study of wild vegetables eaten in Spain
// (García-Herrera et al.), a 1986 study of a toxic root protein (Stirpe et al.), a
// 2020 mouse melanoma study (Ben Abdessamad et al.) and a 2019 history of its close
// relative white bryony (Kujawska and Svanberg). Family per GBIF.

run({
  name: "Red Bryony",
  profile: { family: "Cucurbitaceae", genus: "Bryonia", species: "dioica", nativeRange: "Europe, North Africa and western Asia", partsUsed: "The root, and the young shoots as food" },
  sources: {
    garcia: {
      title: "Nutritional and Phytochemical Composition of Mediterranean Wild Vegetables after Culinary Treatment",
      author: "García-Herrera P, Morales P, Cámara M, et al.",
      journal: "Foods",
      publicationDate: "2020-11-28",
      doi: "10.3390/foods9121761",
      pmid: "33260734",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7760095/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    stirpe: {
      title: "Bryodin, a ribosome-inactivating protein from the roots of Bryonia dioica L. (white bryony)",
      author: "Stirpe F, Barbieri L, Battelli MG, et al.",
      journal: "Biochemical Journal",
      publicationDate: "1986-12-15",
      doi: "10.1042/bj2400659",
      pmid: "3827858",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1147471/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ben: {
      title: "Antitumor Effect of Bryonia dioïca Methanol Extract: In Vitro and In Vivo Study",
      author: "Ben Abdessamad I, Bouhlel I, Chekir-Ghedira L, Krifa M",
      journal: "Nutrition and Cancer",
      publicationDate: "2019-08-28",
      doi: "10.1080/01635581.2019.1654528",
      pmid: "31460802",
      url: "https://doi.org/10.1080/01635581.2019.1654528",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kujawska: {
      title: "From medicinal plant to noxious weed: Bryonia alba L. (Cucurbitaceae) in northern and eastern Europe",
      author: "Kujawska M, Svanberg I",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2019-05-09",
      doi: "10.1186/s13002-019-0303-6",
      pmid: "31072383",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6509761/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    usda: {
      title: "Bryonia dioica Jacq. (Cretan bryony)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/BRDI5",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Bryony", type: "COMMON_NAME" },
    { name: "Cretan Bryony", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A climbing vine with red berries and a large root. In the Mediterranean, its young shoots are gathered and boiled as a wild vegetable.",
      source: "garcia",
    },
    {
      category: "TRADITIONAL",
      summary: "Its close relative, white bryony, was once a common folk medicine in Europe and was sold as a fake mandrake root. It's still used as medicine in parts of the Balkans.",
      source: "kujawska",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice with melanoma, a root extract shrank tumors by about 65% and reduced spread to the lungs, likely from compounds called cucurbitacins.",
      source: "ben",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "The fruits and root contain toxic compounds (triterpene glycosides and ribosome-inactivating proteins). Only the young shoots are eaten, and only after cooking.",
      source: "garcia",
    },
    {
      category: "TOXICITY",
      description: "The root contains bryodin, a protein that shuts down protein-making in cells.",
      source: "stirpe",
    },
  ],
});
