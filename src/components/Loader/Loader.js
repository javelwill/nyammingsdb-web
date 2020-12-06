import './Loader.css'
import spinner from './loader.gif'
import React from 'react'

const Loader = () => {
  return (
    <div>
      <img
        src={spinner}
        alt='loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default Loader
