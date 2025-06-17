import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, SetUserPassword] = useState('');




    const navigate = useNavigate();
    const handleNavigation = (path) => navigate(path);
    const handelSignup = () => navigate('/Signup');

    const handleLogin = async (e) => {
        e.preventDefault();
        alert(

            `Email: ${userEmail}\n` +
            `Password: ${userPassword}\n`

        );

    };

    return (
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

    );


}

export default Login;