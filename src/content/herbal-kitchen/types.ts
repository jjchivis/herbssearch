// Content model for The Herbal Kitchen. Every video, and the recipe or article
// that goes with it, is one KitchenVideo entry in ./videos.ts. Pages, the video
// library, related videos and structured data are all generated from these
// entries, so a new video only needs a new entry (and its media files).

export const KITCHEN_CATEGORIES = [
  {
    slug: "visual-recipes",
    label: "Visual Recipes",
    description: "Step-by-step herbal recipes, gummies, teas, syrups, culinary creations, and botanical preparations.",
  },
  {
    slug: "herb-spotlights",
    label: "Herb Spotlights",
    description:
      "Educational videos exploring individual herbs, their botanical characteristics, traditional uses, research, and safety.",
  },
  {
    slug: "apothecary-tips",
    label: "Apothecary Tips",
    description: "Practical demonstrations about herb preparation, storage, equipment, and everyday herbal techniques.",
  },
  {
    slug: "behind-the-scenes",
    label: "Behind the Scenes",
    description: "Entertaining content featuring our animated herbalist, Cuervo the Chihuahua, and the HerbsSearch apothecary.",
  },
] as const;

export type KitchenCategory = (typeof KITCHEN_CATEGORIES)[number]["slug"];

export type KitchenSource = { label: string; url: string };

export type RecipeIngredient = {
  quantity: string;
  item: string;
  /** Extra detail shown after the item, e.g. "(see the safety note)". */
  note?: string;
};

export type RecipeStep = { title: string; text: string };

export type KitchenRecipe = {
  /**
   * Only recipes the site owner has approved are published as structured
   * recipe data (Schema.org Recipe). Unapproved text shows a "draft" notice.
   */
  approved: boolean;
  yield?: string;
  /** ISO 8601 durations for structured data, plus plain labels for people. */
  times: { label: string; iso: string; text: string }[];
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  storage: string[];
  safety: string[];
  sources: KitchenSource[];
};

export type ShopIngredient = {
  /** Name shown on the card. */
  name: string;
  /** Exact Herbal Library herb name, when the ingredient has an entry. */
  herbName?: string;
  description: string;
};

export type KitchenVideo = {
  slug: string;
  title: string;
  /** One or two sentences for cards, page intros and metadata. */
  description: string;
  category: KitchenCategory;
  published: boolean;
  publishedAt: string;
  durationSeconds: number;
  video: {
    /** Absolute URL of the hosted file (e.g. Vercel Blob). */
    src: string;
    type: "video/mp4";
    poster: { src: string; alt: string };
    /** WebVTT captions, only from a verified transcript. */
    captionsSrc?: string;
  };
  recipeCard?: { src: string; alt: string; width: number; height: number };
  recipe?: KitchenRecipe;
  /** Herbal Library entries mentioned in the video, by exact herb name. */
  herbNames: string[];
  shop?: ShopIngredient[];
};
