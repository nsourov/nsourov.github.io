const { colors, fonts } = require("../../config")

export const sharedPreferences = {
  fonts: fonts,
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  borderRadius: "1rem",
  pageWidth: "62.5rem",
  headerHeight: "6.25rem",
}

export const darkTheme = {
  ...sharedPreferences,
  colors: colors.darkTheme,
}
