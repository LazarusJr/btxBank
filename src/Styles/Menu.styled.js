import styled from "styled-components";

export const StyledMenu = styled.nav`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
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
    z-index: 12;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 560px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
  label {
    top: 50px;
    position: relative;
    width: 100px;
    height: 55px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
  }

  label input {
    appearance: none;
  }

  label .lightSwitcher {
    position: absolute;
    top: 0%;
    left: 0;
    width: 45px;
    height: 55px;
    background: ${({ theme }) => theme.colors.switchBG};
    border: 3px solid ${({ theme }) => theme.colors.switchBorder};
    cursor: pointer;
    border-radius: 20px;
    transition: 0.5s;
    justify-content: center;
    display: flex;
  }

  label input:checked ~ span {
    left: 55px;
  }

  label img {
    filter: ${({ theme }) => theme.colors.switchIcon};
    height: 30px;
    align-self: center;
    transition: 0.5s;
  }
  label input:checked ~ span img {
    filter: ${({ theme }) => theme.colors.filter};
  }

  label p {
    display: flex;
    padding-left: 50px;
    transition: 0.3s;
    font-weight: 400;
  }

  label input:checked ~ p {
    padding-left: 0;
  }
`;
