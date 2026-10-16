import { run } from "./lib/populate-herb";

// Devil's Claw (Harpagophytum procumbens and H. zeyheri root), from the European
// Medicines Agency's EU herbal monograph (2016) and a 2021 bibliographic review
// (Brendler).

run({
  name: "Devil's Claw",
  profile: {
    family: "Pedaliaceae",
    genus: "Harpagophytum",
    species: "procumbens",
    nativeRange: "Southern Africa, including Namibia",
    partsUsed: "The dried side roots (tubers), as tea, powder or extract",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Harpagophytum procumbens DC. and/or Harpagophytum zeyheri Decne., radix (EMA/HMPC/627057/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-07-12",
      url: "https://ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-harpagophytum-procumbens-dc/harpagophytum-zeyheri-decne-radix_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    brendler: {
      title: "From Bush Medicine to Modern Phytopharmaceutical: A Bibliographic Review of Devil's Claw (Harpagophytum spp.)",
      author: "Brendler T",
      journal: "Pharmaceuticals",
      publicationDate: "2021-07-27",
      doi: "10.3390/ph14080726",
      pmid: "34451822",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8398729/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Devils Claw", type: "COMMON_NAME" },
    { name: "Grapple Plant", type: "COMMON_NAME" },
    { name: "Harpagophytum", type: "COMMON_NAME" },
    { name: "Sengaparile", type: "REGIONAL_NAME", region: "Southern Africa (Tswana)" },
    { name: "Harpagophytum zeyheri", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "african-traditional-medicine", notes: "Used by peoples of southern Africa for digestion, pain, fever, childbirth and as a tonic; the powder was put on wounds." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The first written record of devil's claw use, from Namibia in 1907, describes how a Herero man, Samuel Kariko, used it for cough, diarrhea, constipation and sexually transmitted diseases. Later accounts describe teas of the root for digestion, childbirth, pain, fever, diabetes, infections and as a tonic, and the dried powder as a wound dressing.",
      source: "brendler",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises devil's claw root as a traditional herbal medicine, based on long use, for:\n- Relief of minor joint pain (see a doctor if it lasts more than 4 weeks)\n- Mild digestive problems such as bloating and wind, and temporary loss of appetite (see a doctor if they last more than 2 weeks)\nIt's for adults only.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Devil's claw has been studied in more than 50 human studies, mainly for osteoarthritis and low back pain. A 2021 review found that randomised, placebo-controlled trials, though of variable quality, suggest it helps and is generally safe, with mostly mild stomach side effects in trials lasting up to a year.",
      source: "brendler",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Don't use devil's claw if you have an active stomach or duodenal ulcer. People with gallstones should ask a doctor first. Joint pain with swelling, redness or fever should be checked by a doctor. It hasn't been shown to be safe for under-18s.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Its safety in pregnancy and breastfeeding hasn't been established, so it isn't recommended then.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Reported side effects include diarrhea, nausea, vomiting and stomach pain, headache and dizziness, and allergic reactions such as rash, hives and facial swelling.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "A traditional EU herbal medicine for minor joint pain; trials of variable quality in osteoarthritis and back pain suggest it helps." },
    { slug: "bloating", notes: "A traditional EU herbal medicine for mild bloating and wind." },
    { slug: "loss-of-appetite", notes: "A traditional EU herbal medicine for temporary loss of appetite." },
  ],
});
