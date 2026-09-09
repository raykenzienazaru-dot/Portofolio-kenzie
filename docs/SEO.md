# Search visibility

Canonical site: `https://portofolio-kenzie-pearl.vercel.app/`

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

An earlier web-search-tool query did not surface this Vercel domain. This was not authenticated Google Search Console evidence and does not establish that the site is unindexed. Even a direct Google `site:` query is not exhaustive. Index status remains unconfirmed until checked with Search Console URL Inspection.

Publishing metadata or a sitemap does not guarantee crawling, indexing, a specific result title or ranking. Google must crawl and process updates. The robots.txt sitemap reference already provides a discovery hint without Search Console; submitting it in Search Console adds processing and crawl diagnostics.

To request discovery, add the canonical URL as a property in Google Search Console, complete ownership verification, submit `https://portofolio-kenzie-pearl.vercel.app/sitemap.xml`, then use URL Inspection to request indexing for the homepage. No verification token is committed because Google generates it for the verified property owner.

Use a **URL-prefix** property for the exact HTTPS address above. Choose HTML tag verification and copy the Google-provided `google-site-verification` tag for installation in the homepage head. Once it is deployed, complete verification in Search Console, submit `sitemap.xml` in Sitemaps, then inspect the homepage URL and request indexing. Verification and submission have not been performed in this workspace.

## Review against the supplied Google documentation

Both owner-pasted documents were read in full before this follow-up: [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=id) and [Influencing title links](https://developers.google.com/search/docs/appearance/title-link?hl=id).

The title is now `Raykenzie Nazaru Fathurrahmansyah | R&D Portfolio`, shared by the HTML title, Open Graph title, Twitter title and profile-page name. The full name is retained; AI, IoT and other topics remain in descriptions and visible content. English matches the main page language. There is one H1, with the name also fully visible in the portrait caption. The site has no separate Indonesian page, so the previously added alternate-locale claim was removed. The redesign date was not sufficient evidence of original profile creation, so the optional `dateCreated` was removed.

Google's [site-operator limitations](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site) explain why URL Inspection is needed to confirm index status.
