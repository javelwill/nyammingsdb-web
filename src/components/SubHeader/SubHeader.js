import React from 'react'
import './SubHeader.css'

const SubHeader = ({title, text}) => {
  return (
    <section className='sub-header'>
      <div className='container container--sub-header'>
        <div>
          <h1 className='sub-header__title'>{title}</h1>
          <p className='sub-header__text'>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default SubHeader
