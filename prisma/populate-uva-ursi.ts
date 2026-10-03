import { run } from "./lib/populate-herb";

// Uva Ursi (Arctostaphylos uva-ursi, bearberry), from the European Medicines
// Agency's summary of its herbal monograph on bearberry leaf (2018).

run({
  name: "Uva Ursi",
  profile: {
    family: "Ericaceae",
    genus: "Arctostaphylos",
    species: "uva-ursi",
    partsUsed: "The leaves, taken as a tea or in tablets or capsules",
  },
  sources: {
    ema: {
      title: "Uvae ursi folium (bearberry leaf): herbal medicinal product summary",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2018-04-10",
      url: "https://www.ema.europa.eu/en/medicines/herbal/uvae-ursi-folium",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Bearberry", type: "COMMON_NAME" },
    { name: "Bearberry Leaf", type: "COMMON_NAME" },
    { name: "Uva-ursi", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Bearberry leaf has been used in Europe for at least 30 years for mild bladder infections." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises bearberry leaf as a traditional herbal medicine for symptoms of mild, repeated infections of the lower urinary tract, such as burning when urinating or needing to urinate often, in adult women. This is based on its long use: at least 30 years, including 15 years in the European Union.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab studies, bearberry leaf preparations killed bacteria.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "There are no clinical studies of products containing only bearberry leaf. Its effect is considered plausible, but it hasn't been proven in trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Only for adult women. Don't use it if you have kidney problems. A doctor should first rule out more serious urinary conditions.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "Don't take it for more than 1 week. See a doctor if your symptoms last more than 4 days or get worse while you're taking it.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "It can cause nausea, vomiting and stomach discomfort.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "urinary-tract-infections",
      notes: "Recognised in Europe as a traditional remedy for mild, repeated bladder infections in adult women, for no more than 1 week.",
    },
  ],
});
