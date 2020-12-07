import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [menuActive, setMenuActive] = useState(false)

  const handleLogout = () => {
    console.log('logout')
    dispatch(logout())
  }

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
            <NavLink
              exact
              activeClassName='header__menu-link--active '
              className='header__menu-link'
              to='/'
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='header__menu-link--active '
              className='header__menu-link'
              to='/docs'
              onClick={toggleMenu}
            >
              Docs
            </NavLink>
          </li>
          {userInfo ? (
            <>
              <li>
                <NavLink
                  activeClassName='header__menu-link--active '
                  className='header__menu-link'
                  to='/dashboard'
                  onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <a
                  activeClassName='header__menu-link--active '
                  className='header__menu-link'
                  to='/login'
                  style={{ cursor: 'pointer' }}
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  activeClassName='header__menu-link--active '
                  className='header__menu-link'
                  to='/login'
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='header__menu-link--active '
                  className='header__menu-link'
                  to='/register'
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
