import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getVideo, publishedVideos, relatedVideos } from "@/content/herbal-kitchen/videos";
import { KITCHEN_CATEGORIES } from "@/content/herbal-kitchen/types";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VideoPlayer } from "@/components/herbal-kitchen/video-player";
import { RecipeCardImage } from "@/components/herbal-kitchen/recipe-card-image";
import { AutoPrint, RecipeActions } from "@/components/herbal-kitchen/recipe-actions";
import { WrittenRecipe } from "@/components/herbal-kitchen/written-recipe";
import { ShopTheRecipe } from "@/components/herbal-kitchen/shop-the-recipe";
import { ShareButtons } from "@/components/herbal-kitchen/share-buttons";
import { VideoCard } from "@/components/herbal-kitchen/video-card";
import { KitchenStructuredData } from "@/components/herbal-kitchen/structured-data";

export function generateStaticParams() {
  return publishedVideos().map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/herbal-kitchen/[slug]">): Promise<Metadata> {
  const video = getVideo((await params).slug);
  if (!video) return {};
  const kind = video.recipe ? "Recipe & Video" : "Video";
  return {
    title: `${video.title}: ${kind} · The Herbal Kitchen`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
      images: [{ url: video.video.poster.src, width: 1600, height: 900, alt: video.video.poster.alt }],
    },
  };
}

export default async function KitchenVideoPage({ params }: PageProps<"/herbal-kitchen/[slug]">) {
  const video = getVideo((await params).slug);
  if (!video) notFound();

  const category = KITCHEN_CATEGORIES.find((c) => c.slug === video.category);
  const herbs = video.herbNames.length
    ? await prisma.herb.findMany({
        where: { name: { in: video.herbNames } },
        select: { id: true, name: true, scientificName: true, imageUrl: true },
      })
    : [];
  const related = relatedVideos(video);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10 sm:py-14">
      <KitchenStructuredData video={video} />
      <AutoPrint />

      <div className="flex flex-col gap-4" data-print-hide>
        <Breadcrumbs
          items={[
            { label: "The Herbal Kitchen", href: "/herbal-kitchen" },
            ...(category ? [{ label: category.label }] : []),
            { label: video.title },
          ]}
        />
        <div className="flex flex-col gap-2">
          {category && <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--highlight)]">{category.label}</p>}
          <h1 className="font-serif text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">{video.title}</h1>
          <p className="max-w-3xl text-[17px] leading-relaxed text-[var(--foreground)]/85">{video.description}</p>
        </div>
        <VideoPlayer video={video.video} title={video.title} priority />
        <ShareButtons path={`/herbal-kitchen/${video.slug}`} title={video.title} image={video.video.poster.src} />
      </div>

      {video.recipeCard && (
        <section className="flex flex-col gap-4" data-print-hide aria-label="Illustrated recipe card">
          <RecipeCardImage card={video.recipeCard} title={video.title} />
          {video.recipe && (
            <RecipeActions recipeHref="#recipe" printHere shopHref={video.shop?.length ? "#shop-the-recipe" : undefined} />
          )}
        </section>
      )}

      {video.recipe && <WrittenRecipe title={video.title} recipe={video.recipe} />}

      {herbs.length > 0 && (
        <section aria-labelledby="herbs-title" data-print-hide>
          <h2 id="herbs-title" className="font-serif text-3xl text-[var(--foreground)]">
            Herbs in this video
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {herbs.map((h) => (
              <Link
                key={h.id}
                href={`/herbs/${h.id}`}
                className="group flex items-center gap-4 rounded-lg border border-[var(--border)] p-3 transition-colors hover:border-[var(--highlight)]"
              >
                {h.imageUrl && (
                  <span className="relative h-24 w-[72px] shrink-0 overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-2)]">
                    <Image src={h.imageUrl} alt="" fill sizes="72px" className="object-contain" />
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--highlight)]">{h.name}</span>
                  <span className="font-mono text-xs italic text-[var(--muted)]">{h.scientificName}</span>
                  <span className="mt-1 text-sm text-[var(--accent)]">Uses, research and safety →</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {video.shop && video.shop.length > 0 && <ShopTheRecipe ingredients={video.shop} />}

      {related.length > 0 && (
        <section aria-labelledby="related-title" data-print-hide>
          <h2 id="related-title" className="font-serif text-3xl text-[var(--foreground)]">
            More from The Herbal Kitchen
          </h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((v) => (
              <VideoCard key={v.slug} video={v} />
            ))}
          </div>
        </section>
      )}

      <p className="text-sm text-[var(--muted)]" data-print-hide>
        <Link href="/herbal-kitchen" className="hover:text-[var(--highlight)]">
          ← Back to The Herbal Kitchen
        </Link>
      </p>
    </main>
  );
}
