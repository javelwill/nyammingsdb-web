import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../useForm'
import { listApplicationDetails } from '../actions/applicationActions'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'

const ApplicationDetails = () => {
  const dispatch = useDispatch()
  const applicationDetails = useSelector((state) => state.applicationDetails)
  const { loading, error, application } = applicationDetails

  const history = useHistory()
  const { id } = useParams()

  const [showKey, setShowKey] = useState(false)

  const { values, handleChange, handleSubmit } = useForm(application)

  useEffect(() => {
    dispatch(listApplicationDetails(id))
  }, [dispatch, id ])

  const toogleShowKey = () => {
    setShowKey(!showKey)
  }

  const regenerateKey = async () => {
    console.log('regenerate key')
    // const { data } = await axios.post('/applications/reset-key', {
    //   headers: {
    //     Authorization: AUTH_TOKEN,
    //     'Content-Type': 'application/json',
    //   },
    //   data: {
    //     applicationId: id,
    //   },
    // })
  }

  return (
    <section className='application'>
      <button
        onClick={() => history.goBack()}
        className='btn btn--secondary btn--medium'
      >
        Go Back
      </button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="message message-danger">{error}</Message>
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
            <button
              className='btn btn--primary btn--medium'
              onClick={regenerateKey}
            >
              Regenerate
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default ApplicationDetails
