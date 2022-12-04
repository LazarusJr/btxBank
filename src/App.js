import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./Hooks/ThemeContext";
import { light, dark } from "./Styles/ThemeSwitch.styled";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AccountDashboard from "./Pages/AccountDashboard";
import SignUp from "./Pages/Signup";
import GlobalStyle from "./Styles/GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <ThemeProvider>
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
