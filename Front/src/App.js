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
import Encabezado from "./components/Encabezado"
import Favorites from "./components/Favorites"
import Home from './components/Home'



const  AppStyle = styled.div `
background-image: url(https://i.pinimg.com/originals/75/05/b8/7505b82d6702785ce20ebedce92c63ad.png);
   background-position: center;
   background-size: cover;
   background-attachment: fixed;
padding:  0px 0px 2000px; 
display:flex;
flex-direction: row;

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


  function onSearch(num) {
    fetch(`http://localhost:3001/rickandmorty/character/${num}`)
       .then((response) => response.json())
       .then((data) => {
          if(characters.find(function(elemento) {return elemento.id == num? true : false}))   {
            window.alert ("Personaje ya encontrado")
     
          }
          else if (data.name ) {
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
     
         {location.pathname === "/" ? null : <Navito onSearch={onSearch}></Navito> }
      
       
             <Routes>
               <Route path="/Home" element={
                  <Home
                     characters={characters}
                     onClose={onClose} />}>
               </Route>
               <Route path="/Favorites" element={<Favorites />}></Route>
               <Route path="/About" element={<About />}></Route>
               <Route path="/detail/:id" element={<Details />}></Route> 
               <Route path= "/" element = {<Form login={login}/>}></Route>
               </Routes>
         

   
   </AppStyle>)}