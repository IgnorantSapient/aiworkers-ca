# aiworkers.ca

Premium monochrome Astro landing page for aiworkers.ca, with Tailwind CSS, TinaCMS, MDX content collections, sitemap generation, and Netlify deployment config.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## TinaCMS

- Admin UI is generated at `/admin/`.
- Content lives in:
  - `src/content/blog/`
  - `src/content/case-studies/`
  - `src/content/services/`
- Tina schema lives in `tina/config.ts`.

For TinaCloud/Git-backed editing in production, set these environment variables in Netlify:

```bash
TINA_CLIENT_ID=your_tina_client_id
TINA_TOKEN=your_tina_token
HEAD=main
```

The local build script uses `tinacms build --local --skip-cloud-checks --skip-indexing` so the static site builds without TinaCloud credentials during local development.

## Deployment

Netlify config is in `netlify.toml`:

- build command: `npm run build`
- publish directory: `dist`
- Node version: `22`

## GEO / SEO

The site includes:

- canonical URLs for `https://aiworkers.ca`
- sitemap generation
- robots.txt
- Organization/ProfessionalService JSON-LD
- content collections for keyword-targeted blog posts, case studies, and service pages
