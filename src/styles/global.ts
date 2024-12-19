import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    /* background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 91%); */
    background:#5F9EA0;

    @media (max-width: 540px) {
        /* background: rgb(190,190,210);
        background: radial-gradient(circle, rgba(190,190,210,1) 0%, rgba(148,154,233,1) 100%); */
        /* background: #949ae9; */
        

        background: rgb(255,255,255);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 81%);
    }
}




`