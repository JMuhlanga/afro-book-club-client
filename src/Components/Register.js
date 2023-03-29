import React, { useState } from 'react';

function Register(){
    return(
        <div className="registration-form">
            <h2>Welcome to our Afro-Book-Club-Ke</h2>

            <h3>Kindly provide your details Below</h3>

            <form>

                <input type="text" name="firstName" placeholder='First Name' />
                <input type="text" name="lastName" placeholder='Last Name'/>
                <input type="text" name="email" placeholder='Email*' />
                <input type="" name="" placeholder=''/>
                <input type="password" name="password" placeholder="Password*" />
                <input type="password" name="repeatPassword" placeholder="Repeat Password*" />
                <button type="submit" >Register</button>
                
            </form>

            <p>Already a member? <a href='/login'>Log-In</a></p>

        </div>
    );
}

export default Register;