import React from "react";
import isologo from "../../images/isologo png.png";
import "./mainWindow.css";
import { useState } from "react";

export default function MainWindowComponent (){

    const [SignRegister, setSignRegister] = useState(true)

    const handdleInUp = (e) => {
        e.preventDefault()
        console.log(SignRegister)
        setSignRegister(!SignRegister)
    }

    return(
        <section className="mainWindowContainer">
            <div className="isologoContainer">
                <img src={isologo} alt="isologo" className="isologo" />    
            </div>
            <div className="formContainer">
                <form className="formLogRegister">
                    <div className="signInContainer">
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>
                            SIGN IN
                        </button>
                    </div>
                    <div className={SignRegister===true? "registerCoverOn" : "registerCoverOnAnimation"}>
                        <div className={SignRegister===true? "welcome" : "welcomeAnimation"}>
                            <h1>Welcome back!</h1>
                            <p>We are always happy to see you around here</p>
                            <button onClick={handdleInUp}>SIGN IN</button>
                        </div>
                        <div className="helloFriend">
                            <h1>Hello Friend!</h1>
                            <p>Register on LifeBook to enjoy all the website features</p>
                            <button onClick={handdleInUp}>SIGN UP</button>
                        </div>
                    </div>
                    <div className="signUpContainer">
                        <h1>Create Account</h1>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <button>
                            SIGN UP
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

