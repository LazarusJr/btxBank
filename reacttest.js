import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";

const MainSect = () => {
  const [haveMetaMask, setHaveMetaMask] = useState(true); //to check if user has metamask on browser
  const [warningText, warnedText] = useState("you dont have metamask enabled!"); // gives a warning message if the user hasnt got metamask enabled on the browser
  const [isConnected, setIsConnected] = useState(false); // check if metamask has connected with the users account
  const [accountAddress, setAccountAddress] = useState(""); // shows the users addres
  const [accountBalance, setAccountBalance] = useState(""); // this is to display the users balance
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setHaveMetaMask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setIsConnected(true);
      setAccountBalance(bal);
    } catch (error) {
      setIsConnected(false);
    }
  };

  useEffect(() => {
    const checkMetaMaskAvaliable = () => {
      if (!ethereum) {
        setHaveMetaMask(false);
        warnedText();
      } else {
        setHaveMetaMask(true);
        warnedText("you have metamask enabled");
      }
    };
    checkMetaMaskAvaliable();
  });

  return (
    <MainContainer>
      <header className="App-header">
        {haveMetaMask ? (
          <div className="App-header">
            {isConnected ? (
              <h1 id="heading">
                Account Address
                <p>{accountAddress}</p>
                <h3>your balance</h3>
                <p>{accountBalance}</p>
              </h1>
            ) : (
              <h1>You are need to be connected</h1>
            )}
            {isConnected ? (
              <h1>well done for connecting</h1>
            ) : (
              <StyledButton onClick={connectWallet}>Connect</StyledButton>
            )}
          </div>
        ) : (
          <p id="paragraph">{warningText}</p>
        )}
      </header>
    </MainContainer>
  );
};

export default MainSect;

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
  }
`;

const MainContainer = styled.div``;
