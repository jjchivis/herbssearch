import { run } from "./lib/populate-herb";

// Feverfew (Tanacetum parthenium), from the European Medicines Agency's summary
// of its herbal monograph on feverfew herb (2020) and NCCIH's fact sheet.

run({
  name: "Feverfew",
  profile: {
    family: "Asteraceae",
    genus: "Tanacetum",
    species: "parthenium",
    partsUsed: "The dried leaves and other above-ground parts, taken by mouth; some people chew the fresh leaves",
  },
  sources: {
    ema: {
      title: "Tanaceti parthenii herba (feverfew herb): herbal medicinal product summary",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2020-10-20",
      url: "https://www.ema.europa.eu/en/medicines/herbal/tanaceti-parthenii-herba",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    nccih: {
      title: "Feverfew: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      url: "https://www.nccih.nih.gov/health/feverfew",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Bachelor's Buttons", type: "COMMON_NAME" },
    { name: "Featherfew", type: "COMMON_NAME" },
    { name: "Chrysanthemum parthenium", type: "SCIENTIFIC_SYNONYM" },
    { name: "Matricaria parthenium", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy to help prevent migraines." },
    { slug: "western-herbalism", notes: "Historically used for fevers, headaches, period problems and many other complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Historically, people used feverfew for many complaints, including:\n- Fever\n- Breathing and digestive problems\n- Period problems and infertility\n- Kidney and liver disease\n- Ringing in the ears and earache\n- Anemia",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises feverfew as a traditional herbal medicine to help prevent migraines in adults, once a doctor has ruled out serious conditions. This is based on at least 30 years of use, not on clinical trials, which weren't strong enough to draw firm conclusions. It usually needs to be taken for 2 months to have an effect.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 review looked at 7 studies of feverfew for migraine, with 634 people in total. The results were inconsistent. Some studies suggest it may make migraines less frequent and ease pain, nausea, vomiting and sensitivity to light and noise, but overall the evidence is mixed.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "Don't take feverfew while pregnant, because it may affect contractions of the womb.",
      source: "nccih",
    },
    {
      category: "ALLERGY",
      description:
        "Don't use feverfew if you're allergic to it or to other plants in the daisy family (Asteraceae).",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description: "People who are sensitive to ragweed may have an allergic reaction to feverfew.",
      source: "nccih",
    },
    {
      category: "SURGERY",
      description: "Feverfew may slow blood clotting. Stop taking it at least 2 weeks before a planned surgery.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "No serious side effects have been reported. It can cause nausea, digestive problems and bloating, and chewing the fresh leaves can irritate the mouth.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description:
        "For adults only. See a doctor if migraines come back after 2 months of use, or if they get worse while you're taking it.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "headache",
      notes: "Recognised in Europe as a traditional remedy to help prevent migraines. Research results are mixed: some studies found fewer migraines, others didn't.",
    },
  ],
});
