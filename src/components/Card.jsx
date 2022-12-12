import styled from "styled-components"

const CardStyle = styled.div`
color: #ffffff; 
font-size: 18px; 
font-weight: 400; 
text-align: center;  
margin: 0 0 25px; 
overflow: hidden; 
padding: 20px; 
border-radius: 35px 0px 35px 0px; 
-moz-border-radius: 35px 0px 35px 0px; 
-webkit-border-radius: 35px 0px 35px 0px; 
border: 2px solid #5878ca;
height: 500px;
  width: 100%;


`
const H2Style = styled.h2 `
color: black;  
font-size: 18px; 
font-weight: 400; 
text-align: center;  
margin: 0 0 25px; 
overflow: hidden; 
padding: 20px; 
background-color: white;
border-radius: 35px 0px 35px 0px; 
-moz-border-radius: 35px 0px 35px 0px; 
-webkit-border-radius: 35px 0px 35px 0px; 
border: 2px solid #5878ca; 

`
const ImgStyle = styled.img`
width : 35%;
`
const H3Style= styled.h3 `
color : black ;`

export default function Card(props) {
   return (
      <CardStyle>
          <button onClick={props.onClose}>X</button>
         <H2Style>{props.name}</H2Style>
         <ImgStyle  src={props.image} alt="" /> 
         <H3Style>{props.species}</H3Style>
         <H3Style>{props.gender}</H3Style>
       
         
      </CardStyle>
   );
}