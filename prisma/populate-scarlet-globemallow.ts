import { run } from "./lib/populate-herb";

// Scarlet Globemallow (Sphaeralcea coccinea), from the Native American
// Ethnobotany Database (Moerman, BRIT) and the US Forest Service's Western
// Forbs species review (Gucker and Shaw 2018). No medical research on this
// species was found in PubMed Central; the trial and review of a related
// Mexican species, Sphaeralcea angustifolia (Romero-Cerecero et al. 2013;
// Meckes-Fischer and Nicasio-Torres 2023), are labeled as such. RxList
// (Natural Medicines summary) for its evidence rating and safety. Family per
// GBIF.

run({
  name: "Scarlet Globemallow",
  profile: {
    family: "Malvaceae",
    genus: "Sphaeralcea",
    species: "coccinea",
    nativeRange: "British Columbia to Manitoba, south to Arizona, New Mexico, Texas and northern Mexico",
    partsUsed: "The whole plant, especially the deep, gummy roots",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Sphaeralcea coccinea",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Sphaeralcea+coccinea",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    usfs: {
      title: "Scarlet globemallow (Sphaeralcea coccinea). In: Western forbs: Biology, ecology, and use in restoration",
      author: "Gucker CL, Shaw NL",
      organization: "USDA Forest Service, Rocky Mountain Research Station; Great Basin Fire Science Exchange",
      publicationDate: "2018-01-01",
      url: "https://research.fs.usda.gov/treesearch/60359",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    romero: {
      title: "Clinical trial for evaluating the effectiveness and tolerability of topical Sphaeralcea angustifolia treatment in hand osteoarthritis",
      author: "Romero-Cerecero O, Meckes-Fischer M, Zamilpa A, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2013-03-23",
      doi: "10.1016/j.jep.2013.03.040",
      pmid: "23528365",
      url: "https://doi.org/10.1016/j.jep.2013.03.040",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    meckes: {
      title: "The Journey of a Medicinal Plant throughout Science: Sphaeralcea angustifolia (Cav.) G. Don (Malvaceae)",
      author: "Meckes-Fischer M, Nicasio-Torres P",
      journal: "Plants",
      publicationDate: "2023-01-10",
      doi: "10.3390/plants12020321",
      pmid: "36679034",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9867394/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rxlist: {
      title: "Globemallow: Health Benefits, Side Effects, Uses, Dose & Precautions",
      organization: "RxList (WebMD), based on the Natural Medicines Comprehensive Database",
      url: "https://www.rxlist.com/supplements/globemallow.htm",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Malvastrum coccineum", type: "SCIENTIFIC_SYNONYM" },
    { name: "Caliche Globemallow", type: "COMMON_NAME" },
    { name: "Common Globemallow", type: "COMMON_NAME" },
    { name: "Red False Mallow", type: "COMMON_NAME" },
    { name: "Scarlet Falsemallow", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by the Blackfoot, Lakota, Dakota, Navajo, Cheyenne, Comanche, Acoma and Laguna peoples.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Dakota and Lakota chewed the plant or its roots and put it on sores and wounds as a cooling, healing salve. The Kayenta Navajo used the dried plant as a dusting powder for sores and as a lotion for skin problems, and the Comanche used a tea of it for swellings.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Lakota and Dakota ceremonies, medicine men rubbed the chewed roots on their hands to protect them from boiling water. The Navajo used it as a tonic to improve appetite and a tea of it to stop bleeding.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Cheyenne mixed a tea of the plant into other medicines to make them taste better. The Navajo chewed the roots when food was scarce.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Blackfoot chewed the plant into a paste used as a healing salve for sores and wounds. Blackfoot medicine men also spread the paste on their hands and arms so they could take items out of boiling water. The Acoma and Laguna gave the roots as a medicine to pregnant women.",
      source: "usfs",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Navajo call it a medicine plant with gummy roots. The Gosiute pounded it into a gummy paste to seal small holes inside clay dishes. Today it's planted as a drought-tolerant native wildflower and in land restoration, and it's good forage for deer and pronghorn.",
      source: "usfs",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Mexico a related species, Sphaeralcea angustifolia (vara de San José), is put on the skin for inflammation and rheumatism, and taken by mouth for stomach and gut problems.",
      source: "meckes",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Scarlet globemallow itself hasn't been tested in people. In a 4-week trial of 113 people with hand osteoarthritis, a gel made from the related Sphaeralcea angustifolia worked about as well as 2% diclofenac gel, a standard pain-relief gel. Neither gel caused side effects in the trial.",
      source: "romero",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There isn't enough evidence to rate globemallow for any use, including coughs, colds, diarrhea, sores, burns or wounds.",
      source: "rxlist",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "It isn't known whether globemallow is safe to take or what side effects it might cause.",
      source: "rxlist",
    },
    {
      category: "PREGNANCY",
      description:
        "Not enough is known about using globemallow during pregnancy or while breastfeeding, so it's best avoided. The Acoma and Laguna did give the roots to pregnant women as a medicine.",
      source: "rxlist",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Chewed plant or roots were put on sores and wounds by the Dakota and Lakota. Not studied in people." },
    { slug: "loss-of-appetite", notes: "The Kayenta Navajo used it as a tonic to improve appetite. Not studied in people." },
    {
      slug: "joint-discomfort",
      notes: "A gel from a related species, Sphaeralcea angustifolia, eased hand osteoarthritis about as well as diclofenac gel in one trial. Scarlet globemallow itself hasn't been tested.",
    },
  ],
  preparations: [{ slug: "poultice", notes: "Chewed roots or plant put on sores and wounds.", source: "naeb" }],
});
