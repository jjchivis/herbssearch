import { run } from "./lib/populate-herb";

// Irish moss / sea moss (Chondrus crispus, a red seaweed), from NIH's LactMed entry
// on sea moss (2026) and the EFSA re-evaluation of carrageenan, the gel extracted
// from red seaweeds such as Irish moss (2018), and the 2013 genome study (Collén et al., PNAS).

run({
  name: "Irish Moss",
  profile: {
    family: "Gigartinaceae",
    genus: "Chondrus",
    species: "crispus",
    nativeRange: "Rocky shores of the northern Atlantic Ocean, between the high and low tide lines",
    partsUsed: "The whole seaweed, often made into a gel",
  },
  sources: {
    lactmed: {
      title: "Sea Moss. Drugs and Lactation Database (LactMed®)",
      organization: "National Institute of Child Health and Human Development (NIH)",
      publicationDate: "2026-02-15",
      pmid: "41730053",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK621050/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    efsa: {
      title: "Re-evaluation of carrageenan (E 407) and processed Eucheuma seaweed (E 407a) as food additives",
      author: "EFSA Panel on Food Additives and Nutrient Sources added to Food (ANS)",
      journal: "EFSA Journal",
      organization: "European Food Safety Authority",
      publicationDate: "2018-04-26",
      doi: "10.2903/j.efsa.2018.5238",
      pmid: "32625873",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7009739/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    collen: {
      title: "Genome structure and metabolic features in the red seaweed Chondrus crispus shed light on evolution of the Archaeplastida",
      author: "Collén J, Porcel B, Carré W, Ball SG, et al.",
      journal: "Proceedings of the National Academy of Sciences of the United States of America",
      publicationDate: "2013-03-15",
      doi: "10.1073/pnas.1221259110",
      pmid: "23503846",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3612618/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Sea Moss", type: "COMMON_NAME" },
    { name: "Chondrus crispus", type: "COMMON_NAME" },
    { name: "Carrageen Moss", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Irish moss, also sold as sea moss, is a red seaweed used as food and medicine, though no medicinal benefit has been proven. It contains carrageenan (a gel used as a food thickener), other carbohydrates and many minerals, including iodine.",
      source: "lactmed",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Europe's food safety agency reviewed carrageenan, the gel taken from red seaweeds. It isn't absorbed whole by the body, and animal studies at high doses found no harm, no cancer risk and no damage to genes. Because some data were missing, the agency kept its safe daily limit only as temporary while more research is done.\n\nTechnical detail: temporary group acceptable daily intake 75 mg/kg body weight per day for E 407 and E 407a; NOAEL up to 7,500 mg/kg bw per day in chronic rat studies.",
      source: "efsa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In 2013, scientists read Irish moss's full genetic code, finding about 9,600 genes. It's a small seaweed, up to 20 cm long, that grows on rocky North Atlantic shores. The study found the genes it uses to build carrageenan in its cell walls, and an unusually large set of genes for handling halogens, a group of elements in seawater that includes chlorine, bromine and iodine. This is basic biology research and says nothing about health effects.\n\nTechnical detail: 105-Mbp genome; ι- and κ-carrageenan in the gametophyte and λ-carrageenan in the sporophyte; galactose-6-sulfurylases and haloperoxidases.",
      source: "collen",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Sea moss can contain toxic heavy metals, such as arsenic, lead, cadmium and mercury, from the water it grew in. It also contains iodine, and the amount can be high.",
      source: "lactmed",
    },
    {
      category: "BREASTFEEDING",
      description:
        "Too much iodine from seaweed eaten by breastfeeding mothers has suppressed the thyroid in their babies. Avoid sea moss while breastfeeding unless its iodine and heavy metal levels are shown to be low enough to be safe.",
      source: "lactmed",
    },
  ],
});
