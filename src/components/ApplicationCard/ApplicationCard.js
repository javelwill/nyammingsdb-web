import React from 'react'
import './ApplicationCard.css'
import { Link } from 'react-router-dom'

const ApplicationCard = ({ name, id, description }) => {
  return (
    <div className='application'>
      <p className='application__name'>{name}</p>
      <div className='description-container'>
        <p className='application__description'>{description}</p>
      </div>
      <div className='application__action'>
        <Link
          className='btn btn--secondary btn--full'
          to={`/dashboard/applications/view/${id}`}
        >
          View
        </Link>
      </div>
    </div>
  )
}

export default ApplicationCard
