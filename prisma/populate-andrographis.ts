import { run } from "./lib/populate-herb";

// Andrographis (Andrographis paniculata), from verified sources: Memorial Sloan
// Kettering's About Herbs entry (2021) and a lab study on skin cells that
// describes its traditional skin use (Xu et al. 2025). Family per GBIF /
// Catalogue of Life. No source covering pregnancy or breastfeeding was used, so
// none is stated.

run({
  name: "Andrographis",
  profile: {
    family: "Acanthaceae",
    genus: "Andrographis",
    species: "paniculata",
    nativeRange: "Common in much of Asia",
    partsUsed: "The above-ground parts",
  },
  sources: {
    mskcc: {
      title: "Andrographis",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2021-12-16",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/andrographis",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    xu: {
      title: "Exploring the Active Constituents of Andrographis paniculata in Protecting the Skin Barrier and the Synergistic Effects with Collagen XVII",
      author: "Xu H, Lan S, Lin S, Wang A, Luo Y, Wang J, Yang Z",
      journal: "Antioxidants",
      organization: "Antioxidants (Basel)",
      publicationDate: "2025-01-20",
      doi: "10.3390/antiox14010118",
      pmid: "39857452",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11763326/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Indian Echinacea", type: "COMMON_NAME" },
    { name: "Kalmegh", type: "TRADITIONAL_NAME" },
    { name: "Chuan Xin Lian", type: "TRADITIONAL_NAME" },
    { name: "Chiretta", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Known as chuan xin lian; used, often with other herbs, for infections and fevers." },
    { slug: "ayurveda", notes: "Known as kalmegh; used for infections and fevers." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Andrographis is a bitter plant used across Asia, often with other herbs, to treat infections and fevers. It is also used in folk medicine for snakebites.",
      source: "mskcc",
    },
    {
      category: "TRADITIONAL",
      summary: "Andrographis is mainly used to treat skin inflammation, wounds and infections.",
      source: "xu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on skin cells damaged by ultraviolet (UVB) light, andrographis extract and its main compound, andrographolide, helped the cells survive and reduced signs of damage and inflammation.\n\nTechnical detail: HaCaT keratinocytes and epidermal stem cells; lower ROS, IL-1β, IL-6 and CDKN1A; diterpene lactones identified by UPLC-Q-TOF-MS.",
      source: "xu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab studies, andrographis showed antibacterial, antioxidant and anti-cancer activity, and reduced inflammation.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Andrographis has mostly been studied for colds and flu. Alone or with other herbs, it may reduce how long cold and flu symptoms last and how bad they are, and reviews suggest it may reduce coughing. Small trials suggest possible benefits in ulcerative colitis and rheumatoid arthritis, but more research is needed. It hasn't been studied on the skin in people.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Andrographis can cause allergic reactions, including skin rash and, in some cases, severe allergic reactions (anaphylaxis). Some types of extract may carry a higher risk.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Other side effects include headache, tiredness, dizziness, nausea, vomiting, diarrhea, a changed sense of taste, and painful or swollen lymph nodes with very high doses. Kidney injury has been reported with andrographolide given into a vein.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Andrographis may interact with:\n- Blood pressure medicines (it may lower blood pressure further)\n- Blood thinners and anti-platelet medicines\n- Chemotherapy\n- The asthma medicine aminophylline\n- Many medicines broken down by the liver\nTalk with your doctor before using it if you take any of these.\n\nTechnical detail: CYP1A2, 2C9 and 3A4 inhibition and CYP1A1 induction in lab studies; UGT2B7 substrates.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "skin-irritation",
      notes: "Traditionally used for skin inflammation. In lab tests it protected skin cells from UV damage; it can also cause skin rash.",
    },
    { slug: "wounds-and-burns", notes: "Traditionally used for wounds and skin infections; not tested for this in people." },
  ],
});
