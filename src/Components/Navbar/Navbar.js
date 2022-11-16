import React from "react";
import MainLogo from "../../Assets/logo.png";
import {
  NavbarContainer,
  NavLogo,
  NavTxt,
  NavMenu,
  Nav,
  Logo,
  NavUl,
  Links,
  ProfileUser,
  UserIcon,
} from "../Navbar/NavbarStyling";

const Navbar = () => {
  return (
    <>
      <Nav>
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
              <UserIcon />
            </ProfileUser>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
