import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'

function Login() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, SetUserPassword] = useState('');




    const navigate = useNavigate();
    const handleNavigation = (path) => navigate(path);
    const handelSignup = () => navigate('/Signup');
    const handleEmailUs = () => {
        window.location.href = "mailto:abdulrehmanantall420@gmail.com?subject=Inquiry";
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        alert(

            `Email: ${userEmail}\n` +
            `Password: ${userPassword}\n`

        );

    };

    return (
        <div>

            <div className='Header'>
                <header className="landing-header">
                    <div className="header-container">
                        <div className="logo" onClick={() => navigate("/")}>
                            <span className="logo-icon">🌆</span>
                            <span className="logo-text">CityPulse</span>
                        </div>
                        <nav className="nav-menu">
                            <button className="nav-link" onClick={() => navigate("/about")}>About</button>

                        </nav>
                    </div>
                </header>
            </div>
            <div className='LoginAree' onSubmit={handleLogin}>

                <div className='LoginForm'>
                    <form className=''>
                        <label for='userEmail'>Email :</label>
                        <input

                            type='email'
                            id='userEmail'
                            name='userEmail'
                            value={userEmail}
                            placeholder='Enter Your Email'
                            onChange={(e) => setUserEmail(e.target.value)}

                        />
                        <br />
                        <label for='userPassword'>Password :</label>
                        <input

                            name='userPassword'
                            id='userPassword'
                            placeholder='Enter Your Password'
                            value={userPassword}
                            type='password'
                            onChange={(e) => SetUserPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Login</button>

                    </form>
                </div >
                <a href='../PasswordReset'>Forgot Password</a>
                <br />
                <a href='../Signup'>
                    Don't have an account??
                </a>
            </div>
            <div className='footer'>
                <footer className="landing-footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>CityPulse</h3>
                            <p>Connecting communities through technology.</p>
                            <div className="social-links">
                                <a href="#" aria-label="Facebook">📘</a>
                                <a href="#" aria-label="Twitter">🐦</a>
                                <a href="#" aria-label="Instagram">📷</a>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><button onClick={() => navigate("/about")}>About Us</button></li>
                                <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
                                <li><button onClick={handleEmailUs}>Contact</button></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Legal</h3>
                            <ul>
                                <li><button>Privacy Policy</button></li>
                                <li><button>Terms of Service</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} CityPulse. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>

    );


}

export default Login;