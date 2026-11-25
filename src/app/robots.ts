import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";

// Served at /robots.txt: every page may be crawled, and search engines are
// pointed at the sitemap. (Vercel preview copies are kept out of search
// results by Vercel itself.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: "https://www.herbssearch.com",
  };
}
