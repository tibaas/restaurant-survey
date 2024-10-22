import styled from "styled-components";

export const GlobalContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
height: 100vh;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 81%);


`

export const GlobalContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 38rem;
max-height: 50rem;
padding: 2rem;
box-shadow: 3px 3px 20px #3A536B;
border-radius: 20px;
/* background: ${props => props.theme['containerBackground']}; */

/* background: #949ae9; */
/* background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 81%); */


form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}


@media (max-width:540px ) {
    width: 30rem;
    max-height: 50rem;
    margin-top: 2rem;

    box-shadow: none;
}


`

// export const ImageContainer = styled.div`

// img {
//     position: fixed;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }


// @media (max-width:540px ) {
//     img {
//         display: none;
        
//     }
// }
// `

