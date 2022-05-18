import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
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

  /* custom scrollbar */
::-webkit-scrollbar {
  border-left: 0.1rem solid #d3d9e0;
  width: 1.25rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.borderColor};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => `${props.theme.hoverColor}cc`};
  transition: background 0.2s ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.hoverColor};
}
`;

export default GlobalStyle;
