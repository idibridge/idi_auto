# IDI Auto — Website

Premium luxury vehicle import service. Bilingual (RU default / EN), 7 pages,
SEO-ready, GitHub Pages compatible.

---

## 1. Create the GitHub repository

1. Go to **github.com** → click **New repository** (green button, top right).
2. **Repository name**: `idi-auto` (this name will appear in your URL —
   `https://USERNAME.github.io/idi-auto/`). If you have a custom domain,
   the name doesn't matter as much, but `idi-auto` is clean and on-brand.
3. **Description**: write something keyword-rich, e.g.:
   > Премиальный сервис пригона автомобилей Rolls-Royce, Bentley, Maybach, Ferrari, Lamborghini — Россия, Казахстан, ОАЭ
4. Set to **Public** (required for free GitHub Pages).
5. Do **NOT** check "Add a README" — you already have one in this package.
6. Click **Create repository**.

## 2. Upload the files

Easiest way (no Git knowledge needed):
1. On the new repo page, click **"uploading an existing file"**.
2. Drag the entire contents of this folder (not the folder itself — its
   *contents*: `index.html`, `css/`, `js/`, `images/`, `video/`, etc.) into
   the browser window.
3. Wait for the upload to finish (the video is ~1.8MB, give it a moment).
4. Scroll down, write a commit message like "Initial site upload", click
   **Commit changes**.

## 3. Enable GitHub Pages

1. In your repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Source**, select **Deploy from a branch**.
3. **Branch**: `main` (or `master`), folder: `/ (root)`.
4. Click **Save**.
5. Wait 1–2 minutes, then refresh — you'll see a green box with your live
   URL: `https://USERNAME.github.io/idi-auto/`

## 4. Replace placeholders (important for SEO + functionality)

Before going live, find-and-replace these placeholders across **all** files
(`index.html`, `cars.html`, `order.html`, `services.html`, `about.html`,
`contact.html`, `robots.txt`, `sitemap.xml`):

| Placeholder | Replace with |
|---|---|
| `YOURUSERNAME` | Your actual GitHub username |
| `wa.me/YOURNUMBER` | Your WhatsApp number, e.g. `wa.me/77001234567` |
| `t.me/YOURUSERNAME` | Your Telegram username |
| `instagram.com/YOURUSERNAME` | Your Instagram handle |
| `info@idiauto.com` | Your real email |

**Tip**: in GitHub, you can edit each file directly in the browser (pencil
icon) and use Cmd/Ctrl+F to find these strings quickly.

---

## 5. SEO — Getting found for "premium car import" searches

Ranking for competitive terms takes time (months), but the foundation
matters a lot. Here's what's already built in, and what to do next:

### Already done in this package
- Unique `<title>` and `<meta name="description">` per page, in Russian,
  targeting phrases like "пригон премиальных автомобилей", "Rolls-Royce
  Bentley Maybach Казахстан ОАЭ"
- Open Graph + Twitter Card tags (so links look good when shared in
  WhatsApp/Telegram/social media)
- `robots.txt` + `sitemap.xml` (tells search engines what to index)
- JSON-LD structured data (`AutomotiveBusiness` schema) — helps Google
  show rich snippets (logo, service area, etc.)
- Semantic `lang="ru"` as default language
- Fast-loading static site (no frameworks, instant load)

### What YOU need to do after publishing

1. **Google Search Console** (free, most important step)
   - Go to search.google.com/search-console
   - Add your property: `https://USERNAME.github.io/idi-auto/`
   - Verify via the HTML tag method (add the meta tag to `<head>` of
     `index.html`) or via the sitemap.
   - Submit your sitemap: `https://USERNAME.github.io/idi-auto/sitemap.xml`
   - This is what gets you *into* Google's index — without this step,
     Google may take weeks/months to find your site organically.

2. **Yandex Webmaster** (critical for RU/KZ market — Yandex is dominant
   in Russia and widely used in Kazakhstan)
   - Go to webmaster.yandex.com
   - Add and verify your site (same process as Google)
   - Submit the sitemap
   - Yandex also lets you add business info, working hours, region — fill
     this in for "Москва", "Алматы", "Дубай" etc.

3. **Google Business Profile / Yandex Business**
   - Even for an online-only service, registering a business profile with
     your service area (Russia, Kazakhstan, UAE) significantly helps local
     search visibility for "пригон авто [город]" searches.

4. **Get backlinks** — this is the #1 ranking factor for competitive terms:
   - List your service on car forums (drive2.ru, auto.ru forums)
   - Get listed on aggregator sites for car import services
   - Ask satisfied clients to mention/tag you on Instagram with a link

5. **Content** — search engines reward fresh, relevant content:
   - Consider a `/blog/` section later with posts like "Как пригнать
     Rolls-Royce из ОАЭ в Казахстан: пошаговая инструкция" — these
     long-tail queries are much easier to rank for than "пригон авто"
     and bring qualified traffic.

6. **Custom domain (recommended for credibility)**
   - A domain like `idiauto.com` or `idi-auto.kz` looks far more
     trustworthy than `username.github.io/idi-auto`
   - Buy from any registrar, then in GitHub: Settings → Pages → Custom
     domain → enter your domain. Add a `CNAME` file (GitHub does this
     automatically) and configure your DNS as GitHub instructs.
   - This also matters for ranking: branded domains tend to be trusted
     more by both users and search engines.

7. **Page speed & mobile** — already handled (no heavy frameworks), but
   once you add real photos/videos, compress them (use `.webp` for images,
   keep videos under 5MB, consider hosting large video on YouTube/Vimeo
   and embedding instead).

### Realistic expectations
"Топы" for a generic term like "пригон премиум авто" against established
competitors (regionauto, jdmcar, etc.) typically takes 3–6+ months of
consistent SEO work, backlinks and content — not just a well-built site.
But steps 1–3 above are what make you *visible at all*, and steps 4–6 are
what start moving you up.

---

## 6. Brand Logo Bar (marquee)

The scrolling brand bar uses real logo images in `images/brands/`. To
add/remove a brand, edit the `.logo-item` blocks in `index.html` (the set
is duplicated for a seamless loop — update both copies) and drop new logo
files into `images/brands/`.

## 7. Hero Video

`video/hero.mp4` plays automatically (muted, looped) behind the homepage
hero text. To replace it, overwrite this file with another `.mp4` of the
same name.

## 8. Languages

The site defaults to **Russian**. The EN/RU toggle is in the top nav on
every page — all text comes from `js/i18n.js`. Edit the `translations`
object there to change any wording.

---

## Pre-launch checklist

- [ ] Replace all placeholders (see table above)
- [ ] Add `images/og-cover.jpg` — a 1200x630px image used when the site is
      shared on social media (currently referenced but not included —
      use a nice car photo or your hero video's first frame)
- [ ] Verify site on Google Search Console + Yandex Webmaster
- [ ] Submit sitemap to both
- [ ] Fill in `legal.html` with real legal/privacy text
- [ ] Add real car photos to fleet cards
- [ ] Consider a custom domain
