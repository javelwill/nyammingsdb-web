import React from 'react'
import './Showcase.css'

function Showcase() {
  return (
    <section className='showcase'>
      <div className='container container--showcase'>
        <div className='showcase__section'>
          <h1 className='showcase__section-title'>
            Jamaica's Food Establishments API
          </h1>
          <p className='showcase__section-text'>
            Access data on food establishments located in Jamaica through an
            easy to use API for free. Build web apps, mobile apps or integrate
            into other applications.
          </p>
          <a href='#' className='btn btn--outline'>
            START USING THE API
          </a>
        </div>
        <div className='showcase__form'>
          <h3>API Registration</h3>
          <p>Sign up to access our data with a free API key.</p>
          <a href='#' className='btn btn-full'>
            Sign up
          </a>
          <hr />
          <h3>Already a user? Log in</h3>
          <form>
            <div className='form-control'>
              <label htmlFor='username'>USERNAME OR EMAIL</label>
              <input
                type='text'
                name='username'
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='password'>PASSWORD</label>
              <input
                type='password'
                name='password'
                required
              />
            </div>
            <input className='btn' type='submit' value='Log in' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Showcase
