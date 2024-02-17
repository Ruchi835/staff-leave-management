// Login.js

import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
    .then(res => {
      console.log(res.data);
      // Check if login was successful based on the response
      if (res.data === 'Login Successful') {
        // Redirect to the home page
        navigate('/home');
      } else {
        console.log('Login failed');
      }
    })
       
      .catch(err => console.log(err));
  }
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome! Login to continue</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
