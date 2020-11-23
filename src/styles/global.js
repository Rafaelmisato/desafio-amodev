import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background-primary: #ddd;
    --text-primary: #160899;
    --text-secondary: #eb8334;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background-primary);
    color: var(--text-primary);
    font: 400 16px Roboto, sans-serif;
    width: 100%;
    height: 100%;
  }
`
