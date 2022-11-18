import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AccountDashboard from "./Pages/AccountDashboard";
import SignUp from "./Pages/Signup";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";
import "./utils/interact";

const App = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("no connection to the network");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {}, []);

  function addSmartContractListener() {}

  function addWalletListener() {}

  const connectWalletPressed = async () => {};

  const onUpdatePressed = async () => {};

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
