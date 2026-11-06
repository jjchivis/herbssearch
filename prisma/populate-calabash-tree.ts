import { run } from "./lib/populate-herb";

// Calabash Tree (Crescentia cujete), from ethnobotanical studies in Cuba (Volpato
// et al. 2009), Colombia (Gómez-Estrada et al. 2011) and Mexico (Aguirre-Dugua et
// al. 2013), and a 1993 study of its compounds (Hetzel et al.). A 2021 review of
// this plant was retracted and isn't used. Family per GBIF.

run({
  name: "Calabash Tree",
  profile: { family: "Bignoniaceae", genus: "Crescentia", species: "cujete", nativeRange: "Tropical Americas", partsUsed: "The fruit pulp, and the hard shell as a container" },
  sources: {
    volpato: {
      title: "Uses of medicinal plants by Haitian immigrants and their descendants in the Province of Camagüey, Cuba",
      author: "Volpato G, Godínez D, Beyra A, Barreto A",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2009-05-18",
      doi: "10.1186/1746-4269-5-16",
      pmid: "19450279",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2690575/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gomez: {
      title: "Folk medicine in the northern coast of Colombia: an overview",
      author: "Gómez-Estrada H, Díaz-Castillo F, Franco-Ospina L, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2011-09-22",
      doi: "10.1186/1746-4269-7-27",
      pmid: "21939522",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3224600/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    aguirre: {
      title: "Phenotypic differentiation between wild and domesticated varieties of Crescentia cujete L. and culturally relevant uses of their fruits as bowls in the Yucatan Peninsula, Mexico",
      author: "Aguirre-Dugua X, Pérez-Negrón E, Casas A",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2013-11-14",
      doi: "10.1186/1746-4269-9-76",
      pmid: "24229087",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3842825/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hetzel: {
      title: "Bioactive furanonaphthoquinones from Crescentia cujete",
      author: "Hetzel CE, Gunatilaka AA, Glass TE, et al.",
      journal: "Journal of Natural Products",
      publicationDate: "1993-09-01",
      doi: "10.1021/np50099a008",
      pmid: "8254347",
      url: "https://doi.org/10.1021/np50099a008",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Totumo", type: "REGIONAL_NAME", region: "Colombia" },
    { name: "Güira", type: "REGIONAL_NAME", region: "Cuba" },
    { name: "Calabash", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A tropical American tree with large, hard, gourd-like fruit. The Maya of the Yucatan have long grown it for the shells, which are made into bowls for daily and ceremonial use.",
      source: "aguirre",
    },
    {
      category: "TRADITIONAL",
      summary: "On Colombia's northern coast a decoction of the fruit pulp, called totumo, is the most trusted remedy for flu.",
      source: "gomez",
    },
    {
      category: "TRADITIONAL",
      summary: "Haitian communities in Cuba cook the fruit pulp with honey, sugar and rum into a syrup (miel de güira) for asthma, chest colds and stomach pain.",
      source: "volpato",
    },
    {
      category: "PRECLINICAL",
      summary: "The fruit contains compounds called furanonaphthoquinones that were active in lab tests on yeast.",
      source: "hetzel",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "gomez",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "A Colombian and Cuban folk remedy for flu and chest colds. Not tested in people." },
  ],
});
