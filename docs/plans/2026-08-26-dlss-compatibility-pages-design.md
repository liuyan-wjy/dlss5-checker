# DLSS compatibility pages design

## Approved scope

Create three substantial search-intent pages without adding dependencies or a new content framework:

- `/dlss-supported-cards`: the evergreen answer to which RTX generations support each DLSS feature. It must not compete with the existing DLSS 5-only status page.
- `/dlss-4-5-supported-cards`: the feature-specific DLSS 4.5 compatibility and setup guide.
- `/pt/dlss-4-5-quais-placas`: a Brazilian Portuguese localization of the DLSS 4.5 guide, written for local search language rather than translated sentence by sentence.

Each page will provide the answer near the top, a readable compatibility matrix, generation-specific limitations, setup and verification advice, buying guidance, visible FAQs, primary NVIDIA sources, structured data, and contextual internal links. Each rendered page must contain at least 1,500 words.

## SEO boundaries

The generic page owns broad queries such as “DLSS supported cards” and “what cards support DLSS.” The two DLSS 4.5 pages own English and Brazilian Portuguese feature-specific queries. The existing `/dlss-5-supported-cards` page continues to own future DLSS 5 compatibility status.

All three pages use self-referencing canonicals. The English and Portuguese DLSS 4.5 pages use reciprocal `en` and `pt-BR` alternates. FAQ structured data mirrors visible FAQs. The pages are linked from the guide index and included in the sitemap.

## Visual and sourcing decision

The compatibility matrix is the main visual because it is crawlable, accessible, responsive, and directly answers the query. No third-party image will be hotlinked without a clear reusable license. Current feature claims are based on NVIDIA's official DLSS technology and release pages, with limitations stated where support depends on a game, driver, or NVIDIA App profile.
