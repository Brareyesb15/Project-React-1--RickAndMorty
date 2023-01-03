import React from "react";
import { connect } from "react-redux";


export function Favorites(props) {

    return (
        <div>
            <p>Pruebita</p>
   {props.myFavorites.map((t,i) => (<div>  
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
       myFavorites : state.myFavorites
    }
 }
 export default connect(mapStateToProps, null)(Favorites);