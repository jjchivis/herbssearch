import { run } from "./lib/populate-herb";

// Shankhpushpi (Convolvulus pluricaulis, accepted name Convolvulus prostratus per
// GBIF), from a 2022 umbrella review (Sharma et al.) and a 2014 review (Agarwa et
// al.). Family per GBIF.

run({
  name: "Shankhpushpi",
  profile: { family: "Convolvulaceae", genus: "Convolvulus", species: "pluricaulis", partsUsed: "The whole plant" },
  sources: {
    sharma: {
      title: "Role of Shankhpushpi (Convolvulus pluricaulis) in neurological disorders: An umbrella review covering evidence from ethnopharmacology to clinical studies",
      author: "Sharma R, Singla RK, Banerjee S, et al.",
      journal: "Neuroscience and Biobehavioral Reviews",
      publicationDate: "2022-07-22",
      doi: "10.1016/j.neubiorev.2022.104795",
      pmid: "35878793",
      url: "https://doi.org/10.1016/j.neubiorev.2022.104795",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    agarwa: {
      title: "An update on Ayurvedic herb Convolvulus pluricaulis Choisy",
      author: "Agarwa P, Sharma B, Fatima A, Jain SK",
      journal: "Asian Pacific Journal of Tropical Biomedicine",
      publicationDate: "2014-03-01",
      doi: "10.1016/S2221-1691(14)60240-9",
      pmid: "25182446",
      url: "https://doi.org/10.1016/S2221-1691(14)60240-9",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Convolvulus prostratus", type: "SCIENTIFIC_SYNONYM" },
    { name: "Convolvulus microphyllus", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used in Ayurvedic formulas for chronic cough, sleeplessness, epilepsy and anxiety." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A morning-glory-like herb used in Ayurveda. It's in formulas for chronic cough, sleeplessness, epilepsy, hallucinations and anxiety, and it's long been used for liver and nervous system diseases.",
      source: "agarwa",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, it improved memory, eased anxiety, stress and depression-like behavior, calmed and sedated, eased pain and protected against seizures.",
      source: "sharma",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are few human safety studies.",
      source: "sharma",
    },
  ],
  symptoms: [
    { slug: "memory-and-thinking", notes: "Improved memory in animal studies; used in Ayurveda as a brain tonic." },
    { slug: "anxiety", notes: "Eased anxiety in animal studies; used in Ayurvedic formulas for anxiety." },
  ],
});
