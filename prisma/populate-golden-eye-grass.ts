import { run } from "./lib/populate-herb";

// Golden Eye Grass (Curculigo orchioides, kali musli, xian mao), from a 2010
// review (Chauhan et al.; abstract only), a 2025 study of its root extract
// (Mahmud et al.) and a 2026 study of the raw and wine-processed root (Pan et al.;
// abstract only).

run({
  name: "Golden Eye Grass",
  profile: {
    family: "Hypoxidaceae",
    genus: "Curculigo",
    species: "orchioides",
    nativeRange: "India",
    partsUsed: "The underground stem (rhizome) and root, used raw or processed with yellow rice wine",
  },
  sources: {
    chauhan: {
      title: "Curculigo orchioides: the black gold with numerous health benefits",
      author: "Chauhan NS, Sharma V, Thakur M, Dixit VK",
      journal: "Journal of Chinese Integrative Medicine",
      publicationDate: "2010-07-01",
      doi: "10.3736/jcim20100703",
      pmid: "20619136",
      url: "https://pubmed.ncbi.nlm.nih.gov/20619136/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mahmud: {
      title: "GCMS profiling of bioactive phytocompounds from Curculigo orchiodes Gaertn. root extract and evaluation of antioxidant, and antidiabetic activities: A computational drug development approach",
      author: "Mahmud I, Saifullah MK, Morshed MN, et al.",
      journal: "PLOS One",
      publicationDate: "2025-11-05",
      doi: "10.1371/journal.pone.0335403",
      pmid: "41191622",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12588482/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pan: {
      title: "Spectrum-effect relationship and network pharmacology reveal key anti-rheumatoid arthritis and attenuated toxicity components of processed curculigo rhizome",
      author: "Pan MH, Liu SF, Yu JL, Ai YJ, Li F",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2026-07-27",
      doi: "10.1016/j.jep.2026.122244",
      pmid: "42508543",
      url: "https://pubmed.ncbi.nlm.nih.gov/42508543/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Kali Musli", type: "TRADITIONAL_NAME" },
    { name: "Black Musli", type: "COMMON_NAME" },
    { name: "Xian Mao", type: "TRADITIONAL_NAME" },
    { name: "Talmuli", type: "REGIONAL_NAME", region: "Bangladesh" },
    { name: "Curculigo", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Called kali musli; a rasayana (rejuvenating) herb valued as a tonic and aphrodisiac." },
    { slug: "traditional-chinese-medicine", notes: "Called xian mao; the rhizome is used as a tonic for vitality, the liver and kidneys, and for rheumatic conditions." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In India, golden eye grass is known as kali musli. In Ayurveda it's a rasayana, or rejuvenating herb, valued as a tonic that helps the body cope with stress and as an aphrodisiac. It's an ingredient in many Ayurvedic preparations and is also used in Chinese and Japanese (Kampo) herbal medicine. The plant is endangered.",
      source: "chauhan",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine the rhizome is used as a tonic to keep up vitality and to nourish the liver and kidneys. In Ayurveda it's used for:\n- Jaundice and asthma\n- Urinary, bladder and kidney infections\n- Skin illnesses\n- Piles, diarrhea and colic\n- Gonorrhea and sexual problems\nBoth traditions value it as an aphrodisiac.",
      source: "mahmud",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Chinese medicine has used it for centuries for rheumatic conditions and to \"tonify kidney yang\", a Chinese medicine idea about strengthening the body's warming energy. It's traditionally processed with yellow rice wine, which is believed to make it work better and lower its toxicity.",
      source: "pan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 study, a root extract showed antioxidant activity in the lab and lowered blood sugar by about half in diabetic mice. This hasn't been tested in people.\n\nTechnical detail: blood glucose fell 47.28% at 100 mg/kg and 52.11% at 200 mg/kg in alloxan-induced diabetic mice.",
      source: "mahmud",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2026 study in mice with arthritis, both the raw and the wine-processed root reduced paw swelling and joint inflammation. This hasn't been tested in people.",
      source: "pan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In a mouse study, the raw root showed more potential to harm the kidneys than the root processed with rice wine.",
      source: "pan",
    },
  ],
  symptoms: [
    { slug: "sexual-health", notes: "Valued as an aphrodisiac in Ayurveda and Chinese medicine. Not tested in trials." },
    { slug: "joint-discomfort", notes: "Used in Chinese medicine for rheumatic conditions, and reduced arthritis in mice. Not tested in people." },
    { slug: "high-blood-sugar", notes: "A root extract lowered blood sugar in diabetic mice. Not tested in people." },
  ],
});
