import { createContext, useState } from "react";
import { dark, light } from "../Styles/ThemeSwitch.styled";

const theme = {
  light: {
    background: "white",
    text: "black",
    hover: "skyblue",
    button: "black",
    herotext: "skyblue",
    heroHighlight: "white",
    burgerHover: "skyblue",
    closeHover: "skyblue",

    logoHover: "skyblue",
    dropdownline: "black",

    /* MENU STYLING */
    filter: [
      "invert(80%)",
      "sepia(13%)",
      "saturate(1224%)",
      "hue-rotate(161deg)",
      "brightness(96%)",
      "contrast(91%)",
      "drop-shadow(0 0 5px skyblue)",
      "drop-shadow(0 0 10px skyblue)",
    ],
    switchBorder: "black",
    switchBG: "white",
    switchIcon: [
      "invert(0%)",
      "sepia(2%)",
      "saturate(9%)",
      "hue-rotate(51deg)",
      "brightness(103%)",
      "contrast(104%)",
    ],
  },
  dark: {
    background: "black",
    text: "white",
    hover: "skyblue",
    button: "white",
    herotext: "white",
    heroHighlight: "skyblue",
    burgerHover: "white",
    closeHover: "white",
    logoHover: "white",

    /* MENU STYLYING */
    filter: [
      "invert(80%)",
      "sepia(13%)",
      "saturate(1224%)",
      "hue-rotate(161deg)",
      "brightness(96%)",
      "contrast(91%)",
      "drop-shadow(0 0 5px skyblue)",
      "drop-shadow(0 0 10px skyblue)",
    ],
    switchBorder: "white",
    switchBG: "black",
    // switchIcon: [
    //   "invert(96%)",
    //   "sepia(96%)",
    //   "saturate(0%)",
    //   "hue-rotate(71deg)",
    //   "brightness(104%)",
    //   "contrast(104%)",
    // ],
    switchIcon: [
      "invert(0%)",
      "sepia(2%)",
      "saturate(9%)",
      "hue-rotate(51deg)",
      "brightness(103%)",
      "contrast(104%)",
    ],
  },
};

export const ThemeContext = createContext(theme.dark);

export function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={theme.dark}>
      {props.children}
    </ThemeContext.Provider>
  );
}
