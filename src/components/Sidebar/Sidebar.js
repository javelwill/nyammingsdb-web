import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  return (
    <section className='sidebar'>
        <ul className='sidebar__menu'>
          <li>
            <Link className='sidebar__menu-link' to='/dashboard'>
              Applications
            </Link>
          </li>
          <li>
            <Link className='sidebar__menu-link' to='/account'>
              Account
            </Link>
          </li>
          <li>
            <Link className='sidebar__menu-link' to='/usage'>
              API Usage
            </Link>
          </li>
        </ul>
    </section>
  )
}

export default Sidebar
