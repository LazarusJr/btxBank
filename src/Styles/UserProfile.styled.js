import styled from "styled-components";
import { ReactComponent as userIcon } from "../Assets/Navbar/userP.svg";

export const UserProfileIcon = styled(userIcon)`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  &:focus {
    outline: none;
  }
`;
