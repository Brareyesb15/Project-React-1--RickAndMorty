import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import { deleteFavs, addFavs } from "../Redux/action"
import { connect } from "react-redux"
import { useEffect } from "react"

const CardStyle = styled.div`

`
const H2Style = styled.h2 ` 

`
const ImgStyle = styled.img`

`
const H3Style= styled.h3 ``

export function Card(props) {
   const [isFav, setIsFav] = React.useState(false)

   const handleFavorite = () => {
      if (isFav === true) {setIsFav(false); return props.deleteFavs(props.id)}
      else {setIsFav(true); props.addFavs(props)}
      }

      useEffect(() => {
         props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [props.myFavorites]);

   return (
      
      <CardStyle>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
          <button onClick={props.onClose}>X</button>
          <Link to={`/detail/${props.id}`} >
         <H2Style>{props.name}</H2Style> 
         </Link>
         <ImgStyle  src={props.image} alt={props.name} /> 
         <H3Style>{props.species}</H3Style>
         <H3Style>{props.gender}</H3Style>
       
         
      </CardStyle>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavs : (props) => {dispatch(addFavs(props))},
      deleteFavs : (id) => {dispatch(deleteFavs(id))}
   }
}
export function mapStateToProps(state) {
   return {
      myFavorites : state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
