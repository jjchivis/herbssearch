import { run } from "./lib/populate-herb";

// Elderberry (Sambucus nigra, European elder), from verified sources: NCCIH
// (2024) on the berries and the EU herbal monograph, Revision 1 (EMA/HMPC, 2018)
// on elder flower. Family per GBIF / Catalogue of Life. Elderflower lab studies
// (Koval et al. 2026, Polak et al. 2026), a study of processed elderberry products
// (Senica et al. 2016) and LactMed were added after tracing the claims in a
// user-supplied article (scienceinsights.org) back to their primary sources.

run({
  name: "Elderberry",
  profile: {
    family: "Viburnaceae",
    genus: "Sambucus",
    species: "nigra",
    partsUsed: "The berries (cooked) and the flowers",
  },
  sources: {
    nccih: {
      title: "Elderberry: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/european-elder",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "European Union herbal monograph on Sambucus nigra L., flos, Revision 1 (EMA/HMPC/611512/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-27",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-sambucus-nigra-l-flos-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    koval: {
      title: "From Elderflower to Bioactive Extracts: Phytochemical Characterization and Anti-Inflammatory Activity",
      author: "Koval M, Dresler S, Kowalik S, et al.",
      journal: "Molecules",
      publicationDate: "2026-02-05",
      doi: "10.3390/molecules31030561",
      pmid: "41683541",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12899531/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    polak: {
      title: "Elderberry and Linden Flowers Ethanol-Water Extracts: Extraction Type Effect, Analysis and Biological Activity Determination",
      author: "Polak B, Jaglińska K, Boćkowska A, et al.",
      journal: "Molecules",
      publicationDate: "2026-02-25",
      doi: "10.3390/molecules31050764",
      pmid: "41828765",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12986051/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    senica: {
      title: "Processed elderberry (Sambucus nigra L.) products: A beneficial or harmful food alternative?",
      author: "Senica M, Stampar F, Veberic R, Mikulic-Petkovsek M",
      journal: "LWT - Food Science and Technology",
      publicationDate: "2016-10-01",
      doi: "10.1016/j.lwt.2016.04.056",
      url: "https://doi.org/10.1016/j.lwt.2016.04.056",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lactmed: {
      title: "Elderberry. Drugs and Lactation Database (LactMed)",
      organization: "National Institute of Child Health and Human Development (NIH)",
      publicationDate: "2025-04-15",
      pmid: "30000895",
      url: "https://pubmed.ncbi.nlm.nih.gov/30000895/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "European Elder", type: "COMMON_NAME" },
    { name: "Black Elderberry", type: "COMMON_NAME" },
    { name: "Elder Flower", type: "COMMON_NAME" },
    { name: "Elderflower", type: "COMMON_NAME" },
    { name: "Sambucus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Berries used for colds and flu; elder flower recognized in Europe as a traditional medicine for early cold symptoms." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Elderberry has been used in folk medicine for colds and flu, and is sold as a supplement for these and other upper respiratory infections.",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes elder flower as a traditional herbal medicine to relieve early symptoms of a common cold, in adults and teens over 12. It is taken as a tea or liquid preparation.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Only a small number of studies have looked at elderberry for colds, flu and other upper respiratory infections. One meta-analysis found black elderberry supplements eased upper respiratory symptoms in randomized trials, but the evidence overall is preliminary. There isn't enough evidence to know whether it helps COVID-19 symptoms, and US regulators have taken action against companies making unsupported COVID-19 claims.",
      source: "nccih",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on skin cells, elderflower extracts made with alcohol calmed an inflammation signal, an effect linked mainly to naringenin, one of their flavonoids. The flowers are rich in rutin and chlorogenic acid. These results haven't been tested in people.\n\nTechnical detail: inhibition of TNFα-induced NF-κB activation in HaCaT keratinocytes; best extraction yielded rutin 4.87% and chlorogenic acid 8.22%.",
      source: "koval",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, elderflower extracts weren't toxic to several kinds of human and animal cells.",
      source: "polak",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Raw or unripe elderberries, and other parts of the elder such as the leaves and stems, contain poisonous substances that produce cyanide. They can cause nausea, vomiting and severe diarrhea. Cooking destroys this toxin.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description: "Elder flower medicines aren't recommended for children under 12. See a doctor if symptoms last more than a week or get worse, or if you get shortness of breath, fever or colored phlegm.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Talk with your healthcare provider before using elderberry with medicines; some herbs and medicines interact in harmful ways.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Little is known about whether elderberry is safe for health purposes during pregnancy or breastfeeding.",
      source: "nccih",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Heat lowers the cyanide-producing substances in elderberries. In elderberry products, levels fell by 44% in juice, 80% in tea and 96% in liqueur and spread compared with unprocessed berries. Heating also lowered the berries' beneficial antioxidant compounds.",
      source: "senica",
    },
    {
      category: "BREASTFEEDING",
      description:
        "There's no information on whether elderberry passes into breast milk or is safe for nursing mothers and babies. It has been used in Türkiye to increase breast milk, but this hasn't been tested in trials. Allergic reactions to elderberry products are rare.",
      source: "lactmed",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Traditionally used for colds and flu; a meta-analysis found it eased upper respiratory symptoms, though evidence is preliminary." },
    { slug: "colds-and-congestion", notes: "Elder flower is recognized in Europe for early cold symptoms." },
  ],
});
