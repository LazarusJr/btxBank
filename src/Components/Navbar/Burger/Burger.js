import React from "react";
import { HamburgerMenu, CloseMenu } from "../../../Styles/Burger.styled";
import { bool, func } from "prop-types";

const Burger = ({ navOpen, setNavOpen }) => {
  return (
    <>
      {navOpen ? (
        <CloseMenu navOpen={navOpen} onClick={() => setNavOpen(!navOpen)} />
      ) : (
        <HamburgerMenu navOpen={navOpen} onClick={() => setNavOpen(!navOpen)} />
      )}
    </>
    // <HamburgerMenu navOpen={navOpen} onClick={() => setNavOpen(!navOpen)} />
    /* <div />
      <div />
      <div /> */
  );
};

Burger.prototype = {
  open: bool.isRequired,
  setNavOpen: func.isRequired,
};

export default Burger;
