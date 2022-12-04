import styled from "styled-components";

export const StyledDropDown = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background: ${({ theme }) => theme.colors.background};
  width: 300px;
  height: 250px;
  text-align: left;
  position: absolute;
  top: 12.2%;
  right: 10px;
  transition: transform 0.1s ease-in-out;
  transform: ${({ userOpen }) =>
    userOpen ? "translateY(0)" : "translateY(-100%)"};
  /* "translateY(-100%)" */

  @media (max-width: 560px) {
    width: 300px;
    height: 220px;
  }

  button {
    color: ${({ theme }) => theme.colors.button};

    &:hover {
      cursor: pointer;
      border-color: ${({ theme }) => theme.colors.hover};
    }
  }

  a {
    font-size: 13px;
    text-transform: uppercase;
    padding: 10px;
    /* font-weight: bold; */
    text-align: center;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 560px) {
      font-size: 10px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
      cursor: pointer;
    }
  }

  hr {
    width: 100%;
    border-top: 3px solid ${({ theme }) => theme.colors.dropdownline};
    position: relative;
    top: 20px;
  }

  button {
    position: relative;
    top: 30px;
    font-size: 18px;
    height: 30px;
    width: 120px;
    margin: 10px;
    display: inline-block;
    border-radius: 20px;
    border: 2px solid white;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    background-color: transparent;
  }
`;
