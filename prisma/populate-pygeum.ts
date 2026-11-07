import { run } from "./lib/populate-herb";

// Pygeum, the bark of the African prune tree (Prunus africana). Sources: the
// Cochrane review for enlarged prostate (Wilt et al. 2002) and a 2024 review of
// its traditional uses in Africa. Family per GBIF. No source covering
// medicine interactions was used, so none is stated.

run({
  name: "Pygeum",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "africana",
    partsUsed: "The bark, usually as an extract",
  },
  sources: {
    cochrane: {
      title: "Pygeum africanum for benign prostatic hyperplasia",
      author: "Wilt T, Ishani A, Mac Donald R, Rutks I, Stark G",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane",
      publicationDate: "2002-01-01",
      doi: "10.1002/14651858.CD001044",
      pmid: "11869585",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7032619/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    ndungu: {
      title:
        "A Comprehensive Review of Ethnomedicinal Uses, Phytochemistry, Pharmacology, and Toxicity of Prunus africana (Hook. F.) Kalkman from Africa",
      author: "Ndung'u JK, Nguta JM, Mapenay IM, Moriasi GA",
      journal: "Scientifica",
      publicationDate: "2024-04-16",
      doi: "10.1155/2024/8862996",
      pmid: "38654751",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11039028/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pygeum africanum", type: "SCIENTIFIC_SYNONYM" },
    { name: "African Prune", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "african-traditional-medicine",
      notes:
        "Used in traditional medicine across Africa for wounds, diabetes, malaria, chest pain and prostate problems.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional medicine across Africa, the tree has been used for:\n- wounds\n- diabetes\n- malaria\n- chest pain\n- enlarged prostate and prostate cancer",
      source: "ndungu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Studies of the tree's extracts have reported effects against inflammation, germs, male hormones and the growth of new blood vessels, as well as pain-relieving and astringent (tissue-tightening) effects.\n\nTechnical detail: reported activities include anti-inflammatory, antimicrobial, antiandrogenic, antiangiogenic, antioxidant, DPP-4 inhibitory and analgesic effects.",
      source: "ndungu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A Cochrane review of 18 trials in 1,562 men with an enlarged prostate found pygeum moderately improved urinary symptoms compared with placebo:\n- Men were about twice as likely to say their symptoms had improved.\n- They got up at night to urinate less often.\nThe studies were small and short, and used different doses and products.\n\nTechnical detail: Wilt et al. 2002, Cochrane CD001044; combined symptom and flow effect size −0.8 SD; men more than twice as likely to report improvement (RR 2.1); nocturia −19%, residual urine −24%, peak urine flow +23%; mean study length 64 days; no trials against standard BPH drugs.",
      source: "cochrane",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Side effects in trials were mild and about as common as with placebo.",
      source: "cochrane",
    },
  ],
  symptoms: [
    {
      slug: "enlarged-prostate",
      notes: "A Cochrane review found it moderately eased urinary symptoms, including getting up at night, in small short trials.",
    },
  ],
});
