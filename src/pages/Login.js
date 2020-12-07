import React, { useEffect } from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { login } from '../actions/userActions'
import useForm from '../useForm'
import Message from '../components/Message/Message'

const INITIAL_STATE = {
  email: '',
  password: '',
}

const Login = () => {
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
      <SubHeader title='Login' text='' />
      <section className='container'>
        <div className='login__form'>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='username'>USERNAME OR EMAIL</label>
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
            <button className='btn btn--primary' to='/dashboard'>
              Log in
            </button>
            {loading && (
              <div class='fa-1x'>
                <i class='fas fa-sync fa-spin'></i>
              </div>
            )}

            {error && <Message type='message message-danger'>{error}</Message>}
          </form>
          <p>Are you new here? </p>
          <Link to='/register'>Register</Link>
        </div>
      </section>
    </>
  )
}

export default Login
