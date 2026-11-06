import { run } from "./lib/populate-herb";

// Sickle Bush (Dichrostachys cinerea), from a 2013 Ayurvedic clinical trial for
// painful urination (Patel and Sharma), a 2019 Maasai malaria study (Kweyamba et
// al.), a 2022 rat arthritis study (Kiki et al.) and a 2011 liver study (Babu et
// al.). Family per GBIF.

run({
  name: "Sickle Bush",
  profile: { family: "Fabaceae", genus: "Dichrostachys", species: "cinerea", nativeRange: "Tropical Africa, South Asia and Australia", partsUsed: "The bark, roots, leaves and fruit" },
  sources: {
    patel: {
      title: "Clinical evaluation of Veerataru (Dichrostachys cinerea Linn.) in the management of Mootrakruchchhra (Dysuria)",
      author: "Patel BR, Sharma PP",
      journal: "Ayu",
      publicationDate: "2013-07-01",
      doi: "10.4103/0974-8520.123105",
      pmid: "24501517",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3902588/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kweyamba: {
      title: "In vitro and in vivo studies on anti-malarial activity of Commiphora africana and Dichrostachys cinerea used by the Maasai in Arusha region, Tanzania",
      author: "Kweyamba PA, Zofou D, Efange N, Assob JN, Kitau J, Nyindo M",
      journal: "Malaria Journal",
      publicationDate: "2019-04-04",
      doi: "10.1186/s12936-019-2752-8",
      pmid: "30947717",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6449979/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kiki: {
      title: "Polyphenols from Dichrostachys cinerea Fruits Anti-Inflammatory, Analgesic, and Antioxidant Capacity in Freund's Adjuvant-Induced Arthritic Rat Model",
      author: "Kiki GAA, Pop RM, Sabin O, et al.",
      journal: "Molecules",
      publicationDate: "2022-08-25",
      doi: "10.3390/molecules27175445",
      pmid: "36080212",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9457916/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    babu: {
      title: "Evaluation of acute toxicity and hepatoprotective activity of the methanolic extract of Dichrostachys cinerea (Wight and Arn.) leaves",
      author: "Babu PS, Krishna V, Maruthi KR, Shankarmurthy K, Babu RK",
      journal: "Pharmacognosy Research",
      publicationDate: "2011-01-01",
      doi: "10.4103/0974-8490.79114",
      pmid: "21731394",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3119270/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Veerataru", type: "REGIONAL_NAME", region: "India (Ayurveda)" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A thorny shrub with pink-and-yellow flower spikes. Called veerataru in Ayurveda, it's used for urinary problems; the Maasai of Tanzania use the stem bark for malaria.",
      source: "kweyamba",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In an Ayurvedic clinical study of painful urination, a decoction gave better symptom relief than the standard Ayurvedic remedy punarnava. The study was small and not blinded.",
      source: "patel",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice with malaria, a bark extract suppressed the parasite by about 53%.",
      source: "kweyamba",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with arthritis, fruit extracts eased pain and swelling and lowered inflammation markers.",
      source: "kiki",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a leaf extract protected the liver from damage.",
      source: "babu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "A leaf extract caused no deaths in mice even at very high doses.",
      source: "babu",
    },
    {
      category: "TOXICITY",
      description: "One whole-stem extract was toxic to cells in lab tests.",
      source: "kweyamba",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Fruit extracts eased arthritis in rats. Not tested in people." },
  ],
});
