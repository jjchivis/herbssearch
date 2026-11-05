import { run } from "./lib/populate-herb";

// Hallea ciliata (Mitragyna ciliata), from a 2016 Cameroon mouse study
// (Stephanie et al.), a 2019 Ghanaian antimalarial study (Laryea and Borquaye) and
// a 2008 heart enzyme study (Bidie et al.). It's in the same genus as kratom.
// Family per GBIF.

run({
  name: "Hallea Ciliata",
  profile: { family: "Rubiaceae", genus: "Mitragyna", species: "ciliata", nativeRange: "West and Central Africa", partsUsed: "The stem bark, leaves and twigs" },
  sources: {
    stephanie: {
      title: "Anxiolytic-like properties of Hallea ciliata in mice",
      author: "Stephanie NKJ, Gisele NN, Clarisse MOF, et al.",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2016-07-03",
      doi: "10.21010/ajtcam.v13i4.1",
      pmid: "28852713",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5566132/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    laryea: {
      title: "Antimalarial Efficacy and Toxicological Assessment of Extracts of Some Ghanaian Medicinal Plants",
      author: "Laryea MK, Borquaye LS",
      journal: "Journal of Parasitology Research",
      publicationDate: "2019-08-01",
      doi: "10.1155/2019/1630405",
      pmid: "31467688",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6699259/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bidie: {
      title: "Influence of Mitragyna ciliata (MYTA) on the microsomal activity of ATPase Na+/K+ dependent extract on a rabbit heart",
      author: "Bidie AD, Koffi E, N'Guessan JD, Djaman AJ, Guede-Guina F",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2008-04-10",
      doi: "10.4314/ajtcam.v5i3.31286",
      pmid: "20161951",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2816550/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Mitragyna ciliata", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Cameroon a stem bark decoction is used for anxiety, fever, convulsions in children and malaria. In Ghana the leaves and twigs are used for fever.",
      source: "stephanie",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a stem bark decoction reduced anxious behavior and stress-induced fever.",
      source: "stephanie",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, its extract slowed malaria parasites and was only weakly toxic to mammal cells.",
      source: "laryea",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Its extract has a digitalis-like effect on the heart in animal tests, blocking the same heart enzyme that digoxin does. This could affect heart rhythm and interact with heart medicines.",
      source: "bidie",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "It's in the same genus as kratom (Mitragyna speciosa), but no studies were found showing it has kratom's effects. No human safety studies were found.",
      source: "stephanie",
    },
  ],
  symptoms: [
    { slug: "anxiety", notes: "A Cameroonian remedy for anxiety; reduced anxious behavior in mice. Not tested in people." },
    { slug: "fever", notes: "Used for fever and malaria in Cameroon and Ghana. Not tested in people." },
  ],
});
