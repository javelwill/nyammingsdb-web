import React from 'react'
import './ApplicationCard.css'
import Button from '../Button/Button'

const ApplicationCard = ({ name, id, description }) => {
  return (
    <div className='application'>
      <p className='application__name'>{name}</p>
      <div className="description-container">
      <p className='application__description'>{description}</p>
      </div>
      <div className='application__action'>
        <Button
          text='View'
          type='btn btn--secondary btn--full'
          link={`/applications/${id}`}
        />
      </div>
    </div>
  )
}

export default ApplicationCard
