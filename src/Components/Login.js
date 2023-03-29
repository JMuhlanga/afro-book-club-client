import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div>
            <h2>Welcome Back</h2>
            <h3>Kindly Enter your details below in order to access the Page</h3>
            <form>
                <input type="email" name="email" placeholder="user@email.com" required />
                <input type="password" name="password" placeholder="password*" required />
                <button type="submit" className="login-button">Log - In</button>
                <Link to="/forgotpass" className="forgot-password">Forgot PIN?</Link>
            </form>
        </div>
    );
}

export default Login;