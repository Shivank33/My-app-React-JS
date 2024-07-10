import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">Contact</a>
                </li> */}
              </ul>
              <div className={`form-check form-switch col d-flex justify-content-end text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleBtn}</label>
              </div>

              {/* Tried radio button to change different color modes below */}
              {/* <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">{props.toggleBtn}</label>
              </div>
              <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">{props.toggleBtn}</label>
              </div>
              <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" htmlFor="inlineRadio3">{props.toggleBtn}</label>
              </div>
              <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                <label className="form-check-label" htmlFor="inlineRadio4">{props.toggleBtn}</label>
              </div> */}

              {/* Search box below */}
              {/* <form className="d-flex" role="search">
                <input className="form-control mx-5" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}

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