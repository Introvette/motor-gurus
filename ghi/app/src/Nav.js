import { NavLink } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import "./Navbar.css";
// import { Nav } from 'react-bootstrap';



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="navbar-container" style={{listStyle: "none"}}>
      <NavLink className="navbar-brand" to="/"></NavLink>
      <a className="navbar-logo"
      href="/"
      style={{color: "white", textDecoration: "none"}}

      >
          MotorGurus

          </a>

        <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color: "white"}}>
                Services
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointment/">
                    List of Service Appointments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointment/new/">
                    Create a Service Appointment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointment/history/">
                    Service Appointment History
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color: "white"}}>
                Sales
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/customers/new/">
                    Create a Customer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salespeople/new/">
                    Create a Salesman
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/autosales/">
                    Sales List
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/autosales/history/">
                    Sales History
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/autosales/new/">
                    Create a New Sale
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color: "white"}}
              >
                Inventory
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles/">
                    List of Automobiles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles/new/">
                    Create an Automobile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers/">
                    List of Manufacturers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers/new/">
                    Create a Manufacturer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models/">
                    List of Vehicle Models
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models/new/">
                    Create a Vehicle Model
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color: "white"}}
              >
                Technicians
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/technicians/new/">
                    Create a technician
                  </NavLink>
                </li>
              </ul>
            </li>
          </div>
      </nav>
  )
}

export default Nav;
