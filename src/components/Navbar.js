import React from "react";
import logo from "./logo4.png";

import "./Navbar.css"
const Navbar=()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.."/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacts</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

  )
}
export default Navbar;
