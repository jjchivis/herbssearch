import { run } from "./lib/populate-herb";

// Rhodiola (Rhodiola rosea root and rhizome), from the European Medicines
// Agency's EU herbal monograph (Revision 1, 2024) and a 2022 systematic review of
// trials in exercise and sport (Lu et al.).

run({
  name: "Rhodiola Rosea",
  profile: {
    family: "Crassulaceae",
    genus: "Rhodiola",
    species: "rosea",
    partsUsed: "The underground stem (rhizome) and root, usually as a dry extract",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Rhodiola rosea L., rhizoma et radix, Final – Revision 1 (EMA/HMPC/24177/2023)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2024-03-20",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rhodiola-rosea-l-rhizoma-et-radix-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    lu: {
      title: "Effects of Rhodiola Rosea Supplementation on Exercise and Sport: A Systematic Review",
      author: "Lu Y, Deng B, Xu L, Liu H, Song Y, Lin F",
      journal: "Frontiers in Nutrition",
      publicationDate: "2022-04-07",
      doi: "10.3389/fnut.2022.856287",
      pmid: "35464040",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9021834/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Rhodiola", type: "COMMON_NAME" },
    { name: "Golden Root", type: "COMMON_NAME" },
    { name: "Roseroot", type: "COMMON_NAME" },
    { name: "Arctic Root", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "A traditional EU herbal medicine for relief of stress symptoms such as fatigue and exhaustion." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises rhodiola root as a traditional herbal medicine, based on long use rather than trials, for relief of stress symptoms such as tiredness and exhaustion.\n- The usual dose is 144 to 400 mg of extract a day, in 1 or 2 doses\n- See a doctor if symptoms last more than 2 weeks\nIt's for adults only.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 10 small trials, with 10 to 48 healthy adults each, looked at rhodiola and exercise. Most reported better athletic performance and endurance, and no obvious side effects. The trials were short (1 hour to 37 days), and the reviewers say larger, more rigorous trials are needed.",
      source: "lu",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Reported side effects include headache, nausea, stomach pain, diarrhea, and skin rash or itching. No clinically relevant drug interactions have been seen.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Its safety in pregnancy and breastfeeding hasn't been established, so it isn't recommended then. It isn't recommended for under-18s.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "fatigue", notes: "A traditional EU herbal medicine for stress-related tiredness and exhaustion." },
    { slug: "stress", notes: "A traditional EU herbal medicine for relief of stress symptoms; see a doctor if they last more than 2 weeks." },
  ],
});
