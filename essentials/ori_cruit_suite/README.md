# ORI-CRUIT Suite

A production-ready static UI package for ORI-CRUIT Hub UI screens with theme/language switch and local persistence.

## App contents

- `index.html` — launcher (entry page for browser package)
- `dashboard.html` — dashboard screen
- `home.html` — home/landing screen
- `pipeline.html` — pipeline board screen
- `workspace.html` — workspace screen
- `scripts.js` — shared theme + i18n engine

## Features

- Dark/Light theme toggle (stored as `ori_cruit_theme`)
- Language selector (English, Spanish, Polish) stored as `ori_cruit_lang`
- Complete screen parity with original dark/light reference UIs
- Works fully in static pages (no backend required)

## Run instructions (browser live)

1. Open `index.html` in a browser or navigate to `dashboard.html`, `home.html`, `pipeline.html`, `workspace.html`.
2. Use the language dropdown and theme toggle in the top controls.
3. Refresh page; settings are retained via localStorage.

## Deploy hosted (any static site)

1. Copy the entire `ori_cruit_suite` folder to your web host.
2. Set your host to serve `index.html` as default.
3. Optionally run on Vercel/Netlify/GitHub Pages.

## Shareable local package

1. Compress the `ori_cruit_suite` folder to `ori_cruit_suite.zip`.
2. Distribute to colleagues.
3. They unzip and open `index.html` (or direct screen file) in browser.

## Windows installer path (Tauri .exe)

1. Create a Tauri app that points to this folder for static assets.
2. In `tauri.conf.json`, set `distDir` to `../essentials/ori_cruit_suite`.
3. Run `npm run tauri build`.
4. Distribute the generated `installer.exe` / `setup.exe`.

## Zero-Cost offline optimization

For fully disconnected usage:

- Download Google Fonts and Material Symbols locally.
- Replace CDN links in HTML head with local assets.
- Optionally include Tailwind CSS file locally instead of CDN.

## Validation checklist

- [ ] `index.html` launches and shows all page links
- [ ] `dashboard.html`, `home.html`, `pipeline.html`, `workspace.html` load without console errors
- [ ] Theme toggle works in all pages and persists
- [ ] Language switcher works (en/es/pl) and persists
- [ ] Navigations refer to proper relative URLs
- [ ] Shared script `scripts.js` is loaded exactly once per page
- [ ] CDN assets are either reachable or replaced with local copies
- [ ] Optional package zip opens and runs from local drive

## Packaging helper script

`package-zip.ps1` is included to generate a portable ZIP archive quickly.

## Deployment paths: recommended

- `https://yourdomain.com/ori_cruit_suite/index.html`
- `https://yourdomain.com/ori_cruit_suite/dashboard.html`
- `https://yourdomain.com/ori_cruit_suite/home.html`
- `https://yourdomain.com/ori_cruit_suite/pipeline.html`
- `https://yourdomain.com/ori_cruit_suite/workspace.html`
