import { createGlobalStyle } from 'styled-components'
import { resetCss } from './reset'

export const GlobalStyles = createGlobalStyle`

  ${resetCss}

  @import url('https://fonts.googleapis.com/css?family=B612:400,700|BenchNine:700&display=swap');

  @font-face {
    font-family: 'beauty';
    src: url('/static/fonts/beauty.woff');
  }

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
    font-family: 'B612', sans-serif;
    font-weight: 400;
    font-size: 18px;
    overflow: hidden;
    color: #f6f5f5;
  }

  #__next {
    width: 100vw;
    height: 100vh;
  }

  :root {
    --font-headings: 'BenchNine'
  }
`

export default GlobalStyles
