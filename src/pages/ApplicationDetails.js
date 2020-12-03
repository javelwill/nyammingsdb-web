import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import applications from '../applications'
import Button from '../components/Button/Button'

const ApplicationDetails = () => {
  const [showKey, setShowKey] = useState(false)
  const [application, setApplication] = useState({})

  const { id } = useParams()

  const toogleShowKey = () => {
    setShowKey(!showKey)
  }

  const handleFormChange = (event) => {
    setApplication((prevApplication) => ({
      ...prevApplication,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    const fetchApplication = applications.find((a) => a.applicationId === id)
    setApplication(fetchApplication)
  }, [])

  return (
    <section className='application'>
      <Button
        text='Go Back'
        link='/dashboard'
        type='btn btn--secondary btn--medium'
      />
      <div className='application__detail'>
        <div className='application__form'>
          <form>
            <div className='form-control'>
              <label htmlFor='username'>NAME</label>
              <input
                type='text'
                name='name'
                value={application.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className='form-control' style={{ marginBottom: '0.5rem' }}>
              <label htmlFor='password'>DESCRIPTION</label>
              <input
                type='text'
                name='description'
                value={application.description}
                onChange={handleFormChange}
                required
              />
            </div>
            <Button text='Update' type='btn btn--primary btn--medium' />
          </form>
        </div>

        <div className='application__credentials'>
          <div className='form-control'>
            <label htmlFor='username'>APPLICATION ID</label>
            <input
              type='text'
              name='applicationId'
              value={application.applicationId}
              disabled
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
              value={application.applicationKey}
              disabled
            />
          </div>
          <Button text='Regenerate' type='btn btn--primary btn--medium' />
        </div>
      </div>
    </section>
  )
}

export default ApplicationDetails
