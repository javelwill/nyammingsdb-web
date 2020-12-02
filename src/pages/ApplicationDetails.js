import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import applications from '../applications'
import Button from '../components/Button/Button'

const ApplicationDetails = () => {
  const [showKey, setShowKey] = useState(false)
  const { id } = useParams()
  const application = applications.find((a) => a.applicationId === id)

  const toogleShowKey = () => {
    setShowKey(!showKey)
  }


  return (
    <div className='application__detail'>
      <p className='detail__title'>Name</p>
      <p className='detail__text'>{application.name}</p>
      <p className='detail__title'>Description</p>
      <p className='detail__text'>{application.description}</p>
      <Button text='Update' type='btn btn--primary btn--medium' />
      <hr />
      <p className='detail__title'>Application ID</p>
      <p className='detail__text'>{application.applicationId}</p>
      <p className='detail__title'>
        Application Key{' '}
        <i
          onClick={toogleShowKey}
          class={showKey ? 'far fa-eye-slash' : 'far fa-eye'}
        ></i>
      </p>
      <p className='detail__text detail__text--key'>
        {showKey
          ? application.applicationKey
          : application.applicationKey.replace(/./g, '*')}
      </p>
      <Button text='Regenerate' type='btn btn--primary btn--medium' />
    </div>
  )
}

export default ApplicationDetails
