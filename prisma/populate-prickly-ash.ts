import { run } from "./lib/populate-herb";

// Prickly Ash (Zanthoxylum americanum, common or northern prickly ash), from the
// USDA NRCS Plant Guide, which summarises its Native American uses.

run({
  name: "Prickly Ash",
  profile: {
    family: "Rutaceae",
    genus: "Zanthoxylum",
    species: "americanum",
    nativeRange: "North America, along riverbanks and in moist woods, thickets and rocky hillsides",
    partsUsed: "The bark, root bark and berries",
  },
  sources: {
    usda: {
      title: "Plant Guide: Common Pricklyash, Zanthoxylum americanum P. Mill.",
      organization: "U.S. Department of Agriculture, Natural Resources Conservation Service, National Plant Data Center",
      url: "https://plants.usda.gov/DocumentLibrary/plantguide/pdf/pg_zaam.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Northern Prickly Ash", type: "COMMON_NAME" },
    { name: "Common Pricklyash", type: "COMMON_NAME" },
    { name: "Toothache Tree", type: "COMMON_NAME" },
    { name: "Xanthoxylum americanum", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Used by many tribes, including the Cherokee, Creek, Iroquois, Ojibwa and Potawatomi, for toothache, rheumatism, fevers, colds and coughs." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Prickly ash is a thorny shrub or small tree whose twigs smell of lemon peel. Many Native American tribes used it as medicine. It's also called the toothache tree, because the bark was smoked, chewed or packed around an aching tooth.",
      source: "usda",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Native American uses recorded by the US Department of Agriculture include:\n- Bark tea for back pain, cramps, lung problems, fevers, colds and coughs\n- A wash of the bark for itchy skin and swollen joints\n- Inner bark on the skin for rheumatism and sharp pains, or held in the throat for sore throats\n- Root bark for colic, rheumatism and gonorrhea\n- The berries for chest and throat illnesses, and in cough syrups\nThese are recorded uses, not tested treatments.",
      source: "usda",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "A strong decoction of the bark was taken by Native Americans to cause miscarriages.",
      source: "usda",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Native Americans used the bark for rheumatism and swollen joints. Not tested in trials." },
    { slug: "colds-and-congestion", notes: "Bark tea was a Native American remedy for colds, coughs and fever. Not tested in trials." },
  ],
});
