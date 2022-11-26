import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as UserP } from "../../Assets/Navbar/userP.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 10px; */
  /* background-color: rgba(135, 206, 235, 0.2); */
  height: 100px;
  background-color: black;
`;

export const NavLogo = styled.div`
  justify-content: center;
  display: flex;
  transition: filter 300ms;
  &:hover {
    filter: brightness(7);
    cursor: pointer;
  }
`;

export const NavTxt = styled.div`
  padding-top: 25px;
  font-size: 15px;
`;

export const NavMenu = styled.menu`
  font-size: 1.1rem;
  display: inline-flex;
  justify-content: center;
  list-style: none;
`;

export const NavUl = styled.ul`
  list-style: none;
  text-decoration: none;
  justify-content: space-evenly;
  display: flex;
  margin-right: 50px;
  margin-top: 15px;
`;

export const Logo = styled.img`
  margin-top: 18px;
  height: auto;
  width: 50px;
  justify-content: center;
  display: flex;
  margin-left: 10px;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
  transition: filter 300ms;

  &:hover {
    filter: brightness(5);
    text-shadow: 0 5px 15px rgba(255, 255, 255, 2);
  }
`;

export const ProfileUser = styled.div`
  margin-right: 20px;
  justify-content: center;
  display: flex;
`;

export const UserIcon = styled(UserP)`
  height: auto;
  width: 35px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin-top: 10px;
  margin-right: 10px;
  transition: filter 300ms;

  &:hover {
    border-radius: 50px;
    /* box-shadow: 0 5px 15px rgba(255, 255, 255, 2); */
    cursor: pointer;
    /* filter: brightness(0.2); */
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 70px;
  width: 250px;
  height: 250px;
  transform: translate(-50%);
  /* padding: 1rem; */
  background-color: #121314;
  border-radius: 15px;
  overflow: hidden;
  z-index: 888;
  /* border-top-right-radius: 120px; */
`;

export const MenuItem = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0.5;
  transition: background-color 0.2s;
  h1 {
    font-size: 10px;
  }
`;

export const NavButton = styled.button`
  height: 60px;
  width: 320px;
  background-color: #383c40;
  transition: filter(30.2s);
  color: white;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  border: 0;

  &:hover {
    cursor: pointer;
    filter: brightness(2);
  }
`;

export const HamburgerMenu = styled(GiHamburgerMenu)``;

export const NavItems = styled.menu``;
