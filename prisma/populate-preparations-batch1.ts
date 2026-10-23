import { run } from "./lib/populate-herb";

// Preparations sweep, batch 1: herbs with European Medicines Agency (EMA) herbal
// monographs or summaries for the public. Each preparation comes from the
// monograph's "herbal preparations" and "pharmaceutical form" sections, or the
// summary's description of how the medicines are made and taken.

const G = "government" as const;
const T1 = "TIER_1_GOVERNMENT" as const;
const ORG = "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)";

run(
  {
    name: "Arnica",
    sources: {
      ema: { title: "Community herbal monograph on Arnica montana L., flos (EMA/HMPC/198793/2012)", organization: ORG, publicationDate: "2014-05-06", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-arnica-montana-l-flos_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tincture", notes: "Arnica flower tinctures and liquid extracts are recognized for use on the skin only, not by mouth.", source: "ema" },
      { slug: "salve", notes: "Creams, gels and ointments made with arnica flower extracts are applied to unbroken skin.", source: "ema" },
    ],
  },
  {
    name: "Artichoke Leaf",
    sources: {
      ema: { title: "European Union herbal monograph on Cynara cardunculus L. (syn. Cynara scolymus L.), folium (EMA/HMPC/194014/2017)", organization: ORG, publicationDate: "2018-03-27", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-cynara-cardunculus-l-syn-cynara-scolymus-l-folium_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered dried leaves are taken by mouth, for example in capsules or tablets.", source: "ema" },
      { slug: "extract", notes: "Water or alcohol extracts of the leaves are sold as tablets, capsules or liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Bilberry",
    sources: {
      ema: { title: "European Union herbal monograph on Vaccinium myrtillus L., fructus siccus (EMA/HMPC/678995/2013)", organization: ORG, publicationDate: "2015-09-29", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-vaccinium-myrtillus-l-fructus-siccus_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried ripe berries are made into an herbal tea to drink.", source: "ema" },
      { slug: "decoction", notes: "The dried berries are simmered in water to make a liquid that's used in the mouth, for example as a rinse.", source: "ema" },
    ],
  },
  {
    name: "Black Cohosh",
    sources: {
      ema: { title: "Black cohosh (Cimicifuga racemosa (L.) Nutt., rhizoma): summary of the HMPC conclusions (EMA/265439/2018)", organization: ORG, publicationDate: "2018-06-05", url: "https://www.ema.europa.eu/en/documents/herbal-summary/black-cohosh-summary-public_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "Dry extracts of the root are usually taken by mouth as tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Bladderwrack",
    sources: {
      ema: { title: "Community herbal monograph on Fucus vesiculosus L., thallus (EMA/HMPC/313674/2012)", organization: ORG, publicationDate: "2014-05-06", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-fucus-vesiculosus-l-thallus_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "The powdered dried seaweed is taken by mouth in tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Burdock",
    sources: {
      ema: { title: "Community herbal monograph on Arctium lappa L., radix (EMA/HMPC/246763/2009)", organization: ORG, publicationDate: "2010-09-16", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-arctium-lappa-l-radix_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered root is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Liquid and soft extracts of the root are taken by mouth.", source: "ema" },
      { slug: "tincture", notes: "Tinctures (alcohol extracts) of the root are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Calendula",
    sources: {
      ema: { title: "European Union herbal monograph on Calendula officinalis L., flos, Revision 1 (EMA/HMPC/437450/2017)", organization: ORG, publicationDate: "2018-03-27", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-calendula-officinalis-l-flos-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowers are steeped in hot water to make a rinse for the mouth or a wash for the skin, rather than a tea to drink.", source: "ema" },
      { slug: "oil", notes: "The flowers are soaked in a vegetable oil, such as olive oil, to make an oil for the skin.", source: "ema" },
      { slug: "salve", notes: "Ointments and creams are made by extracting the flowers into fat or petroleum jelly, for use on the skin.", source: "ema" },
      { slug: "tincture", notes: "Tinctures (alcohol extracts) of the flowers are used in liquid preparations for the skin.", source: "ema" },
    ],
  },
  {
    name: "Caraway",
    sources: {
      ema: { title: "European Union herbal monograph on Carum carvi L., fructus", organization: ORG, publicationDate: "2015-07-07", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-carum-carvi-l-fructus_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried fruits (often called seeds) are made into an herbal tea.", source: "ema" },
    ],
  },
  {
    name: "Cascara Sagrada",
    sources: {
      ema: { title: "European Union herbal monograph on Rhamnus purshiana DC., cortex, Final – Revision 1 (EMA/HMPC/726270/2016)", organization: ORG, publicationDate: "2020-05-06", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rhamnus-purshiana-dc-cortex-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut bark is made into an herbal tea. Products are standardized to a set amount of their laxative compounds.", source: "ema" },
      { slug: "extract", notes: "Standardized bark preparations are sold as tablets, capsules or liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Cayenne",
    sources: {
      ema: { title: "European Union herbal monograph on Capsicum annuum L. var. minimum (Miller) Heiser and small fruited varieties of Capsicum frutescens L., fructus (EMA/HMPC/674139/2013)", organization: ORG, publicationDate: "2015-05-05", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-capsicum-annuum-l-var-minimum-miller-heiser-and-small-fruited-varieties-capsicum-frutescens-l-fructus_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "salve", notes: "Extracts of the fruit, standardized for capsaicin (the compound that makes chili hot), are used in creams and ointments and in medicated plasters stuck on the skin.", source: "ema" },
    ],
  },
  {
    name: "Chasteberry",
    sources: {
      ema: { title: "Agnus castus fruit (Vitex agnus-castus L., fructus): summary of the HMPC conclusions (EMA/266692/2018)", organization: ORG, publicationDate: "2018-06-05", url: "https://www.ema.europa.eu/en/documents/herbal-summary/agnus-castus-fruit-summary-public_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "The dried, powdered fruit is taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Dry extracts of the fruit are sold in solid or liquid forms to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Cinnamon",
    sources: {
      ema: { title: "Community herbal monograph on Cinnamomum verum J.S. Presl, cortex (EMA/HMPC/246774/2009)", organization: ORG, publicationDate: "2011-05-10", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/community-herbal-monograph-cinnamomum-verum-js-presl-cortex_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut bark is made into an herbal tea.", source: "ema" },
      { slug: "tincture", notes: "Cinnamon bark tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Liquid extracts of the bark are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Cloves",
    sources: {
      ema: { title: "Community herbal monograph on Syzygium aromaticum (L.) Merill et L.M. Perry, floris aetheroleum (EMA/HMPC/534924/2010)", organization: ORG, publicationDate: "2011-09-13", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-syzygium-aromaticum-l-merill-et-l-m-perry-floris-aetheroleum_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "essential-oil", notes: "Clove oil, made by steam-distilling the dried flower buds, is used in liquid preparations for the teeth and mouth.", source: "ema" },
    ],
  },
  {
    name: "Comfrey",
    sources: {
      ema: { title: "European Union herbal monograph on Symphytum officinale L., radix", organization: ORG, publicationDate: "2024-01-31", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-symphytum-officinale-l-radix_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "salve", notes: "An alcohol extract of the root is made into creams and ointments for use on the skin.", source: "ema" },
    ],
  },
  {
    name: "Da Huang",
    sources: {
      ema: { title: "European Union herbal monograph on Rheum palmatum L. and Rheum officinale Baillon, radix, Final – Revision 1 (EMA/HMPC/113700/2019)", organization: ORG, publicationDate: "2020-05-06", url: "https://ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rheum-palmatum-l-rheum-officinale-baillon-radix-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea. Products are standardized to a set amount of their laxative compounds.", source: "ema" },
      { slug: "extract", notes: "Standardized root preparations are sold as tablets, capsules or liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Dandelion",
    sources: {
      ema: { title: "Community herbal monograph on Taraxacum officinale Weber ex Wigg., radix cum herba (EMA/HMPC/212895/2008)", organization: ORG, publicationDate: "2011-01-28", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-taraxacum-officinale-weber-ex-wigg-radix-cum-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried root and leaves together are made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts, and juice pressed from the fresh plant, are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Devil's Claw",
    sources: {
      ema: { title: "European Union herbal monograph on Harpagophytum procumbens DC. and/or Harpagophytum zeyheri Decne., radix (EMA/HMPC/627057/2015)", organization: ORG, publicationDate: "2016-07-12", url: "https://ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-harpagophytum-procumbens-dc/harpagophytum-zeyheri-decne-radix_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered root is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Dry, soft and liquid extracts of the root are sold as tablets, capsules or liquids.", source: "ema" },
    ],
  },
  {
    name: "Elderberry",
    sources: {
      ema: { title: "European Union herbal monograph on Sambucus nigra L., flos, Revision 1 (EMA/HMPC/611512/2016)", organization: ORG, publicationDate: "2018-06-27", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-sambucus-nigra-l-flos-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The European Medicines Agency's monograph covers elder flowers, not the berries. The dried flowers are made into an herbal tea.", source: "ema" },
      { slug: "tincture", notes: "Tinctures (alcohol extracts) of elder flowers are taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Liquid extracts of elder flowers are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "English Plantain",
    sources: {
      ema: { title: "European Union herbal monograph on Plantago lanceolata L., folium, Revision 1 (EMA/HMPC/887979/2022)", organization: ORG, publicationDate: "2025-07-09", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-plantaginis-lanceolatae-folium-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea to drink or to use in the mouth, for example as a gargle.", source: "ema" },
    ],
  },
  {
    name: "Eucalyptus",
    sources: {
      ema: { title: "Community herbal monograph on Eucalyptus globulus Labill., folium (EMA/HMPC/892618/2011)", organization: ORG, publicationDate: "2013-04-19", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-eucalyptus-globulus-labill-folium_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea, or steeped in hot water so the steam can be breathed in.", source: "ema" },
      { slug: "tincture", notes: "Eucalyptus leaf tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Fennel",
    sources: {
      ema: { title: "European Union herbal monograph on Foeniculum vulgare Miller subsp. vulgare var. dulce (Mill.) Batt. & Trab., fructus — Final, Revision 1 (EMEA/HMPC/372839/2016)", organization: ORG, publicationDate: "2024-01-31", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-foeniculum-vulgare-miller-subsp-vulgare-var-dulce-mill-batt-trab-fructus-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried fruits (often called seeds) are made into an herbal tea.", source: "ema" },
    ],
  },
  {
    name: "Feverfew",
    sources: {
      ema: { title: "European Union herbal monograph on Tanacetum parthenium (L.) Schultz Bip., herba", organization: ORG, publicationDate: "2020-07-08", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-tanacetum-parthenium-l-schulz-bip-herba-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "The powdered dried plant is taken by mouth in tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Garlic",
    sources: {
      ema: { title: "European Union herbal monograph on Allium sativum L., bulbus (EMA/HMPC/7685/2013)", organization: ORG, publicationDate: "2017-07-18", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-allium-sativum-l-bulbus_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "Powdered dried garlic is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "An oil extract of fresh garlic (made with rapeseed oil) and an alcohol-based dry extract are taken by mouth in tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Ginkgo",
    sources: {
      ema: { title: "Ginkgo leaf: Herbal medicine summary for the public (EMA/324406/2015)", organization: ORG, publicationDate: "2015-11-19", url: "https://www.ema.europa.eu/en/documents/herbal-summary/ginkgo-leaf-summary-public_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "powder", notes: "The powdered dried leaf is taken by mouth.", source: "ema" },
      { slug: "extract", notes: "A specific dry extract of the leaf, made with acetone, is sold in solid and liquid forms to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Goldenrod",
    sources: {
      ema: { title: "Community herbal monograph on Solidago virgaurea L., herba", organization: ORG, publicationDate: "2008-09-04", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-solidago-virgaurea-l-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowering plant is made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Preparations of the plant are sold as tablets, capsules or liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Grape Leaf",
    sources: {
      ema: { title: "European Union herbal monograph on Vitis vinifera L., folium", organization: ORG, publicationDate: "2017-05-30", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-vitis-vinifera-l-folium-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "A dry extract of grapevine leaves is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "powder", notes: "The powdered dried leaves are taken by mouth.", source: "ema" },
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea.", source: "ema" },
      { slug: "salve", notes: "Creams and gels made with grapevine leaf extract are applied to the skin.", source: "ema" },
    ],
  },
  {
    name: "Grindelia",
    sources: {
      ema: { title: "Community herbal monograph on Grindelia robusta Nutt., Grindelia squarrosa (Pursh) Dunal, Grindelia humilis Hook. et Arn., Grindelia camporum Greene, herba (EMA/HMPC/748220/2011)", organization: ORG, publicationDate: "2013-03-11", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-grindelia-robusta-nutt-grindelia-squarrosa-pursh-dunal-grindelia-humilis-hook-et-arn-grindelia-camporum-greene-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowering tops are made into an herbal tea.", source: "ema" },
      { slug: "tincture", notes: "Grindelia tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Liquid extracts of the plant are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Hawthorn",
    sources: {
      ema: { title: "European Union herbal monograph on Crataegus spp., folium cum flore (EMA/HMPC/159075/2014)", organization: ORG, publicationDate: "2016-04-05", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-crataegus-spp-folium-cum-flore_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves and flowers are made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered leaves and flowers are taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts, and juice pressed from the fresh leaves and flowers, are taken by mouth.", source: "ema" },
      { slug: "tincture", notes: "Hawthorn tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Hops",
    sources: {
      ema: { title: "Community herbal monograph on Humulus lupulus L., flos", organization: ORG, publicationDate: "2014-05-06", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-humulus-lupulus-l-flos_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut hop cones (the flowers) are made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered hop cones are taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts of hop cones are taken by mouth.", source: "ema" },
      { slug: "tincture", notes: "Hop tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Horehound",
    sources: {
      ema: { title: "Community herbal monograph on Marrubium vulgare L., herba (EMA/HMPC/604271/2012)", organization: ORG, publicationDate: "2013-08-01", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-marrubium-vulgare-l-herba-first-version_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowering plant is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered plant is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Liquid extracts, and juice pressed from the fresh plant, are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Horsetail",
    sources: {
      ema: { title: "European Union herbal monograph on Equisetum arvense L., herba (EMA/HMPC/278091/2015)", organization: ORG, publicationDate: "2016-02-02", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-equisetum-arvense-l-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried above-ground parts are made into an herbal tea, or taken in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts, and juice pressed from the fresh plant, are taken by mouth.", source: "ema" },
      { slug: "decoction", notes: "The dried plant is simmered in water to make a liquid that's applied to the skin.", source: "ema" },
    ],
  },
  {
    name: "Iceland Moss",
    sources: {
      ema: { title: "European Union herbal monograph on Cetraria islandica (L.) Acharius s.l., thallus", organization: ORG, publicationDate: "2014-11-24", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-cetraria-islandica-l-acharius-sl-thallus-first-version_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut lichen is made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Soft extracts are used in products to take by mouth or to use in the mouth.", source: "ema" },
      { slug: "tincture", notes: "Iceland moss tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Lemon Verbena",
    sources: {
      ema: { title: "European Union herbal monograph on Aloysia citrodora Paláu, folium (lemon verbena leaf)", organization: ORG, publicationDate: "2021-01-13", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-aloysia-citrodora-palau-syn-aloysia-triphylla-lher-kuntze-verbena-triphylla-lher-lippia-citriodora-kunth-folium_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea.", source: "ema" },
    ],
  },
  {
    name: "Licorice",
    sources: {
      ema: { title: "European Union herbal monograph on Glycyrrhiza glabra L.; Glycyrrhiza inflata Bat.; Glycyrrhiza uralensis Fisch., radix, Revision 1 (EMA/HMPC/108399/2024)", organization: ORG, publicationDate: "2026-07-20", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-glycyrrhiza-glabra-l-glycyrrhiza-inflata-bat-glycyrrhiza-uralensis-fisch-radix-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Soft extracts of the root are used in liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Linden",
    sources: {
      ema: { title: "Community herbal monograph on Tilia cordata Miller, Tilia platyphyllos Scop., Tilia x vulgaris Heyne or their mixtures, flos (EMA/HMPC/337066/2011)", organization: ORG, publicationDate: "2012-05-22", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-tilia-cordata-miller-tilia-platyphyllos-scop-tilia-x-vulgaris-heyne_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowers are made into an herbal tea.", source: "ema" },
      { slug: "tincture", notes: "Linden flower tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Liquid extracts of the flowers are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Marshmallow Root",
    sources: {
      ema: { title: "European Union herbal monograph on Althaea officinalis L., radix", organization: ORG, publicationDate: "2016-11-04", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-althaea-officinalis-l-radix_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut root is made into an herbal tea.", source: "ema" },
      { slug: "syrup", notes: "The root is soaked in cold water and the liquid made into a syrup.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts of the root are taken by mouth or used in the mouth. The root can also be soaked in cold water to make a liquid for the mouth and throat.", source: "ema" },
    ],
  },
  {
    name: "Milk Thistle",
    sources: {
      ema: { title: "Milkthistle fruit (Silybum marianum (L.) Gaertn., fructus): summary of the HMPC conclusions (EMA/415131/2018)", organization: ORG, publicationDate: "2018-06-05", url: "https://www.ema.europa.eu/en/documents/herbal-summary/milkthistle-fruit-summary-public_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, crushed fruit (often called seeds) is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered fruit is taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Soft and dry extracts of the fruit are sold in liquid or solid forms to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Milky Oats",
    sources: {
      ema: { title: "Community herbal monograph on Avena sativa L., herba", organization: ORG, publicationDate: "2008-09-04", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-avena-sativa-l-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried green oat plant is made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Preparations of the plant are sold as tablets, capsules or liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Motherwort",
    sources: {
      ema: { title: "Motherwort (Leonurus cardiaca L., herba): summary of the HMPC conclusions (EMA/165476/2019)", organization: ORG, publicationDate: "2019-05-15", url: "https://www.ema.europa.eu/en/documents/herbal-summary/motherwort-summary-public_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowering parts are made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered flowering parts are taken by mouth.", source: "ema" },
      { slug: "extract", notes: "Liquid extracts of the plant are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Mullein",
    sources: {
      ema: { title: "European Union herbal monograph on Verbascum thapsus L., V. densiflorum Bertol. and V. phlomoides L., flos", organization: ORG, publicationDate: "2018-03-27", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-verbascum-thapsus-l-v-densiflorum-bertol-v-thapsiforme-schrad-and-v-phlomoides-l-flos_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowers are made into an herbal tea.", source: "ema" },
    ],
  },
  {
    name: "Nettle",
    sources: {
      ema: { title: "Community herbal monograph on Urtica dioica L.; Urtica urens L., folium", organization: ORG, publicationDate: "2010-01-14", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-urtica-dioica-l-urtica-urens-l-folium_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves are made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts of the leaves are sold as tablets, capsules or liquids to take by mouth.", source: "ema" },
    ],
  },
  {
    name: "Olive Leaf",
    sources: {
      ema: { title: "European Union herbal monograph on Olea europaea L., folium", organization: ORG, publicationDate: "2017-01-31", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-olea-europaea-l-folium-first-version_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves are made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered dried leaves are taken by mouth in tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Passion Flower",
    sources: {
      ema: { title: "Community herbal monograph on Passiflora incarnata L., herba (EMA/HMPC/669740/2013)", organization: ORG, publicationDate: "2014-03-25", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-passiflora-incarnata-l-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut plant is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered plant is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts of the plant are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Raspberry Leaf",
    sources: {
      ema: { title: "Raspberry leaf (Rubus idaeus L., folium): summary of the HMPC conclusions (EMA/237849/2017)", organization: ORG, publicationDate: "2017-05-30", url: "https://www.ema.europa.eu/en/documents/herbal-summary/raspberry-leaf-summary-public_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea to drink, or steeped to apply to the lining of the mouth.", source: "ema" },
      { slug: "extract", notes: "Dry extracts of the leaves are taken by mouth in solid forms such as tablets.", source: "ema" },
    ],
  },
  {
    name: "Rhodiola Rosea",
    sources: {
      ema: { title: "European Union herbal monograph on Rhodiola rosea L., rhizoma et radix, Final – Revision 1 (EMA/HMPC/24177/2023)", organization: ORG, publicationDate: "2024-03-20", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rhodiola-rosea-l-rhizoma-et-radix-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "A dry extract of the root is taken by mouth in tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Rosemary",
    sources: {
      ema: { title: "European Union herbal monograph on Rosmarinus officinalis L., folium", organization: ORG, publicationDate: "2024-05-29", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-rosmarinus-officinalis-l-folium-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves are made into an herbal tea to drink, or added to bath water.", source: "ema" },
    ],
  },
  {
    name: "Sage",
    sources: {
      ema: { title: "European Union herbal monograph on Salvia officinalis L., folium", organization: ORG, publicationDate: "2016-09-20", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-salvia-officinalis-l-folium-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea to drink, or steeped to make a gargle, mouth rinse or skin wash.", source: "ema" },
      { slug: "extract", notes: "Liquid and dry extracts of the leaves are taken by mouth, or used in mouth rinses.", source: "ema" },
      { slug: "tincture", notes: "Sage tinctures (alcohol extracts) are taken by mouth or used in the mouth.", source: "ema" },
      { slug: "salve", notes: "Creams and ointments made with sage leaf extracts are used on the skin or in the mouth.", source: "ema" },
    ],
  },
  {
    name: "Thyme",
    sources: {
      ema: { title: "Community herbal monograph on Thymus vulgaris L. and Thymus zygis L., herba", organization: ORG, publicationDate: "2013-11-12", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-thymus-vulgaris-l-and-thymus-zygis-l-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried plant is made into an herbal tea.", source: "ema" },
      { slug: "extract", notes: "Liquid, soft and dry extracts, and juice pressed from the fresh plant, are taken by mouth.", source: "ema" },
      { slug: "tincture", notes: "Thyme tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Uva Ursi",
    sources: {
      ema: { title: "European Union herbal monograph on Arctostaphylos uva-ursi (L.) Spreng., folium (Revision 2)", organization: ORG, publicationDate: "2018-01-30", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-arctostaphylos-uva-ursi-l-spreng-folium-revision-2_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried, cut leaves are made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered leaves are taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts of the leaves, standardized for arbutin, are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "White Willow",
    sources: {
      ema: { title: "European Union herbal monograph on Salix [various species including S. purpurea L., S. daphnoides Vill., S. fragilis L.], cortex", organization: ORG, publicationDate: "2017-01-31", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-salix-various-species-including-s-purpurea-l-s-daphnoides-vill-s-fragilis-l-cortex_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "extract", notes: "Dry extracts of the bark, standardized to a set amount of salicin, are taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "tea-infusion", notes: "The dried, cut bark is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered bark is taken by mouth in tablets or capsules.", source: "ema" },
    ],
  },
  {
    name: "Witch Hazel",
    sources: {
      ema: { title: "Community herbal monograph on Hamamelis virginiana L., folium (EMA/HMPC/114586/2008)", organization: ORG, publicationDate: "2009-11-12", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-hamamelis-virginiana-l-folium_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "decoction", notes: "The dried, cut leaves are simmered in water to make a liquid for the skin or for rinsing the mouth.", source: "ema" },
      { slug: "salve", notes: "Creams, ointments and gels made with witch hazel leaf are used on the skin and around the anus, for example for hemorrhoids.", source: "ema" },
    ],
  },
  {
    name: "Wormwood",
    sources: {
      ema: { title: "European Union herbal monograph on Artemisia absinthium L., herba", organization: ORG, publicationDate: "2017-07-18", url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-artemisia-absinthium-l-herba_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowering plant is made into an herbal tea.", source: "ema" },
      { slug: "powder", notes: "The powdered plant is taken by mouth in tablets or capsules.", source: "ema" },
      { slug: "tincture", notes: "Wormwood tinctures (alcohol extracts), and juice pressed from the fresh plant, are taken by mouth.", source: "ema" },
    ],
  },
  {
    name: "Yarrow",
    sources: {
      ema: { title: "European Union herbal monograph on Achillea millefolium L., herba (Revision 1)", organization: ORG, publicationDate: "2020-09-23", url: "https://www.ema.europa.eu/en/documents/herbal-opinion/final-european-union-herbal-monograph-achillea-millefolium-l-herba-revision-1_en.pdf", sourceType: G, tier: T1 },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried flowering plant is made into an herbal tea to drink, or steeped to make a wash for the skin.", source: "ema" },
      { slug: "extract", notes: "Dry and liquid extracts, and juice pressed from the fresh plant, are taken by mouth.", source: "ema" },
      { slug: "tincture", notes: "Yarrow tinctures (alcohol extracts) are taken by mouth.", source: "ema" },
    ],
  },
);
