import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
  const userId = sessionStorage.getItem("userId");

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }

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
          <li className="dropdown">
            <Link to="/profile">{sessionStorage.getItem("userName")} <i className="fa fa-caret-down"></i></Link>
            <div className="dropdown-content">
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </div>
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
