import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, mostrarTodos } from "../Redux/action";
import { orderCards} from "../Redux/action";


export function Favorites(props) {
    const dispatch = useDispatch();
    
    function ordenar  (e)  {
        const copia = [...props.myFavorites]
        if (e.target.value === "Ascendente" ) {
           
            let ascend = copia.sort((a, b) => a.id - b.id);
            dispatch(orderCards(ascend))
        
        }   
       if (e.target.value === "Descendente") {
            let descend = copia.sort((a,b) =>  b.id- a.id )
            dispatch(orderCards(descend))
        }
    }
     function filtrar   (e)  {
        if (e.target.value === "Todos") {
            dispatch(mostrarTodos())

        }
    else dispatch(filterCards(e.target.value))
     }


    return (
        <div>
            <div>
            <select onChange= {ordenar}>
                <option value="Ascendente" >Ascendente</option>
                <option value="Descendente" >Descendente</option>
            </select>
            <select onChange = {filtrar}>
                <option value="Todos">Todos</option>
                <option value="Male" >Masculino</option>
                <option value="Female" >Femenino</option>
                <option value="Genderless" >Sin genero</option>
                <option value="Unknown" >Desconocido</option>
            </select>
            </div>
         
   {props.myFavorites.map((t,i) => (<div key={i}>  
         <h2>{t.name}</h2> 
         <img  src={t.image} alt={t.name} /> 
         <h3>{t.species}</h3>
         <h3>{t.gender}</h3>
      
           
        </div>))}        
   </div>


    )




}

export function mapStateToProps(state) {
    return {
       myFavorites : state.myFavorites,
       allCharacters: state.allCharacters
    }
 }
 export default connect(mapStateToProps, null)(Favorites);