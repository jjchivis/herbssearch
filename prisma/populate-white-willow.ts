import { run } from "./lib/populate-herb";

// White willow (Salix alba) and other willow bark species, from the EMA/HMPC public
// summary on willow bark (EMA/97861/2017), a 2023 meta-analysis in arthritis
// (Lin et al.) and the 2019 United States Pharmacopeia safety review (Oketch-Rabah et al.).

run({
  name: "White Willow",
  profile: {
    family: "Salicaceae",
    genus: "Salix",
    species: "alba",
    partsUsed: "The dried bark, as a tea or extract",
  },
  sources: {
    ema: {
      title: "Willow bark (Salix spp., cortex): summary for the public (EMA/97861/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-07-25",
      url: "https://www.ema.europa.eu/en/medicines/herbal/salicis-cortex",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    lin: {
      title: "Willow Bark (Salix spp.) Used for Pain Relief in Arthritis: A Meta-Analysis of Randomized Controlled Trials",
      author: "Lin CR, Tsai SHL, Wang C, Lee CL, Hung SW, Ting YT, Hung YC",
      journal: "Life (Basel)",
      publicationDate: "2023-10-14",
      doi: "10.3390/life13102058",
      pmid: "37895439",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10607963/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    usp: {
      title: "United States Pharmacopeia Safety Review of Willow Bark",
      author: "Oketch-Rabah HA, Marles RJ, Jordan SA, Low Dog T",
      journal: "Planta Medica",
      publicationDate: "2019-10-11",
      doi: "10.1055/a-1007-5206",
      pmid: "31604354",
      url: "https://pubmed.ncbi.nlm.nih.gov/31604354/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Willow Bark", type: "COMMON_NAME" },
    { name: "Salix alba", type: "COMMON_NAME" },
    { name: "Salicis Cortex", type: "TRADITIONAL_NAME" },
  ],
  constituents: [{ name: "Salicin", slug: "salicin", type: "phenolic glycoside" }],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe for short-term lower back pain, and traditionally for minor joint pain, fever with colds and headache." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes willow bark as a traditional herbal medicine for adults to relieve:\n- Minor joint pain\n- Fever with a cold\n- Headache\nThis rests on at least 30 years of safe use, not on proof from clinical trials. The agency's summary covers several willow species.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency accepts willow bark dry extract as a well-established medicine for short-term lower back pain, because several clinical studies found it worked better than a dummy pill. Willow bark contains salicin, which the body turns into salicylic acid, a relative of aspirin. The amount made is small, so other compounds in the bark may also play a part.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review of 6 trials with 329 people with arthritis found willow bark relieved pain and improved physical function more than a dummy pill, with no more side effects. Because of possible bias in the trials, the evidence is still weak and more trials are needed.",
      source: "lin",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Reported side effects include allergic reactions (rash, itching and asthma) and stomach and gut symptoms such as nausea, vomiting, belly pain, diarrhoea and heartburn. How often these happen isn't known.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Trials giving 120–240 mg of salicin a day for up to 8 weeks found no serious side effects. The most common side effects were stomach and gut problems, with a few allergic reactions. All the trials were in adults.",
      source: "usp",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't take willow bark if you're allergic to aspirin or related painkillers (NSAIDs), or if you have asthma triggered by salicylates, an active stomach ulcer, severe liver or kidney problems, a bleeding disorder or G6PD deficiency. Children, teenagers and women in the last three months of pregnancy must not take it, and adults shouldn't take it for more than 4 weeks for pain.",
      source: "ema",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Willow bark can increase the risk of bleeding in vulnerable people, and taking it with other salicylate medicines such as aspirin adds to the risks. 240 mg of salicin can make more salicylic acid than a low-dose (81 mg) aspirin tablet, but supplements aren't required to carry aspirin's warnings.",
      source: "usp",
    },
    {
      category: "PREGNANCY",
      description:
        "Salicylates cross the placenta and are cleared slowly by newborns, and the United States Pharmacopeia says willow bark products shouldn't be used by women who are pregnant or breastfeeding, or by children, because of the risk of Reye syndrome.",
      source: "usp",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "A review of 6 trials found willow bark eased arthritis pain more than a dummy pill; evidence is still weak." },
    { slug: "headache", notes: "Recognized in Europe as a traditional medicine for headache." },
    { slug: "fever", notes: "Recognized in Europe as a traditional medicine for fever with a cold." },
  ],
});
