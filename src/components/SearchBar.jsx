import React from "react";
import { useState } from "react";
import styled from "styled-components";


const BarStyled = styled.a`
float:left;`

const ButtonStyle = styled.button `
 background-color: #72e1f0;
    color: #050505;
    font-size: 10px;
    border-radius: 10px;
    padding: 10px 20px;
`
const inputStyle = styled.input `
font-size : 5px;

`

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

   function cambiarCharacter (e) {
      setCharacter(e.target.value)
   }
   
   return ( 
      <BarStyled>
      <input type="search" name="search" id="" onChange={cambiarCharacter}></input>  
      <br></br>
      <ButtonStyle onClick={() => props.onSearch(character)}>Agregar</ButtonStyle> 
      </BarStyled>
   );
}