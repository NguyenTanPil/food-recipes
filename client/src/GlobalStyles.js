import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    color: #0f1419;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
