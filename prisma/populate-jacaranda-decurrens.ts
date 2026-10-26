import { run } from "./lib/populate-herb";

// Jacaranda decurrens (carobinha), from a 2020 mouse wound study (Serra et
// al.) and a 2016 rat obesity study (Antunes et al.). No human studies were
// found. Family per GBIF.

run({
  name: "Jacaranda Decurrens",
  profile: {
    family: "Bignoniaceae",
    genus: "Jacaranda",
    species: "decurrens",
    nativeRange: "The Cerrado savanna of central Brazil",
    partsUsed: "The leaves",
  },
  sources: {
    serra: {
      title: "Chemical Characterization and Wound Healing Property of Jacaranda decurrens Cham. (Bignoniaceae): An Experimental Study Based on Molecular Mechanisms",
      author: "Serra MB, Barroso WA, Rocha C, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2020-04-20",
      doi: "10.1155/2020/4749712",
      pmid: "32382292",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7191437/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    antunes: {
      title: "Antiobesity Effects of Hydroethanolic Extract of Jacaranda decurrens Leaves",
      author: "Antunes KA, Baldivia DD, da Rocha PD, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2016-12-12",
      doi: "10.1155/2016/4353604",
      pmid: "28058058",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5183763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Carobinha", type: "REGIONAL_NAME", region: "Brazil" }],
  constituents: [
    { name: "Ursolic Acid", slug: "ursolic-acid", type: "triterpene" },
    { name: "Luteolin", slug: "luteolin", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Carobinha is common in Brazil's Cerrado savanna and is a popular remedy for skin diseases.",
      source: "serra",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, an ointment made from the leaves sped up wound healing, closing wounds within nine days with less inflammation and more new collagen.",
      source: "serra",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In obese rats, a leaf extract reduced body weight, body fat, cholesterol and triglycerides. Very high single doses caused no signs of poisoning in rats.\n\nTechnical detail: acute doses 2 and 5 g/kg; hypercaloric diet model; contains jacaric and ursolic acids, luteolin, quercetin and kaempferol.",
      source: "antunes",
    },
  ],
});
