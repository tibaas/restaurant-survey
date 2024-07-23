import styled from "styled-components";

export const GlobalContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;


`

export const GlobalContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 38rem;
max-height: 50rem;
padding: 2rem;
box-shadow: 1px 1px 10px gray;
border-radius: 20px;
margin-top: 6rem; 
background: silver;


form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}


`

export const ImageContainer = styled.div`

img {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


`