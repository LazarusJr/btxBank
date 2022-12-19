import React, { createContext } from "react";
import darkTheme from "../Styles/Themes/darkTheme";
import lightTheme from "../Styles/Themes/lightTheme";
// import { dark, light } from "../Styles/ThemeSwitch.styled";
/* 
TODO:
context requires 3 factors 
| * - the context (in this case the theme)
| * - the provider 
| * - the consumer 
*/

const themeModes = { lightTheme, darkTheme };
const ThemeContext = createContext(themeModes);

export default ThemeContext;
