This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

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
