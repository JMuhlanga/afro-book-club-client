import React, { useState, useEffect } from 'react';

function User() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userId");
    if (loggedInUser) {
      fetch(`https://apple-pie-07675.herokuapp.com/users/${loggedInUser}`)
        .then(response => response.json())
        .then(data => {
          setUsername(data.username);
          setEmail(data.email);
        });
    } else {
      window.location.href = '/login';
    }
  }, []);
  

  const handleUpdate = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    const loggedInUser = sessionStorage.getItem("user_id");
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);
    formData.append('repeatPassword', repeatPassword);
  
    fetch(`https://apple-pie-07675.herokuapp.com/users/${loggedInUser}`, {
      method: 'PATCH',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([]);
        }
      });
  }
  

  const handleDelete = () => {
    const loggedInUser = sessionStorage.getItem("user_id");
    if (loggedInUser) {
        fetch(`https://apple-pie-07675.herokuapp.com/users/${loggedInUser}`, { method: 'DELETE' })
        .then(() => {
          sessionStorage.removeItem("user_id");
          window.location.href = '/login';
        });
    }
  }

  return (
    <div>
      <h1>User Profile</h1>
      {errors.map((error, index) => (
        <p key={index} style={{ color: 'red' }}>{error}</p>
      ))}
      <form onSubmit={handleUpdate}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Password Confirmation:
          <input type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
        </label>
        <br />
        <label>
          Repeat Password:
          <input type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete}>Delete Account</button>
      </form>
    </div>
  );
}

export default User;
