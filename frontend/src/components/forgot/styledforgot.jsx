import styled from "styled-components";

export const Principal = styled.div`
 /*  background-color: red; */
  width:100%;
  height:100vh;
  display: flex;
  flex-direction: column;
`;

export const Bienvenido = styled.section`
  background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(36,32,119,1) 100%);
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  h1{
    color:white
  }
`;

export const Wanto = styled.div`
 /*  background-color: red; */
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Imgwanto = styled.img`
width: 30%;
height: 80%;
@media (max-width: 976px){
    width: 60%;
  }
`;

export const Contaimput = styled.div`
  /* background-color:#000; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

export const Cajainpu = styled.div`
  background-color: #ffffff3b;
  box-shadow: 0px 0px 5px 5px #cecdcd88;
  display: flex;
  align-items: center;
 /*  justify-content:space-between; */
  padding: 1%;
  flex-direction: column;
  box-sizing: border-box;
  width: 25%;
  height: 100%;
  border-radius: 20px;
  transition:all 1s ease-out; ;
  &:hover{
    box-shadow: 0px 0px 5px 5px #808080;
    transition: all 0.8s ease;
  }
  @media(max-width: 976px){
    width: 90%;
  }
  ::placeholder {
  color: #000;
}
`

export const Olvidado = styled.div`
  /* background-color: black; */
  width: 80%;
  height: 30px;
  display: flex;
  margin-top: 40px;
  justify-content: center ;
`
export const Input = styled.input`
  width: 70%;
  height: 7%;
  border-radius: 7px;
  margin-top: 60px;
  border: 2px solid #00000036;
  outline-color: rgb(0,212,255);
  border-color: #242077;
  padding: 2px;
  :hover{
    border-color: rgb(0,212,255);
  }
`;

export const Botonol = styled.button`
  background-color: #242077;
  height: 10%;
  width: 30%;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 15px;
  /* margin-top: 20px; */
  border: none; 
  H2{
    color: white;
    font-weight: 500
  }
  &:hover{
    background-color: #26B2FB;
    transition: 1s;
  }
`
