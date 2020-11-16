import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header className='header'>
      <div className='container container--header'>
        <div className='header__logo'>
          <h2>NyammingsDB</h2>
          <i className='fas fa-hamburger'></i>
        </div>

        <div className='header__menu-icon' onClick={toggleMenu}>
          <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

          <ul
            className={
              menuActive ? 'header__menu header__menu--active' : 'header__menu'
            }
          >
            <li>
              <Link className='header__menu-link' to='/' onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className='header__menu-link' to='/docs' onClick={toggleMenu}>
                Docs
              </Link>
            </li>
            <li>
              <Link className='header__menu-link' to='/login' onClick={toggleMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link className='header__menu-link' to='/register' onClick={toggleMenu}>
                Register
              </Link>
            </li>
          </ul>
      </div>
    </header>
  )
}

export default Navbar
