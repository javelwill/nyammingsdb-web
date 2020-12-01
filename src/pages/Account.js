import React from 'react'
import account from '../account.js'

const Account = () => {
  return (
    <div>
      <form action=''>
        <div className=''>
          <label for='email'>Email</label>
          <input type='text' name='email' value={account.email} />
        </div>
        <div className=''>
          <label for='firstName'>First Name</label>
          <input type='text' name='firstName' value={account.firstName} />
        </div>
        <div className=''>
          <label for='lastName'>Last Name</label>
          <input type='text' name='lastName' value={account.lastName} />
        </div>
        <div className=''>
          <label for='address'>Address</label>
          <input type='text' name='address' value={account.address} />
        </div>
        <div className=''>
          <label for='postCode'>Postcode</label>
          <input type='text' name='postCode' value={account.postCode} />
        </div>
        <div className=''>
          <label for='city'>City</label>
          <input type='text' name='city' value={account.city} />
        </div>
        <div className=''>
          <label for='state'>State</label>
          <input type='text' name='state' value={account.state} />
        </div>
        <div className=''>
          <label for='country'>Country</label>
          <input type='text' name='country' value={account.country} />
        </div>
        <div className=''>
          <label for='company'>Company</label>
          <input type='text' name='company' value={account.company} />
        </div>
        <div className=''>
          <label for='website'>Website</label>
          <input type='text' name='website' value={account.website} />
        </div>
      </form>
    </div>
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
