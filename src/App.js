import React from 'react'
import styled from "styled-components"
import Cards from "./components/Cards"
import Navito from './components/navito.jsx'
import { useState } from 'react' 
import {Routes,Route} from "react-router-dom";
import About from './components/About'
import Details from "./components/Details"
import Form from './components/Form'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const  AppStyle = styled.div `
background-image: url(https://wallpaperaccess.com/full/5112240.jpg);
background-position: center;
background-size: cover;
background-attachment: fixed;
padding:  50px 50px 2000px; 
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
   

const [characters,setCharacters] = useState([]);
const location = useLocation()
const [access,setAccess] = useState(false)
let username = "brareyes115@gmail.com"
let password= "115951";
const navigate = useNavigate()

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

  function onSearch(characters) {
    fetch(`https://rickandmortyapi.com/api/character/${characters}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });  
 }
 const onClose =(id) =>{
  setCharacters(characters.filter((char) => char.id !== id));
 };


return ( 
   <AppStyle>
      <div>
         {location.pathname === "/" ? null : <Navito onSearch={onSearch}></Navito> }
            <Routes>
               <Route path="/Home" element={
                  <Cards
                     characters={characters}
                     onClose={onClose} />}>Home
               </Route>
               <Route path="/About" element={<About />}></Route>
               <Route path="/detail/:detailId" element={<Details />}></Route>
               <Route path= "/" element = {<Form login={login}/>}></Route>
               </Routes>
      </div>
   
   </AppStyle>)}