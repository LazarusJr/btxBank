import styled from "styled-components";

export const StyledMenu = styled.nav`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: black;
  width: 360px;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ navOpen }) =>
    navOpen ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 560px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 560px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: skyblue;
    }
  }
`;
