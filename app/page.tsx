export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full border border-primary/30 px-3 py-1 text-sm font-medium text-primary">
        Herbs Search
      </span>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Discover herbs and their properties
      </h1>
      <p className="max-w-md text-pretty text-lg text-muted">
        A starter app, ready to deploy on Vercel. Build out your herb catalog,
        search, and reference from here.
      </p>
      <a
        href="https://vercel.com/new"
        className="rounded-md bg-primary px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
      >
        Deploy on Vercel
      </a>
    </main>
  )
}
