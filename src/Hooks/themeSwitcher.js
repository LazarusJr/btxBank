import { useReducer } from "react";

const themeSwitcher = () => {
  const [themeSwitch, toggle] = useReducer(
    (themeSwitch) => !themeSwitch,
    false
  );
};
