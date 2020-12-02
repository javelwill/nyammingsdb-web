import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  return (
    <section className='sidebar'>
        <ul className='sidebar__menu'>
          <li>
            <NavLink className='sidebar__menu-link' to='/dashboard' activeStyle={{color: 'var(--orange)'}}>
              Applications
            </NavLink>
          </li>
          <li>
            <NavLink className='sidebar__menu-link' to='/account' activeStyle={{color: 'var(--orange)'}}>
              Account
            </NavLink>
          </li>
          <li>
            <NavLink className='sidebar__menu-link' to='/usage' activeStyle={{color: 'var(--orange)'}}>
              API Usage
            </NavLink>
          </li>
        </ul>
    </section>
  )
}

export default Sidebar
