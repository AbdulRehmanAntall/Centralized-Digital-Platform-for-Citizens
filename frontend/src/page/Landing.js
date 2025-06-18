import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Landing.css';


function Landing() {


    const handlemailus = () => {
        Window.location.href = "mailto:abdulrehmanantall420@gmail.com?subject=Inquiry";

    }
    return (


        <div className="landing-main-container">

            <header className="landing-header">
                <ul>
                    <li className="nav-left"> <a href="../">CityPulse</a></li>
                    <li > <a href="../">About</a></li>
                    <li> <a href="../Signup">SignUp</a></li>
                    <li > <a href="../Login">Login</a></li>

                </ul>

            </header>


            <div className="landing-content">
                <div className="features" >

                    <h1>Welcome to CityPulse!</h1>
                    <p>Stay connected with your city — events, updates, and alerts at your fingertips.</p>
                </div>

                <div className="cards">

                    <div className="card">
                        <div className="card-inner">
                            <div className="card1-front">
                                <h1>Community Forum </h1>
                            </div>

                            <div className="card1-back">
                                <p>Connect and discuss with locals about city issues.</p>
                            </div>

                        </div>


                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card2-front">
                                <h1>Live City Updates</h1>
                            </div>

                            <div className="card2-back">
                                <p>Get instant updates on traffic, events, and emergencies.</p>
                            </div>

                        </div>


                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card3-front">
                                <h1>Local Events</h1>
                            </div>

                            <div className="card3-back">
                                <p>Discover what's happening near you, from concerts to job fairs.</p>
                            </div>

                        </div>



                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card4-front">
                                <h1> Safety Alerts</h1>
                            </div>

                            <div className="card4-back">
                                <p> Receive emergency and crime alerts in real-time.</p>
                            </div>

                        </div>



                    </div>
                </div>




            </div>

            <footer className="landing-footer">
                <p>&copy; 2025 CityPulse. All rights reserved.</p>
                <p>Follow us:

                    <a href="#"> Facebook </a>|
                    <a href="#"> Twitter </a>|
                    <a href="#"> Instagram </a>

                </p>
            </footer>
        </div >



    )
        ;




}

export default Landing;