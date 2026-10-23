import { run } from "./lib/populate-herb";

// Herbal-practice notes from Chestnut School of Herbal Medicine profiles
// (chestnutherbs.com), cited as a secondary source. These describe how herbalists
// use each plant, not tested results, and are labeled that way. Drug interactions
// and pregnancy warnings in these posts were checked separately against primary
// sources (see populate-pregnancy-crosscheck.ts). Left out on purpose: lemon balm
// tea while breastfeeding (the page's sources call it unsafe then) and passion
// flower as safe in pregnancy (the page's source advises against it).

const C = "Chestnut School of Herbal Medicine";
const sec = { organization: C, sourceType: "secondary" as const, tier: "TIER_5_SECONDARY" as const };
const NOTE = "These uses come from herbal practice and haven't been tested in clinical trials.";

run(
  {
    name: "Calendula",
    sources: {
      skin: {
        title: "Calendula's Benefits for the Skin: How to Make Calendula Oil and Salve",
        author: "Blankespoor J",
        publicationDate: "2019-06-26",
        url: "https://chestnutherbs.com/topical-uses-of-calendula/",
        ...sec,
      },
      tea: {
        title: "Herbal Digestive Calendula Tea: A Remedy for Heartburn and Peptic Ulcers",
        author: "Blankespoor J",
        publicationDate: "2019-07-10",
        url: "https://chestnutherbs.com/calendula-tea-for-heartburn-and-peptic-ulcers/",
        ...sec,
      },
      grow: {
        title: "How to Grow Calendula & Use Its Medicine",
        author: "Blankespoor J",
        publicationDate: "2012-11-15",
        url: "https://chestnutherbs.com/how-to-grow-calendula-and-use-its-medicine/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          `Herbalists use calendula oil, salve, compresses and washes on the skin for rashes, stings, insect bites, scrapes, burns, sunburn, bruises, eczema, acne, cold sores, diaper rash, cracked nipples from breastfeeding and tears from childbirth. They recommend using the whole flower head, including the green base, because that's where most of the resin is; "petals only" products are weaker. ${NOTE}`,
        source: "skin",
      },
      {
        category: "TRADITIONAL",
        summary:
          `Herbalists give calendula tea for heartburn and acid reflux, stomach ulcers (alongside antibiotics when the ulcer is caused by H. pylori bacteria) and inflammatory bowel disease, often mixed with licorice, slippery elm, marshmallow root and meadowsweet. ${NOTE}`,
        source: "tea",
      },
      {
        category: "TRADITIONAL",
        summary:
          `Herbalists also use calendula tea for swollen lymph nodes from colds, throat infections and tonsillitis, and add it to mouthwashes for gum disease, thrush and bleeding gums. In medieval Europe the flowers were added to bread, broths and syrups, and the herbalist Nicholas Culpeper described them as a "comforter of the heart and spirits". ${NOTE}`,
        source: "grow",
      },
    ],
    safety: [
      {
        category: "CONTRAINDICATION",
        description:
          "Herbalists advise against oils and salves (including calendula oil) on weeping or infected skin, fresh burns or sunburn, poison ivy rashes, pimples, boils and deep cuts, because oils hold in heat and moisture. Use water-based compresses, soaks or washes instead. Oils can also weaken latex condoms.",
        source: "skin",
      },
    ],
  },
  {
    name: "Witch Hazel",
    sources: {
      folklore: {
        title: "The Folklore and Medicine of Witch Hazel",
        author: "Plantwalker M",
        publicationDate: "2020-01-22",
        url: "https://chestnutherbs.com/the-folklore-and-medicine-of-witch-hazel/",
        ...sec,
      },
      wonders: {
        title: "Witch Hazel Wonders: Cultivation and Herbal Uses",
        author: "Plantwalker M",
        publicationDate: "2019-12-09",
        url: "https://chestnutherbs.com/witch-hazel-wonders-cultivation-and-herbal-uses/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          "Native American nations have used witch hazel in several ways:\n- The Iroquois drink a tea of the dried leaves for sore throats, colds and diarrhea\n- The Osage make medicine from the bark for skin sores and ulcers (probably from the related Ozark witch hazel)\n- The Potawatomi use it in sweat lodges\nThe Mohegan are believed to have shown European settlers how to use forked witch hazel branches for dowsing (searching for underground water).",
        source: "folklore",
      },
      {
        category: "TRADITIONAL",
        summary:
          `In Appalachian folk medicine, witch hazel is one of the most widely used remedies. It's put on the skin for poison ivy rash, burns, sunburn, acne, eczema, sore gums, tired muscles, bruises, sprains, insect bites, varicose veins and hemorrhoids. Herbalists also use it in shallow sitz baths for hemorrhoids and soreness after childbirth. ${NOTE}`,
        source: "folklore",
      },
      {
        category: "TRADITIONAL",
        summary:
          "Drugstore witch hazel is made by steam-distilling the twigs and adding alcohol. According to the Chestnut School, it's much weaker than a homemade tea or tincture of the bark, twigs, leaves and buds. Most uses are on the skin, and the authors keep witch hazel tea for use on the outside of the body.",
        source: "wonders",
      },
    ],
  },
  {
    name: "Hibiscus",
    sources: {
      chestnut: {
        title: "The Medicinal Benefits of Hibiscus",
        author: "Blankespoor J",
        publicationDate: "2012-11-23",
        url: "https://chestnutherbs.com/medicinal-benefits-of-hibiscus/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          `In Mexico, roselle hibiscus is valued as a liver and kidney tonic and a traditional weight-loss herb. Herbalists use the tea for colds, mouth sores and sore throats. The calyces (the fleshy red cups often sold as "flowers") are also made into jams, syrups and the drinks called sorrel in the Caribbean and agua de Jamaica in Mexico, and the sour young leaves are eaten as a vegetable. ${NOTE}`,
        source: "chestnut",
      },
    ],
    safety: [
      {
        category: "ADVERSE_EFFECT",
        description: "Hibiscus is generally considered safe, but its sourness can make heartburn worse.",
        source: "chestnut",
      },
    ],
  },
  {
    name: "Lemon Balm",
    sources: {
      chestnut: {
        title: "The Medicinal Benefits of Lemon Balm",
        author: "Blankespoor J",
        publicationDate: "2022-05-26",
        url: "https://chestnutherbs.com/the-medicinal-benefits-of-lemon-balm/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          `Lemon balm has long been called the "gladdening herb", and the Swiss physician Paracelsus called it "the elixir of life". Herbalists consider tea the best way to take it, and use it for tension headaches, anxiety, trouble sleeping and restlessness, and for gas and bloating, especially when linked to stress. It also goes into the centuries-old skin toner known as Queen of Hungary's Water. ${NOTE}`,
        source: "chestnut",
      },
    ],
  },
  {
    name: "Lavender",
    sources: {
      chestnut: {
        title: "Lavender's Medicinal and Aromatherapy Uses and Lavender Truffles",
        author: "Blankespoor J",
        publicationDate: "2012-12-13",
        url: "https://chestnutherbs.com/lavenders-medicinal-and-aromatherapy-uses-and-lavender-truffles/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          `Herbalists use lavender tea to lift the mood and ease grief and stress, and for gas, irritable bowel syndrome and nausea. It's a traditional headache remedy, drunk as tea or with the oil rubbed into the temples. On the skin, a strong lavender tea is used in sitz baths to help heal tears from childbirth, and the oil is dabbed on cleaned scrapes and cuts. Much of the ancient Greek use was of French lavender (Lavandula stoechas), not English lavender. ${NOTE}`,
        source: "chestnut",
      },
    ],
  },
  {
    name: "Nettle",
    sources: {
      chestnut: {
        title: "Stinging Nettles Medicinal Benefits & My Famous Nettles Pâté Recipe",
        author: "Blankespoor J",
        publicationDate: "2022-03-30",
        url: "https://chestnutherbs.com/stinging-nettles-medicinal-benefits-and-my-famous-nettles-pate-recipe/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          `Nettle is a traditional spring tonic. Herbalists use the leaves as a nourishing tea, vinegar or cooked green, and mix the tea with red clover and burdock for eczema, psoriasis and acne. They note that alcohol tinctures don't carry nettle's minerals, so teas, vinegars and foods are preferred. Gloves and covered arms are needed when picking the fresh plant. ${NOTE}`,
        source: "chestnut",
      },
    ],
  },
  {
    name: "Ashwagandha",
    sources: {
      chestnut: {
        title: "The Medicinal Benefits of Ashwagandha",
        author: "Gemma M",
        publicationDate: "2023-11-02",
        url: "https://chestnutherbs.com/the-medicinal-benefits-of-ashwagandha/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          `Ashwagandha's name means "essence of the horse". It's used in Ayurveda, Siddha and Unani medicine and Indian folk healing, traditionally cooked in milk or ghee (clarified butter). Herbalists give it daily over weeks for stress, poor sleep and tiredness, and alongside cancer treatment to help rebuild strength. Only the root is used; the leaves, stems and berries aren't taken by mouth. ${NOTE}`,
        source: "chestnut",
      },
    ],
    safety: [
      {
        category: "ALLERGY",
        description:
          "Ashwagandha is in the nightshade family, with tomatoes, potatoes and peppers. People who react to nightshades might react to ashwagandha too.",
        source: "chestnut",
      },
    ],
  },
  {
    name: "Passion Flower",
    sources: {
      chestnut: {
        title: "Passionflower: Ecology, Cultivation, Botany, and Medicinal and Edible Uses",
        author: "Blankespoor J",
        publicationDate: "2012-08-10",
        url: "https://chestnutherbs.com/passionflower-ecology-cultivation-botany-and-medicinal-and-edible-uses/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          "Passion flower (also called maypop) is a vine native to the southeastern United States. The Cherokee used the root as a poultice to draw out swelling from thorn wounds, as a tea in the ear for earache, and to wean babies. The Houma made a root tea as a blood tonic. It was introduced into American medicine in 1839 or 1840 by Dr. L. Phares of Mississippi. Today herbalists use the leaves, stems and flowers instead of the root.",
        source: "chestnut",
      },
      {
        category: "TRADITIONAL",
        summary:
          `Herbalists use passion flower for trouble sleeping (especially with racing, repetitive thoughts), anxiety, menstrual cramps, and muscle strains and sprains. ${NOTE}`,
        source: "chestnut",
      },
    ],
    safety: [
      {
        category: "CONTRAINDICATION",
        description:
          "Herbalists advise caution with passion flower if you have a slow heart rate or low blood pressure, or take sleep or anxiety medicines. Use Passiflora incarnata: other passion flower species haven't been used the same way, and some may be toxic.",
        source: "chestnut",
      },
    ],
  },
  {
    name: "Rosehips",
    sources: {
      chestnut: {
        title: "A Love Letter to Rose",
        author: "Drayton AN",
        publicationDate: "2019-09-12",
        url: "https://chestnutherbs.com/a-love-letter-to-rose/",
        ...sec,
      },
    },
    evidence: [
      {
        category: "TRADITIONAL",
        summary: `Rose hips are rich in vitamin C and flavonoids. Herbalists use them for colds, fever and flu, and to help stop diarrhea. ${NOTE}`,
        source: "chestnut",
      },
    ],
  },
);
