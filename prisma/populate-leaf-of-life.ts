import { run } from "./lib/populate-herb";

// Leaf of Life (Bryophyllum pinnatum, also Kalanchoe pinnata), from a review of
// Jamaican medicinal plants (Lowe et al. 2021), Vandebroek & Picking's book on
// popular medicinal plants in Jamaica (2020), a 2024 review including its
// toxicity (Sharma et al.), a 2023 review and case series on period pain
// (Zurfluh et al.) and a 2023 trial for night-time urination (Mirzayeva et al.).

run({
  name: "Leaf of Life",
  profile: {
    family: "Crassulaceae",
    genus: "Bryophyllum",
    species: "pinnatum",
    partsUsed: "The leaves, often as a tea or pressed juice",
  },
  sources: {
    lowe: {
      title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds",
      author: "Lowe H, Steele B, Bryant J, Fouad E, Toyang N, Ngwa W",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2021-01-01",
      doi: "10.3390/molecules26030607",
      pmid: "33503834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vandebroek: {
      title: "Popular Medicinal Plants in Portland and Kingston, Jamaica",
      author: "Vandebroek I, Picking D",
      organization: "Springer (Advances in Economic Botany)",
      publicationDate: "2020-01-01",
      doi: "10.1007/978-3-030-48927-4",
      url: "https://doi.org/10.1007/978-3-030-48927-4",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sharma: {
      title: "Bryophyllum pinnatum (Lam.) Oken: unravelling therapeutic potential and navigating toxicity",
      author: "Sharma G, Jangra A, Sihag S, Chaturvedi S, Yadav S, Chhokar V",
      journal: "Physiology and Molecular Biology of Plants",
      organization: "Physiology and Molecular Biology of Plants",
      publicationDate: "2024-09-11",
      doi: "10.1007/s12298-024-01509-7",
      pmid: "39310702",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11413295/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zurfluh: {
      title: "Repurposing of Bryophyllum pinnatum for dysmenorrhea treatment: a systematic scoping review and case series",
      author: "Zurfluh L, Spinelli MG, Betschart C, Simões-Wüst AP",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2023-12-01",
      doi: "10.3389/fphar.2023.1292919",
      pmid: "38130407",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10735689/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    mirzayeva: {
      title: "Bryophyllum pinnatum and Improvement of Nocturia and Sleep Quality in Women: A Multicentre, Nonrandomised Prospective Trial",
      author: "Mirzayeva N, Forst S, Passweg D, Geissbühler V, Simões-Wüst AP, Betschart C",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2023-02-07",
      doi: "10.1155/2023/2115335",
      pmid: "36798727",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9928503/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Kalanchoe pinnata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Bryophyllum", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "One of Jamaica's most popular bush medicines, used by at least 20% of people for colds and flu.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, leaf of life is one of the plants used most often for colds and flu. In surveys, 20% or more of people named it for these infections.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A book based on interviews with more than 100 people in Portland and Kingston, Jamaica, includes leaf of life among the 25 most popular medicinal plants in those communities.",
      source: "vandebroek",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 review reported that, in lab and animal studies, it may help dissolve kidney stones and stop them forming, and may help type 2 diabetes. It also showed effects on the kidneys, liver, nerves, immune system, bacteria, parasites and cancer cells. The authors say its full medical potential and safety are still unclear.",
      source: "sharma",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 3-week study without a comparison group, 49 women with an overactive bladder who got up at night to urinate took tablets made from leaf of life juice. Night-time trips to the toilet fell from about 3 to about 2, and sleep improved. No serious side effects were reported.\n\nTechnical detail: Bryophyllum 50% chewable tablets, 350 mg, 2 tablets in the evening and 2 at bedtime; nocturia 3.2 ± 1.4 to 2.3 ± 1.3; improvements in ICIQ-OAB, PSQI and Epworth scores.",
      source: "mirzayeva",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review found lab and animal studies showing it may ease pain and inflammation and relax the womb's muscle, but no clinical trials for period pain. In a small case series, 5 women with painful periods took a leaf of life product used in Swiss obstetrics; all reported less pain, and 4 used fewer painkillers.",
      source: "zurfluh",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Leaf of life contains bufadienolides, natural compounds that can be toxic. Researchers say more work is needed to understand these compounds and make sure it's safe to use.",
      source: "sharma",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "One of the plants used most often in Jamaica for colds and flu." },
    { slug: "seasonal-immune-support", notes: "One of the plants used most often in Jamaica for colds and flu." },
    { slug: "kidney-stones", notes: "Lab and animal studies suggest it may help dissolve kidney stones. It hasn't been tested for this in people." },
    { slug: "occasional-sleeplessness", notes: "In a small study, tablets made from the leaf juice reduced night-time urination and improved sleep in women with an overactive bladder." },
    { slug: "menstrual-discomfort", notes: "In a small case series, 5 women with painful periods reported less pain. There are no clinical trials yet." },
  ],
});
