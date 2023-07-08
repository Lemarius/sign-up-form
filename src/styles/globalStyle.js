import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: sans-serif;
        background-image: url(./images/bg-intro-desktop.png);
        height: 100vh;
        background-color: #FF7979;
    }
`;

export {GlobalStyle};