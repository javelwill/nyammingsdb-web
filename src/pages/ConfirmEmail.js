import React, { useEffect } from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { confirmEmail } from '../actions/userActions'
import { userConfirmEmailReducer } from '../reducers/usersReducers'
import useForm from '../useForm'
import Message from '../components/Message/Message'

const INITIAL_STATE = {
  email: '',
}

const ConfirmEmail = () => {
  const dispatch = useDispatch()
  const userConfirmEmail = useSelector((state) => state.userConfirmEmail)
  const { loading, emailConfirmed, error } = userConfirmEmail

  const history = useHistory()
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const token = searchParams.get('token')

  const { values, handleChange, handleSubmit } = useForm(INITIAL_STATE, submit)

  function submit() {
    const { email } = values
    // dispatch(login(email, password))
  }

  useEffect(() => {
    console.log('confirm', emailConfirmed)
    if (emailConfirmed) {
      return
    } else {
      dispatch(confirmEmail(token))
    }
  }, [emailConfirmed, history, dispatch, token])

  return (
    <>
      {emailConfirmed ? (
        <>
          <SubHeader title='Success' text='All set, go ahead and login' />
          <section className='container'>
            <Link className='btn btn--primary' to='/login'>
              Log in
            </Link>
          </section>
        </>
      ) : (
        <>
          <SubHeader title='Something Went Wrong' text='If you need another confirmation link, enter your email and click submit' />
          <section className='container'>
            <div className='login__form'>
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

                {loading && (
                  <div class='fa-1x'>
                    <i class='fas fa-sync fa-spin'></i>
                  </div>
                )}
              </form>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default ConfirmEmail
