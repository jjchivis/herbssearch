import { run } from "./lib/populate-herb";

// Couch Grass (Elymus repens, also Agropyron repens), from the European Medicines
// Agency herbal monograph (Revision 1, 2022) and a 2026 review of its chemistry and
// effects (Saparkhanovich et al.). Family per GBIF.

run({
  name: "Couch Grass",
  profile: { family: "Poaceae", genus: "Elymus", species: "repens", nativeRange: "Europe, Asia and North Africa; now a weed worldwide", partsUsed: "The rhizome (underground stem)" },
  sources: {
    ema: {
      title: "European Union herbal monograph on Agropyron repens (L.) P. Beauv., rhizoma (Revision 1)",
      organization: "European Medicines Agency (HMPC)",
      publicationDate: "2022-03-30",
      url: "https://www.ema.europa.eu/en/medicines/herbal/agropyri-repentis-rhizoma",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    sapark: {
      title: "Elymus repens (L.) Gould Phytochemistry Pharmacological Activities and Therapeutic Potential with Future Perspectives",
      author: "Saparkhanovich ZK, Asilbekovna SE, Ilyasovna TM, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-05-29",
      doi: "10.3390/ijms27114928",
      pmid: "42278456",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13256994/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Agropyron repens", type: "SCIENTIFIC_SYNONYM" },
    { name: "Couch Grass Rhizome", type: "COMMON_NAME" },
    { name: "Graminis rhizoma", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The European Medicines Agency recognizes couch grass rhizome, based on long-standing use, as a traditional herbal medicine to increase urine and flush the urinary tract, alongside other care for minor urinary complaints. It's taken as a tea, liquid extract or tincture, usually for 2 to 4 weeks.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary: "A 2026 review found some evidence it may help reduce kidney stones and their symptoms, but the studies are limited and not standardized.",
      source: "sapark",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Drink plenty of fluids while using it. It's not recommended for people told by a doctor to limit fluids, or for children under 12 (tea) or under 18 (extracts and tinctures).",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding because safety hasn't been established.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "See a doctor if you develop fever, painful urination, cramps or blood in the urine.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "urinary", notes: "Recognized by the European Medicines Agency as a traditional remedy to flush the urinary tract in minor urinary complaints." },
  ],
});
