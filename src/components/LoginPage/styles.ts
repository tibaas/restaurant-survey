import styled from "styled-components";

export const GlobalLoginPageContainer = styled.div`

width: 100%;
height: 100vh;
background: rgba(238, 17, 34, 0.9333333333);

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
background: #e0e0e0;
box-shadow: 1px 1px 10px 7px gray;

font-family: 'Ubuntu', sans-serif;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 5rem;

h1 {
    
}

`

export const InputsContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;

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
        border-bottom: 3px solid #000;
        transition: border-color 0.1s;
    }
}


button {
    margin-top: 1rem;
    height: 2.7rem;
    width: 13rem;
    border: 0;
    border-radius: 10px;
    color: red;
    outline: none;
    font-weight: bold;
    font-size: 16px;
    &:hover {
        background: #e12;
        cursor: pointer;
        box-shadow: 1px 1px 1px 2px #000;
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