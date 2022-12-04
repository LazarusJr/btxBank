import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

export const HamburgerMenu = styled(GiHamburgerMenu)`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 13; // on top for when it goes to mobile view

  &:focus {
    outline: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.burgerHover};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const CloseMenu = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 13; // on top for when it goes to mobile view

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.closeHover};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
