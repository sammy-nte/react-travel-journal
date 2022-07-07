import React from "react";
import logo from "../img/world.png"

export default function Navbar(){
    return(
        <div className="navbar-container">
            <img src={logo}/>
            <span>my travel journal.</span>
        </div>
    )
}