import { run } from "./lib/populate-herb";

// Bridelia Micrantha (Bridelia micrantha), from a 2017 review (Maroyi), a 2012
// mouse seizure study (Ngo Bum et al.) and a 2024 mouse malaria study (Kevin et
// al.). Family per GBIF.

run({
  name: "Bridelia Micrantha",
  profile: { family: "Phyllanthaceae", genus: "Bridelia", species: "micrantha", nativeRange: "Tropical and southern Africa", partsUsed: "The bark, leaves and roots" },
  sources: {
    maroyi: {
      title: "Ethnopharmacology and Therapeutic Value of Bridelia micrantha (Hochst.) Baill. in Tropical Africa: A Comprehensive Review",
      author: "Maroyi A",
      journal: "Molecules",
      publicationDate: "2017-09-08",
      doi: "10.3390/molecules22091493",
      pmid: "28885590",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6151536/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ngobum: {
      title: "Decoctions of Bridelia micrantha and Croton macrostachyus may have anticonvulsant and sedative effects",
      author: "Ngo Bum E, Ngah E, Ngo Mune RM, et al.",
      journal: "Epilepsy & Behavior",
      publicationDate: "2012-07-01",
      doi: "10.1016/j.yebeh.2012.03.028",
      pmid: "22583623",
      url: "https://doi.org/10.1016/j.yebeh.2012.03.028",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kevin: {
      title: "Antimalarial Efficacy of Ethanol Extract of Bridelia micrantha Stem Bark against Plasmodium berghei-Infected Mice",
      author: "Kevin TDA, Cedric Y, Nadia NAC, et al.",
      journal: "Journal of Parasitology Research",
      publicationDate: "2024-03-25",
      doi: "10.1155/2024/8821019",
      pmid: "38566916",
      url: "https://doi.org/10.1155/2024/8821019",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Used as medicine in over half the African countries where it grows, for 54 recorded purposes. The most agreed-on uses are burns, wounds, sore eyes, constipation, stomach ulcers, cough, headache, joint pain, dysentery, diarrhea, malaria, tapeworm and sexually transmitted infections, and to treat livestock.",
      source: "maroyi",
    },
    {
      category: "TRADITIONAL",
      summary: "In Cameroon it's used to treat epilepsy.",
      source: "ngobum",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a decoction protected 80 to 100% of animals from several kinds of seizures and had a calming effect.",
      source: "ngobum",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice with malaria, a bark extract suppressed the parasite by up to 79%, close to chloroquine.",
      source: "kevin",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "maroyi",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A widely agreed traditional remedy for burns and wounds. Not tested in people." },
    { slug: "diarrhea", notes: "Traditionally used for diarrhea and dysentery. Not tested in people." },
  ],
});
