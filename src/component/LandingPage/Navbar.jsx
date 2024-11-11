import React from 'react'
import { NavLink } from "react-router-dom"
import spfaccLogo from "../image/spfacc_logo.png"

function NavBar() {
  return (
    <div className='nav-wrapper'>
      {/* NAVBAR */}
      <nav className='lg-container'>
          <div className='logo-container'>
            <img src={spfaccLogo} alt="spfaccLogo" />
          </div>

          <ul className="navlink">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/service">Terms of Service</NavLink>
            </li>
            <button>Register</button>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar
