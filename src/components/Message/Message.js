import './Message.css'
import React from 'react'

const Message = ({ type, children }) => {
  return <div className={type}>{children}</div>
}

export default Message
