import React, { useState } from 'react';
import '../Styles/Register.css';

function Register(){

    const [formValues, setFormValues] = useState({
        username:"",
        email:"",
        password:"",
        password_confirmation:""
    });
    

    function handleChange(e) {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("https://apple-pie-07675.herokuapp.com/signup",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ user: formValues }),
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

                    <input type="text" name="username" placeholder='User Name' value={formValues.username} onChange={handleChange} />
                    <input type="text" name="email" placeholder='Email*' value={formValues.email} onChange={handleChange}  />
                    <input type="password" name="password" placeholder="Password*" value={formValues.password} onChange={handleChange}  />
                    <input type="password" name="password_confirmation" placeholder="Repeat Password*" value={formValues.password_confirmation} onChange={handleChange} />


                    <button type="submit" >Register</button>
                    
                </form>

                <p>Already a member? <a href='/login'>Log-In</a></p>

            </div>
        </div>
        
    );
}

export default Register;
