import { run } from "./lib/populate-herb";

// Rue (Ruta graveolens). Source: a 2026 PRISMA-based review of its traditional
// use, chemistry, pharmacology and safety (Serhiienko et al.). Family per GBIF.

run({
  name: "Rue",
  profile: {
    family: "Rutaceae",
    genus: "Ruta",
    species: "graveolens",
    partsUsed: "The above-ground parts",
  },
  sources: {
    serhiienko: {
      title: "Ruta graveolens L. in Evidence-Based Phytotherapy: Pharmacological Activities, Bioactive Compounds and Safety",
      author: "Serhiienko T, Georgiyants V, Ivanauskas L, Mykhailenko O",
      journal: "Phytotherapy Research",
      publicationDate: "2026-09-01",
      doi: "10.1002/ptr.70434",
      pmid: "42680583",
      url: "https://doi.org/10.1002/ptr.70434",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  traditions: [
    { slug: "european-folk-medicine", notes: "Used in traditional European medicine for digestive, nervous, heart, breathing and reproductive complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Rue is widely used in traditional medicine in Europe, Asia, Africa and South America for digestive, nervous, heart, breathing and reproductive problems.",
      source: "serhiienko",
    },
    {
      category: "PRECLINICAL",
      summary:
        "More than 160 compounds have been found in rue. In lab and animal studies it shows a wide range of effects, from fighting germs to slowing tumors. A 2026 review said turning rue into a modern herbal medicine would need careful safety testing, standardized extracts and well-designed studies.",
      source: "serhiienko",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Rue contains compounds (furanocoumarins and alkaloids) that can make the skin react badly to sunlight and can damage the liver and kidneys, especially when the dose isn't controlled.",
      source: "serhiienko",
    },
    {
      category: "PREGNANCY",
      description: "Rue extracts can cause miscarriage. Don't use rue if you are pregnant or could be pregnant.",
      source: "serhiienko",
    },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "Can cause sun-sensitive skin reactions, liver and kidney damage, and miscarriage." },
  ],
});
