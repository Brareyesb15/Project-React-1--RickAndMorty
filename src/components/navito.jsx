import React from "react";
import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom"
import Card from "./Card";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
background-color: black;
width: 300px;
height: 5000px;

float:left;
`
const NavLinkStyled = styled(NavLink)`
float:left;
`



export default function Navito(props) {
   const location = useLocation()

    return (
            <NavBar>
                <NavLinkStyled to={"/Home"}>Home</NavLinkStyled>
                <br></br>
                <NavLinkStyled to ={"/Favorites"}>Favoritos</NavLinkStyled>
                <br></br>
                <NavLinkStyled to={"/About"} >About</NavLinkStyled>
                <br></br>
                {location.pathname !== "/" ? <NavLinkStyled   to={"/"}>Login</NavLinkStyled> : null}
                <br></br>
                <SearchBar onSearch={(props.onSearch)}/>

               
           </NavBar>
          
    
    
    )
}