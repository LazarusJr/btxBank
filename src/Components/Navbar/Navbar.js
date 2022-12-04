import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../../Assets/logo.png";
import {
  NavbarContainer,
  NavLogo,
  NavTxt,
  NavMenu,
  Logo,
  ProfileUser,
} from "../../Styles/NavbarStyling";
import Burger from "../Navbar/Burger/Burger";
import MenuItems from "../Navbar/Menu/Menu";
import { useClickOutsideNav } from "../../Hooks/navClickOff";
import { usePclickOff } from "../../Hooks/userPclickoff";
import UserProfile from "../Navbar/UserProfile/UserProfile";
import UserDropdown from "./UserProfile/Dropdown/UserDropdown";

/*
FIXME:
* - the user dropdown needs fixing with the z-index
* - need to sort out the buttons to make sure all is working properly
*/

/*
TODO:
*/

const Navbar = () => {
  const menuNode = useRef();
  const userIconNode = useRef();
  useClickOutsideNav(menuNode, () => setNavOpen(false));
  const [navOpen, setNavOpen] = useState(false);
  const [userOpen, setuserOpen] = useState(false);
  usePclickOff(userIconNode, () => setuserOpen(false));

  return (
    <NavbarContainer>
      <div ref={menuNode}>
        <Burger navOpen={navOpen} setNavOpen={setNavOpen} />
        <MenuItems navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
      <NavLogo>
        {/* <Logo src={MainLogo} /> */}
        <NavTxt>
          <h1>BTX</h1>
        </NavTxt>
      </NavLogo>
      <NavMenu>
        <ProfileUser ref={userIconNode}>
          <UserProfile userOpen={userOpen} setuserOpen={setuserOpen} />
          <UserDropdown userOpen={userOpen} setuserOpen={setuserOpen} />
        </ProfileUser>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
