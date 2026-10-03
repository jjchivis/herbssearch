import { run } from "./lib/populate-herb";

// Calamus Root (Acorus calamus, sweet flag), from the European Medicines
// Agency's public statement on asarone (2005) and the US ban on calamus in food
// (21 CFR 189.110).

run({
  name: "Calamus Root",
  profile: {
    family: "Acoraceae",
    genus: "Acorus",
    species: "calamus",
    partsUsed: "The underground stem (rhizome), often called the root",
  },
  sources: {
    emaAsarone: {
      title: "Public statement on the use of herbal medicinal products containing asarone",
      organization: "European Medicines Agency (EMEA), Committee on Herbal Medicinal Products",
      publicationDate: "2005-11-23",
      url: "https://www.ema.europa.eu/en/documents/scientific-guideline/public-statement-use-herbal-medicinal-products-containing-asarone_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cfr: {
      title: "21 CFR 189.110: Calamus and its derivatives (substances prohibited from use in human food)",
      organization: "US Food and Drug Administration (Code of Federal Regulations)",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-189/subpart-C/section-189.110",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Sweet Flag", type: "COMMON_NAME" },
    { name: "Calamus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Calamus root is used widely in traditional medicine around the world. Reported uses include:\n- Stomach cramps\n- Dysentery (bloody diarrhea)\n- Asthma\n- Getting rid of worms\n- As a tonic and stimulant\n- As an insecticide",
      source: "emaAsarone",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, asarone, a natural chemical in calamus, damaged genes and caused liver cancer in rodents. In rats it also slowed blood clotting and made them drowsy.\n\nTechnical detail: α- and β-asarone are genotoxic and hepatocarcinogenic in rodents; β-asarone showed anticoagulant effects in mice and rats and sedative and hypothermic effects in rats.",
      source: "emaAsarone",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Calamus contains asarone, which caused cancer in animal studies. The European Medicines Agency says the amount in herbal medicines should be kept as low as possible.\nHow much a plant contains depends on its variety: one variety had none in testing, while others contain small or large amounts. The agency says the variety without it should always be preferred.\n\nTechnical detail: β-asarone in dried rhizome: not detected (diploid var. americanus), 0.3% (triploid var. calamus), 4.4–8.3% (tetraploid var. angustatus). Temporary limit about 115 µg/day (about 2 µg/kg body weight/day) until a full benefit/risk assessment.",
      source: "emaAsarone",
    },
    {
      category: "CONTRAINDICATION",
      description: "In the US, food with any added calamus, calamus oil or calamus extract is illegal. It was banned in 1968.",
      source: "cfr",
    },
  ],
});
