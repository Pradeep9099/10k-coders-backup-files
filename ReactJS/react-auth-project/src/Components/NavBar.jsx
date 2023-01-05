import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    console.log("logout called");
    logout();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user ? (
              <li className="nav-link" onClick={handleLogout}>Logout</li>
            ) : (
              <li >
                <Link className="nav-link" to={'/'}>Login</Link>
              </li>
            )}
             <li >
                <Link className="nav-link" to={'/products'}>Products</Link>
              </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;