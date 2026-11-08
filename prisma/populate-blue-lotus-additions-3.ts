import { run } from "./lib/populate-herb";

// Adds a 2024 lab study of blue lotus flower extract on leukemia cells
// (Chatterjee et al., Asian Pac J Cancer Prev), shared by the site owner.

run({
  name: "Blue Lotus",
  sources: {
    chatterjee: {
      title: "The Apoptotic Property of Nymphaea Caerulea Flower Extract on Acute Myeloid Leukaemia Cell Line, THP-1",
      author: "Chatterjee D, Singh B, Paira K, Das S",
      journal: "Asian Pacific Journal of Cancer Prevention",
      publicationDate: "2024-01-01",
      doi: "10.31557/APJCP.2024.25.1.123",
      pmid: "38285776",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10911745/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In a 2024 lab study, blue lotus flower extract killed leukemia cells (a type called acute myeloid leukemia) grown in a dish and switched on genes involved in cell self-destruction. The weaker (50% alcohol) extract left normal kidney cells mostly unharmed, but the stronger (70% alcohol) extract also killed many of them. The alcohol used to make the extracts killed many leukemia cells on its own, which makes the results hard to judge. Doses weren't given as concentrations. Blue lotus has not been tested against cancer in animals or people.\n\nTechnical detail: 50% and 70% hydro-ethanolic whole-flower extracts on THP-1 cells, with HEK 293 as normal-cell control; caspase-3, caspase-9 and Fas expression measured by RT-PCR; the 50% extract lowered IL-6, IL-8, IL-1β, TGF-β1 and TNF-α expression and raised IL-10; effective dose reported as about 40 µL of crude extract.",
      source: "chatterjee",
    },
  ],
});
