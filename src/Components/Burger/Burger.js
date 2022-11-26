import React from "react";
import { HamburgerMenu } from "./Burger.styled";
import { bool, func } from "prop-types";

const Burger = ({ navOpen, setNavOpen }) => {
  return (
    <HamburgerMenu navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
      <div />
      <div />
      <div />
    </HamburgerMenu>
  );
};

Burger.prototype = {
  open: bool.isRequired,
  setNavOpen: func.isRequired,
};

export default Burger;
