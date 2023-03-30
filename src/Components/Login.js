import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

function Login(){
    let [user, setUser] = useState([]);
    const [state, setState] = ({
        email:"",
        password:""
    });
    

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(state),
        }).then((response)=>{
            if(response.ok){
                form.reset();

                Window.location.href ='/home';
            }
        })
    }

    function handleChange(e) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
    }

    return(
        <div>
            <h2>Welcome Back</h2>
            <h3>Kindly Enter your details below in order to access the Page</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="user@email.com" value={state.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="password*" value={state.password} onChange={handleChange} required />
                <button type="submit" className="login-button">Log - In</button>
                <Link to="/forgotpass" className="forgot-password">Forgot PIN?</Link>
            </form>
        </div>
    );
}

export default Login;