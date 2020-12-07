import React from 'react'
import SubHeader from '../components/SubHeader/SubHeader'

const RegisterSuccess = () => {
  return (
    <>
      <SubHeader title='Success' text='Thank you for registering' />
      <section className='container'>
        <p>
          We have sent you an email asking you to confirm your email address.
          Please click the link in the email to confirm your registration.
        </p>
        <p>(If you don't see the email please check your spam box as well)</p>
      </section>
    </>
  )
}

export default RegisterSuccess
