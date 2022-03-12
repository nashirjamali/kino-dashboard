import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  primary: "#6418C3",
  accent_01: "#5ECFFF",
  accent_02: "#E328AF",
  primary_soft: "#F6EEFF",
  accent01_soft: "#DFEDF2",
  accent02_soft: "#FFCFF2",
  white: "#FFFFFF",
  black: "#202020",
  grey_01: "#A5A5A5",
  grey_02: "#C2C2C2",
  grey_03: "#F5F5F5",
  yellow: "#FFAB2D",
  yellow_soft: "#FFEBCC",
  red: "#FF4A55",
  green: "#38E25D",
};

const fonts = {
  heading: "Cairo, sans-serif",
  body: "Open Sans, Cairo, sans-serif",
};

const customTheme = {
  ...theme,
  colors,
  fonts,
};

export default extendTheme(customTheme);
