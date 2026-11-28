import { run } from "./lib/populate-herb";

// Glossy Privet (Ligustrum lucidum), whose dried fruit is the Chinese medicine
// nü zhen zi (Ligustri Lucidi Fructus). From a 2024 review of the plant (Chen
// et al.), a 2017 review of the fruit in osteoporosis with its safety data
// (Chen et al.), a 2023 review of traditional uses and pharmacology (Cao et
// al.), a 2026 review of Erzhi Pill (Li et al.), two randomized trials of
// formulas containing it (Fu et al. 2016, menopause; Li et al. 2025, IVF), and
// a 2020 review of privet pollen allergy (Robledo-Retana et al.).
// No trial has tested glossy privet on its own in people.

run({
  name: "Glossy Privet",
  profile: {
    family: "Oleaceae",
    genus: "Ligustrum",
    species: "lucidum",
    nativeRange: "Southern China and Korea",
    partsUsed: "The ripe fruit, dried (often steamed with wine first)",
  },
  sources: {
    chen2024: {
      title:
        "A review of botany, phytochemistry, pharmacology, and applications of the herb with the homology of medicine and food: Ligustrum lucidum W.T. Aiton",
      author: "Chen L, Huang D, Jiang L, Yang J, Shi X, Wang R, Li W",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-06-12",
      doi: "10.3389/fphar.2024.1330732",
      pmid: "38933667",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11199554/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chen2017: {
      title: "Fructus Ligustri Lucidi in Osteoporosis: A Review of its Pharmacology, Phytochemistry, Pharmacokinetics and Safety",
      author: "Chen B, Wang L, Li L, Zhu R, Liu H, Liu C, et al.",
      journal: "Molecules",
      publicationDate: "2017-09-05",
      doi: "10.3390/molecules22091469",
      pmid: "28872612",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6151717/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cao2023: {
      title:
        "Ligustri Lucidi Fructus, a traditional Chinese Medicine: Comprehensive review of botany, traditional uses, chemical composition, pharmacology, and toxicity",
      author: "Cao M, Wu J, Peng Y, Dong B, Jiang Y, Hu C, Yu L, Chen Z",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2023-01-30",
      doi: "10.1016/j.jep.2022.115789",
      pmid: "36208822",
      url: "https://doi.org/10.1016/j.jep.2022.115789",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    li2026: {
      title:
        "The modern scientific interpretation of ancient wisdom: a review of the phytochemistry and pharmacology of Erzhi Pill and its constituent botanical drugs",
      author: "Li X, Liu X, Jiang J, Fang M, Wang S, Mao X, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-04-21",
      doi: "10.3389/fphar.2026.1797126",
      pmid: "42093889",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13139087/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fu2016: {
      title:
        "A randomized, double-blind, placebo-controlled trial of Chinese herbal medicine granules for the treatment of menopausal symptoms by stages",
      author: "Fu SF, Zhao YQ, Ren M, Zhang JH, Wang YF, Han LF, et al.",
      journal: "Menopause",
      publicationDate: "2016-03-01",
      doi: "10.1097/GME.0000000000000534",
      pmid: "26671188",
      url: "https://doi.org/10.1097/GME.0000000000000534",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    li2025: {
      title:
        "Erzhi Tiangui formula increases the number of high-quality blastocysts in patients with advanced age by regulating the Nrf2/HO-1 signaling pathway: a randomized controlled study",
      author: "Xiufang L, Zhongqing W, Huidan W, Ye Z, Xu H, Wei C, et al.",
      journal: "Journal of Ovarian Research",
      publicationDate: "2025-12-30",
      doi: "10.1186/s13048-025-01940-8",
      pmid: "41469678",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12860082/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    robledo: {
      title: "Ligustrum pollen: New insights into allergic disease",
      author: "Robledo-Retana T, Mani BM, Teran LM",
      journal: "World Allergy Organization Journal",
      publicationDate: "2020-02-01",
      doi: "10.1016/j.waojou.2020.100104",
      pmid: "32055279",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7005548/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Nü Zhen Zi", type: "TRADITIONAL_NAME", region: "China" },
    { name: "Ligustri Lucidi Fructus", type: "TRADITIONAL_NAME" },
    { name: "Fructus Ligustri Lucidi", type: "TRADITIONAL_NAME" },
    { name: "Broad-leaf Privet", type: "COMMON_NAME" },
    { name: "Tree Privet", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Oleanolic Acid", slug: "oleanolic-acid", type: "triterpene" },
    { name: "Ursolic Acid", slug: "ursolic-acid", type: "triterpene" },
    { name: "Salidroside", slug: "salidroside", type: "phenylethanoid glycoside" },
    { name: "Specnuezhenide", slug: "specnuezhenide", type: "secoiridoid glycoside" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes:
        "The dried berries (nü zhen zi) have been a liver and kidney tonic since they were first recorded about 2,000 years ago, and are half of the classic formula Erzhi Pill.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The dried ripe berries, called nü zhen zi, were first recorded in Shen Nong's Classic of Materia Medica, written between 100 BCE and 200 CE. It ranked them as a \"top-tier\" herb, a term for herbs with no observable toxicity.\n\nIn Chinese medicine the berries are described as bitter, sweet and cooling, and are used to strengthen the liver and kidneys.\n\nTechnical detail: Fructus Ligustri Lucidi (FLL), Nvzhenzi; by meridian tropism it is said to act on the liver and kidney channels.",
      source: "chen2017",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Chinese medicine the berries are traditionally used for:\n- Dizziness and ringing in the ears\n- A sore, weak lower back and knees\n- Hair turning gray early\n- Dim or blurred vision\n- Thirst with a feeling of inner heat, and hot flashes\n\nTechnical detail: traditional indications include tinnitus, soreness and weakness of the waist and knees, premature greying, \"darkness of the eyes\", internal heat and thirst, and \"bone steaming\" (tidal fever) with hot flashes.",
      source: "cao2023",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Glossy privet berries are one of the two herbs in Erzhi Pill, a Chinese formula first recorded in 1536. The other is false daisy (Eclipta prostrata). Erzhi Pill is used for dizziness, ringing in the ears, a dry throat and nose, and heavy periods.\n\nFor this formula, the berries are first steamed with wine.\n\nTechnical detail: first documented as \"Nvzhen Dan\" in Fu Shou Jing Fang (Ming dynasty); the herbal pair is Ligustri Lucidi Fructus and Ecliptae Herba (Mo Han Lian).",
      source: "li2026",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The 2020 Chinese Pharmacopoeia lists more than 100 formulas that contain glossy privet. China also officially lists it as a food that can double as a medicine.\n\nOutside medicine, it's planted as an ornamental tree and used in animal feed.\n\nTechnical detail: classified as a medicine food homology (MFH) material; formulas include Er Zhi Wan and Zhenqi Fuzheng.",
      source: "chen2024",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with bone loss, glossy privet berries improved bone turnover and bone quality. The rats had lost bone because their ovaries were removed, or because of age or diabetes. In lab dishes, extracts helped bone-building cells mature.\n\nSome of the berries' compounds, including oleanolic acid, ursolic acid and salidroside, showed similar effects. These results haven't been tested in well-designed human trials.\n\nTechnical detail: ovariectomized, aged, diabetic and growing rats; proposed pathways PTH/FGF-23/1,25-(OH)₂D₃/CaSR, Nox4/ROS/NF-κB and OPG/RANKL/cathepsin K; nuzhenide was also reported active; cell lines MC3T3-E1 and UMR-106.",
      source: "chen2017",
    },
    {
      category: "PRECLINICAL",
      summary:
        "More than 200 natural compounds have been found in the plant. In lab and animal studies, its extracts and compounds have been tested against bone loss, tumors, liver damage and inflammation, and for effects on the immune system. These are early findings, not evidence that it works in people.\n\nTechnical detail: 206 compounds, mainly flavonoids, phenylpropanoids, iridoid glycosides and triterpenoids; reported activities are anti-osteoporosis, antitumor, hepatoprotective, antioxidant, anti-inflammatory and immunomodulatory.",
      source: "chen2024",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Extracts and compounds from the berries have also been studied in the lab for lowering blood sugar and blood fats.\n\nTechnical detail: reported effects include hypoglycemic and lipid-lowering activity, alongside antitumor, liver-protective and immune-regulating effects.",
      source: "cao2023",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial with 389 women aged 40 to 60 with frequent hot flashes, an Erzhi formula (based on glossy privet berries and false daisy) taken for 8 weeks worked no better than a placebo.\n\nA different Chinese formula (Danzhi Qing'e) did improve quality of life and hot flashes. Combining the two formulas helped only women in perimenopause, the years around the last period.\n\nTechnical detail: stratified, randomized, double-blind, placebo-controlled; 8 weeks of treatment plus 4 weeks of follow-up; at least 14 hot flushes per week at entry. Primary outcome MENQOL; the Erzhi group showed no significant difference from placebo in any MENQOL domain.",
      source: "fu2016",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial with 240 women aged 35 to 42 having IVF, a 10-herb formula containing glossy privet (Erzhi Tiangui) led to more good-quality embryos and a higher fertilization rate than a placebo. The women took 3 g three times a day for about 45 days.\n\nHowever, pregnancy and live birth rates were about the same in both groups. Because the formula has 10 herbs, the effect of glossy privet on its own isn't known.\n\nTechnical detail: randomized, placebo-controlled (ChiCTR2200065195). Live birth 35.8% vs 33.3% (p = 0.684); clinical pregnancy 45.8% vs 46.7% (p = 0.897). Other herbs: Cuscuta chinensis, Eclipta prostrata, Angelica sinensis, Lycium fruit, Ligusticum chuanxiong, prepared Rehmannia, Cyperus rotundus, Paeonia lactiflora and prepared licorice. Granulosa cells showed Nrf2/HO-1 activation.",
      source: "li2025",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Short-term studies in mice, rats and rabbits found no toxic effects from the berries or leaf extracts. Long-term safety hasn't been studied, and there are no well-designed safety trials in people.\n\nTechnical detail: oral supercritical CO₂ extract at 11, 13 and 15 g/kg for 7 days in mice; acute and subacute studies only. The review calls for long-term toxicity studies.",
      source: "chen2017",
    },
    {
      category: "ALLERGY",
      description:
        "Pollen from privet trees and hedges is a common cause of allergies. In sensitive people it can trigger hay fever and asthma.\n\nTechnical detail: several Ligustrum pollen allergens have been identified by immunoproteomics; IgE cross-linking drives a Th2-type allergic response.",
      source: "robledo",
    },
  ],
  symptoms: [
    {
      slug: "fertility",
      notes:
        "In one IVF trial, a 10-herb formula containing glossy privet gave more good-quality embryos, but pregnancy and birth rates didn't change.",
    },
    {
      slug: "menopause-symptoms",
      notes:
        "Traditionally used for hot flashes; in a trial of 389 women, an Erzhi formula on its own did no better than placebo.",
    },
    {
      slug: "cancer-research",
      notes:
        "Lab and animal research only. It's part of Chinese formulas such as Zhenqi Fuzheng that are used alongside cancer treatment.",
    },
  ],
});
