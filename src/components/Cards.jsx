import React from 'react';
import Card from './Card';



export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
   {characters.map((t,i) => (<Card key = {i}
      
         detailId={t.id}
         name={t.name}
         species={t.species}
         gender={t.gender}
         image={t.image}
         onClose={()=>props.onClose(t.id)} 
         />))}        
   </div>   
   )
}