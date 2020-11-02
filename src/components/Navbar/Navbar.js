import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <header className='navbar'>
      <nav className='navbar__container'>
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
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.class} href={item.url}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
