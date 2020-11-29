import React from 'react'
import './SubHeader.css'

const SubHeader = () => {
  return (
    <section className='sub-header'>
      <div className='container container--sub-header'>
        <div>
          <h1 className='sub-header__title'>Docs</h1>
          <p className='sub-header__text'>Learn how to setup and use the API</p>
        </div>
      </div>
    </section>
  )
}

export default SubHeader
