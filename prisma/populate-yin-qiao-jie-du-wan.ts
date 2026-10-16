import { run } from "./lib/populate-herb";

// Qiang Li ("Strong") Yin Qiao Jie Du Wan, a Chinese patent medicine based on the
// classical formula Yin Qiao San (honeysuckle and forsythia powder), from a 2026
// review of anti-influenza formulas (Xiao et al.), a 2011 randomised trial in
// H1N1 influenza (Wang et al.; abstract only) and a 2014 Hong Kong Department of
// Health recall notice.

run({
  name: "Qiang Li Yin Qiao Jie Du Wan",
  profile: {
    family: "Caprifoliaceae (the honeysuckle family) for honeysuckle; Oleaceae (the olive family) for forsythia",
    genus: "Lonicera / Forsythia",
    species: "japonica / suspensa",
    partsUsed: "A multi-herb formula led by honeysuckle flowers (jin yin hua) and forsythia fruit (lian qiao), as pills or tablets",
  },
  sources: {
    xiao: {
      title: "Anti-influenza formula medicines based on warm disease theory of traditional Chinese medicine",
      author: "Xiao M, Huang T, Qin S, Zhang T, Li R, Zhao X, Lin L, Yang Z",
      journal: "Chinese Herbal Medicines",
      publicationDate: "2026-02-10",
      doi: "10.1016/j.chmed.2026.02.008",
      pmid: "41971581",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13069622/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Oseltamivir compared with the Chinese traditional therapy maxingshigan-yinqiaosan in the treatment of H1N1 influenza: a randomized trial",
      author: "Wang C, Cao B, Liu QQ, et al.",
      journal: "Annals of Internal Medicine",
      publicationDate: "2011-08-16",
      doi: "10.7326/0003-4819-155-4-201108160-00005",
      pmid: "21844547",
      url: "https://pubmed.ncbi.nlm.nih.gov/21844547/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hkdh: {
      title: "Recall of proprietary Chinese medicine tainted with Western drug (Strong Yin Qiao Jie Du Pian)",
      organization: "Department of Health, Government of the Hong Kong Special Administrative Region",
      publicationDate: "2014-01-20",
      url: "https://www.info.gov.hk/gia/general/201401/20/P201401200612.htm",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Yin Qiao Jie Du Wan", type: "TRADITIONAL_NAME" },
    { name: "Strong Yin Qiao Jie Du Pian", type: "COMMON_NAME" },
    { name: "Yin Qiao San", type: "TRADITIONAL_NAME" },
    { name: "Yinqiao Powder", type: "COMMON_NAME" },
    { name: "Yin Chiao", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Based on Yin Qiao San from the classic Analysis of Warm Diseases; used early in colds and flu to expel \"wind-heat\", for fever, sore throat and headache." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "This patent medicine is based on Yin Qiao San, a formula from the classic Chinese text Analysis of Warm Diseases. It's a \"cool\" medicine used early in a feverish illness to expel \"wind-heat\", and treats fever, sore throat, headache and mild thirst. Its lead herbs are honeysuckle flower (jin yin hua) and forsythia fruit (lian qiao).",
      source: "xiao",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab studies, honeysuckle and forsythia extracts acted against flu viruses. In flu-infected mice, Yin Qiao San protected the lungs and reduced inflammation.",
      source: "xiao",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2011 trial in 11 Chinese hospitals, 410 people aged 15 to 69 with mild H1N1 flu took the flu drug oseltamivir, a related 12-herb decoction (maxingshigan-yinqiaosan, which also contains ephedra), both, or nothing for 5 days. The decoction shortened the time to fever going away, as oseltamivir did. Participants knew which treatment they got, and the decoction isn't the same product as this pill.",
      source: "wang",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "In 2014, Hong Kong's Department of Health ordered a recall of Strong Yin Qiao Jie Du Pian, and two products with the same formula, after finding undeclared paracetamol in them. The department warned that inappropriate use of paracetamol can damage the liver and kidneys.",
      source: "hkdh",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "A traditional Chinese remedy for the early stage of colds and flu; a related decoction shortened fever in a flu trial." },
    { slug: "sore-throat", notes: "Traditionally used for sore throat in early colds and flu. Not tested on its own in trials." },
    { slug: "fever", notes: "A related decoction shortened fever in people with mild H1N1 flu in an unblinded trial." },
  ],
});
