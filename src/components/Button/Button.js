import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const Button = ({text, type, link}) => {
  return (
    <div>
      <Link to={link} className={type}>
        {text}
      </Link>
    </div>
  )
}

export default Button
