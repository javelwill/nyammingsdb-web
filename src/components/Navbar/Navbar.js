import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <h1>NyammingsDB</h1>
          <i className='fas fa-hamburger'></i>
        </div>

        <div className='navbar__menu-icon' onClick={toggleMenu}>
          <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul
          className={
            menuActive ? 'navbar__menu navbar__menu--active' : 'navbar__menu'
          }
        >
          <li>
            <a className='navbar__link' href='#' onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#' onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#' onClick={toggleMenu}>
              Docs
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#' onClick={toggleMenu}>
              Login
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#' onClick={toggleMenu}>
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
