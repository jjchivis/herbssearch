import { run } from "./lib/populate-herb";

// Wood Avens (Geum urbanum, herb bennet), from a 2022 antimicrobial study (Bunse
// et al.) and a 2021 antidiabetic screening study (Günther et al.). Common name
// "herb bennet" per USDA PLANTS; family per GBIF.

run({
  name: "Wood Avens",
  profile: { family: "Rosaceae", genus: "Geum", species: "urbanum", partsUsed: "The roots and rhizomes" },
  sources: {
    bunse: {
      title: "Evaluation of Geum urbanum L. Extracts with Respect to Their Antimicrobial Potential",
      author: "Bunse M, Mailänder LK, Lorenz P, et al.",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2022-01-18",
      doi: "10.1002/cbdv.202100850",
      pmid: "34882948",
      url: "https://doi.org/10.1002/cbdv.202100850",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gunther: {
      title: "Avens Root (Geum Urbanum L.) Extract Discovered by Target-Based Screening Exhibits Antidiabetic Activity in the Hen's Egg Test Model and Drosophila melanogaster",
      author: "Günther I, Rimbach G, Nevermann S, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-12-15",
      doi: "10.3389/fphar.2021.794404",
      pmid: "34975489",
      url: "https://doi.org/10.3389/fphar.2021.794404",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Herb Bennet", type: "COMMON_NAME" },
    { name: "Avens Root", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The roots and rhizomes are used traditionally for ulcers and irritation of the mouth, stomach and intestines. They're rich in tannins.",
      source: "bunse",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, root extracts, especially their tannins, killed Staph and acne bacteria.",
      source: "bunse",
    },
    {
      category: "PRECLINICAL",
      summary: "A root extract blocked sugar-digesting enzymes and lowered blood sugar in chicken eggs and fruit flies. It's rich in ellagic acid.",
      source: "gunther",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "bunse",
    },
  ],
});
