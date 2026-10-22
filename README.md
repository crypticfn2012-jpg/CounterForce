# CounterForce

Lightweight browser tactical FPS built from scratch with HTML, CSS, JavaScript and Three.js.

## Current build

- First-person movement, sprint, crouch, jump and pointer lock
- ADS-style FOV transition
- Original tactical map geometry and collision
- Weapon database with pistols, SMGs, rifles, shotguns, snipers, LMG and knife
- Recoil, spread, headshots, armour, health, reloads and hit detection
- Dedicated 1v1 duel mode: one AI opponent, first-to-10 rounds, round resets, bot difficulty selection and match results
- Deathmatch, tactical 5v5-style round mode and practice range
- Team-based bot AI with line-of-sight combat
- Buy phase, persistent economy, weapon purchases and round rewards
- Bomb carrier, plant sites, dropped bomb pickup, CT defuse and explosion win conditions
- Moving and static practice targets
- Multi-category settings with automatic local persistence
- Keyboard/mouse rebinding
- Crosshair editor
- Redesigned tactical menu with Dustline minimap, bot difficulty controls and career stats
- Dedicated duel HUD with health/armour, round score, kill/death tracking and reload progress
- Modern tactical menu and selectable Classic 1.6 visual theme
- Local profile/stat persistence
- Procedural Web Audio
- Local first-person asset pipeline using an asset manifest and OBJ/Three JSON loaders, with procedural fallback models
- GitHub Pages deployment workflow
- Local favicon

## Settings structure

The settings screen is split into Game, Mouse, Keyboard, Audio, Video, Interface and Crosshair tabs.

The Classic 1.6 style changes the menu layout, typography, palette, HUD treatment and presentation rather than simply recolouring the modern menu.

## Assets

Valve/CS2 game files are not redistributed. The weapon meshes included here are generic CC0/public-domain models, not official Counter-Strike assets. The asset loader reads `assets/manifest.json`, and the game falls back to procedural weapons if a model cannot load. See `assets/README.md` for source and licensing notes.

## Run locally

Use a local HTTP server so browser ES modules load correctly.

python -m http.server 8080

Open http://localhost:8080.

## Controls

WASD move · mouse look · LMB fire · RMB ADS · R reload · 1/2/3 weapon slots · C crouch · Shift sprint · Space jump · Tab scoreboard · Esc pause

## Deployment

The repository includes .github/workflows/pages.yml for GitHub Pages.

## Status

The offline core now has a real tactical round loop, team AI, economy and bomb objective. Online multiplayer, player animation, authoritative netcode, matchmaking and a production asset library are still separate phases.
