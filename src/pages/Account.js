import React, { useState, useEffect } from 'react'
import accountData from '../account.js'
import useForm from '../useForm'

const Account = () => {
  const [account, setAccount] = useState({})
  const { values, handleChange, handleSubmit } = useForm(account)

  useEffect(() => {
    const fetchAccount = accountData
    setAccount(fetchAccount)
  }, [])

  return (
    <section className='account'>
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
        <div style={{ marginTop: '0.5rem' }}>
          <button type='submit' className='btn btn--primary btn--medium'>
            Update
          </button>
        </div>
      </form>
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
