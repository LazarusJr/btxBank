import { bool } from "prop-types";
import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ navOpen }) => {
  return (
    <StyledMenu navOpen={navOpen}>
      <a href="/">Home</a>
      <a href="/Signup">SignUp</a>
      <a href="/AccountDashboard">Account Dashboard</a>
    </StyledMenu>
  );
};
Menu.prototype = {
  open: bool.isRequired,
};
export default Menu;
