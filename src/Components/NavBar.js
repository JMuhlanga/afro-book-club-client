import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import Logo from "../Images/afrologo.jpg"; // import your logo image here

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const userId = sessionStorage.getItem("userId");

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="sticky-nav">
      <Link to="/" className="nav-logo-link">
        <img src={Logo} alt="Afro-Book-Club Logo" className="nav-logo" />
        <span className="nav-link-label">Afro-Book-Club</span>
      </Link>

      <div className={`nav-menu ${isNavOpen ? "nav-menu-open" : ""}`}>
        <ul>
          <li>
            <Link to="/books" onClick={handleNavClick}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/authors" onClick={handleNavClick}>
              Authors
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavClick}>
              About
            </Link>
          </li>
          {userId ? (
            <li className="dropdown">
              <Link to="/profile" onClick={handleNavClick}>
                {sessionStorage.getItem("userName")}{" "}
                <i className="fa fa-caret-down"></i>
              </Link>
              <div className="dropdown-content">
                <Link to="#" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={handleNavClick}>
                Log-In
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="nav-toggle" onClick={handleNavClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default NavBar;
