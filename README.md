# Tech Blade

A responsive blog for practical AI prompts, published with GitHub Pages.

**Website:** https://mannusharma23.github.io/tech-blade/

## Publish an article from GitHub

1. Open the `posts` folder and choose **Add file → Create new file**.
2. Name it `your-article-slug.md` (lowercase letters, numbers, and hyphens).
3. Paste the template below, replace the metadata, and write your article in Markdown.
4. Set `draft: false` when ready, then commit to `main`.
5. The **Publish Tech Blade** workflow builds and deploys the site automatically. Check the Actions tab for the result; publishing usually takes a minute or two.

```markdown
---
title: "Your article title"
description: "A short description for the article card and search engines."
date: "2026-11-13"
category: Writing
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

Use a quoted `YYYY-MM-DD` date. Categories are created automatically. Drafts are excluded from the generated site, feed, and sitemap, but files committed to this public repository are publicly visible. Dates control article ordering; they do not schedule publication. To unpublish an article, set `draft: true` and commit.

## Develop locally

Requires Node.js 24 and npm.

```sh
npm ci
npm run build
# Serve the project parent so the project URL prefix works:
mkdir -p /tmp/tech-blade-preview
ln -sfn "$PWD/dist" /tmp/tech-blade-preview/tech-blade
python3 -m http.server 8000 --directory /tmp/tech-blade-preview
```

Visit http://localhost:8000/tech-blade/.

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
