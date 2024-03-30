import React, { useState } from 'react';
import "../CSS/SignUp.css";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Sign in button clicked");
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className="formbody">
        <div className="form-container">
          <p className="title">Signup</p>
          <form className="form">
          <div className="input-group">
              <label htmlFor="password">Username</label>
              <input type="password" name="password" id="password" placeholder="" value={confirmpassword} onChange={(e) => {
                setConfirmPassword(e.target.value);
              }} />
              </div>

            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input type="email" name="username" id="username" placeholder="" value={username} onChange={(e) => {
                setUsername(e.target.value);
              }} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="" value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} />

            </div>
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password" id="password" placeholder="" value={confirmpassword} onChange={(e) => {
                setConfirmPassword(e.target.value);
              }} />

            </div>
            <button className="sign" onClick={handleSignup}>Sign Up</button>
          </form>

          <p className="signup">
            Already have an account?
            <Link rel="noopener noreferrer" to="/login" className="">
              Sign in
            </Link>
          </p>
        </div>
      </div>

    </>
  )
}

export default SignUp
