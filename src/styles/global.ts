import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
  .button {
    background-color: #D03135;
    color: #ffffff;
    border-radius: 3px;
    padding: 23px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  
   
  }

  .button:hover{
    border: 0;
    opacity: 0.8;
    background-color: #D03135;
    color: #ffffff;
  }

  .constructionPage{
    text-align: center;

  }

  .constructionPage h1 {
    color: #D03135;
    font-weight: bold;
  }
`
