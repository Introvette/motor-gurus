import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Add Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Add Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/autosales/new">New Sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">Add Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/new">Add Sales Person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/autosales/history">Sales History by Sales Person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/autosales">Sales List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technician">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointment/new">Make Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointment">Appointment List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointment/history">Service History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">Manufactuer List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">Manufactuer Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Models List</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
