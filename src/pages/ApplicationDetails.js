import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import applications from '../applications'
import useForm from '../useForm'

const ApplicationDetails = () => {
  const [showKey, setShowKey] = useState(false)
  const [applicationBio, setApplicationBio] = useState({})
  const [applicationCreds, setApplicationCreds] = useState({})
  const { values, handleChange, handleSubmit } = useForm(applicationBio)

  const history = useHistory()
  const { id } = useParams()

  const toogleShowKey = () => {
    setShowKey(!showKey)
  }

  const regenerateKey = () => {
    console.log('regenerate key')
  }

  useEffect(() => {
    const fetchApplication = applications.find((a) => a.applicationId === id)
    setApplicationBio({
      name: fetchApplication.name,
      description: fetchApplication.description,
    })
    setApplicationCreds({
      applicationId: fetchApplication.applicationId,
      applicationKey: fetchApplication.applicationKey,
    })
  }, [id])

  return (
    <section className='application'>
      <button onClick={() => history.goBack()} className='btn btn--secondary btn--medium'>
        Go Back
      </button>
      <div className='application__detail'>
        <div className='application__form'>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='username'>NAME</label>
              <input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control' style={{ marginBottom: '0.5rem' }}>
              <label htmlFor='password'>DESCRIPTION</label>
              <input
                type='text'
                name='description'
                value={values.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='btn btn--primary btn--medium'>
              Update
            </button>
          </form>
        </div>

        <div className='application__credentials'>
          <div className='form-control'>
            <label htmlFor='username'>APPLICATION ID</label>
            <input
              type='text'
              name='applicationId'
              value={applicationCreds.applicationId}
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
              value={applicationCreds.applicationKey}
              disabled
            />
          </div>
          <button
            className='btn btn--primary btn--medium'
            onClick={regenerateKey}
          >
            Regenerate
          </button>
        </div>
      </div>
    </section>
  )
}

export default ApplicationDetails
