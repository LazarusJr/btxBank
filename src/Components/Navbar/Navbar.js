import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../../Assets/logo.png";
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
  HamburgerMenu,
} from "../Navbar/NavbarStyling";
import Burger from "./../Burger/Burger";
import MenuItems from "./../Menu/Menu";
import { useClickOutsideNav } from "../../Hooks/navClickOff";

const Navbar = () => {
  const node = useRef();
  useClickOutsideNav(node, () => setNavOpen(false));
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => !navOpen;

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
      <div ref={node}>
        <Burger navOpen={navOpen} setNavOpen={setNavOpen} />
        <MenuItems navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
      <NavLogo>
        <Logo src={MainLogo} />
        <NavTxt>
          <h1>BTX</h1>
        </NavTxt>
      </NavLogo>
      <NavMenu>
        {/* <NavUl>
          <li>
            <Links to="/">Home</Links>
          </li>
          <li>
            <Links to="/Signup">SignUp</Links>
          </li>
          <li>
            <Links to="/AccountDashboard">Account Dashboard</Links>
          </li>
        </NavUl> */}
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
