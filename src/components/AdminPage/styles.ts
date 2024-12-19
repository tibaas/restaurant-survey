import styled from "styled-components";

export const PageContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

section {

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 40rem;
width: 100%;
padding: 2rem;
margin-top: 2rem;


table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 16px;
      text-align: left;

      button {
        height: 20px;
        width: 20px;
        border:1px solid black;
        background: transparent;
        cursor: pointer;
      }
      
    }
    td {


      button {
        color: #fff;
        display: none;
        position: absolute;
        margin-left: 15px;
        margin-top: 3px;
        appearance: none;


      }



    }
      
    th, td {
      border: 1px solid #000;
      padding: 10px;
      
    }
    th {
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 0%);
      color: #fff;
      font-weight: bold;
    } 
    tr:hover {
      background: teal;
        button {
          display:inline;
        }    
    }


  }

`

export const HeaderContainer = styled.div`
height: 5rem;
width: 100%;
padding: 1rem;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(36,154,145,0.989233193277311) 51%);
display: flex;
align-items: center;
  h2 { 
    color: #fff;
}


button {
    margin-left: 100rem;
}


`