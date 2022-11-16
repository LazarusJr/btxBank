import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AccountDashboard from "./Pages/AccountDashboard";
import SignUp from "./Pages/Signup";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AccountDashboard" element={<AccountDashboard />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
