import { run } from "./lib/populate-herb";

// Henna (Lawsonia inermis), from the FDA fact sheet on temporary tattoos, henna
// and black henna, a 2026 systematic review of human studies (Chilmeran et al.,
// abstract only), a 2026 systematic review of allergy to pure henna (Ben Yahia et
// al., abstract only) and a 2025 case of henna-triggered hemolysis in a child
// with G6PD deficiency (Dike et al.). Added: a 2024 review (Batiha et al.) and
// studies it cites: an ICU pressure sore trial (Hekmatpou et al. 2018), a mouse
// birth defect study (Jafarzadeh et al. 2015), a kidney injury case (Khine 2017),
// a lead test of henna samples (Jallad 2008) and a rat study (Ali et al. 1995).
// Family per GBIF.

run({
  name: "Henna",
  profile: { family: "Lythraceae", genus: "Lawsonia", species: "inermis", nativeRange: "North Africa, the Middle East and South Asia", partsUsed: "The leaves" },
  sources: {
    fda: {
      title: "Temporary Tattoos, Henna/Mehndi, and \"Black Henna\": Fact Sheet",
      organization: "US Food and Drug Administration",
      url: "https://www.fda.gov/cosmetics/cosmetic-products/temporary-tattoos-hennamehndi-and-black-henna-fact-sheet",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    chilmeran: {
      title: "Clinical Efficacy and Safety of Lawsonia inermis (Henna): A Systematic Review of Human Clinical Studies",
      author: "Chilmeran Z, Mahdi A, Hussain A, Sharafeldin AB, Fredericks S",
      journal: "Complementary Therapies in Medicine",
      publicationDate: "2026-10-31",
      doi: "10.1016/j.ctim.2026.103470",
      pmid: "42966605",
      url: "https://doi.org/10.1016/j.ctim.2026.103470",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    benyahia: {
      title: "Allergic Contact Dermatitis to Pure Henna: A Systematic Review",
      author: "Ben Yahia M, Korbi M, Belhadjali H, Salah NB, Youssef M, Zili J",
      journal: "Contact Dermatitis",
      publicationDate: "2026-07-31",
      doi: "10.1111/cod.70227",
      pmid: "42535430",
      url: "https://doi.org/10.1111/cod.70227",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    dike: {
      title: "Henna-Induced Intravascular Hemolysis in a Glucose-6-Phosphate Dehydrogenase-Deficient Ghanaian Female Child with Full Defect",
      author: "Dike NO, Blankson ES, Segnitome S",
      journal: "International Medical Case Reports Journal",
      publicationDate: "2025-08-14",
      doi: "10.2147/IMCRJ.S534544",
      pmid: "40831552",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12360392/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    batiha: {
      title: "Therapeutic potential of Lawsonia inermis Linn: a comprehensive overview",
      author: "Batiha GE, Teibo JO, Shaheen HM, et al.",
      journal: "Naunyn-Schmiedeberg's Archives of Pharmacology",
      publicationDate: "2024-06-01",
      doi: "10.1007/s00210-023-02735-8",
      pmid: "38010396",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11111528/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hekmatpou: {
      title: "Henna (Lawsonia inermis) as an Inexpensive Method to Prevent Decubitus Ulcers in Critical Care Units: A Randomized Clinical Trial",
      author: "Hekmatpou D, Ahmadian F, Eghbali M, Farsaei S",
      journal: "Journal of Evidence-Based Integrative Medicine",
      publicationDate: "2018-05-14",
      doi: "10.1177/2515690X18772807",
      pmid: "29756474",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5954567/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jafarzadeh: {
      title: "Antioxidant Activity and Teratogenicity Evaluation of Lawsonia Inermis in BALB/c Mice",
      author: "Jafarzadeh L, Seifi N, Shahinfard N, et al.",
      journal: "Journal of Clinical and Diagnostic Research",
      publicationDate: "2015-05-01",
      doi: "10.7860/JCDR/2015/12290.5911",
      pmid: "26155492",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4484084/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    khine: {
      title: "Acute Kidney Injury following Ingestion of Henna Leaf Extract: A Case Report from Myanmar",
      author: "Khine YY",
      journal: "Blood Purification",
      publicationDate: "2017-09-05",
      doi: "10.1159/000479618",
      pmid: "28869953",
      url: "https://doi.org/10.1159/000479618",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jallad: {
      title: "Lead exposure from the use of Lawsonia inermis (henna) in temporary paint-on-tattooing and hair dying",
      author: "Jallad KN, Espada-Jallad C",
      journal: "Science of the Total Environment",
      publicationDate: "2008-07-01",
      doi: "10.1016/j.scitotenv.2008.02.055",
      pmid: "18407319",
      url: "https://doi.org/10.1016/j.scitotenv.2008.02.055",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ali1995: {
      title: "Anti-inflammatory, antipyretic, and analgesic effects of Lawsonia inermis L. (henna) in rats",
      author: "Ali BH, Bashir AK, Tanira MO",
      journal: "Pharmacology",
      publicationDate: "1995-12-01",
      doi: "10.1159/000139347",
      pmid: "8966192",
      url: "https://doi.org/10.1159/000139347",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Mehndi", type: "COMMON_NAME" }],
  constituents: [{ name: "Lawsone", slug: "lawsone", type: "naphthoquinone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Henna is a plant dye used for centuries on hair, skin and nails, including the body art known as mehndi, in Africa and Asia.",
      source: "dike",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of 24 human studies found some results favoring henna for various conditions, but the evidence was low or very low quality and doesn't show it's reliably effective or safe. It shouldn't replace standard care.",
      source: "chilmeran",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In traditional medicine, especially Ayurveda, the leaves are used on wounds, ulcers, boils and scabies, and for headache, hair loss and jaundice. The bark has been used for jaundice and liver problems, and the flowers for sleeplessness.",
      source: "batiha",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 80 intensive care patients, henna applied to the lower back along with standard care led to fewer pressure sores (1 patient versus 6).",
      source: "hekmatpou",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a leaf extract and its main compound, lawsone, reduced swelling, pain and fever.",
      source: "ali1995",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies suggest extracts may fight bacteria and fungi, help wounds heal, protect the liver and lower blood sugar. Most of these haven't been tested in people.",
      source: "batiha",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "In the US, henna is approved only as a hair dye, not for use on the skin. \"Black henna\" usually contains a hair dye chemical, p-phenylenediamine (PPD), that can cause dangerous skin reactions and scarring, and make you allergic to hair dyes.",
      source: "fda",
    },
    {
      category: "ALLERGY",
      description: "Even pure henna can cause allergic skin reactions, from a local rash to an immediate severe reaction, in both adults and children.",
      source: "benyahia",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Henna can trigger the breakdown of red blood cells (hemolysis) in people with G6PD deficiency, an inherited enzyme disorder. An 8-year-old girl in Ghana had severe hemolysis after henna was put on her skin.",
      source: "dike",
    },
    {
      category: "PREGNANCY",
      description:
        "In pregnant mice, an injected leaf extract caused birth defects, including missing skull bones, and smaller embryos. It's traditionally described as able to cause miscarriage.",
      source: "jafarzadeh",
    },
    {
      category: "TOXICITY",
      description:
        "A man with G6PD deficiency in Myanmar developed severe kidney injury needing dialysis after drinking boiled henna leaves. He recovered fully.",
      source: "khine",
    },
    {
      category: "CONTAMINATION",
      description:
        "Tests of 12 commercial and traditional henna samples found low levels of lead. Repeated use over time, especially by children, may still be a concern.",
      source: "jallad",
    },
  ],
});
