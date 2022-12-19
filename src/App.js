import React, { useState, useEffect, useContext, createContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
// import ThemeContext from "./Hooks/ThemeContext";
import { light, dark } from "./Styles/ThemeSwitch.styled";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AccountDashboard from "./Pages/AccountDashboard";
import SignUp from "./Pages/Signup";
import GlobalStyle from "./Styles/GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  // const theme = useSelector((state) => state.theme.theme);
  // const themecontext = useContext(ThemeContext);
  // const [theme, setTheme] = useState(dark);
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme.dark ? dark : light}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AccountDashboard" element={<AccountDashboard />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
