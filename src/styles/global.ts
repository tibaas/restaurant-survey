import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;

    @media (max-width: 540px) {
        background: rgb(190,190,210);
        background: radial-gradient(circle, rgba(190,190,210,1) 0%, rgba(148,154,233,1) 100%);
    }
}




`