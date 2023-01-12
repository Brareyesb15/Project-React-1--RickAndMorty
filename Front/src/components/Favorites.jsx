import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, mostrarTodos } from "../Redux/action";
import { orderCards} from "../Redux/action";
import styled from "styled-components";

const Contain = styled.div `
 display:flex;
 flex-wrap: wrap;
 flex-direction: column;
 padding: 5px;
 `
const FavStyled = styled.div `
display:flex;
 flex-wrap: wrap;
 flex-direction: row;

 `
 const Cont = styled.div`
 position: relative;
 left: 20%;
 
 width: 85%;
 color: white;
 font-size: 25;
 
 `
 const Cont1 = styled.div`
 width:50%;
 `
const Cont2 = styled.div`
width: 50%;`

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
        <Cont>
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
         <Contain>
   {props.myFavorites.map((t,i) => (<FavStyled key={i}>  
        <Cont1>
            <h2>{t.name}</h2> 
            <h3>Especie: {t.species}</h3>
            <h3>Genero: {t.gender}</h3>



        </Cont1>
        <Cont2>
        <img  src={t.image} alt={t.name} />   
        </Cont2>
      
           
        </FavStyled>
        ))} 
        </Contain>       
   </div>
   </Cont>


    )




}

export function mapStateToProps(state) {
    return {
       myFavorites : state.myFavorites,
       allCharacters: state.allCharacters
    }
 }
 export default connect(mapStateToProps, null)(Favorites);