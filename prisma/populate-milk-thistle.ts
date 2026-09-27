import { run } from "./lib/populate-herb";

// Milk thistle (Silybum marianum), from verified sources: NCCIH (2025), the
// EMA/HMPC public summary (2018) and a Cochrane review for alcohol-related and
// viral liver disease (Rambaldi et al. 2007). Family per GBIF / Catalogue of Life.

run({
  name: "Milk Thistle",
  profile: {
    family: "Asteraceae",
    genus: "Silybum",
    species: "marianum",
    nativeRange: "Native to Europe; brought to North America by early colonists",
    partsUsed: "The fruit",
  },
  sources: {
    nccih: {
      title: "Milk Thistle: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/milk-thistle",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "Milkthistle fruit (Silybum marianum (L.) Gaertn., fructus): summary of the HMPC conclusions (EMA/415131/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/milkthistle-fruit-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Milk thistle for alcoholic and/or hepatitis B or C virus liver diseases",
      author: "Rambaldi A, Jacobs BP, Gluud C",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2007-10-17",
      doi: "10.1002/14651858.CD003620.pub3",
      pmid: "17943794",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8724782/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Carduus marianus", type: "SCIENTIFIC_SYNONYM" },
    { name: "Mary Thistle", type: "COMMON_NAME" },
    { name: "Holy Thistle", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Silymarin", slug: "silymarin", type: "mixture of plant compounds" }],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in Europe as a traditional herbal medicine for indigestion and to support liver function, based on long-standing use.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Milk thistle has historically been used for liver problems and to increase breast milk.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes milk thistle fruit as a traditional herbal medicine for adults. It can be used to relieve indigestion and a feeling of fullness, and to support liver function after a doctor has ruled out serious conditions. This rests on at least 30 years of safe use, not on proof from clinical trials.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency reviewed several studies in people with liver problems. They suggested milk thistle may improve liver function and symptoms. No firm conclusions could be drawn, because the studies were poorly designed, small, and used different doses and lengths of treatment.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2007 Cochrane review looked at 18 trials with 1,088 people with alcohol-related liver disease or hepatitis B or C. Compared with placebo or no treatment, milk thistle didn't significantly reduce deaths, liver complications or liver damage seen in biopsies. Fewer people died of liver causes when all trials were combined, but not in the better-quality trials. Most trials were of low quality, and the reviewers concluded that the benefits of milk thistle are questionable.\n\nTechnical detail: all-cause mortality RR 0.78 (95% CI 0.53 to 1.15); complications RR 0.95 (0.83 to 1.09); liver-related mortality RR 0.50 (0.29 to 0.88) in all trials, RR 0.57 (0.28 to 1.19) in high-quality trials; adverse events RR 0.83 (0.46 to 1.50).",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Trials of milk thistle for alcohol-related liver disease, hepatitis B and C, non-alcoholic fatty liver disease and liver damage from chemotherapy have had conflicting or too limited results. Two NIH-funded studies, one in hepatitis C and one in a more serious form of fatty liver disease (NASH), found no benefit from the milk thistle extract silymarin.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research suggests milk thistle extracts may help control blood sugar in people with type 2 diabetes. Most of these studies were done in Middle Eastern countries, so it's unclear whether the results apply to other people. It's also unclear whether milk thistle affects breast milk production.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Milk thistle taken by mouth appears to be well tolerated. The most common side effects are digestive: bloating, nausea and gas.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Other reported side effects include dry mouth, upset stomach, diarrhea and headache. Allergic reactions can also happen, including skin rashes, itching, hives, asthma and sudden severe reactions. How often these happen isn't known.",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description:
        "Milk thistle may cause allergic reactions, especially in people allergic to related plants such as ragweed, chrysanthemum, marigold and daisy.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Milk thistle medicines are for adults only. Don't use them if you're allergic to milk thistle or other daisy-family plants. See a doctor if symptoms last longer than 2 weeks or get worse.",
      source: "ema",
    },
    {
      category: "CONTAMINATION",
      description:
        "Some milk thistle supplements have contained much more or less silymarin than the label says. Others have been contaminated with pesticides, germs or mold toxins.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "If you take any medicine, talk with your health care provider before using milk thistle. Some herbs and medicines interact in harmful ways.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Little is known about whether milk thistle is safe during pregnancy or breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "liver-disease",
      notes: "Traditionally used for liver problems. A Cochrane review found no clear benefit in alcohol-related liver disease or hepatitis B or C.",
    },
    {
      slug: "fatty-liver",
      notes: "Studies in fatty liver disease have had conflicting results, and an NIH-funded trial in a more serious form (NASH) found no benefit.",
    },
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for indigestion and a feeling of fullness." },
    { slug: "breast-milk-supply", notes: "Traditionally used to increase breast milk. It's unclear whether it works." },
    {
      slug: "high-blood-sugar",
      notes: "Research suggests extracts may help control blood sugar in type 2 diabetes, though most studies were done in the Middle East.",
    },
  ],
});
