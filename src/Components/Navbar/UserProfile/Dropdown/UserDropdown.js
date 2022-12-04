import React from "react";
import { bool } from "prop-types";
import { StyledDropDown } from "../../../../Styles/Dropdown.styled";

const UserDropdown = ({ userOpen }) => {
  return (
    <StyledDropDown userOpen={userOpen}>
      <a href="/">Profile settings</a>
      <a href="/">Payment Method</a>
      <a href="/">void void void</a>
      <hr />
      <div>
        <button>Deposit</button>
        <button>Withdraw</button>
      </div>
    </StyledDropDown>
  );
};
UserDropdown.prototype = {
  userOpen: bool.isRequired,
};

export default UserDropdown;
