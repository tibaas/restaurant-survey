import styled from "styled-components";

export const GlobalLoginPageContainer = styled.div`




width: 100%;
height: 100vh;

;

/* background: #F5FFFA; */

/* background: rgb(190,190,210);
background: radial-gradient(circle, rgba(190,190,210,1) 0%, rgba(148,154,233,1) 100%); */

background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 81%);


/* background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 1%, rgba(245,152,0,1) 40%); */

display: flex;
align-items: center;
justify-content: center;

img {
    height: 620px;
    width: 620px;
    
}

`

export const LoginContainer = styled.div`
position: absolute;
margin-right: 65px;
border-radius: 40px;
height: 595px;
width: 275px;
/* background: #f59800; */
background: #249a91;
box-shadow: 1px 1px 10px 7px silver;

font-family: 'Ubuntu', sans-serif;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 5rem;

h1 {
    color: #0B1B2B;
    
}

`

export const InputsContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;

color: #0B1B2B;

span {
    margin-bottom: 10px;
    font-size: 17px;
    
}

input {
    height: 2.7rem;
    width: 13rem;
    border: 0;
    border-radius: 10px;
    outline: none;
    text-indent: 15%;
    font-size: 0.875rem;
    


    &:focus{ 
        border-bottom: 3px solid #0B1B2B;
        transition: border-color 0.1s;
    }
}


button {
    margin-top: 1rem;
    height: 2.7rem;
    width: 13rem;
    border: 0;
    border-radius: 10px;
    color: #3A536B;
    outline: none;
    font-weight: bold;
    font-size: 16px;
    &:hover {
        background: #249a91;
        cursor: pointer;
        box-shadow: 1px 1px 1px 2px #fff;
        color: white;
    }
}

label { 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        position: absolute;
        margin-right: 11rem;
        margin-top: 1.8rem;
    }

}

`

export const LogoContainer = styled.div`
position: absolute;
margin-bottom: 70rem;
/* display: flex;
align-items: center;
justify-content: space-between;
gap: 5rem; */


/* h1 {
    position: absolute;
    
} */


img {
    z-index: 1;
    /* border: 1px solid red; */
    position: absolute;
    height: 45rem;
    width: 60rem;
    /* opacity: 80%; */
  
}


`