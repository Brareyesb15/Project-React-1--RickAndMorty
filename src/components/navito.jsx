import React from "react";
import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom"
import Card from "./Card";
import { useLocation } from "react-router-dom";



export default function Navito(props) {
   const location = useLocation()

    return (
            <div>
                <NavLink to={"/Home"}>Home</NavLink>
                <br></br>
                <NavLink to={"/About"} >About</NavLink>
                <br></br>
                
                {location.pathname !== "/" ? <NavLink   to={"/"}>Login</NavLink> : null}
                <SearchBar onSearch={(props.onSearch)}/>

               
           </div>
          
    
    
    )
}