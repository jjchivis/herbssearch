import { run } from "./lib/populate-herb";

// Black garlic (garlic bulbs, Allium sativum, aged with heat and humidity), from
// two reviews (Ahmed & Wang 2021, Molecules; Vecchi et al. 2025, J Agric Food
// Chem) and five human trials (Jung 2014; Valls 2022; Serrano 2023 and 2026;
// Villaño 2023). Family per the Garlic entry. No source gives a native range,
// pregnancy advice or medicine interactions for black garlic itself, so none are
// given; garlic's own warnings (populate-garlic.ts) were studied on other garlic
// products and aren't copied here.

run({
  name: "Black Garlic",
  profile: {
    family: "Amaryllidaceae",
    genus: "Allium",
    species: "sativum",
    partsUsed: "Whole garlic bulbs (the cloves), aged with gentle heat and humidity until they turn black",
  },
  sources: {
    ahmed: {
      title: "Black Garlic and Its Bioactive Compounds on Human Health Diseases: A Review",
      author: "Ahmed T, Wang CK",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2021-08-19",
      doi: "10.3390/molecules26165028",
      pmid: "34443625",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8401630/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vecchi: {
      title: "Black Garlic: Evolution of the Chemical Composition and Broad Biological Activities",
      author: "Vecchi V, Sabbioni G, Altieri MT, Breveglieri G, Costa S, Marchetti F, Gugel I, Vertuani S, Borgatti M",
      journal: "Journal of Agricultural and Food Chemistry",
      organization: "Journal of Agricultural and Food Chemistry",
      publicationDate: "2025-10-22",
      doi: "10.1021/acs.jafc.5c09705",
      pmid: "41126383",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12593375/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jung: {
      title: "Reduction of blood lipid parameters by a 12-wk supplementation of aged black garlic: a randomized controlled trial",
      author: "Jung ES, Park SH, Choi EK, Ryu BH, Park BH, Kim DS, Kim YG, Chae SW",
      journal: "Nutrition",
      organization: "Nutrition",
      publicationDate: "2014-09-01",
      doi: "10.1016/j.nut.2014.02.014",
      pmid: "24976429",
      url: "https://pubmed.ncbi.nlm.nih.gov/24976429/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    valls: {
      title: "Effects of an Optimized Aged Garlic Extract on Cardiovascular Disease Risk Factors in Moderate Hypercholesterolemic Subjects: A Randomized, Crossover, Double-Blind, Sustained and Controlled Study",
      author: "Valls RM, Companys J, Calderón-Pérez L, et al.",
      journal: "Nutrients",
      organization: "Nutrients",
      publicationDate: "2022-01-18",
      doi: "10.3390/nu14030405",
      pmid: "35276764",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8838962/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    serrano2023: {
      title: "Antihypertensive Effects of an Optimized Aged Garlic Extract in Subjects with Grade I Hypertension and Antihypertensive Drug Therapy: A Randomized, Triple-Blind Controlled Trial",
      author: "Serrano JCE, Castro-Boqué E, García-Carrasco A, et al.",
      journal: "Nutrients",
      organization: "Nutrients",
      publicationDate: "2023-08-23",
      doi: "10.3390/nu15173691",
      pmid: "37686723",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10490347/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    serrano2026: {
      title: "Effects of aged black garlic (ABG10+) on lipoprotein subclass composition in Grade I hypertension: a randomized, triple-blind controlled trial with sex-stratified sequential allocation",
      author: "Serrano JCE, Castro-Boqué E, García-Carrasco A, et al.",
      journal: "Frontiers in Nutrition",
      organization: "Frontiers in Nutrition",
      publicationDate: "2026-07-27",
      doi: "10.3389/fnut.2026.1869617",
      pmid: "42577101",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13453676/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    villano: {
      title: "Effect of Black Garlic Consumption on Endothelial Function and Lipid Profile: A Before-and-After Study in Hypercholesterolemic and Non-Hypercholesterolemic Subjects",
      author: "Villaño D, Marhuenda J, Arcusa R, Moreno-Rojas JM, Cerdá B, Pereira-Caro G, Zafrilla P",
      journal: "Nutrients",
      organization: "Nutrients",
      publicationDate: "2023-07-13",
      doi: "10.3390/nu15143138",
      pmid: "37513556",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10385333/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Aged Black Garlic", type: "COMMON_NAME" }],
  constituents: [{ name: "S-allyl cysteine", slug: "s-allyl-cysteine", type: "organosulfur compound" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Nobody knows exactly where black garlic came from. It's thought to have been eaten in Korea, Japan and Thailand since ancient times. In recent years it has become a fast-growing health food.",
      source: "ahmed",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Black garlic is made by keeping whole garlic bulbs warm (60–90 °C) and humid for 15 to 90 days, with nothing added. Lab analyses show this turns the cloves black, chewy and sweet, and changes what's in them.\n- Much less allicin, the compound behind fresh garlic's sharp smell\n- More S-allyl cysteine (SAC), a more stable sulfur compound\n- More sugars and more plant antioxidants (polyphenols)\nThe amounts vary a lot with how it's made, because there's no standard method.\n\nTechnical detail: browning comes from the Maillard reaction, which forms melanoidins and 5-hydroxymethylfurfural (HMF). Allicin 3.45 g/kg in fresh garlic vs 0.16–0.93 g/kg; SAC 19.61 vs 28.78–124.67 µg/g; polyphenols 13.91 vs 25.81–58.33 mg GAE/g.",
      source: "vecchi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests and animal studies, black garlic and its extracts acted as antioxidants and lowered inflammation signals. They also slowed or killed some cancer cells, lowered blood sugar in diabetic rats, and reduced weight and blood fats in rats fed a high-fat diet. Researchers don't yet know which of its compounds are responsible.\n\nTechnical detail: DPPH and ABTS IC50 166.3 and 108.1 µg/mL; extract at 120 mg/kg protected mice from LPS-induced septic shock; 1% or 3% extract in the diet of diabetic rats; 0.2–1.5% black garlic in the diet of high-fat-fed rats.",
      source: "vecchi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a Korean trial, 60 adults with mildly high cholesterol took 6 g of aged black garlic or a placebo every day for 12 weeks, and 55 finished. Compared with placebo, black garlic didn't change total cholesterol, LDL (\"bad\") cholesterol or triglycerides. It did raise HDL (\"good\") cholesterol and lowered apolipoprotein B, a blood protein linked to heart disease risk. No side effects were reported.\n\nTechnical detail: double-blind, randomized, placebo-controlled; analyzed 28 black garlic vs 27 placebo; LDL-C/apoB ratio increased.",
      source: "jung",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a Spanish study, 62 adults aged 40 to 64 ate 4 cloves (12 g) of black garlic a day for 12 weeks. Half had high cholesterol and half didn't. There was no placebo group, so each person's results were compared before and after.\n- Some blood markers linked to healthy blood vessels improved in both groups, while two others went up.\n- In people without high cholesterol, total, LDL and HDL cholesterol all went up.\n- Blood pressure and weight didn't change, and safety blood tests stayed normal.\nThe authors say longer studies are needed.\n\nTechnical detail: ApoA1 rose by about 11 mg/dL in both groups; MCP-1 fell 13.9% (hypercholesterolemic) and 7.2% (non-hypercholesterolemic); VCAM-1 fell 12.5% in the hypercholesterolemic group; atherogenic index fell from 3.86 to 3.54 in the non-hypercholesterolemic group; NCT05082350.",
      source: "villano",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a Spanish trial, 67 adults with moderately high LDL cholesterol took a tablet of 250 mg aged black garlic extract or a placebo each day. Each person took both, for 6 weeks each, with a 3-week break between. On black garlic, diastolic blood pressure (the bottom number) was about 3.6 mm Hg lower than on placebo. The drop was seen in men but not in women. Cholesterol didn't change compared with placebo. Two authors worked for the company that makes the extract.\n\nTechnical detail: randomized, crossover, double-blind; 1.25 mg S-allyl-L-cysteine per tablet; DBP −3.62 mm Hg (95% CI −6.2 to −0.99) vs placebo; men −5.85 mm Hg (−10.5 to −1.3); SBP −1.51 mm Hg (−9.1 to 6.1), not significant; NCT04010565.",
      source: "valls",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a Spanish trial, 81 adults with mild (grade 1) high blood pressure who already took blood pressure medicine added a 250 mg aged black garlic extract tablet or a placebo each day for 12 weeks; 77 finished. Blood pressure fell slightly more with black garlic: about 1.8 mm Hg for the top number and 1.5 mm Hg for the bottom number. The company that makes the extract funded the study and employed some of the authors.\n\nTechnical detail: randomized, triple-blind, placebo-controlled; 0.25 mg S-allyl-cysteine a day; SBP −1.8 mm Hg (95% CI 0.7 to 4.1), DBP −1.5 mm Hg (0.3 to 3.0); nitric oxide +10.3 µM; uric acid −0.3 mg/dL; ACE activity −9.3 U/L.",
      source: "serrano2023",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In another Spanish trial, 75 adults with mild (grade 1) high blood pressure finished 12 weeks of a daily 250 mg aged black garlic extract or a placebo. Black garlic didn't change total, LDL or HDL cholesterol or triglycerides. More detailed blood fat tests hinted at small changes, but the authors say these need confirming in larger trials. The extract's maker funded the study.\n\nTechnical detail: randomized, triple-blind, placebo-controlled; NMR lipoprotein subclass analysis (exploratory); NCT04915053.",
      source: "serrano2026",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "In a 12-week trial of 6 g of aged black garlic a day, no side effects were reported.",
      source: "jung",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In a 12-week trial of a black garlic extract, 2 people taking it and 1 taking a placebo had mild stomach discomfort. One person stopped taking the extract because of heartburn and acid reflux.",
      source: "serrano2023",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Heating garlic to make black garlic forms a compound called HMF, and the amount rises the longer it's aged. Researchers say it's still unclear whether HMF poses a health risk. Lab studies suggest it can damage genes only weakly, and only at high amounts.\n\nTechnical detail: 5-hydroxymethylfurfural; \"weak genotoxic and mutagenic potential only at high concentration.\"",
      source: "vecchi",
    },
  ],
  symptoms: [
    {
      slug: "high-cholesterol",
      notes:
        "A few small trials of black garlic have looked at cholesterol. One found it raised HDL (\"good\") cholesterol but didn't lower LDL (\"bad\") or total cholesterol; others found no change compared with placebo.",
    },
    {
      slug: "high-blood-pressure",
      notes:
        "Two small trials of a black garlic extract found slightly lower blood pressure, mainly the bottom number. Staff of the company that makes the extract worked on both.",
    },
  ],
});
