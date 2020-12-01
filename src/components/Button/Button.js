import React from 'react'
import './Button.css'

const Button = ({text, type, link}) => {
  return (
    <>
      <a href={link} className={type}>
        {text}
      </a>
    </>
  )
}

export default Button
