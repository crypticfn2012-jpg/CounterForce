# CounterForce

Lightweight browser tactical FPS built from scratch with HTML, CSS, JavaScript and Three.js.

## Current build

- First-person movement, sprint, crouch, jump and pointer lock
- ADS-style FOV transition
- Original tactical map geometry and collision
- Weapon database with pistols, SMGs, rifles, shotguns, snipers, LMG and knife
- Recoil, spread, headshots, armour, health, reloads and hit detection
- Deathmatch, tactical round mode and practice range
- Moving and static practice targets
- Buy phase and local loadout selection
- Multi-category settings with automatic local persistence
- Keyboard/mouse rebinding
- Crosshair editor
- Modern tactical menu and selectable Classic 1.6 visual theme
- Local profile/stat persistence
- Procedural Web Audio
- Real GLB asset pipeline with local asset slots and CC0 fallback
- GitHub Pages deployment workflow
- Local favicon

## Settings structure

The settings screen is split into Game, Mouse, Keyboard, Audio, Video, Interface and Crosshair tabs.

The Classic 1.6 style changes the menu layout, typography, palette, HUD treatment and presentation rather than simply recolouring the modern menu.

## Assets

Valve/CS2 game files are not redistributed. Drop your own licensed or original assets into the assets slots.

The project is compatible with CC0/public-domain sources such as Poly Haven and the CC0 FPS Asset Kit. See assets/README.md for the expected folders.

## Run locally

Use a local HTTP server so browser ES modules load correctly.

python -m http.server 8080

Open http://localhost:8080.

## Controls

WASD move · mouse look · LMB fire · RMB ADS · R reload · 1/2/3 weapon slots · C crouch · Shift sprint · Space jump · Tab scoreboard · Esc pause

## Deployment

The repository includes .github/workflows/pages.yml for GitHub Pages.

## Status

This is the first offline foundation. Networking, deeper objective logic, full animation sets and a larger production asset library are separate follow-on phases.
