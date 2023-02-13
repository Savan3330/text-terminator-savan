import React from 'react'
import PropTypes from 'prop-types'
import  './custom.css';





export default function Navbar(props) {
  

 
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li> */}
            <li className="nav-item">
              <div className="form-check">
                <input className="form-check-input nav-link customRadioCss" type="radio" name="flexRadioDefault" id="radio1" value='blue' onClick={props.bgonClick}  onChange={props.handleBackground}/>
                  <label className="form-check-label nav-link" htmlFor="radio1">
                   blue |
                  </label>
              </div>
            </li>
            <li className="nav-item">
              <div className="form-check">
                <input className="form-check-input nav-link customRadioCss" type="radio" name="flexRadioDefault" id="radio2" value='red' onClick={props.bgonClick}  onChange={props.handleBackground}/>
                  <label className="form-check-label nav-link" htmlFor="radio2">
                   red |
                  </label>
              </div>
            </li>
            <li className="nav-item">
              <div className="form-check">
                <input className="form-check-input nav-link customRadioCss" type="radio" name="flexRadioDefault" id="radio3" value='pink' onClick={props.bgonClick}  onChange={props.handleBackground}/>
                  <label className="form-check-label nav-link" htmlFor="radio3">
                   pink |
                  </label>
              </div>
            </li>
          

          </ul>




          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'} mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string }
// Navbar.defaultProps = {
//     title:'default props',
//     about:'default about'
// }