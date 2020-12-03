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
      <form>
        <div className='form-control'>
          <label htmlFor='username'>NAME</label>
          <input type='text' name='name' required value={application.name} />
        </div>
        <div className='form-control' style={{ marginBottom: '0.5rem' }}>
          <label htmlFor='password'>DESCRIPTION</label>
          <input
            type='text'
            name='description'
            required
            value={application.applicationId}
          />
        </div>
        <Button text='Update' type='btn btn--primary btn--medium' />
      </form>
      <hr />

      <div className='form-control'>
        <label htmlFor='username'>APPLICATION ID</label>
        <input
          type='text'
          name='applicationId'
          required
          value={application.applicationId}
        />
      </div>
      <div className='form-control' style={{ marginBottom: '0.5rem' }}>
        <label htmlFor='password'>
          APPLICATION KEY{' '}
          <i
            onClick={toogleShowKey}
            class={showKey ? 'far fa-eye-slash' : 'far fa-eye'}
          ></i>
        </label>
        <input
          type={showKey ? 'text' : 'password'}
          name='applicationKey'
          required
          value={application.applicationKey}
        />
      </div>
      <Button text='Regenerate' type='btn btn--primary btn--medium' />
    </div>
  )
}

export default ApplicationDetails
