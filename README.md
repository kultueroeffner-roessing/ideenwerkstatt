# Zukunftswerkstatt Rössing

Landing- und Arbeitsseite der Ideen- & Zukunftswerkstatt der **KulTürÖffner Rössing**.
Hier finden sich der nächste Termin, das öffentliche Ideenbuch (mit Umsetzungs-Status)
und die Protokolle der bisherigen Werkstätten.

🌐 **Domain:** zukunftswerkstatt.kultüröffner.rössing.de

## Tech-Stack

- [Astro](https://astro.build/) – statisch gerendert
- [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) (eigenes Pastell-Theme „kultueroeffner")
- Deployment: **Cloudflare Workers** (Static Assets, kein Pages) via `wrangler.jsonc`

## Entwicklung

```bash
npm install
npm run dev        # lokaler Dev-Server auf http://localhost:4321
npm run build      # statischer Build nach ./dist
npm run preview    # Build lokal im Worker (wrangler dev)
```

## Deployment

Cloudflare Workers Builds ist mit diesem Repo verbunden und baut bei jedem Push
auf `main` automatisch (`npm run build`) und deployt `./dist` als Worker-Assets.
Manuell:

```bash
npm run deploy     # astro build && wrangler deploy
```

## Inhalte pflegen

- **Ideen / Pitches:** Markdown-Dateien in `src/content/ideen/`.
  Status-Werte: `gesammelt`, `in-pruefung`, `umsetzung`, `umgesetzt`, `ruht`.
- **Protokolle:** Markdown-Dateien in `src/content/protokolle/`.
  `entwurf: true` markiert Platzhalter/Entwürfe.

Das Schema beider Sammlungen steht in `src/content.config.ts`.
