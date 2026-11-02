import { run } from "./lib/populate-herb";

// Emu Bush (Eremophila species), from a 2022 review of the genus (Cock et al.)
// and a 2022 paper on Eremophila research and First Peoples' knowledge
// (Semple et al.). The page covers the genus, as the card does. Family per
// GBIF.

run({
  name: "Emu Bush",
  profile: {
    family: "Scrophulariaceae",
    genus: "Eremophila",
    species: "spp.",
    nativeRange: "Arid and semi-arid Australia",
    partsUsed: "The leaves and twigs",
  },
  sources: {
    cock: {
      title: "Phytochemistry, Medicinal Properties, Bioactive Compounds, and Therapeutic Potential of the Genus Eremophila (Scrophulariaceae)",
      author: "Cock IE, Baghtchedjian L, Cordon ME, Dumont E",
      journal: "Molecules",
      publicationDate: "2022-11-10",
      doi: "10.3390/molecules27227734",
      pmid: "36431834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9697388/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    semple: {
      title: "Biodiscoveries within the Australian plant genus Eremophila based on international and interdisciplinary collaboration: results and perspectives on outstanding ethical dilemmas",
      author: "Semple SJ, Staerk D, Buirchell BJ, et al.",
      journal: "The Plant Journal",
      publicationDate: "2022-07-23",
      doi: "10.1111/tpj.15866",
      pmid: "35696314",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9543726/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Poverty Bush", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "There are about 200 Eremophila species across Australia's dry country, and many are traditional medicines of the First Australians. The name emu bush comes from the belief that emus eat the fruit.",
      source: "cock",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Leaf decoctions of several species were used as hot baths to treat wounds and skin infections, and as a body wash for scabies. Leaves and twigs were wrapped around the head for sinus problems and a blocked nose.",
      source: "cock",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Many First Australian groups drank Eremophila leaf decoctions for colds and flu, and used them for headaches and other aches and pains. Some species were also burned in smoking ceremonies.",
      source: "cock",
    },
    {
      category: "TRADITIONAL",
      summary: "Several Eremophila species hold great cultural significance to Australia's First Peoples.",
      source: "semple",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies have found that many species kill bacteria and fungi, largely due to compounds called terpenoids. Their effects in people haven't been studied.",
      source: "cock",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "There are about 200 species and their uses differ, so the traditional uses of one species don't apply to all of them. No human safety studies were found.",
      source: "cock",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Leaf decoctions were a widely used First Australian remedy for colds and flu. Not studied in people." },
    { slug: "wounds-and-burns", notes: "Leaf decoctions were used as hot baths for wounds and skin infections. Not studied in people." },
    { slug: "lice-and-scabies", notes: "Several species were used as a body wash for scabies. Not studied in people." },
  ],
});
