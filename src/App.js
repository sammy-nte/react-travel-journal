import React from "react"
import Location from "./components/Location"
import Navbar from "./components/Navbar"
import Data from "./data"
import "./style.css"

export default function App(){
    const location = Data.map(item => {
        return (
            <Location
            key = {item.title}
            item = {item}
            />
        )
    }) 
    return(
        <div id="body">
            <Navbar />
            {location}
        </div>
    )
}