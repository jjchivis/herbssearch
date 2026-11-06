import { run } from "./lib/populate-herb";

// Candle Bush (Senna alata), from a 2020 review of its traditional uses
// (Oladeji et al.), a 2019 randomized trial after cancer surgery (Phutsisen et al.)
// and a 2020 study of its leaf decoction for a fungal skin infection in the
// Philippines (Eusebio-Alpapara et al.). Family per GBIF.

run({
  name: "Candle Bush",
  profile: { family: "Fabaceae", genus: "Senna", species: "alata", nativeRange: "Tropical Americas; now widespread in the tropics", partsUsed: "The leaves, and also flowers, stems and roots" },
  sources: {
    oladeji: {
      title: "Ethnobotanical Description and Biological Activities of Senna alata",
      author: "Oladeji OS, Adelowo FE, Oluyori AP, Bankole DT",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2020-02-20",
      doi: "10.1155/2020/2580259",
      pmid: "32148534",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7054808/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    phutsisen: {
      title: "Effects of Cassia alata Linn on bowel function recovery following surgery for gynecological cancer: A randomized controlled trial",
      author: "Phutsisen J, Kietpeerakool C, Jampathong N, et al.",
      journal: "Complementary Therapies in Medicine",
      publicationDate: "2019-12-01",
      doi: "10.1016/j.ctim.2019.102222",
      pmid: "31779993",
      url: "https://doi.org/10.1016/j.ctim.2019.102222",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    eusebio: {
      title: "Senna (Cassia) alata (Linn.) Roxb. leaf decoction as a treatment for tinea imbricata in an indigenous tribe in Southern Philippines",
      author: "Eusebio-Alpapara KMV, Dofitas BL, Balita-Crisostomo CLA, et al.",
      journal: "Mycoses",
      publicationDate: "2020-11-01",
      doi: "10.1111/myc.13159",
      pmid: "32779266",
      url: "https://doi.org/10.1111/myc.13159",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cassia alata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Ringworm Bush", type: "COMMON_NAME" },
    { name: "Craw-Craw Plant", type: "COMMON_NAME" },
    { name: "Acapulco", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "A tropical shrub named for its upright yellow flower spikes. It's widely used for ringworm and other fungal skin infections, scabies, eczema and herpes, and the leaves are used as a laxative for constipation.",
      source: "oladeji",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 90 women after cancer surgery, drinking candle bush tea got their bowels working again sooner: gas passed about 8 hours earlier and the first bowel movement about 20 hours earlier than with warm water.",
      source: "phutsisen",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In 20 people in the Philippines with a stubborn fungal skin infection (tinea imbricata), a homemade leaf decoction applied for 4 weeks eased itching in 95% and cleared the fungus in 40%. There was no comparison group.",
      source: "eusebio",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No side effects were reported in the small skin study. Larger safety studies haven't been done.",
      source: "eusebio",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "A traditional laxative; the tea helped bowels restart sooner after surgery in a trial." },
    { slug: "fungal-skin-infections", notes: "A leaf decoction eased a fungal skin infection in a small uncontrolled study." },
  ],
});
