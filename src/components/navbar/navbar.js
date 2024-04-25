import "./navbar.css";
import React from "react";
import logo from "../../images/lb logo.PNG"


export default function NavbarComponent (){
    return (
        <div className="navbarContainer">
            <div className="logoContainer">
                <img src={logo} className="logo" alt="logo"/>
            </div>
        </div>
    )
}