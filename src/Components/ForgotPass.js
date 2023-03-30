import React, { useState } from "react";
import { Link } from 'react-router-dom';

function ForgotPass() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${email}`);
    // Add your logic to send a reset password email
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Remember your password? <Link to="/login">Log in</Link></p>
    </div>
  );
}

export default ForgotPass;
