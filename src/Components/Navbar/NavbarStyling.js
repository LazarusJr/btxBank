import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Nav = styled.div`
  height: 110px;
  width: 100%;
  background-color: black;
`;

export const NavLogo = styled.div`
  justify-content: center;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const NavTxt = styled.text`
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

  &:hover {
    text-shadow: 0 5px 15px rgba(255, 255, 255, 2);
  }
`;

export const ProfileUser = styled.div`
  margin-right: 20px;
  justify-content: center;
  display: flex;
`;

export const UserIcon = styled(FaUserCircle)`
  height: auto;
  width: 25px;
  justify-content: center;
  margin-top: 12px;

  &:hover {
    text-shadow: 0 5px 15px rgba(255, 255, 255 7);
    cursor: pointer;
  }
`;
