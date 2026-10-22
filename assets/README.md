# CounterForce asset slots and licenses

## Included weapon models

The first-person weapon geometry in this repository comes from the **FPS Asset Kit** by petroulacl:
https://github.com/petroulacl/fps-asset-kit

Its README declares the pack's weapon models CC0/public-domain, allows redistribution and commercial use, and identifies the models as coming from OpenGameArt's Flat Guns East/West packs. CounterForce contains OBJ geometry exports from that pack. The current lightweight OBJ loader applies CounterForce's weapon colours and does not load the original MTL material files.

These are generic licensed firearm models, **not official Counter-Strike models**.

## Official Counter-Strike sources

Valve's official CS2 Workshop Resources page provides weapon-model geometry and workshop resources:
https://www.counter-strike.net/workshop/workshopresources

That page is useful for authorized Workshop work and reference. Do not copy extracted CS2/CS:GO game assets into this public web repository unless you have the rights or permission to redistribute them. Valve's Steam Subscriber Agreement limits copying and distribution of its content:
https://store.steampowered.com/subscriber_agreement/

## Asset layout

- `assets/backgrounds/modern.svg` — modern tactical menu background
- `assets/backgrounds/classic16.svg` — classic 1.6-inspired menu background
- `assets/models/weapons/*.obj` — CC0 weapon geometry
- `assets/models/characters/*.glb` — optional licensed operator models
- `assets/audio/*.wav` or `.ogg` — original or CC0 SFX/music

The manifest maps weapon IDs to files in `assets/manifest.json`. The game retains procedural fallback weapons if an asset fails to load.
