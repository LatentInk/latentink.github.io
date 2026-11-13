# Latent Ink

A responsive blog for practical AI prompts, published with GitHub Pages.

**Website:** https://latentink.github.io/

## Publish an article from GitHub

1. Open the `posts` folder and choose **Add file → Create new file**.
2. Name it `your-article-slug.md` (lowercase letters, numbers, and hyphens).
3. Paste the template below, replace the metadata, and write your article in Markdown.
4. Set `draft: false` when ready, then commit to `main`.
5. The **Publish Latent Ink** workflow builds and deploys the site automatically. Check the Actions tab for the result; publishing usually takes a minute or two.

```markdown
---
title: "Your article title"
description: "A short description for the article card and search engines."
date: "2026-11-13"
category: Prompting
image: 20
draft: true
---

## Start here

Introduce the problem and when to use this prompt.

### The prompt

```text
Your copyable prompt goes here.
```

## Make it your own

Explain what readers should customize and how to evaluate the output.
```

Set `image` to an integer from 0 to 29 to choose an illustration from the shared cover atlas. The thirty panels appear left to right, top to bottom in `src/covers.png`. Use a quoted `YYYY-MM-DD` date. Categories are created automatically. Drafts are excluded from the generated site, feed, and sitemap, but files committed to this public repository are publicly visible. Dates control article ordering; they do not schedule publication. To unpublish an article, set `draft: true` and commit.

## Develop locally

Requires Node.js 24 and npm.

```sh
npm ci
npm run build
node scripts/preview.mjs
```

Visit http://127.0.0.1:8013/.

```sh
npx playwright install chromium
npm test
```

The tests start their own local preview server. The site is static: there is no account, database, or admin login. Publishing happens through Markdown files in GitHub.

## Project structure

- `posts/`: article Markdown and metadata
- `src/`: styles, browser interactions, and favicon
- `scripts/build.mjs`: static HTML, RSS, and sitemap generator
- `.github/workflows/pages.yml`: the single GitHub Pages deployment workflow

Branding, layout, URL prefix, and canonical origin are configured in `scripts/build.mjs`. Styles are in `src/style.css`. No paid services or API keys are required. Google Fonts are optional; local font fallbacks keep the site usable if they cannot load.

## Editorial collection

The launch collection contains 30 source-linked articles published November 13, 2026. Product updates are dated; guides distinguish vendor facts from editorial recommendations. Cover illustrations and the launch drafts were made with AI assistance. Source notes appear in each article and the About page explains the editorial approach.

The root Pages URL requires the repository to remain named `latentink.github.io` under the `LatentInk` account. GitHub Pages uses the **Publish Latent Ink** Actions workflow. Canonical URLs, RSS, sitemap, and local preview all use the root path.

`src/covers.png` contains 30 distinct generated illustrations in one shared atlas. Each article’s `image` value selects a panel through CSS. The browser fetches the 2.7 MB atlas once and reuses it across the collection. No external image service or API key is needed.
