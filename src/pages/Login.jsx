import React, { useState } from 'react';
import "../CSS/login.css";
import { Link } from 'react-router-dom';
const Login = () => {
    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Sign in button clicked");
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
        
            <div className="formbody container">
                <div className="form-container">
                    <p className="title">Login</p>
                    <form className="form">
                        <div className="input-group">
                            <label htmlFor="username">Email</label>
                            <input type="email" name="username" id="username" placeholder="" value={username} onChange={(e) => {
                                setUsername(e.target.value);
                            }} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" value={password} onChange={(e) => {
                                setPassword(e.target.value);
                            }} required />

                        </div>
                        <button className="sign" onClick={handleSignup}>Sign in</button>
                    </form>

                    <p className="signup">
                        Don't have an account?
                        <Link rel="noopener noreferrer" to="/signup" className="actionbtn">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Login
