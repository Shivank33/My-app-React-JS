import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand text-success fw-bold" to="/My-app-React-JS">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-danger fw-bold" aria-current="page" to="/My-app-React-JS">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning fw-bold" to="/about">About</Link>
                </li>
              </ul>
              <div className={`form-check form-switch col d-flex justify-content-end text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleBtn}</label>
              </div>
            </div>
          </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
// PropTypes.string tells that title must be of String type. 
// isRequired tells that title is required and cannot be empty.

// Navbar.defaultProps = {
//     title : 'This is set by default props'
// }

// defaultProps is used to set default values if values are not entered manually.