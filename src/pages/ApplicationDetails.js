import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../useForm'
import {
  listApplicationDetails,
  updateApplication,
  resetApplicationKey,
} from '../actions/applicationActions'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'

const ApplicationDetails = () => {
  const dispatch = useDispatch()
  const applicationDetails = useSelector((state) => state.applicationDetails)
  const applicationUpdate = useSelector((state) => state.applicationUpdate)
  const applicationResetKey = useSelector((state) => state.applicationResetKey)

  const history = useHistory()
  const { id } = useParams()

  const [showKey, setShowKey] = useState(false)

  const { values, handleChange, handleSubmit } = useForm(
    applicationDetails.application,
    submit
  )

  function submit() {
    const { applicationId, name, description } = values
    dispatch(updateApplication(applicationId, name, description))
  }

  useEffect(() => {
    dispatch(listApplicationDetails(id))
  }, [dispatch])

  const toogleShowKey = () => {
    setShowKey(!showKey)
  }

  const regenerateKey = () => {
    console.log('reset key')
    dispatch(resetApplicationKey(id))
  }

  return (
    <section className='application'>
      <button
        onClick={() => history.goBack()}
        className='btn btn--secondary btn--medium'
      >
        Go Back
      </button>
      {applicationDetails.loading ? (
        <Loader />
      ) : applicationDetails.error ? (
        <Message type='message message-danger'>
          {applicationDetails.error}
        </Message>
      ) : (
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
              <div style={{ display: 'flex' }}>
                <button
                  type='submit'
                  className='btn btn--primary btn--medium'
                  disabled={applicationUpdate.loading}
                >
                  Update
                </button>
                {applicationUpdate.loading && (
                  <div class='fa-1x' style={{ marginLeft: '0.5rem' }}>
                    <i class='fas fa-sync fa-spin'></i>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className='application__credentials'>
            <div className='form-control'>
              <label htmlFor='username'>APPLICATION ID</label>
              <input
                type='text'
                name='applicationId'
                value={applicationDetails.application.applicationId}
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
                value={applicationDetails.application.applicationKey}
                disabled
              />
            </div>
            <div style={{ display: 'flex' }}>
              <button
                className='btn btn--primary btn--medium'
                onClick={regenerateKey}
                disabled={applicationResetKey.loading}
              >
                Regenerate
              </button>
              {applicationResetKey.loading && (
                <div class='fa-1x' style={{ marginLeft: '0.5rem' }}>
                  <i class='fas fa-sync fa-spin'></i>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ApplicationDetails
