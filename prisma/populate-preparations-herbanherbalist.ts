import { run } from "./lib/populate-herb";

// Preparations from Herban Herbalist's materia medica (herbanherbalist.com), herb
// profiles by Bonnie Landsee, Certified Master Herbalist, drawing on herbal books
// by Michael Tierra and David Hoffmann. Cited as a secondary source from a shop
// that sells herbs. Only preparation types each page didn't have yet are added.
// Left out: spiritual and folk-magic uses, smoking, mullein ear oil, oregano oil
// under the tongue, cautions we couldn't confirm elsewhere, and profiles of a
// different species (Plantain, Frankincense) or a mismatched herb (Horny Goat Weed).

const SHOP = "Herban Herbalist (herb shop)";

run(
  {
    name: "Angelica",
    sources: {
      hh: { title: "Angelica — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/angelica/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the dried root in a cup of water for 2 minutes, then steep it covered for 15 minutes.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "poultice", notes: "A compress made with the leaves is applied to the chest.", source: "hh" },
    ],
  },
  {
    name: "Arnica",
    sources: {
      hh: { title: "Arnica — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/arnica/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "oil", notes: "An infused oil or liniment is applied with a clean cloth to unbroken skin only. It's for external use only.", source: "hh" },
    ],
  },
  {
    name: "Artichoke Leaf",
    sources: {
      hh: { title: "Artichoke — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/artichoke/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Basil",
    sources: {
      hh: { title: "Basil — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/basil/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "poultice", notes: "Fresh leaves are applied to insect bites and stings.", source: "hh" },
    ],
  },
  {
    name: "Black Cohosh",
    sources: {
      hh: { title: "Black Cohosh — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/black-cohosh/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the dried root in a cup of water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Burdock",
    sources: {
      hh: { title: "Burdock — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/burdock/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "poultice", notes: "Herbalists apply it externally as a poultice for skin conditions.", source: "hh" },
    ],
  },
  {
    name: "Catnip",
    sources: {
      hh: { title: "Catnip — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/catnip/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Cayenne",
    sources: {
      hh: { title: "Cayenne Pepper — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/cayenne-pepper/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "culinary-preparation", notes: "Cayenne is a common kitchen spice, and herbalists add it to drinks such as lemon water.", source: "hh" },
      { slug: "capsule", notes: "The powder is also put into capsules.", source: "hh" },
    ],
  },
  {
    name: "Chamomile",
    sources: {
      hh: { title: "Chamomile — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/chamomile/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Chasteberry",
    sources: {
      hh: { title: "Chaste Tree — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/chaste-tree/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep about 1 teaspoon of the berries in a cup of boiling water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "capsule", notes: "Capsules, tinctures and liquid extracts are sold commercially. Herbalists say it takes at least 3 menstrual cycles to have its full effect.", source: "hh" },
    ],
  },
  {
    name: "Chickweed",
    sources: {
      hh: { title: "Chickweed — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/chickweed/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of the dried herb in a cup of boiling water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "poultice", notes: "An infused oil or a poultice is applied to rashes and other skin conditions.", source: "hh" },
    ],
  },
  {
    name: "Cinnamon",
    sources: {
      hh: { title: "Cinnamon — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/cinnamon/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Cinnamon is a common kitchen spice. Herbalists prefer Ceylon cinnamon for regular use, because cassia cinnamon contains much more coumarin, which can harm the liver at high doses over time.", source: "hh" },
    ],
  },
  {
    name: "Damiana",
    sources: {
      hh: { title: "Damiana — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/damiana/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Dandelion",
    sources: {
      hh: { title: "Dandelion — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/dandelion/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "decoction", notes: "The root is simmered in water as a decoction, and the roasted root is used as a caffeine-free coffee substitute.", source: "hh" },
    ],
  },
  {
    name: "Dill",
    sources: {
      hh: { title: "Dill — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/dill/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of gently crushed seeds in a cup of boiling water, often before meals for gas.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Dong Quai",
    sources: {
      hh: { title: "Dong quai — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/dong-quai/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the root in a cup of water for 2 minutes, then steep it covered for 15 minutes. Wine infusions are a traditional Chinese preparation.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "capsule", notes: "It's also commonly taken as capsules.", source: "hh" },
    ],
  },
  {
    name: "Echinacea",
    sources: {
      hh: { title: "Echinacea — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/echinacea/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists use an infusion in small, frequent amounts at the first sign of illness, rather than as a long-term daily supplement.", source: "hh" },
      { slug: "tincture", notes: "Herbalists also use it as a tincture, taken often at the start of symptoms.", source: "hh" },
    ],
  },
  {
    name: "Elderberry",
    sources: {
      hh: { title: "Elder — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/elder/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "syrup", notes: "Elderberry syrup is one of the most common preparations.", source: "hh" },
    ],
  },
  {
    name: "Elecampane",
    sources: {
      hh: { title: "Elecampane — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/elecampane/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists also prepare it as a tincture, lozenges or capsules.", source: "hh" },
      { slug: "syrup", notes: "It's also made into a syrup.", source: "hh" },
    ],
  },
  {
    name: "Eucalyptus",
    sources: {
      hh: { title: "Eucalyptus — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/eucalyptus/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "essential-oil", notes: "The essential oil is diluted in a carrier oil and rubbed on the chest, or a few drops are added to hot water to breathe in the steam.", source: "hh" },
    ],
  },
  {
    name: "Feverfew",
    sources: {
      hh: { title: "Feverfew — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/feverfew/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of the herb in a cup of boiling water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Fo-Ti",
    sources: {
      hh: { title: "Fo-Ti — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/fo-ti/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Garlic",
    sources: {
      hh: { title: "Garlic — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/garlic/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "Garlic is added to food when cooking.", source: "hh" },
      { slug: "syrup", notes: "Chopped garlic is infused in raw honey, or in apple cider vinegar for a longer shelf life.", source: "hh" },
    ],
  },
  {
    name: "Ginger",
    sources: {
      hh: { title: "Ginger — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/ginger/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons in a cup of boiling water, and use it as a gargle for sore throats.", source: "hh" },
      { slug: "decoction", notes: "The dried root is also simmered in water as a decoction.", source: "hh" },
      { slug: "culinary-preparation", notes: "Fresh or dried ginger is added to food and drinks. Dried ginger is much stronger than fresh.", source: "hh" },
    ],
  },
  {
    name: "Ginkgo",
    sources: {
      hh: { title: "Gingko Biloba — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/gingko-biloba/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture over at least 3 months.", source: "hh" },
      { slug: "tea-infusion", notes: "A tea is made from the dried leaves. Only the leaves are used medicinally; the nuts are mildly toxic raw.", source: "hh" },
    ],
  },
  {
    name: "Ginseng",
    sources: {
      hh: { title: "Ginseng — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/ginseng/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the dried root in a cup of water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Goldenseal",
    sources: {
      hh: { title: "Goldenseal — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/goldenseal/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "oil", notes: "The powdered root is infused in oil, made into a salve, or used as a wash for skin conditions and wounds.", source: "hh" },
    ],
  },
  {
    name: "Gotu Kola",
    sources: {
      hh: { title: "Gotu Kola — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/gotu-kola/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "capsule", notes: "Standardized extract capsules are also used.", source: "hh" },
      { slug: "culinary-preparation", notes: "The fresh leaves are traditionally eaten in salads in Sri Lanka and parts of Southeast Asia.", source: "hh" },
    ],
  },
  {
    name: "Hyssop",
    sources: {
      hh: { title: "Hyssop — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/hyssop/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of the dried herb in a cup of boiling water, and advise against large doses or long-term use.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Lemon Balm",
    sources: {
      hh: { title: "Lemon Balm — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/lemon-balm/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "oil", notes: "An infused oil is applied to cold sores and shingles sores.", source: "hh" },
    ],
  },
  {
    name: "Lemongrass",
    sources: {
      hh: { title: "Lemon Grass — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/lemon-grass/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "essential-oil", notes: "The essential oil is diluted in a carrier oil before it's put on the skin, and is used as an insect repellent.", source: "hh" },
    ],
  },
  {
    name: "Licorice",
    sources: {
      hh: { title: "Licorice — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/licorice/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the dried root in a cup of water. The root is also added to tea blends for sweetness.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Maca",
    sources: {
      hh: { title: "Maca — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/maca/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "powder", notes: "The powdered root is mixed into foods and drinks such as smoothies and oatmeal.", source: "hh" },
      { slug: "capsule", notes: "It's also taken as capsules.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Marshmallow Root",
    sources: {
      hh: { title: "Marsh Mallow — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/marsh-mallow/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the root in a cup of water for 10 to 15 minutes. A cold infusion helps keep its slimy mucilage.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "poultice", notes: "The root or leaf is applied as a poultice for skin irritation.", source: "hh" },
    ],
  },
  {
    name: "Milk Thistle",
    sources: {
      hh: { title: "Milk Thistle — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/milk-thistle/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Milky Oats",
    sources: {
      hh: { title: "Oats — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/oats/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture, best made from the fresh milky oat tops.", source: "hh" },
    ],
  },
  {
    name: "Motherwort",
    sources: {
      hh: { title: "Motherwort — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/motherwort/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Mugwort",
    sources: {
      hh: { title: "Mugwort — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/mugwort/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of the herb in a cup of boiling water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Mullein",
    sources: {
      hh: { title: "Mullein — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/mullein/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "poultice", notes: "A warm leaf wrap is applied to the skin, wrapped in muslin or cheesecloth if the skin is sensitive.", source: "hh" },
    ],
  },
  {
    name: "Nettle",
    sources: {
      hh: { title: "Nettles — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/nettles/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Oregano",
    sources: {
      hh: { title: "Oregano — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/oregano/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of the dried herb in a cup of boiling water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Passion Flower",
    sources: {
      hh: { title: "Passionflower — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/passionflower/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Pleurisy Root",
    sources: {
      hh: { title: "Pleurisy Root — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/pleurisy-root/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the root in a cup of water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Red Clover",
    sources: {
      hh: { title: "Red Clover — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/red-clover/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "tea-infusion", notes: "Herbalists steep about 1 teaspoon of the dried blossoms or leaves in a cup of boiling water.", source: "hh" },
      { slug: "culinary-preparation", notes: "The fresh or dried flowers are edible and slightly sweet.", source: "hh" },
    ],
  },
  {
    name: "Rhodiola Rosea",
    sources: {
      hh: { title: "Rhodiola — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/rhodiola/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the root in a cup of water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Rosemary",
    sources: {
      hh: { title: "Rosemary — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/rosemary/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "oil", notes: "An infused oil is added to shampoo for scalp massage.", source: "hh" },
      { slug: "essential-oil", notes: "The essential oil is breathed in with steam, or diluted and rubbed on the scalp. Herbalists warn not to swallow it.", source: "hh" },
    ],
  },
  {
    name: "Sarsaparilla",
    sources: {
      hh: { title: "Sarsaparilla — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/sarsaparilla/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture, and advise avoiding large doses.", source: "hh" },
    ],
  },
  {
    name: "Shatavari",
    sources: {
      hh: { title: "Shatavari — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/shatavari/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the root in a cup of water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "powder", notes: "The root is powdered and taken in capsules.", source: "hh" },
    ],
  },
  {
    name: "Skullcap",
    sources: {
      hh: { title: "Skullcap — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/skullcap/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "Slippery Elm",
    sources: {
      hh: { title: "Slippery Elm — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/slippery-elm/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "decoction", notes: "Herbalists simmer 1 to 2 teaspoons of the dried inner bark in a cup of water for 10 to 15 minutes; the decoction can be made into a cough syrup.", source: "hh" },
      { slug: "poultice", notes: "The dried bark is mixed with a little boiling water into a paste and applied to wounds, sores and minor burns.", source: "hh" },
    ],
  },
  {
    name: "Spearmint",
    sources: {
      hh: { title: "Spearmint — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/spearmint/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "Herbalists steep 1 to 2 teaspoons of the herb in a cup of boiling water.", source: "hh" },
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
  {
    name: "St. John's Wort",
    sources: {
      hh: { title: "St. John's Wort — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/st-johns-wort/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "salve", notes: "The flowers are made into a salve for bruises, burns and nerve pain.", source: "hh" },
    ],
  },
  {
    name: "Thyme",
    sources: {
      hh: { title: "Thyme — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/thyme/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "syrup", notes: "Thyme syrup is taken for colds and coughs.", source: "hh" },
    ],
  },
  {
    name: "Turmeric",
    sources: {
      hh: { title: "Turmeric — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/turmeric/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "culinary-preparation", notes: "The powdered root is added to foods, teas and golden milk.", source: "hh" },
    ],
  },
  {
    name: "Uva Ursi",
    sources: {
      hh: { title: "Uva Ursi (Bearberry) — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/uva-ursi/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
      { slug: "capsule", notes: "It's also taken as capsules or a standardized extract.", source: "hh" },
    ],
  },
  {
    name: "Valerian",
    sources: {
      hh: { title: "Valerian — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/valerian/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture, taken before sleep.", source: "hh" },
    ],
  },
  {
    name: "Yarrow",
    sources: {
      hh: { title: "Yarrow — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/yarrow/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "poultice", notes: "The fresh or dried herb is applied to wounds to help stop bleeding.", source: "hh" },
    ],
  },
  {
    name: "Yellow Dock",
    sources: {
      hh: { title: "Yellow Dock — Herban Herbalist materia medica", author: "Landsee B", organization: SHOP, url: "https://herbanherbalist.com/yellow-dock/", sourceType: "secondary", tier: "TIER_5_SECONDARY" },
    },
    preparations: [
      { slug: "tincture", notes: "Herbalists use it as a tincture.", source: "hh" },
    ],
  },
);
