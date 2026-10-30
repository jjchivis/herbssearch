import { run } from "./lib/populate-herb";

// Guava Leaf (Psidium guajava), from the TRAMIL Caribbean monograph, a 2024
// review of guava for diarrhea (Liu et al.), a review of Guava Leaf Tea trials
// written by the tea's maker (Deguchi & Miyazaki, Yakult), two trials and a mouse
// toxicity study found by direct PubMed Central search. Origin per Liu et al.;
// family per GBIF. A mouth-ulcer gel trial was left out because it doesn't say
// which part of the plant the gel was made from.

run({
  name: "Guava Leaf",
  profile: {
    family: "Myrtaceae",
    genus: "Psidium",
    species: "guajava",
    nativeRange: "Probably from the Brazilian Amazon; now grown in tropical and subtropical regions worldwide",
    partsUsed: "The leaves, often the young shoots and flower buds",
  },
  sources: {
    tramil: {
      title: "Psidium guajava",
      organization: "TRAMIL (Traditional Medicine in the Islands)",
      url: "https://tramil.net/en/plant/psidium-guajava",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    liu: {
      title: "Ethnobotany, phytochemistry, and biological activities of Psidium guajava in the treatment of diarrhea: a review",
      author: "Liu C, Jullian V, Chassagne F",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-01-01",
      doi: "10.3389/fphar.2024.1459066",
      pmid: "39246650",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11377350/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deguchi: {
      title: "Anti-hyperglycemic and anti-hyperlipidemic effects of guava leaf extract",
      author: "Deguchi Y, Miyazaki K",
      journal: "Nutrition & Metabolism",
      publicationDate: "2010-02-01",
      doi: "10.1186/1743-7075-7-9",
      pmid: "20181067",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2831039/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    birdi: {
      title: "A randomized open label efficacy clinical trial of oral guava leaf decoction in patients with acute infectious diarrhoea",
      author: "Birdi T, Krishnan GG, Kataria S, Gholkar M, Daswani P",
      journal: "Journal of Ayurveda and Integrative Medicine",
      publicationDate: "2020-04-01",
      doi: "10.1016/j.jaim.2020.04.001",
      pmid: "32507357",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7329711/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nayak: {
      title:
        "Evaluation of a mouthrinse containing guava leaf extract as part of comprehensive oral care regimen: a randomized placebo-controlled clinical trial",
      author: "Nayak N, Varghese J, Shetty S, Bhat V, Durgekar T, Lobo R, et al.",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2019-11-01",
      doi: "10.1186/s12906-019-2745-8",
      pmid: "31752836",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6873761/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dibaba: {
      title: "Acute and sub-acute toxicological studies on the ethanol leaf extract of Psidium guajava in experimental mice",
      author: "Dibaba GT, Leminie AA, Tadesse WH, Lemmi WG, Hirpesa SW, Reje MS, et al.",
      journal: "Pan African Medical Journal",
      publicationDate: "2026-01-01",
      doi: "10.11604/pamj.2026.53.49.49406",
      pmid: "42283039",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13252073/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Guava", type: "COMMON_NAME" },
    { name: "Guayaba", type: "REGIONAL_NAME", region: "Latin America and the Spanish-speaking Caribbean" },
    { name: "Goyave", type: "REGIONAL_NAME", region: "French-speaking Caribbean" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "Leaf and shoot teas for diarrhea, vomiting and ataque de nervios, and a leaf wash for skin rashes and pimples.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Leaf and bark teas for diarrhea and stomachache.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "TRAMIL, a Caribbean research program, records these traditional uses of the leaves, young shoots and flower buds:\n- Diarrhea: a tea, sometimes with salt or sugar.\n- Ataque de nervios (a \"nervous attack\"): a leaf tea.\n- Skin pimples and rashes: a boiled leaf wash or bath.\n- Dizziness from drunkenness, and vomiting: a tea of the leaves or shoots.\nTRAMIL recognizes all of these uses, based on how widely they're used and on safety studies.",
      source: "tramil",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A 2024 review found guava used for diarrhea in traditional medicine in 44 countries. The leaves were the part mentioned most often, usually boiled into a tea and drunk. Leaf and bark teas have been used for diarrhea and stomachache in the Americas, Africa and Asia.",
      source: "liu",
    },
    {
      category: "TRADITIONAL",
      summary: "In East Asia and other countries, guava leaf extract has traditionally been used for diabetes.",
      source: "deguchi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a water extract of the leaves blocked gut enzymes that break down sugars. In diabetic mice, it improved blood sugar, insulin and blood fat levels.\n\nTechnical detail: alpha-glucosidase inhibition; improvements in hyperglycemia, hyperinsulinemia, hypoadiponectinemia, hypertriglyceridemia and hypercholesterolemia in murine models.",
      source: "deguchi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, about 27 compounds from guava have shown activity against diarrhea or bacteria.\n\nTechnical detail: benzophenone glycosides, terpenes, polysaccharides, phenols and flavonoids, including quercetin and its glycosides.",
      source: "liu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a single large dose of an alcohol-based leaf extract (2,000 mg per kg of body weight) caused no poisoning or deaths. Daily doses of up to 1,000 mg per kg for 28 days caused no harmful changes in blood tests or organs.\n\nTechnical detail: OECD 425 (acute) and OECD 407 (28-day sub-acute) guidelines; 250, 500 and 1000 mg/kg/day.",
      source: "dibaba",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice and rats, powdered dried leaves didn't damage genes, and single doses of 2 g per kg of body weight caused no deaths or signs of poisoning.\n\nTechnical detail: micronucleus test in mouse bone marrow; oral LD50 in mice above 2 g/kg; no histopathological changes in rats over 14 days.",
      source: "tramil",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 5-day trial in India, 109 adults with sudden, uncomplicated diarrhea took a guava leaf decoction (made from 6, 10 or 14 leaves) three times a day, or were given oral rehydration solution as a comparison.\nThe 14-leaf decoction (7.4 g of leaves) worked best: people were back to normal in about 72 hours, compared with 120 hours in the comparison group. Blood, liver and kidney tests stayed normal, and no side effects were reported. Everyone knew which treatment they got, which can bias results.\n\nTechnical detail: randomized, open-label, parallel-group, multi-arm; Sardar variety; outcomes were stool frequency and consistency; retrospectively registered (CTRI/2016/07/007095).",
      source: "birdi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies of a Japanese guava leaf tea (Bansoureicha) in people:\n- In people with type 2 diabetes, one 200 mL serving with a meal lowered the rise in blood sugar after eating, though less than the diabetes medicine voglibose.\n- In 15 men with prediabetes or mild type 2 diabetes who drank it with every meal for 12 weeks, fasting blood sugar dipped slightly and insulin levels fell. Cholesterol and triglycerides fell in those whose levels started high.\nThese studies were small. The review describing them was written by researchers at Yakult, which makes the tea, and one author holds patents on it.\n\nTechnical detail: fasting blood glucose 136 to 131 mg/dL (p = 0.07; the reduction rate was significant); insulin, C-peptide and HOMA-IR significantly decreased; approved in Japan as a Food for Specified Health Uses.",
      source: "deguchi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial in India, 60 people with gum inflammation (gingivitis) had a professional teeth cleaning, then used a mouthwash for 30 days: 0.15% guava leaf, 0.2% chlorhexidine (a standard antiseptic mouthwash) or plain water.\nGum inflammation, plaque and bacteria went down in all three groups. The guava and chlorhexidine groups improved more than the water group. The authors say longer studies are needed.\n\nTechnical detail: randomized, placebo-controlled; gingival index, plaque index and colony-forming units measured at baseline, 30 and 90 days; no significant difference in salivary antioxidant levels.",
      source: "nayak",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "TRAMIL advises against using it during pregnancy.",
      source: "tramil",
    },
    {
      category: "BREASTFEEDING",
      description: "TRAMIL advises against using it while breastfeeding.",
      source: "tramil",
    },
    {
      category: "CONTRAINDICATION",
      description: "TRAMIL advises against giving it to children under 3.",
      source: "tramil",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "For diarrhea, use it alongside oral rehydration, not instead of it.\nGet medical help right away if someone with diarrhea shows signs of dehydration:\n- a dry tongue\n- skin that stays tented when pinched\n- passing little urine\n- crying without tears\nSee a doctor if diarrhea lasts more than 3 days (1 day in children), if a skin problem lasts more than 5 days, or if the person gets worse. Don't keep a prepared tea for more than 24 hours, even in the fridge.",
      source: "tramil",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "No interactions causing low blood sugar were seen when people took guava leaf tea with their diabetes medicines (insulin, sulfonylureas or biguanides such as metformin), with or without a statin for cholesterol. These were small studies reported by the tea's maker.",
      source: "deguchi",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Healthy people who drank three times the usual amount of guava leaf tea (600 mL) had no diarrhea or low blood sugar. Trials of 8 to 12 weeks found no side effects.",
      source: "deguchi",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects were reported in a 5-day trial of a guava leaf decoction in 109 adults with diarrhea.",
      source: "birdi",
    },
  ],
  symptoms: [
    {
      slug: "diarrhea",
      notes:
        "Traditional use in many countries. In one 5-day trial in 109 adults, people taking a guava leaf decoction recovered from sudden diarrhea faster than a comparison group given oral rehydration solution. Everyone knew which treatment they got.",
    },
    {
      slug: "high-blood-sugar",
      notes:
        "Traditionally used for diabetes in East Asia. Small studies of a Japanese guava leaf tea found it lowered the rise in blood sugar after meals. The studies were reported by the tea's maker.",
    },
    {
      slug: "skin-irritation",
      notes: "Traditional use only: in the Caribbean, a boiled leaf wash or bath is used for skin rashes and pimples. Not studied in people.",
    },
    {
      slug: "occasional-nausea",
      notes: "Traditional use only: in the Caribbean, a tea of the leaves or young shoots is used for vomiting. Not studied in people.",
    },
  ],
  preparations: [
    {
      slug: "decoction",
      notes:
        "TRAMIL's recipe for diarrhea or vomiting: 30 grams of fresh leaves (young shoots preferred) boiled for 5 minutes in 1 liter (4 cups) of water, optionally with a little salt and sugar; 1 cup 3 to 4 times a day.",
      source: "tramil",
    },
    {
      slug: "tea-infusion",
      notes: "In Japan, a guava leaf tea made from a water extract of the leaves is sold as a food for blood sugar after meals.",
      source: "deguchi",
    },
  ],
});
