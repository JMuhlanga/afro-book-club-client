import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

function LoginForm({ onSubmit }) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} required />
      <button type="submit" className="login-button">Log In</button>
      
      <Link to="/register" className="register">Not Yet Registered?</Link>
    </form>
  );
}

function Login() {
  const [user, setUser] = useState(null);

  function handleSubmit(state) {
    fetch("http://apple-pie-07675.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": "no-csrf" // Add this header
      },
      body: JSON.stringify(state),
    }).then((response) => {
      if (response.ok) {
        response.json().then(data => {
          sessionStorage.setItem("userId", data.user_id);
          sessionStorage.setItem("userName", data.name); 
          setUser(data);
          window.location.href = '/';
        });
      }
    });
  }
  

  console.log(user);

  return (
    <div className = "container">
      <div className="login-page">
        <h1 className="login-title">Welcome Back</h1>
        <h3 className="login-subtitle">Please enter your details below to access the page</h3>
        <div className="login-form-container">
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
    
  );
}

export default Login;
