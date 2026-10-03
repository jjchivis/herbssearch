import { run } from "./lib/populate-herb";

// Eleuthera (Croton eluteria, cascarilla bark), from King's American
// Dispensatory (1898) and the US list of food flavorings generally recognised
// as safe (21 CFR 182.20). No modern studies in people were found.

run({
  name: "Eleuthera",
  profile: {
    family: "Euphorbiaceae",
    genus: "Croton",
    species: "eluteria",
    nativeRange: "The West Indies, especially the Bahamas, where it is named after the island of Eleuthera",
    partsUsed: "The bark, which is warm, aromatic and very bitter",
  },
  sources: {
    kings: {
      title: "King's American Dispensatory: Cascarilla (U.S.P.)",
      author: "Felter HW, Lloyd JU",
      organization: "Ohio Valley Co. (hosted by Henriette's Herbal Homepage)",
      publicationDate: "1898-01-01",
      url: "https://henriettes-herb.com/eclectic/kings/croton-elut.html",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    cfr: {
      title: "21 CFR 182.20: Essential oils, oleoresins (solvent-free), and natural extractives (including distillates)",
      organization: "US Food and Drug Administration (Code of Federal Regulations)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-182/subpart-A/section-182.20",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Cascarilla", type: "COMMON_NAME" },
    { name: "Eleuthera Bark", type: "COMMON_NAME" },
    { name: "Sweet-wood Tree", type: "COMMON_NAME" },
    { name: "Cascarilla-bark Tree", type: "COMMON_NAME" },
    { name: "Clutia eluteria", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "western-herbalism", notes: "Listed in the US Pharmacopoeia and used by 19th-century American doctors as a bitter tonic for indigestion, diarrhea and vomiting." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Doctors in the 1800s used cascarilla bark as a bitter tonic and stimulant for:\n- Indigestion and gas\n- Long-lasting diarrhea\n- Weakness and recovery after illness\n- Vomiting\nIt was also given to prevent the nausea caused by cinchona, a bark used against malaria. It was taken as a powder, tincture or tea.",
      source: "kings",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "A 19th-century medical text warned that cascarilla can cause unpleasant symptoms if used too freely.",
      source: "kings",
    },
    {
      category: "DOSAGE",
      description:
        "In the US, cascarilla bark extracts and oils are listed as generally recognised as safe for use in food, for example as flavorings. This doesn't cover larger medicinal doses.\n\nTechnical detail: 21 CFR 182.20 lists \"Cascarilla bark (Croton eluteria Benn.)\". Historical medicinal doses: powder 20–40 grains; tincture 1–4 fluid drachms; infusion 1–4 fluid ounces.",
      source: "cfr",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Used by 19th-century doctors as a bitter tonic for indigestion and gas. Not tested in modern studies." },
    { slug: "diarrhea", notes: "Used by 19th-century doctors for long-lasting diarrhea. Not tested in modern studies." },
    { slug: "occasional-nausea", notes: "Used by 19th-century doctors for vomiting and to prevent nausea from other medicines. Not tested in modern studies." },
  ],
});
