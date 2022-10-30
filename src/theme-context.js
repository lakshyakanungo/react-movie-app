import React from "react";

export const themes = {
  light: {
    background: "#bde5db",
    text: "#000000",
  },
  dark: {
    background: "#24323f",
    text: "#ffffff",
  },
};
export const ThemeContext = React.createContext(themes.light);
