import React, { useState, useEffect } from "react";
import MainLogo from "../../Assets/logo.png";
import { ethers } from "ethers";
import { MenuItems } from "../../Data/NavMenu";
import {
  NavbarContainer,
  NavLogo,
  NavTxt,
  NavMenu,
  Logo,
  NavUl,
  Links,
  ProfileUser,
  UserIcon,
  DropDown,
  MenuItem,
  NavButton,
} from "../Navbar/NavbarStyling";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [hasMetaMask, setHasMetaMask] = useState(false);
  const [AccountAddress, setAccountAd] = useState("");

  const { ethereum } = window;

  const renderNavdrop = () => {
    if (open) {
      return (
        <DropDown>
          <MenuItem>
            <h1>top 1</h1>
            <NavButton>Connect Wallet</NavButton>
          </MenuItem>
        </DropDown>
      );
    } else {
      <DropDown>
        <MenuItem>
          <button>Install Meta Mask</button>
        </MenuItem>
      </DropDown>;
    }
  };

  return (
    <NavbarContainer>
      <NavLogo>
        <Logo src={MainLogo} />
        <NavTxt>
          <h1>BTX</h1>
        </NavTxt>
      </NavLogo>
      <NavMenu>
        <NavUl>
          <li>
            <Links to="/">Home</Links>
          </li>
          <li>
            <Links to="/Signup">SignUp</Links>
          </li>
          <li>
            <Links to="/AccountDashboard">Account Dashboard</Links>
          </li>
        </NavUl>
        <ProfileUser>
          <UserIcon onClick={() => setOpen(!open)} />
          {renderNavdrop()}
          {/* {open ? (
            <DropDown>
              <MenuItems>
                <button>Connect Wallet</button>
              </MenuItems>
            </DropDown>
          ) : (
            <></>
          )} */}
        </ProfileUser>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
