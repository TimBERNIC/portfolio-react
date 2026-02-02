/**
 * Palette de couleurs du portfolio - source unique pour toute l'app.
 */
export const COLORS = {
  principal_black: "#050505",
  secondary_blue: "#0073C8",
  secondary_blue_light: "rgba(0, 115, 200, 0.15)",
  bg: "rgb(222, 220, 220)",
  surface: "#ffffff",
  text: "#1a1a1a",
  text_muted: "#4a4a4a",
  link_hover: "rgb(158, 158, 158)",

  white: "rgb(255, 255, 255)",
  black: "#000000",

  gray_border: "rgb(188, 188, 193)",
  gray_border_light: "rgb(183, 181, 181)",
  gray_bg_light: "rgb(240, 239, 239)",
  gray_hover: "rgb(240, 240, 240)",
} as const;

export type ColorKey = keyof typeof COLORS;

/** Mapping vers les variables CSS utilisées dans l'app */
export const COLORS_TO_CSS_VARS: Record<string, string> = {
  "--color-header": COLORS.principal_black,
  "--color-accent": COLORS.secondary_blue,
  "--color-bg": COLORS.bg,
  "--color-surface": COLORS.surface,
  "--color-text": COLORS.text,
  "--color-text-muted": COLORS.text_muted,
  "--color-link-hover": COLORS.link_hover,
  "--color-white": COLORS.white,
  "--color-black": COLORS.black,
  "--color-gray-border": COLORS.gray_border,
  "--color-gray-border-light": COLORS.gray_border_light,
  "--color-gray-bg-light": COLORS.gray_bg_light,
  "--color-gray-hover": COLORS.gray_hover,
};
