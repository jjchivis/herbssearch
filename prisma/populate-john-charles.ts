import { run } from "./lib/populate-herb";

// John Charles (Hyptis verticillata, now also called Condea verticillata),
// from a review of its traditional uses, chemistry, pharmacology and
// toxicology by researchers at the University of the West Indies, Jamaica
// (Picking et al. 2013, J Ethnopharmacol). No clinical trials had been done.

run({
  name: "John Charles",
  profile: {
    family: "Lamiaceae",
    genus: "Hyptis",
    species: "verticillata",
    nativeRange: "Originally from Central America; now grows from Florida to Colombia and across the Caribbean",
  },
  sources: {
    picking: {
      title: "Hyptis verticillata Jacq: a review of its traditional uses, phytochemistry, pharmacology and toxicology",
      author: "Picking D, Delgoda R, Boulogne I, Mitchell S",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2013-02-09",
      doi: "10.1016/j.jep.2013.01.039",
      pmid: "23403358",
      url: "https://doi.org/10.1016/j.jep.2013.01.039",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Condea verticillata", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "Widely used across the Caribbean for breathing, digestive, women's health, skin and muscle problems.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "John Charles has a long history of use, going back to the ancient Maya and Aztec cultures. It is used widely in the Americas but not elsewhere. Traditional uses include:\n- Taken by mouth for breathing problems, digestive problems and women's health problems\n- Put on the skin for skin conditions and muscle and joint problems",
      source: "picking",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies support some traditional uses. Extracts may help reduce inflammation, fight bacteria, fungi and viruses, reduce fluid secretion in the gut, and affect hormones. They also showed effects against cancer cells, protected the liver, and killed insects, mites and snails.\n\nTechnical detail: activities include antimitotic, antiproliferative, cytotoxic, antioxidant, anti-inflammatory, antibacterial, antifungal, antiviral, anti-HIV, antisecretory, hepatoprotective, insecticidal, acaricidal and molluscicidal; 17 lignans, 4 triterpenes, 11 diterpenes, 3 sesquiterpenes, 3 monoterpenes, 2 flavonoids, 1 polyphenol and 1 alkaloid identified.",
      source: "picking",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "No clinical trials in people had been done by the time of the 2013 review. The reviewers called for trials.",
      source: "picking",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for breathing problems. It hasn't been tested in clinical trials." },
    { slug: "colds-and-congestion", notes: "Traditionally used for breathing problems. It hasn't been tested in clinical trials." },
    { slug: "indigestion", notes: "Traditionally used for digestive problems. It hasn't been tested in clinical trials." },
    { slug: "menstrual-discomfort", notes: "Traditionally used for women's health problems; lab studies suggest it affects hormones. Not tested in clinical trials." },
    { slug: "skin-irritation", notes: "Traditionally put on the skin for skin conditions. It hasn't been tested in clinical trials." },
    { slug: "joint-discomfort", notes: "Traditionally put on the skin for muscle and joint problems. It hasn't been tested in clinical trials." },
  ],
});
