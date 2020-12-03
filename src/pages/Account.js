import React from 'react'
import account from '../account.js'
import Button from '../components/Button/Button.js'

const Account = () => {
  return (
    <section className="account">
      <form action='' className="account__form">
        <div className='form-control'>
          <label for='email'>Email</label>
          <input type='text' name='email' value={account.email} />
        </div>
        <div className='form-control'>
          <label for='firstName'>First Name</label>
          <input type='text' name='firstName' value={account.firstName} />
        </div>
        <div className='form-control'>
          <label for='lastName'>Last Name</label>
          <input type='text' name='lastName' value={account.lastName} />
        </div>
        <div className='form-control'>
          <label for='address'>Address</label>
          <input type='text' name='address' value={account.address} />
        </div>
        <div className='form-control'>
          <label for='postCode'>Postcode</label>
          <input type='text' name='postCode' value={account.postCode} />
        </div>
        <div className='form-control'>
          <label for='city'>City</label>
          <input type='text' name='city' value={account.city} />
        </div>
        <div className='form-control'>
          <label for='state'>State</label>
          <input type='text' name='state' value={account.state} />
        </div>
        <div className='form-control'>
          <label for='country'>Country</label>
          <input type='text' name='country' value={account.country} />
        </div>
        <div className='form-control'>
          <label for='company'>Company</label>
          <input type='text' name='company' value={account.company} />
        </div>
        <div className='form-control'>
          <label for='website'>Website</label>
          <input type='text' name='website' value={account.website} />
        </div>
        <div style={{marginTop:"0.5rem"}}>
        <Button text='Update' type='btn btn--primary btn--medium' />
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
