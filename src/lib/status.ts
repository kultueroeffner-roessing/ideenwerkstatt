// Anzeige-Infos für die Idee-Stati: Label, Emoji und DaisyUI-Badge-Klassen
// (weiche „soft"-Varianten für die Pastell-Optik).
export const statusMeta: Record<
  string,
  { label: string; emoji: string; badge: string }
> = {
  gesammelt: {
    label: "Gesammelt",
    emoji: "🌱",
    badge: "badge-soft badge-info",
  },
  "in-pruefung": {
    label: "In Prüfung",
    emoji: "🔎",
    badge: "badge-soft badge-warning",
  },
  umsetzung: {
    label: "In Umsetzung",
    emoji: "🔨",
    badge: "badge-soft badge-accent",
  },
  umgesetzt: {
    label: "Umgesetzt",
    emoji: "🎉",
    badge: "badge-soft badge-success",
  },
  ruht: {
    label: "Ruht",
    emoji: "💤",
    badge: "badge-soft badge-secondary",
  },
};

export function meta(status: string) {
  return statusMeta[status] ?? statusMeta.gesammelt;
}
