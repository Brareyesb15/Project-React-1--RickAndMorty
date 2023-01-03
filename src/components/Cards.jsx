import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const DivCards = styled.div `
 display:flex;
 flex-wrap: wrap;
 flex-direction: row;
 padding: 5px;
  
`

export default function Cards(props) {
   const { characters } = props;
   return (
   <DivCards>
   {characters.map((t,i) => (<Card key = {i}
      
            id={t.id}
         name={t.name}
         species={t.species}
         gender={t.gender}
         image={t.image}
         onClose={()=>props.onClose(t.id)} 
         />))}        
   </DivCards>   
   )
}