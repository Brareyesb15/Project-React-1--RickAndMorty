import React from "react";
import { useState } from "react";
import styled from "styled-components";


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
   const cambiarCharacter = (e) =>{
      const{value}= e.target;
      setCharacter(value)

   }
   return ( // imput es elemento como h1 ,, todo lo que este adentro atributo como type /search // onclick es un atributo button // onSearch es un metodo 
      <div>
         <input type="search" name="search" id="" onChange={cambiarCharacter}></input>  
      <ButtonStyle onClick={() => props.onSearch(character)}>Agregar</ButtonStyle> 
      </div>
   );
}