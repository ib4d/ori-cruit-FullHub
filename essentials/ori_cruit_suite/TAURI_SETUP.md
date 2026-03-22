# Tauri EXE Packaging (Windows)

This guide creates an `.exe` using Tauri with the static `ori_cruit_suite` UI.

## Prerequisites

- Node.js 18+
- Rust toolchain (rustup, cargo)
- Tauri CLI (`cargo install tauri-cli`)
- Windows 10/11

## Project setup (recommended location: `apps/ori_cruit-desktop`)

1. Create folder:
   - `mkdir c:\dev\ori-cruit-fullhub2.0\apps\ori_cruit-desktop`
   - `cd c:\dev\ori-cruit-fullhub2.0\apps\ori_cruit-desktop`
2. Initialize package:
   - `npm init -y`
3. Install Tauri dependencies:
   - `npm install --save-dev @tauri-apps/cli @tauri-apps/api`
4. Initialize Tauri:
   - `npx tauri init --ci`
5. Edit `tauri.conf.json`:
   - `build.distDir = "../../essentials/ori_cruit_suite"`
   - `build.devPath = "../../essentials/ori_cruit_suite/index.html"`
   - `tauri.windows[0].title = "ORI-CRUIT Suite"`
6. (Optional) Remove React/Vite dependencies; static HTML is pre-built so no bundling is needed.

## Run dev

- `npm run tauri dev`

## Build release

- `npm run tauri build`

Result:

- `src-tauri/target/release/bundle/msi/` (or `appimage`)
- `src-tauri/target/release/bundle/msi/ORI-CRUIT-setup.exe`

## Notes

- The static files are read from `distDir`; confirm all relative asset paths in HTML are correct.
- If any paths break, use absolute pathing in `index.html` or host locally.
