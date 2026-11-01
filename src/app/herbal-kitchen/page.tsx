import type { Metadata } from "next";
import { publishedVideos } from "@/content/herbal-kitchen/videos";
import { VideoPlayer } from "@/components/herbal-kitchen/video-player";
import { RecipeCardImage } from "@/components/herbal-kitchen/recipe-card-image";
import { RecipeActions } from "@/components/herbal-kitchen/recipe-actions";
import { ShopTheRecipe } from "@/components/herbal-kitchen/shop-the-recipe";
import { VideoLibrary } from "@/components/herbal-kitchen/video-library";
import { Sprig } from "@/components/herbal-kitchen/sprig";

export const metadata: Metadata = {
  title: "The Herbal Kitchen: Herbal Recipes & Botanical Videos",
  description:
    "Welcome to The Herbal Kitchen, where botanical traditions meet delicious creations. Watch herbal recipe videos, explore fascinating plants, and bring nature into your kitchen.",
  openGraph: {
    title: "The Herbal Kitchen · HerbsSearch",
    description: "Herbal recipe videos, botanical education and a little apothecary fun.",
    images: [{ url: "/herbal-kitchen/elderberry-gummies-poster.jpg", width: 1600, height: 900 }],
  },
};

export default function HerbalKitchenPage() {
  const videos = publishedVideos();
  const featured = videos[0];

  return (
    <main className="flex flex-1 flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(ellipse_at_top,#fffaf0_0%,var(--background)_55%,var(--surface)_100%)] dark:bg-none">
        <Sprig className="pointer-events-none absolute -left-12 -top-4 h-28 w-28 text-[var(--accent)] opacity-35 sm:-left-6 sm:top-6 sm:h-56 sm:w-56 sm:opacity-60" />
        <Sprig flip className="pointer-events-none absolute -right-12 -top-4 h-28 w-28 text-[var(--accent)] opacity-35 sm:-right-6 sm:top-6 sm:h-56 sm:w-56 sm:opacity-60" />
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 py-16 text-center sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--highlight)]">HerbsSearch presents</p>
          <h1 className="font-serif text-5xl leading-tight text-[var(--foreground)] sm:text-6xl">The Herbal Kitchen</h1>
          <p className="font-serif text-2xl italic text-[var(--accent)] sm:text-3xl">Where Nature Meets Nourishment</p>
          <div className="my-1 flex items-center gap-3 text-[var(--border)]" aria-hidden="true">
            <span className="h-px w-16 bg-current" />
            <span className="text-[var(--highlight)]">❦</span>
            <span className="h-px w-16 bg-current" />
          </div>
          <p className="max-w-2xl text-[17px] leading-relaxed text-[var(--foreground)]/85">
            Welcome to The Herbal Kitchen, where botanical traditions meet delicious creations. Discover herbal recipes, explore
            fascinating plants, and learn how to bring nature into your kitchen—one delightful recipe at a time.
          </p>
        </div>
      </section>

      {/* FEATURED VIDEO + RECIPE CARD */}
      {featured && (
        <section className="border-b border-[var(--border)]" aria-labelledby="featured-title">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12 sm:py-16">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--highlight)]">Featured video</p>
              <h2 id="featured-title" className="font-serif text-4xl text-[var(--foreground)]">
                {featured.title}
              </h2>
            </div>
            <VideoPlayer video={featured.video} title={featured.title} priority />
            <p className="max-w-3xl text-[17px] leading-relaxed text-[var(--foreground)]/85">{featured.description}</p>

            {featured.recipeCard && (
              <div className="mt-4 flex flex-col gap-4">
                <RecipeCardImage card={featured.recipeCard} title={featured.title} />
                {featured.recipe && (
                  <RecipeActions
                    recipeHref={`/herbal-kitchen/${featured.slug}#recipe`}
                    printHere={false}
                    shopHref={featured.shop?.length ? "#shop-the-recipe" : undefined}
                  />
                )}
              </div>
            )}

            {featured.shop && featured.shop.length > 0 && (
              <div className="mt-8">
                <ShopTheRecipe ingredients={featured.shop} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* VIDEO LIBRARY */}
      <section className="bg-[var(--surface)]/60" aria-labelledby="library-title">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12 sm:py-16">
          <div className="flex flex-col gap-2">
            <h2 id="library-title" className="font-serif text-4xl text-[var(--foreground)]">
              The Video Library
            </h2>
            <p className="max-w-2xl text-[15px] text-[var(--muted)]">
              Recipes, herb spotlights, apothecary tips and a peek behind the counter, with our herbalist and Cuervo, the
              apothecary&apos;s self-appointed taste tester.
            </p>
          </div>
          <VideoLibrary videos={videos} />
        </div>
      </section>
    </main>
  );
}
