// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Statische Astro-Seite. Wird via Cloudflare Workers (Static Assets) deployed –
// siehe wrangler.jsonc. Kein SSR-Adapter nötig, alles wird zur Build-Zeit gerendert.
export default defineConfig({
  site: "https://zukunftswerkstatt.xn--kultrffner-icb4e.xn--rssing-wxa.de",
  vite: {
    // Cast wegen Versions-Mismatch der Vite-Typen
    // (Astro-internes Vite vs. das von @tailwindcss/vite) – nur ein Typproblem.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
