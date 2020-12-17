import React, { useEffect } from 'react'
import useForm from '../useForm'
import { useDispatch, useSelector } from 'react-redux'
import { getAccount, updateAccount } from '../actions/userActions'
import Loader from '../components/Loader/Loader'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Account = () => {
  const dispatch = useDispatch()
  const userAccount = useSelector((state) => state.userAccount)
  const userAccountUpdate = useSelector((state) => state.updateAccount)

  const { values, handleChange, handleSubmit } = useForm(
    userAccount.account,
    submit
  )

  function submit() {
    dispatch(updateAccount(values))
  }

  useEffect(() => {
    dispatch(getAccount())
  }, [dispatch])

  return (
    <section className='account'>
      <ToastContainer />

      {userAccount.loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className='account__form'>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              value={values.address}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='postCode'>Postcode</label>
            <input
              type='text'
              name='postCode'
              value={values.postCode}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='city'
              value={values.city}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='state'>State</label>
            <input
              type='text'
              name='state'
              value={values.state}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              name='country'
              value={values.country}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              value={values.company}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='website'>Website</label>
            <input
              type='text'
              name='website'
              value={values.website}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: '0.5rem', display: 'flex' }}>
            <button type='submit' className='btn btn--primary btn--medium'>
              Update
            </button>
            {userAccountUpdate.loading && (
              <div class='fa-1x' style={{ marginLeft: '0.5rem' }}>
                <i class='fas fa-sync fa-spin'></i>
              </div>
            )}
          </div>
        </form>
      )}
    </section>
  )
}

export default Account

// const account = {
//   email: 'javelawilson@gmail.com',
//   firstName: 'javel',
//   lastName: 'wilson',
//   address: '1st Street',
//   postCode: '876',
//   city: 'Kingston',
//   state: 'St. Andrew',
//   country: 'Jamaica',
//   company: 'JTech',
//   website: 'https://www.nyammingdb.com',
// }
