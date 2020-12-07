import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { login } from '../actions/userActions'
import useForm from '../useForm'
import Message from '../components/Message/Message'

const INITIAL_STATE = {
  email: '',
  password: '',
}

const Home = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const history = useHistory()

  const { values, handleChange, handleSubmit } = useForm(INITIAL_STATE, submit)

  function submit() {
    const { email, password } = values
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      history.push('/dashboard')
    }
  }, [history, userInfo])

  return (
    <>
      <section className='showcase'>
        <div className='container container--showcase'>
          <div className='showcase__section'>
            <h1 className='showcase__section-title'>
              Jamaica's Food Establishments API
            </h1>
            <p className='showcase__section-text'>
              Access data on food establishments located across Jamaica through
              an easy to use API for free. Build web apps, mobile apps or
              integrate into other applications.
            </p>
            <Link className='btn btn--primary btn--outline' to='/docs'>
              LEARN MORE
            </Link>
          </div>
          <div className='showcase__form'>
            <h3>API Registration</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              Sign up to access our data with a free API key.
            </p>
            <Link className='btn btn--primary btn--full' to='/register'>
              Register
            </Link>
            <hr />
            <h3>Already a user? Log in</h3>
            <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <label htmlFor='username'>EMAIL</label>
                <input
                  type='text'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-control' style={{ marginBottom: '0.5rem' }}>
                <label htmlFor='password'>PASSWORD</label>
                <input
                  type='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className='btn btn--primary'>
                Log in
              </button>
              {loading && (
                <div class='fa-1x'>
                  <i class='fas fa-sync fa-spin'></i>
                </div>
              )}

              {error && (
                <Message type='message message-danger'>{error}</Message>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className='stats'>
        <div className='container container--stats'>
          <div className='stats__all'>
            <div className='stats__single'>
              <i className='stats__icon fas fa-paper-plane fa-3x'></i>
              <h3 className='stats__number'>15,000</h3>
              <p className='stats__title'>Requests Served</p>
            </div>
            <div className='stats__single'>
              <i className='stats__icon fas fa-user-friends fa-3x'></i>
              <h3 className='stats__number'>200</h3>
              <p className='stats__title'>Users</p>
            </div>
            <div className='stats__single'>
              <i className='stats__icon fas fa-utensils fa-3x'></i>
              <h3 className='stats__number'>100</h3>
              <p className='stats__title'>Food Establishments</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
