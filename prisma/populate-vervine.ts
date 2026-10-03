import { run } from "./lib/populate-herb";

// Vervine (Stachytarpheta jamaicensis, Jamaica vervain), from a 2016 review of
// its traditional uses, pharmacology and toxicology (Liew & Yong, eCAM), the
// TRAMIL Caribbean entry (source of the Jamaican name) and a review of
// ethnomedicines in Trinidad and Tobago (Lans 2006).

run({
  name: "Vervine",
  profile: {
    family: "Verbenaceae",
    genus: "Stachytarpheta",
    species: "jamaicensis",
    partsUsed: "The leaves and stems, usually made into a tea. The leaves are also put on the skin.",
  },
  sources: {
    liew: {
      title: "Stachytarpheta jamaicensis (L.) Vahl: From Traditional Usage to Pharmacological Evidence",
      author: "Liew PM, Yong YK",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2016-01-26",
      doi: "10.1155/2016/7842340",
      pmid: "26925152",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4746381/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tramil: {
      title: "Stachytarpheta jamaicensis",
      organization: "TRAMIL (Traditional Medicine in the Islands)",
      url: "https://tramil.net/en/plant/stachytarpheta-jamaicensis",
      sourceType: "secondary",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    lans: {
      title: "Ethnomedicines used in Trinidad and Tobago for urinary problems and diabetes mellitus",
      author: "Lans CA",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      organization: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2006-10-13",
      doi: "10.1186/1746-4269-2-45",
      pmid: "17040567",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1624823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Vervain", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Blue Porterweed", type: "COMMON_NAME" },
    { name: "Brazilian Tea", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Called vervain in Jamaica and vervine in Antigua and Trinidad; used as a \"cooling\" remedy." },
    { slug: "african-traditional-medicine", notes: "Used by women in southern Nigeria for menstrual problems and after childbirth." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "It's called vervain in Jamaica and vervine in Antigua and Barbuda, among other Caribbean names.",
      source: "tramil",
    },
    {
      category: "TRADITIONAL",
      summary: "In Trinidad and Tobago, vervine leaves are used as a \"cooling\" remedy.",
      source: "lans",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Older people often use it as a \"cooling\" tea for the stomach, made from the leaves and stems. Traditional uses include:\n- Digestion: indigestion, acid reflux, ulcers and constipation\n- Breathing: asthma, colds, flu, bronchitis and cough\n- Allergies, and liver problems such as cirrhosis and hepatitis\n- Dysentery and worms (leaf juice)\n- Cleaning cuts, wounds and sores (leaves on the skin)\n- In southern Nigeria, menstrual problems, a tea after childbirth, and to increase breast milk",
      source: "liew",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2016 review reported that in lab and animal studies it fought bacteria and fungi, its main effects. Its main active compound is verbascoside. Other reported effects include protecting the liver in rats and improving blood fats in animals.",
      source: "liew",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, large amounts of the powdered leaf mostly caused no harm. One study found mild damage in the liver, kidneys, lungs and other organs. A water-based extract wasn't toxic even at very high single doses. The reviewers say long-term safety still needs study.\n\nTechnical detail: 25, 50 and 75 g of powdered leaves in feed; aqueous extract non-toxic up to 4 g/kg in Wistar rats; one study reported congestion, fatty change and necrosis in liver, blood vessels, kidney, lung and testis.",
      source: "liew",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "It isn't recommended during pregnancy, because it's thought to be able to cause miscarriage.",
      source: "liew",
    },
    {
      category: "CONTRAINDICATION",
      description: "It isn't recommended if you have low blood pressure, because it's thought to lower blood pressure.",
      source: "liew",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Traditionally used as a \"cooling\" tea for indigestion and acid reflux." },
    { slug: "constipation", notes: "Traditionally used for constipation." },
    { slug: "colds-and-congestion", notes: "Traditionally used for colds and flu." },
    { slug: "cough", notes: "Traditionally used for cough and bronchitis." },
    { slug: "asthma-and-wheezing", notes: "Traditionally used for asthma." },
    { slug: "wounds-and-burns", notes: "The leaves are traditionally used to clean cuts, wounds and sores." },
    { slug: "sibo-and-parasites", notes: "Leaf juice is traditionally used for worms." },
    { slug: "breast-milk-supply", notes: "Traditionally used in southern Nigeria to increase breast milk." },
    { slug: "pregnancy-and-childbirth", notes: "Not recommended during pregnancy; it's thought to be able to cause miscarriage." },
  ],
});
