import { run } from "./lib/populate-herb";

// Cramp Bark (Viburnum opulus, guelder rose), from a 2020 review of its
// phytochemistry and biological effects (Kajszczak et al.).

run({
  name: "Cramp Bark",
  profile: {
    family: "Viburnaceae",
    genus: "Viburnum",
    species: "opulus",
    partsUsed: "The bark; the red berries are also eaten and made into juice",
  },
  sources: {
    kajszczak: {
      title: "Viburnum opulus L.—A Review of Phytochemistry and Biological Effects",
      author: "Kajszczak D, Zakłos-Szyda M, Podsędek A",
      journal: "Nutrients",
      publicationDate: "2020-11-05",
      doi: "10.3390/nu12113398",
      pmid: "33167421",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7694363/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Crampbark", type: "COMMON_NAME" },
    { name: "Guelder Rose", type: "COMMON_NAME" },
    { name: "European Cranberrybush", type: "COMMON_NAME" },
    { name: "Snowball Tree", type: "COMMON_NAME" },
    { name: "Water Elder", type: "COMMON_NAME" },
    { name: "Gilaburu", type: "REGIONAL_NAME", region: "Turkey" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Used for coughs, colds, rheumatic aches, ulcers, and stomach and kidney problems; the bark for stomach or uterine bleeding and haemorrhoids." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cramp bark, also called guelder rose, is traditionally used for coughs, colds, tuberculosis, rheumatic aches, ulcers, and stomach and kidney problems. The bark is used for bleeding from the stomach or uterus and for haemorrhoids.",
      source: "kajszczak",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Its sour red berries are cooked into jams, cordials and pies in Russia and Ukraine. In Turkey, the fermented juice (gilaburu) is a traditional drink, also used for liver disease, diabetes and high blood pressure.",
      source: "kajszczak",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, an extract of the berries increased urination and lowered oxalate, the main substance in kidney stones. A berry extract also relaxed blood vessels in lab tests. Lab studies of different parts of the plant report effects against microbes, inflammation, diabetes and cancer cells. These haven't been tested in people.",
      source: "kajszczak",
    },
  ],
  symptoms: [
    { slug: "kidney-stones", notes: "A berry extract lowered stone-forming oxalate in rats. Not tested in people." },
    { slug: "cough", notes: "A traditional remedy for coughs and colds. Not tested in trials." },
  ],
});
