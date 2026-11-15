# mozzy: trading links page (plain HTML)

A static website with no build step and nothing to install. Upload these files to GitHub and Vercel serves them as-is.

```
index.html       the page (design + behaviour)
config.js        ← EDIT THIS: links, codes, text, photos
og-image.jpg     preview image shown when the link is shared on Facebook
favicon.png      browser tab icon
img/             avatar, competition photo, toile watermark, 12 mozzy stickers, logos/
fonts/           Cormorant Garamond + Jost (free, SIL Open Font License)
```

## Edit

Open `config.js` in Notepad. Keep the quotes and commas. To preview, double-click `index.html`.

- Swap a photo: replace the file in `img/` with one of the same name, or change its path in `config.js`.
- Logos: put e.g. `bingx.png` in `img/logos/` and set `src: "img/logos/bingx.png"`.
- Photo framing: `focus: "50% 70%"` moves which part of a moments photo stays in frame.

## Upload to GitHub (no Git install needed)

1. Go to https://github.com/new, name it `mozzy`, and click **Create repository**.
2. Click **uploading an existing file**.
3. Drag **everything inside this folder** (files *and* the `img` and `fonts` folders) into the box. Don't drag the outer folder.
4. Click **Commit changes**.

## Deploy on Vercel

1. Go to https://vercel.com/new and click **Import** next to `mozzy`.
2. Framework Preset: **Other**. Click **Deploy**.
3. Near the top of `index.html`, replace `https://mozzy.vercel.app` (it appears 3 times) with your real link, then commit. That makes the Facebook preview image work. Check it at https://developers.facebook.com/tools/debug/

To update later, edit `config.js` on GitHub (pencil icon → Commit). Vercel redeploys in under a minute.
