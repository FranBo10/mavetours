// src/theme/theme.ts
// Theme basado en tus variables SCSS (Sass: lighten/darken por HSL Lightness)

export const theme = {
  colors: {
    // Brand
    primary: "#008d94",
    primaryDark: "#005c61",     // darken(primary, 10%)
    primaryDarker: "#002c2e",   // darken(primary, 20%)
    primaryLight: "#00bec7",    // lighten(primary, 10%)
    primaryLighter: "#00eefa",  // lighten(primary, 20%)

    secondary: "#43D7E8",
    secondaryDark: "#1bc9dd",   // darken(secondary, 10%)
    secondaryDarker: "#15a0b0", // darken(secondary, 20%)
    secondaryLight: "#70e1ee",  // lighten(secondary, 10%)
    secondaryLighter: "#9eeaf3",// lighten(secondary, 20%)

    tertiary: "#cc33ff",
    tertiaryDark: "#bf00ff",    // darken(tertiary, 10%)
    tertiaryDarker: "#9900cc",  // darken(tertiary, 20%)
    tertiaryLight: "#d966ff",   // lighten(tertiary, 10%)
    tertiaryLighter: "#e699ff", // lighten(tertiary, 20%)

    danger: "#db3f34",
    dangerDark: "#bb2b21",      // darken(danger, 10%)
    dangerDarker: "#902119",    // darken(danger, 20%)
    dangerLight: "#e3685f",     // lighten(danger, 10%)
    dangerLighter: "#ea918b",   // lighten(danger, 20%)

    warning: "#deaf16",
    warningDark: "#b08a11",     // darken(warning, 10%)
    warningDarker: "#81660d",   // darken(warning, 20%)
    warningLight: "#ecc23b",    // lighten(warning, 10%)
    warningLighter: "#f0d16a",  // lighten(warning, 20%)

    success: "#510094",
    successDark: "#350061",     // darken(success, 10%)
    successDarker: "#19002e",   // darken(success, 20%)
    successLight: "#6d00c7",    // lighten(success, 10%)
    successLighter: "#8900fa",  // lighten(success, 20%)

    // Neutrals
    black: "#000000",
    white: "#ffffff",

    grayLight: "#f4f4f4",
    grayDark: "#798889",
    grayDarker: "#4f4f4f",
    grayDarken: "#202020",

    // App defaults (alineado con globals.scss)
    background: "#f4f4f4",
    text: "#000000",
  },

  // Tipografía (en tu SCSS: html 62.5% => 1rem = 10px)
  typography: {
    fontFamily: {
      base: "Nunito",
      // Si usas "Nunito" en Expo, recuerda cargarla con expo-font.
    },
    fontSize: {
      minimal: 10, // 1rem
      small: 12,   // 1.2em (aprox. 12px con base 10)
      main: 16,    // 1.6rem
      medium: 18,  // 1.8rem
      big: 20,     // 2rem
      huge: 40,    // 4rem
      h1: 30,      // 3rem
      h2: 24,      // 2.4rem
      h3: 20,      // 2rem
    },
    lineHeight: {
      base: 16 * 1.6, // body line-height 1.6
      compact: 20,    // tu global p/th/td usa 2rem (20px)
    },
    weight: {
      regular: "400" as const,
      medium: "500" as const,
      semibold: "600" as const,
      bold: "700" as const,
      extrabold: "800" as const,
    },
  },

  // Spacing / layout (equivalente a tus variables)
  spacing: {
    padding: 10, // 1rem
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
    gutterHorizontal: 60, // 6rem => 60px
    gutterVertical: 80,   // 8rem => 80px
    gutterVerticalSmall: 60, // 6rem => 60px
  },

  radius: {
    base: 5, // 0.5rem => 5px
    sm: 6,
    md: 10,
    lg: 16,
  },

  // Breakpoints (tus mixins)
  breakpoints: {
    phone: 350,
    smartPhone: 530,
    miniTablet: 768,
    tablet: 848,
    laptop: 1200,
    desktop: 1800,
  },

  // Sombras: en RN no hay "box-shadow" igual que CSS; esto te da presets razonables.
  // (Android usa elevation; iOS usa shadow*)
  shadow: {
    soft: {
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },
    medium: {
      shadowColor: "#000",
      shadowOpacity: 0.18,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      elevation: 5,
    },
  },
} as const;

export type Theme = typeof theme;
