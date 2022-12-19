import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@300;400&family=Montserrat:ital,wght@0,600;1,600&family=Rajdhani:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
`;

export const Button = styled.button`
  color: white;
  border-radius: 5px;
  font-size: 20px;
  border-color: white;
  padding: 10px;

  &:hover {
    color: rgba(255, 165, 0, 1);
    box-shadow: 0 5px 15px rgba(240, 240, 240, 0.7);
  }
`;

export default GlobalStyle;
