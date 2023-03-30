import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
  const userId = sessionStorage.getItem("userId");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {userId ? (
          <li>
            <Link to="/profile">{sessionStorage.getItem("userName")}</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Log-In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
