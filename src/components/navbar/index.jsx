import React from 'react'
import Logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="navlinks">
        <img src={Logo} alt="logo img" className="logo" />
        <div className="links">
          <p>About</p>
          <p>SIP</p>
          <p>Studio</p>
          <p>SEEQ</p>
          <p>Platforms</p>
          <p>Initiatives</p>
          <p>More</p>
        </div>
        <div className="mobile-hamburger">
        <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className="nav-btns">
        <button className="sinc">SINC With Us</button>
        <button className="sip-btn">Apply to SIP 1.0</button>
      </div>
    </nav>
  )
}
