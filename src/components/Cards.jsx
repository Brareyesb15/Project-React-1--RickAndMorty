import Card from './Card';
import styled from "styled-components"



export default function Cards(props) {
   const { characters } = props;
   return (<div>

      {characters.map((t,i) => (<Card key = {i}
         name={t.name}
         species={t.species}
         gender={t.gender}
         image={t.image}
         onClose={() => window.alert('Emulamos que se cierra la card')} 
         />))}        
   </div>   
   )
}