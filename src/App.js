import React from 'react'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import styled from "styled-components"
import Cards from "./components/Cards"

const  AppStyle = styled.div `
background-image: url(https://wallpaperaccess.com/full/5112240.jpg);
background-position: center;
background-size: cover;
background-attachment: fixed;
padding:  50px 50px 100px; 
text-align: center;
` 
const CardsStyle = styled.div `
background-image: url(https://p4.wallpaperbetter.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-preview.jpg);
background-position: center;
background-size: cover;
background-attachment: fixed;
padding:  50px 50px 100px;
`


export default function App () {
  return ( 
     <AppStyle>

  <div>
    <Cards
      characters={characters}
    />
  </div>
  
  <div>
    <SearchBar
      onSearch={(characterID) => window.alert("función en desarrollo")}
    />
  </div> 
  </AppStyle>)}