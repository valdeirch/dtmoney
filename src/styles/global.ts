import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 73.75%; // 14
    }

    @media (max-width: 720) {
      font-size: 87.5%; // 14
    }
  }

  // REM = 1rem = font-size

  body {
    background: var(---background);
    -webkit-font-smoothing: antialised;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }
`