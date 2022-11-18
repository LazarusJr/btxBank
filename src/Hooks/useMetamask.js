import React, { useState, useEffect, useMemo, useCallback } from "react";
import { injected, InjectedConnector } from "../Components/Wallet/Injected";
import { useWeb3React } from "@web3-react/core";

export const MetaMaskContext = React.createContext(null);

export const MetaMaskProvider = ({ children }) => {
  const { activate, account, library, connector, active, deactivate } =
    useWeb3React();
  const [isActive, setActive] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const handleIsActive = useCallback(() => {
    console.log("app is connected with metamask", active);
    setActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive;
  }, [handleIsActive]);

  useEffect(() => {
    connect().then((val) => {
      setLoading(false);
    });
  }, []);

  const connect = async () => {
    console.log("connecting to Metamask...");
    try {
      await activate(injected);
    } catch (error) {
      console.log("error on connecting: ", error);
    }
  };

  const disconnect = async () => {
    console.log("Disconnecting wallet from App..");
    try {
      await deactivate();
    } catch (error) {
      console.log("error on disconnect", error);
    }
  };

  const values = useMemo(() => {
    isActive, account, isLoading, connect, disconnect;
  }, [isActive, isLoading]);

  return (
    <MetaMaskContext.Provider value={values}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default function useMetaMask() {
  const context = React.useContext(MetaMaskContext);

  if (context === undefined) {
    throw new error(
      "useMetaMask hook must be used with a MetaMaskProvider component"
    );
  }

  return context;
}
