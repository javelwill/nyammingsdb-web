import React from 'react'
import './ApplicationCard.css'
import Button from '../Button/Button'

const ApplicationCard = ({ name, id, description }) => {
  return (
    <div className='application'>
      <p className='application__name'>{name}</p>
      <p className='application__description'>{description}</p>
      <div className='application__actions'>
        <div className='application__action'>
          <Button
            text='View'
            type='btn btn--secondary'
            link={`/applications/${id}`}
          />
        </div>
        <div className='application__action'>
          <Button
            text='Edit'
            type='btn btn--secondary'
            link={`/applications/${id}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard
