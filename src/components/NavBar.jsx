import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            Frontend Bootcamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">
                  questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#info" className="nav-link">
                  info
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
