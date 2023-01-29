import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #ffffff;
  }
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }

  .wrapper {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
  }
`
