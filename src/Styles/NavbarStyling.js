import styled from "styled-components";

export const NavbarContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavLogo = styled.div`
  justify-content: center;
  display: flex;
  transition: filter 300ms;
  &:hover {
    cursor: pointer;
  }
`;

export const NavTxt = styled.div`
  padding-top: 25px;
  font-size: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.logoHover};
  }
`;

export const NavMenu = styled.menu`
  font-size: 1.1rem;
  display: inline-flex;
  justify-content: center;
  list-style: none;
`;

export const Logo = styled.img`
  margin-top: 18px;
  height: auto;
  width: 50px;
  justify-content: center;
  display: flex;
  margin-left: 10px;
`;

export const ProfileUser = styled.div`
  margin-right: 20px;
  justify-content: center;
  display: flex;
`;
