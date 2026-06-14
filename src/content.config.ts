import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Status-Werte für Ideen/Pitches – so lässt sich die Umsetzung öffentlich tracken.
export const ideaStatus = [
  "gesammelt", // frisch eingebracht, noch unsortiert
  "in-pruefung", // wird gerade besprochen / geprüft
  "umsetzung", // in aktiver Umsetzung
  "umgesetzt", // fertig, läuft
  "ruht", // zurückgestellt / vertagt
] as const;

const protokolle = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/protokolle" }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date(),
    ort: z.string().default("Dorfgemeinschaftshaus Rössing"),
    teilnehmende: z.number().optional(),
    zusammenfassung: z.string(),
    themen: z.array(z.string()).default([]),
    entwurf: z.boolean().default(false), // true = Platzhalter / noch nicht final
  }),
});

const ideen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ideen" }),
  schema: z.object({
    titel: z.string(),
    pitch: z.string(), // einzeiliger Aufhänger
    status: z.enum(ideaStatus).default("gesammelt"),
    kategorie: z.string().default("Allgemein"),
    eingebrachtVon: z.string().optional(),
    datum: z.coerce.date().optional(),
    emoji: z.string().default("💡"),
  }),
});

export const collections = { protokolle, ideen };
