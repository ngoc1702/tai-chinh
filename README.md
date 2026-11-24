# Skybet

A multipage English finance website built with Next.js and React.

## Run

```sh
npm install
npm run dev
```

Production validation: `npm run build`. Run the production build with `npm start`.

## Structure

- `/`: finance homepage and guide search.
- `/topics` and `/topics/[slug]`: eight topic collections.
- `/blog` and `/blog/[slug]`: searchable article library and reading pages.
- `/blog/prop-firm-review`: original supplied review, with 2026 replaced by 2019.
- `/contact` and `/privacy`: contact form, example business details, FAQ, and privacy notice.
- `/learn`, `/about`, `/disclosures`: learning and editorial information.

`app/site.css` contains the shared styles. Article summaries and topic data are in
`app/catalog.ts`; the preserved review is in `app/article.json`.

Reference images and extracted SVGs are stored locally in
`public/assets/nerdwallet`. Their source URLs are recorded in `sources.json` in
that directory. `app/reference-media.tsx` centralizes image mappings, and
`app/ui-icons.tsx` uses those SVG assets for interface icons.

Article bookmarks are stored in the current browser's local storage. Searches
and topic filters run locally; no account or backend service is required.

The journal contains fourteen articles, including ten additional explainers in
`app/additional-posts.ts`. All publication dates are in 2019. The original review
is pinned above the searchable, sortable, paginated article collection.

Contact details are explicitly marked as examples. `POST /api/contact` validates
and saves inquiries to `.data/contact-messages.ndjson` (ignored by Git). This
requires a writable Node server filesystem. No email delivery is configured;
connect a monitored inbox and durable storage before a public deployment.

The learning center and selected topic pages include illustrative savings, fixed
loan payment, and monthly budget calculators. Their calculation assumptions are
shown alongside the results; no live rate feed or lender quote is used.
