# Search visibility

Canonical site: `https://portofolio-kenzie.raykenzienazaru.workers.dev/`

## Implemented

- Descriptive full-name title and meta description.
- Explicit `index, follow` instructions with unrestricted snippets and large image previews.
- Canonical URL aligned with `robots.txt` and `sitemap.xml`.
- Open Graph and Twitter large-image metadata using the existing 1200 × 630 image.
- JSON-LD graph connecting `WebSite`, `ProfilePage` and `Person`, including verified profile URLs and actual areas of work.
- Root-level UTF-8 sitemap with ten absolute URLs: the homepage and nine original public PDF documents. Only one homepage URL is listed; section anchors and external GitHub/Figma URLs are not separate pages on this site.
- Homepage `lastmod` is 9 September 2026, reflecting the metadata change, and agrees with the profile schema's `dateModified`. PDF `lastmod` is omitted because their actual revision dates are not established. Update these dates only after substantive changes, not automatically on each build.
- Image entries for the portrait and sharing image. No `priority` or `changefreq` values are used.
- Semantic headings and visible page copy remain the primary source for project, KTI, dataset and achievement terms.

Google ignores the historical `meta keywords` tag, so it is intentionally absent. Search terms are represented naturally in the title, description, page content and structured data.

## Indexing status and owner action

An earlier web-search-tool query concerned the secondary Vercel domain, not the Cloudflare Workers domain subsequently confirmed by the owner. This was not authenticated Google Search Console evidence and does not establish that either site is unindexed. Even a direct Google `site:` query is not exhaustive. Index status remains unconfirmed until checked with Search Console URL Inspection.

Publishing metadata or a sitemap does not guarantee crawling, indexing, a specific result title or ranking. Google must crawl and process updates. The robots.txt sitemap reference already provides a discovery hint without Search Console; submitting it in Search Console adds processing and crawl diagnostics.

To request discovery, add the canonical URL as a property in Google Search Console, complete ownership verification, submit `https://portofolio-kenzie.raykenzienazaru.workers.dev/sitemap.xml`, then use URL Inspection to request indexing for the homepage.

The owner supplied Google's HTML verification file `google2732408b1cca55cd.html`. An unchanged copy lives in `public/google2732408b1cca55cd.html`, so the static build serves it at `https://portofolio-kenzie.raykenzienazaru.workers.dev/google2732408b1cca55cd.html`. Use **HTML file** verification for the matching **URL-prefix** property. Keep this file available after verification.

Once the file is deployed, click Verify in Search Console, submit `sitemap.xml` in Sitemaps, then inspect the homepage URL and request indexing. Account-side ownership verification, sitemap submission and index status remain unconfirmed until completed in Search Console. The verification file is not a content page and is intentionally absent from the sitemap.

## Review against the supplied Google documentation

The owner confirmed the Cloudflare Workers URL-prefix property after reporting an HTML verification error. At inspection, the file already contained the correct 53 bytes, but Cloudflare returned a 307 redirect from the `.html` path to an extensionless path. This does not establish the cause of the earlier error. `wrangler.jsonc` now disables automatic HTML URL handling so the original file can be served directly. A root-only internal rewrite in `public/_redirects` preserves the homepage; missing files return 404 instead of portfolio HTML. Canonical, social and structured-data URLs and the sitemap now consistently use the owner's Cloudflare domain. See [Cloudflare HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/).

Both owner-pasted documents were read in full before this follow-up: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=id) and [Influencing title links](https://developers.google.com/search/docs/appearance/title-link?hl=id).

The title is now `Raykenzie Nazaru Fathurrahmansyah | R&D Portfolio`, shared by the HTML title, Open Graph title, Twitter title and profile-page name. The full name is retained; AI, IoT and other topics remain in descriptions and visible content. English matches the main page language. There is one H1, with the name also fully visible in the portrait caption. The site has no separate Indonesian page, so the previously added alternate-locale claim was removed. The redesign date was not sufficient evidence of original profile creation, so the optional `dateCreated` was removed.

Google's [site-operator limitations](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site) explain why URL Inspection is needed to confirm index status.
