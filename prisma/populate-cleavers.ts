import { run } from "./lib/populate-herb";

// Cleavers (Galium aparine), from a 2024 lab study of its wound-healing,
// antimicrobial and antioxidant effects that reviews its traditional uses
// (Beirami et al.).

run({
  name: "Cleavers",
  profile: {
    family: "Rubiaceae",
    genus: "Galium",
    species: "aparine",
    partsUsed: "The whole above-ground plant, fresh juice or as an extract",
  },
  sources: {
    beirami: {
      title: "Bringing back Galium aparine L. from forgotten corners of traditional wound treatment procedures: an antimicrobial, antioxidant, and in-vitro wound healing assay along with HPTLC fingerprinting study",
      author: "Beirami AD, Akhtari N, Noroozi R, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2024-07-23",
      doi: "10.1186/s12906-024-04355-y",
      pmid: "39044256",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11267910/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Catchweed Bedstraw", type: "COMMON_NAME" },
    { name: "Goosegrass", type: "COMMON_NAME" },
    { name: "Galium", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cleavers is a fast-growing plant of the coffee family. Traditionally it's used to increase urination and relieve bloating, and also for:\n- Swollen lymph glands\n- Jaundice\n- Fever\n- High blood pressure\n- Wounds and skin injuries\nIn one folk recipe, the fresh juice is mixed with butter into an ointment for scalds, burns and swelling.",
      source: "beirami",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2024 lab study, a cleavers extract acted as an antioxidant, slowed the growth of the bacterium Staphylococcus aureus, and helped skin cells close a scratch \"wound\" faster, without harming the cells. This hasn't been tested on wounds in people.",
      source: "beirami",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A traditional wound and burn remedy; an extract helped skin cells close a wound in the lab. Not tested in people." },
    { slug: "bloating", notes: "Traditionally used to increase urination and relieve bloating. Not tested in trials." },
  ],
});
