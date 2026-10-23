import { run } from "./lib/populate-herb";

// Cayenne (Capsicum fruit), from the European Medicines Agency's EU herbal
// monograph on Capsicum annuum var. minimum and small-fruited Capsicum frutescens
// (2015), a chili trial in IBS (Aniwan 2014) and a study of a cayenne poultice
// on the skin in healthy volunteers (Sarabon et al. 2018).

run({
  name: "Cayenne",
  profile: {
    family: "Solanaceae",
    genus: "Capsicum",
    species: "frutescens",
    partsUsed: "The ripe, dried fruit (chili pepper); as medicine, an extract in skin plasters and creams",
  },
  sources: {
    aniwanIbs: {
      title: "Effects of Chili Treatment on Gastrointestinal and Rectal Sensation in Diarrhea-predominant Irritable Bowel Syndrome: A Randomized, Double-blinded, Crossover Study",
      author: "Aniwan S, Gonlachanvit S",
      journal: "Journal of Neurogastroenterology and Motility",
      organization: "Journal of Neurogastroenterology and Motility",
      publicationDate: "2014-07-01",
      doi: "10.5056/jnm14022",
      pmid: "24867591",
      url: "https://pubmed.ncbi.nlm.nih.gov/24867591/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ema: {
      title: "European Union herbal monograph on Capsicum annuum L. var. minimum (Miller) Heiser and small fruited varieties of Capsicum frutescens L., fructus (EMA/HMPC/674139/2013)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-05-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-capsicum-annuum-l-var-minimum-miller-heiser-and-small-fruited-varieties-capsicum-frutescens-l-fructus_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    sarabon: {
      title: "Acute effect of different concentrations of cayenne pepper cataplasm on sensory-motor functions and serum levels of inflammation-related biomarkers in healthy subjects",
      author: "Sarabon N, Löfler S, Cvecka J, Hübl W, Zampieri S",
      journal: "European Journal of Translational Myology",
      organization: "European Journal of Translational Myology",
      publicationDate: "2018-03-01",
      doi: "10.4081/ejtm.2018.7333",
      pmid: "29686821",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5895990/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cayenne Pepper", type: "COMMON_NAME" },
    { name: "Chili Pepper", type: "COMMON_NAME" },
    { name: "Capsicum", type: "COMMON_NAME" },
    { name: "Capsicum annuum", type: "SCIENTIFIC_SYNONYM" },
    { name: "Capsaicin", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cayenne poultices have long been put on the skin for pain. A skin-reddening cayenne treatment was described in 1830 for pain, cramps and muscle and joint problems. In 1909 an Austrian doctor, Giuseppe Munari, first prescribed a cayenne and clay poultice. It's still used in Vienna and Lower Austria for back pain, rheumatic conditions and osteoarthritis pain.",
      source: "sarabon",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small study, 20 healthy adults had a cayenne and clay poultice (0%, 2.5%, 5% or 10% cayenne) put on their back for 20 minutes, a week or more apart. At 5% and 10%, people became less sensitive to pain and light touch at that spot. At 10%, back strength dropped for a while. Blood pressure didn't change. In 6 more healthy men, one 5% poultice didn't raise signs of inflammation in the blood over 24 hours. People felt warmth, burning and tingling. It wasn't tested in people with back pain, and the authors say repeated use needs study.\n\nTechnical detail: randomized order of concentrations within subjects; pressure-pain threshold increased at 5% and 10%; maximal trunk extension force fell at 10% (p = .001); IL-6 fell at 1 hour and sE-selectin fell; the 5% mix contains about 0.0045% capsaicin.",
      source: "sarabon",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 2014 trial, 16 people with irritable bowel syndrome with diarrhoea took chili capsules and dummy capsules before meals 3 times a day, for 6 weeks each. Chili reduced burning belly pain after meals and made the rectum less sensitive to stretching.\n\nTechnical detail: randomized, double-blind crossover; rectal sensory threshold measured with a barostat.",
      source: "aniwanIbs",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency accepts cayenne extract, in plasters and creams put on the skin, as an established medicine for relief of muscle pain such as low back pain. Its hot compounds (capsaicinoids) increase blood flow and warm the skin.\n- Plaster: no more than 1 a day, left on for 4 to 12 hours, with at least 12 hours before another on the same spot\n- Use until the pain eases, for up to 3 weeks, then take a break of at least 2 weeks\nIt's for adults only.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Don't use cayenne plasters or creams on broken skin, wounds or eczema, or if you're allergic to chili or peppers. Keep them away from the eyes and the inside of the mouth and nose, and wash your hands after touching them.",
      source: "ema",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "Avoid extra heat while using it, such as heating pads, sunlamps or hot water; sweating from exercise can also make it hotter. Remove it if the heat feels too strong. Don't use other creams, gels or plasters on the same spot, even up to 12 hours after removing it.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Redness and warmth of the skin are expected and fade after removal. Burning, stinging or itching can happen, especially in the first days. Rarely (up to 1 in 1,000 people), it causes allergic reactions such as hives or blisters; stop using it if this happens.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "There's no information on its use in pregnancy. Capsaicin crosses the placenta and may pass into breast milk, and very high doses harmed reproduction in animal studies. It should only be used in pregnancy or breastfeeding after carefully weighing the risks and benefits.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "ibs", notes: "In a small trial, chili capsules eased burning belly pain after meals in irritable bowel syndrome with diarrhoea." },
  ],
});
