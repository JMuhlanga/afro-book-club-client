import React, { useState } from 'react';
import '../Styles/Register.css';

function Register(){

    const [state, setState] = useState({
        username:"",
        email:"",
        password:"",
        repeatPassword:""
    });

    function handleChange(e) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
    }

    function handleRepeatPasswordChange(e) {
        setState({
          ...state,
          repeatPassword: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/users",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username: state.username,
                email: state.email,
                password: state.password,
                password_confirmation: state.repeatPassword
            }),
        }).then((response)=>{
            if(response.ok){
                window.location.href ='/login';
            }
        })
    }

    return(
        <div id="reg" className="container">
            <div className="registration-form">
                <h2>Welcome to our Afro-Book-Club-Ke</h2>

                <h3>Kindly provide your details Below</h3>

                <form onSubmit={handleSubmit}>

                    <input type="text" name="username" placeholder='User Name' value={state.username} onChange={handleChange} />
                    <input type="text" name="email" placeholder='Email*' value={state.email} onChange={handleChange}  />
                    <input type="password" name="password" placeholder="Password*" value={state.password} onChange={handleChange}  />
                    <input type="password" name="repeatPassword" placeholder="Repeat Password*" value={state.repeatPassword} onChange={handleRepeatPasswordChange} />
                    <button type="submit" >Register</button>
                    
                </form>

                <p>Already a member? <a href='/login'>Log-In</a></p>

            </div>
        </div>
        
    );
}

export default Register;
