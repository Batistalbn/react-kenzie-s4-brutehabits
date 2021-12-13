import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }
  

  body{
      font-size:18px;
      text-align:center;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.586053) 0.01%, rgba(0, 0, 0, 0) 0.02%, rgba(0, 0, 0, 0.586053) 0.03%, #000000 99.99%);
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }

  
:root{
--red: #C42E2E;
--black: black;
--platinum: #E6E8E6;
--white: white;
}

button{
    cursor: pointer;
}

a {
    text-decoration: none;
  }

`;
