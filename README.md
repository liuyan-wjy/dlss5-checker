# DLSS 5 Checker

Source code for **[dlss5.net](https://www.dlss5.net)**, an independent site that answers one question:
*can my graphics card use NVIDIA DLSS 5, and what can I turn on today?*

- **[GPU checker](https://www.dlss5.net/)**: type a GPU model (RTX, GTX, Radeon, or Arc) and get its DLSS 5
  status, the DLSS features it supports now, and where to switch each one on. Results can be shared as a link,
  for example [dlss5.net/?gpu=rtx-4070](https://www.dlss5.net/?gpu=rtx-4070).
- **[DLSS 5 supported cards](https://www.dlss5.net/dlss-5-supported-cards)**: every tracked GPU grouped as
  confirmed, planned, unsupported, or no DLSS, with a dated history of how those labels changed.
- **[DLSS 5 games](https://www.dlss5.net/dlss-5-games)**: which games are live, scheduled, or only announced.
- **[System requirements and benchmarks](https://www.dlss5.net/dlss-5-system-requirements)**: driver and
  Windows requirements plus a summary of published third-party performance tests.
- **[Setup guide](https://www.dlss5.net/dlss-5-download)** and the
  **[NBA 2K27 DLSS 5 guide](https://www.dlss5.net/games/nba-2k27-dlss-5)**.
- Portuguese (Brazil) version at [dlss5.net/pt](https://www.dlss5.net/pt).

The site is not affiliated with NVIDIA. It is written and maintained by
[liuyan-wjy](https://github.com/liuyan-wjy).

## Where the data comes from

GPU support status lives in [`data/gpu-data.json`](data/gpu-data.json). A status changes only when a primary
source supports it: an NVIDIA announcement, driver note, or support table, or a game publisher's patch notes.
Media reports and leaks are used to know what to watch, not to change a label. Because the file is versioned
here, the [commit history](https://github.com/liuyan-wjy/dlss5-checker/commits/main/data/gpu-data.json) shows
when and why each label changed. The site's [editorial policy](https://www.dlss5.net/editorial-policy)
describes the sourcing rules in full.

## Corrections

Found an outdated status or a missing GPU? [Open an issue](https://github.com/liuyan-wjy/dlss5-checker/issues)
with the GPU or game, the page, and the source that shows the change, or email support@dlss5.net.

## Development

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run test:gpu   # GPU search and checker result checks
npm run test:seo   # builds the static site, then checks the exported HTML
```

Pages live under `app/(en)` (English) and `app/pt` (Portuguese). Shared UI is in `components/`, and GPU search
logic is in `lib/gpu-search.ts`.

## Deploy on Cloudflare Pages

The site uses Next.js static export. `npm run build` writes the complete site to
`out/`; no Worker, Pages Function, or Next.js server is required.

Connect the existing `liuyan-wjy/dlss5-checker` GitHub repository to a Pages
project with these settings:

- Production branch: `main`
- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Output directory: `out`
- Root directory: repository root
- Node.js: 22

Enable automatic production deployments for `main`. A saved repository name and
an enabled switch are not sufficient: the Deployments page must show no Git
account disconnection warning, and a push must produce a `github:push` deployment.
If the project is disconnected, reconnect the existing repository in Settings
without deleting the Pages project or its custom domains. In the GitHub app's
repository access settings, ensure `dlss5-checker` is included: Cloudflare can
clone this public repository even when it lacks access to receive push events.

The production build also preserves `public/indexnow-key.txt`, which is excluded
from Git. Set the existing ownership key as the Pages build secret `INDEXNOW_KEY`
in both production and preview environments, then use this build command:

```sh
npm run build && test -n "$INDEXNOW_KEY" && printf '%s\n' "$INDEXNOW_KEY" > out/indexnow-key.txt
```

Before publishing, run `npm run lint`, `npx tsc --noEmit`, `npm run test:gpu`,
and `npm run test:seo`. The SEO regression checks inspect the exported files,
including `404.html`, `robots.txt`, and `sitemap.xml`.

Keep `https://www.dlss5.net` as the canonical origin. Verify the Pages deployment
before adding `www.dlss5.net` in Pages custom domains and updating its DNS.
Configure the apex-to-www permanent redirect in Cloudflare Redirect Rules,
preserving the request path and query string. Pages `_redirects` does not support
domain-level matching. Do not add an SPA fallback that turns missing pages into
HTTP 200 responses.

`vercel.json` disables automatic Vercel Git deployments. Retain the old deployment
and record the old DNS targets until the Cloudflare cutover has been verified;
the old Vercel project is not deleted by this configuration.

English pages live in `app/(en)/`; Portuguese and German pages use their own root
layouts so the exported HTML has the correct language. Route groups do not change
public URLs. Shared metadata, analytics and the document shell are in
`components/SiteDocument.tsx`.
