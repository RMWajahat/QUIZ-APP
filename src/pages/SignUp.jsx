import React, { useState } from 'react';
import '../CSS/SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, confirmPassword });
  };

  return (
    <div id="logo">
  <div className="nav">
            <h1>Navy<span>ship</span></h1>
            <Link to={'/'}><h3>Home</h3> </Link>
            <Link to="/login"> <h3>login</h3> </Link>
            </div>
    <div className="signup">
      <form className="signup__form" onSubmit={handleSubmit}>
        <h2>Sign <span>Up</span></h2>
        <div className="signup__input">
          <div className="signup-box">
            <p>Email</p>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter Email" 
              required 
              className="signup--input" 
            />
          </div>
          <div className="signup-box">
            <p>Password</p>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter Password" 
              required 
              className="signup--input" 
            />
          </div>
          <div className="signup-box">
            <p>Confirm Password</p>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirm Password" 
              required 
              className="signup--input" 
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to= '/login'>Log In</Link> </p>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
