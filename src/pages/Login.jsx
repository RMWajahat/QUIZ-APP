import React, { useState } from 'react';
import '../CSS/login.css';
import { FaUserClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { email, password });
    };

    return (
        <div id="logo">
            <div className="nav">
            <h1>Navy<span>ship</span></h1>
            <Link to={'/'}><h3>Home</h3> </Link>
            <Link to="/login"> <h3>login <FaUserClock /> </h3> </Link>
            </div>
            <div className="login" >
                <form onSubmit={handleSubmit} className="login__form">
                    <h1>Log<span>in</span></h1>
                    <div className="login-input">
                        <div className="login-box">
                            <p>Email</p>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                required
                                className="login--input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login-box-1">
                            <p>Password</p>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                required
                                className="login--input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <div id="btn">
                            <button type="submit">Login</button>
                        </div>
                        <p>singnup <Link to="/signup">Sign up here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

