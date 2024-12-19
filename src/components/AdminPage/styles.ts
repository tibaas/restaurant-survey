import styled from "styled-components";

export const PageContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

section {


/* border: 2px solid darkcyan; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 40rem;
width: 100%;
padding: 2rem;
/* box-shadow: 3px 3px 20px #3A536B;
border-radius: 20px; */
margin-top: 2rem;


table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 16px;
      text-align: left;
      
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


button {
    margin-left: 100rem;
}


`