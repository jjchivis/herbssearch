import { run } from "./lib/populate-herb";

// Cranberry (Vaccinium macrocarpon), from the EMA herbal monograph on cranberry
// fruit (2022), NCCIH (2024) and the 2023 Cochrane review of cranberries for
// preventing urinary tract infections (Williams et al.). Family per GBIF.

const EMA = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run({
  name: "Cranberry",
  profile: {
    family: "Ericaceae",
    genus: "Vaccinium",
    species: "macrocarpon",
    nativeRange: "Wet habitats in the northeastern and north-central parts of North America",
    partsUsed: "The fruit",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Vaccinium macrocarpon Aiton, fructus",
      organization: EMA,
      publicationDate: "2022-11-23",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-vaccinium-macrocarpon-aiton-fructus_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    nccih: {
      title: "Cranberry: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/cranberry",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Cranberries for preventing urinary tract infections",
      author: "Williams G, Stothart CI, Hahn D, et al.",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2023-11-10",
      doi: "10.1002/14651858.CD001321.pub7",
      pmid: "37947276",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10636779/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "American Cranberry", type: "COMMON_NAME" },
    { name: "Large Cranberry", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans and later European settlers used cranberry for dyes, food and medicine. The fruit and leaves were thought to help bladder, stomach, blood and liver problems, wounds, diabetes and scurvy. Today it's mainly promoted to prevent urinary tract infections (UTIs).",
      source: "nccih",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes cranberry juice as a traditional herbal medicine for adult women, to ease symptoms of mild repeated bladder infections and to help prevent them, after a doctor has ruled out serious conditions. This rests on long use, not on proof from clinical trials.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Cranberries contain proanthocyanidins (PACs), compounds that stop some E. coli bacteria from sticking to the bladder wall. This is thought to be how cranberry may help prevent UTIs. Processing cranberries into tablets or capsules can lower their PAC content.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 Cochrane review of 50 trials with 8,857 people found that cranberry products probably lower the risk of UTIs with symptoms by about 30%. They probably helped women with repeated UTIs, children, and people at risk because of a medical procedure. There may be little or no benefit in older people in care homes, pregnant women, or adults whose bladder doesn't empty fully because of nerve problems.\n\nTechnical detail: overall RR 0.70 (95% CI 0.58 to 0.84), moderate certainty; women with recurrent UTI RR 0.74; children RR 0.46; intervention-related susceptibility RR 0.47; institutionalized elderly RR 0.93; pregnancy RR 1.06; neuromuscular bladder dysfunction RR 0.97.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Cranberry isn't recommended for treating a UTI you already have. Since 2020, the US Food and Drug Administration has let makers say there is \"limited\" evidence that certain amounts of cranberry supplements taken daily may lower the risk of repeated UTIs in healthy women.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't use cranberry products with the blood thinner warfarin, because they may strengthen its effect. Avoid them with tacrolimus too: cranberry juice lowered tacrolimus levels in a kidney transplant patient.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Cranberry medicines aren't recommended for men, children or teens under 18, or pregnant women, whose urinary symptoms need medical care. People with kidney problems and repeated UTIs need medical supervision.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "If you think you have a UTI, see a health care provider for diagnosis and treatment. Don't use cranberry products instead of a proven treatment.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description:
        "Cranberry concentrate is high in oxalate, which may raise the risk of urinary stones in people who've had them before.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Nausea, diarrhea, indigestion, hives and rash have been reported.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Cranberry taken by mouth is generally thought to be safe, but very large amounts can cause an upset stomach and diarrhea, especially in young children.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "Cranberry seems safe in the amounts found in food during pregnancy and breastfeeding, but there isn't enough evidence for larger amounts. The European Medicines Agency doesn't recommend cranberry medicines at these times.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "urinary-tract-infections",
      notes: "A 2023 Cochrane review found cranberry products probably lower the risk of repeated UTIs in women, children and after procedures. It isn't a treatment for an existing UTI.",
    },
  ],
  preparations: [
    { slug: "extract", notes: "The European Medicines Agency's monograph covers juice pressed from the fruit, taken by mouth.", source: "ema" },
    { slug: "capsule", notes: "Cranberry is also sold as tablets and capsules, though processing can lower the amount of its active compounds.", source: "nccih" },
  ],
});
