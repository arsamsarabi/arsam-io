import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset";

export const GlobalStyles = createGlobalStyle`

  ${resetCss}

  @import url('https://fonts.googleapis.com/css?family=Courier+Prime|Raleway:400,700&display=swap');

  #app {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 18px;
    overflow: hidden;
    color: #333333;
  }
`;

export default GlobalStyles;
