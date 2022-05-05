import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

  * {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`;

export default GlobalStyles;
