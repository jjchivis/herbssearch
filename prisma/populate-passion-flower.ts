import { run } from "./lib/populate-herb";

// Passion flower (Passiflora incarnata), from verified sources: NCCIH (2025) and
// the EMA/HMPC public summary (2016) and community herbal monograph. Family per
// GBIF / Catalogue of Life.

run({
  name: "Passion Flower",
  profile: {
    family: "Passifloraceae",
    genus: "Passiflora",
    species: "incarnata",
    nativeRange: "Native to the southeastern United States and Central and South America",
    partsUsed: "The above-ground parts (herb)",
  },
  sources: {
    nccih: {
      title: "Passionflower: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/passionflower",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaSummary: {
      title: "Passion flower (Passiflora incarnata L., herba): summary of the HMPC conclusions (EMA/275240/2014)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-09-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/passion-flower-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Passiflora incarnata L., herba (EMA/HMPC/669740/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2014-03-25",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-passiflora-incarnata-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Passionflower", type: "COMMON_NAME" },
    { name: "Maypop", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Brought to Europe by Spanish explorers in the 1500s and used in folk medicine; recognized today as a traditional medicine for mild stress and sleep.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In the 16th century, Spanish explorers learned of passion flower's traditional use as a calming herb in South America and brought it to Europe, where it became part of folk medicine. Today it is promoted for anxiety, sleep problems, stress, ADHD and pain.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes passion flower as a traditional herbal medicine for relieving mild symptoms of mental stress and to help sleep, in adults and teens over 12.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A small amount of research suggests passion flower taken by mouth might ease anxiety, including anxiety before surgery or dental work, but the findings aren't definite. It may increase total sleep time in adults with insomnia, though results for falling and staying asleep are mixed. There isn't enough evidence for ADHD, heart failure, menopause symptoms, fibromyalgia or stress.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency found the clinical studies of passion flower too small and too poorly designed to draw firm conclusions.",
      source: "emaSummary",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Passion flower may cause drowsiness, dizziness and confusion.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description:
        "It's likely safe in the amounts used to flavor food. As a tea it may be safe for up to 7 nights, and as an extract for up to 8 weeks. Its safety on the skin isn't known.",
      source: "nccih",
    },
    {
      category: "SURGERY",
      description: "Stop using passion flower at least 2 weeks before surgery, because it may interact with anesthesia.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Don't use passion flower during pregnancy: it may cause contractions of the womb. Little is known about its safety while breastfeeding.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description: "Passion flower medicines aren't recommended for children under 12. See a doctor if symptoms last more than 2 weeks or get worse.",
      source: "emaMonograph",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Talk with your healthcare provider before using passion flower with any medicines.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "occasional-sleeplessness",
      notes: "Recognized in Europe as a traditional medicine to help sleep. Research suggests it may increase total sleep time, with mixed results otherwise.",
    },
    { slug: "anxiety", notes: "A small amount of research suggests it may ease anxiety, including before surgery, but results aren't definite." },
    { slug: "stress", notes: "Recognized in Europe as a traditional medicine for mild symptoms of mental stress." },
  ],
});
