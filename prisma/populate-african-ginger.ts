import { run } from "./lib/populate-herb";

// African Ginger (Siphonochilus aethiopicus), from a 2021 review (Adebayo et al.)
// and a 2011 asthma study in mice (Fouche et al.). Family per GBIF.

run({
  name: "African Ginger",
  profile: { family: "Zingiberaceae", genus: "Siphonochilus", species: "aethiopicus", nativeRange: "Sub-Saharan Africa", partsUsed: "The rhizome and roots" },
  sources: {
    adebayo: {
      title: "Ethnomedicinal uses, biological activities, phytochemistry and conservation of African ginger (Siphonochilus aethiopicus): A commercially important and endangered medicinal plant",
      author: "Adebayo SA, Amoo SO, Mokgehle SN, Aremu AO",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-02-10",
      doi: "10.1016/j.jep.2020.113459",
      pmid: "33039627",
      url: "https://doi.org/10.1016/j.jep.2020.113459",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fouche: {
      title: "Investigation of in vitro and in vivo anti-asthmatic properties of Siphonochilus aethiopicus",
      author: "Fouche G, Nieuwenhuizen N, Maharaj V, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2011-01-27",
      doi: "10.1016/j.jep.2010.11.014",
      pmid: "21075193",
      url: "https://doi.org/10.1016/j.jep.2010.11.014",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wild Ginger", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Used across Sub-Saharan Africa for colds, coughs, flu, pain, inflammation and malaria. In South Africa, traditional healers use it for chest wheezing, sinus problems and mild asthma.",
      source: "fouche",
    },
    {
      category: "TRADITIONAL",
      summary: "Its extract is sold in some commercial health products, and a patented extract was developed for asthma and allergies. Wild plants are critically endangered in South Africa from over-harvesting.",
      source: "adebayo",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice with allergic asthma, extracts reduced lung inflammation, though they didn't ease airway tightening.",
      source: "fouche",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found. Because wild plants are critically endangered, cultivated sources are preferred.",
      source: "adebayo",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "A traditional South African remedy for colds, flu and sinus problems. Not tested in people." },
    { slug: "asthma-and-wheezing", notes: "Used for mild asthma; reduced lung inflammation in mice. Not tested in people." },
  ],
});
