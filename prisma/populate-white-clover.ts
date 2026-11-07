import { run } from "./lib/populate-herb";

// White clover (Trifolium repens). Source: a 2026 lab and mouse study of its
// essential oil. Family per GBIF. No source describing a traditional medicinal
// use, or covering safety, was found, so none is stated.

run({
  name: "White Clover",
  profile: {
    family: "Fabaceae",
    genus: "Trifolium",
    species: "repens",
    partsUsed: "The essential oil has been studied in the lab",
  },
  sources: {
    alAyoubi: {
      title:
        "Advanced hybrid-green ultrasound-infrared-microwave Trifolium repens essential oil isolation with multi-target ethnomedicine bioactivity against neuropathy, inflammation and multidrug-resistant infection",
      author: "Al Ayoubi S, Abdelwahab I, Aboul-Ela M, El-Lakany A, Raafat K",
      journal: "Journal of Food and Drug Analysis",
      publicationDate: "2026-06-01",
      doi: "10.38212/2224-6614.3595",
      pmid: "42485523",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13390999/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In a 2026 study in diabetic mice, white clover essential oil and its main compound lowered blood sugar, eased nerve pain, reduced inflammation and improved the body's antioxidant defenses. The compound also delayed seizures, and the oil fought bacteria in the lab. This has not been tested in people.\n\nTechnical detail: main constituent pseudoionone (49.16%); alloxan-induced diabetic neuropathy model; down-regulated TNF-α and IL-6, up-regulated IL-10.",
      source: "alAyoubi",
    },
  ],
});
