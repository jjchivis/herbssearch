import { run } from "./lib/populate-herb";

// Siamese cassia (Senna siamea, syn. Cassia siamea; khi lek), chosen by the site
// owner. Verified sources: a case series of hepatitis from barakol
// (Hongsirinirachorn et al. 2003), animal studies of barakol (Sukma et al. 2002;
// Deachapunya & Thongsaard 2009), a study noting its traditional uses (Bharti et
// al. 2025) and a study noting its use in Thai cooking (Sangkanu et al. 2025).
// Family per GBIF / Catalogue of Life. No clinical trials were found.

run({
  name: "Siamese Cassia",
  profile: {
    family: "Fabaceae",
    genus: "Senna",
    species: "siamea",
    partsUsed: "The leaves, pods and heartwood",
  },
  sources: {
    hongsirinirachorn: {
      title: "Acute hepatitis associated with Barakol",
      author: "Hongsirinirachorn M, Threeprasertsuk S, Chutaputti A",
      journal: "Journal of the Medical Association of Thailand",
      organization: "Journal of the Medical Association of Thailand",
      publicationDate: "2003-06-01",
      pmid: "12930029",
      url: "https://pubmed.ncbi.nlm.nih.gov/12930029/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sukma: {
      title: "CNS inhibitory effects of barakol, a constituent of Cassia siamia Lamk.",
      author: "Sukma M, Chaichantipyuth C, Murakami Y, Tohda M, Matsumoto K, Watanabe H",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2002-11-01",
      doi: "10.1016/s0378-8741(02)00206-4",
      pmid: "12413711",
      url: "https://pubmed.ncbi.nlm.nih.gov/12413711/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deachapunya: {
      title: "Behavioral effects of acute and chronic oral administration of barakol in rats",
      author: "Deachapunya C, Thongsaard W",
      journal: "Journal of the Medical Association of Thailand",
      organization: "Journal of the Medical Association of Thailand",
      publicationDate: "2009-06-01",
      pmid: "19702066",
      url: "https://pubmed.ncbi.nlm.nih.gov/19702066/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bharti: {
      title: "Cassia siamea-Derived Silver Nanoparticles: Synthesis and Their Impact on Male Fertility Through Biochemical and Histopathological Insights in Rats",
      author: "Bharti N, Yadav P, Choudhary SK, Dhaked RK, Mali PC",
      journal: "Biological Trace Element Research",
      organization: "Biological Trace Element Research",
      publicationDate: "2025-05-31",
      doi: "10.1007/s12011-025-04658-2",
      pmid: "40448812",
      url: "https://pubmed.ncbi.nlm.nih.gov/40448812/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sangkanu: {
      title: "Antidiabetic Potential of Senna siamea: α-Glucosidase Inhibition, Postprandial Blood Glucose Reduction, Toxicity Evaluation, and Molecular Docking",
      author: "Sangkanu S, Heemman A, Phoopha S, Pitakbut T, Udomuksorn W, Dej-Adisai S",
      journal: "Scientifica",
      organization: "Scientifica",
      publicationDate: "2025-01-23",
      doi: "10.1155/sci5/6650349",
      pmid: "39950148",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11824848/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cassia siamea", type: "SCIENTIFIC_SYNONYM" },
    { name: "Khi Lek", type: "REGIONAL_NAME", region: "Thailand" },
    { name: "Khi-lek", type: "REGIONAL_NAME", region: "Thailand" },
    { name: "Cassia", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Barakol", slug: "barakol", type: "chromone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Siamese cassia has traditionally been used for fever, skin diseases, high blood pressure, insomnia, diabetes and asthma.",
      source: "bharti",
    },
    {
      category: "TRADITIONAL",
      summary: "Siamese cassia is used in Thai cooking, and in traditional Thai remedies, including for diabetes.",
      source: "sangkanu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice and rats, barakol, the plant's main calming compound, reduced activity, made more animals fall asleep and made sleep last longer. It didn't reduce anxiety in standard animal tests.",
      source: "sukma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given barakol by mouth, once or daily for 30 days, it didn't reduce anxiety but had a calming effect, making them explore less.",
      source: "deachapunya",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Barakol from Siamese cassia has been sold in Thailand as a natural anti-anxiety product. No clinical trials of its effects in people were found.",
      source: "hongsirinirachorn",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In Thailand, 12 people developed hepatitis (liver inflammation) after taking barakol tablets for 3 to 180 days, most with loss of appetite and yellow skin or eyes. Liver damage wasn't linked to the dose. Two people who restarted it had liver problems again. Everyone recovered within 2 to 20 weeks of stopping.",
      source: "hongsirinirachorn",
    },
  ],
  symptoms: [
    { slug: "occasional-sleeplessness", notes: "Traditionally used for insomnia. Its compound barakol made animals sleepy, but it hasn't been tested in people." },
    {
      slug: "anxiety",
      notes: "Sold in Thailand as an anti-anxiety product, but animal tests found no anti-anxiety effect, and it has caused hepatitis.",
    },
    { slug: "liver-safety-warnings", notes: "Barakol tablets made from Siamese cassia caused hepatitis in 12 people in Thailand." },
  ],
});
