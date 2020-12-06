import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../useForm'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGQzeWF3ZEBnbWFpbC5jb20iLCJleHAiOjE2MDgwNzUxMDl9.HYZMCHo0wme3ioeZjvyDzUmk2PkbUZEa_QlgX8tP-Mdo1uD_-V-5SFtu60K0BA82PiEephgDTHTTVjeBA1FlPg'

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

  const regenerateKey = async () => {
    console.log('regenerate key')
    const { data } = await axios.post('/applications/reset-key', {
      headers: {
        Authorization: AUTH_TOKEN,
        'Content-Type': 'application/json',
      },
      data: {
        'applicationId': id,
      },
    })
  }

  useEffect(() => {
    const fetchApplication = async () => {
      const { data } = await axios.get(`/applications/${id}`, {
        headers: { Authorization: AUTH_TOKEN },
        data: {},
      })

      setApplicationBio({ name: data.name, description: data.description })
      setApplicationCreds({
        applicationId: data.applicationId,
        applicationKey: data.applicationKey,
      })
    }

    fetchApplication()
  }, [id])

  return (
    <section className='application'>
      <button
        onClick={() => history.goBack()}
        className='btn btn--secondary btn--medium'
      >
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
